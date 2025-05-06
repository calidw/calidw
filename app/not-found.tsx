import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Page Not Found | Cali Door & Window',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base font-semibold text-red-600 uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white text-base font-semibold rounded-md shadow-sm hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go back home
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-300 text-base font-semibold rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition-colors duration-200"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 