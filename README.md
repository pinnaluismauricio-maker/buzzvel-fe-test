# Luma: Learn Without Limits

A responsive landing page for **Luma**, a fictional online learning platform, built from the supplied Figma design (desktop and mobile) for the Buzzvel Front-End Engineer challenge.

**Live preview:** [add the link, or delete this line]

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, `next/font` and `next/image`.

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/pinnaluismauricio-maker/buzzvel-fe-test.git
cd buzzvel-fe-test
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## Key decisions

- **Design tokens first.** Colors and fonts live as CSS variables in `globals.css` and are mapped to Tailwind with `@theme inline`, so `bg-primary` or `text-muted` mean the same thing everywhere.
- **Small, typed, reusable components.** One `Button` (variants and sizes) serves every call to action, and one `SectionHeading` serves every section title.
- **Measured from Figma, not eyeballed.** I exported the frames at 1:1 and measured them. The photo collage in the Community section is positioned with percentages, so it keeps its proportions at any width.
- **Mock form.** The contact form validates on the client, shows errors linked to each field (`aria-describedby`, `aria-invalid`), moves focus to the first invalid field and fakes a short submit. Nothing is sent anywhere.
- **Accessibility.** One `h1` with a clean heading outline, labelled landmarks, a skip link, visible focus styles (white on the blue and dark sections), a mobile menu that closes with `Esc` and returns focus, alt text on content images, and `prefers-reduced-motion` respected.
- **Performance.** Only the hero photo uses `priority`; every `next/image` has a matching `sizes`; fonts are self-hosted.
- **Breakpoints.** Below 1024px is the mobile layout. Hero, featured course and testimonial go two-column at `lg` (1024px). Community and contact go two-column, and categories become four columns, at `xl` (1280px).

## Results

Lighthouse on the production build:

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | 87 | 100 | 96 | 100 |
| Desktop | 98 | 100 | 100 | 100 |

On mobile, the hero image is the LCP element and loads quickly. Most of the remaining time is CSS/font render delay and the Next.js runtime, so I chose not to risk the layout for a few extra points.

## Known gaps

- **Tablet has no Figma design.** The layouts between 640px and 1279px are my own choice (stacked or two-column), checked for overflow and collisions.
- **Placeholder links.** The Figma has no prototype links, so sections link to anchors on the page (`#courses`, `#community`, `#how-it-works`, `#contact`). Log in, Careers, Journal, Terms and Privacy point to `#`.
- **Figma inconsistencies I resolved:** the desktop steps were all numbered 01, so I used 01, 02, 03; the mobile contact form was in Portuguese, so I kept it in English everywhere; the mobile step-2 icon looks lighter, so it is slightly lighter there too.
- **Estimated details.** Some decorative shape outlines and rotation angles were measured from exports, so they are very close but not guaranteed pixel-perfect.
- **Lorem ipsum** in the Community paragraph comes from the design.
- **No automated tests.** I spent the time on fidelity, accessibility and documentation instead.

## Time spent

About **16 hours** over [4] days.

## AI tools

I used **Claude** as a pair-programming partner: to plan the component structure, draft code from my Figma measurements and review accessibility and contrast. I pasted and edited the code myself, and I verified it by comparing each section to Figma at about 390px and 1280px, running `npm run build` and `npm run lint` before each commit, testing with keyboard only, at 200% and 400% zoom and with reduced motion, and running Lighthouse on the production build. I can walk through any part of the code.