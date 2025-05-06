import { type SchemaTypeDefinition } from 'sanity';

// Document types
import product from './schemas/documents/product';
import category from './schemas/documents/category';
import homePage from './schemas/documents/homePage';
import galleryItem from './schemas/documents/galleryItem';
import testimonial from './schemas/documents/testimonial';
import aboutPage from './schemas/documents/aboutPage';
import contactPage from './schemas/documents/contactPage';
import galleryPage from './schemas/documents/galleryPage';
import productsPage from './schemas/documents/productsPage';
import faqPage from './schemas/documents/faqPage';
import faq from './schemas/documents/faq';
import serviceArea from './schemas/documents/serviceArea';
import contactInfo from './schemas/documents/contactInfo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    product,
    category,
    homePage,
    galleryItem,
    testimonial,
    aboutPage,
    contactPage,
    galleryPage,
    productsPage,
    faqPage,
    faq,
    serviceArea,
    contactInfo,
  ],
}; 