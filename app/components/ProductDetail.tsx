'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../data/products';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'specifications'>('description');

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const tabButtonBase = "pb-3 text-sm font-medium border-b-2 transition-colors duration-200 focus:outline-none";
  const tabButtonActive = "border-amber-600 text-amber-600";
  const tabButtonInactive = "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {!product.inStock && (
            <div className="absolute top-3 right-3 bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium">
              Out of Stock
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <Link href={`/${product.category}s`} className="text-sm text-amber-600 hover:underline mb-2 capitalize">
            {product.category}s
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3">{product.name}</h1>
          <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

          <div className="mt-auto pt-6">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}&id=${product.id}`}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${!product.inStock ? 'bg-slate-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 hover:scale-[1.01]'}`}
              aria-disabled={!product.inStock}
            >
              {product.inStock ? 'Request a Quote' : 'Currently Unavailable'}
            </Link>
          </div>
          
          <div className="mt-10">
            <div className="border-b border-slate-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`${tabButtonBase} ${activeTab === 'description' ? tabButtonActive : tabButtonInactive}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`${tabButtonBase} ${activeTab === 'features' ? tabButtonActive : tabButtonInactive}`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`${tabButtonBase} ${activeTab === 'specifications' ? tabButtonActive : tabButtonInactive}`}
                >
                  Specifications
                </button>
              </nav>
            </div>

            <div className="mt-6 text-sm text-slate-600 prose max-w-none">
              {activeTab === 'description' && (
                <div>
                  <p>{product.description}</p>
                </div>
              )}
              {activeTab === 'features' && (
                <div>
                  <ul role="list" className="list-disc space-y-2 pl-5">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'specifications' && (
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Materials:</h4>
                  <ul role="list" className="list-disc space-y-2 pl-5 mb-4">
                    {product.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                  <h4 className="font-medium text-slate-900 mb-2">Dimensions:</h4>
                  <p>
                    Width: {product.dimensions.width} {product.dimensions.unit}<br />
                    Height: {product.dimensions.height} {product.dimensions.unit}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 