import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
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
      name: 'sliderItems',
      title: 'Slider Items',
      type: 'array',
      of: [{ type: 'sliderItem' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'buttonPrimary',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonPrimaryLink',
      title: 'Primary Button Link',
      type: 'string',
    }),
    defineField({
      name: 'buttonSecondary',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonSecondaryLink',
      title: 'Secondary Button Link',
      type: 'string',
    }),
  ],
}); 