import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../../styles/swiper-products.css";

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { favoriteProducts } from '../../dataSources/favoritos'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true} // Hace que el carrusel sea infinito
        autoplay={{
          delay: 2000, // No hay pausa entre transiciones
          disableOnInteraction: false, // Sigue moviéndose aunque el usuario interactúe
        }}
        speed={5000} // Controla la velocidad de desplazamiento (3 segundos por slide)
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="xl:w-full w-[300px] xl:max-w-[1000px] xl:min-w-[1000px] mx-auto"
      >
        {
          favoriteProducts.map((prod, index) => (
            <SwiperSlide key={`${prod.name}-${index}`}>
              <a className='w-full h-full' href={`/producto/${prod.slog}`}>
                <img
                  src={prod.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover absolute top-0 brightness-50"/>
              </a>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}
