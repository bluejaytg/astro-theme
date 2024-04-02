import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), // This integrates React support into your Astro project.
    tailwind() // This integrates Tailwind CSS support into your Astro project.
  ]
});
