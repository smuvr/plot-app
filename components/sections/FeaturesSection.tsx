import React from 'react';
import { Award, Cog, ShieldCheck, Globe, ClipboardCheck, GraduationCap, Shield } from 'lucide-react';

// Определяем тип для пропсов иконок, чтобы можно было их передавать динамически
type IconProps = React.ComponentProps<typeof Award>;

// Данные для карточек, чтобы избежать повторения JSX
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
  { value: '100%', label: 'KONTROLA JAKOŚCI' },
  { value: 'ISO', label: 'CERTYFIKOWANE' },
  { value: '24/7', label: 'WSPARCIE' },
];

// Компонент для иконки в оранжевом круге
const FeatureIcon: React.FC<{ icon: React.ElementType<IconProps> }> = ({ icon: Icon }) => (
  <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center mb-6">
  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
    </div>
    </div>
);


// Основной компонент секции
const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
    <div className="container mx-auto px-4 max-w-7xl">

      {/* Заголовок секции */}
      <div className="text-center mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
    ZA CO NAS POLECAJĄ
  </h2>
  <p className="text-lg text-slate-300 max-w-3xl mx-auto">
    Kupując ogrodzenie u nas, dostajesz najwyższą jakość i niezawodność potwierdzoną latami doświadczenia
  </p>
  </div>

  {/* Основные карточки (2 шт.) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
    {mainFeatures.map((feature, index) => {
        const Icon = feature.icon;
        const HighlightIcon = feature.highlightIcon;
        return (
          <div key={index} className="bg-[#2B303B] p-8 rounded-2xl shadow-lg border border-slate-700/50 transition-all duration-300 hover:border-orange-500/50 hover:shadow-orange-500/10 hover:-translate-y-1">
        <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-slate-300 mb-6">{feature.description}</p>
          <div className="flex items-center gap-2 text-orange-400">
        <HighlightIcon className="w-5 h-5" />
        <span className="font-medium text-sm">{feature.highlight}</span>
          </div>
          </div>
          </div>
          </div>
      );
      })}
    </div>

  {/* Дополнительные преимущества (3 шт.) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
    {subFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex flex-col items-center">
        <FeatureIcon icon={Icon} />
        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
          <p className="text-slate-300 max-w-xs">{feature.description}</p>
          </div>
      );
      })}
    </div>

  {/* Статистика */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {stats.map((stat, index) => (
        <div key={index}>
        <p className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">{stat.value}</p>
          <p className="text-sm font-semibold text-slate-400 tracking-widest uppercase">{stat.label}</p>
        </div>
))}
  </div>

  </div>
  </section>
);
};

export default FeaturesSection;
