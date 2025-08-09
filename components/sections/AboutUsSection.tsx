import React from 'react';
import { Wrench, Gem, Palette, Zap, Award, ShoppingCart, Phone, ArrowRight } from 'lucide-react';

// Данные для карточек с преимуществами
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

// Основной компонент секции
const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Верхний блок: О нас + Изображение */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Левый блок: Текст */}
          <div className="flex flex-col">
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase mb-2">O NAS</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">ALFAMODUL</h1>
            <p className="text-slate-300 mb-4 leading-relaxed">
              ALFAMODUL to dynamicznie rozwijająca się firma, specjalizująca się w produkcji nowoczesnych paneli ogrodzeniowych typu ranczo oraz żaluzji wykonanych z metalu. Nasz zespół tworzą specjaliści z wieloletnim doświadczeniem w projektowaniu i wytwarzaniu ogrodzeń.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Oferujemy naszym klientom nowoczesne podejście zarówno pod względem jakości produktów, jak i kompleksowej obsługi. Naszym celem jest maksymalne uproszczenie procesu zakupu ogrodzenia.
            </p>
            <p className="text-slate-300 mb-10 leading-relaxed">
              Dzięki naszemu doświadczeniu jesteśmy w stanie zaproponować najlepsze rozwiązania dopasowane do indywidualnych potrzeb każdego klienta - od doradztwa w wyborze modelu, poprzez produkcję i montaż.
            </p>
            <a href="#products" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 self-start flex items-center gap-2">
              Poznaj nasze produkty <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Правый блок: Изображение */}
          <div className="relative h-96 lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558642369-7e1f38935a4e?q=80&w=1887&auto=format&fit=crop"
              alt="Pracownik w warsztacie produkującym ogrodzenia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-600 flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white">Wieloletnie doświadczenie</h4>
                <p className="text-sm text-slate-300">Specjaliści w projektowaniu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Средний блок: 4 карточки преимуществ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-colors duration-300 flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Нижний блок: Призыв к действию */}
        <div className="text-center bg-[#2B303B] py-12 px-8 rounded-2xl border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-4">Dlaczego ALFAMODUL?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Polecamy najlepsze rozwiązania dla Twojego ogrodzenia! Wybierz żaluzje i ranczo - ciesz się jakością oraz stylem każdego dnia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Zamów już dziś
            </a>
            <a href="#contact-details" className="bg-transparent border-2 border-slate-600 text-slate-300 font-bold py-3 px-6 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Skontaktuj się z nami
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
