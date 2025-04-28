import { Metadata } from 'next';
import { getProductById } from '../../data/products';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
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