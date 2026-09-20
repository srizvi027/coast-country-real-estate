# First National Coast & Country Real Estate

Premium redesign of coastandcountryfn — React + Vite + TypeScript + Tailwind + Framer Motion + Lucide.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Node 18 or newer.

## Deploy (GitHub → Vercel)

```bash
git init
git add .
git commit -m "Coast & Country redesign"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then on vercel.com: **Add New → Project → import the repo**. Vercel detects Vite automatically
(build `npm run build`, output `dist`). `vercel.json` is included. No environment variables required.

## Project structure

```
public/            logos, favicon, robots.txt, sitemap.xml
src/
  components/      Navbar, Hero, PropertySearch, FeaturedProperties, PropertyReel,
                   RentalProperties, RecentSales, Services, Locations, SuburbProfiles,
                   Testimonials, Team, AppraisalForm, Contact, EnquiryForm, Footer,
                   PropertyCard, AgentCard, Loader, MobileBar, Reveal, Scene
  data/            site.ts, properties.ts, team.ts, testimonials.ts, locations.ts, services.ts
  lib/             validate.ts
  styles/          global.css (design system), scenes.css (placeholder artwork)
```

All copy and property data live in `src/data/` — no content is hard-coded into components.

## Replacing the placeholder imagery

Every image on the site is currently a generated SVG placeholder defined as a `.ph-*` class in
`src/styles/scenes.css`, rendered through `src/components/Scene.tsx`.

Two ways to swap in real photography:

1. **Quickest:** drop photos into `public/photos/` and change the matching rule in `scenes.css`:
   ```css
   .ph-p1 { background-image: url("/photos/6-saxonia-road.jpg"); }
   ```
2. **Best for performance:** replace the `<div>` inside `Scene.tsx` with a real `<img>` /
   `<picture>` (AVIF + WebP, `loading="lazy"`, explicit `width`/`height`), and give each item in
   `src/data/*.ts` an `image` path instead of a `scene` key.

Recommended export sizes: hero/reel 2400px wide, property cards 1200px, portraits 900×1200.

## Forms

`AppraisalForm` and `EnquiryForm` validate client-side and then stop at a `TODO` comment —
add your `fetch()` to a CRM endpoint, Formspree, or a Vercel serverless function there.

## Content notes

Property data, sold prices, agent details, testimonials and office details come from the existing
site. Nothing has been invented — properties without a published price show "Price on application".
