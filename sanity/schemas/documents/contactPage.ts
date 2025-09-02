import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Contact Us | Cali Door & Windows',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue: 'Get in touch with our team for inquiries, quotes, or information about our door and window products and services.',
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The text shown in the small pill above the heading',
          initialValue: 'Get In Touch',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Contact Us',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'We\'re here to answer your questions and help you find the perfect doors and windows for your project. Reach out using the form below or contact us directly.',
        },
      ],
    }),
    defineField({
      name: 'formSection',
      title: 'Form Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Send Us a Message',
        },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Contact Information',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Visit Our Showroom',
            },
            {
              name: 'streetAddress',
              title: 'Street Address',
              type: 'string',
              initialValue: '3746 Foothill Boulevard #1254',
            },
            {
              name: 'cityStateZip',
              title: 'City, State, ZIP',
              type: 'string',
              initialValue: 'Glendale, CA 91214',
            },
          ],
        },
        {
          name: 'hours',
          title: 'Business Hours',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Showroom Hours',
            },
            {
              name: 'weekdays',
              title: 'Weekday Hours',
              type: 'string',
              initialValue: 'Mon - Fri: 9:00 AM - 6:00 PM',
            },
            {
              name: 'saturday',
              title: 'Saturday Hours',
              type: 'string',
              initialValue: 'Saturday: 10:00 AM - 4:00 PM',
            },
            {
              name: 'sunday',
              title: 'Sunday Hours',
              type: 'string',
              initialValue: 'Sunday: Closed',
            },
          ],
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Call Us',
            },
            {
              name: 'number',
              title: 'Phone Number',
              type: 'string',
              initialValue: '(818) 282-3437',
            },
            {
              name: 'link',
              title: 'Phone Link',
              type: 'string',
              initialValue: 'tel:8182823437',
            },
          ],
        },
        {
          name: 'email',
          title: 'Email',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Email Us',
            },
            {
              name: 'address',
              title: 'Email Address',
              type: 'string',
              initialValue: 'Sales@calidw.com',
            },
            {
              name: 'link',
              title: 'Email Link',
              type: 'string',
              initialValue: 'mailto:Sales@calidw.com',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'mapSection',
      title: 'Map Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Visit Our Showroom',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Come experience our premium doors and windows. Our expert staff is ready to assist you in our Glendale location.',
        },
        {
          name: 'mapEmbedUrl',
          title: 'Google Maps Embed URL',
          type: 'url',
          initialValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.5751569179746!2d-118.23315102345847!3d34.13832647253282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0a9a4f2ef51%3A0x9acc8dec939d82d3!2s3746%20Foothill%20Blvd%20%231254%2C%20Glendale%2C%20CA%2091214%2C%20USA!5e0!3m2!1sen!2sin!4v1717002245704!5m2!1sen!2sin',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
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
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Contact Page',
      };
    },
  },
}); 