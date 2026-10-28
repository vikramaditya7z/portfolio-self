# SIGNAL / NOISE — Homepage Storyboard & Editorial Choreography

> **Document Class:** Comprehensive Section-by-Section Storyboard & Narrative Architecture  
> **Status:** Implementation-Ready Initial Specification  
> **Scope:** Complete Homepage Experience (Section 00 through Section 05)  
> **Creative Identity:** Editorial Brutalism // Swiss Modernism // Systems Engineering Lab

---

## Storyboard Architecture Map

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ SECTION 00: NAVIGATION               [Paper Background / Hairline Separator / Fixed]   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SECTION 01: THE INTERRUPTION (HERO)  [Paper Background / Kinetic Type / Signal Orange] │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SECTION 02: THE THESIS               [Paper Background / Asymmetric Editorial Essay]   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SECTION 03: SELECTED WORK            [Alternating Paper & Ink Environments]            │
│   ├── 03A: Merchant FinPilot         [Ink Background / Controlled Incident Pipeline]   │
│   ├── 03B: CallQ                     [Paper Background / Grounded Evidence Tree]       │
│   ├── 03C: Monte Carlo Option Sim    [Ink Background / GBM Paths & Convergence Curve]  │
│   └── 03D: Kalshi Arbitrage Engine   [Paper Background / Research Notebook Dossier]    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SECTION 04: HOW I THINK              [Ink Background / 5 Deterministic Engineering Laws]│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ SECTION 05: CLOSING & TRANSMISSION   [Paper Background / Typographic Resolution & Comms]│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 00 — NAVIGATION

### 1. Purpose
Provide unobtrusive, accessible spatial awareness and navigation across the viewport without visually competing with the oversized hero typography.

### 2. Content Hierarchy
1. **Wordmark:** `VIKRAMADITYA // SIGNAL` (Display Grotesk / Monospace mix)
2. **System Status Pill:** `[ BITS CS '28 // LOC: IN ]` (Technical Monospace micro)
3. **Primary Links:** `[01] WORK`, `[02] THESIS`, `[03] PRINCIPLES`, `[04] CONTACT`
4. **Action Link:** `RESUME [PDF]` with external anchor icon

### 3. Layout & Composition
- **Desktop:** Edge-to-edge floating header spanning 100% viewport width with padding `px-[var(--gutter-x)] py-5`. Fixed at top (`z-50`). Hairline bottom border (`1px`).
- **Dynamic Surface Adaptation:**
  - When scrolling over Paper sections: Background is `rgba(243, 240, 232, 0.85)` with `backdrop-blur-md`, text is `#151515`, border is `#D8D5CC`.
  - When scrolling over Ink sections: Background seamlessly morphs to `rgba(17, 17, 17, 0.85)` with `backdrop-blur-md`, text is `#F3F0E8`, border is `#262626`.
- **Mobile:** Minimalist bar with wordmark and a crisp square `MENU [+]` toggle that triggers an accessible full-screen brutalist overlay (no rounded modal).

### 4. Interactions
- Links feature an uppercase underline wipe from left to right in Signal Orange (`#FF4D24`) on hover.
- Keyboard `Tab` navigation reveals an explicit `2px` Signal Orange focus ring.

### 5. Specific Generic Mistake Avoided
*Prohibited:* A floating, pill-shaped, glowing dark-gray bar with heavy drop shadow (the ubiquitous SaaS navbar).  
*Adopted:* An architectural, edge-locked, hairline-bordered editorial masthead.

---

## SECTION 01 — THE INTERRUPTION (HERO)

### 1. Purpose
Immediately establish unmistakable creative identity, unapologetic scale, and technical intent. Command the viewer's attention, eliminate scroll fatigue, and establish the portfolio owner's engineering thesis.

### 2. Composition & Content Hierarchy

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [01 / THE INTERRUPTION]                                    [COORDINATES: 28.36°N, 75.58°E / BITS]│
│                                                                                                  │
│   M A K E   I T                                                                                  │
│   M A K E   S E N S E .                                    ─────────────────────────────────     │
│                                                            VIKRAMADITYA SINGH                    │
│                                                            Computer Science @ BITS Pilani ('28)  │
│  [► EXPLORE REPRODUCIBLE SYSTEMS]                          Engineering intelligent systems,      │
│  [↓ SCROLL TO SPECIFICATIONS]                              fintech pipelines & quant models.     │
│                                                                                                  │
│ [REGISTRATION: 001-A] ──────────────────────────────────────────────────────── [STATUS: VERIFIED] │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Primary Display Headline:**
  ```text
  MAKE IT
  MAKE SENSE.
  ```
  Rendered in `Space Grotesk`, uppercase, `clamp(4.5rem, 11vw + 1rem, 14rem)`, line-height `0.88`, tracking `-0.045em`.
- **Author Identity Lockup (Col 8–12 on Desktop):**
  - Name: `VIKRAMADITYA SINGH` (`Space Grotesk` Medium, `24px`)
  - Subtitle: `Computer Science @ BITS Pilani (Graduating Aug 2028)` (`Inter`, `16px`)
  - Mission Statement: *"Building software, deterministic financial pipelines, and quantitative models to understand complex systems under failure conditions."*
- **Technical Coordinates Bar (Col 1–12):**
  - Hairline top divider with monospace annotations: `LAT: 28.36°N / LON: 75.58°E (BITS)`, `SIGNAL: ACTIVE`, `INVARIANTS: STRICT`.
- **Signal Vector:**
  - An ultra-sharp, `2px` Signal Orange horizontal line (`#FF4D24`) extending from the period of `SENSE.` to the right edge of the viewport.

### 3. Detailed Timed Animation Sequence

```
0.0s (0ms)       0.3s (300ms)          0.8s (800ms)          1.2s (1200ms)         1.5s (1500ms)
  │                  │                     │                     │                     │
  ├─ Canvas Clear    ├─ Hairline Grid      ├─ Masked Type Reveal ├─ Signal Orange      ├─ Identity & CTA
  │  (Paper Base)    │  Crosshairs Snap In │  "MAKE IT / SENSE"  │  Vector Strikes     │  Metadata Settles
  │                  │  (0 -> 100% Opacity)│  (TranslateY: 100%->0│  (ScaleX: 0 -> 1)   │  (Ready for input)
```

1. **Stage 0: Mount State ($0\text{ms}$)**  
   - Base Paper background (`#F3F0E8`) renders immediately. Zero layout shift.
2. **Stage 1: Structural Grid Snap ($0\text{ms} - 300\text{ms}$)**  
   - Top and bottom `1px` Concrete border lines (`#D8D5CC`) expand outward from center (`scaleX: 0 → 1`).
   - Four corner registration crosshairs `[+]` fade in at 100% opacity.
3. **Stage 2: Kinetic Headline Reveal ($300\text{ms} - 800\text{ms}$)**  
   - `MAKE IT` and `MAKE SENSE.` are contained within overflow-hidden masking blocks.
   - Letters slide up vertically along the Y-axis (`translateY(110%) → translateY(0%)`) using `--ease-editorial` (`cubic-bezier(0.16, 1.0, 0.3, 1.0)`).
   - Line 1 leads, Line 2 is staggered by $120\text{ms}$.
4. **Stage 3: Signal Orange Vector Strike ($800\text{ms} - 1200\text{ms}$)**  
   - The `#FF4D24` signal line shoots horizontally from the baseline of `SENSE.` across columns 8 to 12 (`scaleX(0) → scaleX(1)`, transform-origin: left).
5. **Stage 4: Metadata & CTA Influx ($1200\text{ms} - 1500\text{ms}$)**  
   - Author name, BITS credential, and technical coordinates fade up by $16\text{px}$ (`opacity: 0 → 1`, `translateY(16px) → translateY(0)`).
   - Entire interactive surface becomes active and responsive. Total sequence elapsed: $1.5\text{s}$.

### 4. Static Non-Animated Fallback (Screen Capture & Reduced Motion)
- Headline, metadata lockup, signal line, and crosshairs are rendered at 100% opacity in their final resting coordinates via CSS.
- Zero translation transforms applied.
- The hero is completely readable and visually striking on first render, including in static headless previews and print stylesheets.

### 5. Responsive Adaptation
- **Tablet ($768\text{px} - 1023\text{px}$):** Headline scales fluidly to `clamp(3.5rem, 8vw, 6.5rem)`. Author lockup stacks below the headline on Col 1–8 with a `24px` top margin.
- **Mobile ($375\text{px} - 639\text{px}$):** Headline breaks into three lines: `MAKE / IT / MAKE SENSE.`. Text size clamps to `clamp(2.75rem, 13vw, 4.25rem)`. Coordinates bar simplifies to single-line monospace caption: `VIKRAMADITYA SINGH // BITS '28`. The Signal Orange vector sits directly beneath the headline as a dividing rule.

### 6. Specific Generic Mistake Avoided
*Prohibited:* A generic developer hero with a circular avatar photo, "Hello World" typewriter effect, or three floating tech stack badges.  
*Adopted:* An editorial cover composition with massive type scale, architectural tension, and precise technical identity.

---

## SECTION 02 — THE THESIS

### 1. Purpose
Bridge the visual confrontation of the hero into the engineering philosophy of the builder. Articulate why and how Vikramaditya approaches software development.

### 2. Content & Copy

```text
[ 02 / THE THESIS ]

MOST SOFTWARE FAILS NOT BECAUSE THE CODE WAS HARD TO WRITE,
BUT BECAUSE THE BOUNDARIES OF THE SYSTEM WERE NEVER UNDERSTOOD.

I build systems to explore how machines behave when assumptions break:
when payment gateways experience cascading timeouts,
when financial transcripts contain conflicting corporate guidance,
when derivative markets deviate from closed-form theoretical pricing,
and when prediction markets present microsecond arbitrage inefficiencies.

My work focuses across three interconnected domains:
[01] RESILIENT SOFTWARE SYSTEMS  — Deterministic state machines, idempotency & hard policy gates.
[02] INTELLIGENT FACT EXTRACTION — LLM reasoning bound strictly by boolean invariants & schema checks.
[03] QUANTITATIVE MODELING       — Stochastic simulation, numerical convergence & benchmark validation.
```

### 3. Layout & Composition
- **Surface:** Paper (`#F3F0E8`).
- **Structure:** 12-column grid.
  - Col 1–3: Sticky technical label `[ 02 / THE THESIS ]` and coordinate crosshair `+`.
  - Col 4–12: Lead declaration in `Space Grotesk` Medium (`clamp(1.75rem, 3.2vw, 3.0rem)`), high contrast `#151515`.
  - Beneath the declaration: A 3-column asymmetric cardless spread (Cols 4–6, 7–9, 10–12) breaking down the 3 core domains in `Inter` body with `IBM Plex Mono` headers.
- **Dividers:** Hairline `1px` concrete line (`#D8D5CC`) anchors the base of the section.

### 4. Motion & Scroll Behavior
- As the user scrolls into the section, the lead statement reveals line-by-line via subtle opacity threshold (`0.25 → 1.0`), rewarding deliberate reading without locking native scroll.

### 5. Specific Generic Mistake Avoided
*Prohibited:* Three colorful gradient cards with icons (e.g., a brain icon for AI, a dollar icon for Quant, a gear for Software).  
*Adopted:* Pure editorial typographic composition utilizing whitespace, weight contrast, and architectural numbering.

---

## SECTION 03 — SELECTED WORK (THE CORE PORTFOLIO SPREADS)

The selected projects are not rendered as uniform cards. Each project receives a **dedicated, custom-composed editorial spread** with an architectural diagram synthesized directly from its inspected technical reality.

---

### Project 03A: Merchant FinPilot
*Autonomous Financial Incident Intelligence & Deterministic Remediation*

- **Visual Environment:** **Deep Ink (`#111111`)** — sharp tectonic background cut from Paper.
- **Verified Facts & Badges:**
  - Built for **Razorpay Buildathon**
  - **703 / 703 Backend Tests Passed**
  - **70 / 70 Razorpay TEST Webhooks Passed**
  - **17 / 17 Frontend Tests Passed**
  - Execution Mode: **Simulation / Test Only** (Explicitly labeled)
  - Stack: `FastAPI`, `Python`, `React`, `TypeScript`, `Google Gemini API`, `SQLite`, `Razorpay Test API`
- **Headline:** `MERCHANT FINPILOT` (`Space Grotesk`, `clamp(2.5rem, 5vw, 5.5rem)`, Alabaster Paper text `#F3F0E8`).
- **Core Engineering Principle:**
  *"An LLM must never possess direct credentials to execute financial mutations. AI generates the candidate remediation intent; deterministic boolean invariants and policy gates independently verify and authorize execution."*
- **Custom Visual Asset — The Controlled Incident Pipeline (Custom SVG):**
  A live interactive vector pipeline illustrating the verified architecture:
  ```text
  ┌───────────────┐     ┌───────────────┐     ┌────────────────┐     ┌───────────────┐     ┌───────────────┐
  │  WEBHOOK IN   │ ──► │ DIMENSIONAL   │ ──► │  GEMINI INTENT │ ──► │ DETERMINISTIC │ ──► │ IDEMPOTENT    │
  │ (Signed HMAC) │     │ BREAKDOWN     │     │  (Root Cause)  │     │ VERIFIER GATE │     │ SIM EXECUTION │
  └───────────────┘     └───────────────┘     └────────────────┘     └───────────────┘     └───────────────┘
                                                                             │                     ▲
                                                                             ▼ (If Invariant Fails)│
                                                                     [ HARD REJECTION ] ───────────┘
  ```
  - SVG lines draw dynamically on scroll using `stroke-dashoffset`.
  - Active nodes pulse with restrained Signal Orange indicators.
  - Hovering/clicking on any node expands its verified invariant logic (e.g., *"Checks refund amount $\le$ original transaction capture amount; asserts zero duplicate idempotency key"*).
- **Verified External Anchors:**
  - GitHub: `https://github.com/vikramaditya7z/Merchant_FinPilot`
  - Live Demo: `https://merchant-fin-pilot.vercel.app/`

---

### Project 03B: CallQ
*AI-Powered Financial Research & Transcript Evidence Grounding Platform*

- **Visual Environment:** **Raw Paper (`#F3F0E8`)** — returns to tactile editorial daylight.
- **Verified Facts & Badges:**
  - **73 Backend Tests Passed**
  - V1.5 Architecture: Single-transcript multi-dimensional extraction
  - Stack: `React v18`, `TypeScript`, `Vite`, `FastAPI`, `Python 3.9+`, `Pydantic v2`, `Gemini Structured Outputs`
  - Deployed: `Vercel (Frontend)` + `Render (Backend)`
- **Headline:** `CALLQ` (`Space Grotesk`, Carbon Charcoal text `#151515`).
- **Core Engineering Principle:**
  *"Unchecked LLM summaries hallucinate guidance ranges and margin metrics. CallQ enforces structural Pydantic validation to tether every financial fact, YoY calculation, and management signal directly to verified transcript spans."*
- **Custom Visual Asset — The Grounded Evidence Tree (Custom SVG):**
  An editorial schematic illustrating the transformation from raw noise to defensible investor thesis:
  ```text
  [ RAW TRANSCRIPT: 45 PAGES OF UNSTRUCTURED AUDIO TEXT ]
                         │
                         ▼ (Pydantic Schema Validation)
  ┌────────────────────────────────────────────────────────────────────────┐
  │ [EXTRACTED FACT] "Gross margin expanded 240bps YoY to 42.1%"          │
  │   ├── Anchor: Transcript Section 3, Paragraph 14 (CEO Remarks)         │
  │   ├── Deterministic Calculation: (42.1% - 39.7%) = +2.40% [VERIFIED]   │
  │   └── Guidance Compatibility: In-line with Q3 FY24 Target [PASS]       │
  └────────────────────────────────────────────────────────────────────────┘
                         │
                         ▼
  [ GROUNDED BULL / BEAR THESIS GENERATION (ZERO FACTUAL DRIFT) ]
  ```
- **Verified External Anchors:**
  - GitHub: `https://github.com/vikramaditya7z/callq`
  - Live Demo: `https://callq-nine.vercel.app`

---

### Project 03C: Monte Carlo Option Pricing Simulator
*Stochastic Asset Simulation & Black-Scholes Numerical Validation*

- **Visual Environment:** **Deep Ink (`#111111`)** — research laboratory environment.
- **Verified Facts & Badges:**
  - Stack: `Python`, `NumPy`, `Matplotlib`
  - Core Modules: `monte_carlo.py`, `black_scholes.py`, `main.py`
  - Mathematical Framework: Geometric Brownian Motion (GBM), Risk-Neutral Discounting $e^{-rT} \mathbb{E}[\max(S_T - K, 0)]$
  - Real Project Output:
    - *Monte Carlo Price:* `$6.01`
    - *Black-Scholes Theoretical Price:* `$6.02`
    - *Difference:* `0.0001`
- **Headline:** `MONTE CARLO OPTION SIMULATOR` (`Space Grotesk`, Alabaster Paper text).
- **Core Engineering Principle:**
  *"Validating probabilistic simulation against analytical closed-form truth: demonstrating convergence via the Law of Large Numbers as $N \to \infty$."*
- **Custom Visual Asset — Dual Mathematical Canvas/SVG:**
  1. **Simulated Price Paths ($S_t$):** 20 stochastic GBM trajectories branching across time steps $t \in [0, T]$, colored in fine-line monochromatic wire with a single Signal Orange mean path.
  2. **Convergence Curve:** An interactive plot showing the Monte Carlo simulated price oscillating and tightening toward the horizontal Black-Scholes benchmark line ($y = 6.02$) as simulation steps increase from $10^2$ to $10^5$.
- **Verified External Anchors:**
  - GitHub: `https://github.com/vikramaditya7z/MonteCarloOptionPricing`

---

### Project 03D: Kalshi Arbitrage Engine
*Prediction-Market Order Book Modeling & Latency Research*

- **Visual Environment:** **Raw Paper (`#F3F0E8`)** — styled as a technical research notebook dossier.
- **Verified Facts & Badges:**
  - **Status: In Active Development / Research Phase** (Prominently watermarked)
  - Stack: `Python`, `REST Market Data`, `PyProject.toml`
  - Architecture: Binary contract payoff modeling ($\$0$ or $\$100$), position risk modeling, validated order book schemas, test suite under active construction.
  - Repository: `https://github.com/vikramaditya7z/engine-kal-t-1`
- **Headline:** `KALSHI ARBITRAGE ENGINE` (`Space Grotesk`, Carbon Charcoal text).
- **Explicit Factual Boundary:**
  - **Strictly No Fake Claims:** This project does *not* claim live autonomous execution or production trading returns. It is presented truthfully as an active exploration into market microstructure and binary contract pricing mechanics.
- **Custom Visual Asset — The Binary Contract Payoff & Order Book Matrix:**
  An editorial table/SVG displaying complementary binary contract pricing:
  $$P(\text{YES}) + P(\text{NO}) = 1.00$$
  Visualizes implied probability discrepancies where combined order book asks allow positive theoretical expectation prior to fee hurdles.
- **Verified External Anchors:**
  - GitHub: `https://github.com/vikramaditya7z/engine-kal-t-1`

---

## SECTION 04 — HOW I THINK (CORE ENGINEERING LAWS)

### 1. Purpose
Synthesize the technical mindset uniting all projects into five unassailable engineering principles.

### 2. The 5 Principles

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [ 04 / HOW I THINK ]                                                                   │
│                                                                                        │
│ 01. DETERMINISTIC GATES OVER PROBABILISTIC HOPE                                        │
│     Language models and stochastic engines are ideation engines, not execution kernels. │
│     Critical state mutations must pass boolean invariant proofs before execution.       │
│                                                                                        │
│ 02. EVIDENCE BEFORE CONCLUSIONS                                                        │
│     No financial summary, metric extraction, or anomaly diagnosis is permitted to exist │
│     without a verifiable pointer to raw source evidence.                               │
│                                                                                        │
│ 03. EXPLICIT HANDLING OF FAILURE MODES                                                 │
│     Idempotency keys, webhook signature verification, rate limits, and divergence       │
│     thresholds are treated as core functional requirements, not post-launch patches.   │
│                                                                                        │
│ 04. VALIDATION AGAINST INDEPENDENT BENCHMARKS                                          │
│     Numerical simulations must converge toward analytical closed-form benchmarks.      │
│     If the math cannot be validated against theory, the system is untrusted.           │
│                                                                                        │
│ 05. MINIMAL RESTRAINT IN SOFTWARE ARCHITECTURE                                         │
│     Zero unnecessary dependencies. We avoid bloated frameworks when lightweight,       │
│     standard primitives provide deterministic predictability and optimal performance.  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3. Layout & Composition
- **Surface:** **Deep Ink (`#111111`)**.
- **Composition:** 5 horizontal ruled bands spanning 100% width.
- Each band features:
  - Large monospace index (`01` through `05`) in Signal Orange (`#FF4D24`).
  - Bold declaration in `Space Grotesk` (`clamp(1.5rem, 2.5vw, 2.25rem)`).
  - Concise explanatory paragraph in `Inter` Alabaster Paper text.
- Interactive hover: Highlights the band with a hairline Signal Orange left-border (`4px`) and inverts the index.

---

## SECTION 05 — CLOSING & TRANSMISSION

### 1. Purpose
Deliver a decisive, authoritative conclusion to the visual narrative, leaving the evaluator with clear, verified channels to initiate contact, inspect code, or review the resume.

### 2. Content & Copy

```text
[ 05 / TRANSMISSION ]

THE NOISE RESOLVES.
LET'S BUILD SOMETHING DEFENSIBLE.

Open for Software Engineering, Intelligent Systems, and Quantitative Engineering internships.

CONTACT TRANSMISSION:
- EMAIL:     vikramadityasingh0805@gmail.com
- GITHUB:    github.com/vikramaditya7z
- LINKEDIN:  linkedin.com/in/vikramaditya-singh07
- RESUME:    Download PDF [Verified File]

© 2026 VIKRAMADITYA SINGH // BITS PILANI (AUG 2028)
ALL CODEWORDS, BENCHMARKS & TEST COUNTS INDEPENDENTLY REPRODUCIBLE.
```

### 3. Layout & Composition
- **Surface:** **Raw Paper (`#F3F0E8`)**.
- **Composition:** Massive final declaration in `Space Grotesk` (`clamp(3.5rem, 8vw, 8rem)`), edge-aligned.
- 4-column link matrix below with large clickable external anchors styled with arrow glyphs `↗`.
- Base metadata bar: Copyright, BITS Pilani credential, graduation year (`August 2028`), and engineering reproducibility guarantee.

### 4. Specific Generic Mistake Avoided
*Prohibited:* A generic contact form with name, email, and message inputs backed by Formspree, or a generic "Feel free to reach out!" footer.  
*Adopted:* An authoritative editorial sign-off providing immediate, high-efficiency channels to inspected repositories, verified credentials, and direct email.
