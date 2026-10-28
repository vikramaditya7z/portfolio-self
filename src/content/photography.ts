export type PhotoCategoryKey = 'winner' | 'nature' | 'street';

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotoCategoryKey;
  src: string;
  originalSrc?: string;
  aspectRatio: string;
  dimensions?: { width: number; height: number };
  recognition?: string;
  caption: string;
  alt: string;
}

export interface PhotographyData {
  title: string;
  mediaClubNote: string;
  featuredPhoto: PhotoItem;
  naturePhotos: PhotoItem[];
  streetPhotos: PhotoItem[];
  photos: PhotoItem[];
}

export const PHOTOGRAPHY_DATA: PhotographyData = {
  title: 'WHAT THE EYE KEEPS.',
  mediaClubNote:
    'Active member of the college media club covering campus festivals and live events. Photographic work focuses on candid observation, concert atmosphere, and natural light.',
  featuredPhoto: {
    id: 'mothers-burden',
    title: 'A Mother’s Burden?',
    category: 'winner',
    src: '/images/photography/winner.jpg',
    aspectRatio: '4/5',
    dimensions: { width: 819, height: 1024 },
    recognition: 'Winner · School-Level Photography Competition',
    caption:
      'Perched on a rain-streaked pillar, a monkey mother shields her infant against her chest with quiet vigilance.',
    alt: 'Monkey mother shielding her infant against her chest on a rain-streaked pillar during rain',
  },
  naturePhotos: [
    {
      id: 'nature-eclipse',
      title: 'Solar Crescent',
      category: 'nature',
      src: '/images/photography/nature/IMG_3572.JPG',
      aspectRatio: '3/2',
      dimensions: { width: 6000, height: 4000 },
      caption:
        'A solar eclipse crescent glowing through dense cloud layers during midday twilight.',
      alt: 'Solar eclipse crescent peeking through stormy cloud cover',
    },
    {
      id: 'nature-moon',
      title: 'Full Moon',
      category: 'nature',
      src: '/images/photography/nature/IMG_3361.JPG',
      aspectRatio: '3/2',
      dimensions: { width: 6000, height: 4000 },
      caption:
        'Lunar craters and maria sharply resolved in high contrast against deep night.',
      alt: 'Full moon centered against an ink-black night sky',
    },
    {
      id: 'nature-sparrow',
      title: 'Perched Sparrow',
      category: 'nature',
      src: '/images/photography/nature/IMG_3668.JPG',
      aspectRatio: '3/2',
      dimensions: { width: 6000, height: 4000 },
      caption:
        'A house sparrow paused on a slender branch against diffused natural bokeh.',
      alt: 'House sparrow perched on a slender branch surrounded by soft green foliage',
    },
    {
      id: 'nature-bulbul',
      title: 'Bulbul in Papaya Canopy',
      category: 'nature',
      src: '/images/photography/nature/IMG_3690.JPG',
      aspectRatio: '3/2',
      dimensions: { width: 6000, height: 4000 },
      caption:
        'A crested bulbul sheltered amidst the broad radiating leaves of a garden papaya.',
      alt: 'Red-vented bulbul resting among the broad green leaves of a papaya tree',
    },
  ],
  streetPhotos: [
    {
      id: 'street-lamp',
      title: 'Night Lantern',
      category: 'street',
      src: '/images/photography/street/IMG_0117.jpg',
      originalSrc: '/images/photography/street/IMG_0117.HEIC',
      aspectRatio: '3/4',
      dimensions: { width: 4284, height: 5712 },
      caption:
        'A cast-iron twin lantern illuminating trailing ivy against the dark.',
      alt: 'Twin-lantern streetlamp at night illuminating lush green ivy',
    },
    {
      id: 'street-boat',
      title: 'Bow on Water',
      category: 'street',
      src: '/images/photography/street/IMG_1907.jpg',
      originalSrc: '/images/photography/street/IMG_1907.HEIC',
      aspectRatio: '3/4',
      dimensions: { width: 4284, height: 5712 },
      caption:
        'The bow of a motorboat carving across calm open water toward distant ridges.',
      alt: 'Bow of a boat slicing through lake waters under towering overcast storm clouds',
    },
    {
      id: 'street-tower',
      title: 'Climbing Wall & Crescent',
      category: 'street',
      src: '/images/photography/street/IMG_4182.jpg',
      originalSrc: '/images/photography/street/IMG_4182.HEIC',
      aspectRatio: '3/4',
      dimensions: { width: 4284, height: 5712 },
      caption:
        'A bright yellow outdoor climbing tower rising into dusk beneath a sliver of moon.',
      alt: 'Vibrant yellow climbing wall tower framed against a deep twilight sky and thin crescent moon',
    },
    {
      id: 'street-facade',
      title: 'Urban Geometry',
      category: 'street',
      src: '/images/photography/street/IMG_7417.JPG',
      aspectRatio: '3/4',
      dimensions: { width: 3024, height: 4032 },
      caption:
        'Reflective glass curtain wall and rigid architectural lines under an overcast monsoon sky.',
      alt: 'Glass facade of a modern high-rise building beneath a stormy urban sky',
    },
  ],
  get photos(): PhotoItem[] {
    return [this.featuredPhoto, ...this.naturePhotos, ...this.streetPhotos];
  },
};
