import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PHOTOGRAPHY_DATA, PhotoItem } from '@/content/photography';
import { PhotoLightbox } from './PhotoLightbox';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const PhotographySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.95', 'end 0.15'],
  });

  // Continuous scroll-linked header choreography with safe non-zero minimum opacity
  const headerY = useTransform(scrollYProgress, [0, 0.2], ['20%', '0%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.16], [0.5, 1]);

  const featured = PHOTOGRAPHY_DATA.featuredPhoto;
  const naturePhotos = PHOTOGRAPHY_DATA.naturePhotos;
  const streetPhotos = PHOTOGRAPHY_DATA.streetPhotos;

  return (
    <section
      ref={sectionRef}
      id="photography"
      data-theme="light"
      aria-label="Photography: What the Eye Keeps"
      className="w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto bg-[#F3F0E8] text-[#151515] border-b border-[#D8D5CC] space-y-16 sm:space-y-20 lg:space-y-24"
    >
      {/* 1. Header with Scroll-Linked Kinetic Typography */}
      <div className="border-b-2 border-[#111111] pb-6 sm:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="py-1">
          <motion.h2
            style={
              prefersReducedMotion
                ? undefined
                : {
                    y: headerY,
                    opacity: headerOpacity,
                  }
            }
            className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest-editorial text-[#151515] leading-[0.88]"
          >
            WHAT THE <span className="text-[#FF4D24]">EYE KEEPS</span>.
          </motion.h2>
        </div>
        <motion.p
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: headerOpacity,
                }
          }
          className="font-mono text-xs sm:text-sm text-[#525252] max-w-md leading-relaxed"
        >
          {PHOTOGRAPHY_DATA.mediaClubNote}
        </motion.p>
      </div>

      {/* 2. Group 1: Featured Award-Winning Photograph (Dominant Anchor) */}
      <article aria-labelledby="featured-photo-heading" className="space-y-6">
        {/* Subtle Category Header */}
        <div className="flex items-center justify-between border-b border-[#D8D5CC] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#FF4D24]" aria-hidden="true" />
            <span className="font-mono text-xs text-[#111111] font-bold uppercase tracking-mono-spaced">
              INDEX // 00 &middot; FEATURED EXPOSURE &middot; COMPETITION WINNER
            </span>
          </div>
          <span className="font-mono text-xs text-[#787670] uppercase tracking-mono-spaced hidden sm:inline">
            ARCHIVAL SELECTION &middot; 4:5
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Featured Image Frame: Left-aligned to grid, unclipped 4:5 container with object-contain */}
          <div className="lg:col-span-7 flex justify-start">
            <div
              onClick={() => setSelectedPhoto(featured)}
              className="relative group cursor-pointer border-2 border-[#111111] bg-[#ECE8DD] p-2.5 sm:p-4 shadow-[8px_8px_0px_0px_#111111] w-full max-w-xl transition-all duration-300 ease-out md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[12px_12px_0px_0px_#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPhoto(featured);
                }
              }}
              aria-label={`Enlarge award-winning photograph: ${featured.title}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#161616] flex items-center justify-center">
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={featured.src} type="image/jpeg" />
                  <img
                    src={featured.src}
                    alt={featured.alt}
                    width={featured.dimensions?.width || 819}
                    height={featured.dimensions?.height || 1024}
                    className="w-full h-full object-contain select-none transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>

                {/* Tactile Hover Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="font-mono text-xs bg-[#111111] text-white px-4 py-2 border border-[#FF4D24] font-bold tracking-mono-spaced flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000000]">
                    <span>VIEW FULLSCREEN</span>
                    <span className="text-[#FF4D24]">&rarr;</span>
                  </span>
                </div>
              </div>

              {/* Caption Line on Card Base */}
              <div className="pt-2.5 flex items-center justify-between font-mono text-[11px] text-[#525252]">
                <span className="font-bold text-[#111111]">{featured.title}</span>
                <span className="text-[#FF4D24] font-semibold flex items-center gap-1">
                  <span>EXPAND</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>
          </div>

          {/* Featured Curatorial Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              {featured.recognition && (
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#FF4D24] font-bold uppercase tracking-mono-spaced bg-[#FF4D24]/10 px-2.5 py-1 border border-[#FF4D24]/30">
                  <span className="w-1.5 h-1.5 bg-[#FF4D24]" aria-hidden="true" />
                  {featured.recognition}
                </div>
              )}
              <h3
                id="featured-photo-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#151515] tracking-tight uppercase leading-[0.95]"
              >
                {featured.title}
              </h3>
            </div>

            <p className="font-body text-base sm:text-lg text-[#3A3834] leading-relaxed">
              {featured.caption}
            </p>

            {/* Technical & Curatorial Observation */}
            <div className="border-t border-[#D8D5CC] pt-4 space-y-3 font-mono text-xs text-[#525252]">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 bg-white/70 border border-[#D8D5CC]">
                  <span className="text-[#787670] block text-[10px] uppercase">EXPOSURE RATIO</span>
                  <span className="font-bold text-[#111111] text-xs">4:5 ARCHIVAL VERTICAL</span>
                </div>
                <div className="p-2.5 bg-white/70 border border-[#D8D5CC]">
                  <span className="text-[#787670] block text-[10px] uppercase">LIGHTING CONDITIONS</span>
                  <span className="font-bold text-[#111111] text-xs">NATURAL MONSOON RIM</span>
                </div>
              </div>
              <p className="text-xs text-[#787670] leading-relaxed">
                Recognized for evocative street-level composition, candid restraint, and the quiet emotional anchor of maternal protection against harsh weathered stone.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedPhoto(featured)}
                className="font-mono text-xs px-5 py-2.5 bg-[#111111] text-[#F3F0E8] border-2 border-[#111111] shadow-[4px_4px_0px_0px_#FF4D24] hover:bg-[#FF4D24] hover:border-[#FF4D24] hover:text-white transition-all font-bold flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24] cursor-pointer"
              >
                <span>VIEW HIGH RESOLUTION</span>
                <span className="text-white text-xs">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Editorial Category Separation: Featured to Nature */}
      <div className="w-full border-t border-[#D8D5CC] pt-6 sm:pt-10" aria-hidden="true" />

      {/* 3. Group 2: NATURE Collection (4 Photographs, 3:2 Landscape) */}
      <section aria-labelledby="nature-heading" className="space-y-8">
        {/* Section Subheader with Clear Visual Separation */}
        <div className="border-b-2 border-[#111111] pb-3.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF4D24]" aria-hidden="true" />
              <span className="font-mono text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold">
                INDEX // 01 &middot; ARCHIVE COLLECTION
              </span>
            </div>
            <h3
              id="nature-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-[#151515] uppercase tracking-tight"
            >
              NATURE.
            </h3>
          </div>
          <span className="font-mono text-xs text-[#787670] uppercase tracking-mono-spaced">
            4 EXPOSURES &middot; 3:2 HORIZONTAL
          </span>
        </div>

        {/* Editorial Asymmetric Staggered 2-Column Spread: 7+5 on row 1, 5+7 on row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Nature Photo 1: Solar Crescent (Row 1 Left, Spanning 7 Cols) */}
          <div className="lg:col-span-7">
            <PhotoCard
              photo={naturePhotos[0]}
              onSelect={setSelectedPhoto}
              aspectClass="aspect-[3/2]"
            />
          </div>

          {/* Nature Photo 2: Full Moon (Row 1 Right, Spanning 5 Cols) */}
          <div className="lg:col-span-5">
            <PhotoCard
              photo={naturePhotos[1]}
              onSelect={setSelectedPhoto}
              aspectClass="aspect-[3/2]"
            />
          </div>

          {/* Nature Photo 3: Perched Sparrow (Row 2 Left, Spanning 5 Cols) */}
          <div className="lg:col-span-5">
            <PhotoCard
              photo={naturePhotos[2]}
              onSelect={setSelectedPhoto}
              aspectClass="aspect-[3/2]"
            />
          </div>

          {/* Nature Photo 4: Bulbul in Papaya Canopy (Row 2 Right, Spanning 7 Cols) */}
          <div className="lg:col-span-7">
            <PhotoCard
              photo={naturePhotos[3]}
              onSelect={setSelectedPhoto}
              aspectClass="aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      {/* Editorial Category Separation: Nature to Street */}
      <div className="w-full border-t border-[#D8D5CC] pt-6 sm:pt-10" aria-hidden="true" />

      {/* 4. Group 3: STREET / EVERYDAY LIFE Collection (4 Photographs, 3:4 Portrait) */}
      <section aria-labelledby="street-heading" className="space-y-8">
        {/* Section Subheader with Clear Visual Separation */}
        <div className="border-b-2 border-[#111111] pb-3.5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF4D24]" aria-hidden="true" />
              <span className="font-mono text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold">
                INDEX // 02 &middot; ARCHIVE COLLECTION
              </span>
            </div>
            <h3
              id="street-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-[#151515] uppercase tracking-tight"
            >
              STREET / EVERYDAY LIFE.
            </h3>
          </div>
          <span className="font-mono text-xs text-[#787670] uppercase tracking-mono-spaced">
            4 EXPOSURES &middot; 3:4 PORTRAIT
          </span>
        </div>

        {/* Complementary 4-Column Editorial Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start">
          {streetPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onSelect={setSelectedPhoto}
              aspectClass="aspect-[3/4]"
            />
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal (rendered via createPortal to document.body) */}
      {selectedPhoto && (
        <PhotoLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
};

interface PhotoCardProps {
  photo: PhotoItem;
  onSelect: (photo: PhotoItem) => void;
  aspectClass: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onSelect, aspectClass }) => {
  return (
    <div
      onClick={() => onSelect(photo)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(photo);
        }
      }}
      aria-label={`Enlarge photograph: ${photo.title}`}
      className="group cursor-pointer border-2 border-[#111111] bg-[#ECE8DD] p-2 sm:p-2.5 shadow-[5px_5px_0px_0px_#111111] hover:shadow-[7px_7px_0px_0px_#FF4D24] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24] flex flex-col justify-between"
    >
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-[#161616] flex items-center justify-center`}>
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet={photo.src} type="image/jpeg" />
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.dimensions?.width}
            height={photo.dimensions?.height}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain select-none transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            onError={(e) => {
              if (photo.originalSrc && e.currentTarget.src !== photo.originalSrc) {
                e.currentTarget.src = photo.originalSrc;
              }
            }}
          />
        </picture>

        {/* Hover Cue */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="font-mono text-[11px] bg-[#111111] text-white px-3 py-1.5 border border-[#FF4D24] font-bold tracking-mono-spaced shadow-[2px_2px_0px_0px_#000000]">
            EXPAND ↗
          </span>
        </div>
      </div>

      {/* Card Metadata Footer */}
      <div className="pt-2 px-0.5 space-y-0.5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wide truncate">
            {photo.title}
          </h4>
          <span className="font-mono text-[10px] text-[#787670] shrink-0">
            {photo.aspectRatio.replace('/', ':')}
          </span>
        </div>
        <p className="font-body text-[11px] sm:text-xs text-[#525252] line-clamp-2 leading-relaxed">
          {photo.caption}
        </p>
      </div>
    </div>
  );
};
