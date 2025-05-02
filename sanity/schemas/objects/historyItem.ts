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
      rows: 3,
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'title',
    },
  },
}); 