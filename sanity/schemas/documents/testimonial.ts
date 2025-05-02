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
      description: 'City, state, or area',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
          { title: '2 Stars', value: 2 },
          { title: '1 Star', value: 1 },
        ],
      },
      validation: Rule => Rule.required().min(1).max(5),
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
      subtitle: 'location',
      media: 'image',
    },
  },
}); 