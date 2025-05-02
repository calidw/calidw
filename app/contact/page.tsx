import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Contact Us | Cali Door & Window',
  description: 'Get in touch with our team for inquiries, quotes, or information about our door and window products and services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 -mt-40 -mr-40 rounded-full bg-amber-100 blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 -mb-40 -ml-40 rounded-full bg-slate-100 blur-3xl opacity-30 pointer-events-none"></div>
        
        <section className="relative z-10 py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We&apos;re here to answer your questions and help you find the perfect doors and windows for your project. 
                Reach out using the form below or contact us directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              <div className="lg:col-span-3">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
                  {/* Decorative accent for the form box */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400"></div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 md:p-10 h-full text-white relative overflow-hidden">
                  {/* Decorative blur elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-slate-700/50 blur-2xl"></div>
                  
                  <div className="relative">
                    <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                    
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mr-4">
                          <MapPinIcon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-white mb-2">
                            Visit Our Showroom
                          </h3>
                          <address className="not-italic text-slate-300 leading-relaxed">
                            3746 Foothill Boulevard #1254<br />
                            Glendale, CA 91214
                          </address>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mr-4">
                          <ClockIcon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-white mb-2">
                            Showroom Hours
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mr-4">
                          <PhoneIcon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-white mb-2">
                            Call Us
                          </h3>
                          <p className="text-slate-300">
                            <a href="tel:8182823437" className="hover:text-amber-300 transition-colors duration-200">
                              (818) 282-3437
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mr-4">
                          <EnvelopeIcon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-white mb-2">
                            Email Us
                          </h3>
                          <p className="text-slate-300">
                            <a href="mailto:Sales@calidw.com" className="hover:text-amber-300 transition-colors duration-200">
                              Sales@calidw.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Showroom</h2>
              <p className="text-lg text-slate-600">
                Come experience our premium doors and windows. Our expert staff is ready to assist you in our Glendale location.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 relative">
              {/* Replace with your actual map embed */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500 p-8 text-center">
                  Map embed would go here - Google Maps, Mapbox, etc.<br />
                  <span className="text-sm">(Interactive map showing our showroom location at 3746 Foothill Boulevard #1254, Glendale, CA 91214)</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 