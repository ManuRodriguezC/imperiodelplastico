import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from "swiper/modules";

const images = [
  {
    "image": "/images/local.webp",
    "name": "Visitanos"
  },
  {
    "image": "/images/invernaderos.webp",
    "name": "Plasticos Invernaderos"
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
    <section className="w-full h-[40vh]">
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-[100%]"
      >
        {
          images.map((src, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-full group">
                <img
                  src={src.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-md transition-all duration-300
                    absolute top-0 brightness-50 group-hover:brightness-100"/>
                <p className="text-xs md:text-base ml-5 lg:text-xl absolute bottom-2 text-white group-hover:hidden">{src.name}</p>
              </div>
            </SwiperSlide>
            ))
          }
      </Swiper>
    </section>
  )
}