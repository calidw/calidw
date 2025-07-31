import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'show',
          title: 'Show Address',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'object',
      fields: [
        {
          name: 'number',
          title: 'Phone Number',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'show',
          title: 'Show Phone Number',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.required().email(),
        },
        {
          name: 'show',
          title: 'Show Email',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {
          name: 'schedule',
          title: 'Hours Schedule',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Add each day/time as separate entries (e.g., "Mon - Fri: 9:00 AM - 6:00 PM")',
        },
        {
          name: 'show',
          title: 'Show Business Hours',
          type: 'boolean',
          initialValue: true,
        },
      ],
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