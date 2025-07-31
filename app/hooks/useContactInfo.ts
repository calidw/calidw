'use client';

import { useState, useEffect } from 'react';
import { getContactInfo, type ContactInfo } from '../lib/sanity';

export function useContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const data = await getContactInfo();
        setContactInfo(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching contact info:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch contact info');
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return { contactInfo, loading, error };
}
