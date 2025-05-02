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
    prepare({ title }) {
      return {
        title: title || 'Home Page',
      };
    },
  },
}); 