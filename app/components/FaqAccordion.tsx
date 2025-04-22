'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 ${
              isOpen ? 'ring-1 ring-amber-500 shadow-md' : 'hover:shadow-md transition-shadow'
            }`}
          >
            <h2 id={`faq-question-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full px-6 py-5 font-semibold text-left text-slate-800 focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-base md:text-lg">{item.question}</span>
                <div className={`relative ml-4 flex-shrink-0 ${isOpen ? 'text-amber-500' : 'text-slate-400'}`}>
                  <div className="h-6 w-6 rounded-full border-2 border-current flex items-center justify-center">
                    <motion.span 
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="block h-0.5 w-2.5 bg-current"
                    />
                    <motion.span 
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      transition={{ duration: 0.2 }} 
                      className="absolute block h-0.5 w-2.5 bg-current"
                    />
                  </div>
                </div>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  aria-labelledby={`faq-question-${index}`}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="px-6 pt-0 pb-6"
                  >
                    <div className="w-full h-px bg-slate-100 mb-4"></div>
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
} 