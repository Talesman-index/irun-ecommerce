'use client';

import React from 'react';
import Link from 'next/link';
import { InstagramLogo, TiktokLogo, ArrowRight } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-regirl-charcoal pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="font-serif text-3xl tracking-[0.1em] text-white uppercase mb-8">
              irun<span className="text-regirl-burgundy">.</span>
            </Link>
            <p className="font-sans font-light text-[15px] text-white/60 leading-relaxed mb-10 max-w-[240px]">
              Sublimer votre beauté naturelle avec l&apos;excellence du tissage premium. Un héritage de confiance et de style.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-regirl-burgundy transition-all duration-300">
                <InstagramLogo size={20} weight="light" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-regirl-burgundy transition-all duration-300">
                <TiktokLogo size={20} weight="light" />
              </Link>
            </div>
          </div>

          {/* Collections Column */}
          <div className="flex flex-col">
            <h4 className="font-ui text-[12px] uppercase tracking-[0.3em] text-white mb-10 font-bold">
              Collections
            </h4>
            <div className="flex flex-col gap-4">
              {['Brésilienne', 'Péruvienne', 'Malaisienne', 'Bundled Deals', 'Nouveautés'].map((item) => (
                <Link key={item} href="#" className="font-sans font-light text-[14px] text-white/60 hover:text-regirl-cream transition-colors w-fit">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Column */}
          <div className="flex flex-col">
            <h4 className="font-ui text-[12px] uppercase tracking-[0.3em] text-white mb-10 font-bold">
              Aide & Support
            </h4>
              <div className="flex flex-col gap-4">
                <Link href="/guide" className="font-sans font-light text-[14px] text-white/60 hover:text-regirl-cream transition-colors w-fit">
                  Guide d&apos;entretien
                </Link>
                {['FAQ', 'Livraison', 'Retours', 'Contact'].map((item) => (
                  <Link key={item} href="#" className="font-sans font-light text-[14px] text-white/60 hover:text-regirl-cream transition-colors w-fit">
                    {item}
                  </Link>
                ))}
              </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col">
            <h4 className="font-serif text-[22px] text-white mb-6">
              Restez inspirée
            </h4>
            <p className="font-sans font-light text-[14px] text-white/60 mb-8 leading-relaxed">
              Inscrivez-vous pour recevoir nos offres exclusives et conseils de style.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Votre email"
                className="input-regirl-pill !bg-white/5 !border-white/10 !text-white focus:!bg-white focus:!text-regirl-charcoal"
              />
              <button className="absolute right-2 top-1.5 w-10 h-10 bg-regirl-burgundy text-white rounded-full flex items-center justify-center hover:bg-regirl-burgundy-deep transition-colors shadow-lg">
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-ui text-[11px] text-white/40 uppercase tracking-widest">
            © 2025 irun. Artisans du style.
          </p>
          <div className="flex items-center gap-10">
            <Link href="#" className="font-ui text-[11px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="font-ui text-[11px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
