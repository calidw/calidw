'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Create explicit motion components for React 19 compatibility
const MotionDiv = motion.div;
const MotionBlockquote = motion.blockquote;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Mock testimonial data
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string; // Optional location
  rating?: number; // Optional rating (e.g., 1-5)
  image?: string; // New optional image URL property
}

const mockTestimonials: Testimonial[] = [
  {
    id: 'test-001',
    quote: 'Cali Door & Window transformed our home! The new windows are stunning and energy-efficient. The installation team was professional and meticulous.',
    author: 'Sarah & Tom P.',
    location: 'San Francisco, CA',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    id: 'test-002',
    quote: 'From the initial consultation to the final walkthrough, the experience was seamless. Our new entry door is the centerpiece of our facade.',
    author: 'Michael R.',
    location: 'Oakland, CA',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    id: 'test-003',
    quote: 'We were impressed with the quality of the windows and the knowledge of the sales team. Installation was quick and clean. Highly recommend!',
    author: 'Jennifer L.',
    location: 'Palo Alto, CA',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
  },
];

interface TestimonialsProps {
  testimonials?: Testimonial[]; // Allow passing testimonials or use mock data
  maxItems?: number; // Optionally limit the number displayed
  title?: string;
  subtitle?: string;
}

// Star rating component (optional)
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-amber-500 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'fill-current' : 'fill-current text-slate-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = ({ 
  testimonials = mockTestimonials,
  maxItems,
  title = "What Our Clients Say",
  subtitle = "Real feedback from satisfied homeowners and partners."
}: TestimonialsProps) => {

  const itemsToDisplay = maxItems ? testimonials.slice(0, maxItems) : testimonials;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="relative mb-16 md:mb-20 max-w-xl mx-auto text-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-amber-100 blur-3xl opacity-30"></div>
          </div>
          <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {title}
          </h2>
          <p className="relative text-lg text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </MotionDiv>
        
        <MotionDiv 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {itemsToDisplay.map((testimonial) => (
            <MotionDiv
              key={testimonial.id}
              variants={fadeInUp}
              className="h-full"
            >
              <MotionBlockquote 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="h-full bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-400"></div>
                
                <svg className="h-8 w-8 text-amber-300 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8zM25.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8z"></path>
                </svg>
                
                {testimonial.rating && <StarRating rating={testimonial.rating} />}
                
                <p className="text-slate-600 text-lg italic leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <footer className="mt-auto pt-6 border-t border-slate-100 flex items-center">
                  {testimonial.image ? (
                    <Image 
                      src={testimonial.image} 
                      alt={`${testimonial.author}`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-white mr-3 text-xl font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    {testimonial.location && (
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    )}
                  </div>
                </footer>
              </MotionBlockquote>
            </MotionDiv>
          ))}
        </MotionDiv>
        
        {maxItems && testimonials.length > maxItems && (
          <MotionDiv 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-14 text-center"
          >
            <Link 
              href="/testimonials" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-all duration-300 group"
            >
              View All Testimonials
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

export default Testimonials; 