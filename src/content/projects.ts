/**
 * Verified Projects Registry for SIGNAL / NOISE
 * Source of Truth: Resume, Inspected GitHub Repositories & docs/CONTENT_INVENTORY.md
 * Zero fabricated metrics. All claims verified.
 */

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problemQuestion: string;
  problemSummary: string;
  whatIBuilt: string;
  engineeringHighlight: string;
  techStack: string[];
  status: string;
  isWorkInProgress: boolean;
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'finpilot',
    number: '01',
    title: 'Merchant FinPilot',
    subtitle: 'Payment Incident Intelligence & Deterministic Verification',
    problemQuestion: 'What happens when a payment system starts behaving unexpectedly?',
    problemSummary:
      'High-throughput merchants face transient failures across bank gateways and payment methods. Manual investigation takes 30+ minutes while transactions fail, but naive autonomous scripts risk catastrophic uncontrolled mutations.',
    whatIBuilt:
      'An incident response platform that detects payment anomalies against historical baselines, clusters dimensional failure patterns, synthesizes remediation proposals via Gemini, and enforces strict deterministic boolean gates before executing test actions.',
    engineeringHighlight:
      'Architectural separation of powers: LLM reasoning proposes candidate hypotheses and intent, while deterministic invariant checks (idempotency enforcement, capture caps, balance verification) independently authorize operations in a simulated Razorpay sandbox.',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Google Gemini', 'SQLite', 'Razorpay Test API'],
    status: 'Simulation Mode // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/Merchant_FinPilot',
    demoUrl: 'https://merchant-fin-pilot.vercel.app/',
    accentColor: '#FF4D24',
  },
  {
    id: 'callq',
    number: '02',
    title: 'CallQ',
    subtitle: 'Earnings-Call Evidence Grounding & Financial Fact Extraction',
    problemQuestion: 'How can an AI-generated financial claim be checked against its original source?',
    problemSummary:
      'Earnings call transcripts contain dense executive commentary mixed with forward-looking financial guidance. Generic LLMs routinely hallucinate basis-point changes, mix up fiscal quarters, or invent metrics without grounding.',
    whatIBuilt:
      'A financial research application that ingests quarterly earnings call transcripts, extracts structured financial metrics into Pydantic models, computes margin differentials deterministically, and anchors every extracted claim to verified transcript citations.',
    engineeringHighlight:
      'Strict schema validation using Pydantic ensures zero drift in numeric extraction. Financial arithmetic (e.g. basis point expansions) is calculated deterministically in code rather than delegated to language model token prediction.',
    techStack: ['React v18', 'TypeScript', 'FastAPI', 'Python 3.9+', 'Pydantic v2', 'Google Gemini'],
    status: 'V1.5 Release // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/callq',
    demoUrl: 'https://callq-nine.vercel.app',
    accentColor: '#FF4D24',
  },
  {
    id: 'monte-carlo',
    number: '03',
    title: 'Monte Carlo Option Simulator',
    subtitle: 'Stochastic Asset Trajectories & Numerical Benchmark Validation',
    problemQuestion: 'How closely does a simulated random walk agree with mathematical theory?',
    problemSummary:
      'Valuing financial options under uncertainty requires simulating thousands of stochastic asset trajectories. A probabilistic simulation is only credible if its numerical average provably converges to the closed-form Black-Scholes benchmark.',
    whatIBuilt:
      'A scientific pricing suite that models continuous-time asset price paths using Geometric Brownian Motion, prices European call options via discounted risk-neutral expectation, and measures empirical convergence as sample size scales.',
    engineeringHighlight:
      'Vectorized NumPy path generation with variance reduction. Reconciled convergence validation: at N=100,000 iterations, the empirical Monte Carlo estimate ($6.0199) converges to the analytical Black-Scholes benchmark ($6.0200) within a Delta of 0.0001.',
    techStack: ['Python', 'NumPy', 'Matplotlib'],
    status: 'Scientific Suite // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/MonteCarloOptionPricing',
    accentColor: '#FF4D24',
  },
  {
    id: 'kalshi',
    number: '04',
    title: 'Kalshi Arbitrage Engine',
    subtitle: 'Prediction-Market Contract Modeling & Order Book Research',
    problemQuestion: 'How should an engine reason about prediction market contracts and prices?',
    problemSummary:
      'Binary prediction markets trade complementary contracts where YES and NO must theoretically sum to $1.00 (100¢). Transient order book mispricings create potential structural discrepancies that require disciplined risk and fee modeling.',
    whatIBuilt:
      'An active research system that models binary contract payoff invariants, streams and validates order book structures from Kalshi market data feeds, and builds towards a deterministic paper-trading harness.',
    engineeringHighlight:
      'Strict mathematical invariant modeling: P(YES) + P(NO) = 1.00. Current active phase focuses on order book depth reconstruction and exchange transaction fee hurdle modeling to assess net executable edges before simulating paper fills.',
    techStack: ['Python', 'REST Market Data', 'Pydantic', 'PyProject.toml'],
    status: 'In Active Development',
    isWorkInProgress: true,
    githubUrl: 'https://github.com/vikramaditya7z/engine-kal-t-1',
    accentColor: '#FF4D24',
  },
];
