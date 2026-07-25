# AURA Fitness & Wellness Club — Static Website

Plain HTML / CSS / JS build (no framework, no build step). Open
`index.html` in a browser and it works — or deploy the whole folder as-is
to any static host.

## Folder structure

```
aura-static/
  index.html          All page markup, links css/style.css and js/script.js
  css/
    style.css          All styling (colors, layout, animations, responsive rules)
  js/
    script.js           Scroll-reveal animations, mobile menu toggle, waitlist form
  images/
    aura-logo.png        Cropped circular AURA logo (used in nav, hero, footer)
```

## Run it

No build tools needed. Either:
- Double-click `index.html` to open it directly in a browser, or
- Serve it locally for the full experience (some browsers restrict things
  like `fetch` under `file://`):
  ```bash
  npx serve .
  # or
  python3 -m http.server 8000
  ```

## Deploy it

Drag the whole folder into **Netlify Drop** (netlify.com/drop), or push it
to a repo and enable **GitHub Pages** — either gives you a live URL in
minutes since there's nothing to build.

## Editing content

- **Pricing** — in `index.html`, search for `mem-card` (4 plan cards:
  1 Month / 3 Months / 6 Months / Annual).
- **Instagram link** — in `index.html`, search for `instagram.com`.
- **Colors** — all defined once as CSS variables at the top of
  `css/style.css` (`--emerald`, `--gold`, `--cream`, `--beige`, etc.) —
  change them there and they update everywhere.
- **Logo** — replace `images/aura-logo.png` with a new file of the same
  name to swap the logo everywhere it appears.
