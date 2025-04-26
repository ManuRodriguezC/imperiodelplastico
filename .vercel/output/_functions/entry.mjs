import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CP9kg8MG.mjs';
import { manifest } from './manifest_C4VlhSx5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/productos.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/linea/_linea_.astro.mjs');
const _page6 = () => import('./pages/producto/_producto_.astro.mjs');
const _page7 = () => import('./pages/productos.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/productos.ts", _page2],
    ["src/pages/api/sendEmail.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/linea/[linea].astro", _page5],
    ["src/pages/producto/[producto].astro", _page6],
    ["src/pages/productos.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d1f02300-d90e-49f7-85b1-da0b9f41821d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
