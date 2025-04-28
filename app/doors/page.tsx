import { getProductsByCategory } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

export const metadata = {
  title: 'Doors | Cali Door & Window',
  description: 'Explore our collection of interior and patio doors including sliding doors and French doors with professional installation available.',
};

export default function DoorsPage() {
  const doorProducts = getProductsByCategory('door');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Doors</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our extensive collection of quality interior and patio doors. From elegant French doors to modern 
              sliding designs, we offer a variety of styles to enhance your home&apos;s aesthetics and functionality.
              Our patio doors are energy efficient and California Title 24 compliant, helping you save on energy costs.
            </p>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Why Choose Our Doors?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Energy Efficiency</h3>
                <p className="text-gray-700">
                  Our exterior and patio doors meet California Title 24 requirements with superior insulation to help maintain your home&apos;s temperature and reduce energy costs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Professional Installation</h3>
                <p className="text-gray-700">
                  We offer expert installation services to ensure your doors are properly fitted for optimal energy efficiency, security, and smooth operation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Security & Style</h3>
                <p className="text-gray-700">
                  Built with reinforced materials and advanced locking systems while available in various styles to complement your home&apos;s architecture.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Door Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Interior Doors</h3>
                  <p className="text-gray-600">
                    Our interior doors are designed to complement your home&apos;s aesthetic while providing privacy and sound insulation between rooms.
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Patio Doors</h3>
                  <p className="text-gray-600">
                    Connect your indoor and outdoor spaces with our energy-efficient, stylish patio door options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ProductGrid products={doorProducts} />
      </main>
      
      <Footer />
    </div>
  );
} 