import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Space_Mono, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "irun | Luxe & Authenticité",
  description: "Des mèches premium pour sublimer votre beauté naturelle. L'excellence du tissage inspirée par l'héritage.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  }
};

import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${spaceMono.variable} ${jost.variable} antialiased`}>
      <body className="bg-white text-regirl-charcoal font-inter min-h-screen selection:bg-regirl-burgundy selection:text-white">
        <ToastProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
