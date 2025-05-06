import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Cali Doors and Windows',
  description: 'Learn about how Cali Doors and Windows collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Privacy Policy
            </h1>
            
            <div className="text-slate-600">
              <p className="text-lg mb-8">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <p className="mb-6">
                At Cali Doors and Windows, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, contact us, or purchase our products and services.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">1. Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and mailing address when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact us through our website forms</li>
                <li>Request a quote or consultation</li>
                <li>Purchase our products or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our website</li>
              </ul>
              
              <p>
                <strong>Technical Information:</strong> We may automatically collect certain technical information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages you visit and how you interact with them</li>
                <li>Referring website or source</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, operate, and maintain our services</li>
                <li>Process and fulfill your orders</li>
                <li>Schedule installations and service appointments</li>
                <li>Communicate with you regarding your inquiries or orders</li>
                <li>Send you promotional materials and newsletters (with your consent)</li>
                <li>Improve our website and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>To our trusted business partners who assist us in operating our website and serving you</li>
                <li>To comply with legal requirements and enforce our policies</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a business transfer, such as a merger or acquisition</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">7. Children&apos;s Privacy</h2>
              <p>
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated &quot;Last Updated&quot; date.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">9. California Privacy Rights</h2>
              <p>
                California residents may have additional rights under the California Consumer Privacy Act (CCPA) regarding their personal information. For more information on your California privacy rights, please contact us.
              </p>
              
              <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> Sales@calidw.com<br />
                <strong>Phone:</strong> (818) 282-3437<br />
                <strong>Address:</strong> 3746 Foothill Boulevard #1254, Glendale, CA 91214
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 