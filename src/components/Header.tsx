'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#FFFBF7]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(93,78,55,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🍳</span>
            <span className="text-xl md:text-2xl font-bold text-[#3D3229]">
              Kelin<span className="text-[rgb(133,14,53)]">.Academy</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[#5D4E37] hover:text-[rgb(133,14,53)] transition-colors font-medium">
              О курсе
            </a>
            <a href="#program" className="text-[#5D4E37] hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Программа
            </a>
            <a href="#reviews" className="text-[#5D4E37] hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Отзывы
            </a>
            <a href="#faq" className="text-[#5D4E37] hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Вопросы
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgb(133,14,53)] text-white font-semibold transition-all hover:bg-[rgb(163,44,83)]"
          >
            <span>Записаться</span>
            <span>→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#3D3229]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FFFBF7] border-t border-[#E8C4A8]/30 rounded-b-2xl shadow-lg">
            <nav className="flex flex-col py-4">
              <a href="#about" className="px-4 py-3 text-[#5D4E37] hover:bg-[#FAF3EB] rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>
                О курсе
              </a>
              <a href="#program" className="px-4 py-3 text-[#5D4E37] hover:bg-[#FAF3EB] rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>
                Программа
              </a>
              <a href="#reviews" className="px-4 py-3 text-[#5D4E37] hover:bg-[#FAF3EB] rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>
                Отзывы
              </a>
              <a href="#faq" className="px-4 py-3 text-[#5D4E37] hover:bg-[#FAF3EB] rounded-lg mx-2" onClick={() => setIsMobileMenuOpen(false)}>
                Вопросы
              </a>
              <div className="px-4 pt-4 pb-2">
                <a
                  href="#pricing"
                  className="block w-full py-3 rounded-full bg-[rgb(133,14,53)] text-white font-semibold text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Записаться на курс
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
