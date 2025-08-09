import React from 'react';
import {
  Mail, MapPin, Phone, Clock, Send, Truck, Wrench, Award
} from 'lucide-react';

// Данные для контактной информации
const contactDetails = [
  { icon: Mail, label: 'EMAIL', value: 'test@gmail.com', href: 'mailto:test@gmail.com' },
  { icon: MapPin, label: 'ADRES', value: 'Białystok, Ciołkowskiego 888/88', href: '#' },
  { icon: Phone, label: 'TELEFON', value: '+48 888 888 888', href: 'tel:+48888888888' },
];

// Данные для часов работы
const workingHours = [
  { day: 'Poniedziałek - Piątek', time: '8:00 - 18:00' },
  { day: 'Sobota', time: '9:00 - 15:00' },
  { day: 'Niedziela', time: 'Zamknięte' },
];

// Данные для нижних преимуществ
const bottomFeatures = [
  { icon: Truck, title: "Szybka dostawa", description: "Realizacja zamówień w całej Polsce" },
  { icon: Wrench, title: "Montaż gratis", description: "Profesjonalny montaż w cenie" },
  { icon: Award, title: "Gwarancja jakości", description: "3-letnia gwarancja na wszystkie produkty" },
];

// Компонент для полей формы
const FormInput: React.FC<{label: string, type: string, name: string, placeholder: string}> = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full bg-gray-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:ring-orange-500 focus:border-orange-500 transition"
    />
  </div>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 sm:pt-28 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Kontakty
          </h2>
          <div className="inline-block w-20 h-1 bg-orange-500 rounded"></div>
        </div>

        {/* Основной блок: Информация + Форма */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">

          {/* Левый блок: Информация */}
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <h3 className="text-2xl font-bold mb-1">ALFAMODUL</h3>
            <p className="text-slate-400 mb-8">Profesjonalne konstrukcje metalowe</p>

            <div className="space-y-6 mb-10">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <a href={item.href} className="text-slate-100 hover:text-orange-400 transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-700 pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-orange-400" />
                <h4 className="font-bold text-lg">Godziny pracy</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {workingHours.map((item, index) => (
                  <li key={index} className="flex justify-between text-slate-300">
                    <span>{item.day}</span>
                    <span className="font-medium text-slate-100">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правый блок: Форма */}
          <div className="bg-slate-800/50 p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <h3 className="text-2xl font-bold mb-6">Skontaktuj się z nami</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput label="Imię" type="text" name="name" placeholder="Twoje imię" />
                <FormInput label="Telefon" type="tel" name="phone" placeholder="+48 000 000 000" />
              </div>
              <FormInput label="Email" type="email" name="email" placeholder="twoj@email.com" />
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">Temat</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-orange-500 focus:border-orange-500 transition"
                >
                  <option>Wybierz temat</option>
                  <option>Zapytanie o produkt</option>
                  <option>Wycena</option>
                  <option>Współpraca</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Opisz swój projekt..."
                  className="w-full bg-gray-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:ring-orange-500 focus:border-orange-500 transition"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
                Wyślij wiadomość <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Нижние преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-700/50">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Копирайт */}
        <div className="border-t border-slate-700/50 mt-16 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} ALFAMODUL. Wszelkie prawa zastrzeżone.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
