# Static Export

A fully static, backend-free build of the AI Finance Transformation Hub.

## Build

```bash
bun run build:static
```

This outputs `dist-static/` containing `index.html` plus hashed JS/CSS assets.

## Run

Open `dist-static/index.html` directly in a browser, or serve the folder
with any static host (Netlify, S3, GitHub Pages, `python3 -m http.server`, etc).

Navigation uses hash routing (`/#/understand`, `/#/upskill`, …) so it works
from the local filesystem with no server required.

## What's included

- All four pages (Understand, Upskill, Explore, Champions) and the home page
- Global search overlay (operates on the bundled `src/lib/data.ts`)
- All filters, the quiz, and "What's next" navigation
- The full design system, fonts, and the uploaded logo asset

## What's excluded

- No SSR, no server functions, no auth, no API calls
- No analytics or error reporting endpoints

The Lovable project itself is untouched — keep editing as usual; rerun
`bun run build:static` whenever you want a fresh static export.
