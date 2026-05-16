'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { ProductCard } from '../ui/ProductCard';

import { products } from '@/data/products';

export function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-white py-24 md:py-40 px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-24 text-center max-w-xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-ui text-[12px] tracking-[0.3em] text-irun-terracotta uppercase block mb-6"
          >
            Sélection Exclusive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[42px] md:text-[52px] text-irun-black leading-[1.1]"
          >
            Nos <span className="italic font-accent text-irun-terracotta">Incontournables</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
            >
              <ProductCard 
                id={product.id}
                name={product.name}
                image={product.image}
                length={product.length || '18"'}
                price={product.price}
                rating={product.rating || 5}
                reviewCount={product.reviewCount || 0}
                isNew={product.isNew}
              />
            </motion.div>
          ))}
        </div>

        <footer className="mt-24 text-center">
          <Link href="/collection" className="btn-irun-outline group inline-flex items-center gap-4">
            Voir toute la collection
            <ArrowRight size={18} weight="light" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </footer>
      </div>
    </section>
  );
}
