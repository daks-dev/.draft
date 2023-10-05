import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://daks.dev',

  trailingSlash: 'never',

  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  vite: {
    logLevel: 'info',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
        $app: fileURLToPath(new URL('./src/lib/app', import.meta.url))
      }
    }
  }
});
