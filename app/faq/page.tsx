'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getFaqPageData } from '../../lib/sanity';

// FAQ Data Structure
interface FaqItem {
  question: string;
  answer: string;
  category: string;
  orderRank?: number;
}

interface FaqPageData {
  title: string;
  heading: string;
  subheading: string;
  faqs: FaqItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  seo?: {
    title?: string;
    description?: string;
  };
}

// Fallback static data in case Sanity data isn't available
const fallbackFaqData: FaqItem[] = [
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

const fallbackPageData: FaqPageData = {
  title: "Frequently Asked Questions | Cali Door & Window",
  heading: "Frequently Asked Questions",
  subheading: "Find answers to common questions about our products, services, and processes.",
  faqs: fallbackFaqData,
  ctaTitle: "Still have questions?",
  ctaText: "Our team is here to help. Contact us for personalized assistance with your window and door needs.",
  ctaButtonText: "Contact Us",
  ctaButtonLink: "/contact"
};

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

export default function FaqPage() {
  const [pageData, setPageData] = useState<FaqPageData>(fallbackPageData);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFaqPageData();
        if (data && data.faqs && data.faqs.length > 0) {
          // Sort FAQs by orderRank if available
          const sortedFaqs = [...data.faqs].sort((a, b) => {
            if (a.orderRank !== undefined && b.orderRank !== undefined) {
              return a.orderRank - b.orderRank;
            }
            return 0;
          });
          setPageData({...data, faqs: sortedFaqs});
        }
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
        // Use fallback data if fetch fails
        setPageData(fallbackPageData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Get unique categories from the FAQ data
  const categories = ['All', ...Array.from(new Set(pageData.faqs.map(item => item.category)))];
  
  const filteredFaqs = activeCategory === 'All' 
    ? pageData.faqs 
    : pageData.faqs.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

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
              variants={itemVariants}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
                Support Center
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                {pageData.heading}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                {pageData.subheading}
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
                      ? 'bg-gradient-to-r from-red-800 to-red-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-red-700'
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
                    <span className="text-lg font-semibold text-slate-900 group-hover:text-red-700 transition-colors duration-200">
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
        
      </main>
      
      <Footer />
    </div>
  );
} 