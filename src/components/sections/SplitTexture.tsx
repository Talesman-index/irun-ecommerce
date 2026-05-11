'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

interface SplitTextureProps {
  textureImageUrl: string;
}

export function SplitTexture({ textureImageUrl }: SplitTextureProps) {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row bg-white">
      {/* Left: Image with Zoom/Parallax effect */}
      <div className="w-full md:w-[55%] h-[60vh] md:h-auto relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full h-full"
        >
          <Image
            src={textureImageUrl}
            alt="Texture Detail"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-[45%] bg-regirl-cream p-12 md:p-[8%] flex flex-col justify-center relative overflow-hidden">
        {/* Subtle Background Pattern or Accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-regirl-burgundy/5 rounded-full blur-3xl" />
        
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-ui text-[12px] tracking-[0.3em] text-regirl-burgundy uppercase block mb-6 relative z-10"
        >
          Texture & Qualité
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-[clamp(40px,4.5vw,64px)] text-regirl-charcoal leading-[1.05] mb-8 relative z-10"
        >
          Sentir la différence<br />
          <span className="italic font-accent">avant de la voir.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans font-light text-[17px] text-regirl-charcoal-muted leading-[1.7] max-w-xl mb-12 relative z-10"
        >
          Nos mèches ont cette particularité rare : une texture qui parle avant même d&apos;être portée.
          Chaque fil est souple, dense, et réagit à la lumière comme un vrai cheveu naturel.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-[2px] bg-regirl-burgundy mb-12 origin-left relative z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative z-10"
        >
          <button className="btn-regirl-ghost group">
            Explorer les détails
            <ArrowRight size={18} weight="light" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
