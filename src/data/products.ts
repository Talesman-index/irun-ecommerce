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
    name: 'Mèche Brésilienne Body Wave',
    image: '/assets/images/IMG_6210.JPG',
    length: '18"',
    price: 12500,
    rating: 4.9,
    reviewCount: 127,
    isNew: true,
    category: 'Brésilienne',
    description: 'Une texture onduleuse et soyeuse pour un volume naturel et élégant.',
    details: ['100% Cheveux Humains', 'Double Trame', 'Sans Mélange'],
  },
  {
    id: 2,
    name: 'Lace Closure Péruvienne Straight',
    image: '/assets/images/IMG_6212.JPG',
    length: '14"',
    price: 8500,
    rating: 4.8,
    reviewCount: 84,
    category: 'Péruvienne',
    description: 'Finition parfaite et naturelle pour vos tissages lisses.',
    details: ['Lace HD', 'Pré-customisée', 'Nœuds blanchis'],
  },
  {
    id: 3,
    name: 'Mèche Malaisienne Deep Wave',
    image: '/assets/images/IMG_6213.JPG',
    length: '22"',
    price: 15000,
    rating: 5.0,
    reviewCount: 215,
    category: 'Malaisienne',
    description: 'Boucles profondes et rebondissantes pour un look glamour.',
    details: ['Volume intense', 'Brillance naturelle', 'Longue durée'],
  },
  {
    id: 4,
    name: 'Full Frontal Wig 360',
    image: '/assets/images/IMG_6214.JPG',
    length: '20"',
    price: 35000,
    rating: 4.7,
    reviewCount: 96,
    isNew: true,
    category: 'Wigs',
    description: 'Perruque complète offrant une liberté de coiffure totale sur 360°.',
    details: ['Dentelle invisible', 'Bonnet ajustable', 'Densité 180%'],
  },
  {
    id: 5,
    name: 'Mèche Indienne Loose Wave',
    image: '/assets/images/IMG_6215.JPG',
    length: '24"',
    price: 18500,
    rating: 4.9,
    reviewCount: 112,
    category: 'Indienne',
    description: 'Ondulations larges et souples pour un effet ultra-glamour.',
    details: ['Texture premium', 'Sans nœuds', 'Facile à coiffer'],
  },
  {
    id: 6,
    name: 'Kinky Straight Weave',
    image: '/assets/images/IMG_6217.JPG',
    length: '16"',
    price: 11000,
    rating: 4.8,
    reviewCount: 67,
    category: 'Textured',
    description: 'Texture soufflée mimant parfaitement le cheveu naturel défrisé.',
    details: ['Look naturel', 'Grand volume', 'Peut être lissé'],
  },
  {
    id: 7,
    name: 'Closure Malaisienne 4x4',
    image: '/assets/images/IMG_6218.JPG',
    length: '12"',
    price: 6500,
    rating: 4.9,
    reviewCount: 143,
    category: 'Malaisienne',
    description: 'Fermeture classique et durable pour un tissage protecteur.',
    details: ['Qualité supérieure', 'Installation facile', 'Réutilisable'],
  },
  {
    id: 8,
    name: 'HD Lace Frontal Wig',
    image: '/assets/images/IMG_6219.JPG',
    length: '26"',
    price: 45000,
    rating: 5.0,
    reviewCount: 89,
    isNew: true,
    category: 'Wigs',
    description: 'Le summum de la discrétion avec une dentelle HD totalement invisible.',
    details: ['Ultra HD Lace', 'Cheveux vierges', 'Ligne de front naturelle'],
  },
];
