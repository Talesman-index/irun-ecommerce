'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Star, ShieldCheck, Truck } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

interface QuickViewModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.name} ajouté au panier`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-irun-black/60 backdrop-blur-sm z-[1000]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl bg-white shadow-irun-3 z-[1001] overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh] md:h-[600px]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-irun-black hover:text-irun-terracotta transition-colors"
            >
              <X size={24} weight="light" />
            </button>

            {/* Product Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-full relative bg-irun-nude/30">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-irun-terracotta text-white font-ui text-[10px] tracking-[0.2em] uppercase font-bold">
                  Nouveau
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-irun-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" />
                  ))}
                </div>
                <span className="text-[12px] text-irun-black-muted font-ui tracking-wide">
                  ({product.reviewCount || 12} avis clients)
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-irun-black mb-4">
                {product.name}
              </h2>

              <p className="font-serif text-2xl text-irun-terracotta mb-8">
                {product.price.toLocaleString()} FCFA
              </p>

              <p className="font-sans font-light text-[15px] text-irun-black-muted leading-relaxed mb-8">
                L'excellence du tissage premium. Cette mèche {product.name.toLowerCase()} offre une texture soyeuse, une densité naturelle et une durabilité exceptionnelle. Idéale pour sublimer votre style quotidien ou pour des occasions spéciales.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between py-4 border-y border-irun-border">
                  <span className="font-ui text-[12px] uppercase tracking-widest text-irun-black font-bold">Quantité</span>
                  <div className="flex items-center gap-6 border border-irun-border px-4 py-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-irun-black hover:text-irun-terracotta transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-ui font-bold w-4 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-irun-black hover:text-irun-terracotta transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <button 
                  onClick={handleAddToCart}
                  className="btn-irun-primary w-full flex items-center justify-center gap-4 py-5"
                >
                  <ShoppingBag size={20} weight="light" />
                  Ajouter au panier
                </button>
                <button className="btn-irun-outline w-full py-5">
                  Voir tous les détails
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-irun-border">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} weight="light" className="text-irun-terracotta" />
                  <span className="text-[11px] font-ui uppercase tracking-widest text-irun-black-muted">Garantie Qualité</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={24} weight="light" className="text-irun-terracotta" />
                  <span className="text-[11px] font-ui uppercase tracking-widest text-irun-black-muted">Livraison 48H</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
