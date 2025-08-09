'use client'

import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

// Данные для навигационных ссылок
const navLinks = [
  { name: 'O nas', href: '#about' },
  { name: 'Projekty', href: '#projects' },
  { name: 'Produkty', href: '#products' },
  { name: 'Kontakt', href: '#contact' },
];

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Фоновое изображение с затемнением */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hero.png"
          alt="Nowoczesny dom z ogrodzeniem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Навигационная панель */}
      <header className="relative z-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <Shield className="w-7 h-7 text-orange-500" />
              <span>ALFAMODUL</span>
            </a>

            {/* Навигация для десктопа */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Кнопка "Заказать" и иконка меню */}
            <div className="flex items-center gap-4">
              <a
                href="#quote"
                className="hidden sm:inline-block bg-orange-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
              >
                Zamów wycenę
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white"
                aria-label="Otwórz menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="relative z-10 lg:hidden bg-gray-900/95 backdrop-blur-md py-6">
          <nav className="container mx-auto px-4 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-slate-200 hover:text-orange-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center mt-4 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
            >
              Zamów wycenę
            </a>
          </nav>
        </div>
      )}

      {/* Основной контент */}
      <main className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Nowoczesne Ogrodzenia,
            <br />
            <span className="text-orange-500">Bezkompromisowa Jakość</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Najwyższej jakości konstrukcje metalowe, wykonane z precyzją i stworzone, by służyć latami.
          </p>
          <div className="mt-10">
            <a
              href="#quote"
              className="inline-block bg-orange-500 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Zamów Wycenę
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
