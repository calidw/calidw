'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerNav = {
    products: [
      { name: 'Windows', href: '/windows' },
      { name: 'Doors', href: '/doors' },
      { name: 'Request Quote', href: '/contact?form=quote' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Services', href: '/services' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Testimonials', href: '/testimonials' },
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6">
              <div className="relative w-16 h-16 flex-shrink-0 mr-3">
                <Image
                  src="/calidw.png"
                  alt="Cali Door & Window Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Providing premium quality doors and windows with expert installation and exceptional service for discerning homeowners and professionals.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-amber-500 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-amber-500 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                   <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333 2.176 8.741 2.163 12 2.163zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-amber-500 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Products</h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 hover:text-amber-500 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 hover:text-amber-500 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Support</h3>
            <ul className="space-y-3">
              {footerNav.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-300 hover:text-amber-500 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Contact Us</h3>
            <address className="not-italic text-sm space-y-3 text-slate-400">
              <p>123 Window Lane<br />San Francisco, CA 94103</p>
              <p>
                <a href="tel:+18182823437" className="hover:text-amber-500 transition-colors duration-200">
                  (818) 282-3437
                </a>
              </p>
              <p>
                <a href="mailto:Sales@calidw.com" className="hover:text-amber-500 transition-colors duration-200">
                  Sales@calidw.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 mb-4 sm:mb-0">
              &copy; {currentYear} Cali Door & Window. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-amber-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 