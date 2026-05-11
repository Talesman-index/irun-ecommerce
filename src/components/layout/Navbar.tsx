'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, MagnifyingGlass, User, ShoppingBag, InstagramLogo, TiktokLogo } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Collection', href: '/collection' },
  { name: 'Guide', href: '/guide' },
  { name: 'Bestsellers', href: '/#bestsellers' },
  { name: 'À propos', href: '/about' },
];

import { useCart } from '@/context/CartContext';
import { CartDrawer } from '../ui/CartDrawer';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const showDarkNavbar = scrolled || !isHome;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 py-6 md:py-8',
          showDarkNavbar ? 'bg-regirl-charcoal shadow-regirl-2 border-b border-white/5' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-white uppercase z-[110]">
            irun<span className="text-regirl-burgundy">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-[13px] font-light uppercase tracking-widest text-white/80 hover:text-regirl-cream transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-regirl-burgundy transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 md:gap-10 z-[110]">
            <button className="hidden sm:block text-white/70 hover:text-white transition-colors">
              <MagnifyingGlass size={28} weight="light" />
            </button>
            <button className="hidden sm:block text-white/70 hover:text-white transition-colors">
              <User size={28} weight="light" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-white/70 hover:text-white transition-colors relative p-2"
            >
              <ShoppingBag size={38} weight="light" className="md:w-[32px]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-regirl-burgundy rounded-full flex items-center justify-center text-white font-ui text-[10px] font-bold shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden flex items-center justify-center w-14 h-14 text-white hover:text-regirl-burgundy transition-all active:scale-90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={44} weight="bold" /> : <List size={44} weight="bold" />}
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[190] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-regirl-charcoal z-[200] p-12 flex flex-col"
            >
              <div className="flex justify-end mb-20">
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <X size={28} weight="light" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-white hover:text-regirl-burgundy transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    <InstagramLogo size={24} weight="light" />
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    <TiktokLogo size={24} weight="light" />
                  </Link>
                </div>
                <button className="btn-regirl-primary w-full">
                  Boutique
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
