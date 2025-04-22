export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'door' | 'window';
  features: string[];
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    unit: 'in' | 'cm';
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'window-001',
    name: 'Double Hung Window',
    description: 'Classic double hung window offering versatile ventilation options and timeless appeal. California Title 24 compliant for optimal energy efficiency.',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Tilt-in sashes for easy cleaning', 'Child safety locks', 'Custom grid patterns available'],
    materials: ['Vinyl frame', 'Double-pane glass', 'Weatherproof seals'],
    dimensions: {
      width: 32,
      height: 54,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'window-002',
    name: 'Casement Window',
    description: 'Modern casement window that opens outward for maximum ventilation and unobstructed views. Meets California Title 24 energy requirements.',
    price: 449.99,
    imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Full opening ventilation', 'Easy operation handle', 'Multi-point locking'],
    materials: ['Fiberglass frame', 'Low-E glass', 'Stainless steel hinges'],
    dimensions: {
      width: 30,
      height: 48,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'window-003',
    name: 'Bay/Bow Window',
    description: 'Elegant bay or bow window unit that adds architectural interest and expands interior space. Energy efficient and California Title 24 compliant.',
    price: 1899.99,
    imageUrl: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Creates additional indoor space', 'Panoramic views', 'Custom angle configurations'],
    materials: ['Hardwood frame', 'Triple-pane glass', 'Energy efficient insulation'],
    dimensions: {
      width: 80,
      height: 60,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'window-004',
    name: 'Sliding Window',
    description: 'Space-efficient sliding window perfect for areas with exterior clearance limitations. Energy efficient design meets California Title 24 requirements.',
    price: 349.99,
    imageUrl: 'https://images.unsplash.com/photo-1517141617745-25004caaa297?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Smooth gliding operation', 'Removable sash for cleaning', 'Dual locks for security'],
    materials: ['Vinyl frame', 'Tempered glass option', 'Anodized aluminum track'],
    dimensions: {
      width: 36,
      height: 24,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'window-005',
    name: 'Picture Window',
    description: 'Fixed picture window designed to frame your view and maximize natural light. Highly energy efficient and meets California Title 24 standards.',
    price: 499.99,
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Maximum light transmission', 'Fixed design for optimal insulation', 'Custom sizes available'],
    materials: ['Fiberglass frame', 'Low-E glass', 'Argon gas fill for insulation'],
    dimensions: {
      width: 48,
      height: 48,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'window-006',
    name: 'Awning Window',
    description: 'Functional awning window that opens outward from the bottom, perfect for ventilation even during light rain. California Title 24 compliant.',
    price: 429.99,
    imageUrl: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: 'window',
    features: ['California Title 24 compliant', 'Energy efficient', 'Weather-resistant ventilation', 'Easy to operate', 'Multiple configurations available'],
    materials: ['Vinyl or fiberglass frame options', 'Insulated glass', 'Durable hardware'],
    dimensions: {
      width: 36,
      height: 24,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'door-001',
    name: 'Interior Door',
    description: 'Stylish and functional interior door available in various designs to complement your home\'s aesthetic.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&auto=format&fit=crop',
    category: 'door',
    features: ['Multiple style options', 'Smooth operation', 'Sound dampening', 'Custom sizing available'],
    materials: ['Solid wood core', 'Various finish options', 'Quality hardware'],
    dimensions: {
      width: 30,
      height: 80,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'door-002',
    name: 'French Patio Door',
    description: 'Elegant French patio door system with multiple glass panels and traditional styling. Energy efficient and California Title 24 compliant.',
    price: 1499.99,
    imageUrl: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?w=800&auto=format&fit=crop',
    category: 'door',
    features: ['California Title 24 compliant', 'Energy efficient', 'Dual opening panels', 'Low-E glass', 'Multi-point locking system'],
    materials: ['Hardwood frame', 'Insulated glass', 'Premium hardware'],
    dimensions: {
      width: 72,
      height: 80,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'door-003',
    name: 'Sliding Patio Door',
    description: 'Modern sliding patio door offering space-efficient operation and a clean, contemporary look. Energy efficient and Title 24 compliant.',
    price: 1299.99,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
    category: 'door',
    features: ['California Title 24 compliant', 'Energy efficient', 'Smooth gliding operation', 'Security locks', 'Screen included'],
    materials: ['Vinyl or aluminum frame options', 'Tempered safety glass', 'Precision rollers'],
    dimensions: {
      width: 72,
      height: 80,
      unit: 'in'
    },
    inStock: true
  },
  {
    id: 'door-004',
    name: 'Exterior Entry Door',
    description: 'Durable and secure entry door with excellent insulation properties. Meets California Title 24 energy requirements.',
    price: 799.99,
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7f34b5f4526?w=800&auto=format&fit=crop',
    category: 'door',
    features: ['California Title 24 compliant', 'Energy efficient', 'Enhanced security features', 'Weather resistant', 'Multiple style options'],
    materials: ['Fiberglass or steel construction', 'Polyurethane foam core', 'Premium weather stripping'],
    dimensions: {
      width: 36,
      height: 80,
      unit: 'in'
    },
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'door' | 'window'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllProducts = (): Product[] => {
  return products;
}; 