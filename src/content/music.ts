export interface MusicData {
  title: string;
  headline: string;
  stagePhoto: {
    src: string;
    alt: string;
    caption: string;
  };
  summary: string;
  details: {
    guitar: string;
    stage: string;
    production: string;
  };
}

export const MUSIC_DATA: MusicData = {
  title: 'LOUD / IN PROGRESS.',
  headline: 'BUILT ON RIFFS. EXPLORING RHYTHM.',
  stagePhoto: {
    src: '/images/stage-performance.jpg',
    alt: 'Vikramaditya performing live with an acoustic guitar on a festival stage',
    caption: 'Live stage performance at college festival',
  },
  summary:
    'Advanced acoustic and electric guitar player with band performance experience across college festivals and live stages. My guitar roots lean heavily towards rock and metal with an ear for jazz voicings, while in the studio I explore house music and electronic production inside FL Studio.',
  details: {
    guitar: 'Acoustic and electric guitar mastery, built around riff precision and dynamic range.',
    stage: 'Live band sets across college festival crowds and auditorium performances.',
    production: 'Electronic music exploration in FL Studio, focusing on four-on-the-floor house rhythms.',
  },
};
