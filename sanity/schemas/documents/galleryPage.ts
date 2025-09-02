import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Gallery | Cali Door & Windows',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue: 'Explore our gallery of completed door and window installations to get inspiration for your project.',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The text shown in the small pill above the heading',
          initialValue: 'Our Work',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Inspiration Gallery',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Explore our portfolio of completed projects and envision the possibilities for your own space.',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Gallery Categories',
      description: 'Categories to filter the gallery items',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      initialValue: ['All', 'Windows', 'Doors'],
    }),
    defineField({
      name: 'featuredItems',
      title: 'Featured Gallery Items',
      description: 'Gallery items to feature prominently',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'galleryItem' }],
        },
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call-to-Action Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to Transform Your Space?',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Let our experts help you choose the perfect doors and windows for your project.',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get a Free Quote',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact?form=quote',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Gallery Page',
      };
    },
  },
}); 