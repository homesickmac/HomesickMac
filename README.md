# Homesick Mac — Website

Blues, country, folk and slide guitar from southern Sweden.  
Built as a static HTML site, hosted on GitHub Pages at [homesickmac.github.io/HomesickMac](https://homesickmac.github.io/HomesickMac/).

---

## File Structure

```
HomesickMac/
├── index.html          ← Homepage
├── about.html          ← About Mac
├── retreat.html        ← Guitar Retreat 2026
├── testimonials.html   ← Participant testimonials
├── contact.html        ← Contact & application
├── style.css           ← All styles (shared across pages)
├── main.js             ← Navigation & scroll animations
├── README.md           ← This file
└── (all images in root folder)
```

---

## Images

All images are hosted directly in this repository — no external image hosting dependencies.

---

## Connecting Your Custom Domain

When ready to point `homesickmac.com` here:

1. Add a file called `CNAME` in the root of this repo containing just:
   ```
   homesickmac.com
   ```

2. In Namecheap, update the DNS with 4 A records pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. In GitHub repo Settings → Pages → Custom domain, type `homesickmac.com` and click Save

4. DNS changes take up to 48 hours to propagate

---

## Updating the Site

To make any change:

1. Go to the file in this repo on GitHub
2. Click the pencil icon (Edit)
3. Make your change
4. Click Commit changes

GitHub Pages rebuilds automatically — live within 1–2 minutes.

---

© 2026 Mac's Acoustics
