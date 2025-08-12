import { defineConfig } from 'astro/config';

// Config per "project site" su GitHub Pages:
// URL finale: https://<IllusionRecords>.github.io/illusion-records-site
export default defineConfig({
  site: 'https://<IllusionRecords>.github.io',
  base: '/illusion-records-site',
});
