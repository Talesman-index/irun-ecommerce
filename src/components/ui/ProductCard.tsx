'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye } from '@phosphor-icons/react';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { QuickViewModal } from './QuickViewModal';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  length: string;
  price: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
}

export function ProductCard({
  id,
  image,
  name,
  length,
  price,
  rating,
  reviewCount,
  isNew,
}: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const router = useRouter();

  const product = { id, image, name, length, price, rating, reviewCount, isNew };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    showToast(`${name} ajouté au panier`);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const handleNavigate = () => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onClick={handleNavigate}
        className="group relative flex flex-col bg-white overflow-hidden cursor-pointer"
      >
        {/* Image Wrapper */}
        <div className="relative aspect-[3/4] overflow-hidden bg-regirl-cream/10">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            <div className="bg-white/90 backdrop-blur-sm text-regirl-charcoal font-ui text-[10px] px-3 py-1 font-bold rounded-[4px] shadow-sm uppercase tracking-wider">
              {length}
            </div>
            {isNew && (
              <div className="bg-regirl-burgundy text-white font-ui text-[10px] uppercase font-bold px-3 py-1 rounded-[4px] shadow-sm tracking-wider">
                NOUVEAU
              </div>
            )}
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-regirl-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-10">
            <button 
              onClick={handleQuickView}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-regirl-charcoal hover:bg-regirl-burgundy hover:text-white transition-all duration-300 transform translate-y-6 group-hover:translate-y-0 shadow-2xl"
              title="Aperçu rapide"
            >
              <Eye size={44} weight="light" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-regirl-charcoal hover:bg-regirl-burgundy hover:text-white transition-all duration-300 transform translate-y-6 group-hover:translate-y-0 delay-75 shadow-2xl"
              title="Ajouter au panier"
            >
              <ShoppingBag size={44} weight="light" />
            </button>
          </div>
        </div>

        {/* Info Block - Rounded Bottom */}
        <div className="p-5 bg-white rounded-b-[20px] transition-shadow duration-300 group-hover:shadow-regirl-1 border-x border-b border-regirl-border group-hover:border-transparent">
          <h3 
            className="font-sans font-light text-[15px] text-regirl-charcoal mb-2 line-clamp-1 group-hover:text-regirl-burgundy transition-colors"
          >
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-regirl-burgundy">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} weight={i < Math.floor(rating) ? "fill" : "light"} />
              ))}
            </div>
            <span className="font-sans text-[11px] text-regirl-charcoal-muted uppercase tracking-wider">
              {reviewCount} avis
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-serif text-[20px] text-regirl-charcoal font-medium">
              {formatPrice(price)}
            </p>
            <button 
              onClick={handleAddToCart}
              className="md:hidden text-regirl-burgundy"
            >
              <ShoppingBag size={24} weight="light" />
            </button>
          </div>
        </div>
      </motion.div>

      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
