import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '../../../lib/sanity';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';
import { Product } from '../../data/products';

// Define the Sanity product type
interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  gallery?: string[];
  category: 'door' | 'window';
  features?: string[];
  materials?: string[];
  inStock: boolean;
  titleTwentyFourCompliant?: boolean;
  seo?: {
    title?: string;
    description?: string;
  };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductBySlug(params.id);
  
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

export async function generateStaticParams() {
  const products = await getAllProducts();
  
  // Filter out any products that don't have a valid slug
  return products
    .filter((product: SanityProduct) => product && product.slug)
    .map((product: SanityProduct) => ({
      id: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductBySlug(params.id);
  
  if (!product) {
    notFound();
  }
  
  // Transform Sanity product data to match the Product interface expected by ProductDetail
  const transformedProduct: Product = {
    id: product._id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    imageUrl: product.imageUrl,
    category: product.category,
    inStock: product.inStock,
    titleTwentyFourCompliant: product.titleTwentyFourCompliant,
    gallery: product.gallery,
    features: product.features,
    materials: product.materials,
    seo: product.seo
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-0">
        <ProductDetail product={transformedProduct} />
        
        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Questions About This {transformedProduct.category}?</h2>
              <p className="text-slate-300 text-lg mb-8">
                Our team of experts is ready to help you choose the perfect {transformedProduct.category.toLowerCase()} 
                for your home or business. Contact us today for pricing, technical specifications, or to schedule 
                a consultation.
              </p>
              <a 
                href={`/contact?product=${encodeURIComponent(transformedProduct.name)}&id=${transformedProduct.id}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:-translate-y-1"
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