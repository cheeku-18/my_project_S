# Our Story ❤ — Proposal Website

A single-page, fully responsive romantic proposal site. Pure HTML/CSS/JS +
Tailwind (via CDN) — **no build step**, so it deploys to Netlify instantly.

## What's inside

- `index.html` — every "page" as a section on one scrolling site (Home, About
  Her, Memories, Timeline, Love Letter, Reasons, Future Dreams, Quiz, Voice
  Notes, Surprise, Proposal, Contact), with a fixed nav that jumps between them.
- `css/style.css` — the design system: colors, fonts, animations.
- `js/main.js` — **all editable content lives in the `CONFIG` object at the
  top of this file.** Change names, the date you met, gallery captions,
  timeline events, the 50 reasons, quiz questions, dreams, and voice notes
  there — everything on the page rebuilds itself from it.

## 1. Personalize it (do this first)

Open `js/main.js` and edit the `CONFIG` object:

- `names` — her name / your name (also update "Priya" / "Arjun" text
  directly in `index.html`'s hero, love letter, and proposal sections —
  search for those names and swap them).
- `firstMetISO` — the exact date/time you met, powers the countdown timer.
- `qualities`, `timeline`, `reasons`, `dreams`, `quiz`, `voiceNotes`,
  `gallery` — arrays of plain objects, edit freely, add or remove entries.
- `gallery[i].img` — paste a path like `assets/photos/us-1.jpg` (put your
  photos in a new `assets/photos/` folder) to replace the placeholder tiles
  with real pictures.
- `voiceNotes[i].src` — paste a path like `assets/audio/note1.mp3` to make a
  voice note actually playable.
- Background music: in `initMusic()` inside `main.js`, set
  `audio.src = "assets/audio/background-music.mp3"` and add that file.

The full love letter text lives directly in `index.html` inside
`#letter-body` — edit it there since it's long-form prose.

## 2. Preview locally

No install needed. Either:
- Open `index.html` directly in a browser, or
- Run a tiny local server (recommended, avoids any file:// quirks):
  ```bash
  npx serve .
  # or
  python3 -m http.server 8080
  ```

## 3. Deploy to Netlify (free, ~2 minutes)

**Option A — drag & drop (fastest):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `our-story` folder onto the page
3. Done — you'll get a live `.netlify.app` URL instantly. Rename the site
   under Site settings → Change site name for a nicer link.

**Option B — connect a Git repo:**
1. Push this folder to a new GitHub repo
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo
3. Build command: *(leave blank)* — Publish directory: `.`
4. Deploy

## 4. Notes on the built-in features

- **Dark/Light mode** — toggle in the nav, saved in the visitor's browser.
- **Custom cursor** — desktop only; automatically disabled on touch devices.
- **Contact form** — already wired for **Netlify Forms** (`data-netlify="true"`
  in the footer form). No extra setup needed once deployed on Netlify —
  submissions show up under Site → Forms in your dashboard.
- **Surprise page** — unlocked by clicking the three hearts in
  small → medium → large order, three times in a row.
- **Proposal page** — the "No" button playfully dodges the cursor; "Absolutely
  Yes" triggers confetti, fireworks, and a celebration screen.
- **SEO** — the page ships with `noindex, nofollow` since this is a private
  page for one person. Remove that meta tag in `index.html` if you'd like it
  to be publicly discoverable/searchable instead.

## 5. A few ideas if you want to go further

- Add real photos to `assets/photos/` and audio to `assets/audio/`.
- Swap the placeholder ring SVG in the Proposal section for a photo of the
  real ring.
- Change the accent palette in `css/style.css` (`:root` variables at the top)
  if you'd like a different color mood.

Good luck. 💐
