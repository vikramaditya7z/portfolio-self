/**
 * Verified Profile Data for Vikramaditya Singh
 * Source of Truth: docs/CONTENT_INVENTORY.md and verified resume
 */

export interface ProfileData {
  name: string;
  wordmark: string;
  degree: string;
  institution: string;
  graduationYear: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  mission: string;
  domains: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const PROFILE: ProfileData = {
  name: 'Vikramaditya Singh',
  wordmark: 'VIKRAMADITYA // SIGNAL',
  degree: 'B.Sc Computer Science',
  institution: 'BITS Pilani',
  graduationYear: '2028',
  location: 'Bengaluru, India',
  email: 'vikramadityasingh0805@gmail.com',
  githubUrl: 'https://github.com/vikramaditya7z',
  linkedinUrl: 'https://www.linkedin.com/in/vikramaditya-singh07/',
  resumeUrl: '/assets/Vikramaditya_Singh_Resume.pdf',
  mission:
    'Building software systems, deterministic financial pipelines, and quantitative models to understand how complex architectures behave under failure conditions.',
  domains: [
    {
      id: '01',
      title: 'Resilient Software Systems',
      description: 'Deterministic state machines, idempotency & hard policy gates.',
    },
    {
      id: '02',
      title: 'Intelligent Fact Extraction',
      description: 'LLM reasoning constrained strictly by boolean invariants & schema checks.',
    },
    {
      id: '03',
      title: 'Quantitative Modeling',
      description: 'Stochastic asset simulation, numerical convergence & benchmark validation.',
    },
  ],
};
