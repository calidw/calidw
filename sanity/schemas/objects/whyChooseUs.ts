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
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Upload a PNG icon image (recommended size: 64x64px)',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon'
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
}); 