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

// Testimonial interface aligned with Sanity schema
export interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  image?: string | {
    asset?: {
      url?: string;
      _ref?: string;
    };
    _type?: 'image';
  };
  projectType?: string;
  date?: string;
  isFeatured?: boolean;
  productReference?: {
    _id: string;
    name: string;
    slug: string;
  };
}

interface TestimonialsProps {
  testimonials?: Testimonial[] | null;
  maxItems?: number;
  title?: string;
  subtitle?: string;
}

// Star rating component (optional)
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-red-500 mb-4">
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
  testimonials = null, // Changed default to null instead of mockTestimonials
  maxItems,
  title = "What Our Clients Say",
  subtitle = "Real feedback from satisfied homeowners and partners."
}: TestimonialsProps) => {
  // Debug logging to see what data we're getting
  console.log('Testimonials component props:', { 
    testimonials: testimonials?.length || 'null/undefined', 
    title, 
    subtitle,
    maxItems 
  });
  
  // Only use real testimonials data - no fallback to mock data unless explicitly no data available
  const safeTestimonials = testimonials && testimonials.length > 0 ? testimonials : [];
  const itemsToDisplay = maxItems ? safeTestimonials.slice(0, maxItems) : safeTestimonials;
  
  console.log('Testimonials rendering:', { 
    safeTestimonialsLength: safeTestimonials.length,
    itemsToDisplayLength: itemsToDisplay.length,
    firstItem: itemsToDisplay[0]?.name,
    firstItemImage: itemsToDisplay[0]?.image,
    imageUrls: itemsToDisplay.map(t => ({ name: t.name, image: t.image }))
  });

  // Helper function to extract image URL from Sanity image object or string
  const getImageUrl = (image: Testimonial['image']): string | null => {
    if (!image) return null;
    
    // If it's already a string URL, return it
    if (typeof image === 'string') {
      return image.trim() !== '' ? image : null;
    }
    
    // If it's a Sanity image object with asset URL
    if (typeof image === 'object' && image.asset?.url) {
      return image.asset.url;
    }
    
    // If it's a Sanity image object with _ref
    if (typeof image === 'object' && image.asset?._ref) {
      // Convert Sanity asset reference to URL
      const ref = image.asset._ref;
      const match = ref.match(/image-([a-f\d]+)-(\d+x\d+)-(\w+)/);
      if (match) {
        const [, id, dimensions, format] = match;
        return `https://cdn.sanity.io/images/ejlhmf3v/production/${id}-${dimensions}.${format}`;
      }
    }
    
    return null;
  };

  // If no testimonials available, show loading or empty state instead of mock data
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-red-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
            <div className="text-slate-500">
              {testimonials === null ? 'Loading testimonials...' : 'No testimonials available at this time.'}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-red-50 overflow-hidden">
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
            <div className="h-40 w-40 rounded-full bg-red-100 blur-3xl opacity-30"></div>
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
              key={testimonial._id}
              variants={fadeInUp}
              className="h-full"
            >
              <MotionBlockquote 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="h-full bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col relative overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-full opacity-25">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-red-100 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl -z-10"></div>
                </div>
                
                <svg className="h-8 w-8 text-red-300 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8zM25.333 7h-5.333v8h5.333v8l8-8v-8h-8v-8z"></path>
                </svg>
                
                {testimonial.rating && <StarRating rating={testimonial.rating} />}
                
                <p className="text-slate-600 text-lg italic leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <footer className="mt-auto pt-6 border-t border-slate-100 flex items-center">
                  {(() => {
                    const imageUrl = getImageUrl(testimonial.image);
                    return imageUrl ? (
                      <Image 
                        src={imageUrl} 
                        alt={`${testimonial.name}`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover mr-3"
                        onError={() => {
                          console.error('Image failed to load:', testimonial.image);
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', testimonial.image);
                        }}
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-white mr-3 text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    );
                  })()}
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    )}
                  </div>
                </footer>
              </MotionBlockquote>
            </MotionDiv>
          ))}
        </MotionDiv>
        
        {maxItems && testimonials && testimonials.length > maxItems && (
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