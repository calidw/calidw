'use client';

import { useState, FormEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

// Form data interfaces
interface FormData { 
  name: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
  preferredContact: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  interest?: string;
  preferredContact?: string;
}

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
    message: '',
    interest: '',
    preferredContact: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
    // Only require phone if preferred contact is phone
    if (formData.preferredContact === 'phone' && !formData.phone.trim()) newErrors.phone = 'Phone number is required for phone contact';
    if (!formData.interest) newErrors.interest = 'Please select your interest';
    if (!formData.preferredContact) newErrors.preferredContact = 'Please select preferred contact method';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form fields after successful submission
        setFormData({ name: '', email: '', phone: '', message: '', interest: '', preferredContact: '' });
      }, 1500);
    }
  };

  // Styles for inputs
  const inputBaseClass = "peer block w-full px-4 py-3.5 rounded-xl shadow-sm transition-all duration-200 outline-none bg-white placeholder-transparent focus:shadow-md";
  const labelBaseClass = "absolute left-3 -top-2 text-xs font-medium transition-all duration-200 ease-in-out peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-amber-600 peer-focus:text-xs pointer-events-none bg-white px-1 z-10"; 
  const inputNormalBorder = "border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500";
  const inputErrorBorder = "border border-red-300 ring-1 ring-red-500"; 
  
  // Select styles
  const selectClass = "block w-full px-4 py-3.5 rounded-xl shadow-sm border border-slate-200 transition-all duration-200 bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:shadow-md outline-none appearance-none pr-10";
  
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
                className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-full hover:from-amber-500 hover:to-amber-400 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
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
              required={formData.preferredContact === 'phone'}
              className={`${inputBaseClass} ${errors.phone ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Phone Number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <label htmlFor="phone" className={`${labelBaseClass} ${errors.phone ? 'text-red-600' : ''}`}>
              Phone {formData.preferredContact === 'phone' && <span className="text-red-500">*</span>}
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
                <option value="doors">Doors</option>
                <option value="windows">Windows</option>
                <option value="both">Both Doors & Windows</option>
                <option value="consultation">General Consultation</option> 
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
                <option value="email">Email</option>
                <option value="phone">Phone</option>
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
          
          {/* Message Field */}
          <motion.div 
            className="relative" 
            variants={formItemVariants}
            custom={5}
          >
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputBaseClass} ${errors.message ? inputErrorBorder : inputNormalBorder}`}
              placeholder="Message / Project Details"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <label htmlFor="message" className={`${labelBaseClass} ${errors.message ? 'text-red-600' : ''}`}>
              Message / Project Details <span className="text-red-500">*</span>
            </label>
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-600 pl-1">{errors.message}</p>
            )}
          </motion.div>
          
          {/* Submit Button */}
          <motion.div 
            variants={formItemVariants}
            custom={6}
            className="pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center px-6 py-4 rounded-full shadow-md text-base font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                isSubmitting 
                  ? 'bg-amber-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400'
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
                  <PaperAirplaneIcon className="ml-2 -mr-1 h-5 w-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;