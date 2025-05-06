import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Cali Door & Window | Premium Door & Window Solutions',
    }),
    defineField({
      name: 'heroBanner',
      title: 'Hero Banner',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Premium Doors & Windows for Your California Home',
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          initialValue: 'Energy-efficient, Title 24 compliant solutions with expert installation for residential and commercial properties.',
        },
        {
          name: 'sliderImages',
          title: 'Slider Images',
          description: 'Add multiple images for the hero slider',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for accessibility',
                  validation: Rule => Rule.required(),
                },
                {
                  name: 'caption',
                  title: 'Caption',
                  type: 'string',
                  description: 'Optional caption to display with the image',
                },
              ],
              preview: {
                select: {
                  title: 'alt',
                  media: 'image',
                },
              },
            },
          ],
          validation: Rule => Rule.required().min(1),
        },
        {
          name: 'leftTextBlur',
          title: 'Left Text Background Blur',
          description: 'Control the blur intensity of the background behind the text on the left side',
          type: 'number',
          validation: Rule => Rule.min(1).max(20).integer(),
          initialValue: 6,
          options: {
            list: [
              {title: 'Very Light (1px)', value: 1},
              {title: 'Light (2px)', value: 2},
              {title: 'Subtle (3px)', value: 3},
              {title: 'Medium (4px)', value: 4},
              {title: 'Standard (6px)', value: 6},
              {title: 'Strong (8px)', value: 8},
              {title: 'Heavy (10px)', value: 10},
              {title: 'Very Heavy (12px)', value: 12},
              {title: 'Maximum (15px)', value: 15},
              {title: 'Extreme (20px)', value: 20},
            ]
          }
        },
        {
          name: 'ctaText',
          title: 'Call to Action Text',
          type: 'string',
          initialValue: 'Explore Products',
        },
        {
          name: 'ctaLink',
          title: 'Call to Action Link',
          type: 'string',
          initialValue: '/products',
        },
      ],
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Why Choose Cali Doors and Windows?',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Experience the difference that premium quality, expert craftsmanship, and dedicated service make in every project. We\'re committed to excellence in every installation.',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text' },
                { 
                  name: 'icon', 
                  title: 'Icon Image', 
                  type: 'image', 
                  options: {
                    hotspot: true,
                  },
                  description: 'Upload a PNG icon image (recommended size: 64x64px)'
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'icon'
                },
              },
            },
          ],
          validation: Rule => Rule.required().min(1),
        },
      ],
    }),
    defineField({
      name: 'doorsWindowsSection',
      title: 'Doors & Windows Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Doors and Windows',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Energy-efficient solutions that meet California Title 24 requirements, available with professional installation.',
        },
        {
          name: 'doorCard',
          title: 'Door Card',
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Title', type: 'string', initialValue: 'Premium Doors' },
            { name: 'description', title: 'Description', type: 'text', initialValue: 'Enhance your home\'s entrance with our collection of stylish, secure, and energy-efficient doors.' },
            { name: 'linkText', title: 'Link Text', type: 'string', initialValue: 'Explore Door Collection' },
            { name: 'link', title: 'Link URL', type: 'string', initialValue: '/products?category=doors' },
          ],
        },
        {
          name: 'windowCard',
          title: 'Window Card',
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Title', type: 'string', initialValue: 'Premium Windows' },
            { name: 'description', title: 'Description', type: 'text', initialValue: 'Bring in natural light and improve energy efficiency with our selection of high-quality windows.' },
            { name: 'linkText', title: 'Link Text', type: 'string', initialValue: 'Explore Window Collection' },
            { name: 'link', title: 'Link URL', type: 'string', initialValue: '/products?category=windows' },
          ],
        },
      ],
    }),
    defineField({
      name: 'gallerySection',
      title: 'Gallery Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Gallery',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          initialValue: 'Browse through our completed projects and get inspired for your next home improvement.',
        },
        {
          name: 'featuredGalleryItems',
          title: 'Featured Gallery Items',
          description: 'Gallery items from the main gallery that will be displayed on the homepage',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'galleryItem' }],
              options: {
                filter: 'isFeatured == true'
              }
            },
          ],
          validation: Rule => Rule.max(3),
        },
        {
          name: 'ctaText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'View All Projects',
        },
        {
          name: 'ctaLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/gallery',
        },
      ],
    }),
    defineField({
      name: 'testimonialsSectionHeading',
      title: 'Testimonials Section Heading',
      type: 'string',
      initialValue: 'What Our Clients Say',
    }),
    defineField({
      name: 'testimonialsSectionSubheading',
      title: 'Testimonials Section Subheading',
      type: 'text',
      initialValue: 'Real feedback from satisfied homeowners and partners.',
    }),
    defineField({
      name: 'featuredTestimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
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
  },
}); 