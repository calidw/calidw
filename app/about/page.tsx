import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us | Cali Door & Window',
  description: 'Learn about Cali Door & Window and our commitment to quality, service, and customer satisfaction.',
};

const team = [
  { name: 'John Smith', role: 'Founder & CEO', imageUrl: '/placeholder.jpg' },
  { name: 'Sarah Johnson', role: 'Design Director', imageUrl: '/placeholder.jpg' },
  { name: 'Michael Chen', role: 'Installation Manager', imageUrl: '/placeholder.jpg' },
  { name: 'Lisa Rodriguez', role: 'Customer Relations', imageUrl: '/placeholder.jpg' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Updated colors */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                About Cali Door & Window
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                We're passionate about transforming homes and businesses with quality doors and windows
                that combine beauty, functionality, and energy efficiency.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story - Updated text colors */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[5/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/placeholder.jpg" // Use local placeholder
                  alt="Cali Door & Window showroom interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Removed prose-blue, adjusted text color */}
              <div className="prose prose-lg max-w-none text-slate-600">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                  Our Story
                </h2>
                <p>
                  Founded in 2005, Cali Door & Window began with a simple mission: to provide homeowners and 
                  contractors with high-quality door and window solutions backed by exceptional service.
                </p>
                <p>
                  What started as a small family business has grown into one of the Bay Area's most trusted 
                  suppliers of premium doors and windows. Our growth is a testament to our unwavering 
                  commitment to quality products and customer satisfaction.
                </p>
                <p>
                  Today, we continue to uphold the values that have guided us from the beginning: integrity, 
                  craftsmanship, and a customer-first approach to everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values - Updated colors */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 md:mb-16 text-center">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1: Quality */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                 {/* Updated icon colors */}
                <div className="bg-amber-100 text-amber-600 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We never compromise. Every product is selected for superior materials, craftsmanship, and performance.
                </p>
              </div>
              {/* Value 2: Service */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                 <div className="bg-amber-100 text-amber-600 rounded-full h-12 w-12 flex items-center justify-center mb-5">
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
                 <div className="bg-amber-100 text-amber-600 rounded-full h-12 w-12 flex items-center justify-center mb-5">
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Sustainability</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We offer energy-efficient products that reduce environmental impact and improve home comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team - Updated colors and uses team data */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 md:mb-16 text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((person) => (
                <div key={person.name} className="text-center bg-slate-50 p-6 rounded-lg border border-slate-100">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 shadow-md">
                    <Image
                      src={person.imageUrl} // Uses /placeholder.jpg from team data
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{person.name}</h3>
                  {/* Updated role text color */}
                  <p className="text-sm text-amber-700">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 