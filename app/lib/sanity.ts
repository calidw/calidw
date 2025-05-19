import { createClient } from 'next-sanity';

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
  useCdn: process.env.NODE_ENV === 'production',
});

export async function getGalleryItems() {
  try {
    return await client.fetch(`
      *[_type == "galleryItem"] {
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
      }
    `);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return [];
  }
}

export async function getProducts() {
  try {
    return await client.fetch(`
      *[_type == "product"] {
        _id,
        name,
        description,
        "image": image.asset->url,
        "slug": slug.current,
        price,
        features,
        specifications
      }
    `);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
} 