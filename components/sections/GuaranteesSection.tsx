import React from 'react';
import { Wrench, DraftingCompass, Gem, Users, Layers3, ShieldCheck, Timer, Scaling, Calendar, Award } from 'lucide-react';

// Типизация для карточки преимущества
interface AdvantageCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

// Данные для карточек преимуществ
const advantages: Omit<AdvantageCardProps, 'className'>[] = [
  {
    icon: Wrench,
    title: 'Łatwość montażu',
    description: 'Jedną z zalet ogrodzeń ALFAMODUL jest maksymalnie prosty montaż. Nasze ogrodzenia są łatwe do złożenia, poradzi sobie z nimi nawet osoba bez przygotowania. Czas montażu jednej sekcji wynosi zaledwie 15 minut.',
  },
  {
    icon: DraftingCompass,
    title: 'Unikalna konstrukcja',
    description: 'Projektujemy unikalną i niepowtarzalną konstrukcję metalowego ogrodzenia żaluzjowego, która będzie spełniać wszystkie oczekiwania klienta i harmonizować z aranżacją krajobrazu.',
  },
  {
    icon: Gem,
    title: 'Wytrzymałość materiałów',
    description: 'Nasze ogrodzenia są wykonane wyłącznie z ocynkowanej stali o grubości od 0,5 mm. Ogrodzenia z ocynkowanego metalu są odporne na obciążenia mechaniczne i trwałe.',
  },
  {
    icon: Users,
    title: 'Kompleksowa obsługa',
    description: 'My bierzemy na siebie wszystkie troski – wystarczy, że zadzwonisz, a nasz zespół profesjonalistów zrobi wszystko, abyś nie tracił swojego czasu i był zadowolony.',
  },
  {
    icon: Layers3,
    title: 'Trwałość powłoki',
    description: 'Stosujemy wyłącznie powłokę proszkową o zwiększonej odporności na uszkodzenia mechaniczne. Ogrodzenie zachowuje swój pierwotny wygląd przez ponad 20 lat.',
  },
];

// Данные для статистики
const stats = [
  { value: '15', label: 'minut montażu', icon: Timer },
  { value: '0.5mm', label: 'grubość stali', icon: Scaling },
  { value: '20+', label: 'lat trwałości', icon: Calendar },
  { value: '30', label: 'lat gwarancji', icon: Award },
];


const GuaranteesSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-800 py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Zalety i gwarancje
          </h2>
        </div>

        {/* Сетка преимуществ и гарантии */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 flex items-start gap-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center">
                <advantage.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}

          {/* Карточка гарантии */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl shadow-orange-900/20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Gwarancja</h3>
                <p className="text-lg opacity-90">Do 30 lat</p>
              </div>
            </div>
            <p className="opacity-90 leading-relaxed">
              Wykorzystanie wysokiej jakości materiałów oraz stała kontrola wszystkich etapów własnej produkcji pozwalają nam być pewnymi wysokiej niezawodności wytwarzanych produktów i udzielać długoterminowej gwarancji.
            </p>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-slate-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon className="w-8 h-8 text-orange-500 mb-3" />
                <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
