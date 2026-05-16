# PROMPTS DE DÉVELOPPEMENT — IRUN
*v2.1 — Identité Lamine (Blanc & Noir)*

---

## PROMPT 0 — CONTEXTE GLOBAL
```
Tu travailles sur le site "irun", marque premium de mèche tissée.
L'esthétique est LUMINEUSE, AÉRÉE et LUXUEUSE (fond blanc, texte noir).

DESIGN SYSTEM IRUN :

Couleurs :
  --color-bg:        #FFFFFF  (fond de base — Lumineux)
  --color-surface:   #FFF3DE  (Nude/Cream — sections alternées)
  --color-primary:   #802F1F  (Terracotta — accent principal, CTA)
  --color-secondary: #D6B47A  (Doré doux — accents de luxe)
  --color-black:     #000000  (Noir — texte principal)
  --color-black-muted:#66635E  (Noir muted — labels, secondaire)
  --color-border:    #E5E7EB  (bordures subtiles)

Typographie :
  Hero H1   → Playfair Display / Cormorant Garamond Italic
  H2–H3     → Playfair Display
  Body      → Inter
  UI/CTA    → Jost
  Logo      → Cinzel 400

Règles absolues :
  - Fond BLANC (#FFFFFF)
  - Texte NOIR (#000000)
  - Zéro emoji (Phosphor Icons Light uniquement)
  - Zéro border-radius > 0px
```

## PROMPT 1 — NAVIGATION
```
Crée un composant Navigation React pour irun.
- Sticky top-0, z-index 100
- Transparent au sommet, blanc (#FFFFFF) avec blur au scroll
- Logo : Cinzel 400, color #802F1F
- Liens : Jost 11px uppercase, color #66635E, hover #000000 + underline #802F1F
- Icônes : Phosphor Light 20px, color #66635E, hover #802F1F
```

## PROMPT 2 — HERO SECTION
```
Crée une section Hero plein écran.
- Fond blanc ou image claire.
- Titre : Cormorant Garamond Italic, color #000000
- CTA : .btn-irun-outline (Terracotta #802F1F)
```
