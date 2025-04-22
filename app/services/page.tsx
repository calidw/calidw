import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Installation Services | Cali Door & Window',
  description: 'Professional installation services for all types of windows and doors, ensuring energy efficiency and California Title 24 compliance.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Professional Installation Services
              </h1>
              <p className="text-lg lg:text-xl text-amber-100 leading-relaxed">
                We offer expert installation for all our windows and doors, ensuring optimal energy efficiency, California Title 24 compliance, and lasting performance.
              </p>
            </div>
          </div>
        </section>

        {/* What We Install Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
              What We Install
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Windows</h3>
                <p className="text-gray-700 mb-4">
                  We provide professional installation for all window styles:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                  <li>Double Hung Windows</li>
                  <li>Casement Windows</li>
                  <li>Picture Windows</li>
                  <li>Awning Windows</li>
                  <li>Slider Windows</li>
                  <li>Bay/Bow Windows</li>
                </ul>
                <p className="text-gray-700">
                  Proper installation ensures your windows maintain their energy efficiency and meet California Title 24 requirements.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Doors</h3>
                <p className="text-gray-700 mb-4">
                  Our installation services cover all door types:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                  <li>Interior Doors</li>
                  <li>French Patio Doors</li>
                  <li>Sliding Patio Doors</li>
                  <li>Exterior Entry Doors</li>
                </ul>
                <p className="text-gray-700">
                  Expert installation ensures your doors operate smoothly while maintaining energy efficiency and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process - Refined Steps */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:mb-16">
              Our Installation Process
            </h2>
            <div className="relative">
              {/* Optional: Connecting line between steps */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
              
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 text-xl font-semibold ring-4 ring-white shadow">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consult & Measure</h3>
                  <p className="text-gray-600 text-sm">We assess your needs and take precise measurements to ensure proper fit.</p>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 text-xl font-semibold ring-4 ring-white shadow">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prepare & Protect</h3>
                  <p className="text-gray-600 text-sm">We carefully prepare the work area, protecting your home from dust and debris.</p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 text-xl font-semibold ring-4 ring-white shadow">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Installation</h3>
                  <p className="text-gray-600 text-sm">Our certified technicians install with precision, ensuring energy efficiency.</p>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="bg-amber-600 text-white rounded-full h-16 w-16 flex items-center justify-center mb-4 text-xl font-semibold ring-4 ring-white shadow">
                    4
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cleanup & Inspect</h3>
                  <p className="text-gray-600 text-sm">We clean the work area and perform a final inspection to ensure perfect operation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Service Area */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Why Choose Our Installation Team?
                </h2>
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li className="flex items-start"><svg className="flex-shrink-0 h-6 w-6 text-amber-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-6l-6.5 6.5" /></svg><span><span className="font-semibold">Certified Professionals:</span> Our installers are highly trained, experienced, and fully certified.</span></li>
                  <li className="flex items-start"><svg className="flex-shrink-0 h-6 w-6 text-amber-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-6l-6.5 6.5" /></svg><span><span className="font-semibold">Energy Efficiency Focus:</span> We ensure your windows and doors meet California Title 24 requirements.</span></li>
                  <li className="flex items-start"><svg className="flex-shrink-0 h-6 w-6 text-amber-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-6l-6.5 6.5" /></svg><span><span className="font-semibold">Respect for Your Home:</span> We treat your property with care and ensure minimal disruption.</span></li>
                  <li className="flex items-start"><svg className="flex-shrink-0 h-6 w-6 text-amber-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-6l-6.5 6.5" /></svg><span><span className="font-semibold">Workmanship Guarantee:</span> We stand behind our work with a comprehensive guarantee.</span></li>
                </ul>
                <Link
                  href="/contact?form=quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white text-base font-semibold rounded-md shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Get an Installation Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Service Area - Placeholder Image/Map */}
              <div className="relative h-80 lg:h-full rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/service-area-placeholder.jpg"
                  alt="Map showing Cali Door & Window service area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Our Service Area</h3>
                    <p className="text-amber-100">
                      Proudly serving the San Francisco Bay Area, including [List Key Cities/Counties]. 
                      Contact us to confirm service in your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready for Professional Installation?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experts handle your door and window installation project. Proper installation ensures optimal energy efficiency and compliance with California Title 24 requirements.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}