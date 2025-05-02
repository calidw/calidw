import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'history',
      title: 'Company History',
      type: 'array',
      of: [{ type: 'historyItem' }],
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [{ type: 'valueItem' }],
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'About Page',
        media,
      };
    },
  },
}); 