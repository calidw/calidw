// Script to seed FAQ data into Sanity CMS
const sanityClient = require('@sanity/client');

// Initialize the Sanity client with your project details
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'jdlrpcx4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN, // Use a token with write access
  apiVersion: '2023-05-03',
  useCdn: false,
});

// Static FAQ data to seed
const faqData = {
  _type: 'faqPage',
  title: 'Frequently Asked Questions | Cali Door & Windows',
  heading: 'Frequently Asked Questions',
  subheading: 'Find answers to common questions about our products, services, and processes.',
  ctaTitle: 'Still have questions?',
  ctaText: 'Our team is here to help. Contact us for personalized assistance with your window and door needs.',
  ctaButtonText: 'Contact Us',
  ctaButtonLink: '/contact',
  faqs: [
    {
      question: "What types of windows do you offer?",
      answer: "We offer a wide selection of window types including single-hung, double-hung, casement, awning, sliding, bay, bow, picture, and custom specialty windows. All our windows are available in various materials including vinyl, fiberglass, aluminum, and wood.",
      category: "Products",
      orderRank: 0
    },
    {
      question: "What door styles are available?",
      answer: "Our door collection includes entry doors, patio doors, French doors, sliding doors, storm doors, security doors, and garage doors. We offer various materials including wood, fiberglass, steel, aluminum, and glass options to match your home's style and your specific needs.",
      category: "Products",
      orderRank: 1
    },
    {
      question: "How long does installation typically take?",
      answer: "Installation time varies depending on the project scope. A standard window replacement might take 30-60 minutes per window, while door installations typically take 4-6 hours per door. Larger projects or custom installations may require additional time. We'll provide you with a specific timeframe during your consultation.",
      category: "Installation",
      orderRank: 2
    },
    {
      question: "Do you provide warranties on your products?",
      answer: "Yes, all our products come with manufacturer warranties. Additionally, we offer a 5-year labor warranty on all installations. Our premium lines include limited lifetime warranties on certain components. We'll provide detailed warranty information for your specific purchase during consultation.",
      category: "Warranty",
      orderRank: 3
    },
    {
      question: "What is your service area?",
      answer: "We currently serve the greater Southern California area, including Los Angeles, Orange County, San Diego, and the Inland Empire. For locations outside these areas, please contact us to discuss possible arrangements.",
      category: "Service",
      orderRank: 4
    },
    {
      question: "How much does window or door replacement cost?",
      answer: "Costs vary widely depending on the type, size, material, and number of windows or doors. We offer options for every budget, with basic vinyl windows starting around $300 installed, and premium custom options ranging up to several thousand dollars. We provide free, no-obligation quotes tailored to your specific needs.",
      category: "Pricing",
      orderRank: 5
    },
    {
      question: "Are energy-efficient options available?",
      answer: "Absolutely! We offer ENERGY STAR® certified windows and doors that can significantly reduce your energy bills. Features include double or triple glazing, low-E coatings, argon gas filling, warm edge spacers, and insulated frames. These energy-efficient options may qualify for tax credits or utility rebates.",
      category: "Products",
      orderRank: 6
    },
    {
      question: "What is your payment policy?",
      answer: "We typically require a 50% deposit to schedule your installation, with the remaining balance due upon satisfactory completion of the project. We accept all major credit cards, checks, and offer financing options through our partner lenders for qualified customers.",
      category: "Pricing",
      orderRank: 7
    },
    {
      question: "How do I maintain my new windows and doors?",
      answer: "Our products are designed for minimal maintenance. For vinyl and fiberglass, simply clean with mild soap and water periodically. Wood products may require occasional refinishing. We provide detailed care instructions with every installation, and our website has maintenance guides for all our products.",
      category: "Maintenance",
      orderRank: 8
    },
    {
      question: "Can you match historical or custom designs?",
      answer: "Yes, we specialize in matching historical designs and creating custom solutions. Our design team can work from photographs, architectural drawings, or existing elements to create windows and doors that maintain the character of your home while incorporating modern performance features.",
      category: "Products",
      orderRank: 9
    }
  ],
  seo: {
    title: 'Frequently Asked Questions | Cali Door & Windows',
    description: 'Find answers to common questions about our windows and doors, installation process, warranty information, pricing, and maintenance.'
  }
};

// Function to check if faqPage already exists
async function checkFaqPageExists() {
  try {
    const existingDoc = await client.fetch('*[_type == "faqPage"][0]');
    return existingDoc != null;
  } catch (error) {
    console.error('Error checking for existing FAQ page:', error);
    return false;
  }
}

// Function to create the faqPage document
async function createFaqPage() {
  try {
    const exists = await checkFaqPageExists();
    
    if (exists) {
      console.log('FAQ page already exists. Skipping creation.');
      return;
    }
    
    console.log('Creating FAQ page...');
    const result = await client.create(faqData);
    console.log(`FAQ page created with ID: ${result._id}`);
  } catch (error) {
    console.error('Error creating FAQ page:', error);
  }
}

// Run the script
if (!process.env.SANITY_API_TOKEN) {
  console.error('ERROR: SANITY_API_TOKEN environment variable is required.');
  process.exit(1);
}

createFaqPage()
  .then(() => {
    console.log('Script completed.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Script failed:', err);
    process.exit(1);
  }); 