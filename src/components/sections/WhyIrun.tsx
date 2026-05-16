'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Seal, Leaf, Package } from '@phosphor-icons/react';

const features = [
  {
    num: '01',
    icon: <Seal size={48} weight="light" />,
    title: 'Qualité certifiée',
    desc: 'Chaque mèche est rigoureusement sélectionnée pour sa texture, sa densité et sa durabilité.',
  },
  {
    num: '02',
    icon: <Leaf size={48} weight="light" />,
    title: '100% naturelle',
    desc: 'Nos mèches sont issues de cheveux naturels non traités, pour un rendu authentique et sain.',
  },
  {
    num: '03',
    icon: <Package size={48} weight="light" />,
    title: 'Livraison rapide',
    desc: 'Commandez aujourd\'hui, recevez sous 48–72h partout au Bénin et en Afrique de l\'Ouest.',
  },
];

export function WhyIrun() {
  return (
    <section className="bg-white py-24 md:py-40 px-6 border-b border-irun-border">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-24 text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-ui text-[12px] tracking-[0.3em] text-irun-terracotta uppercase block mb-6"
          >
            Notre Engagement
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[42px] md:text-[56px] text-irun-black leading-[1.1] mb-8"
          >
            Luxe, éthique & <span className="italic font-accent text-irun-terracotta">excellence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[17px] text-irun-black-muted leading-relaxed"
          >
            Nous croyons que chaque femme mérite une chevelure qui reflète sa force et son élégance intérieure.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col group"
            >
              <span className="font-ui text-[12px] text-irun-terracotta/40 font-bold mb-8 group-hover:text-irun-terracotta transition-colors duration-500">
                {feature.num}
              </span>
              <div className="text-irun-terracotta mb-10 transition-transform duration-500 group-hover:scale-110 origin-left">
                {feature.icon}
              </div>
              <h3 className="font-serif text-[24px] text-irun-black mb-6">
                {feature.title}
              </h3>
              <p className="font-sans font-light text-[15px] text-irun-black-muted leading-[1.7] max-w-[280px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
