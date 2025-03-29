import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';
import "../../styles/swiper-hero.css";



import { EffectCards, Autoplay, } from "swiper/modules";

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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}