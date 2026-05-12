'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Waves, 
  Shower, 
  Wind, 
  Moon, 
  Sparkle,
  CheckCircle,
  HandWaving
} from '@phosphor-icons/react';

const guideSteps = [
  {
    title: "Démêler doucement",
    icon: <HandWaving size={32} weight="light" />,
    description: "Utilisez vos doigts ou un peigne à dents larges. Commencez toujours par les pointes et remontez progressivement.",
    tip: "Astuce : Humidifiez légèrement la mèche avec un spray hydratant ou un leave-in léger pour faciliter le démêlage."
  },
  {
    title: "Laver délicatement",
    icon: <Shower size={32} weight="light" />,
    description: "Lavez uniquement si nécessaire avec un shampoing doux sans sulfates. Massez doucement sans frotter excessivement.",
    tip: "Astuce : Rincez à l'eau tiède pour préserver l'éclat de la fibre."
  },
  {
    title: "Hydrater & Définir",
    icon: <Waves size={32} weight="light" />,
    description: "Appliquez un leave-in léger ou un lait capillaire hydratant. Pour des boucles rebondies, froissez doucement avec les doigts.",
    tip: "Produits conseillés : Spray hydratant, leave-in conditioner, crème légère pour boucles."
  },
  {
    title: "Séchage Naturel",
    icon: <Wind size={32} weight="light" />,
    description: "Tamponnez délicatement avec une serviette en microfibre. Laissez sécher à l'air libre autant que possible.",
    tip: "Important : Évitez l'exposition à une chaleur directe intense qui pourrait fragiliser la mèche."
  },
  {
    title: "Protection de Nuit",
    icon: <Moon size={32} weight="light" />,
    description: "Attachez vos cheveux avec un bonnet en satin ou un foulard en soie pour limiter les frottements.",
    tip: "Astuce : Faites des nattes lâches ou un chignon 'ananas' pour préserver la définition des boucles jusqu'au matin."
  }
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-regirl-off-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 md:px-12 bg-regirl-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-regirl-burgundy/10 blur-[120px] rounded-full -mr-20 -mt-20" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <img 
              src="/logo.png" 
              alt="IRUN Logo" 
              className="h-20 w-auto mx-auto object-contain logo-white opacity-80"
            />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-ui text-[12px] uppercase tracking-[0.4em] text-regirl-burgundy mb-6 block"
          >
            L'Art du Soin
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
          >
            Guide d'Entretien <br />
            <span className="italic text-regirl-cream">IRUN Premium</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto font-sans text-lg text-white/60 leading-relaxed"
          >
            Préservez la beauté, la souplesse et la longévité de vos mèches grâce à nos rituels de soin experts.
          </motion.p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-24">
            {guideSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start bg-white p-10 md:p-12 rounded-[40px] shadow-regirl-1 border border-regirl-border group hover:border-regirl-burgundy/30 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-regirl-cream flex items-center justify-center text-regirl-burgundy flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-regirl-burgundy text-xl opacity-30">0{index + 1}</span>
                    <h2 className="font-serif text-3xl text-regirl-charcoal">{step.title}</h2>
                  </div>
                  <p className="font-sans text-regirl-charcoal/70 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-regirl-off-white p-6 rounded-2xl border-l-4 border-regirl-burgundy">
                    <p className="font-ui text-[13px] text-regirl-charcoal italic flex items-center gap-3">
                      <Sparkle size={18} className="text-regirl-burgundy" weight="fill" />
                      {step.tip}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recommended Products */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 md:p-16 rounded-[50px] bg-regirl-burgundy text-white text-center overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10 space-y-8">
              <h3 className="font-serif text-4xl">Essentiels de Routine</h3>
              <p className="max-w-xl mx-auto text-white/80">
                Une belle chevelure commence par les bons outils. Voici les produits indispensables pour votre routine IRUN.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Spray Hydratant",
                  "Leave-in Conditioner",
                  "Crème pour Boucles"
                ].map((product, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                    <CheckCircle size={24} className="mx-auto mb-4 text-regirl-cream" weight="fill" />
                    <span className="font-ui text-[14px] uppercase tracking-widest font-bold">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
