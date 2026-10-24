# Kiran Saju portfolio — Kerala SEO implementation

## What is included
- SEO-friendly homepage copy and regional relevance without inventing an office or rankings.
- Five **different** service pages, each with its own title, description, primary heading, proof, FAQ and links to related services.
- Absolute canonical URLs, social sharing tags, Person and Service JSON-LD with accurate service-area information.
- XML sitemap at /sitemap.xml and robots.txt at /robots.txt.
- Existing portfolio projects, personal photo, contact form and design preserved.

## Publish
1. Extract ZIP and upload the **contents** (index.html, resource/, assets/, services/, robots.txt, sitemap.xml) to the same web root that serves kiransaju.in.
2. Keep `resource/dp insta.png` (original profile photo). A smaller `resource/dp-insta.webp` is also included for faster page loading; the homepage uses WebP with a PNG fallback. If you rename or delete either file, update the references.
3. Confirm the chosen canonical host `https://www.kiransaju.in/` is the correct one for the live site and that `https://kiransaju.in/` redirects to it (or choose the opposite and update ALL site URLs if that is your actual host).
4. Check the homepage and each service URL manually in a browser. Verify there are no 404s and the SEO text and portrait appear.
5. In Google Search Console, verify the domain/property, submit `https://www.kiransaju.in/sitemap.xml`, inspect `/` and the five service pages, and request indexing if needed.
6. Connect Google Analytics / Search Console measurement if you wish, then track actual impressions, clicks and search queries; do not infer rankings from metadata.
7. Review and update proof/examples; add original screenshots, case-study details and *permissioned* testimonials when available.
8. Verify the existing Formspree recipient points to your preferred mailbox.

## Important notes
- Avoid fake reviews, keyword-stuffed footers, or dozens of near-identical town pages.
- No one can guarantee first-page rankings for competitive Kerala-wide searches. Focus on helpful pages, technical crawlability, citations, relevant links and a good client experience.
- A Google Business Profile is only suitable if you satisfy the physical in-person customer contact requirement; online-only businesses are not generally eligible. Do not create a false office/address.
- Sitemap submission does not guarantee indexing or ranking. Monitor Search Console.
- The HTML is static; just deploy the files on the host serving the website.
- The original contact form endpoint is unchanged: https://formspree.io/f/mbdakoek.
