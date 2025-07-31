# Contact Information Management System

This document explains the new contact information management system that fetches data from the Sanity backend.

## Overview

The contact information system allows you to manage all contact details through the Sanity CMS, including:

- Address (with show/hide option)
- Phone number (with show/hide option)
- Email address (with show/hide option)
- Business hours (with show/hide option)
- Map location coordinates
- Social media links (with show/hide option for each)

## Files Structure

### Frontend Components

1. **ContactInfoDisplay Component** (`app/components/ContactInfoDisplay.tsx`)
   - Reusable component for displaying contact information
   - Supports light and dark themes
   - Can be used with or without icons
   - Handles fallback data when Sanity is unavailable

2. **useContactInfo Hook** (`app/hooks/useContactInfo.ts`)
   - Custom React hook for fetching contact info
   - Handles loading states and error handling
   - Can be used in any client component

3. **Updated Contact Page** (`app/contact/page.tsx`)
   - Server-side component that fetches contact info
   - Uses ContactInfoDisplay component for consistent styling

4. **Updated Footer** (`app/components/Footer.tsx`)
   - Client-side component using useContactInfo hook
   - Shows loading animation while fetching data
   - Displays phone and email in footer

### Backend Schema

1. **Contact Info Schema** (`sanity/schemas/documents/contactInfo.ts` and `calidwbk/schemaTypes/documents/contactInfo.ts`)
   - Main schema for contact information
   - Each field has a show/hide toggle
   - Structured data for address, phone, email, hours

2. **Social Link Schema** (`sanity/schemas/objects/socialLink.ts` and `calidwbk/schemaTypes/objects/socialLink.ts`)
   - Schema for social media links
   - Includes platform, URL, and show/hide option

3. **Sanity Client Functions** (`app/lib/sanity.ts`)
   - `getContactInfo()` function to fetch contact data
   - TypeScript interface for type safety
   - Error handling and fallback support

## Usage

### In the Sanity Studio

1. Navigate to the "Contact Information" document type
2. Fill in the contact details:
   - **Address**: Street, City, State, ZIP Code
   - **Phone**: Phone number with formatting
   - **Email**: Valid email address
   - **Hours**: Array of business hour strings
   - **Map Location**: Latitude and longitude coordinates
   - **Social Links**: Platform and URL for each social media account

3. Use the "Show" toggles to control which information appears on the website

### In the Frontend

#### Using the ContactInfoDisplay Component

```tsx
import ContactInfoDisplay from '../components/ContactInfoDisplay';
import { getContactInfo } from '../lib/sanity';

// In a server component
export default async function MyPage() {
  const contactInfo = await getContactInfo();
  
  return (
    <ContactInfoDisplay 
      contactInfo={contactInfo}
      theme="dark" // or "light"
      showIcons={true}
      className="custom-class"
    />
  );
}
```

#### Using the useContactInfo Hook

```tsx
import { useContactInfo } from '../hooks/useContactInfo';

// In a client component
export default function MyComponent() {
  const { contactInfo, loading, error } = useContactInfo();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {contactInfo?.phone?.show && (
        <a href={`tel:${contactInfo.phone.number}`}>
          {contactInfo.phone.number}
        </a>
      )}
    </div>
  );
}
```

## Data Structure

### ContactInfo Interface

```typescript
interface ContactInfo {
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    show: boolean;
  };
  phone?: {
    number: string;
    show: boolean;
  };
  email?: {
    address: string;
    show: boolean;
  };
  hours?: {
    schedule: string[];
    show: boolean;
  };
  mapLocation?: {
    lat: number;
    lng: number;
  };
  socialLinks?: Array<{
    platform: string;
    url: string;
    show: boolean;
  }>;
}
```

## Setting Up the Data

1. **Deploy Sanity Schema Changes**:
   ```bash
   cd calidwbk
   npm run build
   npm run deploy
   ```

2. **Create Contact Info Document**:
   - Go to your Sanity Studio
   - Create a new "Contact Information" document
   - Fill in all the required fields
   - Set the visibility toggles as needed

3. **Test the Integration**:
   - The website will automatically fetch and display the contact information
   - If no data is found, fallback data will be displayed
   - Check both the contact page and footer

## Fallback Behavior

If the Sanity backend is unavailable or no contact info is found, the system will use fallback data:

- **Address**: 3746 Foothill Boulevard #1254, Glendale, CA 91214
- **Phone**: (818) 282-3437
- **Email**: sales@calidw.com
- **Hours**: Mon-Fri 9AM-6PM, Sat 9AM-2PM, Sun Closed

This ensures the website always displays contact information even during maintenance or data issues.

## Customization

### Adding New Contact Fields

1. Update the schema files in both `sanity/schemas/` and `calidwbk/schemaTypes/`
2. Update the `ContactInfo` interface in `app/lib/sanity.ts`
3. Update the `getContactInfo()` query to include the new fields
4. Update the `ContactInfoDisplay` component to display the new fields

### Styling Changes

- Modify the `ContactInfoDisplay` component for visual changes
- Update the theme classes for different color schemes
- Customize the loading states in components that use the hook

## Benefits

1. **Centralized Management**: All contact info managed from one place
2. **Flexibility**: Each field can be shown or hidden independently
3. **Consistency**: Same data source for all contact displays
4. **Fallback Safety**: Website works even if CMS is unavailable
5. **Type Safety**: Full TypeScript support with proper interfaces
6. **Reusable Components**: Easy to add contact info to new pages

## Troubleshooting

### Contact Info Not Displaying
1. Check if the Sanity document exists and is published
2. Verify the environment variables are set correctly
3. Check the browser console for any API errors
4. Ensure the schema is properly deployed

### Styling Issues
1. Verify the theme prop is set correctly
2. Check if custom classes are conflicting
3. Ensure Tailwind CSS is compiled with all necessary classes

### Performance Issues
1. Consider adding caching to the `getContactInfo()` function
2. Use React.memo() for frequently re-rendered components
3. Implement SWR or React Query for better data fetching
