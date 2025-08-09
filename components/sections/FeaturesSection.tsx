'use client'

import React, { useEffect, useRef } from 'react';
// Импортируем motion и хуки для анимаций из Framer Motion
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Award, Cog, ShieldCheck, Globe, ClipboardCheck, GraduationCap, Shield } from 'lucide-react';

// Определяем тип для пропсов иконок
type IconProps = React.ComponentProps<typeof Award>;

// --- ДАННЫЕ ДЛЯ КОМПОНЕНТА (без изменений) ---
const mainFeatures = [
  {
    icon: Award,
    title: 'Wysoka Jakość',
    description: 'Wysoka jakość naszych produktów to jeden z głównych priorytetów firmy. Podczas produkcji ogrodzeń wykorzystujemy najnowsze technologie i materiały.',
    highlight: 'Gwarancja do 30 lat',
    highlightIcon: ShieldCheck,
  },
  {
    icon: Cog,
    title: 'Niezawodność',
    description: 'Produkcja wyrobów odbywa się zgodnie z międzynarodowymi normami. Wysoki poziom niezawodności osiągamy dzięki nowoczesnym technologiom produkcji.',
    highlight: 'Międzynarodowe normy',
    highlightIcon: Globe,
  },
];

const subFeatures = [
  {
    icon: ClipboardCheck,
    title: 'Kontrola Jakości',
    description: 'Stała kontrola jakości surowców oraz gotowych wyrobów na każdym etapie produkcji',
  },
  {
    icon: GraduationCap,
    title: 'Wykwalifikowani Specjaliści',
    description: 'Wysokie kwalifikacje naszych specjalistów gwarantują perfekcyjne wykonanie',
  },
  {
    icon: Shield,
    title: 'Ochrona Antykorozyjna',
    description: 'Nowoczesne metody ochrony przed korozją zapewniają długotrwałą wytrzymałość',
  },
];

const stats = [
  { value: '30', label: 'LAT GWARANCJI' },
  { value: '100', label: 'KONTROLA JAKOŚCI' }, // Изменено на число для демонстрации
  { value: 'ISO', label: 'CERTYFIKOWANE' },
  { value: '24/7', label: 'WSPARCIE' },
];

// --- КОНФИГУРАЦИЯ АНИМАЦИЙ FRAMER MOTION ---

// Анимация для появления блоков при прокрутке
const scrollAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

// Варианты анимации для иконки при наведении на родительский блок
const iconHoverVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 0 12px rgba(249, 115, 22, 0)",
    transition: {
      scale: { type: "spring", stiffness: 300, damping: 15 },
      boxShadow: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      },
    },
  },
};


// --- КОМПОНЕНТЫ ДЛЯ СТРАНИЦЫ ---

/**
 * Компонент для анимации "счетчика" чисел.
 * @param {{to: number}} props - Целевое число для анимации.
 */
function Counter({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Анимация от 0 до целевого значения
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, to]);

  // Возвращаем motion.span, чтобы Framer Motion мог его анимировать
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Компонент для иконки в оранжевом круге
const FeatureIcon: React.FC<{ icon: React.ElementType<IconProps> }> = ({ icon: Icon }) => (
  <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mb-6">
    <motion.div
      variants={iconHoverVariants as any}
      className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
      style={{ boxShadow: "0 0 0 0px rgba(249, 115, 22, 0.4)" }}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
  </div>
);


// --- ОСНОВНОЙ КОМПОНЕНТ СЕКЦИИ ---
const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-slate-50 text-slate-800 py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок секции */}
        <motion.div
          {...scrollAnimation}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900">
            ZA CO NAS POLECAJĄ
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kupując ogrodzenie u nas, dostajesz najwyższą jakość i niezawodność potwierdzoną latami doświadczenia
          </p>
        </motion.div>

        {/* Основные карточки (2 шт.) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const HighlightIcon = feature.highlightIcon;
            return (
              <motion.div
                key={index}
                {...scrollAnimation}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200/80 transition-all duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10 hover:-translate-y-1 h-full"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 mb-6">{feature.description}</p>
                    <div className="flex items-center gap-2 text-orange-500">
                      <HighlightIcon className="w-5 h-5" />
                      <span className="font-medium text-sm">{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Дополнительные преимущества (3 шт.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {subFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover="hover"
                animate="rest"
                {...scrollAnimation}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <FeatureIcon icon={Icon} />
                <h4 className="text-xl font-semibold mb-2 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 max-w-xs">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const isNumeric = !isNaN(parseFloat(stat.value));
            return (
              <motion.div
                key={index}
                {...scrollAnimation}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <p className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
                  {/* Используем компонент Counter для чисел и просто выводим текст для строк */}
                  {isNumeric ? <Counter to={parseFloat(stat.value)} /> : stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-500 tracking-widest uppercase">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
