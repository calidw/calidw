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
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from your icon library',
    }),
    defineField({
      name: 'link',
      title: 'Link',
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