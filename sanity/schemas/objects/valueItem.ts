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
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from your icon library',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}); 