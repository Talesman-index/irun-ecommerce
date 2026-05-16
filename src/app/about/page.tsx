'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, SealCheck, Leaf, Crown, Star, Sparkle } from '@phosphor-icons/react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-irun-terracotta selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1: Editorial Hero - Pinterest Aesthetic */}
        <section className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden vintage-grain">
          <Image
            src="/assets/images/about.jpg"
            alt="ÌRÙN Editorial"
            fill
            className="object-cover object-center brightness-[0.85] contrast-[0.9] sepia-[0.15] saturate-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-[#FFF3DE]/10 mix-blend-multiply z-[2]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[3]" />
          
          <div className="absolute bottom-16 left-6 md:bottom-24 md:left-[10%] z-10 max-w-5xl">
            <Reveal direction="up" delay={0.2}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/40" />
                <span className="font-ui text-[11px] tracking-[0.5em] text-white/80 uppercase">
                  Est. 2024
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <h1 className="font-serif text-[clamp(42px,9vw,130px)] text-white leading-[1.05] mb-8">
                L&apos;art de <br />
                <span className="italic font-accent text-irun-gold">se révéler.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.6}>
              <p className="font-sans font-light text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Plus qu&apos;une marque, ÌRÙN est une célébration de la beauté organique et de l&apos;excellence capillaire.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECTION 2: The Manifesto - White Space & Elegance */}
        <section className="py-32 md:py-56 px-6 bg-white relative">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <Reveal direction="up">
                <span className="font-ui text-[12px] tracking-[0.4em] text-irun-terracotta uppercase block mb-12">
                  Notre Manifeste
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h2 className="font-serif text-[38px] md:text-[64px] text-irun-black leading-[1.1] mb-12">
                  Nous croyons que votre chevelure est votre <span className="italic font-accent text-irun-terracotta">signature</span> la plus intime.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <p className="font-sans font-light text-xl md:text-2xl text-irun-black-muted leading-relaxed mb-10">
                  ÌRÙN est née d&apos;une frustration : la difficulté de trouver des mèches qui respectent la nature du cheveu et l&apos;identité de celles qui les portent.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.5}>
                <p className="font-sans font-light text-lg text-irun-black-muted/80 leading-relaxed max-w-2xl">
                  Notre mission est de démocratiser le luxe capillaire en proposant des pièces d&apos;exception, sourcées de manière éthique et travaillées à la main, pour un rendu indétectable et un confort absolu.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5 relative">
              <Reveal direction="left" delay={0.3}>
                <div className="aspect-[4/5] relative overflow-hidden border border-irun-border">
                  <Image
                    src="/assets/images/IMG_6219.JPG"
                    alt="ÌRÙN Texture"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-irun-nude flex items-center justify-center p-8 text-center hidden md:flex shadow-irun-1">
                <span className="font-ui text-[10px] tracking-widest text-irun-terracotta uppercase leading-tight font-bold">
                  Qualité <br />Supérieure <br />Certifiée
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Pillars - Interactive Grid */}
        <section className="py-24 md:py-48 px-6 bg-irun-nude/15 border-y border-irun-border">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-24">
              <Reveal direction="up">
                <h3 className="font-serif text-3xl md:text-5xl text-irun-black mb-6">Les piliers ÌRÙN</h3>
                <div className="w-16 h-[1px] bg-irun-terracotta mx-auto" />
              </Reveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {[
                {
                  icon: <SealCheck size={40} weight="light" />,
                  title: "Excellence",
                  text: "Chaque mèche est soumise à un protocole de sélection rigoureux pour garantir une densité homogène des pointes aux racines."
                },
                {
                  icon: <Leaf size={40} weight="light" />,
                  title: "Éthique",
                  text: "Nous collaborons directement avec des collecteurs locaux pour assurer une traçabilité totale et une rémunération juste."
                },
                {
                  icon: <Sparkle size={40} weight="light" />,
                  title: "Innovation",
                  text: "Nos bonnets et systèmes de pose sont conçus pour protéger vos propres cheveux tout en offrant un style impeccable."
                }
              ].map((value, idx) => (
                <Reveal key={idx} direction="up" delay={idx * 0.2}>
                  <div className="bg-white p-12 border border-irun-border group hover:border-irun-terracotta transition-colors duration-500 min-h-[350px] flex flex-col justify-center">
                    <div className="text-irun-terracotta mb-10 transition-transform duration-700 group-hover:rotate-[360deg]">
                      {value.icon}
                    </div>
                    <h4 className="font-serif text-2xl text-irun-black mb-6 uppercase tracking-wide">{value.title}</h4>
                    <p className="font-sans font-light text-[15px] text-irun-black-muted leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: The Process - Visual Storytelling */}
        <section className="bg-white">
          <div className="flex flex-col md:flex-row min-h-[80vh]">
            <div className="w-full md:w-1/2 relative h-[60vh] md:h-auto overflow-hidden">
              <Image
                src="/assets/images/IMG_6210.JPG"
                alt="Processus ÌRÙN"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-irun-black/10" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 lg:p-32">
              <Reveal direction="left">
                <span className="font-ui text-[12px] tracking-[0.4em] text-irun-terracotta uppercase block mb-8">
                  Savoir-faire
                </span>
                <h2 className="font-serif text-4xl md:text-6xl text-irun-black leading-[1.1] mb-12">
                  Du sourcing à votre <span className="italic font-accent text-irun-terracotta">couronne.</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="flex gap-8">
                    <span className="font-serif text-3xl text-irun-gold/40">01</span>
                    <div>
                      <h5 className="font-serif text-xl text-irun-black mb-2">Sélection Raw</h5>
                      <p className="font-sans font-light text-irun-black-muted leading-relaxed">Uniquement les cheveux les plus sains, jamais traités chimiquement.</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-serif text-3xl text-irun-gold/40">02</span>
                    <div>
                      <h5 className="font-serif text-xl text-irun-black mb-2">Tissage Double Trame</h5>
                      <p className="font-sans font-light text-irun-black-muted leading-relaxed">Pour une solidité maximale et zéro perte de cheveux au brossage.</p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-serif text-3xl text-irun-gold/40">03</span>
                    <div>
                      <h5 className="font-serif text-xl text-irun-black mb-2">Signature ÌRÙN</h5>
                      <p className="font-sans font-light text-irun-black-muted leading-relaxed">Chaque pièce est lavée et conditionnée avant l&apos;envoi.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 5: Trust & Community */}
        <section className="py-32 px-6 bg-white border-t border-irun-border">
          <div className="max-w-[800px] mx-auto text-center">
            <Reveal direction="up">
              <div className="flex justify-center gap-2 mb-10">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} weight="fill" className="text-irun-gold" />)}
              </div>
              <p className="font-serif text-2xl md:text-3xl text-irun-black italic mb-12 leading-relaxed">
                &ldquo;ÌRÙN a totalement changé ma perception des extensions. La texture est si proche de mes propres cheveux que personne ne devine le secret.&rdquo;
              </p>
              <span className="font-ui text-[12px] tracking-widest text-irun-black uppercase font-bold">— Sarah K., Cliente Signature</span>
            </Reveal>
          </div>
        </section>

        {/* SECTION 6: Final CTA - Luminous & Bold */}
        <section className="py-24 md:py-48 px-6 bg-irun-nude/30 text-center relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-white rounded-full blur-[100px] -z-10" />
          
          <Reveal direction="up">
            <h3 className="font-serif text-4xl md:text-7xl text-irun-black mb-12 uppercase tracking-tight">
              Portez votre <br />propre <span className="italic font-accent text-irun-terracotta">excellence</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/collection" className="btn-irun-primary h-14 px-12 inline-flex items-center gap-4 group">
                Explorer la Collection
                <ArrowRight size={20} weight="light" className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link href="/contact" className="btn-irun-outline h-14 px-12 inline-flex items-center gap-4">
                Conseil personnalisé
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
