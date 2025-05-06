import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'About Cali Door & Window',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'About Cali Door & Window',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 2,
          initialValue: "We're passionate about transforming homes and businesses with quality doors and windows that combine beauty, functionality, and energy efficiency.",
        }),
        defineField({
          name: 'blurIntensity',
          title: 'Text Background Blur Intensity',
          type: 'number',
          description: 'Set the intensity of the blur effect behind the hero text (1-10). Values: 1-Light blur, 5-Medium blur, 10-Heavy blur',
          validation: Rule => Rule.required().min(1).max(10).integer(),
          initialValue: 3,
          options: {
            list: [
              {title: 'Light (1)', value: 1},
              {title: 'Slight (2)', value: 2},
              {title: 'Medium (3)', value: 3},
              {title: 'Standard (4)', value: 4},
              {title: 'Substantial (5)', value: 5},
              {title: 'Heavy (6)', value: 6},
              {title: 'Very Heavy (7)', value: 7},
              {title: 'Extra Heavy (8)', value: 8},
              {title: 'Maximum (9)', value: 9},
              {title: 'Extreme (10)', value: 10},
            ]
          }
        }),
      ],
    }),
    defineField({
      name: 'storySection',
      title: 'Our Story Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Our Story',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
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
              rows: 3,
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the icon file located in the public folder of the frontend',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Service Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Area Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'object',
      fields: [
        defineField({
          name: 'windowSpecializations',
          title: 'Window Specializations',
          type: 'array',
          of: [{ type: 'string' }],
          validation: Rule => Rule.min(1),
        }),
        defineField({
          name: 'doorSpecializations',
          title: 'Door Specializations',
          type: 'array',
          of: [{ type: 'string' }],
          validation: Rule => Rule.min(1),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'About Page',
      };
    },
  },
}); 