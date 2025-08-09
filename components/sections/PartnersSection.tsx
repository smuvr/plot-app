import React from 'react';
import { Store, Building2, Wrench, Check, ThumbsUp, BookUser, ShieldCheck, TrendingUp, Settings, Rocket, Handshake, ArrowRight } from 'lucide-react';

// Данные для верхних карточек
const partnerTypes = [
  {
    icon: Store,
    title: 'Sklepy detaliczne i hurtownie',
    features: ['Elastyczne rabaty', 'Kompleksowe wsparcie', 'Materiały promocyjne'],
  },
  {
    icon: Building2,
    title: 'Firmy budowlane',
    features: ['Stały napływ zleceń', 'Proste systemy montażu', 'Szybsza realizacja inwestycji'],
  },
  {
    icon: Wrench,
    title: 'Brygady montażowe',
    features: ['Wygodne rozwiązania montażowe', 'Korzystne warunki współpracy', 'Gwarancja ciągłości pracy'],
  },
];

// Данные для секции дилеров
const dealerBenefits = [
  { icon: ThumbsUp, text: 'Najkorzystniejsze warunki' },
  { icon: BookUser, text: 'Kompleksowe wsparcie sprzedaży' },
  { icon: ShieldCheck, text: 'Gwarancja jakości' },
];

// Данные для секции сотрудничества
const cooperationBenefits = [
  { icon: TrendingUp, text: 'Stały napływ zleceń' },
  { icon: Settings, text: 'Łatwość montażu' },
  { icon: Rocket, text: 'Rozwój firmy' },
];


const PartnersSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Kto może zostać naszym <span className="text-orange-500">partnerem?</span>
          </h2>
          <p className="text-lg text-slate-300">
            Zapraszamy do współpracy różne typy firm i specjalistów. Indywidualnie omawiamy każdy wariant współpracy.
          </p>
        </div>

        {/* 3 карточки партнеров */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="bg-[#2B303B] p-8 rounded-2xl shadow-lg border border-slate-700/50 transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{partner.title}</h3>
                <ul className="space-y-2">
                  {partner.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Секция "Условия для дилеров" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Sprzedawaj nasze produkty</h3>
            <p className="text-orange-400 font-semibold text-xl mb-6">- najlepsze warunki dla dealerów</p>
            <ul className="space-y-5">
              {dealerBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-700/80 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-400"/>
                    </div>
                    <span className="text-lg text-slate-200">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1621976394200-223946416c3b?q=80&w=1887&auto=format&fit=crop" alt="Magazyn z produktami" className="w-full h-full object-cover"/>
          </div>
        </div>

        {/* Секция "Сотрудничество" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="h-80 rounded-2xl overflow-hidden shadow-xl lg:order-last">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop" alt="Spotkanie biznesowe" className="w-full h-full object-cover"/>
          </div>
          <div className="lg:order-first">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Zwiększ liczbę zamówień</h3>
            <p className="text-orange-400 font-semibold text-xl mb-6">dzięki współpracy z nami</p>
            <ul className="space-y-5">
              {cooperationBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-700/80 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-orange-400"/>
                    </div>
                    <span className="text-lg text-slate-200">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Финальный призыв к действию */}
        <div className="text-center bg-[#2B303B] py-12 px-8 rounded-2xl border border-slate-700/50">
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            Skontaktuj się z nami już dziś i dołącz do grona naszych partnerów handlowych!
          </p>
          <a href="#contact" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
            <Handshake className="w-5 h-5" /> Zostań naszym partnerem
          </a>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
