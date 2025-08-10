'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Wrench, Palette, Phone } from 'lucide-react';

// Типизация для карточки продукта
interface FenceType {
  tag: string;
  tagColor: string;
  image: string;
  title: string;
  coating: string;
  material: string;
  colors: { code: string; hex: string }[] | { name: string; image: string }[];
  price?: string;
  priceNote?: string;
  buttonText: string;
}

// Данные для карточек продуктов
const fenceTypes: FenceType[] = [
  {
    tag: 'STANDARD',
    tagColor: 'bg-slate-500',
    image: '/images/ranczo.jpg',
    title: 'Ranczo Standard',
    coating: 'połysk / mat',
    material: 'Listwa składana, wypełnienie z pianki (styropian). Grubość blachy: 0,5 mm.',
    colors: [
      { code: '8017', hex: '#4A2A2A' }, { code: '8019', hex: '#3C3C3C' }, { code: '6005', hex: '#1E4433' },
      { code: '3005', hex: '#6E1F2A' }, { code: '7004', hex: '#8C8F91' }, { code: '7024', hex: '#474A51' },
      { code: '9003', hex: '#F4F4F4' }, { code: '1014', hex: '#E0D6C1' },
    ],
    price: '330 zł/szt',
    priceNote: 'Cena od',
    buttonText: 'Zapytaj o cenę',
  },
  {
    tag: 'MIX',
    tagColor: 'bg-orange-500',
    image: '/images/ranczo_mix_example.jpg',
    title: 'Ranczo MIX',
    coating: 'mat / printoch',
    material: 'Listwa składana, wypełnienie z pianki (styropian). Grubość blachy: 0,5 mm.',
    colors: [
      { code: '8017', hex: '#4A2A2A' }, { code: '8019', hex: '#3C3C3C' }, { code: '6005', hex: '#1E4433' },
      { code: '3005', hex: '#6E1F2A' }, { code: '7024', hex: '#474A51' }, { code: '9003', hex: '#F4F4F4' },
      { code: '1014', hex: '#E0D6C1' }, { code: 'Złoty dąb', hex: '#B8860B' },
    ],
    price: '350 zł/szt',
    priceNote: 'Cena od',
    buttonText: 'Zapytaj o cenę',
  },
  {
    tag: 'DREWNO',
    tagColor: 'bg-yellow-700',
    image: '/images/ranczo_drzewo.jpg',
    title: 'Ranczo w kolorze drewna',
    coating: 'Printoch',
    material: 'Listwa składana, wypełnienie z pianki (styropian). Grubość blachy: 0,5 mm.',
    colors: [
      { name: 'Złoty dąb', image: 'https://placehold.co/40x20/B8860B/B8860B' },
      { name: 'Tosca', image: 'https://placehold.co/40x20/96694F/96694F' },
      { name: 'Orzech', image: 'https://placehold.co/40x20/6F4E37/6F4E37' },
      { name: 'Wiszna', image: 'https://placehold.co/40x20/8B0000/8B0000' },
    ],
    priceNote: 'Wycena indywidualna',
    buttonText: 'Zapytaj o cenę',
  },
];

// Данные для секции сравнения
const comparisonFeatures = [
  {
    icon: Shield,
    title: 'Trwałość',
    description: 'Odporna na warunki atmosferyczne powłoka zapewnia długotrwałą ochronę.',
  },
  {
    icon: Wrench,
    title: 'Łatwy montaż',
    description: 'System składanych listew umożliwia szybki i prosty montaż.',
  },
  {
    icon: Palette,
    title: 'Różnorodność',
    description: 'Szeroka gama kolorów i wykończeń dopasowana do każdego stylu.',
  },
];

// Компонент для анимированного появления при скролле
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Варианты анимации для контейнеров и их дочерних элементов
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },
};


const RanchFenceSection: React.FC = () => {
  const cardsRef = React.useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const comparisonRef = React.useRef(null);
  const comparisonInView = useInView(comparisonRef, { once: true, amount: 0.3 });

  const sectionStyle = {
    backgroundColor: '#242933',
    backgroundImage: 'repeating-linear-gradient(90deg, #2B303B, #2B303B 2px, transparent 2px, transparent 6px)',
  };

  return (
    <section style={sectionStyle} className="text-white pt-20 pb-10 sm:pt-28 sm:pb-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ogrodzenie Typu Ranczo
          </h2>
          <p className="text-lg text-slate-300">
            Profesjonalne ogrodzenia metalowe z najwyższej jakości materiałów. Trzy warianty do wyboru - każdy z unikalnym charakterem.
          </p>
        </AnimatedSection>

        {/* 3 карточки продуктов */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch"
        >
          {fenceTypes.map((fence, index) => (
            <motion.div
              key={index}
              variants={itemVariants as any}
              className="bg-[#2B303B] rounded-2xl shadow-lg border border-slate-700/50 flex flex-col transition-all duration-300 hover:border-orange-500/50 hover:!scale-105 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={fence.image}
                  alt={fence.title}
                  className="rounded-t-2xl h-56 w-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/2B303B/FFFFFF?text=Image+not+found'; }}
                />
                <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full ${fence.tagColor}`}>
                  {fence.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{fence.title}</h3>
                <div className="space-y-3 text-sm text-slate-300 mb-5 flex-grow">
                  <p><span className="font-semibold text-slate-100">Powłoka:</span> {fence.coating}</p>
                  <p><span className="font-semibold text-slate-100">Materiał:</span> {fence.material}</p>
                  <div>
                    <p className="font-semibold text-slate-100 mb-2">Dostępne kolory:</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      {fence.colors.map((color, i) => (
                        'hex' in color ? (
                          <div key={i} className="group relative">
                            <div className="w-6 h-6 rounded-sm border border-slate-600" style={{ backgroundColor: color.hex }}></div>
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-xs px-2 py-1 rounded z-10">
                              {color.code}
                            </span>
                          </div>
                        ) : (
                          <div key={i} className="group relative">
                            <img src={color.image} alt={color.name} className="w-10 h-5 rounded-sm border border-slate-600 object-cover"/>
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-xs px-2 py-1 rounded z-10">
                              {color.name}
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-5 border-t border-slate-700/50 flex justify-between items-center">
                  <div>
                    {fence.priceNote && <p className="text-sm text-slate-400">{fence.priceNote}</p>}
                    {fence.price ?
                      <p className="text-2xl font-bold text-orange-500">{fence.price}</p> :
                      <p className="text-xl font-bold text-orange-500">Wycena</p>
                    }
                  </div>
                  <button className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {fence.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Секция сравнения */}
        <AnimatedSection>
          <div className="bg-[#2B303B] p-8 sm:p-12 rounded-2xl border border-slate-700/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">Porównanie właściwości</h3>
            <motion.div
              ref={comparisonRef}
              variants={containerVariants}
              initial="hidden"
              animate={comparisonInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {comparisonFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={itemVariants as any} className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm max-w-xs">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RanchFenceSection;
