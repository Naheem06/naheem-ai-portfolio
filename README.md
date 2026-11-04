# Daneesh Naheem — AI Engineer Portfolio

A responsive React portfolio highlighting enterprise AI engineering, computer vision, generative AI, and data analytics. The existing personal projects, internships, contact details, languages, and interests are retained alongside the latest resume experience.

## Run locally

```bash
npm install
npm start
```

If the system npm shortcut is unavailable after installation, run:

```bash
node node_modules/react-scripts/bin/react-scripts.js start
```

## Production build

```bash
npm run build
```

The static output is generated in `build/`. The GitHub Actions workflow supplies `PUBLIC_URL` from GitHub Pages so scripts, styles, the favicon, and resume links work under the repository subdirectory.

## Publish the existing repository on GitHub Pages

The target repository is `Naheem06/naheem-portfolio`. Its expected Pages address is `https://naheem06.github.io/naheem-portfolio/` unless a custom domain is configured.

1. On GitHub, open the repository and select **Settings → Pages**.
2. Under **Build and deployment**, change **Source** to **GitHub Actions**. Do not select a starter template; this project already includes its workflow.
3. Upload the updated `.github/`, `src/`, and `public/` folders, together with `package.json`, `package-lock.json`, `.gitignore`, `postcss.config.js`, `tailwind.config.js`, and `README.md`. Preserve the folder structure. Do not upload `node_modules/`, `.cache/`, or `build/`.
4. Commit the update to `main`.
5. In **Actions**, open **Deploy portfolio to GitHub Pages** and wait for the deployment to succeed. If necessary, select **Run workflow** on `main`.
6. Open **Settings → Pages → Visit site**, then check the website and resume download in a private browser window.
7. Optionally update the repository's **About** website link to the Pages address.

Future pushes to `main` build and deploy automatically. The committed lockfile makes the workflow's `npm ci` installation reproducible. No personal access token or email credentials are required.

The workflow is `.github/workflows/deploy-pages.yml`. The existing `npm run deploy` script is a separate, older `gh-pages` branch method and is not needed for this workflow. No live deployment was performed from this local checkout.

## Update content

- `src/data.json`: profile, work history, projects, grouped skills, education, and contact links.
- `public/Daneesh-Naheem-AI-Engineer-Resume.pdf`: latest downloadable resume, copied unchanged from the supplied PDF.
- `src/styles.css`: colors, typography, components, and responsive layouts.
- `src/components/Projects.jsx`: project categories, schematics, filters, and expandable technical details.
- `src/components/Chatbot.jsx`: local, rule-based profile assistant. It reads the same portfolio data; no API key or external AI service is needed.

The school percentages are 87% and 77%, confirmed from the supplied resume. The B.E. qualification displays First Class with Distinction, without a CGPA. Kodnest training is marked completed in 2025, following the resume.

Project visuals are illustrative schematics, rather than product screenshots. Professional project descriptions use the supplied resume; public repository links are shown only where one was already provided. No accuracy figures, business metrics, or testimonials were invented.

## Design references

The content hierarchy was informed by these professional portfolios:

- [Eugene Yan](https://eugeneyan.com/about/): clear professional positioning and a readable experience history.
- [Chip Huyen](https://huyenchip.com/): direct introduction and emphasis on practical AI work.
- [Daniel Simpson](https://danielbsimpson.github.io/): project-led browsing and separation of professional and personal work.

The design uses ivory, deep green, and sage, with Manrope and IBM Plex Mono fonts and system fallbacks. Navigation, project filters, detail panels, and the assistant support keyboard interaction; reduced-motion preferences are respected.

An original-source backup is stored locally at `.cache/original-portfolio.zip`.
