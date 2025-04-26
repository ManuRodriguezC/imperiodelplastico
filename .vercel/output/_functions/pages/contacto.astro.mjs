import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DXA-7ckB.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$WhatsApp } from '../chunks/Layout_D8xhyr2J.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const messageWhatsApp = "Hola%2C%20estoy%20interesado%2Fa%20en%20sus%20productos.%20%20%0A%C2%BFMe%20pueden%20brindar%20m\xE1s%20informaci\xF3n%3F";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos | Imperio del Plastico", "description": "En nuestra p\xE1gina de contacto encontrar\xE1s toda la informaci\xF3n que necesitas para comunicarte con Imperio del Pl\xE1stico. Conoce nuestro punto principal, ub\xEDcanos f\xE1cilmente con el mapa interactivo, accede a todos nuestros n\xFAmeros de contacto o completa el formulario para que nuestro equipo se ponga en contacto contigo r\xE1pidamente. \xA1Estamos listos para atenderte!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col justify-end items-center h-auto pb-28 pt-20 lg:pt-32 xl:pt-40 px-6 md:px-20 lg:px-32 xl:px-40"> <h1 class="relative text-base md:text-xl lg:text-2xl xl:text-3xl text-center my-10 color-imperio after:content-[''] after:block after:w-[90%]
    after:h-[4px] after:bg-red-600 after:absolute after:-bottom-2 after:left-[5%] after:rounded-full">
Te invitamos a que nos contactes por cualquiera de nuestros medios
</h1> <div class="flex flex-col lg:flex-row-reverse justify-center items-center"> <div class="w-auto p-10"> <h3 class="bg-imperio text-2xl text-white font-bold text-center p-2">Sede Principal</h3> <p class="text-center md:text-left"><strong>Dirección:</strong> Calle 4d # 62-29</p> <p class="text-center md:text-left"><strong>Barrio:</strong> Puente Aranda - Bogotá</p> <p class="text-center md:text-left"><strong>Telefono:</strong> 601 6843319</p> </div> <div class="flex flex-col border-4 border-red-500 rounded-lg"> <img src="/images/local.webp" alt="Nuestra local en imperios del plastico" class="h-auto w-[350px] rounded-t-md"> <iframe class="w-full h-auto xl:h-[100px] shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.55196437324668!2d-74.11936527840138!3d4.624145921464077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9910db31d9b1%3A0xb3c0ce660dfe336f!2sEl%20imperio%20del%20plastico!5e0!3m2!1ses-419!2sco!4v1743353623076!5m2!1ses-419!2sco" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe> </div> </div> <div class="flex flex-col gap-5 justify-center items-center"> <h4 class="py-5 text-base lg:text-lg xl:text-xl color-imperio text-center">Escribenos a nuestras lineas de WhatsApp o Dejanos tus datos para que te contactemos</h4> <div class="flex flex-col justify-center items-center"> <p class="mb-5">
Nuestras Lineas
</p> <div class="flex flex-row gap-10"> <a class="flex flex-row gap-2" class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=573203510858&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "WhatsApp", $$WhatsApp, {})} <p class="font-serif">
+57 3203510858
</p> </a> <a class="flex flex-row gap-2" class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=573132871471&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "WhatsApp", $$WhatsApp, {})} <p class="font-serif">
+57 3202349166
</p> </a> </div> </div> ${renderComponent($$result2, "FormContact", FormContact, { "client:load": true, "client:component-hydration": "load" })} </div> </main> ` })}`;
}, "/home/manurodriguez/imperiodelplastico/src/pages/contacto.astro", void 0);

const $$file = "/home/manurodriguez/imperiodelplastico/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
