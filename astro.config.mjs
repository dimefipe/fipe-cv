// @ts-check
import { defineConfig } from 'astro/config';
// Importar el plugin de Vite para Tailwind CSS v4
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración experimental de Astro
  experimental: {
    // Habilita el pre-renderizado del lado del cliente para transiciones más suaves
    // Esto mejora la experiencia de usuario con View Transitions
    clientPrerender: true,
  },
  // Configuración de Vite (el bundler que usa Astro)
  vite: {
    // Plugins de Vite
    plugins: [
      // Plugin de Tailwind CSS v4 que funciona directamente con Vite
      // En v4, Tailwind se configura con CSS en lugar de archivos .config.js
      tailwindcss()
    ],
  },
});
