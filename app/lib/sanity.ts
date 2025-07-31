import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Debug environment variables
console.log('Environment Check:', {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'Set' : 'Not Set',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ? 'Set' : 'Not Set',
  nodeEnv: process.env.NODE_ENV,
});

// Fallback values for when Sanity is not configured
const FALLBACK_PROJECT_ID = 'fallback';
const FALLBACK_DATASET = 'production';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || FALLBACK_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || FALLBACK_DATASET;

// Only create client if we have real Sanity credentials
const hasSanityConfig = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                       process.env.NEXT_PUBLIC_SANITY_DATASET &&
                       process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== FALLBACK_PROJECT_ID;

export const client = hasSanityConfig ? createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-19', // Use today's date or your preferred version
  // Disable caching to ensure fresh data with every request
  // This helps prevent stale data issues that might occur in production
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Add token if you need authenticated requests
  perspective: 'published',
}) : null;

// Set up the image URL builder
const builder = client ? imageUrlBuilder(client) : null;

// Define type for Sanity image reference
interface SanityImageSource {
  asset?: {
    _ref?: string;
  };
  [key: string]: unknown;
}

// Helper function to build image URLs
export function urlFor(source: SanityImageSource) {
  if (!builder) {
    // Return a placeholder URL when Sanity is not configured
    return { url: () => '/placeholder-image.jpg' };
  }
  return builder.image(source);
}

// Debug function to test Sanity connection
async function testSanityConnection() {
  if (!client) {
    console.log('Sanity client not configured, using fallback data');
    return false;
  }
  
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

export interface ContactInfo {
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    show: boolean;
  };
  phone?: {
    number: string;
    show: boolean;
  };
  email?: {
    address: string;
    show: boolean;
  };
  hours?: {
    schedule: string[];
    show: boolean;
  };
  mapLocation?: {
    lat: number;
    lng: number;
  };
  socialLinks?: Array<{
    platform: string;
    url: string;
    show: boolean;
  }>;
}

export async function getGalleryItems() {
  console.log('Fetching gallery items...');
  
  // Check if client is available
  if (!client) {
    console.warn('Sanity client not configured, returning empty array');
    return [];
  }
  
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
  
  if (!client) {
    console.warn('Sanity client not configured, returning empty array');
    return [];
  }

  try {
    const query = `*[_type == "product"] {
      _id,
      name,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      category->{name},
      specifications,
      "keyFeatures": keyFeatures[]
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
  
  if (!client) {
    console.warn('Sanity client not configured, returning null');
    return null;
  }
  
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
  
  if (!client) {
    console.warn('Sanity client not configured, returning empty object');
    return {};
  }
  
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

export async function getContactInfo() {
  console.log('Fetching contact info...');
  
  if (!client) {
    console.warn('Sanity client not configured, returning null');
    return null;
  }
  
  try {
    const query = `*[_type == "contactInfo"][0] {
      address {
        street,
        city,
        state,
        zipCode,
        show
      },
      phone {
        number,
        show
      },
      email {
        address,
        show
      },
      hours {
        schedule,
        show
      },
      mapLocation {
        lat,
        lng
      },
      socialLinks[] {
        platform,
        url,
        show
      }
    }`;
    
    console.log('Executing contact info query...');
    const result = await client.fetch(query);
    
    if (!result) {
      console.warn('No contact info found in Sanity');
      return null;
    }
    
    console.log('Contact info found');
    return result;
  } catch (error: unknown) {
    const sanityError = error as SanityError;
    console.error('Error fetching contact info:', {
      message: sanityError?.message || 'Unknown error',
      stack: sanityError?.stack,
      query: sanityError?.query
    });
    return null;
  }
} 