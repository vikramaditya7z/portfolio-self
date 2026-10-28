# SIGNAL / NOISE — Motion Specification & Kinetic Choreography

> **Document Class:** Motion Design System & Engineering Performance Specification  
> **Status:** Implementation-Ready Initial Specification  
> **Core Libraries:** Motion for React (fka Framer Motion) as primary engine; GSAP + ScrollTrigger strictly scoped for multi-stage SVG timeline pinning where justified.

---

## 1. Motion Philosophy: Purpose Over Decoration

In SIGNAL / NOISE, animation is never cosmetic glitter. Motion is an **informational instrument** used to:
1. **Establish Hierarchy & Spatial Orientation:** Directing the evaluator's eye to primary focal points in dense editorial layouts.
2. **Explain Data Transformations:** Visually mapping how unstructured inputs (transcripts, payment webhooks, stochastic paths) resolve into structured, verified outputs.
3. **Impart Physical Authority:** Brutalist typography demands heavy, controlled inertia. There are no bouncy, rubber-band spring physics. Movement is crisp, deliberate, and mathematically governed.
4. **Preserve Fluid Performance:** The page must hit a locked **60 frames per second (fps)** on standard mobile devices and $120\text{Hz}$ ProMotion displays.

---

## 2. Library Boundaries: Motion for React vs. GSAP ScrollTrigger

To avoid unnecessary dependency bloat, animation responsibilities are strictly partitioned:

| Engine / Tool | Permitted Scope | Explicit Prohibitions |
| :--- | :--- | :--- |
| **Motion for React** (`motion`) | • Hero entrance sequence<br>• Section viewport reveals (`whileInView`)<br>• Hover, tap, and focus-visible states<br>• Layout morphing (`layoutId`)<br>• Navigation backdrop color morphs | • Continuous scroll-bound timeline scrubbing across multiple full-screen viewports. |
| **GSAP + ScrollTrigger** | • **Section 03A (Merchant FinPilot SVG Pipeline):** Multi-stage horizontal node draw tied to scroll progress.<br>• **Section 03C (Monte Carlo Convergence):** Progressive drawing of stochastic paths converging to benchmark line. | • Do NOT use for basic fade-ins or simple cards.<br>• Do NOT use for standard button interactions.<br>• Do NOT introduce if pure CSS / Motion achieves 60fps. |
| **CSS Transitions & Web Animations API** | • 1px border expansions<br>• Text color inversions<br>• Focus outline snaps | • Complex multi-step staggered sequences. |

---

## 3. Core Choreographies

### 3.1 Hero Entrance Choreography (Elapsed: $1.5\text{s}$)

```
TIME (ms)   TARGET ELEMENT              PROPERTY TRANSFORMED          EASING & DURATION
─────────────────────────────────────────────────────────────────────────────────────────────
0ms         Viewport                    Base Paper surface visible    Instant
0 - 300ms   Corner Crosshairs [+]       opacity: 0 -> 1               linear (300ms)
            Top/Bottom Grid Lines       scaleX: 0 -> 1                cubic-bezier(0.16,1,0.3,1)
300 - 800ms "MAKE IT" (Line 1)          translateY: 100% -> 0%        cubic-bezier(0.16,1,0.3,1) (500ms)
420 - 920ms "MAKE SENSE." (Line 2)      translateY: 100% -> 0%        cubic-bezier(0.16,1,0.3,1) (500ms)
800 - 1200ms Signal Orange Vector Line  scaleX: 0 -> 1                cubic-bezier(0.25,1,0.5,1) (400ms)
1100 - 1500ms Author Block & Monospace  opacity: 0 -> 1, Y: 16px -> 0 cubic-bezier(0.16,1,0.3,1) (400ms)
```

- **Masking Mechanism:** Headline lines are wrapped in `<div className="overflow-hidden">`. The inner typography spans animate along the Y axis without altering document flow, eliminating layout thrashing (`CLS = 0`).
- **Interaction Readiness:** The hero sequence does not block user interaction or scroll. If the user scrolls immediately upon landing, the entrance smoothly translates with native page scroll.

### 3.2 Tectonic Section Transitions (Paper $\leftrightarrow$ Ink)

- The site alternates between tactile **Paper (`#F3F0E8`)** and technical **Ink (`#111111`)**.
- **No Soft Gradients:** Sections meet at razor-sharp horizontal seams.
- As the seam approaches the top viewport edge:
  - The sticky navigation bar detects the intersection via `IntersectionObserver`.
  - The navigation bar's background color, text color, and border color morph cleanly across a `250ms` CSS transition (`backdrop-filter` remains active).

### 3.3 Project Data Visualizations

1. **Merchant FinPilot Pipeline (SVG):**
   - Node paths use `stroke-dasharray` and `stroke-dashoffset` to animate the flow of a payment incident from left to right.
   - When the pipeline hits the "Deterministic Verifier Gate", a rapid micro-pulse in Signal Orange verifies the boolean invariant check before the simulated execution node lights up.
2. **CallQ Grounded Evidence Tree (SVG):**
   - Connecting lines between transcript spans and extracted financial metrics draw in on scroll, demonstrating the grounded tethering.
3. **Monte Carlo Option Simulator (Stochastic Canvas/SVG):**
   - 20 discrete Geometric Brownian Motion paths draw across time steps $t \in [0, T]$.
   - As the user scrolls through the spread, the convergence curve animates from high variance ($N=10^2$) to tight precision ($N=10^5$), kissing the theoretical Black-Scholes horizontal line.

---

## 4. Micro-Interactions & Hover Dynamics

### 4.1 Buttons & Interactive Controls
- **Resting:** Flat, `1px` border, monochrome text.
- **Hover:**
  - Transition duration: `180ms` (`--ease-ui`).
  - Solid background fill inverts (Paper flips to Ink; Ink flips to Paper).
  - Signal Orange border activates (`#FF4D24`).
- **Active / Press:**
  - `transform: translateY(1px) scale(0.99)`. Instant tactile feedback.

### 4.2 Project Anchor Links
- External links feature a directional vector arrow (`↗` or `→`).
- On hover, the arrow shifts `+4px` horizontally and `-4px` vertically over `200ms`.
- The underline expands from `0%` to `100%` width in Signal Orange.

### 4.3 Accessible Focus States
- Keyboard focus (`:focus-visible`) triggers an unmissable `2px` solid `#FF4D24` ring with `3px` offset.
- Hover animations do not activate on keyboard focus, preventing jarring visual conflicts.

---

## 5. Performance Engineering & GPU Budgeting

To guarantee 60fps on mobile and 120fps on high-refresh displays:

1. **Strict Property Whitelist:**
   - Permitted animated properties: `transform` (`translate3d`, `scale`), `opacity`, and SVG `stroke-dashoffset`.
   - **Strictly Prohibited in Animations:** `width`, `height`, `top`, `left`, `margin`, `padding`, `filter: blur()` during active scroll loops.
2. **Hardware Acceleration & Layer Promotion:**
   - Animated elements utilize `will-change: transform, opacity` only during active animation, unbinding the property upon completion to prevent excessive GPU VRAM consumption.
3. **Passive Scroll Listeners:**
   - Any scroll-measuring hook uses `{ passive: true }` and processes updates inside `requestAnimationFrame`.
4. **Layout Shift Prevention:**
   - All SVG diagrams, canvases, and typography blocks have explicit aspect ratios or minimum height constraints to maintain zero Cumulative Layout Shift (`CLS < 0.05`).

---

## 6. Mobile & Touch Screen Adaptations

On touch viewports ($< 768\text{px}$):
1. **Eliminate Hover Locks:** No content or essential context is hidden behind hover triggers. All technical annotations and metadata are visible by default.
2. **Simplified Scroll Choreography:** Heavy pinned horizontal scrolls are transformed into native vertical stacked sequences.
3. **Reduced Kinetic Transform Distance:** Typography slice animations reduce their Y-offset travel distance from `100%` to `40%` or simple quick opacity reveals to prevent perceived lag on budget mobile processors.

---

## 7. Reduced-Motion Implementation Specification

When `prefers-reduced-motion: reduce` is detected:

```typescript
// Shared motion helper
export const transitionConfig = {
  duration: prefersReducedMotion ? 0 : 0.4,
  ease: [0.16, 1, 0.3, 1],
};
```

| Component | Standard Motion | Reduced Motion (`prefers-reduced-motion: reduce`) |
| :--- | :--- | :--- |
| **Hero Title** | 500ms masked vertical slide + stagger | Renders immediately at final resting position (0ms) |
| **Signal Vector** | ScaleX expand (400ms) | Renders immediately at full width |
| **SVG Pipelines** | Path draw with stroke-dashoffset | Rendered complete at 100% opacity |
| **Section Entries** | Viewport slide-up + fade | Instant or subtle 150ms opacity fade |
| **Buttons / Links** | Smooth color transitions | Instant state change |

---

## 8. Required vs. Optional Motion Matrix

| Feature | Classification | Fallback Strategy |
| :--- | :--- | :--- |
| **Hero Staged Mask Reveal** | **REQUIRED** | CSS static fallback renders instantly if JS fails or reduced-motion is active. |
| **Navigation Surface Color Shift** | **REQUIRED** | Standard CSS transition based on scroll position. |
| **FinPilot SVG Pipeline Flow** | **REQUIRED** | Static vector diagram if GSAP/ScrollTrigger fails to load. |
| **CallQ Grounded Evidence Lines** | **REQUIRED** | Static tree diagram. |
| **Monte Carlo Interactive Canvas/SVG** | **OPTIONAL / ENHANCEMENT** | High-fidelity static SVG plot with verified parameters. |
| **Dynamic Crosshair Magnetic Tracking**| **OPTIONAL / ENHANCEMENT** | Fixed static crosshairs at grid intersections. |
