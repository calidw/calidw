'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Explicit motion components for React 19 compatibility
const MotionDiv = motion.div;

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fullSizeImageUrl?: string;
  category: string;
  projectDetails?: Array<{
    label: string;
    value: string;
  }>;
  relatedProducts?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

interface GalleryGridProps {
  items: GalleryItem[];
  categories?: string[];
  initialCategory?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function GalleryGrid({ 
  items, 
  categories = ['All'], 
  initialCategory = 'All' 
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Get unique categories if not provided
  const allCategories = categories.includes('All') 
    ? categories 
    : ['All', ...categories];

  // Filter projects based on selected category
  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const openZoomView = (item: GalleryItem) => {
    setActiveItem(item);
    setIsZoomed(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeZoomView = () => {
    setIsZoomed(false);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = '';
  };

  return (
    <div>
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-red-800 to-red-700 text-white shadow-md transform hover:scale-105'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-red-200 hover:text-red-700 hover:shadow-sm'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <MotionDiv 
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {filteredItems.map((item, index) => (
          <MotionDiv
            key={item.id}
            custom={index}
            variants={fadeInUp}
            className="h-full"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full group">
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
                onClick={() => openZoomView(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                  {item.category}
                </div>
                {/* Zoom indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => openZoomView(item)}
                    className="inline-flex items-center text-slate-700 font-medium hover:text-red-700 transition-colors group"
                  >
                    View Details
                    <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
      
      {/* Empty State */}
      {filteredItems.length === 0 && (
        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No projects found</h3>
          <p className="text-slate-500">We don&apos;t have any projects in this category yet.</p>
        </MotionDiv>
      )}
      
      {/* Zoom View Modal */}
      <AnimatePresence>
        {isZoomed && activeItem && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-black/90 flex items-center justify-center p-4"
            onClick={closeZoomView}
          >
            <button 
              className="absolute top-20 right-4 sm:top-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 shadow-lg hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeZoomView();
              }}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div 
              className="relative max-w-6xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the modal
            >
              <div className="grid md:grid-cols-2 min-h-[50vh]">
                {/* Image Section */}
                <div className="relative h-[50vh] md:h-auto">
                  <Image
                    src={activeItem.fullSizeImageUrl || activeItem.imageUrl}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Details Section */}
                <div className="p-8 overflow-y-auto max-h-[80vh]">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
                    {activeItem.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {activeItem.title}
                  </h2>
                  <p className="text-slate-600 mb-8">
                    {activeItem.description}
                  </p>
                  
                  {/* Project Details */}
                  {activeItem.projectDetails && activeItem.projectDetails.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-3">
                        {activeItem.projectDetails.map((detail, index) => (
                          <div key={index} className="flex border-b border-slate-100 pb-2">
                            <dt className="w-1/3 font-medium text-slate-700">{detail.label}</dt>
                            <dd className="w-2/3 text-slate-600">{detail.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                  
                  {/* Related Products */}
                  {activeItem.relatedProducts && activeItem.relatedProducts.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">Products Used</h3>
                      <div className="space-y-2">
                        {activeItem.relatedProducts.map((product) => (
                          <Link 
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="block bg-slate-50 hover:bg-slate-100 p-3 rounded-lg transition-colors text-slate-700 hover:text-red-600"
                          >
                            <div className="flex items-center">
                              <span>{product.name}</span>
                              <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* CTA Section */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href="/contact?form=quote"
                      className="w-full block text-center py-3 px-4 bg-gradient-to-r from-red-800 to-red-700 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-colors"
                    >
                      Request Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
} 