# Portfolio Website — alexkodweiss.me

Personal portfolio of Alex Kodweiß. Built with **Vue 3 + Vite + Tailwind CSS v4**, hosted on **GitHub Pages**, domain via **Porkbun**.

- **Live site:** https://alexkodweiss.me
- **Repository:** https://github.com/alexkodweiss/portfolio-website (remote `origin`)
- **Hosting:** GitHub Pages (auto-deployed by GitHub Actions on every push to `main`)
- **Old repository:** `git@gitlab.com:prnzlsr1/portfolio-website.git` (remote `gitlab`, previous GitLab Pages hosting)

---

## Releasing a new version

After making local changes, publishing is one step. The workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) automatically builds the site and deploys it to GitHub Pages on every push to `main`.

### Option A — one command (quickest)

```bash
npm run deploy
```

This stages everything, commits with the message `"Update site"`, and pushes — which triggers the build + deploy.

### Option B — manual (use when you want a descriptive commit message)

```bash
git add -A
git commit -m "Describe what changed"
git push
```

### What happens next

1. The push starts a workflow run at **GitHub → Actions**.
2. The `build` job runs `npm ci` + `npm run build`, then the `deploy` job publishes the `dist/` output to GitHub Pages.
3. The site is usually live in **~2–3 minutes**.

### Verify the release

1. Confirm the workflow run went **green** (GitHub → Actions). If it failed, open the job log.
2. **Hard-refresh** the site to bypass cache: `Ctrl + Shift + R` on https://alexkodweiss.me.
3. For metadata / social-preview changes, re-check with a validator (e.g. https://www.opengraph.xyz) since link previews are cached externally.

> **Note:** errors only surface when the pipeline runs, not locally during commit — so always glance at the workflow status after deploying. Run `npm run build` locally first if you want to catch build errors before pushing.

---

## Local development

```bash
npm install      # first time, or after dependency changes
npm run dev      # start the dev server (hot reload) at http://localhost:5173
npm run build    # produce a production build in dist/ (what CI runs)
npm run preview  # serve the production build locally to sanity-check it
```

---

## Project notes

- **Source vs. deployed assets:** working/raw files live in `_resource/` (git-ignored — keep your own backups). Everything the live site needs is in `src/` and `public/`.
- **3D model viewers:** the `ModelViewer` component flips through pre-rendered JPG frames in `public/models/<name>/` (`frame000.jpg`, `frame001.jpg`, …). To update a model, record a steady-rotation video, extract frames with ffmpeg, drop them into the model's folder, and set `:frames` on the component to the new count.
- **Autoplay videos:** `public/media/video/` — keep them web-optimized (re-encode oversized exports; ~1080p at a sane bitrate). The `AutoplayVideo` component plays each video once its bottom edge scrolls into view.
- **Fonts & icons** are self-hosted (Inter in `public/fonts/`, Boxicons via npm) — no third-party CDN calls, which keeps the privacy footprint minimal.

## SPA routing on GitHub Pages

The app uses Vue Router in history mode. A CI-generated `404.html` (a copy of `index.html`) makes deep links like `/imprint` and `/privacy-policy` work on refresh.
