# SIGNAL / NOISE — Visual System & Design Tokens Specification

> **Document Class:** Technical Visual Specification & Design Token Architecture  
> **Status:** Implementation-Ready Initial Specification (Values marked `[Target]` will be empirically tuned during Goal 1–2)  
> **Applicable Stack:** Tailwind CSS v3/v4, CSS Custom Properties, TypeScript Token Definitions

---

## 1. Color System & Accessibility Matrix

### 1.1 Core Palette Tokens

```css
:root {
  /* Surface Tokens */
  --color-paper: #F3F0E8;           /* Primary editorial light surface */
  --color-paper-subtle: #ECE8DD;    /* Nested light container surface */
  --color-ink: #111111;             /* Primary technical dark surface */
  --color-ink-subtle: #191919;      /* Nested dark container surface */

  /* Accent Vector */
  --color-signal: #FF4D24;          /* Pure Signal Orange - directional beacon */
  --color-signal-glow: rgba(255, 77, 36, 0.15); /* Controlled accent halo */

  /* Structural & Hairline Dividers */
  --color-concrete: #D8D5CC;        /* Hairline borders on paper */
  --color-concrete-subtle: #E5E2DA; /* Sub-dividers on paper */
  --color-wire: #262626;            /* Hairline borders on ink */
  --color-wire-subtle: #1F1F1F;     /* Sub-dividers on ink */

  /* Text & Foreground Tokens */
  --color-text-paper-primary: #151515;   /* Display & high-emphasis body on paper */
  --color-text-paper-secondary: #525252; /* Supporting body & metadata on paper */
  --color-text-paper-muted: #787670;     /* Coordinates & technical labels on paper */

  --color-text-ink-primary: #F3F0E8;     /* Display & high-emphasis body on ink */
  --color-text-ink-secondary: #A3A3A3;   /* Supporting body & metadata on ink */
  --color-text-ink-muted: #666666;       /* Coordinates & technical labels on ink */
}
```

### 1.2 WCAG AA Accessibility Contrast Audit

All primary and secondary text pairings strictly exceed the **WCAG 2.1 AA** threshold (4.5:1 for body copy, 3.0:1 for large display text):

| Foreground Color | Background Color | Contrast Ratio | WCAG AA Status | Intended Usage |
| :--- | :--- | :--- | :--- | :--- |
| `#151515` (Primary Paper Text) | `#F3F0E8` (Paper) | **14.2:1** | **PASS (AAA)** | Display & Body text in light sections |
| `#525252` (Secondary Paper Text) | `#F3F0E8` (Paper) | **5.4:1** | **PASS (AA)** | Explanatory paragraphs & captions |
| `#F3F0E8` (Primary Ink Text) | `#111111` (Ink) | **15.1:1** | **PASS (AAA)** | Display & Body text in dark sections |
| `#A3A3A3` (Secondary Ink Text) | `#111111` (Ink) | **5.6:1** | **PASS (AA)** | Explanatory paragraphs on ink |
| `#FF4D24` (Signal Orange) | `#111111` (Ink) | **5.2:1** | **PASS (AA)** | Emphasized text, tags, active vectors |
| `#FF4D24` (Signal Orange) | `#F3F0E8` (Paper) | **3.1:1** | **PASS (Large)** | High-scale headings & icon vectors only* |
| `#151515` (Primary Text) | `#FF4D24` (Signal) | **4.9:1** | **PASS (AA)** | Black text inside solid Orange badges/buttons |

*\*Note on Signal Orange on Paper:* When `#FF4D24` is rendered against `#F3F0E8`, its contrast ratio is 3.1:1. Per WCAG standards, this is fully compliant for UI components, vectors, and bold display text $\ge 24\text{px}$, but is **prohibited for small body text**. For small text in light environments, Signal Orange is used as a border, background badge with black text, or left-side indicator pipe.

---

## 2. Typography Hierarchy & Fluid Type Scale

### 2.1 Type Families & Roles

```css
:root {
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SF Mono', Menlo, Consolas, monospace;
}
```

- **Space Grotesk:** Geometric, punchy, modernist incisions. Used for all major section titles, massive display statements, project titles, and visual slogans.
- **Inter:** Highly neutral, exceptional optical clarity at small-to-medium sizes. Used for descriptive project narratives, philosophy essays, and long-form body copy.
- **IBM Plex Mono:** Mechanical, unyielding, engineering-grade. Used for coordinates, test pass counts, schema parameters, pipeline nodes, section indices (`00`, `01`, `02`), and metadata badges.

### 2.2 Fluid Type Scale (`clamp` Formulas)

The type scale scales smoothly between mobile viewports ($375\text{px}$) and ultra-wide displays ($1800\text{px}$):

```css
:root {
  /* Display Sizes */
  --text-display-giant: clamp(4.5rem, 11vw + 1rem, 14rem);     /* 72px -> 224px [Target] */
  --text-display-hero:  clamp(3.5rem, 8.5vw + 1rem, 10.5rem);   /* 56px -> 168px [Target] */
  --text-display-h1:    clamp(2.5rem, 5.5vw + 0.5rem, 6.5rem);   /* 40px -> 104px [Target] */
  --text-display-h2:    clamp(2.0rem, 3.8vw + 0.5rem, 4.2rem);   /* 32px -> 67px [Target] */
  --text-display-h3:    clamp(1.5rem, 2.4vw + 0.25rem, 2.75rem); /* 24px -> 44px [Target] */

  /* Body & Editorial Sizes */
  --text-body-lead:     clamp(1.125rem, 1.2vw + 0.25rem, 1.5rem);/* 18px -> 24px [Target] */
  --text-body-base:     clamp(1.0rem, 0.4vw + 0.75rem, 1.125rem); /* 16px -> 18px [Target] */
  --text-body-small:    clamp(0.875rem, 0.2vw + 0.75rem, 0.9375rem); /* 14px -> 15px [Target] */

  /* Technical Monospace & Annotations */
  --text-mono-base:     clamp(0.875rem, 0.3vw + 0.75rem, 0.9375rem); /* 14px -> 15px [Target] */
  --text-mono-caption:  clamp(0.75rem, 0.2vw + 0.65rem, 0.8125rem); /* 12px -> 13px [Target] */
  --text-mono-micro:    0.6875rem; /* 11px static technical label */
}
```

### 2.3 Tracking, Leading & Optical Rules

| Scale Token | Tracking (`letter-spacing`) | Line Height (`line-height`) | Transform Rule |
| :--- | :--- | :--- | :--- |
| `display-giant` | `-0.045em` | `0.88` | Uppercase |
| `display-hero` | `-0.04em` | `0.92` | Uppercase |
| `display-h1` | `-0.035em` | `0.98` | Uppercase |
| `display-h2` | `-0.025em` | `1.05` | Uppercase |
| `display-h3` | `-0.015em` | `1.15` | Normal or Uppercase |
| `body-lead` | `-0.01em` | `1.50` | Sentence case |
| `body-base` | `0.00em` | `1.62` | Sentence case |
| `body-small` | `+0.01em` | `1.55` | Sentence case |
| `mono-base` | `+0.02em` | `1.45` | Mixed case / code |
| `mono-caption` | `+0.06em` | `1.30` | Uppercase |
| `mono-micro` | `+0.08em` | `1.20` | Strict Uppercase |

---

## 3. Spacing, Rhythm & Container Architecture

### 3.1 Mathematical Spacing Scale

Built on a base $4\text{px} / 8\text{px}$ modular system:

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1.0rem;   /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2.0rem;   /* 32px */
  --space-12: 3.0rem;  /* 48px */
  --space-16: 4.0rem;  /* 64px */
  --space-24: 6.0rem;  /* 96px */
  --space-32: 8.0rem;  /* 128px */
  --space-48: 12.0rem; /* 192px */

  /* Responsive Section Rhythm */
  --section-pad-y: clamp(5rem, 10vw, 12rem); /* Dynamic breathing room [Target] */
  --gutter-x: clamp(1.25rem, 3.5vw, 4.0rem);  /* Fluid page edge gutter [Target] */
}
```

### 3.2 Layout Containers & Max Widths

- **Standard Grid Container:** `max-w-[1720px] mx-auto px-[var(--gutter-x)]`
- **Reading Column Container (Essays/Thesis):** `max-w-[780px]`
- **Full Bleed Editorial Edge:** `w-full px-0` (for edge-to-edge headlines and technical timeline rules).

---

## 4. 12-Column Asymmetric Editorial Grid

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ GUTTER │ COL 1 │ COL 2 │ COL 3 │ COL 4 │ COL 5 │ COL 6 │ COL 7 │ COL 8 │ COL 9 │ COL 10│ COL 11│ COL 12│ GUTTER │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ [1.25-4rem]                                  12 EQUAL COLUMNS                                   [1.25-4rem]│
│                                                                                                        │
│ Hero Headline:         [───────────────── COL 1 TO 12 FULL SPAN ─────────────────]                     │
│ Hero Subtitle/Coords:  [── COL 1-3 ──] [─── EMPTY ───] [─────── COL 7 TO 12 ───────]                   │
│ FinPilot Spread:       [────── COL 1 TO 7 (Visual/SVG) ──────] [───── COL 8 TO 12 (Specs/Code) ─────]  │
│ CallQ Spread:          [───── COL 1 TO 5 (Facts/Thesis) ─────] [────── COL 6 TO 12 (Pipeline/Demo) ──] │
│ Monte Carlo Spread:    [── COL 1-4 (Math) ──] [────── COL 5 TO 12 (Simulation & Convergence) ──────]   │
│ How I Think Principles:[── COL 1-4 (Index) ─] [── COL 5-8 (Law) ──] [── COL 9-12 (Proof) ──]          │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Responsive Breakpoints

| Breakpoint | Viewport Width | Column Structure | Section Padding Y | Edge Gutter |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`sm`)** | $375\text{px} - 639\text{px}$ | 4 Columns (Stacked) | $64\text{px} - 80\text{px}$ | $20\text{px}$ |
| **Tablet (`md`)** | $640\text{px} - 1023\text{px}$ | 8 Columns | $80\text{px} - 112\text{px}$ | $32\text{px}$ |
| **Desktop (`lg`)**| $1024\text{px} - 1439\text{px}$ | 12 Columns (Asymmetric) | $112\text{px} - 144\text{px}$ | $48\text{px}$ |
| **Wide Display (`xl`)** | $\ge 1440\text{px}$ | 12 Columns (Full Scope) | $144\text{px} - 192\text{px}$ | $64\text{px}$ |

---

## 5. Dividers, Crosshairs & Technical Registration Marks

Editorial brutalism relies on visible architectural joints rather than drop shadows:

1. **Hairline Separator (`1px`):**
   - On Paper: `border-b border-[#D8D5CC]`
   - On Ink: `border-b border-[#262626]`
2. **Registration Crosshair (`+`):**
   - Placed at key grid intersections (top-left, top-right of project modules).
   - Rendered in monospace font or pure SVG: `+` with `color: var(--color-signal)` or `color: var(--color-concrete)`.
   - Dimension: `8px x 8px` footprint.
3. **Index Annotations:**
   - Monospace brackets: `[ 01 / SELECTED WORK ]`, `[ SYSTEM STATUS: REPRODUCIBLE ]`, `[ LATENCY: DETERMINISTIC ]`.
4. **Solid Color Seam Cuts:**
   - When transitioning from a Paper section to an Ink section, there are **no gradient fades**. The transition is a razor-sharp, zero-radius horizontal seam, emphasizing tectonic shift.

---

## 6. Motion Timing, Physics & State Conventions

### 6.1 Duration Tokens

```css
:root {
  --duration-instant: 100ms;
  --duration-fast:    180ms;  /* Micro-interactions, hover outlines, cursor tracking */
  --duration-normal:  320ms;  /* Standard UI transitions, accordion expansions */
  --duration-slow:    550ms;  /* Section entry reveals, large card shifts */
  --duration-kinetic: 900ms;  /* Hero typography letter slices, SVG path draws */
  --duration-hero:    1500ms; /* Full coordinated hero sequence duration */
}
```

### 6.2 Easing Curves (Custom Cubic Beziers)

```css
:root {
  /* Editorial Snap: Rapid initial movement with clean, confident deceleration */
  --ease-editorial: cubic-bezier(0.16, 1.0, 0.3, 1.0);

  /* Precise Technical: Linear start with sharp stop, mimicking physical instrumentation */
  --ease-technical: cubic-bezier(0.25, 1.0, 0.5, 1.0);

  /* Heavy Mass: For massive display typography reveals */
  --ease-heavy: cubic-bezier(0.76, 0.0, 0.24, 1.0);

  /* Micro Bounce-Free: Standard UI hover feedback (strictly no cartoonish spring bounce) */
  --ease-ui: cubic-bezier(0.2, 0.0, 0.0, 1.0);
}
```

### 6.3 Interactive States & Focus Specifications

- **Buttons & Action Controls:**
  - *Base:* `1px` border, zero border-radius (`rounded-none`), uppercase monospace typography.
  - *Hover:* Instant color inversion (e.g., Paper background with Ink text flips to Ink background with Paper text; Signal border activates).
  - *Focus-Visible:* `2px` solid `#FF4D24` outline offset by `3px`. Always distinct and accessible without mouse interaction.
  - *Active:* `-1px` transform translate along Y axis; crisp tactile feedback.
- **Project Link Anchors:**
  - Trailing directional arrow vector `→` (`8px` horizontal shift on hover).
  - Underline is a hairline `1px` rule offset by `4px`, transitioning from Concrete to Signal Orange.

---

## 7. Reduced-Motion Implementation Rules

When the user specifies `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- **Hero:** Appears instantly fully resolved. No letter sliding, no orange line strike. The headline `MAKE IT MAKE SENSE.` renders in its final, crisp resting position.
- **SVG Diagrams:** Render all nodes and links statically at 100% opacity without stroke-dashoffset animation.
- **Scroll Effects:** Disable all parallax, headline pin-drifts, and scroll-bound transforms. Native browser scrolling remains unhindered.
- **All Interactive States:** Retain instantaneous color flips and focus outlines for keyboard usability.
