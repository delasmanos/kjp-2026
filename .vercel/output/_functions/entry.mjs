import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_NHhEm-8V.mjs';
import { manifest } from './manifest_BUE3HDoR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/posts/_---page_.astro.mjs');
const _page6 = () => import('./pages/projects/_---page_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["src/pages/posts/[...page].astro", _page5],
    ["src/pages/projects/[...page].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c93c3275-e1bb-4c2f-a578-46551280fb52",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
