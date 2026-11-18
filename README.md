# JPS Travels

JPS Travels is a Next.js App Router site with TypeScript, Tailwind CSS, local fonts and destination photography served from `public/images`.

## Run locally

Install Node.js 22 LTS or later. Extract the ZIP, then open the extracted `JPS-Travels-Premium` folder in PowerShell or your terminal.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

To check and run the production build:

```bash
npm run typecheck
npm run build
npm start
```

## Pages and content

| Page | Contents |
| --- | --- |
| `/` | Featured destinations, the Ramayana trail and private itineraries |
| `/destinations` | Search and filters for 33 places, including 13 Ramayana stops |
| `/destinations/[slug]` | Destination details, highlights, visitor tips and a WhatsApp enquiry |
| `/ramayana-trail` | Trail stops by region, 5-day and 9-day itineraries and temple visitor guidance |
| `/packages` and `/packages/[slug]` | Four original itineraries, two Ramayana itineraries and day-by-day route details |
| `/about`, `/contact` | Company information, contact details and the WhatsApp trip enquiry form |
| `/photo-credits` | Photography credits and licence links |

Edit destination descriptions in `lib/places.ts`. Edit tours, original guide prices and contact information in `lib/data.ts`. The older tour prices shown on the detail pages are illustrative. The new Ramayana tours request a quote.

The contact form opens a WhatsApp draft for the visitor to review. It does not store form information. The directions link opens Google Maps when selected.

## Images and sources

All rendered images are bundled in `public/images`. New destination photography is delivered as WebP. Wikimedia Commons credits are stored in `lib/photo-credits.json` and displayed at `/photo-credits`. The original JPS logo and the four supplied references are included. The Nallur reference retains its original attribution and the website displays a separately licensed Nallur photo. Confirm usage rights for the supplied reference images before publication.

The route descriptions distinguish Ramayana devotional traditions from the sites’ present-day visitor experiences. Source references include [Sri Lanka Tourism’s Ramayana attractions](https://www.srilanka.travel/ramayanaya/places.php) and [UNESCO’s Sri Lanka World Heritage list](https://whc.unesco.org/en/statesparties/lk).

## Deploy on Vercel

Import the project as a Next.js project. Set `NEXT_PUBLIC_SITE_URL` in Vercel if you use a different public domain. The default is `https://jps-travels-three.vercel.app`. The site uses this URL for page metadata, structured data, sitemap and robots settings.
