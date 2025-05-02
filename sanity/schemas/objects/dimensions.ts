import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dimensions',
  title: 'Dimensions',
  type: 'object',
  fields: [
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'depth',
      title: 'Depth',
      type: 'number',
      validation: Rule => Rule.positive(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Inches', value: 'in' },
          { title: 'Feet', value: 'ft' },
          { title: 'Centimeters', value: 'cm' },
          { title: 'Millimeters', value: 'mm' },
        ],
      },
      initialValue: 'in',
      validation: Rule => Rule.required(),
    }),
  ],
}); 