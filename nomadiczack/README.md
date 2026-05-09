# NomadicZack v2.0

Rebuilt from scratch with proper JSX, full SEO, Open Graph, Google Analytics, and improved UX.

## What's new in v2.0

- ✅ Full JSX syntax (no more `React.createElement`)
- ✅ SEO meta tags (title, description, keywords)
- ✅ Open Graph tags (rich previews on Instagram, Discord, iMessage, etc.)
- ✅ Twitter Card support
- ✅ Google Analytics placeholder (replace `G-XXXXXXXXXX` with your real ID)
- ✅ Snapchat link added back to social section
- ✅ Popup uses `localStorage` — won't pester the same visitor twice
- ✅ Testimonial carousel with prev/next buttons + pause on manual scroll
- ✅ Improved profile header with better avatar fallback
- ✅ Cleaned up repo structure — no duplicate files
- ✅ Better accessibility (aria labels, semantic HTML, keyboard nav)
- ✅ Ambient glow background effect
- ✅ Auto-updating copyright year in footer

## Setup

```bash
npm install
npm run dev
```

## Deploy to Netlify

Push to your GitHub repo. Netlify will auto-deploy on every push.

Build command: `npm run build`  
Publish directory: `dist`

## Google Analytics

1. Go to https://analytics.google.com and create a free account for nomadiczack.com
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Open `index.html` and replace `G-XXXXXXXXXX` with your real ID (appears twice)
4. Push to GitHub — done!

## Add a real profile photo

1. Upload your photo to Google Drive and get a shareable link
2. Open `src/components/ProfileHeader.tsx`
3. Replace the `src` URL in the avatar `<img>` tag with your photo URL
4. Push and redeploy

## Location updates

Edit your current location in the Google Sheet linked in `src/App.tsx`.
The site will pick it up automatically on the next page load.
