import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXA-7ckB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D8xhyr2J.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 not found | Imperio del Plastico", "description": "Ups, parece que esta p\xE1gina no existe. En Imperio del Pl\xE1stico te ayudamos a encontrar lo que buscas. Regresa al inicio o explora nuestro cat\xE1logo de productos. \xA1Estamos aqu\xED para ayudarte!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-end items-center h-[600px] pb-28 pt-40 px-40 back-products"> <div> <h2 class="text-5xl">Tenemos un problema</h2> <p class="text-red-700 text-xl my-5">Pero ese producto o ruta no lo encontramos, puede que aun este en fabricación</p> <p class="text-2xl"> <a href="/" class="bg-red-200 hover:bg-red-700 hover:text-white transition-all duration-200 rounded-xl px-2">
Ve a la página principal
</a> o <a href="/productos" class="bg-red-200 hover:bg-red-700 hover:text-white transition-all duration-200 rounded-xl px-2">Conoce todos nuestros productos</a> </p> <div class="flex flex-row justify-center items-center mt-10 gap-5"> <p class="text-7xl">404</p> <p class="text-3xl">Página no encontrada</p> </div> </div> </main> ` })}`;
}, "/home/manurodriguez/imperiodelplastico/src/pages/404.astro", void 0);

const $$file = "/home/manurodriguez/imperiodelplastico/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
