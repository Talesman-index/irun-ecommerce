export interface Product {
  id: number;
  name: string;
  image: string;
  length: string;
  price: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  description?: string;
  category?: string;
  details?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'ÌRÙN Halo Bundles (4 bundles)',
    image: '/assets/images/product_image.jpeg',
    length: '20"',
    price: 24500,
    rating: 5.0,
    reviewCount: 42,
    isNew: true,
    category: 'Bundles',
    description: 'Le pack ultime pour un volume et une longueur spectaculaires. 4 bundles de qualité premium.',
    details: ['100% Cheveux Humains', 'Double Trame', 'Volume Exceptionnel'],
  },
  {
    id: 2,
    name: 'ÌRÙN throw on & go - Band wig',
    image: '/assets/images/product_image.jpeg',
    length: '18"',
    price: 18000,
    rating: 4.9,
    reviewCount: 35,
    isNew: true,
    category: 'Wigs',
    description: 'La solution parfaite pour les matins pressés. Style instantané et confort total.',
    details: ['Headband intégré', 'Installation sans colle', 'Look Naturel'],
  },
  {
    id: 3,
    name: 'ÌRÙN Seamless Curl Unit- U part wig',
    image: '/assets/images/product_image.jpeg',
    length: '16"',
    price: 21500,
    rating: 4.8,
    reviewCount: 28,
    category: 'Wigs',
    description: 'Une intégration parfaite avec vos cheveux naturels pour un volume bouclé sans couture.',
    details: ['U-Part Invisible', 'Boucles Haute Définition', 'Protection des bords'],
  },
  {
    id: 4,
    name: 'ÌRÙN Velvet Lace Unit (closure wig)',
    image: '/assets/images/product_image.jpeg',
    length: '14"',
    price: 27500,
    rating: 5.0,
    reviewCount: 51,
    isNew: true,
    category: 'Wigs',
    description: 'La discrétion absolue avec notre Velvet Lace pour une ligne de front indétectable.',
    details: ['Velvet HD Lace', 'Finition Closure', 'Nœuds Invisibles'],
  },
  {
    id: 5,
    name: 'ÌRÙN Cloud Comb',
    image: '/assets/images/irun_cloud_comb.png',
    length: 'Standard',
    price: 2500,
    rating: 4.7,
    reviewCount: 64,
    category: 'Accessories',
    description: 'Le compagnon idéal pour démêler vos extensions en douceur sans les abîmer.',
    details: ['Dents Larges', 'Finition Soft-Touch', 'Anti-Statique'],
  },
  {
    id: 6,
    name: 'ÌRÙN Moon Silk Bonnet',
    image: '/assets/images/irun_silk_bonnet.png',
    length: 'Standard',
    price: 4500,
    rating: 4.9,
    reviewCount: 82,
    category: 'Accessories',
    description: 'Protégez vos cheveux et préservez l\'hydratation pendant votre sommeil.',
    details: ['100% Soie de Mûrier', 'Élastique Ajustable', 'Format XL'],
  },
  {
    id: 7,
    name: 'ÌRÙN Halo Hydration Mist',
    image: '/assets/images/irun_hydration_mist.png',
    length: '250ml',
    price: 6500,
    rating: 4.9,
    reviewCount: 47,
    category: 'Care',
    description: 'Une brume légère qui réveille vos boucles et apporte une brillance miroir.',
    details: ['Sans Rinçage', 'Formule Hydratante', 'Parfum Signature'],
  },
];
