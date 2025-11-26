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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold" style={{ color: 'rgb(133, 14, 53)' }}>
              Kelin.Academy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-gray-700 hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Программа
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Отзывы
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Стоимость
            </a>
            <a href="#faq" className="text-gray-700 hover:text-[rgb(133,14,53)] transition-colors font-medium">
              Вопросы
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgb(133, 14, 53)' }}
          >
            Записаться
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col py-4 space-y-4">
              <a href="#program" className="px-4 py-2 text-gray-700 hover:text-[rgb(133,14,53)]" onClick={() => setIsMobileMenuOpen(false)}>
                Программа
              </a>
              <a href="#reviews" className="px-4 py-2 text-gray-700 hover:text-[rgb(133,14,53)]" onClick={() => setIsMobileMenuOpen(false)}>
                Отзывы
              </a>
              <a href="#pricing" className="px-4 py-2 text-gray-700 hover:text-[rgb(133,14,53)]" onClick={() => setIsMobileMenuOpen(false)}>
                Стоимость
              </a>
              <a href="#faq" className="px-4 py-2 text-gray-700 hover:text-[rgb(133,14,53)]" onClick={() => setIsMobileMenuOpen(false)}>
                Вопросы
              </a>
              <a
                href="#pricing"
                className="mx-4 px-6 py-3 rounded-full text-white font-semibold text-center"
                style={{ backgroundColor: 'rgb(133, 14, 53)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Записаться
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
