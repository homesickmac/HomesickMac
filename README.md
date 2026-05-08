# Homesick Mac — Website

Blues, country, folk and slide guitar from southern Sweden.  
Built as a static HTML site for GitHub Pages hosting.

---

## File Structure

```
homesickmac-site/
├── index.html          ← Homepage
├── about.html          ← About Mac
├── retreat.html        ← Guitar Retreat 2026
├── testimonials.html   ← Participant testimonials
├── contact.html        ← Contact & application
├── style.css           ← All styles (shared across pages)
├── main.js             ← Navigation & scroll animations
└── README.md           ← This file
```

---

## How to Deploy to GitHub Pages

### One-time setup (do this once)

1. Push all these files to the **root** of your GitHub repository  
   (the repo you already have set up)

2. Go to your repo on GitHub → **Settings** → **Pages**

3. Under "Source", select **main** branch → **/ (root)** → click Save

4. GitHub will give you a URL like `https://yourusername.github.io/your-repo-name/`

5. To use your custom domain (homesickmac.com):
   - Add a file called `CNAME` in the root of your repo containing just: `homesickmac.com`
   - In your domain registrar (wherever you bought the domain), update the DNS:
     - Add 4 A records pointing to GitHub's IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - DNS changes take up to 48 hours to propagate

---

## Updating the Site

To make any change to the site in the future:

1. Edit the relevant file (e.g. `retreat.html` to update dates)
2. Commit and push to GitHub
3. GitHub Pages automatically rebuilds — usually live within 1–2 minutes

Ask Claude for help with any specific changes and paste in the current file content.

---

## Images

⚠️ **Important:** The site currently uses image URLs from the old Super.so hosting.  
Once you cancel Super.so, these images may stop working.

**To fix this:**
1. Download your photos from the old site
2. Add them to a folder in this repo (e.g. `/images/`)
3. Update the `src` attributes in the HTML to use `/images/your-photo.jpg`

The images to replace are in `index.html`, `retreat.html`, and `about.html`.

---

## Fonts

The site uses Google Fonts (loaded automatically):
- **Playfair Display** — headings
- **Lora** — body text
- **Josefin Sans** — navigation, labels

These load from Google's servers with no setup required.

---

## Colours (for reference)

| Name         | Hex       | Used for                    |
|--------------|-----------|-----------------------------|
| Parchment    | `#F4E5C0` | Page background             |
| Mahogany     | `#1C0A04` | Header, footer, dark sections |
| Amber        | `#C17B18` | Accent colour, links, buttons |
| Cream        | `#FBF4E0` | Card backgrounds            |
| Warm Muted   | `#7A5C35` | Body text (secondary)       |

---

© 2026 Mac's Acoustics
