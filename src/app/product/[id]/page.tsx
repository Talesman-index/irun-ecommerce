'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Star, ShoppingBag, Minus, Plus, 
  ShieldCheck, Truck, ArrowLeft, 
  ShareNetwork, Heart 
} from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { formatPrice, cn } from '@/lib/utils';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Produit non trouvé</h1>
          <button onClick={() => router.push('/')} className="btn-irun-outline">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${product.name} ajouté au panier`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb / Back button */}
      <div className="pt-8 md:pt-12 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto">
        <nav className="flex items-center gap-3 font-ui text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-irun-black/40">
          <Link href="/" className="hover:text-irun-terracotta transition-colors">Boutique</Link>
          <span className="opacity-20">/</span>
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-irun-black hover:text-irun-terracotta transition-all"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span className="border-b border-transparent group-hover:border-irun-terracotta pb-0.5">Retour</span>
          </button>
        </nav>
      </div>

      <section className="px-4 md:px-12 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-[4/5] bg-irun-nude/20 overflow-hidden rounded-[30px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isNew && (
                <div className="absolute top-6 left-6 bg-irun-terracotta text-white font-ui text-[12px] uppercase font-bold px-4 py-2 rounded-full shadow-lg tracking-widest">
                  Nouveau
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-irun-terracotta font-bold mb-4">
                {product.category || 'Collection Premium'}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-irun-black mb-6 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} weight={i < Math.floor(product.rating) ? "fill" : "light"} className="text-irun-terracotta" />
                  ))}
                  <span className="font-sans text-[14px] text-irun-black ml-2 font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="w-[1px] h-4 bg-irun-border" />
                <span className="font-sans text-[14px] text-irun-black-muted underline underline-offset-4 cursor-pointer">
                  {product.reviewCount} avis clients
                </span>
              </div>

              <p className="font-serif text-3xl text-irun-black font-medium mb-8">
                {formatPrice(product.price)}
              </p>

              <div className="font-sans font-light text-irun-black-muted text-[16px] leading-relaxed mb-10 max-w-xl">
                {product.description || "Découvrez l'excellence de nos mèches premium, sélectionnées avec soin pour leur brillance, leur souplesse et leur longévité exceptionnelle. Parfait pour sublimer votre style au quotidien."}
              </div>
            </div>

            {/* Selection */}
            <div className="space-y-8 mb-12">
              <div>
                <span className="font-ui text-[11px] uppercase tracking-widest text-irun-black font-bold block mb-4">
                  Longueur sélectionnée : <span className="text-irun-terracotta ml-2">{product.length}</span>
                </span>
                <div className="flex gap-3">
                  {['14"', '16"', '18"', '20"', '22"', '24"'].map((l) => (
                    <button 
                      key={l}
                      className={cn(
                        "w-14 h-14 rounded-full border text-[13px] font-ui transition-all duration-300",
                        l === product.length 
                          ? "bg-irun-black text-white border-irun-black" 
                          : "border-irun-border text-irun-black hover:border-irun-terracotta"
                      )}
                    >
                      {l.replace('"', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center border border-irun-border rounded-full px-6 py-4 bg-white">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-irun-black hover:text-irun-terracotta transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-ui text-lg font-bold w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-irun-black hover:text-irun-terracotta transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="btn-irun-primary flex-grow md:flex-grow-0 md:px-16 py-5 flex items-center justify-center gap-4 text-[13px] shadow-irun-2"
                >
                  Ajouter au panier
                  <ShoppingBag size={22} weight="light" />
                </button>

                <button className="w-16 h-16 rounded-full border border-irun-border flex items-center justify-center text-irun-black hover:bg-irun-nude transition-colors">
                  <Heart size={24} weight="light" />
                </button>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-8 border-t border-irun-border pt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-irun-nude flex items-center justify-center text-irun-terracotta flex-shrink-0">
                  <ShieldCheck size={24} weight="light" />
                </div>
                <div>
                  <h4 className="font-ui text-[12px] uppercase font-bold text-irun-black mb-1">Qualité Garantie</h4>
                  <p className="font-sans text-[13px] text-irun-black-muted">Cheveux 100% naturels premium.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-irun-nude flex items-center justify-center text-irun-terracotta flex-shrink-0">
                  <Truck size={24} weight="light" />
                </div>
                <div>
                  <h4 className="font-ui text-[12px] uppercase font-bold text-irun-black mb-1">Livraison Express</h4>
                  <p className="font-sans text-[13px] text-irun-black-muted">Partout dans le monde en 48/72h.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
