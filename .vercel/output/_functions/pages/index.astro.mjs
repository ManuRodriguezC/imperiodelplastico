import { c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_DXA-7ckB.mjs';
import 'kleur/colors';
import { p as products } from '../chunks/productos_WFoyCUqB.mjs';
import { $ as $$CartProduct } from '../chunks/CartProduct_CFuXBLQz.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                 */
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { $ as $$Layout } from '../chunks/Layout_D8xhyr2J.mjs';
export { renderers } from '../renderers.mjs';

const $$Favorites = createComponent(($$result, $$props, $$slots) => {
  const favorites = products.filter((prod) => prod.favorite);
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-auto min-h-screen py-8 lg:px-24 flex flex-col gap-10 justify-center items-center"> <h2 class="relative color-imperio text-4xl after:content-[''] after:block after:w-[90%]
    after:h-[4px] after:bg-red-600 after:absolute after:-bottom-2 after:left-[5%] after:rounded-full">
Nuestros Destacados
</h2> <div class="flex flex-wrap justify-center items-center gap-5"> ${favorites.map((prod) => renderTemplate`${renderComponent($$result, "CartProduct", $$CartProduct, { ...prod })}`)} </div> </section>`;
}, "/home/manurodriguez/imperiodelplastico/src/components/Favorites.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-auto py-20 hero-back lg:px-24 xl:px-32 flex flex-col gap-10 justify-center items-center"> <div class="w-full h-full lg:px-5 flex flex-col justify-center items-center gap-5"> <h1 class="font-serif text-red-700 text-base md:text-xl lg:text-3xl font-bold text-center">
Innovación y calidad en soluciones plásticas para cada necesidad
</h1> <!-- <h1 class="text-base md:text-xl lg:text-3xl font-extralight text-center">
      Ofrecemos productos y servicios de 
      <strong class="text-red-700">calidad</strong>
       con asesoría especializada para cada necesidad, 
       <strong class="text-red-700">garantizando soluciones</strong>
        duraderas y eficientes 
    </h1> --> <p class="text-center text-xs md:text-base">Contamos con una amplia variedad de plásticos para invernaderos, seguridad, bioseguridad, protección, empaques, cintas y más</p> </div> <div class="w-full h-auto flex flex-wrap bg-custom-radial"> ${renderComponent($$result, "BannerHero", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/manurodriguez/imperiodelplastico/src/components/tsx/BannerHero", "client:component-export": "default" })} </div> </section>`;
}, "/home/manurodriguez/imperiodelplastico/src/components/Hero.astro", void 0);

const sectores = [
  {
    title: "STRETCH FILMS",
    description: "Protege tus productos con eficiencia y calidad. Stretch Films que garantizan resistencia, seguridad y máxima protección en cada embalaje.",
    image: "images/banner_stretch.webp",
    backgraund: "bg-custom-gradient"
  },
  {
    title: "CINTA ADHESIVA",
    description: "Unión segura para cada aplicación. Nuestras cintas adhesivas ofrecen durabilidad y precisión para mantener tus productos intactos.",
    image: "images/cintas3.webp",
    backgraund: "bg-custom-blue-gradient"
  },
  {
    title: "BOLSAS DE BASURA",
    description: "Resistencia y confianza en cada bolsa. Soluciones prácticas y duraderas para una gestión de residuos eficiente y segura.",
    image: "images/banner-bolsas.webp",
    backgraund: "bg-custom-blue2-gradient"
  }
];
function BannerLoop() {
  return /* @__PURE__ */ jsx("section", { className: "w-full h-[40vh] md:h-[85vh] mt-28", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      slidesPerView: 1,
      spaceBetween: 4,
      loop: true,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 8e3,
        disableOnInteraction: false
      },
      navigation: true,
      modules: [Pagination, Navigation, Autoplay],
      className: "mySwiper h-[100%]",
      children: sectores.map((sector) => /* @__PURE__ */ jsx(
        SwiperSlide,
        {
          className: `w-full h-full`,
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
            /* @__PURE__ */ jsx("img", { src: sector.image, alt: sector.title, className: "w-full h-full absolute brightness-50 z-0 top-0 left-0 object-cover" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-full h-full absolute z-10 flex flex-col justify-around p-4 md:p-20 text-white",
                children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      className: "text-center md:text-left text-xl md:text-4xl xl:text-5xl font-bold\n                              mb-2 md:mb-6 animate-fade-in animate-delay-250",
                      children: sector.title
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "w-[200px] ml-24 md:ml-4 lg:w-[500px] text-xs md:text-xl lg:text-2xl text-center\n                            md:text-justify font-light py-5 animate-fade-in animate-delay-500", children: sector.description })
                ] })
              }
            )
          ] })
        },
        sector.title
      ))
    }
  ) });
}

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="flex flex-col justify-end items-center h-auto pb-28"> ${renderComponent($$result, "BannerLoop", BannerLoop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/imperiodelplastico/src/components/tsx/BannerLoop", "client:component-export": "default" })} ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Favorites", $$Favorites, {})} </main>`;
}, "/home/manurodriguez/imperiodelplastico/src/components/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Imperio del Plastico", "description": "Somos Imperio del Pl\xE1stico, tu mejor opci\xF3n para comprar productos pl\xE1sticos en Bogot\xE1 y toda Colombia, con calidad garantizada. Encuentra bolsas de todo tipo, empaques de seguridad, pl\xE1sticos para el agro y soluciones de embalaje. Disfruta de asesor\xEDa experta y env\xEDos r\xE1pidos a nivel nacional. \xA1Explora nuestra variedad y cotiza hoy mismo!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "/home/manurodriguez/imperiodelplastico/src/pages/index.astro", void 0);

const $$file = "/home/manurodriguez/imperiodelplastico/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
