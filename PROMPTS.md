# PROMPTS DE DÉVELOPPEMENT — IRUN
*v2.0 — Basé sur l'architecture Regirl × Identité irun*
*Compatible : Cursor · v0 · Framer AI · Claude direct*

---

## PROMPT 0 — CONTEXTE GLOBAL
> Colle ce bloc en préambule de chaque prompt ci-dessous.

```
Tu travailles sur le site "irun", marque premium de mèche tissée pour femmes africaines modernes.

RÉFÉRENCE STRUCTURELLE : regirlworld.ng (même architecture UX — nav, grid produits,
page produit, spacing). L'esthétique est inversée : dark mode éditorial au lieu de blanc/bordeaux.

DESIGN SYSTEM IRUN :

Couleurs :
  --color-bg:        #0D0B09  (fond de base — TOUJOURS sombre)
  --color-surface:   #1A1612  (cards, sections alternées)
  --color-primary:   #C9A84C  (or cuivré — accent principal, CTA)
  --color-text:      #F5EFE6  (blanc crème — texte principal)
  --color-text-muted:#A89880  (taupe — labels, secondaire)
  --color-border:    #2E2520  (bordures subtiles)

Typographie :
  Hero H1   → Cormorant Garamond Italic 700 — clamp(64px, 9vw, 130px)
  H2–H3     → Playfair Display 500
  Body      → DM Sans 300–400
  UI/CTA    → Space Mono 400 uppercase + letter-spacing
  Logo      → Cinzel 400

Icônes : Phosphor Icons uniquement, style Light, strokeWidth 1.5 — AUCUN emoji

Boutons : outline or (#C9A84C) → filled or au hover — border-radius: 0

Règles absolues :
  - Zéro fond blanc ou gris clair
  - Zéro emoji
  - Zéro polices system (pas d'Inter, Arial, Roboto)
  - Zéro border-radius > 0px sur les composants
  - Zéro select natif (toggle buttons Space Mono pour les longueurs)
```

---

## PROMPT 1 — NAVIGATION

```
[CONTEXTE GLOBAL]

Crée un composant Navigation React pour irun.

COMPORTEMENT :
- Sticky top-0, z-index 100
- Transparent quand scrollY = 0
- Au scroll : background #0D0B09 + backdrop-filter blur(12px), transition 300ms ease

STRUCTURE DESKTOP :
- Gauche : Logo texte "irun" — Cinzel 400, letter-spacing 0.3em, color #C9A84C
- Centre : liens ["Collection", "Bestsellers", "À propos", "Contact"]
  Font : Space Mono 11px uppercase letter-spacing 0.15em, color #A89880
  Hover : color #F5EFE6 + underline 1px #C9A84C, animation slide L→R (::after transform)
  Actif : color #C9A84C
- Droite : 3 icônes Phosphor Light 20px — MagnifyingGlass, User, ShoppingBag
  Color : #A89880, hover : #C9A84C, transition 200ms
  ShoppingBag : badge count (cercle #C9A84C 16px, chiffre #0D0B09 Space Mono 9px)

MOBILE (< 768px) :
- Logo gauche + hamburger List 24px droite
- Drawer full-screen depuis droite : background #0D0B09, z-index 200
  Liens : Playfair Display 500 32px, color #F5EFE6, empilés gap 32px
  Icônes réseaux en bas du drawer (InstagramLogo, TiktokLogo Phosphor 20px #A89880)
  Fermeture : X Phosphor 24px en haut droite
  Animation : translateX(100%)→0, 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
  Overlay fond : rgba(0,0,0,0.6) derrière le drawer

TECHNO : React + Framer Motion + @phosphor-icons/react + Tailwind CSS
```

---

## PROMPT 2 — HERO SECTION

```
[CONTEXTE GLOBAL]

Crée un composant HeroSection React plein écran pour irun.

LAYOUT :
- height: 100vh, width: 100%, overflow: hidden, position: relative
- Image de fond (prop : imageUrl) — object-cover, position: center
- Overlay : linear-gradient(160deg, rgba(13,11,9,0.25) 0%, rgba(13,11,9,0.7) 100%)
- Contenu : position absolute, bottom 12%, left 8% (desktop), bottom 10%, left 6% (mobile)

CONTENU :
1. Eyebrow label
   "NOUVELLE COLLECTION 2025" — Space Mono 11px, tracking 0.25em, color #C9A84C, uppercase

2. Titre H1
   "La mèche qui\nte définit." — Cormorant Garamond Italic 700
   Taille : clamp(64px, 9vw, 130px), color #F5EFE6, line-height 0.92

3. Sous-titre
   "Tissée pour durer. Portée pour rayonner."
   DM Sans 300 17px, color #A89880, margin-top 20px

4. CTA bouton
   "Découvrir la collection" + ArrowRight Phosphor 16px à droite
   Style .btn-primary : border 1px solid #C9A84C, color #C9A84C, Space Mono 12px uppercase
   Hover : background #C9A84C, color #0D0B09, transition 350ms
   Height 44px, margin-top 36px

5. Scroll indicator
   Ligne verticale 60px, width 1px, background #C9A84C, opacity 0.6
   Position : absolute, bottom 32px, left 50%
   Animation : scaleY 1→0.4→1, durée 2s, ease-in-out, infinite

ANIMATIONS (Framer Motion) :
- eyebrow : opacity 0→1, y 16→0, delay 0.3s, duration 0.5s
- Titre ligne 1 : clipPath "inset(0 0 100% 0)"→"inset(0 0 0% 0)", delay 0.5s, 0.7s
- Titre ligne 2 : même, delay 0.7s
- Sous-titre : opacity 0→1, y 12→0, delay 0.9s
- CTA : opacity 0→1, y 12→0, delay 1.1s

MOBILE : contenu centré, titre clamp(44px, 11vw, 64px)
```

---

## PROMPT 3 — PRODUCT CARD

```
[CONTEXTE GLOBAL]

Crée un composant ProductCard React pour irun.

PROPS :
  image: string          — URL image produit
  name: string           — ex: "Mèche Brésilienne Body Wave"
  length: string         — ex: '18"'
  price: number          — en FCFA, ex: 12500
  rating: number         — ex: 4.9
  reviewCount: number    — ex: 127
  isNew?: boolean        — affiche badge "NOUVEAU"

STRUCTURE :

1. Image wrapper
   - aspect-ratio: 3/4, overflow: hidden, position: relative, background: #1A1612
   - img : width 100%, height 100%, object-fit: cover
     Hover : transform scale(1.04), transition 500ms ease
   - Badge longueur (bottom-left, 8px offset)
     Fond: rgba(0,0,0,0.65), color: #C9A84C, font: Space Mono 11px, padding: 4px 8px
   - Badge "NOUVEAU" si isNew (top-right, 8px offset)
     Fond: #C9A84C, color: #0D0B09, font: Space Mono 10px uppercase, padding: 4px 8px
   - CTA hover overlay (position absolute, bottom 0, width 100%, height 44px)
     Background: #C9A84C, color: #0D0B09, font: Space Mono 11px uppercase
     Contenu: "Ajouter au panier" + ShoppingBag Phosphor 14px
     Animation: opacity 0→1 + translateY 8px→0, trigger: card hover, 300ms ease

2. Info block
   - Padding 16px, background: #1A1612
   - Nom : DM Sans 400 15px, color: #F5EFE6, margin-bottom 6px
   - Rating ligne :
     Star (fill) Phosphor 12px color #C9A84C + chiffre Space Mono 11px #A89880
     + "(127 avis)" DM Sans 12px #A89880, gap 6px, align center
   - Prix : Playfair Display 500 18px, color: #C9A84C
     Format: "12 500 FCFA" (séparateur milliers = espace)

HOVER card global : box-shadow rgba(201,168,76,0.08) 0px 2px 12px, transform scale(1.02)
Border-radius: 0 — aucun arrondi
Transition hover : 300ms ease
```

---

## PROMPT 4 — GRILLE BESTSELLERS

```
[CONTEXTE GLOBAL]

Crée une section Bestsellers React pour irun.
Utilise le composant ProductCard existant.

LAYOUT :
- Background: #0D0B09
- Padding: 80px 0 (desktop), 48px 0 (mobile)
- Max-width container: 1280px, centré

HEADER DE SECTION :
- Eyebrow : "BESTSELLERS" Space Mono 11px tracking 0.25em #C9A84C uppercase, centré
- Titre : "Nos meilleures ventes" Playfair Display 500 clamp(32px,4vw,48px) #F5EFE6, centré
  Italic léger sur "meilleures" — Cormorant Garamond Italic
- Margin-bottom header→grille : 52px

GRILLE :
- CSS Grid : repeat(4, 1fr) desktop / repeat(2, 1fr) tablet / 1fr mobile
- Gap : 24px desktop, 12px mobile
- Affiche 8 produits max (2 rangées de 4)

FOOTER DE SECTION :
- Bouton centré "Voir toute la collection" + ArrowRight Phosphor
  Style: .btn-ghost, margin-top 48px

ANIMATION SCROLL (Framer Motion) :
- Header : fade-up, stagger 150ms entre eyebrow/titre
- Cards : fade-up stagger 100ms entre chaque card
  Initial: opacity 0, y: 32px
  Viewport: once: true, amount: 0.2
```

---

## PROMPT 5 — SECTION "POURQUOI IRUN"

```
[CONTEXTE GLOBAL]

Crée la section features "Pourquoi irun" React (3 colonnes).

LAYOUT :
- Background: #1A1612
- Padding: 80px 0 (desktop), 48px 0 (mobile)
- Max-width 1280px, centré

HEADER :
- Eyebrow "NOTRE PROMESSE" — Space Mono 11px #C9A84C uppercase tracking 0.25em, centré
- Titre "Ce qui nous distingue" — Playfair Display 500 40px #F5EFE6, centré
- Sous-titre "Chaque mèche est une promesse." — DM Sans 300 16px #A89880, centré

GRID 3 COLONNES (gap 40px desktop, stack 1 col mobile) :
Pas de card background — éléments libres sur le fond de section.

Chaque feature :
- Numéro : "01" / "02" / "03" — Space Mono 11px #C9A84C opacity 0.5, margin-bottom 16px
- Icône Phosphor Light 48px #C9A84C, margin-bottom 20px
- Titre feature : Playfair Display 500 20px #F5EFE6, margin-bottom 12px
- Description : DM Sans 300 15px #A89880, line-height 1.75, max 3 lignes

CONTENU FEATURES :
  01 | Seal icon | "Qualité certifiée"
     | "Chaque mèche est rigoureusement sélectionnée pour sa texture, sa densité et sa durabilité."
  02 | Leaf icon | "100% naturelle"
     | "Nos mèches sont issues de cheveux naturels non traités, pour un rendu authentique et sain."
  03 | Package icon | "Livraison rapide"
     | "Commandez aujourd'hui, recevez sous 48–72h partout au Bénin et en Afrique de l'Ouest."

ANIMATION : fade-up stagger 200ms entre les 3 features, trigger au scroll
```

---

## PROMPT 6 — SPLIT SCREEN TEXTURE

```
[CONTEXTE GLOBAL]

Crée une section éditoriale split-screen React pour irun.

LAYOUT :
- width: 100%, min-height: 80vh, display: flex
- Aucun padding global — les blocs s'étendent bord à bord
- Mobile : flex-direction column

GAUCHE (55% desktop / 100% mobile height 50vh) :
- Image plein bloc, object-cover, aucun border-radius
- Prop : textureImageUrl

DROITE (45% desktop / 100% mobile) :
- Background: #1A1612
- Padding: 80px 8% (desktop), 48px 6% (mobile)
- Contenu aligné verticalement au centre (flexbox column justify-center)

CONTENU DROITE :
1. Eyebrow "TEXTURE & QUALITÉ" — Space Mono 10px tracking 0.3em #C9A84C uppercase
2. Titre "Sentir la différence\navant même de la voir."
   Cormorant Garamond Italic 700, clamp(36px, 4vw, 58px), #F5EFE6, line-height 1.05
3. Corps — DM Sans 300 16px #A89880 line-height 1.8, max 4 lignes :
   "Nos mèches ont cette particularité rare : une texture qui parle avant même d'être portée.
   Chaque fil est souple, dense, et réagit à la lumière comme un vrai cheveu naturel."
4. Séparateur : div width 40px, height 1px, background #C9A84C, margin: 32px 0
5. Lien "Voir les collections" + ArrowRight Phosphor 14px
   Style: Space Mono 12px #C9A84C uppercase, hover: underline, gap 8px

ANIMATION : côté image slide-in depuis gauche, côté texte fade-up, trigger scroll
```

---

## PROMPT 7 — PAGE PRODUIT

```
[CONTEXTE GLOBAL]

Crée le layout page produit React pour irun.

STRUCTURE DESKTOP (2 colonnes) :
- Colonne gauche 55% : galerie
- Colonne droite 45% : infos (position sticky, top 80px)
- Gap : 48px

GALERIE GAUCHE :
- Flex row : thumbnails verticaux 80px×106px à gauche + image principale droite
- Thumbnails : gap 8px, border 1px transparent → border 1px #C9A84C (actif)
  Transition 200ms
- Image principale : aspect-ratio 3/4, object-cover, border-radius 0
  Swap avec fade opacity 200ms au click thumbnail
- Mobile : carrousel swipeable (image seule), dots navigation Space Mono en bas

INFOS DROITE :
1. Breadcrumb — "Collection / Brésilienne" Space Mono 11px #A89880
   Séparateur " / " même couleur

2. Nom produit — Playfair Display 600 28px #F5EFE6

3. Rating inline — Star filled 12px #C9A84C + "4.9" Space Mono 11px + "(127 avis)" DM Sans 12px #A89880

4. Prix — Playfair Display 500 24px #C9A84C
   Format "12 500 FCFA"

5. Séparateur — 1px solid #2E2520, width 100%, margin: 24px 0

6. Label longueur — "CHOISIR LA LONGUEUR" Space Mono 11px #A89880 uppercase tracking 0.15em
   Grille toggle buttons : 10" 12" 14" 16" 18" 20" 22" 24"
   Style actif : background #C9A84C, color #0D0B09
   Style inactif : border 1px #2E2520, color #F5EFE6
   Font : Space Mono 12px, height 40px, padding 0 14px, border-radius 0
   Hover inactif : border-color #C9A84C, color #C9A84C

7. CTA principal — pleine largeur
   "Ajouter au panier" + ShoppingBag Phosphor 16px
   Background #C9A84C, color #0D0B09, Space Mono 13px uppercase
   Height 52px, border-radius 0
   Hover : background #B8942E, transition 300ms

8. Accordéon (4 items) :
   Trigger : DM Sans 500 15px #F5EFE6 + Plus/Minus Phosphor 16px #A89880 (droite)
   Séparateur : 1px #2E2520 entre chaque item
   Contenu : DM Sans 300 14px #A89880, line-height 1.7, padding 16px 0
   Items : "Description", "Composition", "Entretien & conseils", "Livraison & retours"
   Animation : height 0→auto, opacity 0→1, 300ms ease

MOBILE : stack vertical, galerie en haut, infos en bas, CTA sticky bottom bar
```

---

## PROMPT 8 — FOOTER

```
[CONTEXTE GLOBAL]

Crée le Footer React pour irun.

STRUCTURE :
- Background: #0D0B09
- Border-top: 1px solid #2E2520
- Padding: 64px 0 32px (desktop), 48px 0 24px (mobile)
- Max-width 1280px, centré

GRID 4 COLONNES (desktop) — stack 2 col mobile :

Colonne 1 — Marque :
- Logo "irun" Cinzel 400 tracking 0.3em #C9A84C, font-size 20px
- Tagline DM Sans 300 14px #A89880 margin-top 12px, max-width 200px
- Réseaux (margin-top 24px) : InstagramLogo + TiktokLogo Phosphor 20px #A89880
  Hover : #C9A84C, transition 200ms, gap 16px

Colonne 2 — Collections :
- Titre "Collections" Space Mono 11px uppercase tracking 0.2em #C9A84C, margin-bottom 20px
- Liens : "Brésilienne", "Péruvienne", "Malaisienne", "Bundled Deals", "Nouveautés"
  DM Sans 300 14px #A89880, hover: #F5EFE6, transition 200ms
  Gap : 12px entre liens

Colonne 3 — Aide :
- Titre "Aide" même style
- Liens : "FAQ", "Livraison", "Retours", "Contact", "Suivi de commande"
  Même style que col 2

Colonne 4 — Newsletter :
- Titre "Restez dans la boucle" Playfair Display 500 18px #F5EFE6
- Texte DM Sans 300 14px #A89880, margin-top 8px :
  "Nouvelles collections, offres exclusives — en avant-première."
- Input + bouton (flex row, margin-top 20px) :
  Input : background #1A1612, border 1px #2E2520, color #F5EFE6
  Font DM Sans 15px, height 48px, padding 0 16px, border-radius 0
  Placeholder "votre@email.com" color #4A4340
  Focus : border #C9A84C
  Bouton : background #C9A84C, color #0D0B09, width 48px, height 48px
  Contenu : ArrowRight Phosphor 18px, border-radius 0
  Hover bouton : background #B8942E

BASE FOOTER (border-top 1px #2E2520, padding 24px 0) :
- Flex space-between
- Gauche : "© 2025 irun. Tous droits réservés." Space Mono 11px #A89880
- Droite : "Politique de confidentialité · CGV" Space Mono 11px #A89880, hover #F5EFE6

MOBILE : 2 colonnes (marque + aide), newsletter pleine largeur en bas, base centrée
```

---

## PROMPT 9 — FRAMER AI (version condensée)

> À coller directement dans Framer AI

```
Build a luxury dark-mode e-commerce site for "irun", a premium African hair weave brand.

Reference structure: regirlworld.ng (same UX architecture). Inverted aesthetics: dark editorial
instead of white/burgundy.

Colors: backgrounds #0D0B09 and #1A1612 (never white), gold accent #C9A84C, cream text #F5EFE6,
muted taupe #A89880 for secondary text.

Typography: Cormorant Garamond Italic for hero headlines, Playfair Display for section
headings, DM Sans 300 for body, Space Mono for all buttons/labels/UI.

Icons: Phosphor Icons Light only (strokeWidth 1.5). Zero emojis anywhere.

Sections:
1. Sticky nav — transparent to solid on scroll, gold logo in Cinzel
2. Full-screen hero — editorial image + large italic headline + outline gold CTA
3. Bestsellers grid — 4 columns, dark cards, 3:4 ratio, gold price
4. 3-feature section — Phosphor icons 48px, numbered 01/02/03, no card backgrounds
5. Split-screen — product texture photo left, editorial text right
6. Collection banners — horizontal, one per hair type
7. Minimal text testimonials carousel
8. Footer — 4 columns, newsletter with gold arrow button

Rules: zero border-radius > 0px. Zero filled buttons (outline → fill on hover only).
Zero auto-play carousels. Fade-up scroll animations throughout with stagger on grids.
```

---

## CHECKLIST DE VALIDATION

**Design**
- [ ] Aucun emoji dans l'interface ou le contenu
- [ ] Icônes Phosphor Light uniquement, strokeWidth 1.5
- [ ] Fond toujours sombre (#0D0B09 ou #1A1612) — zéro surface blanche
- [ ] 5 polices dans leurs rôles respectifs
- [ ] Boutons outline or par défaut, filled au hover uniquement
- [ ] Border-radius : 0px sur tous les composants
- [ ] L'or n'est jamais fond de section pleine largeur

**Fonctionnel**
- [ ] Sélecteur longueur : toggle buttons, pas de select natif
- [ ] Mobile responsive testé sur 375px
- [ ] Touch targets minimum 44×44px
- [ ] Nav transparente → solide au scroll
- [ ] Drawer mobile fonctionnel avec overlay

**Performance & UX**
- [ ] Animations fade-up au scroll sur toutes les sections
- [ ] Stagger sur les grilles de cards
- [ ] Prix formatés "12 500 FCFA" (espace comme séparateur milliers)
- [ ] Images avec overlay sombre, aucun fond blanc derrière les produits
- [ ] Carousel sans auto-play
