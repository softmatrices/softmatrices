// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react({
      experimentalReactChildren: true
    })
  ],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});