import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { getAboutPageData } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

export const metadata = {
  title: 'About Us | Cali Door & Window',
  description: 'Learn about Cali Door & Window and our commitment to quality, service, and customer satisfaction.',
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Define types for our Sanity data
interface AboutPageData {
  heroSection?: {
    heading?: string;
    subheading?: string;
    blurIntensity?: number;
  };
  storySection?: {
    heading?: string;
    content?: PortableTextBlock[];
    image?: string;
  };
  values?: Array<{
    title: string;
    description: string;
    iconName?: string;
  }>;
  serviceAreas?: Array<{
    name: string;
    description: string;
  }>;
  expertise?: {
    windowSpecializations?: string[];
    doorSpecializations?: string[];
  };
}

export default async function AboutPage() {
  const aboutData: AboutPageData = await getAboutPageData();
  
  // Dynamically determine blur intensity class based on the value from Sanity
  const getBlurClass = (intensity: number | undefined) => {
    if (!intensity) return 'backdrop-blur-md';
    
    const intensityMap = {
      1: 'backdrop-blur-sm',
      2: 'backdrop-blur',
      3: 'backdrop-blur-md',
      4: 'backdrop-blur-lg',
      5: 'backdrop-blur-xl',
      6: 'backdrop-blur-2xl',
      7: 'backdrop-blur-3xl',
      8: 'backdrop-blur-3xl backdrop-blur',
      9: 'backdrop-blur-3xl backdrop-blur-md',
      10: 'backdrop-blur-3xl backdrop-blur-xl',
    };
    
    return intensityMap[intensity as keyof typeof intensityMap] || 'backdrop-blur-md';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Updated colors */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20 relative">
          <div className={`absolute inset-0 ${getBlurClass(aboutData?.heroSection?.blurIntensity)} bg-slate-900/30`}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {aboutData?.heroSection?.heading || 'About Cali Door & Window'}
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                {aboutData?.heroSection?.subheading || "We're passionate about transforming homes and businesses with quality doors and windows that combine beauty, functionality, and energy efficiency."}
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://www.yelp.com/biz/cali-doors-and-windows-glendale?osq=cali+doors+and+windows&override_cta=Get+pricing+%26+availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d32323] to-[#b80000] hover:from-[#b80000] hover:to-[#d32323] text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-400"
                  aria-label="Read our reviews on Yelp"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.5 10.5c-.3-.5-.8-.8-1.4-.7l-4.2.7c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4l.7-4.2c.1-.6-.2-1.1-.7-1.4-.5-.3-1.1-.2-1.5.2l-2.9 3.5c-.1.1-.3.1-.4.1-.2 0-.3-.1-.4-.2l-3.5-2.9c-.4-.4-1-.5-1.5-.2-.5.3-.8.8-.7 1.4l.7 4.2c0 .2-.1.3-.2.4-.1.1-.3.1-.4.1l-4.2-.7c-.6-.1-1.1.2-1.4.7-.3.5-.2 1.1.2 1.5l3.5 2.9c.1.1.1.3.1.4 0 .2-.1.3-.2.4l-2.9 3.5c-.4.4-.5 1-.2 1.5.3.5.8.8 1.4.7l4.2-.7c.2 0 .3.1.4.2.1.1.1.3.1.4l-.7 4.2c-.1.6.2 1.1.7 1.4.5.3 1.1.2 1.5-.2l2.9-3.5c.1-.1.3-.1.4-.1.2 0 .3.1.4.2l3.5 2.9c.4.4 1 .5 1.5.2.5-.3.8-.8.7-1.4l-.7-4.2c0-.2.1-.3.2-.4.1-.1.3-.1.4-.1l4.2.7c.6.1 1.1-.2 1.4-.7.3-.5.2-1.1-.2-1.5l-3.5-2.9c-.1-.1-.1-.3-.1-.4 0-.2.1-.3.2-.4l2.9-3.5c.4-.4.5-1 .2-1.5z"/></svg>
                  <span className="tracking-wide">Read Our Yelp Reviews</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story - Updated text colors */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[5/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={aboutData?.storySection?.image || "/placeholder.jpg"}
                  alt="Cali Door & Window showroom interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Removed prose-blue, adjusted text color */}
              <div className="prose prose-lg max-w-none text-slate-600">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                  {aboutData?.storySection?.heading || 'Our Story'}
                </h2>
                {aboutData?.storySection?.content ? (
                  <PortableText value={aboutData.storySection.content} />
                ) : (
                  <>
                    <p>
                      Cali Door & Window was established with a simple mission: to provide homeowners and 
                      contractors with high-quality door and window solutions backed by exceptional service.
                    </p>
                    <p>
                      While we are a new business, our team brings over 15 years of industry experience 
                      in door and window installation, design, and customer service. Our expertise makes us one of the 
                      most knowledgeable teams in the Los Angeles area for premium doors and windows.
                    </p>
                    <p>
                      We uphold the values that guide everything we do: integrity, 
                      craftsmanship, and a customer-first approach to every project we undertake.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-lg text-slate-600">
                  We're committed to transforming spaces with premium quality doors and windows 
                  that combine beauty, functionality, and energy efficiency.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {aboutData?.values ? (
                  aboutData.values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                      <div className="bg-red-100 text-red-700 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                        {value.iconName ? (
                          <Image 
                            src={`/icons/${value.iconName}`} 
                            alt={value.title} 
                            width={24} 
                            height={24} 
                          />
                        ) : (
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  ))
                ) : (
                  // Default values if no data from Sanity
                  <>
                    {/* Value 1: Quality */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                      <div className="bg-red-100 text-red-700 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality Craftsmanship</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We partner with premium manufacturers to deliver products that exceed industry standards.
                      </p>
                    </div>
                    {/* Value 2: Customer Service */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                      <div className="bg-red-100 text-red-700 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">Customer Service</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We build lasting relationships through honest communication, expert guidance, and responsive support.
                      </p>
                    </div>
                    {/* Value 3: Sustainability */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                      <div className="bg-red-100 text-red-700 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">Sustainability</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We offer energy-efficient products that reduce environmental impact and improve home comfort.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10 text-center">
                Where We Serve
              </h2>
              
              <div className="bg-slate-50 rounded-xl p-8 md:p-10 shadow-sm border border-slate-100 mb-12">
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>
                    Cali Door & Window proudly serves residential and commercial clients throughout the greater Los Angeles area. 
                    Our service territory includes:
                  </p>
                  
                  <div className="my-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {aboutData?.serviceAreas ? (
                        aboutData.serviceAreas.slice(0, 4).map((area, index) => (
                          <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 md:p-6 transition-all hover:shadow-md hover:border-red-200 h-full">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h4 className="text-lg font-semibold text-slate-800">{area.name}</h4>
                            </div>
                            <p className="text-slate-600 text-sm">{area.description}</p>
                          </div>
                        ))
                      ) : (
                        // Default areas if no data from Sanity
                        <>
                          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 md:p-6 transition-all hover:shadow-md hover:border-red-200 h-full">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h4 className="text-lg font-semibold text-slate-800">Los Angeles</h4>
                            </div>
                            <p className="text-slate-600 text-sm">Premium window and door solutions for residential and commercial properties throughout Los Angeles.</p>
                          </div>
                          
                          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 md:p-6 transition-all hover:shadow-md hover:border-red-200 h-full">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h4 className="text-lg font-semibold text-slate-800">Glendale</h4>
                            </div>
                            <p className="text-slate-600 text-sm">Premium door and window installation services for Glendale homes and businesses.</p>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {!aboutData?.serviceAreas && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 md:p-6 transition-all hover:shadow-md hover:border-red-200 h-full">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800">Burbank</h4>
                          </div>
                          <p className="text-slate-600 text-sm">Expert door and window solutions for Burbank residences and commercial spaces.</p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 md:p-6 transition-all hover:shadow-md hover:border-red-200 h-full">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800">Pasadena</h4>
                          </div>
                          <p className="text-slate-600 text-sm">Quality window and door installations tailored to Pasadena's architectural styles.</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <p>
                    With over 15 years of combined industry experience, our team has completed hundreds of successful 
                    door and window installations throughout the Los Angeles region. We understand the unique architectural 
                    styles found in Southern California homes and businesses, from Spanish Colonial and Craftsman to Mid-Century 
                    Modern and Contemporary designs.
                  </p>
                  
                  <div className="mt-8 text-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-700 hover:bg-red-800 transition-colors"
                    >
                      Contact Us for Your Project
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 md:p-10 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-3">Window Specializations</h4>
                    <ul className="space-y-2 text-slate-300">
                      {aboutData?.expertise?.windowSpecializations ? (
                        aboutData.expertise.windowSpecializations.map((spec, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {spec}
                          </li>
                        ))
                      ) : (
                        // Default window specializations
                        <>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Energy-efficient vinyl windows
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Custom wood and aluminum windows
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Specialty and architectural windows
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Window replacements and retrofits
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-3">Door Specializations</h4>
                    <ul className="space-y-2 text-slate-300">
                      {aboutData?.expertise?.doorSpecializations ? (
                        aboutData.expertise.doorSpecializations.map((spec, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {spec}
                          </li>
                        ))
                      ) : (
                        // Default door specializations
                        <>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Entry and exterior doors
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Sliding and French patio doors
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Interior doors and barn doors
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Folding and multi-slide door systems
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 