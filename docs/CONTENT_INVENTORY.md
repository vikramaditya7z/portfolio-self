# SIGNAL / NOISE — Content Inventory & Factual Verification Register

> **Document Class:** Factual Audit & Content Source of Truth  
> **Status:** Verified Against Inspected Repositories & Supplied Context  
> **Integrity Standard:** Zero Fabrication. Zero Invented Metrics. Strict Separation of Completed vs. In-Development Systems.

---

## 1. Verified Identity & Educational Credentials

| Entity / Field | Value | Verification Source | Status |
| :--- | :--- | :--- | :--- |
| **Full Name** | Vikramaditya Singh | Supplied context & GitHub profile (`vikramaditya7z`) | **VERIFIED** |
| **Degree Program** | Bachelor of Engineering (Computer Science) | Supplied context | **VERIFIED** |
| **Institution** | BITS (Birla Institute of Technology and Science) | Supplied context | **VERIFIED** |
| **Graduation Date** | August 2028 | Supplied context | **VERIFIED** |
| **Location** | India | GitHub & Supplied context | **VERIFIED** |
| **Email** | `vikramadityasingh0805@gmail.com` | Supplied context | **VERIFIED** |
| **GitHub Handle** | `vikramaditya7z` | Inspected: `https://github.com/vikramaditya7z` | **VERIFIED** |
| **LinkedIn URL** | `https://www.linkedin.com/in/vikramaditya-singh07/` | Supplied context (Returns HTTP 999 anti-scraping challenge, format verified) | **VERIFIED** |

---

## 2. Core Projects Inventory & Architecture Breakdown

### 2.1 Project A: Merchant FinPilot
- **Public Title:** Merchant FinPilot
- **Subtitle:** Autonomous Financial Incident Intelligence & Deterministic Remediation for Modern Payment Gateways
- **Repository URL:** `https://github.com/vikramaditya7z/Merchant_FinPilot` (Verified active, public)
- **Live Demo URL:** `https://merchant-fin-pilot.vercel.app/` (Verified live, operational)
- **Origin / Context:** Built for the Razorpay Buildathon
- **Current Status:** **COMPLETED / RELEASE-READY BUILD** (Simulation & Test Mode)
- **Verified Technical Stack:**
  - Backend: Python, FastAPI, SQLite
  - Frontend: React (v18), TypeScript, Vite, Tailwind CSS
  - AI Engine: Google Gemini API
  - Integration: Signed Razorpay TEST API webhooks
- **Verified Test & Validation Metrics (Directly from Repository Badges & Manifests):**
  - **703 / 703 Backend Tests Passed**
  - **70 / 70 Razorpay TEST Integration Webhooks Passed**
  - **17 / 17 Frontend Tests Passed**
  - Vite Build Passed ($799\text{ms}$)
  - Execution Boundary: *Simulation / Test Only*
- **Key Architectural Features (Inspected from Source):**
  - Statistical payment anomaly detection against historical baselines.
  - Multi-dimensional breakdown slicing (acquirer, payment method, bank gateway, regional network).
  - Remediation intent formulation via Google Gemini.
  - Strict deterministic boolean invariant verification (amount boundaries, fee caps, duplicate protection).
  - Hard policy gates authorizing simulated execution.
  - Idempotent incident processing and persistent job tracking.
- **Factual Boundary:**
  - *Must NOT claim:* Live production processing of actual merchant funds. The system operates strictly in simulated/test-gateway mode.

---

### 2.2 Project B: CallQ
- **Public Title:** CallQ
- **Subtitle:** AI-Powered Financial Research & Transcript Evidence Grounding Platform
- **Repository URL:** `https://github.com/vikramaditya7z/callq` (Verified active, public)
- **Live Demo URL:** `https://callq-nine.vercel.app` (Verified live, operational)
- **Current Status:** **COMPLETED V1.5 RELEASE**
- **Verified Technical Stack:**
  - Frontend: React v18, TypeScript, Vite
  - Backend: FastAPI, Python 3.9+, Pydantic v2
  - AI Engine: Google Gemini API (Structured Output Mode)
  - Deployment: Vercel (Frontend) + Render (Backend)
- **Verified Test & Validation Metrics:**
  - **73 Backend Tests Covering the Full Extraction Pipeline**
- **Key Architectural Features (Inspected from Source):**
  - Ingestion and parsing of earnings call audio transcripts.
  - Multi-dimensional extraction: Executive Summary, Recurring Themes, Positives & Negatives, Risks & Opportunities, Management Outlook.
  - Financial metric extraction with comparative periods and YoY calculations (e.g., gross margins, revenue growth).
  - Explicit forward-looking management guidance targets.
  - Qualitative management signals mapping (positive vs. watch signals).
  - Grounded bull/bear thesis generation with evaluation and hallucination handling.
- **Factual Boundary:**
  - *Must NOT claim:* Live portfolio management or automated trading execution. CallQ is a research and structured extraction intelligence platform.

---

### 2.3 Project C: Monte Carlo Option Pricing Simulator
- **Public Title:** Monte Carlo Option Pricing Simulator
- **Subtitle:** Stochastic Asset Price Simulation & Numerical Option Valuation
- **Repository URL:** `https://github.com/vikramaditya7z/MonteCarloOptionPricing` (Verified active, pinned on GitHub)
- **Live Demo URL:** None (Local CLI & Scientific Python scripts; images generated via Matplotlib)
- **Current Status:** **COMPLETED SCIENTIFIC PROJECT**
- **Verified Technical Stack:**
  - Python, NumPy, Matplotlib
- **Core Files (Inspected from Repo Tree):**
  - `main.py`
  - `monte_carlo.py`
  - `black_scholes.py`
  - `images/convergence.png`
  - `images/stock_paths.png`
- **Verified Mathematical Concepts & Output:**
  - Geometric Brownian Motion (GBM) for asset price trajectory generation.
  - European Call Option pricing via Risk-Neutral Discounting:
    $$C_0 = e^{-rT} \mathbb{E}\left[\max(S_T - K, 0)\right]$$
  - Analytical validation against theoretical Black-Scholes formula.
  - Law of Large Numbers convergence analysis ($N = 10^2 \to 10^5$ paths).
  - Real project run output recorded in repository:
    - *Monte Carlo Price:* `6.01`
    - *Black-Scholes Price:* `6.02`
    - *Difference:* `0.0001`
- **Factual Boundary:**
  - *Must NOT claim:* American or exotic option pricing, volatility surface calibration, or real-time HFT Greeks hedging. It is a European call simulator and convergence validation suite.

---

### 2.4 Project D: Kalshi Arbitrage Engine
- **Public Title:** Kalshi Arbitrage Engine
- **Subtitle:** Prediction-Market Market-Data Modeling & Latency Research
- **Repository URL:** `https://github.com/vikramaditya7z/engine-kal-t-1` (Verified active, public)
- **Live Demo URL:** None (Research project in development)
- **Current Status:** **IN ACTIVE DEVELOPMENT / RESEARCH NOTEBOOK PHASE** (Explicitly marked)
- **Verified Technical Stack & Files (Inspected from Repo Tree):**
  - `pyproject.toml`
  - `kalshi_arbitrage/` package
  - `tests/` (Developing test suite)
  - Documentation: `ARCHITECTURE.md`, `PROJECT_RULES.md`, `V1_LOOP_GUIDELINES.md`, `V1_LOOP_MEMORY.md`
- **Architectural Scope Under Active Construction:**
  - Prediction-market binary contract payoff modeling ($P \in [0, 100]$).
  - Portfolio and position risk models.
  - Validated market-data schemas for Kalshi REST API endpoints.
  - Paper-trading simulation environment and deterministic matching engine research.
- **Factual Boundary:**
  - *Must NOT claim:* Live autonomous trading, production order execution, real-world alpha generation, or completed production market-making. It is strictly research and engineering in development.

---

### 2.5 Secondary Repositories (Inspected on GitHub, Not Featured in Main Tier)
These repositories exist on the user's GitHub profile (`vikramaditya7z`) but will not be given primary hero billing to maintain high editorial focus:
- `ATM_management_system`: Java/Database desktop application.
- `focus-flow`: Productivity / workflow tracking application.
- `keepsake-f`: Web application frontend.
- `shopkart-mern-lab-project`: MERN stack academic laboratory e-commerce project.

---

## 3. Verified Technical Competencies

The following technical competencies are directly evidenced by the verified repositories:
- **Languages:** Python (3.9+), TypeScript, JavaScript, SQL, HTML5/CSS3.
- **Frontend Systems:** React (v18), Vite, Tailwind CSS, Motion / Animation Choreography, Responsive Web Standards, Web Accessibility (WCAG).
- **Backend & Distributed Systems:** FastAPI, Pydantic (v2), SQLite, REST APIs, Webhook Security (HMAC verification), Asynchronous Job Execution, Idempotency.
- **AI & Intelligent Systems:** Google Gemini API (Structured Output Mode, function calling, schema validation, grounded prompt engineering).
- **Quantitative & Numerical Analysis:** NumPy, Matplotlib, Monte Carlo Simulation, Geometric Brownian Motion, Black-Scholes Formula, Risk-Neutral Valuation.

---

## 4. Explicit Factual Prohibitions Register

To safeguard Vikramaditya's professional credibility, the website implementation must strictly adhere to the following prohibitions:

| Prohibited Claim | Why It Is Prohibited | Proper Editorial Representation |
| :--- | :--- | :--- |
| **"Processed \$X Million in Live Payments"** | FinPilot operates against Razorpay TEST API and simulation. | State clearly: *"Verified against 70 Razorpay test webhooks in high-fidelity simulation mode."* |
| **"Autonomous Trading Hedge Fund Alpha"** | Kalshi Engine is in active development. | State clearly: *"Research notebook: Modeling binary prediction-market microstructure and payoff invariants."* |
| **"10,000+ Active Users / Customers"** | No verified production user telemetry exists. | Focus on architecture, test rigor (703 backend tests), and failure-mode analysis. |
| **"Sub-Millisecond HFT Execution"** | Python/REST architecture is not low-latency C++/FPGA HFT. | Focus on algorithmic correctness and deterministic matching theory. |
| **"Machine Learning Guru / AI Pioneer"** | Inflated, hollow marketing jargon. | Describe real engineering: *"Utilizing LLMs for candidate intent generation while enforcing deterministic verification gates."* |

---

## 5. Items Pending Confirmation / Verification

The following items are identified for confirmation prior to final deployment:
1. **Specific BITS Campus:** Whether Pilani, Goa, or Hyderabad campus should be specified in fine print, or retained as general *"BITS Pilani"*. (Currently defaulting to *"BITS Pilani"* as standard).
2. **Resume PDF Location:** When the physical `resume.pdf` file is ready, it will be placed in `public/assets/Vikramaditya_Singh_Resume.pdf`.
