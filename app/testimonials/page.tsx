'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
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
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
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
        
        {/* Additional CTA Section */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-800 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300"
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