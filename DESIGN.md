# DESIGN SYSTEM — IRUN
**Marque de mèche tissée premium**
*Version 2.0 — Architecture Regirl × Identité irun*

---

## 01. POSITIONNEMENT DESIGN

irun reprend **l'architecture UX de Regirl** (structure nav, grid produits, layout page produit, spacing system) mais inverse l'esthétique : là où Regirl est blanc/bordeaux/accessible, irun est **noir chaud / or cuivré / éditorial**.

| Dimension | Regirl (référence) | irun (cible) |
|-----------|-------------------|--------------|
| Background | `#FFFFFF` | `#0D0B09` |
| Accent principal | Bordeaux `#8E2210` | Or cuivré `#C9A84C` |
| Tone | Aspirationnel-accessible | Éditorial-luxe |
| Display font | Miller Display (serif) | Cormorant Garamond Italic |
| Body font | Larsseit | DM Sans |
| UI / CTA font | Jost | Space Mono |
| Icônes | Non spécifié | Phosphor Icons Light — zéro emoji |
| Border-radius cards | `0 0 20px 20px` | `0px` strict |
| Fond card | `#FFFFFF` | `#1A1612` |
| Buttons | Filled burgundy | Outline or → filled au hover |

---

## 02. PALETTE DE COULEURS

### Principales
```css
--color-bg:            #0D0B09;   /* Base toutes pages */
--color-surface:       #1A1612;   /* Cards, sections alternées */
--color-surface-hover: #221E19;   /* Hover surfaces */
--color-primary:       #C9A84C;   /* Or cuivré — CTA, accents focaux */
--color-primary-dark:  #B8942E;   /* Or foncé — hover CTA */
--color-secondary:     #8B4E3A;   /* Terre de Sienne — accent secondaire */
```

### Texte
```css
--color-text:          #F5EFE6;   /* Blanc crème — texte principal */
--color-text-muted:    #A89880;   /* Taupe — labels, secondaire */
--color-text-disabled: #4A4340;   /* Texte inactif */
```

### Bordures & overlays
```css
--color-border:        #2E2520;   /* Bordures subtiles */
--color-overlay:       rgba(201, 168, 76, 0.07);  /* Glow doré sections */
--color-scrim:         rgba(13, 11, 9, 0.55);     /* Overlay images hero */
```

### Sémantique
```css
--color-error:         #C54C44;
--color-success:       #4E8B6A;
--color-badge-bg:      rgba(201, 168, 76, 0.12);
```

**Règle absolue** : fond toujours sombre. Zéro surface blanche. L'or est réservé aux éléments focaux uniquement.

---

## 03. TYPOGRAPHIE

Même logique de rôles que Regirl — polices différentes.

### Stack
| Rôle | Police | Fallback |
|------|--------|---------|
| Display / Hero | `Cormorant Garamond` Italic 700 | `Georgia, serif` |
| Heading H2–H3 | `Playfair Display` 500–600 | `Georgia, serif` |
| Body | `DM Sans` 300–400 | `Helvetica Neue, Arial, sans-serif` |
| UI / Labels / CTA | `Space Mono` 400 | `Courier New, monospace` |
| Logo / Signature | `Cinzel` 400 | `Georgia, serif` |

### Hiérarchie complète
| Rôle | Police | Taille | Weight | Line Height | Letter Spacing |
|------|--------|--------|--------|-------------|----------------|
| Hero H1 | Cormorant Garamond Italic | clamp(64px, 9vw, 130px) | 700 | 0.92 | 0 |
| Section H2 | Playfair Display | clamp(32px, 4vw, 52px) | 500 | 1.15 | 0 |
| Sous-section H3 | Playfair Display | 22px | 500 | 1.3 | 0 |
| Body | DM Sans | 15px | 300 | 1.75 | 0 |
| Eyebrow / Label | Space Mono | 11px | 400 | 1 | 0.25em |
| Bouton | Space Mono | 12px | 400 | 1 | 0.2em |
| Prix | Playfair Display | 18px | 500 | 1 | 0 |
| Caption | DM Sans | 12px | 300 | 1.6 | 0 |
| Input text | DM Sans | 15px | 400 | normal | 0 |
| Nav liens | Space Mono | 11px | 400 | 1 | 0.15em |

### Principes
- **Cormorant pour l'impact** : hero, titres de section majeurs uniquement
- **DM Sans pour la clarté** : body, descriptions produit, UI courant
- **Space Mono pour l'action** : tous les boutons, labels, numéros, badges
- **Uppercase** : uniquement eyebrow labels et boutons (Space Mono + tracking)
- **Jamais d'uppercase sur le body**

---

## 04. ICONOGRAPHIE

**Règle stricte : aucun emoji. Icônes SVG uniquement.**

### Bibliothèque
**Phosphor Icons** — style `Light`, strokeWidth `1.5`. Import via `@phosphor-icons/react`.

### Référence icônes clés
| Contexte | Icône Phosphor | Taille | Couleur par défaut |
|----------|---------------|--------|--------------------|
| Panier nav | `ShoppingBag` | 20px | `--color-text-muted` |
| Compte | `User` | 20px | `--color-text-muted` |
| Recherche | `MagnifyingGlass` | 20px | `--color-text-muted` |
| Menu mobile | `List` | 24px | `--color-text` |
| Fermer drawer | `X` | 24px | `--color-text` |
| Livraison | `Package` | 48px | `--color-primary` |
| Qualité | `Seal` | 48px | `--color-primary` |
| Naturel / Bio | `Leaf` | 48px | `--color-primary` |
| Flèche CTA | `ArrowRight` | 16px | inherit |
| Étoile rating | `Star` (Fill) | 12px | `--color-primary` |
| Check succès | `CheckCircle` | 16px | `--color-success` |
| Accordéon + | `Plus` | 16px | `--color-text-muted` |
| Accordéon − | `Minus` | 16px | `--color-text-muted` |
| Instagram | `InstagramLogo` | 20px | `--color-text-muted` |
| TikTok | `TiktokLogo` | 20px | `--color-text-muted` |

### Style d'application
- Stroke width : `1.5px` strict — jamais filled sauf `Star` rating
- Pas de fond, pas de bubble autour des icônes
- Hover nav : `--color-text-muted` → `--color-primary`, 200ms ease

---

## 05. COMPOSANTS

### Navigation

Architecture identique à Regirl, palette inversée.

- **Scroll = 0** : fond transparent
- **Scrolled** : `background: #0D0B09` + `backdrop-filter: blur(12px)`, transition 300ms
- **Logo** : Cinzel 400, tracking `0.3em`, `--color-primary`
- **Liens** : Space Mono 11px uppercase tracking `0.15em`, `--color-text-muted`
  - Hover : `--color-text` + underline `1px solid --color-primary` slide L→R
  - Actif : `--color-primary`
- **Icônes droite** : MagnifyingGlass, User, ShoppingBag — `--color-text-muted` → `--color-primary` hover
  - Badge panier : cercle `--color-primary` 16px, chiffre `#0D0B09` Space Mono 9px
- **Mobile** : `List` hamburger → drawer full-screen `#0D0B09`, liens Playfair 32px, fermeture `X`

---

### Boutons

#### Primary
```css
.btn-primary {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  height: 44px;
  padding: 0 32px;
  border-radius: 0;
  transition: background 350ms ease, color 350ms ease;
}
.btn-primary:hover {
  background: var(--color-primary);
  color: var(--color-bg);
}
.btn-primary:active {
  background: var(--color-primary-dark);
  transform: scale(0.98);
}
```

#### Ghost / Secondaire
```css
.btn-ghost {
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding: 0;
}
.btn-ghost:hover { color: var(--color-primary); }
```

---

### Product Cards

```
Structure :
├── Image wrapper — ratio 3:4, overflow hidden
│   ├── img — object-cover, scale(1.04) au hover 500ms ease
│   ├── Badge longueur — bottom-left, Space Mono 11px, rgba(0,0,0,0.6) + or
│   ├── Badge "Nouveau" — top-right, fond #C9A84C, texte #0D0B09 (si applicable)
│   └── CTA hover — bottom, opacity 0→1 + translateY 8px→0
│       "Ajouter au panier" + ShoppingBag, fond #C9A84C, texte #0D0B09
└── Info block — padding 16px, fond --color-surface
    ├── Nom — DM Sans 400 15px, --color-text
    ├── Rating — Star filled 12px + chiffre Space Mono 11px + "(N avis)" DM Sans 12px muted
    └── Prix — Playfair Display 500 18px, --color-primary
```

- **Border-radius** : `0px` (irun est sharp, pas de `20px` bas comme Regirl)
- **Hover shadow** : `rgba(201, 168, 76, 0.08) 0px 2px 12px 0px`
- **Hover scale card** : `1.02`

---

### Inputs & Forms

#### Input standard
```css
.input {
  background: var(--color-surface);
  color: var(--color-text);
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 12px 16px;
  height: 48px;
  border-radius: 0;
  border: 1px solid var(--color-border);
  outline: none;
}
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.1);
}
.input::placeholder { color: var(--color-text-disabled); }
```

#### Toggle longueur (page produit — remplace le select natif)
```css
.length-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  height: 40px;
  padding: 0 14px;
  border-radius: 0;
  cursor: pointer;
  transition: all 200ms ease;
}
.length-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg);
}
.length-btn:hover:not(.active) {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

---

### Badges

| Type | Fond | Texte | Police | Padding | Radius |
|------|------|-------|--------|---------|--------|
| Longueur | `rgba(0,0,0,0.6)` | `--color-primary` | Space Mono 11px | `4px 8px` | 0 |
| Nouveau | `--color-primary` | `#0D0B09` | Space Mono 10px uppercase | `4px 8px` | 0 |
| Stock dispo | `rgba(78,139,106,0.15)` | `--color-success` | DM Sans 12px | `4px 8px` | 0 |
| Catégorie | transparent | `--color-primary` | DM Sans 13px | `0` | 0 |

---

## 06. ÉLÉVATION & OMBRES

Même philosophie que Regirl : ombres subtiles, jamais empilées.

| Niveau | Valeur CSS | Usage |
|--------|-----------|-------|
| Flat | aucune | Défaut — cards, boutons |
| Hover | `rgba(201, 168, 76, 0.08) 0px 2px 12px 0px` | Product cards |
| Dropdown | `rgba(0, 0, 0, 0.4) 0px 4px 16px 0px` | Menus, selects |
| Modal | `rgba(0, 0, 0, 0.6) 0px 8px 32px 0px` | Modals, drawers |

---

## 07. SPACING SYSTEM

Identique à Regirl, base `4px`.

```
4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 52 · 64 · 80  (en px)
```

| Contexte | Valeur |
|----------|--------|
| Padding bouton | `0 32px`, height `44px` |
| Padding card info | `16px` |
| Gap grille produits | `24px` desktop / `12px` mobile |
| Padding section standard | `64px` desktop / `40px` mobile |
| Padding section hero | `80px` |

---

## 08. STRUCTURE DES PAGES

### Homepage
1. Nav sticky
2. Hero 100vh — image éditoriale + Cormorant title + CTA outline or
3. Brand Statement — 1 phrase centrée, Cormorant massif, fond `--color-surface`
4. Bestsellers — grille 4 col, fond `--color-bg`
5. Why irun — 3 features, icônes Phosphor 48px, numéros `01 02 03`, fond `--color-surface`
6. Texture Feature — split 55/45, image gauche, texte éditorial droite
7. Collections — bannières horizontales (Brésilienne, Péruvienne, Malaisienne…)
8. Testimonials — texte seul + prénom, fond `--color-surface`
9. Instagram Strip — 6 images grille
10. Footer — newsletter + liens + réseaux

### Page Produit
- Galerie gauche : thumbnails verticaux + image principale (swap fade 200ms)
- Infos droite : sticky top 80px
  - Breadcrumb Space Mono 11px `--color-text-muted`
  - Nom Playfair 28px
  - Rating ligne
  - Prix Playfair or
  - Séparateur `1px solid --color-border` 40px
  - Toggle longueur (pas de select natif)
  - CTA pleine largeur
  - Accordéon `Plus/Minus` Phosphor

### Page Collection
- Filtres horizontaux scrollables (mobile-first)
- Grille 4 col desktop / 2 col mobile / 1 col 375px
- Tri : popularité, prix, nouveautés

---

## 09. RESPONSIVE

| Nom | Largeur | Grille produits | Padding sections |
|-----|---------|-----------------|-----------------|
| Mobile | 320–599px | 1 col | 40px |
| Tablet | 600–1023px | 2 col | 52px |
| Desktop | 1024–1439px | 3–4 col | 64px |
| Wide | 1440px+ | 4 col, max-width 1280px | 80px |

Touch targets minimum : `44px × 44px`.

---

## 10. MOTION

| Animation | Durée / Easing | Usage |
|-----------|---------------|-------|
| Fade-up scroll | `500ms ease-out, translateY 24px→0` | Toutes les sections |
| Stagger grille | `150ms` entre cards | Bestsellers, collections |
| Hero title reveal | `clip-path inset(100%→0%), 700ms` | Au load |
| Image hover | `scale(1.04), 500ms ease` | Product cards |
| Nav bg | `background + blur, 300ms` | Au scroll |
| CTA fill | `background bottom→top ::before, 350ms` | Hover bouton primary |
| Drawer mobile | `translateX(100%)→0, 350ms ease-out` | Menu mobile |

Durées : `200ms` micro / `400ms` transitions / `600–700ms` reveals.
Easing dominant : `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

---

## 11. DON'TS

- Zéro emoji — Phosphor Light uniquement
- Zéro fond blanc ou gris clair
- Zéro polices system (Inter, Arial, Roboto)
- Zéro border-radius > 0px (irun est sharp)
- Zéro shadow empilée — une par élément max
- Zéro animation infinite loop visible
- Zéro bouton filled par défaut — outline → filled au hover
- Zéro select natif pour longueur — toggle buttons
- Zéro carousel auto-play sans contrôle
- L'or `#C9A84C` n'est jamais fond de section pleine largeur
