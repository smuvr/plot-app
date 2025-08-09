import React from 'react';
import {
  Truck, CreditCard, Warehouse, Globe, Wallet, Smartphone, Landmark,
  ShieldCheck, Rocket, Clock, Phone
} from 'lucide-react';

// Данные для карточки "Доставка"
const deliveryOptions = [
  {
    icon: Warehouse,
    title: 'Odbiór osobisty',
    description: 'Bezpośredni odbiór z naszego magazynu w Białymstoku. Możliwość sprawdzenia produktu przed odbiorem.',
  },
  {
    icon: Globe,
    title: 'Dostawa europejska',
    description: 'Profesjonalna dostawa na terenie całej Europy za pośrednictwem sprawdzonych firm kurierskich.',
  },
];

// Данные для карточки "Оплата"
const paymentOptions = [
  { icon: CreditCard, title: 'Karta PKO' },
  { icon: Wallet, title: 'Płatność gotówką przy odbiorze' },
  { icon: Smartphone, title: 'Płatność Blik' },
  { icon: Landmark, title: 'Przelew bankowy' },
];

// Данные для нижних преимуществ
const bottomFeatures = [
  { icon: ShieldCheck, title: 'Bezpieczna dostawa', description: 'Profesjonalne pakowanie i ubezpieczenie przesyłki' },
  { icon: Rocket, title: 'Szybka realizacja', description: 'Sprawna obsługa zamówień i terminowa dostawa' },
  { icon: Clock, title: 'Wsparcie 24/7', description: 'Pełna obsługa klienta na każdym etapie zamówienia' },
];


const DeliveryAndPaymentSection: React.FC = () => {
  return (
    <section className="bg-[#242933] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Dostawa i Płatność
          </h2>
          <p className="text-lg text-slate-300">
            Oferujemy wygodne opcje dostawy i elastyczne metody płatności dostosowane do Twoich potrzeb.
          </p>
        </div>

        {/* Основные карточки: Доставка и Оплата */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Карточка Доставки */}
          <div className="bg-[#2B303B] p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Dostawa</h3>
            </div>
            <div className="space-y-6">
              {deliveryOptions.map((option, index) => (
                <div key={index} className="flex items-start gap-4">
                  <option.icon className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-100">{option.title}</h4>
                    <p className="text-sm text-slate-400">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Карточка Оплаты */}
          <div className="bg-[#2B303B] p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Płatność</h3>
            </div>
            <div className="space-y-4">
              {paymentOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-4">
                  <option.icon className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  <p className="text-slate-200">{option.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижние преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
          {bottomFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="flex-shrink-0 w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center mb-4"
                >
                  <Icon className="w-7 h-7 text-orange-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm max-w-xs">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Финальный призыв к действию */}
        <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-orange-700 p-8 sm:p-10 rounded-2xl text-center shadow-2xl shadow-orange-900/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Masz pytania dotyczące dostawy?</h3>
          <p className="text-white/90 mb-6">Skontaktuj się z nami, aby uzyskać szczegółowe informacje o opcjach dostawy i płatności.</p>
          <button className="bg-slate-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            <Phone className="w-5 h-5" /> Skontaktuj się z nami
          </button>
        </div>

      </div>
    </section>
  );
};

export default DeliveryAndPaymentSection;
