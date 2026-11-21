import React, { useState, useEffect } from 'react';
import { PROFILE } from '@/content/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkNav, setIsDarkNav] = useState(false);

  // Dynamic theme adaptation when intersecting dark sections
  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    if (darkSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.some((entry) => entry.isIntersecting);
        setIsDarkNav(intersecting);
      },
      {
        rootMargin: '-70px 0px -85% 0px',
        threshold: 0,
      }
    );

    darkSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md border-b ${
        isDarkNav
          ? 'bg-[#111111]/90 border-[#262626] text-[#F3F0E8]'
          : 'bg-[#F3F0E8]/90 border-[#D8D5CC] text-[#151515]'
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        {/* Wordmark: Just the name and signature orange block */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-sm sm:text-base font-display font-bold tracking-tight hover:text-[#FF4D24] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24]"
        >
          <span className="w-2.5 h-2.5 bg-[#FF4D24] inline-block transition-transform duration-200 group-hover:scale-125" />
          <span className="uppercase tracking-tight">{PROFILE.name}</span>
        </a>

        {/* Clean Editorial Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 lg:gap-8 font-mono text-xs tracking-mono-spaced">
          <a
            href="#projects"
            className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] ${
              isDarkNav ? 'text-[#A3A3A3] hover:text-[#F3F0E8]' : 'text-[#787670] hover:text-[#151515]'
            }`}
          >
            PROJECTS
          </a>

          <a
            href="#about"
            className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] ${
              isDarkNav ? 'text-[#A3A3A3] hover:text-[#F3F0E8]' : 'text-[#787670] hover:text-[#151515]'
            }`}
          >
            ABOUT
          </a>

          <a
            href="#music"
            className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] ${
              isDarkNav ? 'text-[#A3A3A3] hover:text-[#F3F0E8]' : 'text-[#787670] hover:text-[#151515]'
            }`}
          >
            MUSIC
          </a>

          <a
            href="#photography"
            className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] ${
              isDarkNav ? 'text-[#A3A3A3] hover:text-[#F3F0E8]' : 'text-[#787670] hover:text-[#151515]'
            }`}
          >
            PHOTOGRAPHY
          </a>

          <a
            href="#contact"
            className={`px-4 py-2 transition-all focus-visible:outline-2 focus-visible:outline-[#FF4D24] border font-bold ${
              isDarkNav
                ? 'bg-[#F3F0E8] text-[#111111] border-[#F3F0E8] hover:bg-[#FF4D24] hover:border-[#FF4D24] hover:text-white'
                : 'bg-[#111111] text-[#F3F0E8] border-[#111111] hover:bg-[#FF4D24] hover:border-[#FF4D24] hover:text-white'
            }`}
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className={`md:hidden font-mono text-xs tracking-mono-spaced border px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D24] ${
            isDarkNav
              ? 'bg-[#F3F0E8] text-[#111111] border-[#F3F0E8] hover:bg-[#FF4D24] hover:text-white'
              : 'bg-[#111111] text-[#F3F0E8] border-[#111111] hover:bg-[#FF4D24] hover:text-white'
          }`}
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`md:hidden border-t px-6 py-8 font-mono text-sm space-y-6 ${
            isDarkNav
              ? 'bg-[#111111] border-[#262626] text-[#F3F0E8]'
              : 'bg-[#F3F0E8] border-[#D8D5CC] text-[#151515]'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b font-bold ${
                isDarkNav ? 'border-[#262626]' : 'border-[#D8D5CC]'
              }`}
            >
              TOP // HOME
            </a>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b ${
                isDarkNav ? 'border-[#262626]' : 'border-[#D8D5CC]'
              }`}
            >
              PROJECTS
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b ${
                isDarkNav ? 'border-[#262626]' : 'border-[#D8D5CC]'
              }`}
            >
              ABOUT
            </a>

            <a
              href="#music"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b ${
                isDarkNav ? 'border-[#262626]' : 'border-[#D8D5CC]'
              }`}
            >
              MUSIC // LOUD / IN PROGRESS
            </a>

            <a
              href="#photography"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b ${
                isDarkNav ? 'border-[#262626]' : 'border-[#D8D5CC]'
              }`}
            >
              PHOTOGRAPHY // WHAT THE EYE KEEPS
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#FF4D24] text-white py-3 font-bold mt-4 hover:bg-[#e03d15] transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>

          <div
            className={`pt-4 border-t text-xs ${
              isDarkNav ? 'border-[#262626] text-[#A3A3A3]' : 'border-[#D8D5CC] text-[#787670]'
            }`}
          >
            <div>{PROFILE.name}</div>
            <div>{PROFILE.institution} &bull; Class of {PROFILE.graduationYear}</div>
          </div>
        </div>
      )}
    </header>
  );
};
