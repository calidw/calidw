# Sanity CMS Schema for Cali Door & Window

This guide will help you set up the Sanity Studio for your Cali Door & Window website.

## Installation and Setup

1. Create a new Sanity project:
```bash
npm create sanity@latest -- --template clean
```

2. During setup:
   - Give your project a name (e.g., "Cali Door & Window CMS")
   - Use the default dataset configuration
   - Select "Yes" to use TypeScript
   - Choose the "Clean project with no predefined schemas" template

3. Navigate to your project and start Sanity Studio:
```bash
cd your-studio-name
npm run dev
```

4. Open http://localhost:3333 to access Sanity Studio.

## Schema Configuration

Replace the contents of your `schema.ts` file with the following schema configuration:

```typescript
import { type SchemaTypeDefinition } from 'sanity'

// Document types
import product from './schemas/documents/product'
import category from './schemas/documents/category'
import homePage from './schemas/documents/homePage'
import gallery from './schemas/documents/gallery'
import testimonial from './schemas/documents/testimonial'
import aboutPage from './schemas/documents/aboutPage'
import faq from './schemas/documents/faq'
import contactInfo from './schemas/documents/contactInfo'
import formSubmission from './schemas/documents/formSubmission'

// Object types
import hero from './schemas/objects/hero'
import features from './schemas/objects/features'
import featureItem from './schemas/objects/featureItem'
import whyChooseUs from './schemas/objects/whyChooseUs'
import offerings from './schemas/objects/offerings'
import offeringItem from './schemas/objects/offeringItem'
import testimonialSection from './schemas/objects/testimonialSection'
import teamMember from './schemas/objects/teamMember'
import historyItem from './schemas/objects/historyItem'
import valueItem from './schemas/objects/valueItem'
import dimensions from './schemas/objects/dimensions'
import socialLink from './schemas/objects/socialLink'

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
    formSubmission,
    
    // Objects
    hero,
    features,
    featureItem,
    whyChooseUs,
    offerings,
    offeringItem,
    testimonialSection,
    teamMember,
    historyItem,
    valueItem,
    dimensions,
    socialLink,
  ],
}
```

## Folder Structure

Create the following folder structure:

```
schemas/
  ├── documents/
  │   ├── product.ts
  │   ├── category.ts
  │   ├── homePage.ts
  │   ├── gallery.ts
  │   ├── testimonial.ts
  │   ├── aboutPage.ts
  │   ├── faq.ts
  │   ├── contactInfo.ts
  │   └── formSubmission.ts
  └── objects/
      ├── hero.ts
      ├── features.ts
      ├── featureItem.ts
      ├── whyChooseUs.ts
      ├── offerings.ts
      ├── offeringItem.ts
      ├── testimonialSection.ts
      ├── teamMember.ts
      ├── historyItem.ts
      ├── valueItem.ts
      ├── dimensions.ts
      └── socialLink.ts
```

## Document Schemas

### Category Schema (category.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 3,
    }),
  ],
})
```

### Product Schema (product.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      subtitle: 'category.name',
      media: 'mainImage',
    },
  },
})
```

### Home Page Schema (homePage.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'hero',
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
      validation: Rule => Rule.unique().max(4),
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'whyChooseUs',
    }),
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'features',
    }),
    defineField({
      name: 'offerings',
      title: 'Offerings Section',
      type: 'offerings',
    }),
    defineField({
      name: 'testimonialSection',
      title: 'Testimonial Section',
      type: 'testimonialSection',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Home Page',
      }
    },
  },
})
```

### Gallery Schema (gallery.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 2,
    }),
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.name',
      media: 'image',
    },
  },
})
```

### Testimonial Schema (testimonial.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
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
      title: 'Rating (1-5)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).precision(1),
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'quote',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle?.substring(0, 50) + '...',
        media,
      }
    },
  },
})
```

### About Page Schema (aboutPage.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'About Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'history',
      title: 'Company History',
      type: 'array',
      of: [{ type: 'historyItem' }],
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [{ type: 'valueItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'About Page',
      }
    },
  },
})
```

### FAQ Schema (faq.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Products', value: 'products' },
          { title: 'Installation', value: 'installation' },
          { title: 'Warranty', value: 'warranty' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})
```

### Contact Info Schema (contactInfo.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'object',
      fields: [
        defineField({
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        }),
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
    prepare({ title, subtitle }) {
      return {
        title: 'Contact Information',
        subtitle: `${subtitle} | ${title}`,
      }
    },
  },
})
```

### Form Submission Schema (formSubmission.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formSubmission',
  title: 'Form Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Quote Request', value: 'quote' },
          { title: 'Contact Form', value: 'contact' },
          { title: 'Testimonial Submission', value: 'testimonial' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'productInterest',
      title: 'Product Interest',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'formType',
      date: 'createdAt',
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
  orderings: [
    {
      title: 'Created At',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }],
    },
  ],
})
```

## Object Schemas

### Hero Object (hero.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
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
})
```

### Why Choose Us Object (whyChooseUs.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
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
              rows: 2,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon SVG Path',
              type: 'string',
              description: 'SVG path data for the icon',
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
})
```

### Features Object (features.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'featureItems',
      title: 'Feature Items',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
})
```

### Feature Item Object (featureItem.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon SVG Path',
      type: 'string',
      description: 'SVG path data for the icon',
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
})
```

### Offerings Object (offerings.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 3,
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
})
```

### Offering Item Object (offeringItem.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
```

### Testimonial Section Object (testimonialSection.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'displayCount',
      title: 'Number of Testimonials to Display',
      type: 'number',
      initialValue: 3,
      validation: Rule => Rule.required().integer().positive(),
    }),
  ],
})
```

### Team Member Object (teamMember.ts)

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required(),
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
  ],
})
```

### History Item Object (historyItem.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 2,
    }),
  ],
})
```

### Value Item Object (valueItem.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon SVG Path',
      type: 'string',
      description: 'SVG path data for the icon',
    }),
  ],
})
```

### Dimensions Object (dimensions.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Inches', value: 'in' },
          { title: 'Centimeters', value: 'cm' },
        ],
      },
      initialValue: 'in',
      validation: Rule => Rule.required(),
    }),
  ],
})
```

### Social Link Object (socialLink.ts)

```typescript
import { defineField, defineType } from 'sanity'

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
          { title: 'Houzz', value: 'houzz' },
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
})
```

## Next Steps

1. After creating all schema files, start your Sanity Studio and create initial content:
   - Categories for windows and doors
   - Products (at least 4-6 featured products)
   - Home page configuration with all sections
   - Gallery items
   - Testimonials
   - About page content
   - FAQs
   - Contact information

2. Deploy your Sanity Studio:
```bash
npm run deploy
```

3. Get your Sanity project ID and dataset name to configure your Next.js application.

4. Create environment variables in your Next.js project:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_ADMIN_PASSWORD=your-password-for-submissions-page
```

This setup provides a complete content management system for your Cali Door & Window website, allowing you to manage all website content through Sanity Studio. 