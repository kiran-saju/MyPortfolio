# Clean portfolio update

## What changed

- Each project banner now works as an accessible link to its existing live project URL. Opens in a new tab.
- Kept the original *Visit website* links underneath the project cards.
- Preserved all four projects and their descriptions from your latest uploaded code.
- Consolidated multiple conflicting CSS blocks into `assets/site.css` and removed obsolete avatar animations, duplicate selectors/declarations, unused banner icon styles, and dead selectors.
- Moved JavaScript into an indented, commented `assets/site.js`.
- Reformatted the homepage and the five SEO service pages as readable multiline HTML.
- Kept sitemap, robots.txt, OG image, favicon, Formspree endpoint, and existing links.
- Corrected structured-data profile image to `resource/dp-insta.webp`.

## To add your *real* screenshots

Place these four screenshots under `resource/projects/`:

1. `greenpentair.webp`
2. `uritshop.webp`
3. `bakedaddy.webp`
4. `binarabgroups.webp`

All four HTML image paths are already configured. We did **not** invent or bundle mock screenshot assets; the portfolio shows its existing gradient banner styling until you add them.

## Deploy

Upload the entire folder contents to your site root; retain the same folder structure.

For local testing, run `python -m http.server 8000` from the website root and visit `http://localhost:8000/`.

After deployment, check all project destinations, the contact form and sitemap.
