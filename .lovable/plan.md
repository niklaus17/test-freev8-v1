# Webcase Landing Page — Build Plan

A mobile-first, conversion-focused landing page for the free Webcase web design course. Romanian copy, warm palette, 10 sections, signup modal, sticky mobile CTA.

## Design system (src/styles.css)

Replace current tokens with warm Webcase palette in `oklch`:
- `--primary` warm orange `#FF6B35`
- `--primary-foreground` off-white
- `--secondary` deep navy `#1A2332`
- `--background` off-white `#FAFAF8`
- `--foreground` dark grey `#2C2C2C`
- `--accent` soft cream `#FFF4E6`
- `--muted` light grey for social-proof strip
- `--destructive` muted red for "Not for you" block
- `--radius` 12px

Typography: Manrope (headings) + Inter (body) via Google Fonts in `__root.tsx` `head().links`. Base font-size 16px, line-height 1.5. Mobile h1 32–40px, h2 24–28px.

## Routes & files

Single landing page on `/` — replace placeholder `src/routes/index.tsx`. Update `__root.tsx` head meta with Webcase title, description, OG tags, fonts, Course schema JSON-LD.

```
src/routes/index.tsx                 (composes sections)
src/components/webcase/Hero.tsx
src/components/webcase/SocialProof.tsx
src/components/webcase/WhatYouGet.tsx
src/components/webcase/Testimonials.tsx
src/components/webcase/HowItWorks.tsx
src/components/webcase/WhoItsFor.tsx
src/components/webcase/Authority.tsx
src/components/webcase/Faq.tsx
src/components/webcase/FinalCta.tsx
src/components/webcase/Footer.tsx
src/components/webcase/SignupModal.tsx     (Dialog from shadcn)
src/components/webcase/StickyCta.tsx       (appears after 30% scroll, mobile only)
src/components/webcase/SignupProvider.tsx  (context: openModal())
```

All CTAs across sections call `useSignup().open()` to trigger the same modal.

## Section build details

1. **Hero**: top bar with Webcase wordmark + 🇷🇴 🇲🇩 flags. H1, subhead, stacked mockup visual (3 layered placeholder cards generated via imagegen, lazy below first paint), full-width 56px CTA, micro-trust row, lightning footer line.
2. **Social Proof**: muted strip, 3-stat row (38.000+, Sute, 4.8★).
3. **What You Get**: 2×2 mobile / 4×1 desktop cards with emoji icons, soft shadow, hover lift; secondary CTA below.
4. **Testimonials**: 3 cards (Maria, Andrei, Elena) with avatar placeholder, before→after badge, italic quote, screenshot placeholder. Vertical stack mobile, 3-col grid desktop. No carousel (per "avoid" list).
5. **How It Works**: 4 steps, 2×2 mobile / 4×1 desktop, arrows between on desktop, highlighted rhythm box below.
6. **Who It's For**: 4 segment cards in 2×2 grid + separate destructive-styled "NU e pentru tine" block.
7. **Authority**: Sergiu photo+bio 2-col on desktop, stacked mobile; italic quote box; team subsection with photo + 3 checkmarks.
8. **FAQ**: shadcn `Accordion` (single-collapse), 8 items, chevron rotates on expand.
9. **Final CTA**: warm gradient bg (primary → lighter), centered headline, 64px full-width button, 4 checkmarks, closing line.
10. **Footer**: minimal centered, copyright, contacts, legal links (placeholder hrefs).

## Signup modal

shadcn `Dialog`. Fields: Name (optional), Email (required, zod validation), Phone (optional). Submit logs payload to console and swaps to success state with checkmark + Romanian confirmation copy. Close button restores form on reopen.

## Sticky mobile CTA

Mounted at root. `useEffect` scroll listener; visible only when `window.innerWidth < 768` and `scrollY / docHeight > 0.3`. Hides when modal open. Pulse animation via Tailwind `animate-pulse` (subtle, no aggressive motion). Opens signup modal.

## Images

Generate 4 placeholders via imagegen, saved to `src/assets/`:
- `hero-mockup-1/2/3.jpg` — 3 abstract device/web design mockups for stack
- `team.jpg` — Webcase team photo placeholder
- `sergiu.jpg` — founder portrait placeholder
- `avatar-maria/andrei/elena.jpg` — round 80px portraits

All `loading="lazy"` except hero stack first image; alt text on every `<img>`.

## SEO & head

In `src/routes/index.tsx` `head()`:
- title: "Curs Gratuit Web Design — Webcase | Primul Design în 20 Min"
- description: per brief
- og:title, og:description, og:type=website, og:url=/
- canonical: /
- JSON-LD `Course` schema (name, description, provider Webcase, free, inLanguage ro)

Root holds viewport, charset, font links, Organization JSON-LD.

## Analytics

GA4 + Meta Pixel script slots commented in `__root.tsx` head with TODO placeholders (no real IDs).

## Performance

- Single-page, no carousels, no autoplay video, no chat widget
- Lazy-load all below-fold imgs
- Fonts via `display=swap`
- Use Tailwind classes only — no per-component CSS files

## Out of scope

- No backend submission (console.log only)
- No paid course mentions
- No exit-intent popups
- No links off-page (footer links are `#` placeholders)

## Verification

After build, check preview at mobile width (375px) and desktop, verify modal opens from every CTA, sticky CTA appears after scroll, accordion behaves, no console errors.
