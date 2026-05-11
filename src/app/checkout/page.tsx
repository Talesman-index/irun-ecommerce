'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  WhatsappLogo, 
  ShoppingBag, 
  User, 
  MapPin, 
  Phone,
  CheckCircle
} from '@phosphor-icons/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    note: ''
  });

  const [hasEditedNote, setHasEditedNote] = React.useState(false);

  React.useEffect(() => {
    if (!hasEditedNote && cart.length > 0) {
      const cartItemsText = cart.map(item => `- ${item.name} (${item.length}) x${item.quantity}`).join('\n');
      
      const message = `Bonjour IRUN ! 
    
Je souhaite passer une commande :

*CLIENT* : ${formData.name || 'Non renseigné'}
*WHATSAPP* : ${formData.phone || 'Non renseigné'}
*VILLE/QUARTIER* : ${formData.city || 'Non renseigné'}${formData.address ? `, ${formData.address}` : ''}

*MA COMMANDE* :
${cartItemsText}

*TOTAL* : ${formatPrice(cartTotal)}

Merci !`;
      setFormData(prev => ({ ...prev, note: message }));
    }
  }, [cart, hasEditedNote]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'note') setHasEditedNote(true);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const businessNumber = "2290166330109"; 
    
    let message = `*NOUVELLE COMMANDE IRUN*\n\n`;
    message += `*Client:* ${formData.name || 'Non renseigné'}\n`;
    message += `*Téléphone:* ${formData.phone || 'Non renseigné'}\n`;
    message += `*Ville:* ${formData.city || 'Non renseigné'}\n`;
    message += `*Adresse:* ${formData.address || 'Non renseignée'}\n\n`;
    
    message += `*DÉTAILS COMMANDE:*\n`;
    cart.forEach((item) => {
      message += `- ${item.name} (${item.length}) x${item.quantity}\n`;
    });
    
    message += `\n*TOTAL:* ${formatPrice(cartTotal)}\n`;
    
    if (formData.note && !formData.note.includes("Bonjour IRUN !")) {
      message += `\n*NOTE COMPLÉMENTAIRE:* \n${formData.note}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
  };

  const isFormValid = formData.name && formData.phone && formData.city && cart.length > 0;

  return (
    <main className="min-h-screen bg-regirl-off-white">
      <Navbar />
      
      <div className="pt-32 md:pt-48 pb-24 px-6 md:px-12 max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <Link 
              href="/"
              className="group flex items-center gap-3 font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal hover:text-regirl-burgundy transition-all mb-6"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Retour à la boutique
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl text-regirl-charcoal leading-tight">
              Finaliser ma commande
            </h1>
            <div className="w-20 h-1 bg-regirl-burgundy mt-6 rounded-full" />
          </div>
          <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-sm border border-regirl-border">
            <div className="w-12 h-12 rounded-full bg-regirl-cream flex items-center justify-center text-regirl-burgundy">
              <ShoppingBag size={24} weight="light" />
            </div>
            <div>
              <p className="font-ui text-[10px] uppercase tracking-widest text-regirl-charcoal-muted font-bold">Panier actuel</p>
              <p className="font-sans text-[15px] font-bold text-regirl-charcoal">{cartCount} articles</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16"
            >
              {/* Section 1: Identity */}
              <section className="space-y-10">
                <div className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full border border-regirl-burgundy/30 flex items-center justify-center font-serif text-xl text-regirl-burgundy bg-white shadow-sm">
                    01
                  </span>
                  <h2 className="font-serif text-3xl text-regirl-charcoal tracking-tight">Informations Personnelles</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pl-4 border-l-2 border-regirl-cream">
                  <div className="space-y-3">
                    <label className="font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal font-bold opacity-70">
                      Nom & Prénom *
                    </label>
                    <div className="relative group">
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Marie Kouassi"
                        className="w-full bg-transparent border-b-2 border-regirl-border focus:border-regirl-burgundy transition-all py-4 px-0 font-sans text-lg outline-none placeholder:text-regirl-charcoal/20"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal font-bold opacity-70">
                      Numéro WhatsApp *
                    </label>
                    <div className="relative group">
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: +229 01 00 00 00 00"
                        className="w-full bg-transparent border-b-2 border-regirl-border focus:border-regirl-burgundy transition-all py-4 px-0 font-sans text-lg outline-none placeholder:text-regirl-charcoal/20"
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Shipping */}
              <section className="space-y-10">
                <div className="flex items-center gap-6">
                  <span className="w-12 h-12 rounded-full border border-regirl-burgundy/30 flex items-center justify-center font-serif text-xl text-regirl-burgundy bg-white shadow-sm">
                    02
                  </span>
                  <h2 className="font-serif text-3xl text-regirl-charcoal tracking-tight">Adresse de Livraison</h2>
                </div>
                
                <div className="space-y-10 pl-4 border-l-2 border-regirl-cream">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal font-bold opacity-70">
                        Ville *
                      </label>
                      <input 
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Ex: Cotonou"
                        className="w-full bg-transparent border-b-2 border-regirl-border focus:border-regirl-burgundy transition-all py-4 px-0 font-sans text-lg outline-none placeholder:text-regirl-charcoal/20"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal font-bold opacity-70">
                        Quartier / Rue
                      </label>
                      <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Ex: Fidjrossè, Rue 123"
                        className="w-full bg-transparent border-b-2 border-regirl-border focus:border-regirl-burgundy transition-all py-4 px-0 font-sans text-lg outline-none placeholder:text-regirl-charcoal/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-ui text-[12px] uppercase tracking-[0.2em] text-regirl-charcoal font-bold opacity-70">
                      Note de commande (WhatsApp)
                    </label>
                    <textarea 
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white/50 border-2 border-regirl-border focus:border-regirl-burgundy transition-all p-6 rounded-2xl font-sans text-[15px] outline-none resize-none shadow-sm"
                    />
                  </div>
                </div>
              </section>
            </motion.div>
          </div>

          {/* Right Column: Order Summary (Sticky Sidebar) */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-regirl-charcoal text-white p-10 md:p-12 rounded-[40px] shadow-regirl-3 relative overflow-hidden"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-regirl-burgundy/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-10 flex items-center justify-between">
                  Votre Panier
                  <span className="font-sans text-[13px] font-light bg-white/10 px-4 py-1 rounded-full">{cartCount} items</span>
                </h3>
                
                <div className="space-y-8 mb-12 max-h-[350px] overflow-y-auto pr-4 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={item.id} className="group flex justify-between gap-6">
                      <div className="flex gap-5">
                        <div className="w-16 h-20 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-serif text-[17px] font-light">{item.name}</p>
                          <div className="flex items-center gap-3">
                            <span className="font-ui text-[10px] uppercase tracking-widest text-white/40">{item.length}</span>
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            <span className="font-ui text-[10px] uppercase tracking-widest text-white/40">Qté: {item.quantity}</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-serif text-[16px] text-regirl-cream">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 pt-10 border-t border-white/10 mb-12">
                  <div className="flex justify-between items-center text-white/50">
                    <span className="font-ui text-[12px] uppercase tracking-[0.2em]">Sous-total</span>
                    <span className="font-sans text-lg">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-white/50">
                    <span className="font-ui text-[12px] uppercase tracking-[0.2em]">Livraison</span>
                    <span className="font-ui text-[11px] uppercase font-bold text-regirl-burgundy bg-regirl-burgundy/10 px-3 py-1 rounded-md">Paiement à réception</span>
                  </div>
                  <div className="flex justify-between items-center pt-8">
                    <span className="font-serif text-2xl">Total</span>
                    <div className="text-right">
                      <span className="block font-serif text-4xl text-regirl-cream leading-none">{formatPrice(cartTotal)}</span>
                      <span className="font-ui text-[9px] uppercase tracking-widest text-white/30 mt-2 block">TVA incluse</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="w-full py-6 rounded-2xl font-ui text-[14px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl mb-6 bg-regirl-burgundy text-white hover:bg-regirl-burgundy-deep hover:-translate-y-1 active:scale-95"
                  >
                    Commander via WhatsApp
                    <WhatsappLogo size={24} weight="fill" className="text-white" />
                  </button>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center gap-2 text-center border border-white/5">
                      <CheckCircle size={20} className="text-regirl-burgundy" />
                      <span className="text-[10px] uppercase tracking-widest text-white/60">Paiement Sécurisé</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl flex flex-col items-center gap-2 text-center border border-white/5">
                      <CheckCircle size={20} className="text-regirl-burgundy" />
                      <span className="text-[10px] uppercase tracking-widest text-white/60">Livraison Express</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
