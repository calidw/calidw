'use client';

import { useState, useEffect } from 'react';
import { getContactInfo, type ContactInfo } from '../lib/sanity';

// Fallback contact data when Sanity is not available
const fallbackContactInfo: ContactInfo = {
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
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 4:00 PM',
      'Sunday: Closed'
    ],
    show: true,
  },
  mapLocation: {
    lat: 34.1425,
    lng: -118.2551,
  },
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/calidoorwindow',
      show: true,
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/calidoorwindow',
      show: true,
    },
  ],
};

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const data = await getContactInfo();
        
        // If Sanity returns null (not configured), use fallback data
        if (data === null) {
          console.log('Using fallback contact info (Sanity not configured)');
          setContactInfo(fallbackContactInfo);
        } else {
          setContactInfo(data);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching contact info:', err);
        console.log('Using fallback contact info (due to error)');
        setContactInfo(fallbackContactInfo);
        setError(err instanceof Error ? err.message : 'Failed to fetch contact info');
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading, error };
}
