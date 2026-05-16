'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

const categories = ['Tous', 'Brésilienne', 'Péruvienne', 'Malaisienne', 'Indienne', 'Wigs'];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProducts = activeCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-irun-black pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal direction="down">
            <span className="font-ui text-[12px] tracking-[0.3em] text-irun-terracotta uppercase block mb-4">
              Boutique
            </span>
            <h1 className="font-serif text-[42px] md:text-[64px] text-white uppercase tracking-wider mb-8">
              La Collection <span className="italic font-accent text-irun-terracotta">IRUN</span>
            </h1>
          </Reveal>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-ui text-[13px] uppercase tracking-widest px-6 py-2 transition-all border-b-2 ${
                  activeCategory === cat 
                    ? 'border-irun-terracotta text-white' 
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
                Aucun produit trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
