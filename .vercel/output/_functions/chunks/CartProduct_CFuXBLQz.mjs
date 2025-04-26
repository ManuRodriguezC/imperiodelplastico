import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DXA-7ckB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CartProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CartProduct;
  const prod = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a view-transition${addAttribute(`/producto/${prod.slug}`, "href")} class="group w-72 min-h-[350px] flex flex-col justify-between p-5 h-auto hover:scale-105 duration-300 transition-all
  items-center border-[1px] border-red-600 rounded-xl shadow-2xl"> <img${addAttribute(`${prod.imagen}`, "src")}${addAttribute(`Producto ${prod.nombre}`, "alt")} style="view-transition-name: image-product;" class="group-hover:scale-110 group-hover:rotate-4 transition-all duration-300"> <div class="flex flex-col"> <h3 class="text-center color-imperio text-xl font-semibold">${prod.nombre}</h3> <p class="text-center text-xs">${prod.descripcion}</p> </div> </a>`;
}, "/home/manurodriguez/imperiodelplastico/src/components/CartProduct.astro", void 0);

export { $$CartProduct as $ };
