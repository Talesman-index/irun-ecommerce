'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <header className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-space-mono text-[11px] tracking-[0.25em] text-irun-primary uppercase block mb-6"
            >
              CONTACT
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-cormorant text-6xl md:text-8xl text-irun-text leading-tight"
            >
              Parlons de votre <br /><span className="font-playfair italic font-medium">éclat</span>.
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-irun-surface flex items-center justify-center text-irun-primary">
                  <Envelope size={24} weight="light" />
                </div>
                <div>
                  <h3 className="font-space-mono text-[11px] text-irun-primary uppercase tracking-widest mb-2">Email</h3>
                  <p className="font-playfair text-2xl text-irun-text">contact@irun.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-irun-surface flex items-center justify-center text-irun-primary">
                  <Phone size={24} weight="light" />
                </div>
                <div>
                  <h3 className="font-space-mono text-[11px] text-irun-primary uppercase tracking-widest mb-2">Téléphone</h3>
                  <p className="font-playfair text-2xl text-irun-text">+229 00 00 00 00</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-irun-surface flex items-center justify-center text-irun-primary">
                  <MapPin size={24} weight="light" />
                </div>
                <div>
                  <h3 className="font-space-mono text-[11px] text-irun-primary uppercase tracking-widest mb-2">Studio</h3>
                  <p className="font-playfair text-2xl text-irun-text">Cotonou, Bénin</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-irun-surface p-8 md:p-12"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-space-mono text-[10px] text-irun-text-muted uppercase tracking-widest">Nom complet</label>
                    <input type="text" className="input" placeholder="Aïcha Traoré" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-space-mono text-[10px] text-irun-text-muted uppercase tracking-widest">Email</label>
                    <input type="email" className="input" placeholder="aicha@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-space-mono text-[10px] text-irun-text-muted uppercase tracking-widest">Sujet</label>
                  <input type="text" className="input" placeholder="Demande de conseil" />
                </div>
                <div className="space-y-2">
                  <label className="font-space-mono text-[10px] text-irun-text-muted uppercase tracking-widest">Message</label>
                  <textarea className="input h-32 py-4 resize-none" placeholder="Comment pouvons-nous vous aider ?" />
                </div>
                <button type="submit" className="btn-primary w-full h-14">
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
