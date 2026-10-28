import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PhotoItem } from '@/content/photography';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!photo) return;

    // Save currently focused element to restore focus when lightbox closes
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      // Restore focus to original triggering element
      previouslyFocusedElementRef.current?.focus?.();
    };
  }, [photo, onClose]);

  if (!photo || typeof document === 'undefined') return null;

  const categoryLabel =
    photo.category === 'winner'
      ? 'AWARD WINNER'
      : photo.category === 'nature'
      ? 'NATURE & OBSERVATION'
      : 'STREET & EVERYDAY LIFE';

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view of photograph: ${photo.title}`}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 overflow-hidden animate-fadeIn"
      onClick={onClose}
    >
      {/* 1. Top Header Bar: Category, Format & Close Control */}
      <header
        className="w-full flex items-center justify-between shrink-0 z-10 max-w-6xl mx-auto pb-3 border-b border-[#262626]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 h-2 bg-[#FF4D24]" aria-hidden="true" />
          <span className="font-mono text-[10px] sm:text-xs text-[#FF4D24] uppercase tracking-mono-spaced font-bold">
            {categoryLabel}
          </span>
          <span className="text-[#404040] hidden sm:inline">&bull;</span>
          <span className="font-mono text-[10px] sm:text-xs text-[#A3A3A3] hidden sm:inline">
            FORMAT // {photo.aspectRatio.replace('/', ':')}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged photograph view (Press Escape)"
          className="font-mono text-xs text-[#F3F0E8] hover:text-white px-3.5 py-1.5 border border-[#333333] hover:border-[#FF4D24] bg-[#111111] hover:bg-[#1a1a1a] transition-all flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D24] cursor-pointer shadow-[2px_2px_0px_0px_#000000]"
        >
          <span className="font-bold">CLOSE</span>
          <span className="text-[10px] text-[#FF4D24] font-bold">[ESC]</span>
        </button>
      </header>

      {/* 2. Central Photograph Frame: strictly contained to available viewport */}
      <main
        className="flex-1 min-h-0 w-full flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center max-h-full max-w-full border-2 border-[#2E2E2E] bg-[#0A0A0A] p-1.5 sm:p-2 shadow-[8px_8px_0px_0px_#000000]">
          <picture className="flex items-center justify-center max-h-full max-w-full">
            <source srcSet={photo.src} type="image/jpeg" />
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[64vh] sm:max-h-[70vh] max-w-[88vw] w-auto h-auto object-contain select-none shadow-2xl"
              onError={(e) => {
                if (photo.originalSrc && e.currentTarget.src !== photo.originalSrc) {
                  e.currentTarget.src = photo.originalSrc;
                }
              }}
            />
          </picture>
        </div>
      </main>

      {/* 3. Understated Editorial Caption at Bottom */}
      <footer
        className="w-full max-w-2xl mx-auto text-center shrink-0 pt-2 pb-1 sm:pb-2 font-mono text-xs text-[#888888] space-y-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-[#F3F0E8] font-display font-bold tracking-tight text-sm sm:text-base uppercase">
          {photo.title}
        </div>
        {photo.recognition && (
          <div className="text-[#FF4D24] font-mono text-[11px] font-semibold">
            {photo.recognition}
          </div>
        )}
        <p className="text-[#A3A3A3] font-body text-xs max-w-lg mx-auto leading-relaxed line-clamp-2">
          {photo.caption}
        </p>
      </footer>
    </div>
  );

  return createPortal(modalContent, document.body);
};
