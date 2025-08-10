'use client'

import React, {useEffect, useRef} from 'react';
import {motion, useInView, animate} from 'framer-motion';
import {Layers3, Settings2, ShieldCheck, LayoutPanelLeft, CheckCircle2} from 'lucide-react';

// --- Вспомогательный компонент для анимированного счетчика ---

/**
 * Компонент для анимированной статистики (счетчик чисел) с использованием framer-motion.
 * @param {object} props - Пропсы компонента.
 * @param {string | number} props.to - Конечное значение (может быть строкой типа '500+').
 */
const AnimatedCounter = ({to}: { to: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-50px"});

  // Извлекаем числовое значение и суффикс
  const numericValue = parseInt(String(to).replace(/\D/g, ''), 10);
  const suffix = String(to).match(/\D*$/)?.[0] || '';

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      // Анимируем число от 0 до конечного значения
      animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            (ref.current as any).textContent = Math.round(latest).toString();
          }
        },
      });
    }
  }, [isInView, numericValue]);

  // Если значение не числовое (например, '24/7'), просто отображаем его
  if (isNaN(numericValue)) {
    return <span>{to}</span>;
  }

  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
};


// --- Исходные данные (без изменений) ---

type IconProps = React.ComponentProps<typeof Layers3>;

const featuresList = [
  {
    icon: Layers3,
    title: 'Szeroki wybór kolorów i powłok',
    description: 'Matowych, błyszczących oraz w różnych wariantach imitujących drewno. Produkujemy ogrodzenia metalowe z powłoką dwustronną, dzięki czemu mają ten sam kolor zarówno od strony zewnętrznej, jak i wewnętrznej posesji.'
  },
  {
    icon: Settings2,
    title: 'Zestawy indywidualne z możliwością samodzielnego montażu',
    description: 'Pozwalają zaoszczędzić środki i sprawiają, że produkt z segmentu premium staje się bardziej dostępny dla klienta.'
  },
  {
    icon: ShieldCheck,
    title: 'Wysokiej jakości certyfikowana stal',
    description: 'W naszych produktach wykorzystujemy wyłącznie sprawdzony i certyfikowany metal.'
  },
  {
    icon: LayoutPanelLeft,
    title: 'Unikalna geometria lameli',
    description: 'Zapewnia znacznie większą sztywność w porównaniu do konkurencyjnych rozwiązań, dzięki czemu nasze ogrodzenia nie „hałasują” na wietrze.'
  },
];

const guarantees = [
  'Szeroka gama kolorów i powłok (w tym imitacja drewna)',
  'Dwustronne powlekanie – ten sam kolor z obu stron',
  'Samodzielny montaż – oszczędność i wygoda',
  'Certyfikowana stal najwyższej jakości',
  'Mocna, cicha konstrukcja – bez hałasu na wietrze',
];

const stats = [
  {value: '500+', label: 'Zrealizowanych Projektów'},
  {value: '15', label: 'Lat Doświadczenia'},
  {value: '24/7', label: 'Wsparcie Techniczne'},
  {value: '100%', label: 'Gwarancja Jakości'},
];


// --- Основной компонент секции с интегрированной анимацией framer-motion ---

const WhyUsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});

  // Варианты анимации для контейнера списка преимуществ (для каскадного эффекта)
  const listContainerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Задержка между анимацией дочерних элементов
      },
    },
  };

  // Варианты анимации для каждого элемента списка
  const listItemVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: 'easeOut'}},
  };

  return (
    <section ref={ref} className="relative bg-[#242933] text-white py-20 sm:py-28 overflow-hidden">

      {/* --- Анимированные фоновые пятна (сделаны более заметными) --- */}
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <motion.div
          className="absolute top-1/4 left-[75px] w-[250px] h-[250px] bg-orange-600 rounded-full filter blur-[200px]"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-60 -right-40 w-[32rem] h-[32rem] bg-orange-700/20 rounded-full filter blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [0, 120, 0],
            opacity: [1, 0.2, 0.7, 0.2],
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

      {/* --- Основной контент с relative и z-10 для наложения поверх фона --- */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">

        {/* Заголовок секции с анимацией */}
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: -50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.7, ease: "easeOut"}}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Dlaczego warto wybrać nasze ogrodzenia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">

          {/* Левый блок: анимированный список преимуществ */}
          <motion.div
            className="space-y-6"
            variants={listContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {featuresList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={listItemVariants as any}>
                  <div
                    className="flex items-start gap-5 p-6 bg-[#2B303B]/80 backdrop-blur-sm rounded-xl border border-transparent hover:border-slate-700/50 transition-colors duration-300">
                    <div
                      className="flex-shrink-0 w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6"/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Правый блок: анимированная карточка с гарантиями */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.7, ease: "easeOut", delay: 0.5}}
          >
            <div
              className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 rounded-2xl shadow-2xl shadow-orange-900/20 sticky top-28">
              <h3 className="text-2xl font-bold mb-6">Nasze Gwarancje</h3>
              <ul className="space-y-4 mb-8">
                {guarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Zamów Wycenę
              </button>
            </div>
          </motion.div>
        </div>

        {/* Нижний блок: анимированная статистика */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-slate-700/50"
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.7, ease: "easeOut", delay: 0.8}}
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
                <AnimatedCounter to={stat.value}/>
              </p>
              <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUsSection;
