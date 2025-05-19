import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Debug environment variables
console.log('Environment Check:', {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'Set' : 'Not Set',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ? 'Set' : 'Not Set',
  nodeEnv: process.env.NODE_ENV,
});

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-19', // Use today's date or your preferred version
  // Disable caching to ensure fresh data with every request
  // This helps prevent stale data issues that might occur in production
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Add token if you need authenticated requests
  perspective: 'published',
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Define type for Sanity image reference
interface SanityImageSource {
  asset?: {
    _ref?: string;
  };
  [key: string]: unknown;
}

// Helper function to build image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Debug function to test Sanity connection
async function testSanityConnection() {
  try {
    const result = await client.fetch('*[_id == "system" || _type == "system"][0]');
    console.log('Sanity connection test:', result ? 'Success' : 'No data returned');
    return true;
  } catch (error) {
    console.error('Sanity connection test failed:', error);
    return false;
  }
}

interface SanityError {
  message?: string;
  stack?: string;
  query?: string;
}

export async function getGalleryItems() {
  console.log('Fetching gallery items...');
  
  // Test connection first
  const isConnected = await testSanityConnection();
  if (!isConnected) {
    console.error('Failed to connect to Sanity, using fallback data');
    return [];
  }

  try {
    const query = `*[_type == "galleryItem"] {
      _id,
      title,
      description,
      "image": image.asset->url,
      "fullSizeImage": fullSizeImage.asset->,
      category->{name},
      projectDetails,
      "relatedProducts": relatedProducts[]->{
        _id,
        name,
        "slug": slug.current
      }
    }`;
    
    console.log('Executing gallery query...');
    const result = await client.fetch(query);
    console.log(`Gallery items fetched: ${result?.length || 0} items`);
    
    if (!result || result.length === 0) {
      console.warn('No gallery items found in Sanity');
    }
    
    return result;
  } catch (error: unknown) {
    const sanityError = error as SanityError;
    console.error('Error fetching gallery items:', {
      message: sanityError?.message || 'Unknown error',
      stack: sanityError?.stack,
      query: sanityError?.query
    });
    return [];
  }
}

export async function getProducts() {
  console.log('Fetching products...');
  
  // Test connection first
  const isConnected = await testSanityConnection();
  if (!isConnected) {
    console.error('Failed to connect to Sanity, using fallback data');
    return [];
  }

  try {
    const query = `*[_type == "product"] {
      _id,
      name,
      description,
      image,
      "imageUrl": image.asset->url,
      "slug": slug.current,
      category,
      price,
      inStock,
      titleTwentyFourCompliant,
      gallery,
      features,
      materials,
      specifications,
      seo
    }`;
    
    console.log('Executing products query...');
    const result = await client.fetch(query);
    console.log(`Products fetched: ${result?.length || 0} items`);
    
    if (!result || result.length === 0) {
      console.warn('No products found in Sanity');
    }
    
    return result;
  } catch (error: unknown) {
    const sanityError = error as SanityError;
    console.error('Error fetching products:', {
      message: sanityError?.message || 'Unknown error',
      stack: sanityError?.stack,
      query: sanityError?.query
    });
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  console.log(`Fetching product with slug: ${slug}`);
  
  try {
    const query = `*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      description,
      image,
      "imageUrl": image.asset->url,
      "slug": slug.current,
      category,
      price,
      inStock,
      titleTwentyFourCompliant,
      gallery[]{
        "url": asset->url,
        "alt": alt
      },
      features,
      materials,
      specifications,
      seo
    }`;
    
    console.log('Executing product by slug query...');
    const result = await client.fetch(query, { slug });
    
    if (!result) {
      console.warn(`No product found with slug: ${slug}`);
      return null;
    }
    
    console.log(`Product found: ${result.name}`);
    return result;
  } catch (error: unknown) {
    const sanityError = error as SanityError;
    console.error('Error fetching product by slug:', {
      message: sanityError?.message || 'Unknown error',
      stack: sanityError?.stack,
      query: sanityError?.query,
      slug
    });
    return null;
  }
}

export async function getAboutPageData() {
  console.log('Fetching about page data...');
  
  try {
    const query = `*[_type == "aboutPage"][0] {
      heroSection {
        heading,
        subheading,
        blurIntensity
      },
      storySection {
        heading,
        content,
        "image": image.asset->url
      },
      values[] {
        title,
        description,
        iconName
      },
      serviceAreas[] {
        name,
        description
      },
      expertise {
        windowSpecializations,
        doorSpecializations
      }
    }`;
    
    console.log('Executing about page query...');
    const result = await client.fetch(query);
    
    if (!result) {
      console.warn('No about page data found in Sanity');
      return {};
    }
    
    console.log('About page data found');
    return result;
  } catch (error: unknown) {
    const sanityError = error as SanityError;
    console.error('Error fetching about page data:', {
      message: sanityError?.message || 'Unknown error',
      stack: sanityError?.stack,
      query: sanityError?.query
    });
    return {};
  }
} 