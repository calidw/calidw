import { getAllProducts } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

export const metadata = {
  title: 'All Products | Cali Door & Window',
  description: 'Browse our selection of energy-efficient windows and doors including double hung, casement, picture, awning, sliders, bay/bow windows, interior doors, and patio doors.',
};

export default function ProductsPage() {
  const products = getAllProducts();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <ProductGrid products={products} showPrice={false} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 