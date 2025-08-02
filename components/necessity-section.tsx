"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {ReactNode} from "react";
import {IoIosColorPalette} from "react-icons/io";
import {MdOutlineCompareArrows} from "react-icons/md";
import {FaTools, FaShapes} from "react-icons/fa";
import {GoShieldCheck} from "react-icons/go";
import {TbAward, TbColorSwatch, TbHexagons, TbWindOff} from "react-icons/tb";
import {EffectCards} from "swiper/modules";
import {BsPuzzle} from "react-icons/bs";

const items = [
  {
    text: 'Szeroki wybór kolorów i powłok – matowych, błyszczących oraz w różnych wariantach imitujących drewno. Produkujemy ogrodzenia metalowe z powłoką dwustronną, dzięki czemu mają ten sam kolor zarówno od strony zewnętrznej, jak i wewnętrznej posesji.',
    icon: <TbColorSwatch/>
  },
  {
    text: 'Zestawy indywidualne z możliwością samodzielnego montażu – pozwalają zaoszczędzić środki i sprawiają, że produkt z segmentu premium staje się bardziej dostępny dla klienta.',
    icon: <BsPuzzle/>
  },
  {
    text: 'Wysokiej jakości certyfikowana stal – w naszych produktach wykorzystujemy wyłącznie sprawdzony i certyfikowany metal.',
    icon: <TbAward/>
  },
  {
    text: 'Unikalna geometria lameli – zapewnia znacznie większą sztywność w porównaniu do konkurencyjnych rozwiązań, dzięki czemu nasze ogrodzenia nie „hałasują” na wietrze.',
    icon: <TbHexagons/>
  },
]

const features = [
  {
    text: 'Szeroka gama kolorów i powłok (w tym imitacja drewna)',
    icon: <IoIosColorPalette className={'text-blue-400'}/>,
    style: {
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400'
    }
  },
  {
    text: 'Dwustronne powlekanie – ten sam kolor z obu stron',
    icon: <MdOutlineCompareArrows className={'text-green-400'}/>,
    style: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400'
    }
  },
  {
    text: 'Samodzielny montaż – oszczędność i wygoda',
    icon: <FaTools className={'text-orange-400'}/>,
    style: {
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-400'
    }
  },
  {
    text: 'Certyfikowana stal najwyższej jakości',
    icon: <GoShieldCheck className={'text-purple-400'}/>,
    style: {
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-400'
    }
  },
  {
    text: 'Mocna, cicha konstrukcja – bez hałasu na wietrze',
    icon: <TbWindOff className={'text-rose-400'}/>,
    style: {
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-400'
    }
  },
  {
    text: 'Unikalna geometria',
    icon: <FaShapes className={'text-gray-400'}/>,
    style: {
      bgColor: 'bg-gray-50 !important',
      borderColor: 'border-gray-400'
    }
  }
];


type Feature = {
  text: string;
  icon: ReactNode
  style: {
    bgColor: string;
    borderColor: string;
  }
}

export default function NecessitySection() {
  return (
    <div className={'w-full max-w-[1200px] mx-auto my-20 flex flex-col gap-10'}>
      <h2 className={'text-5xl font-bold '}>
        Dlaczego warto wybrać nasze ogrodzenia
      </h2>
      <div className={'flex gap-36'}>
        <div>
          {
            items.map(i => (
              <div>{i.text}</div>
            ))
          }
        </div>
        <div className={'flex flex-col gap-4 w-[300px]'}>
          <div>
            <Swiper
              effect={'cards'}
              loop={true}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {
                features.map((i: Feature) => (
                  <SwiperSlide className={`rounded-2xl`}>
                    <Slide item={i}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  );
}


const Slide = ({item}: { item: Feature }) => {

  return <div
    className={'flex flex-col gap-4 justify-center items-center bg-white h-[400px] border-1 border-gray-300 p-5 rounded-2xl'}>
    <div
      className={`flex p-6 items-center justify-center w-[70px] h-[70px] border-1 border-solid rounded-full ${item.style.borderColor}`}>
      <div
        className={`flex p-5 items-center justify-center text-[50px] w-[60px] h-[60px] border-1 border-solid rounded-full ${item.style.bgColor} ${item.style.borderColor}`}>
        {item.icon}
      </div>
    </div>
    <p className={'text-center'}>{item.text}</p>
  </div>
}
