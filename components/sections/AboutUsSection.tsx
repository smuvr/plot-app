'use client'

import React from 'react';
// FRAMER-MOTION: Импортируем motion для создания анимированных компонентов
import {motion} from 'framer-motion';
import {Wrench, Gem, Palette, Zap, Award, ShoppingCart, Phone, ArrowRight} from 'lucide-react';

// Данные для карточек с преимуществами (без изменений)
const features = [
  {
    icon: Wrench,
    title: 'Ukryty montaż',
    description: 'Niewidoczne łączenia zapewniające perfekcyjną estetykę.',
  },
  {
    icon: Gem,
    title: 'Wysokiej jakości metal',
    description: 'Materiały i rygorystyczne testy gwarantujące najwyższą jakość.',
  },
  {
    icon: Palette,
    title: 'Stylowy design',
    description: 'Nowoczesne i eleganckie rozwiązania podkreślające charakter posesji.',
  },
  {
    icon: Zap,
    title: 'Trwałość',
    description: 'Konstrukcje odporne na upływ czasu i warunki atmosferyczne.',
  },
];

// FRAMER-MOTION: Определяем варианты анимаций для переиспользования
const fadeInUp = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const scaleIn = {
  hidden: {opacity: 0, scale: 0.95},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


// Основной компонент секции
const AboutUsSection: React.FC = () => {

  const sectionStyle = {
    backgroundColor: '#242933',
  };

  return (
    <section
      style={sectionStyle}
      // Добавляем relative и isolate для корректного позиционирования фоновых пятен
      className="relative isolate text-white py-20 sm:py-28 overflow-hidden"
    >
      {/* --- Анимированные фоновые пятна --- */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[10%] left-[30%] w-96 h-96 bg-orange-800/30 rounded-full filter blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-70 left-0 w-[32rem] h-[32rem] bg-orange-700/20 rounded-full filter blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [0, 120, 0],
            opacity: [1, 0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        <motion.div
          className="absolute bottom-30 -right-40 w-[32rem] h-[32rem] bg-orange-700/20 rounded-full filter blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [0, 120, 0],
            opacity: [0, 0.3, 0.7, 0.3, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">

        {/* Верхний блок: О нас + Изображение */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">

          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={fadeInUp as any}
          >
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase mb-2">O NAS</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">ALFAMODUL</h1>
            <p className="text-slate-300 mb-4 leading-relaxed">
              ALFAMODUL to dynamicznie rozwijająca się firma, specjalizująca się w produkcji nowoczesnych paneli
              ogrodzeniowych typu ranczo oraz żaluzji wykonanych z metalu. Nasz zespół tworzą specjaliści z wieloletnim
              doświadczeniem w projektowaniu i wytwarzaniu ogrodzeń.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Oferujemy naszym klientom nowoczesne podejście zarówno pod względem jakości produktów, jak i kompleksowej
              obsługi. Naszym celem jest maksymalne uproszczenie procesu zakupu ogrodzenia.
            </p>
            <p className="text-slate-300 mb-10 leading-relaxed">
              Dzięki naszemu doświadczeniu jesteśmy w stanie zaproponować najlepsze rozwiązania dopasowane do
              indywidualnych potrzeb każdego klienta - od doradztwa w wyborze modelu, poprzez produkcję i montaż.
            </p>
            <a href="#products"
               className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 self-start flex items-center gap-2">
              Poznaj nasze produkty <ArrowRight className="w-5 h-5"/>
            </a>
          </motion.div>

          <motion.div
            className="relative h-96 lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={scaleIn as any}
          >
            <img
              src="/images/insperacja.png"
              alt="Pracownik w warsztacie produkującym ogrodzenia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div
              className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-600 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white"/>
              </div>
              <div>
                <h4 className="font-bold text-white">Wieloletnie doświadczenie</h4>
                <p className="text-sm text-slate-300">Specjaliści w projektowaniu</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-colors duration-300 flex flex-col items-start text-left"
                variants={fadeInUp as any}
              >
                <div
                  className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6"/>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center bg-[#2B303B] py-12 px-8 rounded-2xl border border-slate-700/50"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={fadeInUp as any}
        >
          <h2 className="text-3xl font-bold mb-4">Dlaczego ALFAMODUL?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Polecamy najlepsze rozwiązania dla Twojego ogrodzenia! Wybierz żaluzje i ranczo - ciesz się jakością oraz
            stylem każdego dnia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact"
               className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5"/> Zamów już dziś
            </a>
            <a href="#contact-details"
               className="bg-transparent border-2 border-slate-600 text-slate-300 font-bold py-3 px-6 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5"/> Skontaktuj się z nami
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUsSection;
