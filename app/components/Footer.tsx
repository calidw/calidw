'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContactInfo } from '../hooks/useContactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contactInfo, loading } = useContactInfo();

  // Fallback data if Sanity is not available
  const fallbackContact = {
    phone: {
      number: '(818) 282-3437',
      show: true,
    },
    email: {
      address: 'sales@calidw.com',
      show: true,
    },
  };

  const contact = contactInfo || fallbackContact;
  
  const footerNav = {
    products: [
      { name: 'Products', href: '/products' },
      { name: 'Request Quote', href: '/contact?form=quote' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Testimonials', href: '/testimonials' },
    ]
  };

  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-2">
              <div className="relative w-36 h-36 flex-shrink-0 mr-3">
                <Image
                  src="/calidw.png"
                  alt="Cali Doors and Windows Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm font-semibold text-slate-800 mb-6">
              Contractor License: 1138391
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Providing premium quality doors and windows with expert installation and exceptional service for discerning homeowners and professionals.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-800 mb-5">Products</h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-slate-700 hover:text-red-800 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-800 mb-5">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-slate-700 hover:text-red-800 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-800 mb-5">Support</h3>
            <ul className="space-y-3">
              {footerNav.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-slate-700 hover:text-red-800 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-800 mb-5">Contact Us</h3>
            <address className="not-italic text-base space-y-3 text-slate-700">
              {loading ? (
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                </div>
              ) : (
                <>
                  {contact.phone?.show && (
                    <p>
                      <a 
                        href={`tel:${contact.phone.number.replace(/[^\d]/g, '')}`} 
                        className="hover:text-red-800 transition-colors duration-200"
                      >
                        {contact.phone.number}
                      </a>
                    </p>
                  )}
                  {contact.email?.show && (
                    <p>
                      <a 
                        href={`mailto:${contact.email.address}`} 
                        className="hover:text-red-800 transition-colors duration-200"
                      >
                        {contact.email.address}
                      </a>
                    </p>
                  )}
                </>
              )}
            </address>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-red-100 mt-12 pt-8 text-base">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-700 mb-4 sm:mb-0">
              &copy; {currentYear} Cali Doors and Windows. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-700 hover:text-red-800 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-700 hover:text-red-800 transition-colors duration-200">
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