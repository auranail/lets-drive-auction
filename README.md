# Let's Drive — Auction & Auto

A professional, modern, multi-page dealership website for **Let's Drive Auction** and **Let's Drive Auto** — two brands under one roof. Built with semantic HTML5 and organized CSS (no frameworks, no build tools required).

---

## Pages

| File | Description |
|---|---|
| `index.html` | Home — hero, featured inventory, value props, process, testimonials, CTA |
| `inventory.html` | Vehicle inventory grid with static filter bar |
| `vehicle.html` | Vehicle detail template (sample: 2021 BMW 5 Series 530i) |
| `sell.html` | Seller intake form — full vehicle submission with appraisal request |
| `about.html` | Company story, both brands, core values, leadership team |
| `contact.html` | Contact info, hours, map placeholder, contact form, FAQ |

---

## Design System

The entire site is styled through `styles.css` using **CSS Custom Properties (variables)** for a consistent, maintainable design system:

- **Color tokens** — `--clr-primary` (deep navy `#0a1628`), `--clr-accent` (gold `#c9a84c`), plus a full neutral scale
- **Typography scale** — `--font-size-xs` through `--font-size-5xl` using `rem` units
- **Spacing scale** — `--sp-1` through `--sp-24` for consistent rhythm
- **Border radius, shadow, and transition variables** for polished interactive states

### Brand Palette

| Token | Value | Use |
|---|---|---|
| `--clr-primary` | `#0a1628` | Navigation, headings, dark sections |
| `--clr-accent` | `#c9a84c` | CTAs, highlights, badges |
| `--clr-white` | `#ffffff` | Backgrounds, light text |
| `--clr-gray-50` | `#f8f9fb` | Alternate section backgrounds |

---

## Running Locally

No build step or server required:

1. Clone or download the repository
2. Open any `.html` file directly in your browser:
   ```
   open index.html
   ```
   Or use a local server for the best experience:
   ```bash
   # Python
   python3 -m http.server 8080

   # Node (npx)
   npx serve .

   # VS Code
   Install "Live Server" extension and click "Go Live"
   ```
3. Navigate to `http://localhost:8080`

---

## Responsiveness

The layout is fully responsive with three breakpoints:

| Breakpoint | Target |
|---|---|
| ≤ 900px | Tablet — hero stacks, sidebars stack, 2-column footer |
| ≤ 640px | Mobile — hamburger nav, single-column everything |
| ≤ 400px | Small mobile — compact grid adjustments |

---

## Accessibility

- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<aside>`, `<section>`, `<address>`)
- Proper heading hierarchy (h1 → h2 → h3 per page)
- `alt` text on all images; `aria-label` on icon-only elements
- `aria-current="page"` on active nav links
- Keyboard-navigable mobile menu with `aria-expanded` state
- Visible `:focus-visible` outlines using accent color
- Color contrast checked against WCAG AA standards
- `<label>` elements paired with all form inputs via `for`/`id`

---

## File Structure

```
lets-drive-auction/
├── index.html       # Home page
├── inventory.html   # Vehicle listings
├── vehicle.html     # Vehicle detail (sample)
├── sell.html        # Sell your car form
├── about.html       # About us
├── contact.html     # Contact page
├── styles.css       # All styles + design system
└── README.md        # This file
```

---

## Browser Support

Tested in current versions of Chrome, Firefox, Safari, and Edge.
Uses only widely-supported CSS features (custom properties, grid, flexbox, `clamp()`).

---

© 2024 Let's Drive Auction & Auto. All rights reserved.
