/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Rutas relativas: la app anda igual en la raiz del dominio o colgando de
// una subcarpeta, sin recompilar. (Antes aca decia que corria bajo /pmtool/,
// que es justo lo contrario de lo que hace `base: './'`.)
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/core/**/*.ts'],
    },
  },
});
