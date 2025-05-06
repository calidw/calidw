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
      name: 'mobileLayout',
      title: 'Mobile Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image First', value: 'imageFirst' },
          { title: 'Text First', value: 'textFirst' },
        ],
      },
      initialValue: 'imageFirst',
      description: 'Choose whether to show the image or text first on mobile devices',
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      description: 'Set the opacity of the dark overlay on slider images (0-100)',
      validation: Rule => Rule.min(0).max(100),
      initialValue: 40,
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