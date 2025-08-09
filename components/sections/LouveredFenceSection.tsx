import React from 'react';
import { Box, Palette, CheckCircle, Settings, Ruler, Star, Award, Home, MapPin, Phone, Mail, Send } from 'lucide-react';

// Типизация для карточки продукта
interface LouveredFenceType {
  icon: React.ElementType;
  title: string;
  image: string;
  profile: string;
  slatDims: string;
  fastening: string;
  sectionDims: string;
  colors: { type: 'ral'; code: string; hex: string }[] | { type: 'wood'; name: string; image: string }[];
  advantages: string;
  price: string;
  priceNote: string;
}

// Данные для карточек продуктов
const louveredFenceTypes: LouveredFenceType[] = [
  {
    icon: Box,
    title: 'Ogrodzenie Żaluzjowe Matowe',
    image: 'https://placehold.co/600x400/4A5568/FFFFFF?text=Ogrodzenie+Matowe',
    profile: 'Klasyczna forma lameli - elegancja i funkcjonalność.',
    slatDims: 'Grubość: 0,5 mm, Szerokość: 80 mm',
    fastening: 'Nity lub wkręty - rozstaw co 95 mm',
    sectionDims: 'od 2 m do 3,5 m',
    colors: [
      { type: 'ral', code: 'Grafitowy (7024)', hex: '#474A51' },
      { type: 'ral', code: 'Szary (7004)', hex: '#8C8F91' },
      { type: 'ral', code: 'Brązowy (8017)', hex: '#4A2A2A' },
      { type: 'ral', code: 'Czarny (9005)', hex: '#0A0A0A' },
      { type: 'ral', code: 'Biały (9003)', hex: '#F4F4F4' },
    ],
    advantages: 'Przepuszcza światło i widoczność od strony posesji, zapewnia pełną prywatność od strony ulicy.',
    price: 'od 370 zł/m²',
    priceNote: 'Cena bez montażu',
  },
  {
    icon: Palette,
    title: 'Ogrodzenie w Kolorze Drewna',
    image: 'https://placehold.co/600x400/8B5A2B/FFFFFF?text=Ogrodzenie+Drewnopodobne',
    profile: 'Klasyczna forma lameli - elegancja i funkcjonalność.',
    slatDims: 'Grubość: 0,5 mm, Szerokość: 80 mm',
    fastening: 'Nity lub wkręty - rozstaw co 95 mm',
    sectionDims: 'od 2 m do 3,5 m',
    colors: [
      { type: 'wood', name: 'Złoty dąb', image: 'https://placehold.co/40x20/B8860B/B8860B' },
      { type: 'wood', name: 'Tosca', image: 'https://placehold.co/40x20/96694F/96694F' },
      { type: 'wood', name: 'Orzech', image: 'https://placehold.co/40x20/6F4E37/6F4E37' },
      { type: 'wood', name: 'Wiszna', image: 'https://placehold.co/40x20/8B0000/8B0000' },
    ],
    advantages: 'Przepuszcza światło i widoczność od strony posesji, zapewnia pełną prywatność od strony ulicy.',
    price: 'od 395 zł/m²',
    priceNote: 'Cena bez montażu',
  },
];

// Данные для блока преимуществ
const ourAdvantages = [
  { icon: Award, title: 'Fabryczna precyzja', description: 'Produkcja na zautomatyzowanej linii rolowania.' },
  { icon: Star, title: 'Estetyka i prywatność', description: 'Widoczność z posesji, osłona od ulicy.' },
  { icon: Home, title: 'Uniwersalność', description: 'Idealne do altan, werand, wiat.' },
  { icon: MapPin, title: 'Białystok', description: 'Bez pośredników, prosto z zakładu.' },
];

const LouveredFenceSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ogrodzenia Żaluzjowe
          </h2>
          <p className="text-lg text-slate-300">
            Nowoczesność, prywatność i styl - wszystko w jednym! Profesjonalne ogrodzenia z profilu Z prosto z fabryki w Białymstoku.
          </p>
        </div>

        {/* 2 карточки продуктов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {louveredFenceTypes.map((fence, index) => {
            const Icon = fence.icon;
            return (
              <div key={index} className="bg-[#2B303B] rounded-2xl shadow-lg border border-slate-700/50 flex flex-col transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1">
                <div className="p-6 flex items-center gap-4 border-b border-slate-700">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{fence.title}</h3>
                </div>
                <img src={fence.image} alt={fence.title} className="h-52 w-full object-cover" />
                <div className="p-6 space-y-4 text-sm">
                  <p><strong className="text-slate-100">Profil Z:</strong> <span className="text-slate-300">{fence.profile}</span></p>
                  <p><strong className="text-slate-100">Wymiary lameli:</strong> <span className="text-slate-300">{fence.slatDims}</span></p>
                  <p><strong className="text-slate-100">Mocowanie:</strong> <span className="text-slate-300">{fence.fastening}</span></p>
                  <p><strong className="text-slate-100">Wymiary sekcji:</strong> <span className="text-slate-300">{fence.sectionDims}</span></p>
                  <div>
                    <p className="font-semibold text-slate-100 mb-2">Dostępne kolory:</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      {fence.colors.map((color, i) => (
                        color.type === 'ral' ? (
                          <div key={i} className="group relative">
                            <div className="w-7 h-7 rounded-md border border-slate-600" style={{ backgroundColor: color.hex }}></div>
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                                            {color.code}
                                        </span>
                          </div>
                        ) : (
                          <div key={i} className="group relative">
                            <img src={color.image} alt={color.name} className="w-12 h-6 rounded-sm border border-slate-600 object-cover"/>
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-xs px-2 py-1 rounded z-10 whitespace-nowrap">
                                            {color.name}
                                        </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                  <p><strong className="text-slate-100">Zalety:</strong> <span className="text-slate-300">{fence.advantages}</span></p>
                </div>
                <div className="mt-auto p-6 border-t border-slate-700 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400">{fence.priceNote}</p>
                    <p className="text-2xl font-bold text-orange-500">{fence.price}</p>
                  </div>
                  <button className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300">
                    Wycena
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Секция преимуществ */}
        <div className="bg-[#2B303B] p-8 sm:p-12 rounded-2xl border border-slate-700/50 mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">Zalety naszego ogrodzenia</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {ourAdvantages.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm max-w-xs">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Финальный призыв к действию */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 rounded-2xl text-center shadow-2xl shadow-orange-900/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">Potrzebujesz indywidualnej wyceny?</h3>
          <p className="text-white/90 mb-6">Skontaktuj się z nami, aby uzyskać szczegółową wycenę montażu "pod klucz".</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Zadzwoń teraz
            </button>
            <button className="bg-white/20 border-2 border-white/50 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Wyślij zapytanie
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LouveredFenceSection;
