# DESIGN SYSTEM — IRUN
**Marque de mèche tissée premium**
*Version 2.1 — Identité Lamine (Blanc & Noir)*

---

## 01. POSITIONNEMENT DESIGN

irun reprend **l'architecture UX de Regirl** (structure nav, grid produits, layout page produit, spacing system) mais adopte une esthétique **blanc lumineux / terracotta / noir profond / éditorial**.

| Dimension | ÌRÙN (Actuel) |
|-----------|--------------|
| Background | `#FFFFFF` (Pur & Lumineux) |
| Accent principal | Terracotta `#802F1F` |
| Accent luxe | Doré doux `#D6B47A` |
| Texte | Noir `#000000` |
| Display font | Playfair Display / Cormorant Garamond |
| Body font | Inter |
| UI font | Jost |
| Icônes | Phosphor Icons Light |
| Buttons | Terracotta filled / outline |

---

## 02. PALETTE DE COULEURS

### Couleurs
```css
--color-bg:            #FFFFFF;   /* Base toutes pages — Lumineux */
--color-surface:       #FFF3DE;   /* Nude/Cream — sections alternées */
--color-primary:       #802F1F;   /* Terracotta — CTA, accents focaux */
--color-primary-deep:  #602216;   /* Terracotta profond — hover CTA */
--color-secondary:     #D6B47A;   /* Doré doux — accents de luxe */
--color-black:         #000000;   /* Noir — texte principal */
--color-black-muted:   #66635E;   /* Noir muted — labels, secondaire */
--color-border:        #E5E7EB;   /* Bordures subtiles */
--color-ivory:         #FFFCF3;   /* Ivoire — surfaces claires */
```

### Sémantique
```css
--color-error:         #FF0000;
--color-success:       var(--color-secondary);
```

**Règle absolue** : Esthétique lumineuse, aérée et premium. Contrastes forts entre le blanc et le noir, réchauffés par le terracotta.

---

## 03. TYPOGRAPHIE

### Stack
| Rôle | Police | Fallback |
|------|--------|---------|
| Display / Hero | `Cormorant Garamond` Italic 700 | `Georgia, serif` |
| Heading H2–H3 | `Playfair Display` 500–600 | `Georgia, serif` |
| Body | `Inter` | `system-ui, sans-serif` |
| UI / Labels / CTA | `Jost` | `sans-serif` |
| Logo | `Cinzel` 400 | `serif` |

---

## 04. ICONOGRAPHIE

**Règle stricte : aucun emoji. Icônes SVG uniquement.**
Bibliothèque : **Phosphor Icons** — style `Light`, strokeWidth `1.5`.

---

## 05. COMPOSANTS

### Navigation
- **Scroll = 0** : fond transparent
- **Scrolled** : `background: #FFFFFF` + `backdrop-filter: blur(12px)`, transition 300ms
- **Logo** : Cinzel 400, color `--color-primary`
- **Liens** : Jost, color `--color-black-muted`
  - Hover : `--color-black` + underline `--color-primary`
- **Icônes droite** : Phosphor Light 20px — color `--color-black-muted` → `--color-primary` hover

### Boutons
- **Primary** : Background terracotta, texte blanc, border-radius 0.
- **Outline** : Border terracotta, texte terracotta, border-radius 0.
- **Ghost** : Texte noir muted, souligné terracotta au hover.

---

## 06. DON'TS
- Zéro emoji — Phosphor Light uniquement
- Zéro fond sombre — irun est lumineux, aéré et blanc
- Zéro polices system (Arial, Roboto)
- Zéro border-radius > 0px (irun est sharp)
- Zéro bouton filled par défaut — outline → filled au hover recommandé
