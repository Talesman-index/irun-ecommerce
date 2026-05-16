'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash, Minus, Plus, ArrowRight } from '@phosphor-icons/react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-irun-black/60 backdrop-blur-sm z-[1000]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[1001] shadow-irun-3 flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-irun-border flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <ShoppingBag size={24} weight="light" className="text-irun-terracotta" />
                <h2 className="font-serif text-2xl text-irun-black">Votre Panier</h2>
                <span className="font-ui text-[12px] bg-irun-nude px-2 py-1 rounded text-irun-terracotta font-bold">
                  {cartCount}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-irun-nude transition-colors text-irun-black"
              >
                <X size={24} weight="light" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-irun-nude/30 flex items-center justify-center mb-6">
                    <ShoppingBag size={40} weight="light" className="text-irun-terracotta/40" />
                  </div>
                  <h3 className="font-serif text-xl text-irun-black mb-4">Votre panier est vide</h3>
                  <p className="font-sans font-light text-irun-black-muted mb-8 max-w-[240px]">
                    Découvrez nos collections premium et trouvez votre style idéal.
                  </p>
                  <button 
                    onClick={onClose}
                    className="btn-irun-outline px-10"
                  >
                    Continuer mes achats
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-6 pb-8 border-b border-irun-border last:border-0">
                      <div className="relative w-24 h-32 flex-shrink-0 bg-irun-nude/20 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-sans font-light text-[15px] text-irun-black leading-tight pr-4">
                            {item.name}
                          </h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-irun-black-muted hover:text-irun-terracotta transition-colors"
                          >
                            <Trash size={18} weight="light" />
                          </button>
                        </div>
                        <p className="font-ui text-[11px] uppercase tracking-widest text-irun-black-muted mb-4">
                          Longeur: {item.length || '18"'}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-4 border border-irun-border px-3 py-1.5">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-irun-black hover:text-irun-terracotta transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-ui text-[13px] font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-irun-black hover:text-irun-terracotta transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-serif text-lg text-irun-terracotta">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-irun-nude/20 border-t border-irun-border">
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="font-ui text-[13px] uppercase tracking-widest text-irun-black-muted">Sous-total</span>
                    <span className="font-serif text-xl text-irun-black">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-ui text-[13px] uppercase tracking-widest text-irun-black-muted">Livraison</span>
                    <span className="font-ui text-[11px] uppercase tracking-widest text-irun-terracotta font-bold">Calculée à l'étape suivante</span>
                  </div>
                </div>
                <Link 
                  href="/checkout"
                  onClick={onClose}
                  className="btn-irun-primary w-full flex items-center justify-center gap-4 py-6 shadow-irun-2"
                >
                  Passer la commande
                  <ArrowRight size={20} weight="light" />
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full text-center mt-6 font-ui text-[11px] uppercase tracking-[0.2em] text-irun-black-muted hover:text-irun-black transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
