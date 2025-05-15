import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const config = {
  dataset: '~production',
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
      heroBanner {
        headline,
        subheadline,
        sliderImages[]{
          "image": image.asset->url,
          alt,
          caption
        },
        ctaText,
        ctaLink
      },
      whyChooseUs {
        heading,
        subheading,
        features[]{
          title,
          description,
          icon
        }
      },
      doorsWindowsSection {
        heading,
        subheading,
        doorCard {
          "image": image.asset->url,
          title,
          description,
          linkText,
          link
        },
        windowCard {
          "image": image.asset->url,
          title,
          description,
          linkText,
          link
        }
      },
      gallerySection {
        heading,
        subheading,
        featuredGalleryItems[]->{
          _id,
          title,
          description,
          "image": image.asset->url,
          "fullSizeImage": fullSizeImage.asset->url,
          category->{
            name,
            "slug": slug.current
          },
          projectDetails[]{
            label,
            value
          },
          isFeatured
        },
        ctaText,
        ctaLink
      },
      testimonialsSectionHeading,
      testimonialsSectionSubheading,
      featuredTestimonials[]->{
        _id,
        name,
        location,
        quote,
        rating,
        "image": image.asset->url,
        projectType,
        date
      },
      mapSection {
        heading,
        subheading,
        mapEmbedUrl
      }
    }
  `);
}

export async function getAllProducts() {
  return sanityClient.fetch(`
    *[_type == "product"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      "imageUrl": image.asset->url,
      category,
      inStock,
      titleTwentyFourCompliant,
      isFeatured
    }
  `);
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      description,
      "imageUrl": image.asset->url,
      "gallery": gallery[].asset->url,
      category,
      inStock,
      titleTwentyFourCompliant,
      seo
    }
  `, { slug });
}

export async function getAllTestimonials(limit?: number) {
  let query = `
    *[_type == "testimonial"] | order(orderBy asc) {
      _id,
      name,
      location,
      quote,
      rating,
      "image": image.asset->url,
      projectType,
      date,
      isFeatured,
      productReference->{
        _id,
        name,
        "slug": slug.current
      }
    }
  `;

  if (limit) {
    query = `
      *[_type == "testimonial"] | order(orderBy asc)[0...$limit] {
        _id,
        name,
        location,
        quote,
        rating,
        "image": image.asset->url,
        projectType,
        date,
        isFeatured,
        productReference->{
          _id,
          name,
          "slug": slug.current
        }
      }
    `;
  }

  return sanityClient.fetch(query, { limit: limit ? limit - 1 : undefined });
}

export async function getGalleryItems() {
  return sanityClient.fetch(`
    *[_type == "galleryItem"] | order(orderBy asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      "fullSizeImage": fullSizeImage.asset->url,
      category->{name, "slug": slug.current},
      projectDetails[]{
        label,
        value
      },
      relatedProducts[]->{
        _id,
        name,
        "slug": slug.current,
        "imageUrl": image.asset->url
      },
      isFeatured,
      publishedAt
    }
  `);
}

export async function getAllCategories() {
  return sanityClient.fetch(`
    *[_type == "category"] | order(orderBy asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      parentCategory->{
        _id,
        name,
        "slug": slug.current
      },
      "image": image.asset->url,
      icon
    }
  `);
}

export async function getCategoryBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "category" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      description,
      parentCategory->{
        _id,
        name,
        "slug": slug.current
      },
      "image": image.asset->url,
      icon
    }
  `, { slug });
}

export async function getAboutPageData() {
  return sanityClient.fetch(`
    *[_type == "aboutPage"][0]{
      title,
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
      },
      seo
    }
  `);
}

export async function getFaqPageData() {
  return sanityClient.fetch(`
    *[_type == "faqPage"][0]{
      title,
      heading,
      subheading,
      faqs[]{
        question,
        answer,
        category,
        orderRank
      },
      ctaTitle,
      ctaText,
      ctaButtonText,
      ctaButtonLink,
      seo
    }
  `);
} 