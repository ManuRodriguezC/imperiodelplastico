import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_DXA-7ckB.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B2LKmHJn.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/manurodriguez/imperiodelplastico/","cacheDir":"file:///home/manurodriguez/imperiodelplastico/node_modules/.astro/","outDir":"file:///home/manurodriguez/imperiodelplastico/dist/","srcDir":"file:///home/manurodriguez/imperiodelplastico/src/","publicDir":"file:///home/manurodriguez/imperiodelplastico/public/","buildClientDir":"file:///home/manurodriguez/imperiodelplastico/dist/client/","buildServerDir":"file:///home/manurodriguez/imperiodelplastico/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.Cj4dM9Ik.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/productos","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/productos\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/productos.ts","pathname":"/api/productos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.ts","pathname":"/api/sendEmail","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.Cj4dM9Ik.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contacto.Cj4dM9Ik.css"}],"routeData":{"route":"/productos","isIndex":false,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos.astro","pathname":"/productos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.5969g7Mh.css"},{"type":"external","src":"/_astro/contacto.Cj4dM9Ik.css"},{"type":"external","src":"/_astro/index.5969g7Mh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/manurodriguez/imperiodelplastico/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/imperiodelplastico/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/imperiodelplastico/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/imperiodelplastico/src/pages/linea/[linea].astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/imperiodelplastico/src/pages/producto/[producto].astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/imperiodelplastico/src/pages/productos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/productos@_@ts":"pages/api/productos.astro.mjs","\u0000@astro-page:src/pages/api/sendEmail@_@ts":"pages/api/sendemail.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/linea/[linea]@_@astro":"pages/linea/_linea_.astro.mjs","\u0000@astro-page:src/pages/productos@_@astro":"pages/productos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/producto/[producto]@_@astro":"pages/producto/_producto_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/manurodriguez/imperiodelplastico/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DZaO1Q13.mjs","\u0000@astrojs-manifest":"manifest_C4VlhSx5.mjs","/home/manurodriguez/imperiodelplastico/src/components/tsx/BannerLoop":"_astro/BannerLoop.BX7nwfdH.js","/home/manurodriguez/imperiodelplastico/src/components/tsx/BannerHero":"_astro/BannerHero.BnZbTBFg.js","@astrojs/react/client.js":"_astro/client.CBwL3ilQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contacto.Cj4dM9Ik.css","/_astro/index.5969g7Mh.css","/_astro/BannerHero.BnZbTBFg.js","/_astro/BannerLoop.BX7nwfdH.js","/_astro/autoplay.CntvDolo.js","/_astro/client.CBwL3ilQ.js","/_astro/index.ai7qpRr1.js","/fonts/NotoSerifKR-Black.woff2","/fonts/NotoSerifKR-Bold.woff2","/fonts/NotoSerifKR-Light.woff2","/fonts/NotoSerifKR-Medium.woff2","/images/bag.webp","/images/banner-bolsas.webp","/images/banner_stretch.webp","/images/biohazard.webp","/images/bioseguridad.webp","/images/bolsas.webp","/images/cintas.webp","/images/cintas1.webp","/images/cintas2.webp","/images/cintas3.webp","/images/empaques.webp","/images/empaques1.webp","/images/images_STRETCH.webp","/images/images_stretch1.webp","/images/invernadero.webp","/images/invernaderos.webp","/images/local.webp","/images/logo.jpg","/images/logo.webp","/images/logo_new.webp","/images/logo_old.jpg","/images/logoimperio.webp","/images/paper-roll.webp","/images/persona1.webp","/images/persona2.webp","/images/plastic-background.webp","/images/plastico-invernadero.webp","/images/plastico_burbujas.webp","/images/polisombras.webp","/images/risk.webp","/images/shield.webp","/images/slider2-1536x761.webp","/images/strech.webp","/images/tapetes.webp","/images/products/bolsa_aluminio.webp","/images/products/bolsa_basura.webp","/images/products/bolsa_celofan.webp","/images/products/bolsa_hermetica.webp","/images/products/bolsa_poliprofileno.webp","/images/products/bolsa_seguridad.webp","/images/products/bolsas_papel.webp","/images/products/cinta_adhesiva.webp","/images/products/cinta_termo.webp","/images/products/cintapeligro.webp","/images/products/gorro.webp","/images/products/guantes_de_nitrilo.webp","/images/products/lona_payaso.webp","/images/products/mantel_decorativo.webp","/images/products/plastico_burbujas.webp","/images/products/plastico_de_colores.webp","/images/products/plasticos-invernaderos.webp","/images/products/polisombra.webp","/images/products/stretch_film.webp","/images/products/stretch_negro.webp","/images/products/tapabocas.webp","/images/products/tapete_alto_trafico.webp","/images/products/vinilos.webp","/images/products/vinipel.webp","/images/products/ziploc.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cwwOUp9GCMl8Ws7u/i+2OyMsFqbqGAcK596YVgS+8oI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
