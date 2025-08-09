import React from 'react';
import {
  LayoutGrid, Shield, Wind, Sun, Palette, Zap, Eye, CheckCircle,
  Construction, Layers, Flame, CookingPot, Phone, ArrowRight
} from 'lucide-react';

// Компонент для элемента списка с галочкой
const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
    <span className="text-slate-300">{children}</span>
  </li>
);

// Компонент для карточки продукта (картинка + текст)
interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  imagePosition?: 'left' | 'right';
}

const ProductCard: React.FC<ProductCardProps> = ({ image, imageAlt, title, description, features, imagePosition = 'left' }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className={`h-80 rounded-2xl overflow-hidden shadow-xl ${imagePosition === 'right' ? 'lg:order-last' : ''}`}>
      <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
    <div className={imagePosition === 'right' ? 'lg:order-first' : ''}>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <FeatureListItem key={index}>{feature}</FeatureListItem>
        ))}
      </ul>
    </div>
  </div>
);


const OtherProductsSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Inne Wyroby z Blachy
          </h2>
          <p className="text-lg text-slate-300">
            Oferujemy szeroki zakres produktów z blachy, łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.
          </p>
        </div>

        <div className="space-y-24">

          {/* Dachówka w Karo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Dachówka w Karo</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Panele dachowe o kształcie rombu, ułożone w charakterystyczny wzór przypominający wzór kart do gry w karo. Wykorzystywane jako pokrycie dachowe, lub jako fasada do elewacji ścian zewnętrznych.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                {[
                  { icon: Shield, label: 'Trwałość' }, { icon: Wind, label: 'Lekkość' },
                  { icon: Sun, label: 'Łatwy montaż' }, { icon: Palette, label: 'Kolory' },
                  { icon: Zap, label: 'Odporność' }, { icon: Eye, label: 'Estetyka' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-[#2B303B] p-4 rounded-lg border border-slate-700/50">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://placehold.co/600x400/6B7280/FFFFFF?text=Dachówka+w+Karo" alt="Dachówka w Karo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Obróbka Blacharska Parapetowa */}
          <ProductCard
            image="https://placehold.co/600x400/9CA3AF/FFFFFF?text=Parapet"
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
            image="https://placehold.co/600x400/4B5563/FFFFFF?text=Balustrada"
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
            image="https://placehold.co/600x400/D1D5DB/374151?text=Daszek"
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
        <div className="my-24">
          <h3 className="text-2xl font-bold text-center mb-10">Inne Wyroby</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Elementy Wykończeniowe</h4>
                <p className="text-sm text-slate-400">Gąsiory i inne obróbki blacharskie</p>
              </div>
            </div>
            <div className="bg-[#2B303B] p-6 rounded-2xl border border-slate-700/50 flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <CookingPot className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Okapy Kuchenne</h4>
                <p className="text-sm text-slate-400">Wysokiej jakości okapy wykonane na zamówienie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Финальный призыв к действию */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 rounded-2xl text-center shadow-2xl shadow-orange-900/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">Potrzebujesz Wyceny?</h3>
          <p className="text-white/90 mb-6">Skontaktuj się z nami, aby otrzymać bezpłatną wycenę.</p>
          <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2">
            Otrzymaj Wycenę <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OtherProductsSection;
