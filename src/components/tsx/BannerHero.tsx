import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';
import "../../styles/swiper-hero.css";



import { EffectCards, Autoplay, } from "swiper/modules";

const images = [
  "/images/bioseguridad.webp",
  "/images/plastico-invernadero.webp",
  "/images/local.webp",
  "/images/bolsas.webp",
  "/images/bioseguridad.webp",
  "/images/plastico-invernadero.webp",
  "/images/local.webp",
  "/images/bolsas.webp",
  "/images/bolsas.webp",
];

export default function BannerHero() {
  return (
    <>
      <Swiper
        effect={'cards'}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        speed={1000}
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
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  )
}