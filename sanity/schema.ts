import { type SchemaTypeDefinition } from 'sanity';

// Document types
import product from './schemas/documents/product';
import category from './schemas/documents/category';
import homePage from './schemas/documents/homePage';
import gallery from './schemas/documents/gallery';
import testimonial from './schemas/documents/testimonial';
import aboutPage from './schemas/documents/aboutPage';
import faq from './schemas/documents/faq';
import contactInfo from './schemas/documents/contactInfo';
import serviceArea from './schemas/documents/serviceArea';

// Object types
import hero from './schemas/objects/hero';
import features from './schemas/objects/features';
import featureItem from './schemas/objects/featureItem';
import whyChooseUs from './schemas/objects/whyChooseUs';
import offerings from './schemas/objects/offerings';
import offeringItem from './schemas/objects/offeringItem';
import testimonialSection from './schemas/objects/testimonialSection';
import historyItem from './schemas/objects/historyItem';
import valueItem from './schemas/objects/valueItem';
import dimensions from './schemas/objects/dimensions';
import socialLink from './schemas/objects/socialLink';
import sliderItem from './schemas/objects/sliderItem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    product,
    category,
    homePage,
    gallery,
    testimonial,
    aboutPage,
    faq,
    contactInfo,
    serviceArea,
    
    // Objects
    hero,
    features,
    featureItem,
    whyChooseUs,
    offerings,
    offeringItem,
    testimonialSection,
    historyItem,
    valueItem,
    dimensions,
    socialLink,
    sliderItem,
  ],
}; 