// This script can be run to seed contact information data in Sanity
// Run it in the Sanity Studio console or use it as a reference for manual data entry

const contactInfoData = {
  _type: 'contactInfo',
  address: {
    street: '3746 Foothill Boulevard #1254',
    city: 'Glendale',
    state: 'CA',
    zipCode: '91214',
    show: true,
  },
  phone: {
    number: '(818) 282-3437',
    show: true,
  },
  email: {
    address: 'sales@calidw.com',
    show: true,
  },
  hours: {
    schedule: [
      'Mon - Fri: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed'
    ],
    show: true,
  },
  mapLocation: {
    lat: 34.1478,
    lng: -118.2669,
  },
  socialLinks: [
    {
      _type: 'socialLink',
      platform: 'facebook',
      url: 'https://facebook.com/calidw',
      show: true,
    },
    {
      _type: 'socialLink',
      platform: 'instagram',
      url: 'https://instagram.com/calidw',
      show: true,
    }
  ],
};

// To create this document in Sanity, you can either:
// 1. Copy and modify this data in the Sanity Studio
// 2. Use the Sanity client to create it programmatically
// 3. Import it via Sanity's import tools

console.log('Contact Info Data Structure:', JSON.stringify(contactInfoData, null, 2));

export default contactInfoData;
