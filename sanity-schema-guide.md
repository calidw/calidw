# Cali Door & Window - Sanity Schema Guide

This document provides a comprehensive reference for the Sanity schema structure used in the Cali Door & Window website. It includes all content types, fields, relationships, and implementation examples.

## Table of Contents

1. [Document Types](#document-types)
   - [Product](#product)
   - [Category](#category)
   - [HomePage](#homepage)
   - [Gallery](#gallery)
   - [Testimonial](#testimonial)
   - [AboutPage](#aboutpage)
   - [FAQ](#faq)
   - [ContactInfo](#contactinfo)
   - [ServiceArea](#servicearea)
   
2. [Object Types](#object-types)
   - [Hero](#hero)
   - [SliderItem](#slideritem)
   - [Features](#features)
   - [FeatureItem](#featureitem)
   - [WhyChooseUs](#whychooseus)
   - [Offerings](#offerings)
   - [OfferingItem](#offeringitem)
   - [TestimonialSection](#testimonialsection)
   - [HistoryItem](#historyitem)
   - [ValueItem](#valueitem)
   - [Dimensions](#dimensions)
   - [SocialLink](#sociallink)

3. [Relationship Diagram](#relationship-diagram)

4. [Implementation Details](#implementation-details)
   - [Mobile Optimizations](#mobile-optimizations)
   - [Gallery Zoom Functionality](#gallery-zoom-functionality)
   - [Connected Content](#connected-content)

5. [Usage Examples](#usage-examples)

---

## Document Types

### Product

Products represent the door and window offerings. Each product has details like name, images, price, features, and dimensions.

**Key Fields:**
- `name`: Product name (string, required)
- `slug`: URL-friendly identifier (slug, required)
- `mainImage`: Primary product image (image, required)
- `gallery`: Collection of product images (array of images)
- `category`: Reference to a category (reference)
- `price`: Product price (number, required)
- `description`: Product description (text, required)
- `features`: Array of product features (array of strings, min 1)
- `materials`: Array of materials used (array of strings, min 1)
- `dimensions`: Object with width, height, depth, and unit (object)
- `inStock`: Boolean indicating availability (boolean)
- `seoDescription`: SEO-friendly description (text)
- `relatedProducts`: References to other products (array of references, unique)

### Category

Categories organize products into groups like doors, windows, etc.

**Key Fields:**
- `name`: Category name (string, required)
- `slug`: URL-friendly identifier (slug, required)
- `description`: Optional category description (text)
- `image`: Category image (image)

### HomePage

The homepage configuration includes all sections like hero, featured products, etc.

**Key Fields:**
- `title`: Page title (string, required)
- `hero`: Hero section configuration (object, required)
- `featuredProducts`: References to featured products (array of references)
  - Limited to maximum 6 products
  - Each reference must be unique
- `whyChooseUs`: Why Choose Us section configuration (object)
- `features`: Features section configuration (object)
- `offerings`: Offerings section configuration (object)
- `testimonialSection`: Testimonial section configuration (object)
- `gallerySection`: Gallery section (object)
  - `title`: Section title (string)
  - `subtitle`: Section subtitle (string)
  - `items`: References to gallery items (array of references, max 12)
- `serviceAreas`: References to service areas (array of references)

### Gallery

Gallery items represent project images and installations.

**Key Fields:**
- `title`: Gallery item title (string, required)
- `description`: Description text (text)
- `image`: Main gallery image (image, required)
- `fullSizeImage`: High-resolution image for zoom view (image)
- `projectDetails`: Project specifications (array of objects)
  - Each object has `label` and `value` fields (both strings, required)
- `category`: Reference to a category (reference)
- `featured`: Boolean to highlight in gallery (boolean)
- `relatedProducts`: References to products used in the project (array of references, unique)
- `publishedAt`: Publication date (datetime)

### Testimonial

Customer testimonials and reviews.

**Key Fields:**
- `quote`: Testimonial text (text, required)
- `author`: Customer name (string, required)
- `location`: Customer location (string)
- `rating`: Rating value 1-5 (number, required)
- `image`: Optional customer image (image)
- `publishedAt`: Publication date (datetime)

### AboutPage

The about page configuration with company information.

**Key Fields:**
- `title`: Page title (string, required)
- `heroSection`: Hero section (object)
  - `heading`: Main heading (string, required)
  - `subheading`: Secondary heading (text)
  - `backgroundImage`: Background image (image)
- `introduction`: Introduction text (text, required)
- `mission`: Mission statement (text, required)
- `image`: Main company image (image, required)
- `history`: Array of history items (array of historyItem objects)
- `values`: Array of company values (array of valueItem objects)
- `expertise`: Areas of expertise (array of objects)
  - Each object has `title` (string, required) and `items` (array of strings, required)
- `teamMembers`: Team member profiles (array of objects)
  - Each object has:
    - `name`: Team member name (string, required)
    - `position`: Job title (string, required)
    - `bio`: Biography (text)
    - `image`: Team member photo (image)
- `serviceAreas`: References to service areas (array of references)

### FAQ

Frequently asked questions organized by category.

**Key Fields:**
- `question`: The question (string, required)
- `answer`: The answer (text, required)
- `category`: Question category (string)
- `order`: Display order (number)

### ContactInfo

Company contact information.

**Key Fields:**
- `address`: Physical address (text, required)
- `phone`: Phone number (string, required)
- `email`: Email address (string, required)
- `hours`: Business hours (text)
- `mapLocation`: Map coordinates (object with lat/lng)
- `socialLinks`: Social media links (array of socialLink objects)

### ServiceArea

Geographic service areas.

**Key Fields:**
- `name`: Area name (string, required)
- `slug`: URL-friendly identifier (slug, required)
- `description`: Area description (text)
- `image`: Area image (image)
- `zipCodes`: Array of ZIP codes served (array of strings)
- `featured`: Boolean to highlight service area (boolean)

---

## Object Types

### Hero

Hero section configuration.

**Key Fields:**
- `title`: Section title (string, required)
- `subtitle`: Section subtitle (string)
- `sliderItems`: Array of slider items (array of sliderItem objects, min 1)
- `mobileLayout`: Controls image/text order on mobile devices (string)
  - Options: 'imageFirst' or 'textFirst'
  - Default: 'imageFirst'
- `overlayOpacity`: Controls the opacity of the dark overlay on slider images (number, 0-100, default 40)
- `buttonPrimary`: Primary button text (string)
- `buttonPrimaryLink`: Primary button URL (string)
- `buttonSecondary`: Secondary button text (string)
- `buttonSecondaryLink`: Secondary button URL (string)

### SliderItem

Individual slides for the hero section slider.

**Key Fields:**
- `image`: Slide image (image, required)
- `mobileImage`: Optimized image for mobile devices (image)
- `alt`: Image alt text (string, required)
- `label`: Slide label (string)
- `description`: Slide description (text)
- `buttonText`: Optional button text (string)
- `buttonLink`: Optional button URL (string)
- `textPosition`: Text position on slide (string)
  - Options: 'left', 'center', 'right'
  - Default: 'left'

### Features

Features section configuration.

**Key Fields:**
- `title`: Section title (string, required)
- `subtitle`: Section subtitle (string)
- `featureItems`: Array of feature items (array of featureItem objects, min 1)

### FeatureItem

Individual feature.

**Key Fields:**
- `title`: Feature title (string, required)
- `description`: Feature description (text)
- `icon`: Icon name or identifier (string)
- `link`: Optional link URL (string)
- `linkText`: Optional link text (string)

### WhyChooseUs

Why Choose Us section configuration.

**Key Fields:**
- `title`: Section title (string, required)
- `subtitle`: Section subtitle (string)
- `features`: Array of features (array of objects, min 1)
  - Each object has:
    - `title`: Feature title (string, required)
    - `description`: Feature description (text, required)
    - `icon`: Icon name or identifier (string)

### Offerings

Offerings section configuration.

**Key Fields:**
- `title`: Section title (string, required)
- `description`: Section description (text)
- `image`: Section image (image)
- `items`: Array of offering items (array of offeringItem objects, min 1)

### OfferingItem

Individual offering.

**Key Fields:**
- `title`: Offering title (string, required)
- `description`: Offering description (text)

### TestimonialSection

Testimonial section configuration.

**Key Fields:**
- `title`: Section title (string, required)
- `subtitle`: Section subtitle (string)
- `displayCount`: Number of testimonials to display (number, min 1, default 3)

### HistoryItem

Company history milestone.

**Key Fields:**
- `year`: Year or time period (string, required)
- `title`: Milestone title (string, required)
- `description`: Milestone description (text)

### ValueItem

Company value.

**Key Fields:**
- `title`: Value title (string, required)
- `description`: Value description (text)
- `icon`: Icon name or identifier (string)

### Dimensions

Product dimensions.

**Key Fields:**
- `width`: Width value (number, required)
- `height`: Height value (number, required)
- `depth`: Optional depth value (number)
- `unit`: Unit of measurement (string)
  - Options: 'in', 'ft', 'cm', 'mm'
  - Default: 'in'

### SocialLink

Social media link.

**Key Fields:**
- `platform`: Platform name (string, required)
  - Options include: 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'pinterest', 'tiktok'
- `url`: Social media URL (url, required)

---

## Relationship Diagram

```
HomePage
├── Hero
│   └── SliderItem (multiple)
├── Product (references, up to 6)
├── WhyChooseUs
│   └── Feature (multiple)
├── Features
│   └── FeatureItem (multiple)
├── Offerings
│   └── OfferingItem (multiple)
├── TestimonialSection
├── Gallery (references, multiple)
└── ServiceArea (references, multiple)

AboutPage
├── HeroSection
├── HistoryItem (multiple)
├── ValueItem (multiple)
├── Expertise (multiple)
│   └── Items (multiple strings)
├── TeamMembers (multiple)
└── ServiceArea (references, multiple)

Product
├── Category (reference)
├── Dimensions
└── Product (references for related products)

Gallery
├── Category (reference)
├── ProjectDetails (multiple label/value pairs)
└── Product (references for related products)

ContactInfo
└── SocialLink (multiple)
```

---

## Implementation Details

### Mobile Optimizations

The schema includes specific features to optimize mobile experiences:

1. **Mobile-First Layout Control**:
   - The `mobileLayout` field in the `Hero` schema allows content managers to control whether images or text appear first on mobile devices
   - Options include 'imageFirst' (default) or 'textFirst'

2. **Mobile-Specific Images**:
   - The `SliderItem` schema includes a `mobileImage` field for optimized mobile images
   - When provided, these images replace the standard images on mobile devices, improving load times and visual experience

3. **Responsive Text Positioning**:
   - The `textPosition` field in `SliderItem` allows content managers to position text left, center, or right

### Gallery Zoom Functionality

The gallery implements a zoom feature for detailed image viewing:

1. **High-Resolution Images**:
   - The `fullSizeImage` field in the `Gallery` schema allows for dedicated high-resolution images for zoom views
   - If not provided, the system falls back to the standard image

2. **Project Details Display**:
   - When zoomed, the gallery displays additional project details from the `projectDetails` array
   - Each detail consists of a label/value pair for specifications like dimensions, materials, etc.

### Connected Content

The schema implements several cross-references between content types:

1. **Products and Categories**:
   - Products reference categories for organization
   - The homepage references up to 6 featured products

2. **Gallery and Products**:
   - Gallery items can reference the products used in each project
   - This creates a bidirectional navigation between the portfolio and product catalog

3. **Service Areas**:
   - Service areas are referenced from both homepage and about page
   - This creates a consistent representation of the company's service territory

---

## Usage Examples

### Creating a New Product

1. Go to the "Products" section in Sanity Studio
2. Click "Create new Product"
3. Fill in the required fields:
   - Name
   - Slug (generated from name)
   - Main Image
   - Category (select from existing categories)
   - Price
   - Description
   - At least one feature
   - At least one material
   - Dimensions
4. Optionally add:
   - Additional gallery images
   - SEO description
   - Related products

### Setting Up the Homepage Hero

1. Go to the "Home Page" section in Sanity Studio
2. Configure the Hero section:
   - Add a title and subtitle
   - Set the mobile layout preference (imageFirst or textFirst)
   - Set the overlay opacity (0-100)
   - Add primary and secondary buttons with links
   - Add slider items with:
     - Desktop image
     - Optional mobile-specific image
     - Alt text
     - Label and description
     - Optional button with link
     - Text position preference (left, center, right)

### Creating Gallery Items with Zoom Support

1. Go to the "Gallery" section in Sanity Studio
2. Create new gallery items with:
   - Title
   - Description
   - Main image (standard resolution)
   - Full-size image for zoom view (high resolution)
   - Project details:
     - Add label/value pairs like "Material: Aluminum", "Style: Modern"
   - Select a category
   - Toggle featured status if it should be highlighted
   - Add related products that were used in the project

### Managing Team Members in About Page

1. Go to the "About Page" section in Sanity Studio
2. Scroll to the "Team Members" section
3. Add team members with:
   - Name
   - Position/title
   - Biography
   - Photo
4. Arrange the order of team members using drag-and-drop

### Creating Service Areas

1. Go to the "Service Areas" section in Sanity Studio
2. Add service areas with:
   - Name
   - Slug
   - Description
   - Representative image
   - ZIP codes served (for filtering/search functionality)
   - Toggle featured status for priority areas

This schema structure provides a comprehensive content management solution for the Cali Door & Window website, with special emphasis on mobile optimization, image presentation, and interconnected content. 