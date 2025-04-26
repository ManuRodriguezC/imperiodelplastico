import { p as products } from '../../chunks/productos_WFoyCUqB.mjs';
export { renderers } from '../../renderers.mjs';

function GET() {
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
