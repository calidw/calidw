import { notFound } from 'next/navigation';
import { getProductById, getAllProducts } from '../../data/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | Cali Door & Window',
      description: 'The product you are looking for could not be found.',
    };
  }
  
  return {
    title: `${product.name} | Cali Door & Window`,
    description: product.description,
  };
}

export function generateStaticParams() {
  const products = getAllProducts();
  
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <ProductDetail product={product} />
        
        <div className="container mx-auto px-4 py-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Installation Services</h3>
              <p className="text-slate-700 mb-4">
                Our professional installation team ensures your new {product.category} is properly installed
                for optimal performance and energy efficiency.
              </p>
              <a 
                href="/contact" 
                className="text-amber-600 font-medium hover:text-amber-800"
              >
                Contact us for installation quotes →
              </a>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Maintenance Tips</h3>
              <p className="text-slate-700 mb-4">
                Proper maintenance of your {product.category} will extend its lifespan and maintain its appearance
                and functionality for years to come.
              </p>
              <a 
                href="#" 
                className="text-amber-600 font-medium hover:text-amber-800"
              >
                View maintenance guide →
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 