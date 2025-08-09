import React from 'react';
import { Layers3, Settings2, ShieldCheck, LayoutPanelLeft, CheckCircle2 } from 'lucide-react';

// Определяем тип для пропсов иконок
type IconProps = React.ComponentProps<typeof Layers3>;

// Данные для левого блока с преимуществами
const featuresList = [
  {
    icon: Layers3,
    title: 'Szeroki wybór kolorów i powłok',
    description: 'Matowych, błyszczących oraz w różnych wariantach imitujących drewno. Produkujemy ogrodzenia metalowe z powłoką dwustronną, dzięki czemu mają ten sam kolor zarówno od strony zewnętrznej, jak i wewnętrznej posesji.',
  },
  {
    icon: Settings2,
    title: 'Zestawy indywidualne z możliwością samodzielnego montażu',
    description: 'Pozwalają zaoszczędzić środki i sprawiają, że produkt z segmentu premium staje się bardziej dostępny dla klienta.',
  },
  {
    icon: ShieldCheck,
    title: 'Wysokiej jakości certyfikowana stal',
    description: 'W naszych produktach wykorzystujemy wyłącznie sprawdzony i certyfikowany metal.',
  },
  {
    icon: LayoutPanelLeft,
    title: 'Unikalna geometria lameli',
    description: 'Zapewnia znacznie większą sztywność w porównaniu do konkurencyjnych rozwiązań, dzięki czemu nasze ogrodzenia nie „hałasują” na wietrze.',
  },
];

// Данные для правого блока с гарантиями
const guarantees = [
  'Szeroka gama kolorów i powłok (w tym imitacja drewna)',
  'Dwustronne powlekanie – ten sam kolor z obu stron',
  'Samodzielny montaż – oszczędność i wygoda',
  'Certyfikowana stal najwyższej jakości',
  'Mocna, cicha konstrukcja – bez hałasu na wietrze',
];

// Данные для блока статистики
const stats = [
  { value: '500+', label: 'Zrealizowanych Projektów' },
  { value: '15', label: 'Lat Doświadczenia' },
  { value: '24/7', label: 'Wsparcie Techniczne' },
  { value: '100%', label: 'Gwarancja Jakości' },
];


// Основной компонент секции
const WhyUsSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Dlaczego warto wybrać nasze ogrodzenia
          </h2>
        </div>

        {/* Основной контент: преимущества и гарантии */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">

          {/* Левый блок: список преимуществ */}
          <div className="space-y-6">
            {featuresList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-5 p-6 bg-[#2B303B] rounded-xl border border-transparent hover:border-slate-700/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Правый блок: карточка с гарантиями */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 rounded-2xl shadow-2xl shadow-orange-900/20 sticky top-28">
            <h3 className="text-2xl font-bold mb-6">Nasze Gwarancje</h3>
            <ul className="space-y-4 mb-8">
              {guarantees.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
              Zamów Wycenę
            </button>
          </div>
        </div>

        {/* Нижний блок: статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-slate-700/50">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-400 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
