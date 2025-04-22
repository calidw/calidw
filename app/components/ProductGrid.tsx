'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Create explicit motion components for React 19 compatibility
const MotionDiv = motion.div;

type ProductGridProps = {
  products: Product[];
  showPrice?: boolean;
  featuredOnly?: boolean;
  maxProducts?: number;
  title?: string;
  subtitle?: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Window and door type arrays removed

export default function ProductGrid({
  products,
  showPrice = true,
  featuredOnly = false,
  maxProducts,
  title = "Featured Products",
  subtitle = "Explore our selection of premium windows and doors"
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  
  const categories = ['All', 'Windows', 'Doors'];
  
  useEffect(() => {
    let filtered = [...products];
    
    if (featuredOnly) {
      filtered = filtered.filter(product => 
        product.features.some(feature => 
          feature.toLowerCase().includes('title 24') || 
          feature.toLowerCase().includes('energy efficient')
        )
      );
    }
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(product => 
        product.category === activeCategory.toLowerCase().slice(0, -1)
      );
    }
    
    if (maxProducts) {
      filtered = filtered.slice(0, maxProducts);
    }
    
    setDisplayedProducts(filtered);
  }, [products, activeCategory, featuredOnly, maxProducts]);
  
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
  
  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      )}
      
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md transform hover:scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:text-amber-600 hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showPrice={showPrice} 
            />
          ))}
        </motion.div>
      </AnimatePresence>
      
      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
} 