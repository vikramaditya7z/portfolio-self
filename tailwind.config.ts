import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      wide: '1800px',
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F3F0E8',
          subtle: '#ECE8DD',
        },
        ink: {
          DEFAULT: '#111111',
          subtle: '#191919',
        },
        signal: {
          DEFAULT: '#FF4D24',
          glow: 'rgba(255, 77, 36, 0.15)',
        },
        concrete: {
          DEFAULT: '#D8D5CC',
          subtle: '#E5E2DA',
        },
        wire: {
          DEFAULT: '#262626',
          subtle: '#1F1F1F',
        },
        text: {
          paper: {
            primary: '#151515',
            secondary: '#525252',
            muted: '#787670',
          },
          ink: {
            primary: '#F3F0E8',
            secondary: '#A3A3A3',
            muted: '#666666',
          },
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest-editorial': '-0.045em',
        'tighter-editorial': '-0.035em',
        'tight-editorial': '-0.025em',
        'mono-spaced': '0.06em',
        'mono-wide': '0.08em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1.0, 0.3, 1.0)',
        'technical': 'cubic-bezier(0.25, 1.0, 0.5, 1.0)',
      },
    },
  },
  plugins: [],
};

export default config;
