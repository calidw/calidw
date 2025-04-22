'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function TestimonialsPage() {
  // In a real app, you might fetch all testimonials here if not using mock data
  // const allTestimonials = await fetchAllTestimonials();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
                Our Reputation
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Customer Testimonials
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hear directly from our clients about their experience with Cali Door & Window.
              </p>
            </motion.div>
            
            {/* Quote Icon */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 0.15, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8zM25.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8z"></path>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Use the Testimonials component to display all items */}
        <Testimonials 
          title="" // Hide the default title/subtitle within the component 
          subtitle="" 
          // Pass fetched data here when using a CMS later
        />
        
        {/* Submission CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-amber-100 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-slate-100 blur-3xl opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Share Your Experience
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  We value your feedback. Let us know about your experience with Cali Door & Window and help future customers make informed decisions.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link 
                      href="/contact?form=testimonial" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full shadow-md hover:from-amber-500 hover:to-amber-400 transition-all duration-300 w-full sm:w-auto"
                    >
                      Submit a Testimonial
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link 
                      href="https://g.co/kgs/TBD" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all duration-300 w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5 mr-2 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm-1.2 18.6H9.6V9h1.2v9.6Zm-1.5-12c-.414.001-.761-.33-.76-.744a.758.758 0 0 1 .76-.756c.414-.001.761.33.76.744a.724.724 0 0 1-.76.756Zm9.5 12h-1.2v-4.8c0-1.35-.6-1.8-1.2-1.8-.658.027-.977.57-.95 1.23v5.37h-1.2V9h1.2v.75a2.091 2.091 0 0 1 1.9-1.05c.658-.053 1.442.3 1.9 1.05.458.75.55 1.65.55 2.55v6.3Z" />
                      </svg>
                      Review on Google
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Additional CTA Section */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Experience the Cali Door & Window difference for yourself. Contact us for a free consultation or quote.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/contact?form=quote" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 