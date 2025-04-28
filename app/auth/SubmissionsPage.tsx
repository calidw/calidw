import { useEffect, useState } from 'react';
import { sanityClient } from '../../lib/sanity';
import { useRouter } from 'next/navigation';

interface Submission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  formType: 'quote' | 'contact' | 'testimonial';
  productInterest?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'completed';
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated (could use a more secure method in production)
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      setIsLoading(false);
    }
  }, []);

  const authenticate = () => {
    // In a real app, this would be a secure auth endpoint
    // This is just a simple example - NEVER use this in production
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      fetchSubmissions();
    } else {
      setError('Invalid password');
    }
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const data = await sanityClient.fetch(`
        *[_type == "formSubmission"] | order(createdAt desc) {
          _id,
          name,
          email,
          phone,
          message,
          formType,
          productInterest,
          createdAt,
          status
        }
      `);
      setSubmissions(data);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions');
    }
    setIsLoading(false);
  };

  const updateSubmissionStatus = async (id: string, status: 'new' | 'contacted' | 'completed') => {
    try {
      await sanityClient.patch(id).set({ status }).commit();
      // Refresh submissions after update
      fetchSubmissions();
    } catch (err) {
      console.error('Error updating submission:', err);
      setError('Failed to update submission');
    }
  };

  const filterSubmissions = () => {
    if (filter === 'all') return submissions;
    return submissions.filter(sub => sub.formType === filter);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="p-8 rounded-xl bg-white shadow-md">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="p-8 rounded-xl bg-white shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md"
              placeholder="Enter admin password"
            />
          </div>
          <button
            onClick={authenticate}
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Form Submissions</h1>
        <button
          onClick={() => router.push('/')}
          className="bg-slate-200 px-4 py-2 rounded-md hover:bg-slate-300 transition-colors"
        >
          Back to Website
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-1">Filter by Form Type</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-md"
        >
          <option value="all">All Submissions</option>
          <option value="quote">Quote Requests</option>
          <option value="contact">Contact Forms</option>
          <option value="testimonial">Testimonial Submissions</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Form Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filterSubmissions().map((submission) => (
                <tr key={submission._id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">{submission.name}</td>
                  <td className="px-6 py-4">
                    <div>{submission.email}</div>
                    <div className="text-sm text-slate-500">{submission.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      submission.formType === 'quote' ? 'bg-amber-100 text-amber-800' :
                      submission.formType === 'testimonial' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {submission.formType}
                    </span>
                    {submission.productInterest && (
                      <div className="text-xs text-slate-500 mt-1">{submission.productInterest}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(submission.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      submission.status === 'new' ? 'bg-red-100 text-red-800' :
                      submission.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateSubmissionStatus(submission._id, 'contacted')}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        Mark Contacted
                      </button>
                      <button
                        onClick={() => updateSubmissionStatus(submission._id, 'completed')}
                        className="text-green-600 hover:text-green-800"
                      >
                        Mark Completed
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {submissions.length === 0 && (
        <div className="text-center py-8 text-slate-500">
          No submissions found.
        </div>
      )}
    </div>
  );
} 