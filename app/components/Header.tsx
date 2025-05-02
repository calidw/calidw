'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
    }`}>
      <nav className="container mx-auto flex items-center justify-between py-1.5 px-4 lg:px-6" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="inline-flex items-center">
            <span className="sr-only">Cali Door & Window</span>
            <div className="relative w-28 h-14 flex-shrink-0">
              <Image
                src="/calidw.png"
                alt="Cali Door & Window Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex lg:gap-x-6"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/' && pathname?.startsWith(item.href));
            
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative px-2 py-0.5 text-sm font-medium ${
                  isActive ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'
                } transition-colors duration-200 group`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link 
            href="/contact?form=quote" 
            className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-500 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10">
              Request a Quote <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Link>
        </motion.div>
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-4 py-2 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Cali Door & Window</span>
              <div className="relative w-28 h-14 flex-shrink-0">
                <Image
                  src="/calidw.png"
                  alt="Cali Door & Window Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
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
                      className={`group block rounded-lg px-3 py-2 text-base font-medium ${
                        isActive 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'text-slate-800 hover:bg-slate-50 hover:text-amber-600'
                      } transition-colors`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {isActive && (
                          <span className="mr-3 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
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
                  className="flex w-full items-center justify-center rounded-full px-4 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-500 shadow-md hover:from-amber-500 hover:to-amber-400 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
