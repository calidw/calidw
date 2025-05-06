# Cali Door & Window - Sanity Schema Code

This document contains all the actual Sanity schema code implementation for the Cali Door & Window website. Use this reference to implement the schema in your Sanity Studio instance.

## Table of Contents

1. [Main Schema Configuration](#main-schema-configuration)
2. [Document Schemas](#document-schemas)
   - [Product](#product-schema)
   - [Category](#category-schema)
   - [HomePage](#homepage-schema)
   - [Gallery](#gallery-schema)
   - [Testimonial](#testimonial-schema)
   - [AboutPage](#aboutpage-schema)
   - [FAQ](#faq-schema)
   - [ContactInfo](#contactinfo-schema)
   - [ServiceArea](#servicearea-schema)
3. [Object Schemas](#object-schemas)
   - [Hero](#hero-schema)
   - [SliderItem](#slideritem-schema)
   - [Features](#features-schema)
   - [FeatureItem](#featureitem-schema)
   - [WhyChooseUs](#whychooseus-schema)
   - [Offerings](#offerings-schema)
   - [OfferingItem](#offeringitem-schema)
   - [TestimonialSection](#testimonialsection-schema)
   - [HistoryItem](#historyitem-schema)
   - [ValueItem](#valueitem-schema)
   - [Dimensions](#dimensions-schema)
   - [SocialLink](#sociallink-schema)

---

## Main Schema Configuration

### schema.ts

```typescript
import { type SchemaTypeDefinition } from 'sanity';

// Document types
import product from './schemas/documents/product';
import category from './schemas/documents/category';
import homePage from './schemas/documents/homePage';
import gallery from './schemas/documents/gallery';
import testimonial from './schemas/documents/testimonial';
import aboutPage from './schemas/documents/aboutPage';
import faq from './schemas/documents/faq';
import contactInfo from './schemas/documents/contactInfo';
import serviceArea from './schemas/documents/serviceArea';

// Object types
import hero from './schemas/objects/hero';
import features from './schemas/objects/features';
import featureItem from './schemas/objects/featureItem';
import whyChooseUs from './schemas/objects/whyChooseUs';
import offerings from './schemas/objects/offerings';
import offeringItem from './schemas/objects/offeringItem';
import testimonialSection from './schemas/objects/testimonialSection';
import historyItem from './schemas/objects/historyItem';
import valueItem from './schemas/objects/valueItem';
import dimensions from './schemas/objects/dimensions';
import socialLink from './schemas/objects/socialLink';
import sliderItem from './schemas/objects/sliderItem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    product,
    category,
    homePage,
    gallery,
    testimonial,
    aboutPage,
    faq,
    contactInfo,
    serviceArea,
    
    // Objects
    hero,
    features,
    featureItem,
    whyChooseUs,
    offerings,
    offeringItem,
    testimonialSection,
    historyItem,
    valueItem,
    dimensions,
    socialLink,
    sliderItem,
  ],
};
```

---

## Document Schemas

### Product Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().precision(2).positive(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'dimensions',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: Rule => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      category: 'category.name',
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title,
        media,
        subtitle: category ? `Category: ${category}` : '',
      };
    },
  },
});
```

### Category Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
```

### HomePage Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'hero',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: Rule => Rule.max(6).unique(),
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      type: 'whyChooseUs',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'features',
    }),
    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'offerings',
    }),
    defineField({
      name: 'testimonialSection',
      title: 'Testimonial Section',
      type: 'testimonialSection',
    }),
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Gallery Items',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'gallery' }],
            },
          ],
          validation: Rule => Rule.max(12),
        },
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'serviceArea' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
```

### Gallery Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fullSizeImage',
      title: 'Full Size Image for Zoom',
      description: 'High-resolution image for zoom functionality (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectDetails',
      title: 'Project Details',
      description: 'Add specifications that will be displayed when zoomed',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related Products',
      description: 'Products used in this installation or project',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      validation: Rule => Rule.unique(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
```

### Testimonial Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      description: 'Rating from 1-5',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'quote',
    },
  },
});
```

### AboutPage Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'history',
      title: 'History',
      type: 'array',
      of: [{ type: 'historyItem' }],
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [{ type: 'valueItem' }],
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'serviceArea' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
```

### FAQ Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Products', value: 'products' },
          { title: 'Installation', value: 'installation' },
          { title: 'Warranty', value: 'warranty' },
          { title: 'Maintenance', value: 'maintenance' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order of FAQs',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
});
```

### ContactInfo Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'text',
    }),
    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        },
        {
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'phone',
    },
  },
});
```

### ServiceArea Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceArea',
  title: 'Service Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'zipCodes',
      title: 'ZIP Codes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
```

---

## Object Schemas

### Hero Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'sliderItems',
      title: 'Slider Items',
      type: 'array',
      of: [{ type: 'sliderItem' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'mobileLayout',
      title: 'Mobile Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image First', value: 'imageFirst' },
          { title: 'Text First', value: 'textFirst' },
        ],
      },
      initialValue: 'imageFirst',
      description: 'Choose whether to show the image or text first on mobile devices',
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description: 'Set the opacity of the dark overlay on slider images (0-100)',
      validation: Rule => Rule.min(0).max(100),
      initialValue: 40,
    }),
    defineField({
      name: 'buttonPrimary',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonPrimaryLink',
      title: 'Primary Button Link',
      type: 'string',
    }),
    defineField({
      name: 'buttonSecondary',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonSecondaryLink',
      title: 'Secondary Button Link',
      type: 'string',
    }),
  ],
});
```

### SliderItem Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sliderItem',
  title: 'Slider Item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      description: 'Optional optimized image for mobile devices',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
      name: 'textPosition',
      title: 'Text Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
      description: 'Position of the text on the slide',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'description',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Slide',
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : '',
        media,
      };
    },
  },
});
```

### Features Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'featureItems',
      title: 'Features',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
});
```

### FeatureItem Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier (e.g., "shield", "support", "home")',
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
```

### WhyChooseUs Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: Rule => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon identifier (e.g., "quality", "service", "warranty")',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
});
```

### Offerings Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'offerings',
  title: 'Offerings Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'items',
      title: 'Offering Items',
      type: 'array',
      of: [{ type: 'offeringItem' }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
});
```

### OfferingItem Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'offeringItem',
  title: 'Offering Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
```

### TestimonialSection Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'displayCount',
      title: 'Number to Display',
      type: 'number',
      validation: Rule => Rule.required().min(1),
      initialValue: 3,
    }),
  ],
});
```

### HistoryItem Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'historyItem',
  title: 'History Item',
  type: 'object',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'title',
    },
  },
});
```

### ValueItem Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'valueItem',
  title: 'Value Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier (e.g., "integrity", "quality", "innovation")',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
```

### Dimensions Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dimensions',
  title: 'Dimensions',
  type: 'object',
  fields: [
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'depth',
      title: 'Depth',
      type: 'number',
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Inches', value: 'in' },
          { title: 'Feet', value: 'ft' },
          { title: 'Centimeters', value: 'cm' },
          { title: 'Millimeters', value: 'mm' },
        ],
      },
      initialValue: 'in',
    }),
  ],
  preview: {
    select: {
      width: 'width',
      height: 'height',
      unit: 'unit',
    },
    prepare(selection) {
      const { width, height, unit } = selection;
      return {
        title: `${width} × ${height} ${unit}`,
      };
    },
  },
});
```

### SocialLink Schema

```typescript
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'TikTok', value: 'tiktok' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title.charAt(0).toUpperCase() + title.slice(1),
        subtitle,
      };
    },
  },
});
``` 