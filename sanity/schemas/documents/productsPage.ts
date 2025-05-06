import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'productsPage',
  title: 'Products Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'All Products | Cali Door & Window',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue: 'Browse our selection of energy-efficient windows and doors including double hung, casement, picture, awning, sliders, bay/bow windows, interior doors, and patio doors.',
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
          initialValue: 'Our Products',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Premium Doors & Windows',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Explore our complete collection of high-quality, energy-efficient doors and windows designed for California homes.',
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
          initialValue: 'Need Help Choosing?',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Our team of experts is ready to assist you in selecting the perfect doors and windows for your project.',
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
        title: title || 'Products Page',
      };
    },
  },
}); 