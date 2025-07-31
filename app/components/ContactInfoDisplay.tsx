'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { type ContactInfo } from '../lib/sanity';

interface ContactInfoDisplayProps {
  contactInfo: ContactInfo | null;
  theme?: 'light' | 'dark';
  showIcons?: boolean;
  className?: string;
}

export default function ContactInfoDisplay({ 
  contactInfo, 
  theme = 'dark', 
  showIcons = true,
  className = '' 
}: ContactInfoDisplayProps) {
  // Fallback data if Sanity is not available
  const fallbackContact = {
    address: {
      street: '3746 Foothill Boulevard #1254',
      city: 'Glendale',
      state: 'CA',
      zipCode: '91214',
      show: true,
    },
    phone: {
      number: '(818) 282-3437',
      show: true,
    },
    email: {
      address: 'sales@calidw.com',
      show: true,
    },
    hours: {
      schedule: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      show: true,
    },
  };

  const contact = contactInfo || fallbackContact;
  
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const subtextColorClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const hoverColorClass = theme === 'dark' ? 'hover:text-red-300' : 'hover:text-red-600';
  const iconBgClass = theme === 'dark' ? 'bg-red-500/10' : 'bg-red-500/10';
  const iconColorClass = theme === 'dark' ? 'text-red-400' : 'text-red-500';

  return (
    <div className={`space-y-8 ${className}`}>
      {contact.address?.show && (
        <div className="flex">
          {showIcons && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center mr-4`}>
              <MapPinIcon className={`h-6 w-6 ${iconColorClass}`} />
            </div>
          )}
          <div>
            <h3 className={`font-medium text-lg ${textColorClass} mb-2`}>
              Address
            </h3>
            <address className={`not-italic ${subtextColorClass} leading-relaxed`}>
              {contact.address.street}<br />
              {contact.address.city}, {contact.address.state} {contact.address.zipCode}
            </address>
          </div>
        </div>
      )}
      
      {contact.hours?.show && (
        <div className="flex">
          {showIcons && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center mr-4`}>
              <ClockIcon className={`h-6 w-6 ${iconColorClass}`} />
            </div>
          )}
          <div>
            <h3 className={`font-medium text-lg ${textColorClass} mb-2`}>
              Working Hours
            </h3>
            <div className={`${subtextColorClass} leading-relaxed`}>
              {contact.hours.schedule.map((time, index) => (
                <p key={index}>{time}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {contact.phone?.show && (
        <div className="flex">
          {showIcons && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center mr-4`}>
              <PhoneIcon className={`h-6 w-6 ${iconColorClass}`} />
            </div>
          )}
          <div>
            <h3 className={`font-medium text-lg ${textColorClass} mb-2`}>
              Call Us
            </h3>
            <p className={subtextColorClass}>
              <a 
                href={`tel:${contact.phone.number.replace(/[^\d]/g, '')}`} 
                className={`${hoverColorClass} transition-colors duration-200`}
              >
                {contact.phone.number}
              </a>
            </p>
          </div>
        </div>
      )}
      
      {contact.email?.show && (
        <div className="flex">
          {showIcons && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconBgClass} flex items-center justify-center mr-4`}>
              <EnvelopeIcon className={`h-6 w-6 ${iconColorClass}`} />
            </div>
          )}
          <div>
            <h3 className={`font-medium text-lg ${textColorClass} mb-2`}>
              Email Us
            </h3>
            <p className={subtextColorClass}>
              <a 
                href={`mailto:${contact.email.address}`} 
                className={`${hoverColorClass} transition-colors duration-200`}
              >
                {contact.email.address}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
