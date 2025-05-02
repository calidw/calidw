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
      title: 'Number of Testimonials to Display',
      type: 'number',
      validation: Rule => Rule.required().integer().positive().min(1),
      initialValue: 3,
    }),
  ],
}); 