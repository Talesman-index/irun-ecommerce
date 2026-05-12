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
      
      <div className="pt-8 md:pt-12 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <nav className="flex items-center gap-3 font-ui text-[10px] uppercase tracking-[0.3em] text-regirl-charcoal/40 mb-6">
            <Link href="/" className="hover:text-regirl-burgundy transition-colors">Boutique</Link>
            <span className="opacity-20">/</span>
            <span className="text-regirl-burgundy/60">Paiement</span>
          </nav>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl text-regirl-charcoal leading-tight">
                Finaliser ma commande
              </h1>
              <div className="w-12 h-0.5 bg-regirl-burgundy mt-4 rounded-full" />
            </div>
            
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-regirl-border shadow-sm self-start">
              <ShoppingBag size={18} className="text-regirl-burgundy" />
              <span className="font-ui text-[11px] uppercase tracking-wider font-bold text-regirl-charcoal">
                {cartCount} articles
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {/* Section 1: Identity */}
              <section className="bg-white p-8 md:p-10 rounded-[32px] border border-regirl-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-serif text-xl text-regirl-burgundy bg-regirl-cream w-10 h-10 rounded-full flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-serif text-2xl text-regirl-charcoal tracking-tight">Coordonnées</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-regirl-charcoal/60 font-bold">
                      Nom & Prénom *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Marie Kouassi"
                      className="w-full bg-regirl-off-white/50 border-b border-regirl-border focus:border-regirl-burgundy transition-all py-3 px-0 font-sans text-base outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-regirl-charcoal/60 font-bold">
                      WhatsApp *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+229 01 00 00 00"
                      className="w-full bg-regirl-off-white/50 border-b border-regirl-border focus:border-regirl-burgundy transition-all py-3 px-0 font-sans text-base outline-none"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Section 2: Shipping */}
              <section className="bg-white p-8 md:p-10 rounded-[32px] border border-regirl-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-serif text-xl text-regirl-burgundy bg-regirl-cream w-10 h-10 rounded-full flex items-center justify-center">
                    2
                  </span>
                  <h2 className="font-serif text-2xl text-regirl-charcoal tracking-tight">Livraison</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-regirl-charcoal/60 font-bold">
                        Ville *
                      </label>
                      <input 
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Cotonou"
                        className="w-full bg-regirl-off-white/50 border-b border-regirl-border focus:border-regirl-burgundy transition-all py-3 px-0 font-sans text-base outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-regirl-charcoal/60 font-bold">
                        Quartier
                      </label>
                      <input 
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Fidjrossè"
                        className="w-full bg-regirl-off-white/50 border-b border-regirl-border focus:border-regirl-burgundy transition-all py-3 px-0 font-sans text-base outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-ui text-[10px] uppercase tracking-[0.2em] text-regirl-charcoal/60 font-bold">
                      Message (Optionnel)
                    </label>
                    <textarea 
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-regirl-off-white/30 border border-regirl-border focus:border-regirl-burgundy transition-all p-4 rounded-xl font-sans text-sm outline-none resize-none"
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
                    className="w-full bg-regirl-burgundy text-white py-4 md:py-5 rounded-full font-ui text-[10px] md:text-[12px] uppercase tracking-widest font-bold hover:bg-regirl-burgundy/90 transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 group"
                  >
                    <WhatsappLogo size={22} weight="fill" className="transition-transform group-hover:scale-110" />
                    <span>Commander via WhatsApp</span>
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
