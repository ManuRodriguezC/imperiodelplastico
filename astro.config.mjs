// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   }
  // }),
  integrations: [react()]
});