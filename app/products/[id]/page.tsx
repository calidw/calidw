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
  // This is now a server component
  const product = getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-0">
        <ProductDetail product={product} />
        
        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Questions About This {product.category}?</h2>
              <p className="text-slate-300 text-lg mb-8">
                Our team of experts is ready to help you choose the perfect {product.category.toLowerCase()} 
                for your home or business. Contact us today for pricing, technical specifications, or to schedule 
                a consultation.
              </p>
              <a 
                href={`/contact?product=${encodeURIComponent(product.name)}&id=${product.id}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:bg-amber-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us For More Information
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 