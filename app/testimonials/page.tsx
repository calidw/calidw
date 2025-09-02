'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials, { Testimonial } from '../components/Testimonials';
import { useEffect, useState } from 'react';
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
  const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('TestimonialsPage render:', { 
    testimonialsCount: testimonials?.length || 'null', 
    loading, 
    error 
  });

  useEffect(() => {
    let isMounted = true;
    console.log('TestimonialsPage: Starting fetch...');
    
    const fetchTestimonials = async () => {
      try {
        console.log('Making fetch request to /api/testimonials...');
        const res = await fetch('/api/testimonials', { 
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        console.log('Fetch response received:', res.status, res.ok);
        
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }
        
        const text = await res.text();
        console.log('Raw response text:', text.substring(0, 200) + '...');
        
        const json = JSON.parse(text);
        console.log('Parsed JSON:', json);
        
        if (json.success && Array.isArray(json.testimonials)) {
          console.log('Setting testimonials in state:', json.testimonials.length, 'items');
          if (isMounted) {
            setTestimonials(json.testimonials);
            console.log('State updated successfully');
          }
        } else {
          throw new Error(json.error || 'Invalid API response format');
        }
      } catch (e: unknown) {
        console.error('Failed to load testimonials:', e);
        if (isMounted) setError(`Unable to load testimonials: ${e instanceof Error ? e.message : 'Unknown error'}`);
      } finally {
        if (isMounted) {
          setLoading(false);
          console.log('Loading state set to false');
        }
      }
    };

    // Add a small delay to ensure component is mounted
    setTimeout(fetchTestimonials, 100);
    
    return () => { 
      console.log('Component unmounting, setting isMounted to false');
      isMounted = false; 
    };
  }, []);

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
                            <p className="text-xl text-slate-300 mb-4">
                Hear directly from our clients about their experience with Cali Door & Windows.
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

        {/* Yelp Link Section after Hero */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.yelp.com/biz/cali-doors-and-windows-glendale?osq=cali+doors+and+windows&override_cta=Get+pricing+%26+availability"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#d32323] to-[#b80000] hover:from-[#b80000] hover:to-[#d32323] text-white font-extrabold rounded-full shadow-lg transition-all duration-300 text-base ring-2 ring-white/10 focus:outline-none focus:ring-4 focus:ring-red-400"
            aria-label="Read our reviews on Yelp"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.5 10.5c-.3-.5-.8-.8-1.4-.7l-4.2.7c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4l.7-4.2c.1-.6-.2-1.1-.7-1.4-.5-.3-1.1-.2-1.5.2l-2.9 3.5c-.1.1-.3.1-.4.1-.2 0-.3-.1-.4-.2l-3.5-2.9c-.4-.4-1-.5-1.5-.2-.5.3-.8.8-.7 1.4l.7 4.2c0 .2-.1.3-.2.4-.1.1-.3.1-.4.1l-4.2-.7c-.6-.1-1.1.2-1.4.7-.3.5-.2 1.1.2 1.5l3.5 2.9c.1.1.1.3.1.4 0 .2-.1.3-.2.4l-2.9 3.5c-.4.4-.5 1-.2 1.5.3.5.8.8 1.4.7l4.2-.7c.2 0 .3.1.4.2.1.1.1.3.1.4l-.7 4.2c-.1.6.2 1.1.7 1.4.5.3 1.1.2 1.5-.2l2.9-3.5c.1-.1.3-.1.4-.1.2 0 .3.1.4.2l3.5 2.9c.4.4 1 .5 1.5.2.5-.3.8-.8.7-1.4l-.7-4.2c0-.2.1-.3.2-.4.1-.1.3-.1.4-.1l4.2.7c.6.1 1.1-.2 1.4-.7.3-.5.2-1.1-.2-1.5l-3.5-2.9c-.1-.1-.1-.3-.1-.4 0-.2.1-.3.2-.4l2.9-3.5c.4-.4.5-1 .2-1.5z"/></svg>
            <span className="tracking-wide">Yelp Reviews</span>
          </a>
        </div>

        {/* Use the Testimonials component to display all items */}
        <Testimonials 
          testimonials={testimonials}
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
                Experience the Cali Door & Windows difference for yourself. Contact us for a free consultation or quote.
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
      {loading && (
        <div className="fixed bottom-4 right-4 px-4 py-2 bg-white shadow rounded text-sm">Loading testimonials...</div>
      )}
      {error && (
        <div className="fixed bottom-4 right-4 px-4 py-2 bg-red-600 text-white shadow rounded text-sm">{error}</div>
      )}
    </div>
  );
} 