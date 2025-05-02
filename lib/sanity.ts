import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'jdlrpcx4',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export async function getHomePageData() {
  return sanityClient.fetch(`
    *[_type == "homePage"][0]{
      title,
      hero {
        title,
        subtitle,
        sliderItems[]{
          "image": image.asset->url,
          alt,
          label,
          description
        },
        buttonPrimary,
        buttonPrimaryLink,
        buttonSecondary,
        buttonSecondaryLink
      },
      featuredProducts[]->{
        _id,
        name,
        slug,
        price,
        description,
        "imageUrl": mainImage.asset->url,
        category->{name, slug},
        features,
        materials,
        dimensions,
        inStock
      },
      whyChooseUs {
        title,
        subtitle,
        features[]{
          title,
          description,
          icon
        }
      },
      features {
        title,
        subtitle,
        featureItems[]{
          title,
          description,
          icon,
          link,
          linkText
        }
      },
      offerings {
        title,
        description,
        "image": image.asset->url,
        items[]{
          title, 
          description
        }
      },
      testimonialSection {
        title,
        subtitle,
        displayCount
      },
      serviceAreas[]->{
        _id,
        name,
        slug,
        description,
        "image": image.asset->url,
        featured
      }
    }
  `);
}

export async function getAllProducts() {
  return sanityClient.fetch(`
    *[_type == "product"] | order(name asc) {
      _id,
      name,
      slug,
      price,
      description,
      "imageUrl": mainImage.asset->url,
      category->{name, slug},
      features,
      materials,
      dimensions,
      inStock
    }
  `);
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      price,
      description,
      "imageUrl": mainImage.asset->url,
      "gallery": gallery[].asset->url,
      category->{name, slug},
      features,
      materials,
      dimensions,
      inStock,
      seoDescription,
      "relatedProducts": relatedProducts[]->{
        _id,
        name,
        slug,
        "imageUrl": mainImage.asset->url,
        price,
        category->{name}
      }
    }
  `, { slug });
}

export async function getAllTestimonials(limit?: number) {
  let query = `
    *[_type == "testimonial"] | order(publishedAt desc) {
      _id,
      quote,
      author,
      location,
      rating,
      "image": image.asset->url
    }
  `;

  if (limit) {
    query = `
      *[_type == "testimonial"] | order(publishedAt desc)[0...$limit] {
        _id,
        quote,
        author,
        location,
        rating,
        "image": image.asset->url
      }
    `;
  }

  return sanityClient.fetch(query, { limit: limit ? limit - 1 : undefined });
}

export async function getGalleryItems() {
  return sanityClient.fetch(`
    *[_type == "gallery"] | order(publishedAt desc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      category->{name},
      featured,
      publishedAt
    }
  `);
}

export async function getAboutPageData() {
  return sanityClient.fetch(`
    *[_type == "aboutPage"][0]{
      title,
      introduction,
      mission,
      "image": image.asset->url,
      history[]{
        year,
        title,
        description
      },
      values[]{
        title,
        description,
        icon
      }
    }
  `);
}

export async function getFaqItems() {
  return sanityClient.fetch(`
    *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      category
    }
  `);
}

export async function getContactInfo() {
  return sanityClient.fetch(`
    *[_type == "contactInfo"][0]{
      address,
      phone,
      email,
      hours,
      mapLocation,
      socialLinks
    }
  `);
}

export async function getServiceAreas(featured?: boolean) {
  let query = `
    *[_type == "serviceArea"] | order(name asc) {
      _id,
      name,
      slug,
      description,
      "image": image.asset->url,
      zipCodes,
      featured
    }
  `;

  if (featured) {
    query = `
      *[_type == "serviceArea" && featured == true] | order(name asc) {
        _id,
        name,
        slug,
        description,
        "image": image.asset->url,
        zipCodes,
        featured
      }
    `;
  }

  return sanityClient.fetch(query);
}

export async function getServiceAreaBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "serviceArea" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      description,
      "image": image.asset->url,
      zipCodes,
      featured
    }
  `, { slug });
} 