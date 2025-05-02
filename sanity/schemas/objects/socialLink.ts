import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Social Media Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Pinterest', value: 'pinterest' },
          { title: 'TikTok', value: 'tiktok' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Social Link',
        subtitle: subtitle,
      };
    },
  },
}); 