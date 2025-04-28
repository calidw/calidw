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
                            123 Window Lane<br />
                            San Francisco, CA 94103
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

                    {/* Social Media Links (Optional) */}
                    <div className="mt-12 pt-8 border-t border-slate-700/50">
                      <h3 className="font-medium text-lg text-white mb-4">
                        Follow Us
                      </h3>
                      <div className="flex space-x-4">
                        {['facebook', 'instagram', 'linkedin', 'pinterest'].map((platform) => (
                          <a 
                            key={platform}
                            href={`https://${platform}.com/calidw`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-700 hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center"
                            aria-label={platform}
                          >
                            <span className="sr-only">{platform}</span>
                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              {platform === 'facebook' && <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>}
                              {platform === 'instagram' && <path d="M12 2c2.717 0 3.056.01 4.122.06 1.65.075 3.037.613 4.206 1.782 1.169 1.169 1.707 2.556 1.782 4.206.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.075 1.65-.613 3.037-1.782 4.206-1.169 1.169-2.556 1.707-4.206 1.782-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.65-.075-3.037-.613-4.206-1.782-1.169-1.169-1.707-2.556-1.782-4.206-.05-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.075-1.65.613-3.037 1.782-4.206C4.841 2.673 6.228 2.135 7.878 2.06 8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>}
                              {platform === 'linkedin' && <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/>}
                              {platform === 'pinterest' && <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>}
                            </svg>
                          </a>
                        ))}
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
                Come experience our premium doors and windows in person. Our expert staff is ready to assist you.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 relative">
              {/* Replace with your actual map embed */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <p className="text-slate-500 p-8 text-center">
                  Map embed would go here - Google Maps, Mapbox, etc.<br />
                  <span className="text-sm">(Interactive map showing our showroom location at 123 Window Lane, San Francisco, CA 94103)</span>
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