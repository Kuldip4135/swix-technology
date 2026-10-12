# SWIX Website — Coding Guidelines

These guidelines define the intended architecture and development conventions for the SWIX website. When the implementation and this document disagree, either bring the code into compliance or update this document deliberately; do not let them drift silently.

## Tech Stack

- **Eleventy (11ty)** — static site generator. Layout and shared content are rendered into plain HTML at build time.
- **Nunjucks** — template language for pages, layouts, and partials.
- **Tailwind CSS v4 CLI** — utility-first styling with CSS-first theme configuration.
- **Vanilla JavaScript** — small progressive enhancements only. No SPA router or client-side framework.
- **Static output** — `dist/` contains deployable HTML, CSS, JavaScript, fonts, and images; the deployed site requires no application server.

Pin dependency versions in `package.json` and commit the lockfile. Do not change major versions or add a framework/component library without discussing the architectural impact first.

## Project Structure

```text
SWIX/
├── src/
│   ├── _data/                 # Shared site, navigation, and collection data
│   ├── _includes/
│   │   ├── layouts/           # base.njk and page.njk
│   │   └── partials/          # Reusable fragments such as header, footer, and cards
│   ├── assets/
│   │   ├── css/               # input.css
│   │   ├── js/                # Shared and page-specific behavior
│   │   ├── fonts/             # Self-hosted fonts, when applicable
│   │   └── images/            # Source images grouped by page or feature
│   ├── index.njk              # Home
│   ├── about.njk              # About
│   ├── services.njk           # Services
│   ├── jobs.njk               # Jobs and opportunities
│   └── contact.njk            # Contact
├── dist/                      # Generated output; do not edit by hand
├── eleventy.config.js         # Eleventy configuration
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── coding_guidelines.md
```

Keep `dist/` out of version control unless the chosen hosting workflow explicitly requires committed build output. Prefer a deployment pipeline that runs the production build and publishes `dist/` as an artifact.

## Commands

The scripts in `package.json` are the source of truth:

- `npm run dev` — run Eleventy and Tailwind in watch mode with local live reload.
- `npm run build` — create a clean production build in `dist/`.
- `npm run format` — format supported source files.
- `npm run lint` — run configured static checks, when linting is added.
- `npm run check` — run formatting, linting, and a production build, when those checks are configured.

Tailwind v4 uses the `@tailwindcss/cli` package. Its underlying command is:

```sh
npx @tailwindcss/cli -i ./src/assets/css/input.css -o ./dist/assets/css/style.css
```

Prefer the npm scripts in normal development so build order and watch processes remain consistent.

Automated tests are not required at this stage. Every change must still pass the manual verification checklist near the end of this document.

## Naming Conventions

- **Folders and files:** use `kebab-case`, such as `job-card.njk` and `nav-toggle.js`.
- **Pages:** keep one `.njk` entry file per route at the `src/` root where practical (`about.njk` becomes `/about/`).
- **Partials:** name the reusable fragment, such as `header.njk`, `footer.njk`, or `job-card.njk`.
- **Data files:** use `kebab-case` filenames and `camelCase` keys.
- **JavaScript:** name each module after its behavior, such as `mobile-nav.js` or `contact-form.js`.
- **CSS theme tokens:** use meaningful role-based names such as `--color-brand-primary`; avoid names tied to one page or a temporary visual value.

## Layouts and Partials

- Page templates use `layout: layouts/page.njk` in front matter.
- `page.njk` chains to `layouts/base.njk`. The base layout owns the document shell, metadata defaults, global header/footer wiring, and global assets.
- Render shared UI through files in `src/_includes/partials/`; do not copy shared markup between pages.
- Prefer build-time rendering. Do not fetch or inject headers, footers, navigation, or other layout-critical content with client-side JavaScript.
- Use the current `page.url` to render active navigation state at build time instead of adding JavaScript solely for link highlighting.
- A repeated content shape may use a partial and a data collection. Nunjucks includes inherit the current context, so loop variables can be read by the included partial.

`src/_includes/layouts/page.njk`:

```njk
---
layout: layouts/base.njk
---
<main id="main-content">
  {{ content | safe }}
</main>
```

`src/jobs.njk`:

```njk
---
layout: layouts/page.njk
---
{% for job in jobs %}
  {% include "partials/job-card.njk" %}
{% endfor %}
```

## Shared Data

- Put genuinely shared facts—such as the organization name, contact details, social links, and primary navigation—in `src/_data/`.
- Put repeated structured collections such as jobs, testimonials, or services in data files when editors or multiple templates benefit from the separation.
- Keep one-off page copy near its page unless moving it into data clearly improves reuse or maintainability.
- Treat “used more than once” as a prompt to consider centralization, not as an automatic abstraction rule.
- Never duplicate business-critical contact or legal information across templates.

## Styling with Tailwind CSS v4

Start `src/assets/css/input.css` with Tailwind's CSS import:

```css
@import "tailwindcss" source("../..");

@theme {
  --color-brand-primary: #000000;
  --font-sans: "Approved Font", ui-sans-serif, system-ui, sans-serif;
}
```

- Build mobile-first: use unprefixed utilities for the smallest layout, then add `sm:`, `md:`, and `lg:` variants as needed.
- Define brand colors, typography, spacing, shadows, and other design decisions as `@theme` tokens. Use system fonts when they are part of the approved typography stack.
- Avoid arbitrary values when a stable design token exists. A one-off arbitrary value is acceptable when it represents a genuinely unique requirement.
- Keep utility classes in templates by default. When markup repeats, first consider a Nunjucks partial. Introduce a custom CSS abstraction only when it makes the result clearer or handles styles utilities cannot express cleanly.
- Tailwind scans source files as text. Write complete class names rather than constructing them dynamically from fragments. Register additional or ignored source locations with `@source` when needed.
- Preserve visible focus styles. Never remove an outline without providing an equally clear replacement.
- Respect `prefers-reduced-motion` for nonessential animation.

The example token values above are placeholders; replace them with the approved design system values before production.

## JavaScript

- Use JavaScript for progressive enhancement, not for content or navigation required to use the site.
- Prefer semantic HTML and native browser behavior before adding a custom script.
- Keep modules small and behavior-focused. Load page-specific code only where it is needed.
- Select behavior hooks with `data-*` attributes rather than styling classes.
- Use `defer` or ES modules so scripts do not block HTML parsing.
- Keep controls keyboard-operable and synchronize relevant ARIA state, such as `aria-expanded`, when behavior changes.
- Handle missing elements safely so a script does not break unrelated functionality.
- Do not place secrets, private API keys, or trusted validation logic in client-side code.

## Accessibility

- Use semantic landmarks and heading order: one meaningful `<h1>`, followed by logically nested headings.
- Provide a keyboard-visible “skip to main content” link.
- Make every interactive element usable by keyboard. Use native `<button>` and `<a>` elements instead of clickable generic containers.
- Give informative images meaningful `alt` text and decorative images an empty `alt=""`.
- Associate every form control with a visible label. Connect validation messages programmatically and do not communicate errors by color alone.
- Maintain sufficient color contrast in default, hover, focus, active, and disabled states.
- Ensure dialogs, menus, and navigation toggles expose correct names, roles, states, and focus behavior.
- Test at 200% zoom and verify that content remains usable without horizontal page scrolling at common mobile widths.

## Images and Assets

- Store source images under `src/assets/images/<page-or-feature>/` and copy them through Eleventy passthrough configuration.
- Use descriptive `kebab-case` filenames.
- Provide explicit intrinsic `width` and `height` attributes on `<img>` elements to reduce layout shift.
- Use responsive `srcset` and `sizes` for images displayed at substantially different viewport widths.
- Prefer SVG for simple icons and logos, and AVIF or WebP for photographs when browser and content requirements allow. Keep an appropriate fallback when needed.
- Lazy-load below-the-fold images. Do not lazy-load the primary above-the-fold or likely Largest Contentful Paint image.
- Compress assets before deployment and avoid embedding large images directly in HTML or CSS.

## SEO and Metadata

- Give every page a unique, descriptive `<title>` and meta description.
- Set the canonical URL from the configured production site URL.
- Provide Open Graph metadata and an appropriate sharing image for public pages.
- Generate a sitemap and an intentional `robots.txt`; never rely on `robots.txt` to protect private content.
- Use meaningful link text and stable, human-readable URLs.
- Add structured data only when it accurately represents visible page content.
- Configure the deployment base path correctly if the site is hosted below a domain subdirectory, as can happen with GitHub Pages.

## Forms, Security, and Privacy

- Treat browser validation as a usability feature, not a security boundary. The form-processing service must validate and sanitize submitted data.
- Use HTTPS endpoints and an explicit allowlist for any third-party scripts, embeds, or form services.
- Collect only the personal information the site needs and link to the applicable privacy notice.
- Do not log sensitive form values to the browser console or include them in query strings.
- Add spam protection appropriate to the form provider without creating unnecessary accessibility barriers.
- Keep dependency additions minimal, reviewed, pinned through the lockfile, and updated deliberately.

## Manual Verification Checklist

Until automated testing is introduced, complete these checks for every meaningful change:

1. From a clean checkout with dependencies installed, run `npm run build` successfully.
2. Review the changed pages at mobile, tablet, and desktop widths.
3. Navigate all changed interactions using only the keyboard and confirm visible focus.
4. Check the browser console for errors and failed network requests.
5. Verify internal links, navigation state, form labels, validation feedback, and submitted form behavior where applicable.
6. Confirm images have appropriate dimensions, alternative text, responsive behavior, and loading priority.
7. Inspect the generated `dist/` page—not only the development template—to confirm metadata, asset paths, and static rendering.
8. Spot-check a production build with browser accessibility and performance tools before deployment.

Record any intentionally skipped check in the change description, together with the reason.

## Do and Don't

**Do**

- Render core content, layout, and navigation at build time.
- Centralize stable shared facts and reusable structured content.
- Use Tailwind v4 theme tokens and mobile-first utilities.
- Build accessible behavior on semantic HTML.
- Verify both the source templates and the generated production output.

**Don't**

- Edit generated files in `dist/` by hand.
- Copy and paste shared layout markup across pages.
- Construct Tailwind class names dynamically from partial strings.
- Add client-side dependencies for behavior the platform already provides.
- Commit secrets or expose trusted validation logic in browser code.
- Add another framework or make a major dependency upgrade without discussing the tradeoffs first.
