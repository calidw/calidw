import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Frequently Asked Questions | Cali Door & Window',
    }),
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'subheading',
      title: 'Page Subheading',
      type: 'text',
      initialValue: 'Find answers to common questions about our products, services, and processes.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 5,
              validation: Rule => Rule.required(),
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Products', value: 'Products' },
                  { title: 'Installation', value: 'Installation' },
                  { title: 'Warranty', value: 'Warranty' },
                  { title: 'Service', value: 'Service' },
                  { title: 'Pricing', value: 'Pricing' },
                  { title: 'Maintenance', value: 'Maintenance' },
                ],
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'orderRank',
              title: 'Order Rank',
              type: 'number',
              description: 'Used to sort FAQ items (lower numbers appear first)',
              initialValue: 0,
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'category',
            },
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Still have questions?',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      initialValue: 'Our team is here to help. Contact us for personalized assistance with your window and door needs.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}); 