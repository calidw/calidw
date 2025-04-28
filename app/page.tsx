'use client';

import { Product } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for staggered reveals
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Create animation components
const MotionDiv = motion.div;

export default function Home() {
  // Use static product data with guaranteed working images
  const featuredProducts: Product[] = [
    {
      id: 'door-001',
      name: 'Interior Door',
      description: 'Stylish interior door design to complement your home\'s aesthetic',
      price: 299.99,
      imageUrl: 'https://picsum.photos/id/2/800/600',
      category: 'door',
      features: ['Multiple style options', 'Sound dampening', 'Custom sizing available'],
      materials: ['Solid wood core', 'Various finish options'],
      dimensions: {
        width: 36,
        height: 80,
        unit: 'in'
      },
      inStock: true
    },
    {
      id: 'door-002',
      name: 'French Patio Door',
      description: 'Elegant French patio door with energy efficient design that meets California Title 24 requirements',
      price: 1499.99,
      imageUrl: 'https://picsum.photos/id/3/800/600',
      category: 'door',
      features: ['California Title 24 compliant', 'Energy efficient', 'Dual opening panels', 'Multi-point locking system'],
      materials: ['Hardwood frame', 'Insulated glass'],
      dimensions: {
        width: 72,
        height: 80,
        unit: 'in'
      },
      inStock: true
    },
    {
      id: 'window-001',
      name: 'Casement Window',
      description: 'Modern casement window with maximum ventilation and California Title 24 energy efficiency',
      price: 449.99,
      imageUrl: 'https://picsum.photos/id/4/800/600',
      category: 'window',
      features: ['California Title 24 compliant', 'Energy efficient', 'Full opening ventilation', 'Easy operation'],
      materials: ['Fiberglass frame', 'Low-E glass'],
      dimensions: {
        width: 30,
        height: 48,
        unit: 'in'
      },
      inStock: true
    },
    {
      id: 'window-003',
      name: 'Bay/Bow Window',
      description: 'Elegant bay/bow window that creates additional space with panoramic views, while meeting California Title 24 requirements',
      price: 1899.99,
      imageUrl: 'https://picsum.photos/id/5/800/600',
      category: 'window',
      features: ['California Title 24 compliant', 'Energy efficient', 'Creates additional space', 'Panoramic views'],
      materials: ['Hardwood frame', 'Triple-pane glass', 'Energy efficient insulation'],
      dimensions: {
        width: 80,
        height: 60,
        unit: 'in'
      },
      inStock: true
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroBanner />
        
        {/* Featured Products Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our selection of premium doors and windows crafted with exceptional materials and attention to detail.
              </p>
            </div>
            
            <ProductGrid 
              products={featuredProducts} 
              showPrice={false}
            />
            
            <div className="mt-10 text-center">
              <Link href="/products" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-amber-700 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300">
                View All Products
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
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
                <div className="h-40 w-40 rounded-full bg-amber-100 blur-3xl opacity-40"></div>
              </div>
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Why Choose Cali Door & Window?
              </h2>
              <p className="relative text-lg text-slate-600 max-w-2xl mx-auto">
                Experience the difference that premium quality, expert craftsmanship, and dedicated service make in every project.
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {[
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Superior Quality",
                  description: "We source only the finest materials, ensuring durability, beauty, and long-term performance for your home."
                },
                {
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-7 0H5m2 0v-5a2 2 0 012-2h3a2 2 0 012 2v5m-7 0h7",
                  title: "Expert Installation",
                  description: "Our certified technicians guarantee precise installation for optimal energy efficiency and flawless operation."
                },
                {
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  title: "Dedicated Service",
                  description: "From initial consultation to post-installation support, we prioritize your satisfaction every step of the way."
                }
              ].map((feature, index) => (
                <MotionDiv 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="rounded-xl p-8 border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl h-16 w-16 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-50 blur-3xl opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <MotionDiv 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Our Products & Services
              </h2>
              <p className="text-lg text-slate-600">
                Energy-efficient windows and doors that meet California Title 24 requirements, with professional installation available.
              </p>
            </MotionDiv>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transform -skew-x-12"></div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    Energy Efficiency
                  </h3>
                  <p className="text-slate-600 mb-3">
                    All our windows and patio doors meet California Title 24 requirements, helping you save money on energy costs.
                  </p>
                  <Link href="/products" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center text-sm">
                    Learn more
                    <svg className="w-3.5 h-3.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transform -skew-x-12"></div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    Window Styles
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Choose from double hung, casement, picture, awning, slider, and bay/bow windows to enhance your home.
                  </p>
                  <Link href="/windows" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center text-sm">
                    View windows
                    <svg className="w-3.5 h-3.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transform -skew-x-12"></div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    Door Options
                  </h3>
                  <p className="text-slate-600 mb-3">
                    Explore our interior doors and patio doors including elegant French doors and space-efficient sliding doors.
                  </p>
                  <Link href="/doors" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center text-sm">
                    View doors
                    <svg className="w-3.5 h-3.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={fadeInUp}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 h-full border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transform -skew-x-12"></div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    Professional Installation
                  </h3>
                  <p className="text-slate-600 mb-3">
                    We offer expert installation services for all our windows and doors to ensure optimal performance.
                  </p>
                  <Link href="/services" className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center text-sm">
                    Learn more
                    <svg className="w-3.5 h-3.5 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Offerings Section with Image */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                  Our Premium Offerings
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  From stunning entryways to expansive window walls, we provide a comprehensive range of high-quality products and services tailored to your specific needs.
                </p>
                <ul className="space-y-5">
                  {[
                    { 
                      title: "Premium Windows", 
                      description: "Casement, double-hung, bay, sliding, and custom styles."
                    },
                    { 
                      title: "Exterior & Interior Doors", 
                      description: "Entry, patio, French, sliding, barn doors, and more."
                    },
                    { 
                      title: "Professional Installation", 
                      description: "Certified technicians ensuring perfect fits and performance."
                    },
                    { 
                      title: "Consultation & Design", 
                      description: "Expert guidance to help you choose the right solutions."
                    }
                  ].map((item, index) => (
                    <MotionDiv 
                      key={index}
                      initial="hidden"
                      whileInView="visible" 
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      variants={fadeInUp}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                      </span>
                      <div>
                        <strong className="font-semibold text-slate-900">{item.title}:</strong>
                        <span className="text-slate-600 ml-1">{item.description}</span>
                      </div>
                    </MotionDiv>
                  ))}
                </ul>
              </MotionDiv>
              
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full rounded-xl border-2 border-amber-300 transform rotate-3 opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-xl border-2 border-amber-300 transform -rotate-3 opacity-20"></div>
                <div className="relative aspect-[5/4] rounded-xl overflow-hidden shadow-lg">
            <Image
                    src="https://images.unsplash.com/photo-1615876153265-38ef5b6aadf2?w=1000&h=800&q=80&auto=format&fit=crop"
                    alt="Assortment of high-quality window and door products"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials maxItems={3} />
        
        {/* CTA Section */}
        <section className="py-20 md:py-28 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a complimentary consultation and quote. Let us help you bring your vision to life with premium doors and windows.
              </p>
              <MotionDiv
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/contact?form=consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-amber-500 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-500 transition-all duration-300"
                >
                  Schedule Your Consultation
                </Link>
              </MotionDiv>
            </MotionDiv>
        </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
