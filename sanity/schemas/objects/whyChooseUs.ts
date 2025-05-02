import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
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
              rows: 2,
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
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
}); 