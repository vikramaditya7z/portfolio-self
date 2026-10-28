# SIGNAL / NOISE — Implementation Roadmap & Milestone Plan

> **Document Class:** Engineering Roadmap & Milestone Delivery Plan  
> **Status:** Planning Blueprint (Execution commences upon Goal 0 approval)  
> **Governing Workflow:** Antigravity `/goal` Protocol

---

## 1. Architectural Strategy & Execution Principles

Implementation of SIGNAL / NOISE will follow a disciplined, phased roadmap using Antigravity's `/goal` workflow. Each goal represents a self-contained, reviewable milestone with explicit boundaries:
- **No Scope Drift:** A goal executes only its approved scope.
- **Verification First:** No milestone is complete until automated checks, type checking, and visual audits pass.
- **Explicit Review Gate:** The Product Owner reviews each milestone before the next is initiated.
- **Zero Premature Deployment:** No Git commits, pushes, or public deploys occur without explicit approval.

---

## 2. Milestone Overview Matrix

| Milestone | Title | Focus Area | Primary Deliverables |
| :--- | :--- | :--- | :--- |
| **GOAL 1** | Project Scaffolding, Design Tokens & The Interruption Hero | Core infrastructure, typography & hero layout | Vite + React + TS setup, Tailwind tokens, static/kinetic hero composition, navigation bar. |
| **GOAL 2** | Motion Engine & Tectonic Section Transitions | Kinetic choreography & light/dark orchestration | Motion for React choreography, timed hero entrance (1.5s), dynamic nav theme switching, reduced-motion fallbacks. |
| **GOAL 3** | Selected-Project Editorial Spreads & Custom Visuals | Core portfolio substance (FinPilot, CallQ, Monte Carlo, Kalshi) | 4 custom project layouts, interactive SVG incident pipeline, evidence tree, GBM trajectory canvas/plot, verified links. |
| **GOAL 4** | The Thesis, Engineering Principles & Closing Transmission | Narrative continuity & contact terminal | Section 02 (The Thesis), Section 04 (5 Engineering Laws), Section 05 (Closing Transmission), structured content schemas. |
| **GOAL 5** | Responsive Polish, Accessibility (WCAG AA), Perf (60fps) & Deploy | Production hardening & launch readiness | Touch optimization, screen reader audit, lighthouse optimization, OG meta tags, build verification. |

---

## 3. Detailed Milestone Specifications

---

### GOAL 1 — Foundation, Design Tokens, Navigation & The Interruption Hero

#### 1. Scope
Scaffold the clean React + TypeScript + Vite + Tailwind CSS environment, establish centralized design tokens, build the adaptive editorial navigation bar, and implement the high-impact Section 01 Hero layout.

#### 2. Deliverables
- `package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.ts` configured with strict typing and custom design tokens.
- Font integration for Space Grotesk, Inter, and IBM Plex Mono.
- `src/styles/tokens.ts` and CSS custom properties implementing the Paper/Ink/Signal Orange palette.
- `src/components/layout/Navbar.tsx`: Fixed editorial masthead with wordmark, coordinates, and navigation links.
- `src/components/sections/Hero.tsx`: Section 01 composition (`MAKE IT / MAKE SENSE.` oversized headline, author credential block, Signal Orange vector rule, technical coordinate annotations).

#### 3. Dependencies
- Approved Goal 0 specification (`docs/VISUAL_SYSTEM.md`, `docs/HOMEPAGE_STORYBOARD.md`).

#### 4. Acceptance Criteria
- Vite dev server starts with zero errors and zero warnings under Node v24.
- TypeScript compiles cleanly with `tsc --noEmit`.
- Hero typography clamps fluidly from mobile ($375\text{px}$) to wide monitors ($1800\text{px}$) without horizontal viewport overflow.
- All colors and typography render strictly to visual specification tokens.
- Static screenshot of the hero looks authoritative and editorial.

#### 5. Explicit Exclusions
- Do NOT build project spreads (Goal 3) or subsequent sections.
- Do NOT add complex multi-stage scroll animations yet.

#### 6. Verification Steps
1. Run `npm run build` and ensure clean zero-error compilation.
2. Inspect responsive breakpoints at $375\text{px}$, $768\text{px}$, $1024\text{px}$, and $1440\text{px}$.
3. Verify zero horizontal scrollbars (`overflow-x: hidden` integrity).

#### 7. Exit Conditions to Move to Goal 2
Hero composition and typography approved by Product Owner.

---

### GOAL 2 — Motion Engine & Tectonic Section Transitions

#### 1. Scope
Integrate Motion for React, implement the timed 1.5-second hero entrance sequence, configure tectonic seam transitions between light and dark visual environments, and implement strict reduced-motion fallbacks.

#### 2. Deliverables
- `src/hooks/useReducedMotion.ts`: Centralized hook listening to `prefers-reduced-motion`.
- `src/components/sections/HeroAnimation.tsx`: Staged entrance sequence (0ms grid snap $\to$ 300ms masked type reveal $\to$ 800ms signal line strike $\to$ 1200ms metadata settle).
- Adaptive navigation theme observer: Smoothly shifts navigation tokens when intersecting Paper vs. Ink sections.
- Shared kinetic easing curves (`--ease-editorial`, `--ease-technical`) applied across interactive states.

#### 3. Dependencies
- Completed Goal 1 foundation.

#### 4. Acceptance Criteria
- Hero animation executes smoothly in approximately $1.5\text{s}$ and immediately accepts user input without blocking.
- When `prefers-reduced-motion: reduce` is enabled, all elements render instantaneously in their final resting positions with zero transform animation.
- No layout shifts occur during or after animation (`CLS < 0.05`).
- Navigation bar dynamically shifts styling as the page scrolls across Paper and Ink surfaces.

#### 5. Explicit Exclusions
- Do NOT build project SVG diagrams yet (reserved for Goal 3).

#### 6. Verification Steps
1. Verify animation visually via browser dev tools with 6x CPU throttling.
2. Emulate `prefers-reduced-motion: reduce` in Chrome DevTools to ensure zero-motion compliance.
3. Test keyboard navigation during and after the entrance sequence.

#### 7. Exit Conditions to Move to Goal 3
Motion feel and timing approved by Product Owner.

---

### GOAL 3 — Selected-Project Editorial Spreads & Custom Visuals

#### 1. Scope
Construct the core portfolio showcase in Section 03. Create four bespoke editorial spreads for Merchant FinPilot, CallQ, Monte Carlo Option Pricing Simulator, and Kalshi Arbitrage Engine, complete with custom SVG/Canvas data visualizations and verified links.

#### 2. Deliverables
- `src/content/projects.ts`: Strictly typed data records for all 4 projects with factual verification metadata.
- `src/components/sections/projects/FinPilotSpread.tsx`: Deep Ink spread with interactive SVG Controlled Incident Pipeline (`EVENT → INVESTIGATION → VERIFICATION → POLICY → ACTION`).
- `src/components/sections/projects/CallQSpread.tsx`: Raw Paper spread with interactive Grounded Evidence Tree SVG.
- `src/components/sections/projects/MonteCarloSpread.tsx`: Deep Ink spread with stochastic GBM price paths and Black-Scholes convergence curve visualization.
- `src/components/sections/projects/KalshiSpread.tsx`: Raw Paper research notebook spread with binary payoff and order book matrix.
- Verified badges for passing tests (703/703 for FinPilot, 73 for CallQ, etc.) and active external links to GitHub and live demos.

#### 3. Dependencies
- Completed Goal 1 and Goal 2.

#### 4. Acceptance Criteria
- FinPilot clearly communicates the separation of AI intent generation from deterministic verification gates.
- CallQ demonstrates grounded transcript fact extraction without hallucinated figures.
- Monte Carlo accurately displays the real numerical outputs ($6.01$ vs. $6.02$).
- Kalshi Engine is explicitly and prominently watermarked as *"IN ACTIVE DEVELOPMENT / RESEARCH NOTEBOOK"*.
- All external links (GitHub repos and live demos) match verified URLs and open safely in new tabs (`rel="noopener noreferrer"`).
- All diagrams adapt to mobile viewports without clipping.

#### 5. Explicit Exclusions
- Do NOT invent fake telemetry, live price tickers, or unverified claims.

#### 6. Verification Steps
1. Verify all 4 project layouts across desktop and mobile.
2. Verify all external links navigate to correct GitHub and Vercel targets.
3. Run automated tests to verify project data schema integrity.

#### 7. Exit Conditions to Move to Goal 4
Editorial composition and technical fidelity of all project spreads approved by Product Owner.

---

### GOAL 4 — The Thesis, Engineering Principles & Closing Transmission

#### 1. Scope
Implement the remaining narrative sections of the homepage: Section 02 (The Thesis), Section 04 (How I Think / 5 Core Engineering Laws), and Section 05 (Closing Transmission with verified contact links).

#### 2. Deliverables
- `src/components/sections/Thesis.tsx`: Section 02 asymmetric editorial manifesto connecting Systems, AI, and Quant.
- `src/components/sections/Principles.tsx`: Section 04 Deep Ink horizontal ruled bands detailing the 5 Core Engineering Laws with interactive hover states.
- `src/components/sections/Closing.tsx`: Section 05 decisive typographic resolution, verified email/GitHub/LinkedIn channels, and resume link.
- `src/content/profile.ts`: Centralized profile facts (BITS Pilani CS '28, graduation August 2028).

#### 3. Dependencies
- Completed Goal 3 project spreads.

#### 4. Acceptance Criteria
- Section 02 establishes the philosophical foundation uniting all technical projects.
- Section 04 presents the 5 engineering principles with high-contrast, accessible typography.
- Section 05 provides immediate, functional contact channels to verified email (`vikramadityasingh0805@gmail.com`), GitHub, and LinkedIn.
- The entire page scrolls seamlessly from Section 00 to Section 05 with perfect Paper $\leftrightarrow$ Ink rhythm.

#### 5. Explicit Exclusions
- Do NOT add a generic Formspree contact form or motivational marketing copy.

#### 6. Verification Steps
1. Full end-to-end scroll test from top to bottom.
2. Verify all anchor links and email `mailto:` functionality.
3. Contrast audit on all text in Section 02, 04, and 05.

#### 7. Exit Conditions to Move to Goal 5
Full homepage narrative approved by Product Owner.

---

### GOAL 5 — Responsive Polish, Accessibility, Performance (60fps), SEO & Launch Readiness

#### 1. Scope
Perform comprehensive production hardening: mobile touch refinement, WCAG 2.1 AA accessibility audit, performance optimization (Lighthouse $\ge 95$), SEO metadata, Open Graph assets, and production build verification.

#### 2. Deliverables
- Full responsive optimization across mobile ($375\text{px}$), tablet ($768\text{px}$), desktop ($1024\text{px}$), and wide screens ($1440\text{px}+$).
- WCAG 2.1 AA compliance across all components (keyboard focus traps, ARIA labels on SVGs, screen-reader text alternatives).
- SEO meta tags: Title, description, Open Graph cards, favicon, canonical tags.
- Production build optimization: Font preloading, code splitting, asset minification.
- Final verification report and deployment instructions for Vercel.

#### 3. Dependencies
- Completed Goal 4.

#### 4. Acceptance Criteria
- Lighthouse score: $\ge 95$ across Performance, Accessibility, Best Practices, and SEO.
- Zero accessibility violations detected by automated audits.
- Production build (`npm run build`) generates clean, minified output with zero bundle bloat.
- The site renders flawlessly on iOS Safari, Android Chrome, desktop Chrome, Firefox, and Safari.
- Ready for one-click deployment to Vercel upon Product Owner authorization.

#### 5. Explicit Exclusions
- Do NOT perform actual deployment or Git remote push without explicit user command.

#### 6. Verification Steps
1. Execute `npm run build` and `npm run preview`.
2. Run Lighthouse audit.
3. Screen-reader walkthrough using VoiceOver.
4. Final sign-off review with Product Owner.
