import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';
import "../../styles/swiper-hero.css";



import { EffectCards, Autoplay, } from "swiper/modules";

const images = [
  {
    "image": "/images/logo.webp",
    "name": ""
  },
  {
    "image": "/images/plastico-invernadero.webp",
    "name": "Plasticos"
  },
  {
    "image": "/images/polisombras.webp",
    "name": "Polisombras"
  },
  {
    "image": "/images/bolsas.webp",
    "name": "Bolsas"
  },
  {
    "image": "/images/tapetes.webp",
    "name": "Tapetes"
  },
  {
    "image": "/images/cintas.webp",
    "name": "Cintas"
  },
  {
    "image": "/images/cintas2.webp",
    "name": "Cintas protectoras"
  },
  {
    "image": "/images/strech.webp",
    "name": "Strech Films"
  },
  {
  "image":   "/images/bioseguridad.webp",
  "name": "Bioseguridad"
  }
];

export default function BannerHero() {
  return (
    <>
      <Swiper
        effect={'cards'}
        // loop={true}
        // autoplay={{
        //   delay: 3000,
        // }}
        // speed={1000}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        cardsEffect={{
          perSlideOffset: 2, // Controla el desplazamiento horizontal
          perSlideRotate: 15, // Controla la rotación de la tarjeta
        }}
      >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover absolute top-0 brightness-75"/>
          <p className="text-xs md:text-base lg:text-xl absolute bottom-2 text-white">{src.name}</p>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  )
}