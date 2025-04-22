import { getProductsByCategory } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

export const metadata = {
  title: 'Windows | Cali Door & Window',
  description: 'Explore our collection of energy-efficient windows including double-hung, casement, picture, awning, sliders, and bay/bow windows - all California Title 24 compliant.',
};

export default function WindowsPage() {
  const windowProducts = getProductsByCategory('window');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Windows</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our extensive collection of energy-efficient windows. We offer a variety of styles including 
              double hung, casement, picture, awning, slider, and bay/bow windows to enhance your home with natural light and ventilation.
              All our windows meet California Title 24 requirements, helping you save money on energy bills.
            </p>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Why Choose Our Windows?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Energy Efficiency</h3>
                <p className="text-gray-700">
                  Our windows meet California Title 24 requirements with advanced insulation technologies and Low-E glass to reduce energy costs and improve home comfort.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Professional Installation</h3>
                <p className="text-gray-700">
                  We offer expert installation services to ensure your windows are properly fitted for maximum energy efficiency and performance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-amber-600 mb-2">Quality & Durability</h3>
                <p className="text-gray-700">
                  Constructed from high-quality materials that resist warping, rotting, and corrosion for long-lasting performance and value.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <ProductGrid products={windowProducts} />
      </main>
      
      <Footer />
    </div>
  );
} 