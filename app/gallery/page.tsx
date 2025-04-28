'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Create explicit motion components for React 19 compatibility
const MotionDiv = motion.div;

// Animation variants for staggered reveals
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

// Mock data for gallery projects
const galleryProjects = [
  {
    id: 'proj-001',
    title: 'Modern Home Transformation',
    description: 'Complete window and sliding door replacement for a contemporary look.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop', // Modern home with large windows
    category: 'Windows & Doors',
  },
  {
    id: 'proj-002',
    title: 'Elegant Entryway Upgrade',
    description: 'Custom solid wood entry door installation.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80&auto=format&fit=crop', // Elegant entryway
    category: 'Doors',
  },
  {
    id: 'proj-003',
    title: 'Sunroom Window Installation',
    description: 'Energy-efficient casement windows for a bright sunroom.',
    imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&auto=format&fit=crop', // Sunroom with windows
    category: 'Windows',
  },
  {
    id: 'proj-004',
    title: 'Classic Villa Windows',
    description: 'Double-hung windows preserving traditional aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format&fit=crop', // Classic home windows
    category: 'Windows',
  },
  {
    id: 'proj-005',
    title: 'Patio Door Enhancement',
    description: 'Wide-opening French doors connecting indoor and outdoor spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop', // Patio doors
    category: 'Doors',
  },
  {
    id: 'proj-006',
    title: 'Commercial Storefront',
    description: 'Durable and stylish aluminum frame windows and entrance door.',
    imageUrl: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&q=80&auto=format&fit=crop', // Commercial storefront
    category: 'Commercial',
  },
];

// Unique categories for filter
const categories = ['All', ...new Set(galleryProjects.map(project => project.category))];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'All' 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-100 blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-slate-100 blur-3xl opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                Our Work
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Inspiration Gallery
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Explore our portfolio of completed projects and envision the possibilities for your own space.
              </p>
            </MotionDiv>

            {/* Filter Controls */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md transform hover:scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300 hover:text-amber-600 hover:shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </MotionDiv>
            
            {/* Gallery Grid */}
            <MotionDiv 
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <MotionDiv
                  key={project.id}
                  custom={index}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {project.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {project.description}
                      </p>
                      <div className="pt-4 border-t border-slate-100">
                        <Link 
                          href={`#project-${project.id}`} 
                          className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors group"
                        >
                          View Details
                          <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
            
            {/* Empty State */}
            {filteredProjects.length === 0 && (
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let our experts help you choose the perfect doors and windows for your project.
              </p>
              <MotionDiv
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
              </MotionDiv>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 