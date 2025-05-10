'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Testimonials, { Testimonial } from './components/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getHomePageData } from '../lib/sanity';
import { urlFor } from '../lib/sanity';

// Define interfaces for our data structure
interface Feature {
  title: string;
  description: string;
  icon?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  fullSizeImage?: string;
  category?: {
    name: string;
    slug: string;
  };
  projectDetails?: Array<{
    label: string;
    value: string;
  }>;
  isFeatured: boolean;
}

interface ProductCard {
  image: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

interface SliderImage {
  image: string;
  alt: string;
  caption?: string;
}

interface HeroBannerData {
  headline: string;
  subheadline: string;
  sliderImages: SliderImage[];
  ctaText: string;
  ctaLink: string;
  leftTextBlur?: number;
}

interface WhyChooseUsSection {
  heading: string;
  subheading: string;
  features: Feature[];
}

interface DoorsWindowsSection {
  heading: string;
  subheading: string;
  doorCard: ProductCard;
  windowCard: ProductCard;
}

interface GallerySection {
  heading: string;
  subheading: string;
  featuredGalleryItems: GalleryItem[];
  ctaText: string;
  ctaLink: string;
}

interface MapSection {
  heading: string;
  subheading: string;
  mapEmbedUrl: string;
}

interface HomeData {
  heroBanner: HeroBannerData;
  whyChooseUs: WhyChooseUsSection;
  doorsWindowsSection: DoorsWindowsSection;
  gallerySection: GallerySection;
  featuredTestimonials: Testimonial[];
  testimonialsSectionHeading: string;
  testimonialsSectionSubheading: string;
  mapSection: MapSection;
}

// Animation variants for staggered reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Create animation components
const MotionDiv = motion.div;

export default function Home() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePageData();
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // While loading, show a simple loading state or return null
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Default image paths if missing from Sanity
  const defaultDoorImage = '/images/products/door-showcase.jpg';
  const defaultWindowImage = '/images/products/window-showcase.jpg';
  const defaultGalleryImages = [
    '/images/gallery/modern-home-entry.jpg',
    '/images/gallery/panoramic-windows.jpg',
    '/images/gallery/french-patio-doors.jpg'
  ];
  
  const openZoomView = (item: GalleryItem) => {
    setActiveItem(item);
    setIsZoomed(true);
    document.body.style.overflow = 'hidden';
  };

  const closeZoomView = () => {
    setIsZoomed(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner 
          headline={homeData?.heroBanner?.headline || "Premium Doors & Windows for Your California Home"}
          subheadline={homeData?.heroBanner?.subheadline || "Energy-efficient, Title 24 compliant solutions with expert installation for residential and commercial properties."}
          sliderImages={homeData?.heroBanner?.sliderImages?.map(img => ({
            src: img.image,
            alt: img.alt,
            label: img.caption || '',
            description: ''
          }))}
          ctaText={homeData?.heroBanner?.ctaText || "Get Consultation"}
          ctaLink={homeData?.heroBanner?.ctaLink || "/contact"}
          leftTextBlur={homeData?.heroBanner?.leftTextBlur || 6}
        />
        
        {/* Why Choose Us Section */}
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8">
            <MotionDiv 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="relative mb-20 md:mb-24 max-w-3xl mx-auto text-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-red-100 blur-3xl opacity-40"></div>
              </div>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8">
                {homeData?.whyChooseUs?.heading || "Why Choose Cali Doors and Windows?"}
              </h2>
              <p className="relative text-xl text-slate-600 max-w-2xl mx-auto">
                {homeData?.whyChooseUs?.subheading || "Experience the difference that premium quality, expert craftsmanship, and dedicated service make in every project. We're committed to excellence in every installation."}
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              {(homeData?.whyChooseUs?.features || []).map((feature: Feature, index: number) => (
                <MotionDiv 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="rounded-xl p-10 border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="bg-gradient-to-br from-red-800 to-red-700 text-white rounded-xl h-20 w-20 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon ? (
                        <Image 
                          src={urlFor(feature.icon).width(40).height(40).url()} 
                          alt={feature.title}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <div className="h-10 w-10 bg-white/20 rounded-full"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Doors & Windows Section */}
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-50 blur-3xl opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <MotionDiv 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                {homeData?.doorsWindowsSection?.heading || "Doors and Windows"}
              </h2>
              <p className="text-xl text-slate-600">
                {homeData?.doorsWindowsSection?.subheading || "Energy-efficient solutions that meet California Title 24 requirements, available with professional installation."}
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Doors */}
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeInUp}
                className="group"
              >
                <Link href={homeData?.doorsWindowsSection?.doorCard?.link || "/products?category=doors"}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-slate-100 group-hover:border-red-200">
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={homeData?.doorsWindowsSection?.doorCard?.image || defaultDoorImage}
                        alt="Premium Doors Collection"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">{homeData?.doorsWindowsSection?.doorCard?.title || "Premium Doors"}</h3>
                        <p className="text-white/90 text-lg max-w-md">{homeData?.doorsWindowsSection?.doorCard?.description || "Enhance your home's entrance with our collection of stylish, secure, and energy-efficient doors."}</p>
                      </div>
                    </div>
                    <div className="p-8 flex items-center justify-between">
                      <span className="text-xl font-semibold text-slate-800 group-hover:text-red-800 transition-colors duration-300">
                        {homeData?.doorsWindowsSection?.doorCard?.linkText || "Explore Door Collection"}
                      </span>
                      <span className="h-10 w-10 rounded-full bg-gradient-to-r from-red-800 to-red-700 flex items-center justify-center text-white transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
              
              {/* Windows */}
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeInUp}
                className="group"
              >
                <Link href={homeData?.doorsWindowsSection?.windowCard?.link || "/products?category=windows"}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border border-slate-100 group-hover:border-red-200">
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={homeData?.doorsWindowsSection?.windowCard?.image || defaultWindowImage}
                        alt="Premium Windows Collection"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">{homeData?.doorsWindowsSection?.windowCard?.title || "Premium Windows"}</h3>
                        <p className="text-white/90 text-lg max-w-md">{homeData?.doorsWindowsSection?.windowCard?.description || "Bring in natural light and improve energy efficiency with our selection of high-quality windows."}</p>
                      </div>
                    </div>
                    <div className="p-8 flex items-center justify-between">
                      <span className="text-xl font-semibold text-slate-800 group-hover:text-red-800 transition-colors duration-300">
                        {homeData?.doorsWindowsSection?.windowCard?.linkText || "Explore Window Collection"}
                      </span>
                      <span className="h-10 w-10 rounded-full bg-gradient-to-r from-red-800 to-red-700 flex items-center justify-center text-white transform group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8">
            <MotionDiv 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                {homeData?.gallerySection?.heading || "Our Gallery"}
              </h2>
              <p className="text-xl text-slate-600">
                {homeData?.gallerySection?.subheading || "Browse through our completed projects and get inspired for your next home improvement."}
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {/* Use Sanity galleryItems if available, otherwise use defaults */}
              {(homeData?.gallerySection?.featuredGalleryItems || []).length > 0 ? (
                // Map over Sanity items
                homeData?.gallerySection?.featuredGalleryItems.map((item, index) => (
                  <MotionDiv
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    variants={fadeInUp}
                    className="h-full"
                  >
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full group cursor-pointer"
                      onClick={() => openZoomView(item)}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.category?.name || 'Gallery Image'}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {item.category?.name}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-black/0 backdrop-blur-sm">
                          <h3 className="text-lg font-medium text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                ))
              ) : (
                // Default gallery items
                [
                  {
                    _id: 'default-1',
                    image: defaultGalleryImages[0],
                    title: "Modern Home Entry",
                    description: "Contemporary entry door installation for a modern home in Pasadena.",
                    category: { name: "Windows", slug: "windows" },
                    isFeatured: true
                  },
                  {
                    _id: 'default-2',
                    image: defaultGalleryImages[1],
                    title: "Panoramic Windows",
                    description: "Large energy-efficient windows for a hillside home with stunning city views.",
                    category: { name: "Windows", slug: "windows" },
                    isFeatured: true
                  },
                  {
                    _id: 'default-3',
                    image: defaultGalleryImages[2],
                    title: "French Patio Doors",
                    description: "Elegant French doors connecting indoor living space to a beautiful garden patio.",
                    category: { name: "Doors", slug: "doors" },
                    isFeatured: true
                  }
                ].map((item, index) => (
                  <MotionDiv
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    variants={fadeInUp}
                    className="h-full"
                  >
                    <div 
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full group cursor-pointer"
                      onClick={() => openZoomView(item)}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.category?.name || 'Gallery Image'}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          {item.category?.name}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-black/0 backdrop-blur-sm">
                          <h3 className="text-lg font-medium text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                ))
              )}
            </div>
            
            <div className="text-center">
              <Link 
                href={homeData?.gallerySection?.ctaLink || "/gallery"} 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {homeData?.gallerySection?.ctaText || "View All Projects"}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials 
          testimonials={homeData?.featuredTestimonials}
          title={homeData?.testimonialsSectionHeading || "What Our Clients Say"}
          subtitle={homeData?.testimonialsSectionSubheading || "Real feedback from satisfied homeowners and partners."}
        />
      </main>
      
      <Footer />

      {/* Zoom View Modal */}
      <AnimatePresence>
        {isZoomed && activeItem && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-black/90 flex items-center justify-center p-4"
            onClick={closeZoomView}
          >
            <button 
              className="absolute top-20 right-4 sm:top-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 shadow-lg hover:bg-white/30 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeZoomView();
              }}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div 
              className="relative max-w-6xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 min-h-[50vh]">
                {/* Image Section */}
                <div className="relative h-[60vh] md:h-auto">
                  <Image
                    src={activeItem.fullSizeImage || activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-contain bg-slate-50"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Details Section */}
                <div className="p-8 overflow-y-auto max-h-[80vh]">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
                    {activeItem.category?.name}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {activeItem.title}
                  </h2>
                  <p className="text-slate-600 mb-8">
                    {activeItem.description}
                  </p>
                  
                  {/* CTA Section */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href="/contact?form=quote"
                      className="w-full block text-center py-3 px-4 bg-gradient-to-r from-red-800 to-red-700 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-colors"
                    >
                      Request Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
