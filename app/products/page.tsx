export const dynamic = 'force-dynamic';
import { getAllProducts } from '../../lib/sanity';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Link from 'next/link';

export const metadata = {
  title: 'All Products | Cali Door & Window',
  description: 'Browse our selection of energy-efficient windows and doors including double hung, casement, picture, awning, sliders, bay/bow windows, interior doors, and patio doors.',
};

export default async function ProductsPage() {
  // Fetch products from Sanity instead of static data
  const products = await getAllProducts();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-100 blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-slate-100 blur-3xl opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                Our Products
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Premium Doors & Windows
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Explore our complete collection of high-quality, energy-efficient doors and windows designed for California homes.
              </p>
            </div>

            {/* Product Grid */}
            <ProductGrid 
              products={products} 
              showPrice={false}
              title=""
              subtitle=""
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help Choosing?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our team of experts is ready to assist you in selecting the perfect doors and windows for your project.
              </p>
              <Link 
                href="/contact?form=quote" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-800 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 