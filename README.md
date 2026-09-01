# Westpark Dental Studio — Homepage Concept

A premium homepage **concept / shell** for [Westpark Dental Studio](https://westparkdds.com/),
a general and cosmetic dental practice in the Tysons Corner / McLean, Virginia area.

This is a design presentation intended to show the client a dramatically more
sophisticated direction for their website. It is a **single-page homepage shell** —
not a full production site.

## Stack

Intentionally dependency-free for instant, reliable deployment:

- Static **HTML / CSS / vanilla JS** — no build step, no framework
- Google Fonts: **Fraunces** (editorial display serif) + **Jost** (UI sans)
- SEO-ready: semantic HTML, single `H1`, `Dentist` JSON-LD structured data,
  Open Graph tags, `robots.txt`, `sitemap.xml`
- Accessible: skip link, keyboard-friendly mobile menu, `prefers-reduced-motion` support
- Responsive: designed mobile-first, not just a shrunken desktop

## Local preview

```bash
# any static server works, e.g.
python3 -m http.server 5173
# then open http://localhost:5173
```

## Deploy to Vercel

This repo deploys as-is with **no configuration** (Vercel auto-detects a static site):

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Other** · Build command: *(none)* · Output dir: `.`
3. Deploy.

## Notes on content & assets

- The **real Westpark Dental Studio logo** and factual details (address, phone,
  hours, doctor credentials, services) are used as provided.
- **No claims, testimonials, awards, or statistics were invented.**
- Photography is represented by tasteful, clearly-labeled placeholders
  (`data-ph` panels). Drop real studio, doctor, and cosmetic photography into
  `/assets/img/` and swap the `.ph` blocks for `<img>` elements to finish.

## Structure

```
index.html      # full homepage
styles.css      # design system + all sections
main.js         # header scroll state, mobile menu, scroll reveals
assets/img/     # real logo (white + charcoal), favicon, apple touch icon
robots.txt
sitemap.xml
```
