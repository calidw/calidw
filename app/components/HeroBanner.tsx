'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

// Create explicit motion components for React 19 compatibility
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

// Slider images array
const sliderImages = [
  {
    src: '/images/hero-door-window.jpg',
    alt: 'Modern luxury home with premium doors and windows',
    label: 'Premium Quality',
    description: 'Exceptional craftsmanship with innovative design, providing unmatched durability, efficiency, and aesthetics for your home.'
  },
  {
    src: '/images/slider-2.jpg',
    alt: 'Elegant French doors with glass panels',
    label: 'Stunning Designs',
    description: 'Transform your living space with our elegant door and window designs that blend seamlessly with any architectural style.'
  },
  {
    src: '/images/slider-3.jpg',
    alt: 'Custom window installation in modern home',
    label: 'Expert Installation',
    description: 'Our team of experienced professionals ensures perfect fitting and finishing for all your door and window needs.'
  }
];

const HeroBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMounted]);
  
  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);
  
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, []);
  
  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 flex items-center bg-gradient-to-br from-slate-950 to-slate-800 px-6 py-16 sm:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-600/10 backdrop-blur-sm border border-amber-600/20"
            >
              <span className="text-amber-500 text-sm font-medium tracking-wide">
                15+ Years of Industry Experience
              </span>
            </MotionDiv>
            
            <MotionH1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white tracking-tight !leading-tight mb-6"
            >
              Transform Your <span className="text-amber-500">Home&apos;s</span> Identity With Premium Doors & Windows
            </MotionH1>
            
            <MotionP 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-300 mb-10"
            >
              Elevate your architecture, enhance natural light, and redefine 
              your living spaces with our exquisite collection of premium 
              quality doors and windows.
            </MotionP>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact?form=consultation" 
                className="rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:8182823437" 
                className="rounded-full bg-slate-800/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us
              </a>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400"
            >
              <div className="flex items-center">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 font-medium text-white">4.9/5 <span className="text-slate-400 font-normal">(200+ reviews)</span></p>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>200+ satisfied clients</span>
              </div>
            </MotionDiv>
          </div>
        </div>
        
        {/* Right Image Slider Column */}
        <div className="w-full lg:w-1/2 relative">
          {isMounted && (
            <div className="h-[50vh] lg:h-full w-full relative overflow-hidden">
              {/* Slider images */}
              {sliderImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    zIndex: currentSlide === index ? 1 : 0
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-all duration-700"
                  />
                  
                  {/* Overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-slate-900/40 lg:via-transparent lg:to-transparent" />
                  
                  {/* Feature callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20 
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:bottom-12 lg:left-12 lg:translate-x-0 lg:max-w-sm"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                            <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <h3 className="text-slate-900 font-semibold">{image.label}</h3>
                        </div>
                        <p className="text-slate-700 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Slider controls */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10 flex items-center space-x-2">
                <button 
                  onClick={goToPrevSlide}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={goToNextSlide}
                  className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Slider indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-8 z-10 flex items-center space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full bg-slate-700/10 blur-3xl" />
    </div>
  );
};

export default HeroBanner; 