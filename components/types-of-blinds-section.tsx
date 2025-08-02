"use client"

import {IoPricetag, IoColorPaletteSharp, IoBuild} from "react-icons/io5";
import {FaRulerCombined, FaCheckCircle, FaIndustry, FaMapMarkerAlt} from "react-icons/fa";
import {BsShieldCheck} from "react-icons/bs";

const items = [
  {
    name: 'Ogrodzenie żaluzjowe matowe',
    description: 'Nowoczesność, prywatność i styl – wszystko w jednym!',
    profile: {
      shape: 'Profil Z',
      description: 'klasyczna forma lameli, która zapewnia elegancki wygląd i funkcjonalność.',
    },
    louverDimensions: {
      height_mm: 120,
      width_mm: 60,
    },
    fastening: {
      type: 'Nity lub wkręty',
      spacing_mm: 95,
      description: 'dla stabilności i trwałości.',
    },
    sectionDimensions: {
      maxWidth_m: 3.5,
      maxHeight_m: 3.5,
    },
    colors: {
      type: 'RAL',
      palette: ['Grafitowy (7024)', 'szary (7004)', 'brązowy (8017)', 'ciemnobrązowy (8019)', 'czarny (9005)', 'biały (9003)'],
    },
    coating: {
      type: 'Trwałe malowanie proszkowe',
      description: 'odporne na warunki atmosferyczne.',
    },
    mainAdvantage: 'Ogrodzenie przepuszcza światło i widoczność od strony posesji, jednocześnie zapewniając pełną prywatność od strony ulicy.',
    price: {
      withoutInstallation_per_m2: 370,
      withInstallation: 'Skontaktuj się z nami, aby uzyskać indywidualną wycenę!',
    },
    features: [
      'Fabryczna precyzja – produkcja na zautomatyzowanej linii rolkowej, gwarantująca 100% dokładności geometrii',
      'Estetyka i prywatność – widoczność z posesji, pełna osłona od strony ulicy',
      'Idealne nie tylko jako ogrodzenie działki, ale również do zabudowy altan, werand, wiat samochodowych i innych konstrukcji gospodarczych',
    ],
    manufacturerInfo: {
      location: 'Białystok',
      note: 'bez pośredników, prosto z zakładu',
    },
  },
  {
    name: 'Ogrodzenie żaluzjowe w kolorze drewna',
    description: 'Nowoczesność, prywatność i styl – wszystko w jednym!',
    profile: {
      shape: 'Profil Z',
      description: 'klasyczna forma lameli, która zapewnia elegancki wygląd i funkcjonalność.',
    },
    louverDimensions: {
      height_mm: 120,
      width_mm: 60,
    },
    fastening: {
      type: 'Nity lub wkręty',
      spacing_mm: 95,
      description: 'dla stabilności i trwałości.',
    },
    sectionDimensions: {
      maxWidth_m: 3.5,
      maxHeight_m: 3.5,
    },
    colors: {
      type: 'Wood',
      palette: ['złoty dąb', 'sosna', 'orzech', 'wiśnia'],
    },
    coating: {
      type: 'printech',
    },
    mainAdvantage: 'Ogrodzenie przepuszcza światło i widoczność od strony posesji, jednocześnie zapewniając pełną prywatność od strony ulicy.',
    price: {
      withoutInstallation_per_m2: 395,
      withInstallation: 'Skontaktuj się z nami, aby uzyskać indywidualną wycenę!',
    },
    features: [
      'Fabryczna precyzja – produkcja na zautomatyzowanej linii rolkowej, gwarantująca 100% dokładności geometrii',
      'Estetyka i prywatność – widoczność z posesji, pełna osłona od strony ulicy',
      'Idealne nie tylko jako ogrodzenie działki, ale również do zabudowy altan, werand, wiat samochodowych i innych konstrukcji gospodarczych',
    ],
    manufacturerInfo: {
      location: 'Białystok',
      note: 'bez pośredników, prosto z zakładu',
    },
  }

]

interface Louveredi {
  name: string;
  description: string;
  profile: {
    shape: string;
    description: string;
  };
  louverDimensions: {
    height_mm: number;
    width_mm: number;
  };
  fastening: {
    type: string;
    spacing_mm: number;
    description: string;
  };
  sectionDimensions: {
    maxWidth_m: number;
    maxHeight_m: number;
  };
  colors: {
    type: 'RAL' | 'Wood';
    palette: string[];
  };
  coating: {
    type: string;
    description?: string;
  };
  mainAdvantage: string;
  price: {
    withoutInstallation_per_m2: number;
    withInstallation: string;
  };
  features: string[];
  manufacturerInfo: {
    location: string;
    note: string;
  };
}


export default function TypesOfBlindsSection() {
  return (
    <div className={'bg-gray-200 text-gray-800'}>
      <div className={'flex gap-5 w-full max-w-[1200px] mx-auto my-20'}>
        {
          items.map((item: any, index) => <FenceCard key={index} fence={item}/>)
        }
      </div>
    </div>
  );
}

const getColorClasses = (colorName: string): string => {
  const name = colorName.toLowerCase();

  // Карта цветов RAL и древесных
  const colorMap: { [key: string]: string } = {
    'grafitowy': 'bg-zinc-700 text-white',
    'szary': 'bg-gray-500 text-white',
    'brązowy': 'bg-amber-800 text-white',
    'ciemnobrązowy': 'bg-zinc-800 text-white',
    'czarny': 'bg-black text-white',
    'biały': 'bg-white text-black border border-gray-300',
    'złoty dąb': 'bg-yellow-600 text-white',
    'sosna': 'bg-yellow-300 text-black',
    'orzech': 'bg-amber-700 text-white',
    'wiśnia': 'bg-red-800 text-white',
  };

  // Ищем ключ в названии цвета
  for (const key in colorMap) {
    if (name.includes(key)) {
      return colorMap[key];
    }
  }

  // Возвращаем стиль по умолчанию, если цвет не найден
  return 'bg-gray-100 text-gray-800';
};

export const FenceCard: React.FC<{ fence: Louveredi }> = ({fence}) => {
  return (
    <div className={'flex w-full flex-col rounded-2xl border border-solid border-gray-200 bg-white p-6 shadow-lg'}>
      <h2 className={'text-3xl font-bold text-gray-800 text-center min-h-[80px]'}>{fence.name}</h2>
      <p className={'mt-1 text-base text-gray-500'}>{fence.description}</p>

      <div className={'my-5 rounded-lg bg-blue-50 p-4'}>
        <div className="flex items-center text-sm text-blue-800">
          <IoPricetag className="mr-2"/>
          <span>Cena (bez montażu)</span>
        </div>
        <p className={'text-4xl font-extrabold text-blue-600'}>
          od {fence.price.withoutInstallation_per_m2} zł/m²
        </p>
        <p className={'mt-2 flex items-center text-xs text-gray-600'}>
          <IoBuild className="mr-2"/> {fence.price.withInstallation}
        </p>
      </div>

      {/* --- Раздел с цветами --- */}
      <div>
        <h3 className={'mb-2 flex items-center text-lg font-semibold text-gray-700'}>
          <IoColorPaletteSharp className="mr-2 text-blue-500"/> Dostępne kolory
        </h3>
        <div className={'min-h-[80px]'}>
          <div className={'flex flex-wrap gap-2 '}>
            {fence.colors.palette.map((color) => {
              // Получаем классы для текущего цвета
              const badgeClass = getColorClasses(color);
              return (
                <span key={color}
                      className={`rounded-full px-5 py-1 text-sm font-medium transition-transform hover:scale-105 ${badgeClass}`}>
                {color}
              </span>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="my-5"/>

      {/* --- Технические характеристики --- */}
      <div>
        <h3 className={'mb-3 flex items-center text-lg font-semibold text-gray-700'}>
          <FaRulerCombined className="mr-2 text-blue-500"/> Dane Techniczne
        </h3>
        <div className={'space-y-2 text-sm'}>
          <div className="flex justify-between">
            <span className="text-gray-500">Kształt profilu</span>
            <span className="font-medium text-gray-800">{fence.profile.shape}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Wymiary lameli</span>
            <span
              className="font-medium text-gray-800">{fence.louverDimensions.height_mm} x {fence.louverDimensions.width_mm} mm</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Powłoka</span>
            <span className="font-medium text-gray-800">{fence.coating.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Maks. wymiary sekcji</span>
            <span
              className="font-medium text-gray-800">{fence.sectionDimensions.maxWidth_m}m x {fence.sectionDimensions.maxHeight_m}m</span>
          </div>
        </div>
      </div>

      <hr className="my-5"/>

      {/* --- Преимущества --- */}
      <div>
        <h3 className={'mb-3 flex items-center text-lg font-semibold text-gray-700'}>
          <BsShieldCheck className="mr-2 text-blue-500"/> Zalety
        </h3>
        <p className={'mb-4 rounded-md bg-gray-50 p-3 text-sm italic text-gray-600'}>"{fence.mainAdvantage}"</p>
        <ul className={'space-y-2 text-sm'}>
          {fence.features.map((feature, index) => (
            <li key={index} className={'flex items-start'}>
              <FaCheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500"/>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Информация о производителе --- */}
      <div className={'mt-6 border-t border-gray-200 pt-4 text-center'}>
        <p className={'flex items-center justify-center text-sm font-semibold text-gray-800'}>
          <FaIndustry className="mr-2"/> Producent: <FaMapMarkerAlt
          className="ml-2 mr-1"/> {fence.manufacturerInfo.location}
        </p>
        <p className={'text-xs text-gray-500'}>{fence.manufacturerInfo.note}</p>
      </div>
    </div>
  );
};
