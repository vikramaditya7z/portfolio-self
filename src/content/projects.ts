/**
 * Verified Projects Registry for SIGNAL / NOISE
 * Source of Truth: Updated Resume, Inspected GitHub Repositories & docs/CONTENT_INVENTORY.md
 * Zero fabricated metrics. All claims verified against source code and test suites.
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
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'finpilot',
    number: '01',
    title: 'Merchant FinPilot',
    subtitle: 'Payment Incident Intelligence & Deterministic Verification',
    problemQuestion: 'What happens when a payment system starts behaving unexpectedly across acquirers?',
    problemSummary:
      'High-throughput merchants face transient failures across bank gateways and payment methods. Manual investigation takes 30+ minutes while transactions drop, but naive autonomous scripts risk catastrophic uncontrolled mutations.',
    whatIBuilt:
      'A payment incident intelligence platform to investigate payment failures across payment rails, acquirers, error codes, regions, and time windows, backed by a simulated Razorpay sandbox and comprehensive test coverage.',
    engineeringHighlight:
      'Architected a fail-closed agentic system where LLM reasoning proposes remediation intents while a deterministic financial verifier and policy engine independently validate financial invariants, authorization, and operational constraints. Tested by 703 backend tests and 70 integration tests.',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Gemini API', 'SQLite', 'Razorpay TEST API'],
    status: 'Simulation Mode // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/Merchant_FinPilot',
    demoUrl: 'https://merchant-fin-pilot.vercel.app/',
    accentColor: '#FF4D24',
  },
  {
    id: 'keepsake',
    number: '02',
    title: 'KeepSake',
    subtitle: 'On-Device Face Recognition & Constrained Clustering for macOS',
    problemQuestion: 'How can an application organize personal photos on-device without cloud leakage or memory runaway?',
    problemSummary:
      'Personal photo libraries contain thousands of high-resolution images. Cloud recognition creates privacy vulnerabilities, while naive on-device clustering erroneously merges co-occurring faces and exceeds standard memory bounds.',
    whatIBuilt:
      'A native macOS photo organization application emphasizing local processing, independent engineering ownership, and optimal memory management, integrating Apple Vision and an InsightFace Core ML model.',
    engineeringHighlight:
      'Constrained hierarchical clustering with cannot-link constraints preventing distinct faces in the same photograph from being grouped. Highly efficient resource utilization with RAM usage below 1 GB while indexing ~785 photos, validated by 282 tests (280 passed, 2 skipped, 0 failures).',
    techStack: ['Swift', 'SwiftUI', 'Core ML', 'Apple Vision', 'Python', 'ONNX'],
    status: 'Native macOS App // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/keepsake-f',
    accentColor: '#FF4D24',
  },
  {
    id: 'callq',
    number: '03',
    title: 'CallQ',
    subtitle: 'Earnings-Call Evidence Grounding & Financial Fact Extraction',
    problemQuestion: 'How can an AI-generated financial claim be checked against its original source?',
    problemSummary:
      'Earnings call transcripts contain dense executive commentary mixed with forward-looking guidance. Generic LLMs routinely hallucinate basis-point changes, mix up fiscal quarters, or invent metrics without grounding.',
    whatIBuilt:
      'An evidence-grounded financial intelligence platform to perform structured extraction of facts from earnings calls, validating all claims against source transcript citations.',
    engineeringHighlight:
      'Deterministic financial calculation engine to compute metric changes, margins, guidance, and historical comparisons, enforcing comparability checks. Grounded LLM reasoning pipeline generating verified theses strictly from validated facts, supported by 73 passing backend tests.',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Gemini API'],
    status: 'V1.5 Release // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/callq',
    demoUrl: 'https://callq-nine.vercel.app',
    accentColor: '#FF4D24',
  },
  {
    id: 'monte-carlo',
    number: '04',
    title: 'Monte Carlo Option Pricing Simulator',
    subtitle: 'Stochastic Asset Trajectories & Numerical Benchmark Validation',
    problemQuestion: 'How closely does a simulated random walk agree with mathematical theory?',
    problemSummary:
      'Valuing financial options under uncertainty requires simulating thousands of stochastic asset trajectories. A probabilistic simulation is only credible if its numerical average provably converges to the closed-form Black-Scholes benchmark.',
    whatIBuilt:
      'A quantitative finance simulator modeling stock price paths using Geometric Brownian Motion, implementing risk-neutral pricing and discounting for European call option payoffs.',
    engineeringHighlight:
      'Convergence analysis evaluating simulated estimates against the analytical Black-Scholes model. Vectorized NumPy path operations achieve convergence ($6.0199 vs $6.0200) within 0.0001 delta at N=100,000 iterations.',
    techStack: ['Python', 'NumPy', 'Matplotlib'],
    status: 'Scientific Suite // Complete',
    isWorkInProgress: false,
    githubUrl: 'https://github.com/vikramaditya7z/MonteCarloOptionPricing',
    accentColor: '#FF4D24',
  },
  {
    id: 'arbine',
    number: '05',
    title: 'Arbine',
    subtitle: 'Cross-Exchange Prediction Market Arbitrage & Execution Modeling',
    problemQuestion: 'How can prediction market edges across Kalshi and Polymarket be exploited without settlement risk?',
    problemSummary:
      'Prediction markets list equivalent real-world event contracts with differing liquidity, fee schedules, and pricing. Exploiting cross-exchange arbitrage requires deterministic settlement equivalence verification and fee-adjusted execution modeling.',
    whatIBuilt:
      'A cross-exchange prediction market arbitrage platform integrating Kalshi and Polymarket APIs to identify and evaluate potential opportunities across equivalent contracts, backed by a simulated paper-trading engine.',
    engineeringHighlight:
      'Deterministic market matching and settlement-equivalence verification with fail-closed validation. Binary complement, binary parity, and multi-outcome arbitrage strategies using Level 2 order-book analysis, VWAP-based execution modeling, slippage modeling, and risk controls.',
    techStack: ['Python', 'Multi-Exchange APIs', 'Financial Computation'],
    status: 'Under Development',
    isWorkInProgress: true,
    accentColor: '#FF4D24',
  },
];
