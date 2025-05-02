import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Products', value: 'products' },
          { title: 'Installation', value: 'installation' },
          { title: 'Pricing', value: 'pricing' },
          { title: 'Warranty', value: 'warranty' },
          { title: 'Maintenance', value: 'maintenance' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().integer(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
}); 