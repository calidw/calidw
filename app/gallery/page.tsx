export const dynamic = 'force-dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import GalleryGrid from '../components/GalleryGrid';
import { getGalleryItems } from '../../lib/sanity';

// Define types for Sanity gallery items
interface SanityGalleryItem {
  _id: string;
  title: string;
  description?: string;
  image: string;
  fullSizeImage?: {
    asset?: {
      url: string;
    };
  };
  category?: {
    name: string;
  };
  projectDetails?: Array<{
    label: string;
    value: string;
  }>;
  relatedProducts?: Array<{
    _id: string;
    name: string;
    slug: {
      current: string;
    };
  }>;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fullSizeImageUrl?: string;
  category: string;
  projectDetails?: Array<{
    label: string;
    value: string;
  }>;
  relatedProducts?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

// Fetch gallery data from Sanity
export async function getGalleryData(): Promise<SanityGalleryItem[]> {
  try {
    const data = await getGalleryItems();
    return data;
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    return [];
  }
}

// Transform Sanity data to GalleryGrid format
function transformGalleryData(data: SanityGalleryItem[]): GalleryItem[] {
  if (!data || !Array.isArray(data)) return [];
  
  return data.map(item => ({
    id: item._id,
    title: item.title,
    description: item.description || '',
    imageUrl: item.image,
    fullSizeImageUrl: item.fullSizeImage?.asset?.url || item.image,
    category: item.category?.name || 'Uncategorized',
    projectDetails: item.projectDetails?.map(detail => ({
      label: detail.label,
      value: detail.value,
    })) || [],
    relatedProducts: item.relatedProducts?.map(product => ({
      id: product._id,
      name: product.name,
      slug: product.slug.current,
    })) || [],
  }));
}

// Generate unique categories from the gallery items
function getUniqueCategories(items: GalleryItem[]): string[] {
  const categories = new Set(['All']);
  
  items.forEach(item => {
    if (item.category) {
      categories.add(item.category);
    }
  });
  
  return Array.from(categories);
}

// Fallback gallery data if Sanity fetch fails
const fallbackGalleryData: GalleryItem[] = [
  {
    id: 'proj-001',
    title: 'Modern Home Transformation',
    description: 'Complete window and sliding door replacement for a contemporary look.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    category: 'Windows',
  },
  {
    id: 'proj-002',
    title: 'Elegant Entryway Upgrade',
    description: 'Custom solid wood entry door installation.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80&auto=format&fit=crop',
    category: 'Doors',
  },
  {
    id: 'proj-003',
    title: 'Sunroom Window Installation',
    description: 'Energy-efficient casement windows for a bright sunroom.',
    imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80&auto=format&fit=crop',
    category: 'Windows',
  },
  {
    id: 'proj-004',
    title: 'Classic Villa Windows',
    description: 'Double-hung windows preserving traditional aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format&fit=crop',
    category: 'Windows',
  },
  {
    id: 'proj-005',
    title: 'Patio Door Enhancement',
    description: 'Wide-opening French doors connecting indoor and outdoor spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop',
    category: 'Doors',
  },
];

export default async function GalleryPage() {
  // Fetch gallery data from Sanity
  const galleryData = await getGalleryData();
  const items = galleryData && galleryData.length > 0 
    ? transformGalleryData(galleryData) 
    : fallbackGalleryData;
  
  // Get unique categories from gallery items
  const categories = getUniqueCategories(items);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-100 blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-slate-100 blur-3xl opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                Our Work
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Gallery
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Explore our portfolio of completed projects and envision the possibilities for your own space.
              </p>
            </div>

            {/* Gallery Grid Component */}
            <GalleryGrid 
              items={items} 
              categories={categories} 
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-slate-700/50 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let our experts help you choose the perfect doors and windows for your project.
              </p>
              <Link 
                href="/contact?form=quote" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-800 to-red-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 