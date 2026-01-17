import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import markdoc from '@astrojs/markdoc';
// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [
        react(),
        keystatic(),
        mdx(),
        sitemap(),
        markdoc()
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});
