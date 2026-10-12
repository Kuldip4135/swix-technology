# SWIX Website Theme — The Career Edit

## 1. Scope of This Document

This document defines the visual theme, interaction principles, and Home-page layout for the first SWIX website concept.

It does not define the final layouts for the About, Services, or Contact pages. Those pages will inherit the visual system after the Home-page direction is approved.

The goal is a professional recruitment website with a distinct editorial identity—not a generic SaaS landing page, résumé-builder template, or AI-generated collection of cards.

## 2. Creative Direction

### Theme name

**The Career Edit**

### Central idea

A successful job search is not one magical click. It is a sequence of careful edits, relevant applications, human conversations, and prepared next steps.

The SWIX website should feel like an expert career dossier being actively shaped: strong typography, structured pages, visible annotations, process markers, and confident human guidance.

### One-sentence design brief

Create a modern editorial recruitment site that combines the confidence of a specialist consultancy, the clarity of a well-edited résumé, and the forward motion of an organized job search.

### Desired impression

Within the first few seconds, visitors should think:

- “This is a serious professional team.”
- “They understand why job searching is exhausting.”
- “Their process feels organized and human.”
- “This does not look like another automatic résumé generator.”
- “I know what to do next.”

## 3. Reference Research

The direction is informed by the following live references. These are inspiration points, not templates to copy.

### [creative/people](https://www.creativepeopleinc.com/)

Useful ideas:

- A human-first message leads the experience.
- Large typography and portraits establish personality without decorative clutter.
- Candidate and employer actions are visible immediately.
- The design uses a limited palette confidently.

What SWIX should not copy:

- The exact hero composition, wording, colors, or portrait treatment.
- Its extensive agency divisions and content density.

### [Bespoke Careers](https://www.bespokecareers.com/)

Useful ideas:

- The Home page immediately recognizes two different audiences: candidates and employers.
- Process explanations turn an intangible recruitment service into something concrete.
- Real people and outcomes create stronger trust than decorative technology graphics.
- “Dream role” language is balanced with a practical explanation of how support works.

What SWIX should not copy:

- A job-search interface, because SWIX does not have a public job board in the first release.
- Unsupported statistics, placement counts, or employer claims.

### [UNKNOWN](https://www.weareunknown.io/)

Useful ideas:

- Oversized editorial typography creates authority without relying on card grids.
- Strong negative space makes a small amount of copy feel intentional.
- The site positions recruitment as a human growth story instead of an administrative service.

What SWIX should not copy:

- The near-total black palette or highly abstract messaging.
- Typography so oversized that service clarity or accessibility suffers.

### [Le Bureau des Talents](https://www.bureaudestalents.com/)

Useful ideas:

- The recruiter/candidate split is clear at the top of the page.
- A numbered process helps users understand what happens after contact.
- Technology is presented as supporting recruitment expertise rather than replacing people.
- Proof and calls to action sit close to the value proposition.

What SWIX should not copy:

- Neon gradients, glowing borders, or its exact headline treatment.
- Client logos or ratings until SWIX has verified permission and evidence.

### [The Cape Agency on Awwwards](https://www.awwwards.com/sites/the-cape-agency-2)

Useful ideas:

- Geometric editorial illustration can make a professional recruiting company feel original.
- Large type, bold blocks, and limited color create a memorable system.

What SWIX should not copy:

- Its illustrations, layouts, or color combinations.
- Motion that competes with comprehension.

## 4. Original SWIX Design Thesis

SWIX will not compete visually through more gradients, more cards, or more animation. It will compete through disciplined art direction.

The visual language combines:

1. **Editorial scale** — large, expressive headlines with precise supporting copy.
2. **Career-document cues** — ruled lines, margin notes, page numbers, check marks, tabs, and restrained annotation marks.
3. **Human evidence** — real team imagery, verified candidate stories, and language that shows judgment and care.
4. **Visible progression** — numbered steps and directional rules that make the service feel organized.
5. **Purposeful asymmetry** — layouts that feel designed rather than dropped into equal rounded cards.

The result should resemble a premium independent magazine or consultancy report translated into a responsive website.

## 5. Anti-Generic Rules

Do not use:

- A centered hero with a gradient blob behind a laptop or dashboard mockup.
- A repeated three-card or four-card grid for every section.
- Glassmorphism, glowing borders, or excessive shadows.
- Random floating shapes with no connection to the content.
- Generic line icons inside colored circles.
- Stock photographs of handshakes, call-center headsets, office high-fives, or people pointing at screens.
- Fake job-search dashboards, fake metrics, fake client-logo strips, or fake testimonials.
- AI imagery of people, résumés, offices, documents, or success celebrations presented as real.
- Typewriter animations that repeatedly erase the core message.
- Scroll hijacking, custom cursors, or animation that delays access to content.
- A different visual gimmick in every section.
- Rounded rectangles around every piece of content.

If a section works only because it is placed inside a card, redesign its hierarchy first.

## 6. Visual Identity

### 6.1 Color palette

The base should feel warm and tactile, while the action color should feel decisive and digital.

| Role | Token | Hex | Usage |
|---|---|---:|---|
| Paper | `--color-paper` | `#F3F0E7` | Primary page background |
| Soft paper | `--color-paper-light` | `#FFFCF6` | Elevated document surfaces |
| Ink | `--color-ink` | `#111820` | Primary text and dark sections |
| Muted ink | `--color-ink-muted` | `#58616A` | Supporting copy and metadata |
| Rule | `--color-rule` | `#C9C4B8` | Borders, dividers, and document lines |
| Action blue | `--color-action` | `#2349D8` | Primary buttons, links, and focus states |
| Signal lime | `--color-signal` | `#C9F269` | Highlights, labels, and selected states with dark text |
| Editorial coral | `--color-coral` | `#E96A4B` | Annotations and small emphasis only |

Rules:

- Paper and ink should account for most of the interface.
- Action blue is the only primary CTA color.
- Signal lime is an editorial highlighter, not a background for long text.
- Coral is used sparingly for hand-drawn-style notes, counters, or small emphasis.
- Never place white body text on signal lime or coral without verified accessible contrast.
- Validate every text/background combination against WCAG 2.2 AA before implementation.

### 6.2 Typography

#### Display type

**Instrument Serif** or an approved equivalent.

Use for:

- Hero headline.
- Major section statements.
- Pull quotes and success-story outcomes.

Its role is to add editorial character and a human voice. Do not use it for controls, labels, or dense body copy.

#### Interface and body type

**Manrope** or an approved equivalent.

Use for:

- Navigation.
- Body copy.
- Buttons and form controls.
- Process labels, metadata, and annotations.

#### Type scale

- Hero display: `clamp(3.75rem, 8vw, 8.5rem)` with tight line-height around `0.9–0.96`.
- Section display: `clamp(2.5rem, 5vw, 5.5rem)`.
- Section heading: `clamp(1.75rem, 3vw, 3rem)`.
- Lead copy: `clamp(1.125rem, 1.5vw, 1.5rem)`.
- Body: `1rem–1.125rem`, minimum line-height `1.55`.
- Labels: `0.75rem–0.875rem`, uppercase only for short metadata.

Typography rules:

- Prefer sentence case.
- Keep paragraphs narrow: approximately 55–70 characters per line.
- Use oversized text selectively; not every heading needs to be enormous.
- Avoid artificial italics and excessively light weights.
- Use real typographic quotation marks and consistent résumé spelling.

### 6.3 Grid and spacing

- Desktop canvas: fluid width with a `1440px` maximum.
- Content grid: 12 columns.
- Desktop gutters: `48–72px` depending on viewport.
- Tablet gutters: `32px`.
- Mobile gutters: `20px`.
- Section spacing: generous, generally `120–180px` desktop and `72–104px` mobile.
- Base spacing unit: `4px`, with most layout gaps on an 8px rhythm.

Use visible grid tension:

- Headlines may span 7–9 columns.
- Supporting copy may begin one or two columns later instead of aligning mechanically.
- Images can break the content grid but must not touch viewport edges accidentally.
- Dividers should align across sections to make the page feel like one continuous document.

### 6.4 Shape language

- Default surfaces are rectangular.
- Small-radius corners: `8–12px` for buttons, form fields, photographs, and document sheets.
- Pills are reserved for short status labels and location tags.
- Use 1px rules and occasional 2px emphasis lines instead of boxes around everything.
- One recurring folded-corner or tab detail may be used for document sheets.

### 6.5 Iconography and marks

Avoid a general-purpose icon library in the Home-page storytelling.

Use a small custom mark system:

- Check mark — reviewed or approved.
- Arrow — movement or next step.
- Bracket — grouping related information.
- Underline — editorial emphasis.
- Registration cross — process position.
- Page number — sequence and progress.

Marks should look precise rather than cartoonish. Decorative marks receive no accessible name.

## 7. Imagery Direction

### Preferred imagery

- Real SWIX team portraits photographed with direct, calm expressions.
- Candidates or professionals shown in natural environments with permission.
- Close crops of hands editing a document, preparing notes, or discussing a role.
- Authentic screenshots or redacted documents only when permission and privacy allow.
- Simple commissioned geometric compositions based on pages, tabs, routes, and annotations.

### Photography treatment

- Natural or softly directional light.
- Neutral backgrounds or real working environments.
- Editorial crop, not corporate headshot framing everywhere.
- Mostly warm color, with occasional high-contrast black-and-white images.
- Consistent grain and color treatment if multiple photographers are used.

### When real photography is unavailable

Use abstract document-based compositions created from HTML/CSS/SVG: stacked résumé sheets, search tabs, tracked application rows, and interview notes. Do not substitute AI-generated people.

## 8. Motion and Interaction

Motion should communicate progress and editorial sequencing.

Approved motion:

- A single underline drawing beneath a key phrase on first reveal.
- Document sheets shifting by a few pixels as the hero enters.
- Process rules extending as steps enter the viewport.
- Application-status labels changing from “identified” to “prepared” to “submitted” in a short illustrative sequence.
- Subtle image reveal using clipping rather than opacity-only fades.
- Button arrows translating `2–4px` on hover.

Timing:

- Micro-interactions: `140–220ms`.
- Section reveals: `350–600ms`.
- Use ease-out motion and short stagger intervals.

Rules:

- Content is visible and usable without animation.
- No infinite decorative motion near body copy.
- No scroll-jacking or pinned sequence required to understand the service.
- Honor `prefers-reduced-motion` by removing nonessential transforms and transitions.
- Mobile motion should be simpler than desktop motion.

## 9. Home Page Narrative

The Home page follows a deliberate story:

> Recognition → relief → method → proof → action

The visitor first sees their problem, then understands how SWIX reduces the burden, then sees the process and human expertise, and finally receives a credible invitation to contact the company.

## 10. Home Page Layout

### Section 1 — Header

#### Composition

- Left: SWIX wordmark.
- Center/right: Home, About, Services, Contact.
- Utility action: “For employers” as a restrained text link.
- Primary action: “Get career support.”

#### Behavior

- Transparent over paper at the top.
- Becomes a compact paper-colored bar with a bottom rule after scrolling.
- No oversized mega-menu in the first release.
- Mobile navigation opens as a full-height editorial index, not a small floating dropdown.

### Section 2 — Hero: “Your search, professionally edited”

#### Desktop composition

- 12-column asymmetric layout.
- Left 7 columns: eyebrow, display headline, lead copy, and two actions.
- Right 5 columns: a layered “career dossier” composition.
- A thin vertical rule separates message and evidence without forming two equal cards.

#### Recommended content direction

Eyebrow:

> Market experience · USA · UK · Canada

Headline territory:

> Less searching. Better applications. Stronger interviews.

Supporting copy territory:

> Human-led résumé writing, managed job-search support, and practical interview preparation—built around your real experience and career goals.

Primary CTA:

> Get career support

Secondary CTA:

> See how it works ↓

Employer link:

> Hiring talent? Talk to SWIX ↗

Final copy will be written and approved separately; these lines establish hierarchy and tone.

#### Career dossier visual

Create three overlapping document sheets using semantic HTML and CSS/SVG:

1. **Résumé / Edited** — checked sections and an “Human reviewed” annotation.
2. **Applications / In progress** — a short list of redacted role rows with status markers.
3. **Interview / Prepared** — a concise preparation checklist.

Add one lime tab reading “YOUR NEXT MOVE” and one coral proofreader-style mark. The composition must remain illustrative and must not look like a functioning dashboard.

### Section 3 — Audience fork

Purpose: acknowledge the two primary journeys without duplicating the entire site.

Composition:

- One full-width ruled band split approximately 65/35 rather than equal cards.
- Larger candidate route: “I’m building my career.”
- Smaller employer route: “I’m building a team.”
- Each route has one sentence and an arrow link.
- On mobile, stack as two bordered rows.

### Section 4 — Problem/Solution Ledger

Section label:

> 01 / What gets in the way

Display statement:

> The job search is already work. It should not become a second full-time job.

Composition:

- Four horizontal ledger rows instead of cards.
- Each row contains: number, problem, “SWIX edit” annotation, and solution.
- Alternate the text weight rather than alternating background colors.
- Use one supporting document crop or genuine editorial photograph across two rows.

Rows:

1. **Generic résumé output** → experienced human writing with AI-assisted checks.
2. **Hours across job platforms** → authorized role search, applications, and tracking.
3. **Interview uncertainty** → guided preparation and mock interviews.
4. **Losing momentum** → an agreed plan and ongoing support.

The language must never shame candidates for using AI or struggling with the process.

### Section 5 — Managed Journey

Section label:

> 02 / One organized process

Composition:

- A horizontal editorial timeline on desktop.
- A vertical ruled sequence on mobile.
- Large step numbers form part of the layout, not icons in circles.

Steps:

1. **Listen** — understand goals, experience, constraints, and target roles.
2. **Edit** — shape the résumé and candidate positioning.
3. **Search** — identify relevant opportunities against agreed criteria.
4. **Apply** — prepare and submit authorized applications transparently.
5. **Prepare** — practise interviews and coordinate next steps.
6. **Support** — maintain guidance through the agreed service period.

Add a clear note:

> You stay informed and in control. SWIX does not invent experience, impersonate candidates, or promise an outcome.

### Section 6 — Human Intelligence

Section label:

> 03 / Human judgment leads

Display statement:

> AI can check a line. People understand a career.

Composition:

- Dark ink background.
- Large serif statement spanning most of the section.
- A real SWIX team portrait or a close editorial crop occupies the lower-right portion.
- Three small annotations explain the division of responsibility.

Annotations:

- Experienced people shape the story and make final decisions.
- AI may assist with consistency, proofreading, and comparison.
- Candidate facts remain accurate, reviewed, and approved.

This section is a key differentiator and must not resemble an “AI-powered” product advertisement.

### Section 7 — Service Index

Section label:

> 04 / Choose where you need support

Composition:

- A numbered typographic index, not a grid of service cards.
- Service names occupy the left 7 columns.
- A short explanation and action appear on the right.
- Hover or focus may reveal a small related image/document crop, but the content remains readable without hover.

Entries:

1. Résumé writing and review.
2. Managed job search and applications.
3. Mock interviews and interview guidance.
4. Ongoing career support.
5. Employer staffing and recruitment.

### Section 8 — Verified Success Story

Section label:

> 05 / A move worth celebrating

Composition:

- One story receives generous space; do not use a carousel of tiny testimonials.
- Left: large quotation or outcome statement.
- Right: compact before/support/outcome timeline.
- Optional real candidate image or redacted offer detail with explicit permission.
- Include a clear disclosure if identifying details are withheld.

Content requirements:

- Candidate challenge.
- Support SWIX provided.
- Candidate effort and participation.
- Verified outcome.
- Consent-approved quote.

If no approved story exists, replace the story with an honest invitation—“Your next move starts with a conversation”—and do not imply a placement occurred.

### Section 9 — Employer Interlude

Purpose: retain the staffing audience without interrupting the candidate-led narrative.

Composition:

- Compact signal-lime band with dark ink text.
- One statement, one supporting sentence, one text-arrow action.
- No employer-logo wall unless every logo is approved.

Content direction:

> Hiring should feel considered, not crowded.

CTA:

> Discuss your hiring needs ↗

### Section 10 — Final Contact CTA

Composition:

- Return to paper background.
- Oversized two-line serif statement.
- A coral annotation points to the primary action.
- Contact options remain clear beneath the button.

Content direction:

> Your next move deserves more than another generic application.

Actions:

- Primary: “Start a conversation.”
- Secondary: verified email address.

### Section 11 — Footer

Composition:

- Dark ink background.
- Large SWIX wordmark along the bottom edge.
- Four-column information area: Navigate, Candidates, Employers, Contact.
- USA · UK · Canada may be shown as markets the team has worked with, never as exclusive service regions.
- Privacy link and legal line remain visible and readable.

## 11. Responsive Behavior

### Desktop

- Preserve asymmetry and generous negative space.
- Allow select headlines and images to cross grid columns intentionally.
- Keep pointer-dependent flourishes optional.

### Tablet

- Reduce headline scale before collapsing the composition.
- Change the 7/5 hero into approximately 6/6.
- Keep ledger rows two-column where readable.

### Mobile

- Stack the hero copy before the dossier visual.
- Keep primary action visible without requiring horizontal button rows.
- Turn horizontal processes into vertical ruled sequences.
- Remove decorative overlap that obscures text.
- Maintain at least `44px` touch targets.
- Do not hide essential explanations behind accordions solely to shorten the page.

## 12. Accessibility Direction

- Target WCAG 2.2 Level AA.
- Use action blue—not color alone—to identify interactive elements.
- Provide persistent visible focus with a high-contrast outline and offset.
- Keep decorative annotation marks hidden from assistive technology.
- Provide meaningful alternative text for real editorial images.
- Keep document illustrations decorative unless they convey information not present in text.
- Ensure the oversized display type reflows without clipping at 200% zoom.
- Respect reduced-motion preferences.
- Do not require hover to discover content or actions.

## 13. Content Density and Rhythm

Use three levels of pace:

1. **Fast recognition** — hero and audience fork.
2. **Measured explanation** — problem ledger, process, and human-intelligence sections.
3. **Emotional proof and action** — success story and final CTA.

Avoid placing more than two dense explanatory sections back to back. Follow text-heavy content with a strong image, typographic statement, or breathing space.

## 14. Component Principles

The Home page should need a small, intentional component set:

- Global header.
- Primary and secondary actions.
- Editorial label (`01 / Label`).
- Audience route row.
- Problem/solution ledger row.
- Process step.
- Service index row.
- Success-story feature.
- Employer interlude.
- Global footer.

These components may be reused, but repeated content must not make every section visually identical.

## 15. Implementation Notes

- Build the document compositions with HTML/CSS/SVG rather than a heavy canvas or 3D library.
- Use Tailwind v4 theme variables matching the approved tokens.
- Self-host approved font files when licensing permits; use robust system fallbacks.
- Keep motion in lightweight vanilla JavaScript and CSS.
- Use CSS Grid for major composition and Flexbox for small alignment groups.
- Keep the semantic DOM order logical even when desktop elements are placed asymmetrically.
- Avoid dependencies solely for reveal animation, sliders, or decorative effects.
- Optimize the hero so its design does not delay Largest Contentful Paint.

## 16. Content and Asset Requirements Before Build

The following must be supplied or approved before the visual design is considered final:

- SWIX logo or approval to design a temporary wordmark.
- Approved brand colors, if they already exist.
- Whether Instrument Serif and Manrope fit the brand.
- Real team photography or approval to begin with document-based artwork.
- One verified success story and written publication consent, if it will appear at launch.
- Final candidate and employer CTA priorities.
- Verified email and contact details.
- Exact public scope of managed applications and ongoing support.

## 17. Home Page Approval Checklist

Approve the theme only if:

1. The Home page does not resemble a generic SaaS or AI résumé-builder template.
2. A visitor understands the offer without relying on animation.
3. Candidate and employer routes are both clear, with candidate support as the primary narrative.
4. The problem–solution section explains the real burden SWIX removes.
5. Human expertise is visually and verbally more prominent than AI.
6. Managed applications are described transparently and do not imply impersonation.
7. The page includes no invented results, reviews, clients, or success stories.
8. The layout remains distinctive and usable on mobile.
9. Color, type, focus, motion, and image treatment meet the accessibility direction.
10. Every decorative decision supports the “Career Edit” concept.

## 18. Decision Summary

- **Direction:** editorial career dossier.
- **Mood:** expert, human, organized, optimistic.
- **Base:** warm paper and dark ink.
- **Primary accent:** decisive blue.
- **Supporting accents:** signal lime and restrained coral.
- **Typography:** expressive serif display plus precise sans-serif body.
- **Signature device:** layered career documents, editorial annotations, and numbered process rules.
- **Primary audience:** candidates; employers receive a clear secondary route.
- **Home narrative:** recognition → relief → method → proof → action.
- **Explicit rejection:** generic card grids, AI imagery, fake dashboards, gradient blobs, and decorative over-animation.
