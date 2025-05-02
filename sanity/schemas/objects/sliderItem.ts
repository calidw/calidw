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