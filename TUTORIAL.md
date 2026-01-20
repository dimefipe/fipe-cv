# Tutorial: Configuración de Astro + Tailwind CSS v4 + View Transitions

Este documento explica paso a paso todo lo que se hizo para configurar el proyecto CV con Astro, Tailwind CSS v4, Remix Icon y transiciones suaves.

---

## 📋 Índice

1. [Configuración de Tailwind CSS v4](#1-configuración-de-tailwind-css-v4)
2. [Configuración de estilos globales](#2-configuración-de-estilos-globales)
3. [Creación del Layout principal](#3-creación-del-layout-principal)
4. [Sistema de navegación con efectos hover](#4-sistema-de-navegación-con-efectos-hover)
5. [View Transitions para navegación suave](#5-view-transitions-para-navegación-suave)
6. [Estado activo dinámico con JavaScript](#6-estado-activo-dinámico-con-javascript)
7. [Creación de páginas](#7-creación-de-páginas)

---

## 1. Configuración de Tailwind CSS v4

**Archivo:** `astro.config.mjs`

### ¿Qué se hizo?

- Configurar el plugin de Tailwind CSS v4 para Vite
- Habilitar `clientPrerender` para mejores transiciones

### Código:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  experimental: {
    clientPrerender: true,  // Mejora las View Transitions
  },
  vite: {
    plugins: [
      tailwindcss()  // Plugin de Tailwind v4
    ],
  },
});
```

### Conceptos clave:

- **Tailwind v4**: Nueva versión que se configura con CSS en lugar de archivos `.config.js`
- **Vite**: El bundler que usa Astro internamente
- **clientPrerender**: Característica experimental que mejora las transiciones de página

---

## 2. Configuración de estilos globales

**Archivo:** `src/assets/styles.css`

### ¿Qué se hizo?

- Importar Tailwind CSS v4
- Importar las fuentes de Remix Icon

### Código:

```css
/**
 * Importar Tailwind CSS v4
 * En la v4, se usa @import en lugar de @tailwind
 */
@import "tailwindcss";

/**
 * Importar los estilos de Remix Icon
 * Esto carga las fuentes para usar iconos como ri-user-line
 */
@import "remixicon/fonts/remixicon.css";
```

### Conceptos clave:

- **@import "tailwindcss"**: Reemplaza las antiguas directivas `@tailwind base/components/utilities`
- **Remix Icon**: Biblioteca de iconos que se usan con clases CSS (ej: `ri-user-line`)

---

## 3. Creación del Layout principal

**Archivo:** `src/layouts/Layout.astro`

### ¿Qué se hizo?

- Importar estilos globales y el logo
- Importar `ClientRouter` para View Transitions
- Crear estructura HTML con header y main
- Configurar layout flexbox horizontal

### Código (frontmatter):

```astro
---
import { ClientRouter } from 'astro:transitions';
import '../assets/styles.css';
import logo from '../assets/fipe-simbolo.webp';
---
```

### Estructura HTML básica:

```html
<html lang="en">
  <head>
    <ClientRouter />  <!-- Habilita View Transitions -->
  </head>
  <body class="flex">  <!-- Flexbox horizontal -->
    <header>...</header>
    <main>
      <slot />  <!-- Contenido de cada página -->
    </main>
  </body>
</html>
```

### Conceptos clave:

- **ClientRouter**: Componente que habilita las transiciones suaves sin recargas
- **slot**: Espacio donde se inyecta el contenido de cada página
- **flex**: Layout flexbox que coloca header y main lado a lado

---

## 4. Sistema de navegación con efectos hover

**Archivo:** `src/layouts/Layout.astro` (sección header)

### ¿Qué se hizo?

- Logo centrado con efecto hover
- Navegación centrada absolutamente en el header
- Menú vertical con iconos y labels
- Efectos hover usando el patrón `group`

### Logo:

```html
<a href="/" class="hover:opacity-80 transition-opacity self-center">
  <img src={logo.src} alt="Felipe Belmar" class="w-12 h-12 object-contain">
</a>
```

### Navegación centrada:

```html
<nav class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <ul class="flex flex-col gap-3">
    <!-- Items del menú -->
  </ul>
</nav>
```

### Item del menú con efectos hover:

```html
<a href="/" class="nav-link flex gap-1 items-center relative group" data-path="/">
  <!-- Contenedor del ícono -->
  <div class="nav-icon w-12 h-12 rounded-lg flex justify-center items-center
              transition-all duration-300 bg-gray-800 group-hover:bg-rose-700">
    <i class="ri-user-line text-2xl transition-colors"></i>
  </div>

  <!-- Label que aparece al hacer hover -->
  <span class="absolute left-13 bg-gray-700 leading-none p-1.5 px-2 rounded
               transition-all duration-300 opacity-0 group-hover:opacity-90
               -translate-x-3 group-hover:translate-x-1">
    Perfil
  </span>
</a>
```

### Conceptos clave:

#### Centrado absoluto:
- `absolute`: Posicionamiento absoluto respecto al header
- `top-1/2 left-1/2`: Coloca en el punto 50%, 50%
- `-translate-x-1/2 -translate-y-1/2`: Ajusta -50% para centrado perfecto

#### Patrón Group (hover en elementos hijos):
- `group`: Se aplica al elemento padre (el `<a>`)
- `group-hover:bg-rose-700`: Se aplica al hijo, se activa cuando haces hover en el padre
- Permite controlar múltiples elementos hijos desde un solo hover

#### Transiciones:
- `transition-all duration-300`: Transición suave de 300ms para todos los cambios
- `transition-colors`: Solo anima cambios de color (más eficiente)
- `transition-opacity`: Solo anima opacidad

#### Animación del label:
- `opacity-0`: Invisible por defecto
- `group-hover:opacity-90`: Se hace visible al hacer hover
- `-translate-x-3`: Posición inicial (12px a la izquierda)
- `group-hover:translate-x-1`: Posición final (4px a la derecha) - crea movimiento de entrada

#### Tamaños:
- `w-12 h-12`: 48px × 48px (tamaño cuadrado)
- `text-2xl`: 24px para el ícono
- `rounded-lg`: Bordes redondeados de 8px
- `gap-3`: Espacio de 12px entre elementos

---

## 5. View Transitions para navegación suave

**Archivo:** `src/layouts/Layout.astro`

### ¿Qué se hizo?

- Agregar `<ClientRouter />` en el head
- Configurar `transition:animate` y `transition:persist`
- Controlar z-index para layering correcto

### Configuración en el head:

```html
<head>
  <ClientRouter />  <!-- Habilita View Transitions -->
</head>
```

### Body con transiciones:

```html
<body class="flex" transition:animate="none">
  <!-- transition:animate="none" habilita transiciones pero no anima el body -->

  <header class="... z-20" transition:persist>
    <!-- transition:persist mantiene el header fijo sin recargar -->
  </header>

  <main class="... z-10" transition:animate="fade">
    <!-- transition:animate="fade" aplica efecto de desvanecimiento -->
    <slot />
  </main>
</body>
```

### Conceptos clave:

#### View Transitions:
- **ClientRouter**: Componente que intercepta la navegación y usa View Transitions API
- **transition:persist**: El elemento NO se recarga entre páginas (se mantiene fijo)
- **transition:animate**: Define qué animación usar (fade, slide, none)

#### Z-index:
- `z-20` en header: Asegura que esté por encima del main
- `z-10` en main: Por debajo del header
- Esto permite que los labels del menú aparezcan sobre el contenido del main

#### Tipos de animación:
- `fade`: Desvanecimiento
- `slide`: Deslizamiento
- `none`: Sin animación (pero habilita transiciones)

---

## 6. Estado activo dinámico con JavaScript

**Archivo:** `src/layouts/Layout.astro` (sección script)

### ¿Qué se hizo?

- Script del lado del cliente para detectar la ruta actual
- Actualizar el color de fondo del ícono activo
- Escuchar eventos de transición de página

### Estructura de los enlaces:

```html
<a href="/" class="nav-link" data-path="/">
  <div class="nav-icon bg-gray-800">...</div>
</a>
```

- **nav-link**: Clase personalizada para seleccionar todos los enlaces
- **data-path**: Atributo que guarda la ruta para comparar
- **nav-icon**: Clase personalizada para seleccionar el contenedor del ícono

### Script JavaScript:

```javascript
<script>
  function updateActiveNav() {
    // Obtener la ruta actual
    const currentPath = window.location.pathname;

    // Seleccionar todos los enlaces
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('data-path');
      const icon = link.querySelector('.nav-icon');

      if (linkPath === currentPath) {
        // Enlace activo: color rosa
        icon?.classList.remove('bg-gray-800');
        icon?.classList.add('bg-rose-500');
      } else {
        // Enlace inactivo: color gris
        icon?.classList.remove('bg-rose-500');
        icon?.classList.add('bg-gray-800');
      }
    });
  }

  // Ejecutar al cargar la página
  updateActiveNav();

  // Ejecutar después de cada transición
  document.addEventListener('astro:page-load', updateActiveNav);
</script>
```

### Conceptos clave:

#### Atributos data:
- `data-*`: Atributos personalizados HTML5 para almacenar información
- `getAttribute('data-path')`: Obtiene el valor del atributo

#### querySelector:
- `.querySelector('.nav-icon')`: Busca el primer elemento con esa clase dentro del link
- `.querySelectorAll('.nav-link')`: Busca todos los elementos con esa clase

#### Eventos de Astro:
- `astro:page-load`: Se dispara después de cada transición de página
- Permite actualizar el DOM después de que Astro carga nuevo contenido

#### Manipulación de clases:
- `classList.add()`: Agrega una clase CSS
- `classList.remove()`: Remueve una clase CSS
- Permite cambiar estilos dinámicamente con JavaScript

---

## 7. Creación de páginas

**Archivos:**
- `src/pages/index.astro`
- `src/pages/conocimientos.astro`
- `src/pages/experiencia.astro`
- `src/pages/contacto.astro`

### ¿Qué se hizo?

- Crear páginas para cada sección
- Importar el Layout en cada página
- Importar el componente correspondiente

### Estructura de cada página:

```astro
---
import Layout from '../layouts/Layout.astro';
import Perfil from '../components/Perfil.astro';
---

<Layout>
    <Perfil />
</Layout>
```

### Sistema de rutas en Astro:

| Archivo | Ruta URL |
|---------|----------|
| `src/pages/index.astro` | `/` |
| `src/pages/conocimientos.astro` | `/conocimientos` |
| `src/pages/experiencia.astro` | `/experiencia` |
| `src/pages/contacto.astro` | `/contacto` |

### Conceptos clave:

#### Routing basado en archivos:
- Astro crea rutas automáticamente según la estructura de archivos en `src/pages/`
- `index.astro` → ruta raíz `/`
- `nombre.astro` → ruta `/nombre`
- `carpeta/nombre.astro` → ruta `/carpeta/nombre`

#### Layout + Componente:
- **Layout**: Envuelve toda la página (header, main, footer)
- **Componente**: Contenido específico de cada sección
- Esta separación permite reutilizar el Layout en todas las páginas

---

## 🎯 Resumen de conceptos de Tailwind CSS usados

### Layout y posicionamiento:
- `flex`, `flex-col`: Flexbox
- `items-center`, `justify-center`: Alineación
- `absolute`, `relative`: Posicionamiento
- `top-1/2`, `left-1/2`: Posición en porcentaje
- `translate-x-*`, `translate-y-*`: Transform para mover elementos
- `gap-*`: Espacio entre elementos flex

### Tamaños:
- `w-*`, `h-*`: Ancho y alto
- `min-w-*`, `min-h-*`: Tamaño mínimo
- `p-*`, `px-*`, `py-*`: Padding
- `text-*`: Tamaño de texto

### Colores y estilos:
- `bg-*`: Color de fondo
- `text-*`: Color de texto
- `rounded-*`: Bordes redondeados
- `opacity-*`: Transparencia

### Transiciones y animaciones:
- `transition-*`: Tipo de transición
- `duration-*`: Duración de la transición
- `hover:*`: Estilos al hacer hover

### Estados y modificadores:
- `group`: Marca un elemento padre
- `group-hover:*`: Estilos del hijo cuando hay hover en el padre
- `hover:*`: Estilos al hacer hover directo

### Z-index:
- `z-*`: Control de apilamiento (quién está arriba/abajo)

---

## 🔍 Flujo completo de navegación

1. **Usuario hace clic en un enlace del menú**
2. **ClientRouter intercepta el click** (evita recarga completa)
3. **View Transitions API inicia:**
   - Header permanece fijo (`transition:persist`)
   - Main se desvanece con `fade` (`transition:animate="fade"`)
4. **Astro carga el contenido nuevo** en el `<slot />`
5. **Se dispara el evento `astro:page-load`**
6. **Script JavaScript `updateActiveNav()` se ejecuta:**
   - Lee `window.location.pathname`
   - Compara con `data-path` de cada enlace
   - Actualiza clases CSS del ícono activo
7. **Main aparece con fade** con el contenido nuevo
8. **Navegación completa** - sin recarga de página

---

## 📂 Estructura final de archivos

```
cv-astro/
├── astro.config.mjs          # Configuración de Astro y Tailwind
├── package.json              # Dependencias del proyecto
├── src/
│   ├── assets/
│   │   ├── styles.css        # Estilos globales (Tailwind + Remix Icon)
│   │   └── fipe-simbolo.webp # Logo
│   ├── components/
│   │   ├── Perfil.astro
│   │   ├── Conocimiento.astro
│   │   ├── Experiencia.astro
│   │   └── Contacto.astro
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal con navegación
│   └── pages/
│       ├── index.astro       # Página de inicio (/)
│       ├── conocimientos.astro
│       ├── experiencia.astro
│       └── contacto.astro
└── TUTORIAL.md               # Este archivo
```

---

## 🚀 Comandos útiles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 📚 Recursos adicionales

- [Documentación de Astro](https://docs.astro.build)
- [View Transitions en Astro](https://docs.astro.build/en/guides/view-transitions/)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Remix Icon](https://remixicon.com)

---

**¡Listo!** Ahora tienes un sitio web con navegación suave, efectos hover profesionales y un sistema de estado activo dinámico.
