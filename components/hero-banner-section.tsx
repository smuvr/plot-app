"use client"

import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {EffectFade, Autoplay, FreeMode, Navigation} from "swiper/modules";
import {LuBadgeCheck} from "react-icons/lu";
import {SiFusionauth} from "react-icons/si";

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
]

export default function HeroBannerSection() {
  return (
    <div className={'bg-black h-screen relative text-white'}>
      <div className={'absolute top-0 right-0 bottom-0 left-0 z-20'}>
        <div className={'w-full max-w-[1200px] mx-auto my-20 flex flex-col gap-10'}>
          <h2 className={'text-5xl font-bold '}>
            ZA CO NAS POLECAJĄ
          </h2>

          <div className={'flex flex-col gap-4 relative p-8'}>
            <div className={'absolute top-0 right-0 bottom-0 left-0 bg-black opacity-30 z-10 rounded-lg'}></div>

            <h3 className={'text-2xl font-bold  z-20 relative'}>
              Kupując ogrodzenie u nas, dostajesz:
            </h3>

            <div className={'text-xl relative p-8 border-1 border-solid border-yellow-400 rounded-lg'}>
              <div className={'absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-10 rounded-lg'}></div>
              <div className={'flex gap-8 items-center z-20 relative'}>
                <div>
                  <LuBadgeCheck className={'text-[120px] text-yellow-400'}/>
                </div>
                <p>
                  <b className={'text-2xl text-yellow-400'}>Wysoka jakość</b> naszych produktów to jeden z <span
                  className={'underline text-yellow-100'}>głównych
                  priorytetów firmy</span><br/>
                  Podczas produkcji ogrodzeń wykorzystujemy <span className={'underline text-yellow-100'}>najnowsze
                  technologie i
                  materiały</span> <br/>
                  Stała kontrola jakości surowców oraz gotowych wyrobów pozwala nam oferować klientom
                  pisemną <span className={'underline text-yellow-100'}>gwarancję nawet do 30 lat</span>
                </p>
              </div>
            </div>


            <div className={'text-xl relative p-8 border-1 border-solid border-yellow-400 rounded-lg'}>
              <div className={'absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-10 rounded-lg'}></div>
              <div className={'flex gap-8 items-center z-20 relative'}>
                <div>
                  <SiFusionauth className={'text-[120px] text-yellow-400'}/>
                </div>
                <p>
                  Produkcja wyrobów odbywa się <span
                  className={'underline text-yellow-100'}>zgodnie z międzynarodowymi normami</span><br/>
                  <b className={'text-2xl text-yellow-400'}>Wysoki poziom niezawodności</b> osiągamy dzięki <span
                  className={'underline text-yellow-100'}>nowoczesnym
                  technologiom</span> produkcji, <span
                  className={'underline text-yellow-100'}>wysokim kwalifikacjom</span>
                  naszych specjalistów oraz <span
                  className={'underline text-yellow-100'}>nowoczesnym metodom</span> ochrony przed korozją.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={'absolute top-0 right-0 bottom-0 left-0 z-10'}>
        <Slider/>
      </div>
    </div>
  );
}

/**
 *
 * @constructor
 */
const Slider = () => {
  return <Swiper
    slidesPerView={1}
    navigation={false}
    modules={[FreeMode, Navigation, EffectFade, Autoplay]}
    effect={'fade'}
    fadeEffect={{
      crossFade: true,
    }}
    speed={1500}
    loop={true}
    autoplay={{
      delay: 10000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    }}
  >
    {
      images.map(i => (
        <SwiperSlide>
          <Slide image={i}/>
        </SwiperSlide>
      ))
    }
  </Swiper>
}

/**
 *
 * @param image
 * @constructor
 */
const Slide = ({image}: { image: string }) => {
  return <div className={'h-screen relative'}>
    <Image src={image} alt={''} fill={true}/>
    <div className={'absolute top-0 right-0 bottom-0 left-0 bg-black opacity-70'}></div>
  </div>
}
