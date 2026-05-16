'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  
  // Map slugs to display names
  const categoryMap: { [key: string]: string } = {
    'bresilienne': 'Brésilienne',
    'peruvienne': 'Péruvienne',
    'malaisienne': 'Malaisienne',
    'indienne': 'Indienne',
    'wigs': 'Wigs'
  };

  const displayName = categoryMap[categorySlug.toLowerCase()] || categorySlug;
  const filteredProducts = products.filter(
    p => p.category?.toLowerCase() === displayName.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-irun-black pt-16 md:pt-20 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal direction="down">
            <span className="font-ui text-[12px] tracking-[0.3em] text-irun-terracotta uppercase block mb-4">
              Collection
            </span>
            <h1 className="font-serif text-[42px] md:text-[64px] text-white uppercase tracking-wider">
              {displayName}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                >
                  <ProductCard 
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    length={product.length}
                    price={product.price}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    isNew={product.isNew}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-40">
              <p className="font-serif text-2xl text-irun-black-muted">
                Aucun produit trouvé dans la collection {displayName}.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
