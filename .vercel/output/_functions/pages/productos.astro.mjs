import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXA-7ckB.mjs';
import 'kleur/colors';
import { $ as $$CartProduct } from '../chunks/CartProduct_CFuXBLQz.mjs';
import { p as products } from '../chunks/productos_WFoyCUqB.mjs';
import { $ as $$Layout } from '../chunks/Layout_D8xhyr2J.mjs';
export { renderers } from '../renderers.mjs';

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestros Productos | Imperio del Plastico", "description": "Explora el cat\xE1logo de Imperio del Pl\xE1stico y descubre todos nuestros productos en un solo lugar. Encuentra bolsas de polipropileno, empaques de seguridad, pl\xE1sticos para el agro y m\xE1s, con im\xE1genes, descripciones detalladas y enlaces directos para que cotices f\xE1cilmente. Calidad garantizada y soluciones para cada necesidad. \xA1Encuentra lo que buscas hoy mismo!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-end items-center h-auto pb-28 pt-20 lg:pt-32 xl:pt-40 px-6 md:px-20 back-products"> <h1 class="text-2xl xl:text-3xl text-center my-10 color-imperio">Damos soluciones para cubrir tu necesidad en Bogotá y toda Colombia</h1> <p class="text-sm lg:text-xl text-center py-10 text-gray-500">
Descubre nuestra amplia gama de productos plásticos diseñados para diferentes industrias. 
      Desde embalajes hasta soluciones agrícolas, ofrecemos materiales de alta calidad que se adaptan a tus necesidades. 
      ¡Explora nuestro catálogo y encuentra la mejor opción para ti!
</p> <div class="flex flex-wrap justify-center items-center gap-5"> ${products.map((prod) => renderTemplate`${renderComponent($$result2, "CartProduct", $$CartProduct, { ...prod })}`)} </div> </main> ` })}`;
}, "/home/manurodriguez/imperiodelplastico/src/pages/productos.astro", void 0);

const $$file = "/home/manurodriguez/imperiodelplastico/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
