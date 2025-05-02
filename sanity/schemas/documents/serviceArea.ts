import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceArea',
  title: 'Service Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Area Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'zipCodes',
      title: 'ZIP Codes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Area',
      type: 'boolean',
      initialValue: false,
      description: 'Display this area prominently on the website',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}); 