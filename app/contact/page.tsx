import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfoDisplay from '../components/ContactInfoDisplay';
import { getContactInfo, type ContactInfo } from '../lib/sanity';

export const metadata = {
  title: 'Contact Us | Cali Door & Window',
  description: 'Get in touch with our team for inquiries, quotes, or information about our door and window products and services.',
};

export default async function ContactPage() {
  const contactInfo: ContactInfo | null = await getContactInfo();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 -mt-40 -mr-40 rounded-full bg-red-100 blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 -mb-40 -ml-40 rounded-full bg-slate-100 blur-3xl opacity-30 pointer-events-none"></div>
        
        <section className="relative z-10 py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
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
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-400"></div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 md:p-10 h-full text-white relative overflow-hidden">
                  {/* Decorative blur elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-red-500/10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-slate-700/50 blur-2xl"></div>
                  
                  <div className="relative">
                    <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                    <ContactInfoDisplay contactInfo={contactInfo} theme="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 