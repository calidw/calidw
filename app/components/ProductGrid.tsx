'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

type ProductGridProps = {
  products: Product[];
  showPrice?: boolean;
  featuredOnly?: boolean;
  maxProducts?: number;
  title?: string;
  subtitle?: string;
};

export default function ProductGrid({
  products,
  showPrice = false,
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
        product.features?.some(feature => 
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
                  ? 'bg-gradient-to-r from-red-800 to-red-700 text-white shadow-md transform hover:scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-800 hover:shadow-sm'
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
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
            <ProductCard 
              product={product} 
              showPrice={showPrice} 
            />
            </motion.div>
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