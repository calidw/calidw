'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  showPrice?: boolean;
}

export function ProductCard({ product, showPrice = false }: ProductCardProps) {
  const { id, name, description, imageUrl, category, features } = product;
  // Use slug if available, otherwise fall back to id
  const productUrl = `/products/${product.slug || id}`;
  const [imgError, setImgError] = useState(false);

  // Fallback image URL for errors
  const fallbackImg = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop";
  
  // Check if product is Title 24 compliant
  const isTitle24Compliant = features?.some(feature => 
    feature.toLowerCase().includes('title 24') || 
    feature.toLowerCase().includes('energy efficient')
  );

  return (
    <Link href={productUrl} className="group block h-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-slate-100 hover:border-red-300">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={imgError ? fallbackImg : imageUrl} 
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgError(true)}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Energy Efficiency Badge */}
        {isTitle24Compliant && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-green-100 bg-opacity-90 rounded-md text-xs font-medium text-green-800">
            Energy Efficient
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            {category === 'window' ? 'Window' : 'Door'}
          </span>
          {showPrice && product.price && (
            <span className="text-lg font-semibold text-red-800">${product.price.toFixed(2)}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-red-800 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        
        {/* Product features */}
        {features && features.length > 0 && (
          <div className="mt-2 mb-3">
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 2).map((feature, index) => (
                <span key={index} className="inline-block px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded-md">
                  {feature.includes("Title 24") ? "CA Title 24" : feature}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-3 flex items-center">
          <div className="flex-grow">
            <span className="inline-flex items-center text-sm text-slate-600 group-hover:text-red-800 transition-colors duration-300">
              View details
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;