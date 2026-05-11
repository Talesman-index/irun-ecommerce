'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <header className="mb-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-space-mono text-[11px] tracking-[0.25em] text-irun-primary uppercase block mb-6"
            >
              À PROPOS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-cormorant text-6xl md:text-8xl text-irun-text leading-tight"
            >
              L&apos;excellence du <br /><span className="font-playfair italic font-medium">tissage</span>.
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/assets/images/IMG_6218.JPG"
                alt="About irun"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-playfair text-3xl text-irun-text"
              >
                Notre Histoire
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-dm-sans font-light text-lg text-irun-text-muted leading-relaxed"
              >
                irun est née d&apos;une passion pour la beauté authentique. Nous croyons que chaque femme mérite une chevelure qui reflète sa force et son élégance naturelle. 
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-dm-sans font-light text-lg text-irun-text-muted leading-relaxed"
              >
                Spécialisés dans les mèches tissées de qualité premium, nous sélectionnons méticuleusement chaque fibre pour garantir une texture soyeuse, une densité parfaite et une longévité exceptionnelle.
              </motion.p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
