import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'sliderItem',
  title: 'Slider Item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image (Optional)',
      description: 'Optional optimized image for mobile devices. If not provided, the main image will be used.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Add a call-to-action button for this slide',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL for the button',
    }),
    defineField({
      name: 'textPosition',
      title: 'Text Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Slider Item',
        media,
      };
    },
  },
}); 