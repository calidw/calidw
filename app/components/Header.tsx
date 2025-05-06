'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// Explicit motion components for React 19 compatibility
const MotionDiv = motion.div;

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll events - optimized with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          setScrolled(offset > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-red-800 text-white py-1.5 text-sm font-semibold">
        <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
          <span className="font-bold">Get free consultation</span>
          <a href="tel:8182823437" className="flex items-center font-bold hover:text-slate-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (818) 282-3437
          </a>
        </div>
      </div>
      
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
      }`}>
        <nav className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-6" aria-label="Global">
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex lg:flex-1"
          >
            <Link href="/" className="inline-flex items-center">
              <span className="sr-only">Cali Doors and Windows</span>
              <div className="relative w-20 h-10 flex-shrink-0">
                <Image
                  src="/calidw.png"
                  alt="Cali Doors and Windows Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </MotionDiv>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={`relative px-2 py-0.5 text-base font-semibold ${
                    isActive ? 'text-red-800' : 'text-slate-900 hover:text-red-800'
                  } transition-colors duration-200 group`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-800 to-red-600 rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-800 to-red-600 rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              );
            })}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link 
              href="/contact?form=quote" 
              className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-800 to-red-700 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10">
                Request a Quote <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </nav>
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={closeMobileMenu}>
          <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-4 py-2 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center" onClick={closeMobileMenu}>
                <span className="sr-only">Cali Doors and Windows</span>
                <div className="relative w-20 h-10 flex-shrink-0">
                  <Image
                    src="/calidw.png"
                    alt="Cali Doors and Windows Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={closeMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 flow-root">
              <div className="-my-4">
                <div className="space-y-1 py-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || 
                                   (item.href !== '/' && pathname?.startsWith(item.href));
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group block rounded-lg px-3 py-2 text-lg font-semibold ${
                          isActive 
                            ? 'bg-red-100 text-red-800' 
                            : 'text-slate-900 hover:bg-slate-50 hover:text-red-800'
                        } transition-colors`}
                        onClick={closeMobileMenu}
                      >
                        <div className="flex items-center">
                          {isActive && (
                            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-red-700"></span>
                          )}
                          {item.name}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="py-4 border-t border-slate-100">
                  <Link
                    href="/contact?form=quote"
                    className="flex w-full items-center justify-center rounded-full px-4 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-red-800 to-red-700 shadow-md hover:from-red-700 hover:to-red-600 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
