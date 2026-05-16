import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Bestsellers } from "@/components/sections/Bestsellers";
import { WhyIrun } from "@/components/sections/WhyIrun";
import { SplitTexture } from "@/components/sections/SplitTexture";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white selection:bg-irun-terracotta selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection imageUrl="/assets/images/IMG_6208.JPG" />
        
        {/* Brand Statement */}
        <section className="bg-white py-24 md:py-48 px-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-irun-nude/30 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal width="100%" direction="up" delay={0.2}>
              <span className="font-ui text-[10px] md:text-[12px] tracking-[0.4em] text-irun-terracotta uppercase block mb-6 md:mb-10">
                L'Art du Tissage
              </span>
            </Reveal>
            <Reveal width="100%" direction="up" delay={0.3}>
              <h2 className="font-serif text-[clamp(32px,6vw,84px)] text-irun-black leading-[1.2] md:leading-[1.05] mb-10 md:mb-12">
                &ldquo;L&apos;élégance est une <span className="italic font-accent text-irun-terracotta">promesse</span> que nous tissons avec chaque mèche.&rdquo;
              </h2>
            </Reveal>
            <Reveal width="100%" direction="up" delay={0.4}>
              <div className="w-12 md:w-16 h-[2px] bg-irun-terracotta mx-auto" />
            </Reveal>
          </div>
        </section>

        <Bestsellers />
        
        <WhyIrun />
        
        <SplitTexture textureImageUrl="/assets/images/IMG_6209.JPG" />

        {/* Collections Grid - Editorial Layout */}
        <section className="bg-white py-24 md:py-40 px-6">
          <div className="max-w-[1200px] mx-auto">
            <Reveal width="100%" direction="up">
              <header className="mb-16 md:mb-20">
                <span className="font-ui text-[12px] tracking-[0.3em] text-irun-terracotta uppercase block mb-4">
                  Univers
                </span>
                <h2 className="font-serif text-[32px] md:text-[42px] text-irun-black uppercase tracking-[0.05em]">Collections</h2>
              </header>
            </Reveal>
            
            <Reveal width="100%" direction="up" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 min-h-[600px] md:h-[800px]">
                {/* Main Collection */}
                <div className="md:col-span-7 h-full">
                  <Link href="/collection/mèches" className="relative group overflow-hidden cursor-pointer aspect-[4/5] md:aspect-auto h-full block">
                    <Image
                      src="/assets/images/IMG_6218.JPG"
                      alt="Les Mèches"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-irun-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                      <h3 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-wider mb-2 md:mb-4">Les Mèches</h3>
                      <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-700" />
                    </div>
                  </Link>
                </div>

                {/* Side Collections */}
                <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 h-full">
                  <div className="flex-grow h-full">
                    <Link href="/collection/accessoires" className="relative group overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto h-full min-h-[250px] block">
                      <Image
                        src="/assets/images/IMG_6217.JPG"
                        alt="Accessoires"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-irun-black/30 group-hover:bg-irun-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center border border-white/0 group-hover:border-white/20 transition-all m-4 md:m-6">
                        <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest">Accessoires</h3>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="flex-grow h-full">
                    <Link href="/collection/soins" className="relative group overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto h-full min-h-[250px] block">
                      <Image
                        src="/assets/images/IMG_6219.JPG"
                        alt="Soins"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-irun-black/30 group-hover:bg-irun-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center border border-white/0 group-hover:border-white/20 transition-all m-4 md:m-6">
                        <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest">Soins</h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Instagram Strip - High Contrast */}
        <section className="bg-irun-nude/30 py-24 md:py-32 px-6 overflow-hidden border-y border-irun-border">
          <Reveal width="100%" direction="up">
            <div className="mb-16 md:mb-20 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-irun-1 mb-6 md:mb-8">
                <InstagramLogo size={32} weight="light" className="text-irun-terracotta" />
              </div>
              <h3 className="font-ui text-[12px] md:text-[13px] uppercase tracking-[0.4em] text-irun-black font-bold">@irun_officiel</h3>
            </div>
          </Reveal>
          
          <div className="flex gap-6 md:gap-8 animate-marquee whitespace-nowrap will-change-transform">
            {[
              '/assets/images/IMG_6212.JPG',
              '/assets/images/IMG_6213.JPG',
              '/assets/images/IMG_6214.JPG',
              '/assets/images/IMG_6215.JPG',
              '/assets/images/IMG_6216.JPG',
              '/assets/images/IMG_6220.JPG',
              '/assets/images/product_image.jpeg',
              '/assets/images/about.jpg',
              '/assets/images/IMG_6212.JPG',
              '/assets/images/IMG_6213.JPG',
              '/assets/images/IMG_6214.JPG',
              '/assets/images/IMG_6215.JPG',
              '/assets/images/IMG_6216.JPG',
              '/assets/images/IMG_6220.JPG',
              '/assets/images/product_image.jpeg',
              '/assets/images/about.jpg',
            ].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-[240px] md:w-[450px] aspect-[4/5] overflow-hidden group border border-irun-border bg-white">
                <Image src={img} alt="Product highlight" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-irun-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
