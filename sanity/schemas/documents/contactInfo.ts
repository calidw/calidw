import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mapLocation',
      title: 'Map Location',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Latitude',
          type: 'number',
          validation: Rule => Rule.required(),
        },
        {
          name: 'lng',
          title: 'Longitude',
          type: 'number',
          validation: Rule => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Information',
      };
    },
  },
}); 