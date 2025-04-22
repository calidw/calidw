'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// FAQ Data Structure
interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FaqItem[] = [
  {
    question: "What types of windows do you offer?",
    answer: "We offer a wide selection of window types including single-hung, double-hung, casement, awning, sliding, bay, bow, picture, and custom specialty windows. All our windows are available in various materials including vinyl, fiberglass, aluminum, and wood.",
    category: "Products"
  },
  {
    question: "What door styles are available?",
    answer: "Our door collection includes entry doors, patio doors, French doors, sliding doors, storm doors, security doors, and garage doors. We offer various materials including wood, fiberglass, steel, aluminum, and glass options to match your home's style and your specific needs.",
    category: "Products"
  },
  {
    question: "How long does installation typically take?",
    answer: "Installation time varies depending on the project scope. A standard window replacement might take 30-60 minutes per window, while door installations typically take 4-6 hours per door. Larger projects or custom installations may require additional time. We'll provide you with a specific timeframe during your consultation.",
    category: "Installation"
  },
  {
    question: "Do you provide warranties on your products?",
    answer: "Yes, all our products come with manufacturer warranties. Additionally, we offer a 5-year labor warranty on all installations. Our premium lines include limited lifetime warranties on certain components. We'll provide detailed warranty information for your specific purchase during consultation.",
    category: "Warranty"
  },
  {
    question: "What is your service area?",
    answer: "We currently serve the greater Southern California area, including Los Angeles, Orange County, San Diego, and the Inland Empire. For locations outside these areas, please contact us to discuss possible arrangements.",
    category: "Service"
  },
  {
    question: "How much does window or door replacement cost?",
    answer: "Costs vary widely depending on the type, size, material, and number of windows or doors. We offer options for every budget, with basic vinyl windows starting around $300 installed, and premium custom options ranging up to several thousand dollars. We provide free, no-obligation quotes tailored to your specific needs.",
    category: "Pricing"
  },
  {
    question: "Are energy-efficient options available?",
    answer: "Absolutely! We offer ENERGY STAR® certified windows and doors that can significantly reduce your energy bills. Features include double or triple glazing, low-E coatings, argon gas filling, warm edge spacers, and insulated frames. These energy-efficient options may qualify for tax credits or utility rebates.",
    category: "Products"
  },
  {
    question: "What is your payment policy?",
    answer: "We typically require a 50% deposit to schedule your installation, with the remaining balance due upon satisfactory completion of the project. We accept all major credit cards, checks, and offer financing options through our partner lenders for qualified customers.",
    category: "Pricing"
  },
  {
    question: "How do I maintain my new windows and doors?",
    answer: "Our products are designed for minimal maintenance. For vinyl and fiberglass, simply clean with mild soap and water periodically. Wood products may require occasional refinishing. We provide detailed care instructions with every installation, and our website has maintenance guides for all our products.",
    category: "Maintenance"
  },
  {
    question: "Can you match historical or custom designs?",
    answer: "Yes, we specialize in matching historical designs and creating custom solutions. Our design team can work from photographs, architectural drawings, or existing elements to create windows and doors that maintain the character of your home while incorporating modern performance features.",
    category: "Products"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Get unique categories
const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const filteredFaqs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

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
              variants={itemVariants}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
                Support Center
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Find answers to common questions about our products, services, and processes.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            >
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
            
            {/* FAQ Accordion */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-4 border-b border-slate-200 pb-2 last:border-b-0"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-4 px-1 flex justify-between items-start gap-4 focus:outline-none group"
                  >
                    <span className="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full border border-slate-300 text-slate-500 transition-transform duration-300 ${expandedItem === index ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-3 px-1 text-slate-600 prose">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-amber-100 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-slate-100 blur-3xl opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100 text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Still have questions?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our team is here to help. Contact us for personalized assistance with your window and door needs.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full shadow-md hover:from-amber-500 hover:to-amber-400 transition-all duration-300 w-full sm:w-auto"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link 
                      href="tel:+18005551234" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all duration-300 w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      Call Us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 