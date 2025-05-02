import { defineField, defineType } from 'sanity';

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
      type: 'string',
    }),
    defineField({
      name: 'featureItems',
      title: 'Feature Items',
      type: 'array',
      of: [{ type: 'featureItem' }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
}); 