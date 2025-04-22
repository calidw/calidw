'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { useEffect, useState } from 'react';

// Create explicit motion components for React 19 compatibility
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

const HeroBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden min-h-[80vh]">
      {/* Abstract geometric shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-amber-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-slate-400/10 blur-3xl"></div>
      </div>

      {/* Split-screen hero layout */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative z-10 bg-transparent pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          {/* Decorative diagonal shape */}
          <svg
            className="absolute right-0 inset-y-0 hidden h-full w-48 translate-x-1/2 transform text-transparent lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 pt-12 sm:pt-24 lg:pt-32 lg:px-8">
            <div className="mx-auto max-w-xl">
              {/* Headline with animation */}
              <MotionH1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl !leading-tight"
              >
                <span className="block">Transform</span>
                <span className="block">Your <span className="text-amber-500">Home's</span></span>
                <span className="block">Identity</span>
              </MotionH1>
              
              {/* Subtitle with animation */}
              <MotionP 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 text-xl leading-8 text-slate-300 max-w-lg font-light"
              >
                Exquisite doors and windows that elevate architecture, 
                enhance natural light, and redefine living spaces.
              </MotionP>
              
              {/* CTA buttons with animation */}
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 flex flex-wrap gap-x-6 gap-y-4"
              >
                <Link
                  href="/contact?form=consultation" 
                  className="rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/gallery" 
                  className="rounded-full bg-slate-800/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white border border-slate-600 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Showcase
                </Link>
              </MotionDiv>
              
              {/* Trust indicators */}
              <MotionDiv 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 flex items-center space-x-2 border-t border-slate-800 pt-6"
              >
                <div className="flex items-center">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm font-medium text-white">4.9/5</p>
                </div>
                <span className="text-slate-500">•</span>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">200+</span> satisfied clients
                </p>
                <span className="text-slate-500">•</span>
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-white">15+</span> years of excellence
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video background section */}
      <div className="absolute inset-y-0 right-0 -z-10 h-full w-full lg:w-1/2 overflow-hidden">
        {/* Fallback background color while video loads */}
        <div className="absolute inset-0 bg-slate-700"></div>
        
        {/* Video background with graceful fallback to image */}
        {isMounted && (
          <>
            {isMobile ? (
              // Mobile fallback image
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Modern luxury home with large windows and doors"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover', 
                    objectPosition: 'center'
                  }}
                />
              </div>
            ) : (
              // Desktop video player
              <div className="relative h-full w-full">
                <ReactPlayer
                  url="https://player.vimeo.com/video/359316873" // Modern architecture video on Vimeo
                  playing
                  loop
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  config={{
                    vimeo: {
                      playerOptions: {
                        background: true,
                        quality: 'auto',
                        dnt: true
                      }
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
          </>
        )}
        
        {/* Overlay gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40 lg:from-slate-950 lg:via-slate-900/40 lg:to-transparent" />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="flex flex-col items-center"
        >
          <p className="text-slate-400 text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </MotionDiv>
      </div>
    </div>
  );
};

export default HeroBanner; 