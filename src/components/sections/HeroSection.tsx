'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

interface HeroSectionProps {
  imageUrl: string;
}

export function HeroSection({ imageUrl }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image with optimized CSS Zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt="IRUN Hero"
          fill
          className="object-cover object-center brightness-[0.85] animate-slow-zoom will-change-transform"
          priority
        />
      </div>
      
      {/* Overlay - subtle gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-regirl-charcoal/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-6 md:left-[8%] md:px-0 z-10 max-w-4xl text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-ui text-[10px] md:text-[12px] tracking-[0.3em] text-white uppercase block mb-4 md:mb-6 drop-shadow-md"
        >
          Luxe & Authenticité
        </motion.span>

        <h1 className="font-serif text-[clamp(40px,10vw,110px)] text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-10 drop-shadow-lg">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="block"
          >
            L&apos;excellence du
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="block italic font-accent"
          >
            tissage premium.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-sans font-light text-[15px] md:text-[18px] text-white/90 max-w-lg mb-10 md:mb-12 drop-shadow-md mx-auto md:mx-0"
        >
          Sublimez votre beauté naturelle avec des mèches d&apos;exception sélectionnées pour vous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <button className="btn-regirl-primary flex items-center gap-4 group h-12 md:h-14 px-10">
            Découvrir la collection
            <ArrowRight size={20} weight="light" className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 flex items-center gap-4 text-white/60 font-ui text-[10px] tracking-[0.2em] uppercase">
        <motion.div
          animate={{ height: [40, 0, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-regirl-burgundy origin-bottom"
        />
        <span>Scroll</span>
      </div>
    </section>
  );
}
