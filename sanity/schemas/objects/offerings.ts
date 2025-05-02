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
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
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