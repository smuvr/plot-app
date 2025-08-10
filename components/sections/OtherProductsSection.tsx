'use client'

import React from 'react';
import {motion} from 'framer-motion';
import {
  Shield, Wind, Sun, Palette, Zap, Eye, CheckCircle,
  Layers, CookingPot, ArrowRight
} from 'lucide-react';

// --- Анимационные варианты для Framer Motion ---

// Появление снизу
const fadeInUp = {
  initial: {opacity: 0, y: 30},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true, amount: 0.3}
};

// Появление слева
const fadeInLeft = {
  initial: {opacity: 0, x: -50},
  whileInView: {opacity: 1, x: 0},
  viewport: {once: true, amount: 0.5}
};

// Появление справа
const fadeInRight = {
  initial: {opacity: 0, x: 50},
  whileInView: {opacity: 1, x: 0},
  viewport: {once: true, amount: 0.5}
};

// Появление с увеличением
const scaleUp = {
  initial: {opacity: 0, scale: 0.9},
  whileInView: {opacity: 1, scale: 1},
  viewport: {once: true, amount: 0.5}
};

// Контейнер для каскадной анимации дочерних элементов
const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: {once: true, amount: 0.2}
};


// --- Компоненты ---

const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({children}) => (
  // Добавляем анимацию для каждого элемента списка
  <motion.li
    variants={fadeInUp}
    className="flex items-start gap-3"
  >
    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1"/>
    <span className="text-slate-300">{children}</span>
  </motion.li>
);

interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  imagePosition?: 'left' | 'right';
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   image,
                                                   imageAlt,
                                                   title,
                                                   description,
                                                   features,
                                                   imagePosition = 'left'
                                                 }) => (
  // Анимируем всю карточку как единый блок
  <motion.div
    initial="initial"
    whileInView="whileInView"
    viewport={{once: true, amount: 0.3}}
    transition={{staggerChildren: 0.2}}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
  >
    <motion.div
      variants={imagePosition === 'right' ? fadeInRight : fadeInLeft}
      className={`h-80 rounded-2xl overflow-hidden shadow-xl ${imagePosition === 'right' ? 'lg:order-last' : ''}`}
    >
      <img src={image} alt={imageAlt} className="w-full h-full object-cover"/>
    </motion.div>
    <motion.div
      variants={imagePosition === 'right' ? fadeInLeft : fadeInRight}
      className={imagePosition === 'right' ? 'lg:order-first' : ''}
    >
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
      {/* Используем stagger для списка */}
      <motion.ul
        initial="initial"
        whileInView="whileInView"
        viewport={{once: true, amount: 0.3}}
        transition={{staggerChildren: 0.15}}
        className="space-y-3"
      >
        {features.map((feature, index) => (
          <FeatureListItem key={index}>{feature}</FeatureListItem>
        ))}
      </motion.ul>
    </motion.div>
  </motion.div>
);


const OtherProductsSection: React.FC = () => {
  return (
    <section className="relative text-white py-20 sm:py-28 overflow-hidden">
      {/* Отдельный div для фона, чтобы он был позади пятен */}
      <div className="absolute inset-0 bg-[#242933] -z-20"/>

      {/* Анимированные фоновые пятна. Теперь у них z-index -10, что выше фона (-z-20) */}
      <motion.div
        className="absolute top-48 -left-20 w-96 h-96 bg-orange-500/70 rounded-full filter blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[80rem] h-[30rem] bg-orange-500 rounded-full filter blur-[300px] -z-10"
        animate={{
          x: [100, -100, 100],
          y: [80, -80, 80],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[100px] h-[100px] bg-orange-500 rounded-full filter blur-[80px] -z-20"
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
          scale: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {/* Контейнер с контентом. z-10 ставит его поверх всего */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Заголовок */}
        <motion.div
          {...fadeInUp}
          transition={{duration: 0.5}}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Inne Wyroby z Blachy
          </h2>
          <p className="text-lg text-slate-300">
            Oferujemy szeroki zakres produktów z blachy, łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.
          </p>
        </motion.div>

        <div className="space-y-24">

          {/* Dachówka w Karo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInLeft} transition={{duration: 0.6}}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Dachówka w Karo</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Panele dachowe o kształcie rombu, ułożone w charakterystyczny wzór przypominający wzór kart do gry w
                karo. Wykorzystywane jako pokrycie dachowe, lub jako fasada do elewacji ścian zewnętrznych.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
              >
                {[
                  {icon: Shield, label: 'Trwałość'}, {icon: Wind, label: 'Lekkość'},
                  {icon: Sun, label: 'Łatwy montaż'}, {icon: Palette, label: 'Kolory'},
                  {icon: Zap, label: 'Odporność'}, {icon: Eye, label: 'Estetyka'}
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-[#2B303B] p-4 rounded-lg border border-slate-700/50"
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-orange-400"/>
                      <span className="text-sm font-semibold">{item.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
            <motion.div {...fadeInRight} transition={{duration: 0.6}}
                        className="h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/dachowka_karo.jpg" alt="Dachówka w Karo"
                   className="w-full h-full object-cover"/>
            </motion.div>
          </div>

          {/* Obróbka Blacharska Parapetowa */}
          <ProductCard
            image="/images/parapet.jpg"
            imageAlt="Obróbka blacharska parapetowa"
            imagePosition="left"
            title="Obróbka Blacharska Parapetowa"
            description="Metalowe konstrukcje wykonane ze stali ocynkowanej malowanej, miedzi, tytan-cynku. Zabezpieczają i uszczelniają zewnętrzne części ścian, dachy, ogrodzenia czy balkony."
            features={[
              "Ochrona przed opadami",
              "Wykończenie elewacji",
              "Estetyczne wykończenie"
            ]}
          />

          {/* Balustrady Balkonowe */}
          <ProductCard
            image="/images/balustrada.jpg"
            imageAlt="Balustrada balkonowa"
            imagePosition="right"
            title="Balustrady Balkonowe"
            description="Nowoczesne i praktyczne rozwiązanie z blachy stalowej, łączące bezpieczeństwo, trwałość oraz estetykę wykonania. Dostępne w różnych stylach i formach."
            features={[
              "Wytrzymałość", "Niskie koszty",
              "Wzory", "Samodzielny montaż"
            ]}
          />

          {/* Daszki na Komin */}
          <ProductCard
            image="/images/daszek.jpg"
            imageAlt="Daszek na komin"
            imagePosition="left"
            title="Daszki na Komin"
            description="Metalowe konstrukcje kominowe są nie tylko częścią komina. Główne zadanie to osłona przed opadami atmosferycznymi, zanieczyszczeniami i poprawa właściwości komina."
            features={[
              "Ochrona przed opadami atmosferycznymi",
              "Zabezpieczenie przed ptakami i zanieczyszczeniami",
              "Poprawa ciągu kominowego",
              "Walory estetyczne i dekoracyjne"
            ]}
          />
        </div>

        {/* Inne Wyroby */}
        <motion.div
          {...fadeInUp}
          transition={{duration: 0.5}}
          className="my-24"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Inne Wyroby</h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}
                        className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 flex items-center gap-5">
              <div
                className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Elementy Wykończeniowe</h4>
                <p className="text-sm text-slate-400">Gąsiory i inne obróbki blacharskie</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}
                        className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 flex items-center gap-5">
              <div
                className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <CookingPot className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Okapy Kuchenne</h4>
                <p className="text-sm text-slate-400">Wysokiej jakości okapy wykonane na zamówienie</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Финальный призыв к действию */}
        <motion.div
          {...scaleUp}
          transition={{duration: 0.5}}
          className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 rounded-2xl text-center shadow-2xl shadow-orange-900/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">Potrzebujesz Wyceny?</h3>
          <p className="text-white/90 mb-6">Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.</p>
          <button
            className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
            Otrzymaj Wycenę <ArrowRight className="w-5 h-5"/>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default OtherProductsSection;
