'use client';

import { useState, FormEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

// Form data interfaces
interface FormData { 
  name: string;
  email: string;
  phone: string;
  details: string;
  interest: string;
  preferredContact: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
  interest?: string;
  preferredContact?: string;
}

interface HubSpotError {
  message?: string;
  error?: string;
}

// HubSpot form submission constants
const PORTAL_ID = '242702836';
const FORM_GUID = '70dec8ab-a828-4664-8d0c-f77840902b61';
const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

// Animation variants
const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.1, 0.6, 0.3, 1]
    }
  })
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '',
    email: '',
    phone: '',
    details: '',
    interest: '',
    preferredContact: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (formData.preferredContact === 'Phone' && !formData.phone.trim()) newErrors.phone = 'Phone number is required for phone contact';
    if (!formData.interest) newErrors.interest = 'Please select your interest';
    if (!formData.preferredContact) newErrors.preferredContact = 'Please select preferred contact method';
    if (!formData.details.trim()) newErrors.details = 'Details are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Extract first and last name
        const nameParts = formData.name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        
        // Prepare the data for HubSpot
        const formattedData = {
          submittedAt: Date.now(),
          fields: [
            { name: 'firstname', value: firstName },
            { name: 'lastname', value: lastName || ' ' },
            { name: 'email', value: formData.email },
            { name: 'phone', value: formData.phone || '' },
            { name: 'messages', value: formData.details },
            { name: 'i_am_interested_in___', value: formData.interest },
            { name: 'preferred_contact_method__', value: formData.preferredContact }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Cali Door & Window to store and process my personal data."
            }
          }
        };
        
        // Submit to HubSpot API
        const response = await fetch(HUBSPOT_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formattedData)
        });
        
        const responseData = await response.json();
        
        if (!response.ok) {
          let errorMessage = 'Failed to submit form';
          
          if (responseData) {
            if (responseData.message) {
              errorMessage = responseData.message;
            } else if (responseData.errors && responseData.errors.length > 0) {
              errorMessage = responseData.errors.map((err: HubSpotError) => 
                `${err.message || err.error || JSON.stringify(err)}`
              ).join(', ');
            } else {
              errorMessage = `HubSpot error (${response.status}): ${JSON.stringify(responseData)}`;
            }
          }
          
          throw new Error(errorMessage);
        }
        
        // Form submitted successfully
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form fields after successful submission
        setFormData({ name: '', email: '', phone: '', details: '', interest: '', preferredContact: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        setSubmissionError(error instanceof Error ? error.message : 'An error occurred while submitting the form. Please try again.');
      }
    }
  };

  // Styles for inputs
  const inputBaseClass = "peer block w-full px-4 py-3.5 rounded-xl shadow-sm transition-all duration-200 outline-none bg-white placeholder-transparent focus:shadow-md";
  const labelBaseClass = "absolute left-3 -top-2 text-xs font-medium transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-red-600 peer-focus:text-xs pointer-events-none bg-white px-1 z-10"; 
  const inputNormalBorder = "border border-slate-200 focus:border-red-500 focus:ring-1 focus:ring-red-500";
  const inputErrorBorder = "border border-red-300 ring-1 ring-red-500"; 
  
  // Select styles
  const selectClass = "block w-full px-4 py-3.5 rounded-xl shadow-sm border border-slate-200 transition-all duration-200 bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:shadow-md outline-none appearance-none pr-10";
  
  return (
    <div className="w-full">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-xl shadow-sm"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500">
                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-green-800">Thank you for your message!</h3>
              <p className="mt-2 text-green-700">We&apos;ll be in touch shortly to discuss your project.</p>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white font-medium rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send Another Message
              </motion.button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.form 
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          {submissionError && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md"
            >
              <p>{submissionError}</p>
            </motion.div>
          )}
          
          {/* Name Field */}
          <motion.div 
            className="relative"
            variants={formItemVariants}
            custom={0}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${inputBaseClass} ${errors.name ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <label htmlFor="name" className={`${labelBaseClass} ${errors.name ? 'text-red-600' : ''}`}>
              Name <span className="text-red-500">*</span>
            </label>
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.name}</p>
            )}
          </motion.div>
          
          {/* Email Field */}
          <motion.div 
            className="relative" 
            variants={formItemVariants}
            custom={1}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`${inputBaseClass} ${errors.email ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Email Address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            <label htmlFor="email" className={`${labelBaseClass} ${errors.email ? 'text-red-600' : ''}`}>
              Email Address <span className="text-red-500">*</span>
            </label>
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.email}</p>
            )}
          </motion.div>
          
          {/* Phone Field */}
          <motion.div 
            className="relative"
            variants={formItemVariants}
            custom={2}
          >
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required={formData.preferredContact === 'Phone'}
              className={`${inputBaseClass} ${errors.phone ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Phone Number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <label htmlFor="phone" className={`${labelBaseClass} ${errors.phone ? 'text-red-600' : ''}`}>
              Phone {formData.preferredContact === 'Phone' && <span className="text-red-500">*</span>}
            </label>
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.phone}</p>
            )}
          </motion.div>
          
          {/* Interest Field */}
          <motion.div 
            className="relative"
            variants={formItemVariants}
            custom={3}
          >
            <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2 pl-1">
              I&apos;m interested in <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className={`${selectClass} ${errors.interest ? 'border-red-300 ring-1 ring-red-500' : ''}`}
                aria-invalid={!!errors.interest}
                aria-describedby={errors.interest ? "interest-error" : undefined}
              >
                <option value="" disabled>Select an option...</option>
                <option value="Doors">Doors</option>
                <option value="Windows">Windows</option>
                <option value="Both Doors & Windows">Both Doors & Windows</option>
                <option value="General Consultation">General Consultation</option> 
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.interest && (
              <p id="interest-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.interest}</p>
            )}
          </motion.div>
          
          {/* Preferred Contact Method */}
          <motion.div 
            className="relative"
            variants={formItemVariants}
            custom={4}
          >
            <label htmlFor="preferredContact" className="block text-sm font-medium text-slate-700 mb-2 pl-1">
              Preferred Contact Method <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                required
                className={`${selectClass} ${errors.preferredContact ? 'border-red-300 ring-1 ring-red-500' : ''}`}
                aria-invalid={!!errors.preferredContact}
                aria-describedby={errors.preferredContact ? "preferredContact-error" : undefined}
              >
                <option value="" disabled>Select an option...</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.preferredContact && (
              <p id="preferredContact-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.preferredContact}</p>
            )}
          </motion.div>
          
          {/* Details Field */}
          <motion.div 
            className="relative" 
            variants={formItemVariants}
            custom={5}
          >
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              required
              className={`${inputBaseClass} ${errors.details ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Details"
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? "details-error" : undefined}
            />
            <label htmlFor="details" className={`${labelBaseClass} ${errors.details ? 'text-red-600' : ''}`}>
              Details <span className="text-red-500">*</span>
            </label>
            {errors.details && (
              <p id="details-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.details}</p>
            )}
          </motion.div>
          
          {/* Submit Button */}
          <motion.div 
            variants={formItemVariants}
            custom={6}
            className="!mt-10"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center shadow-md transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-red-800 to-red-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <PaperAirplaneIcon className="h-5 w-5 ml-2" />
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;