# Guía: Manejo de Datos en Astro

Esta guía explica cómo se manejan los datos en tu proyecto de CV usando Astro.

---

## 📋 ¿Qué es el manejo de datos en Astro?

En lugar de escribir el contenido directamente en los componentes (hardcoded), **separamos los datos del diseño**. Esto te permite:

- ✅ Actualizar contenido sin tocar el código HTML/CSS
- ✅ Reutilizar los mismos datos en múltiples componentes
- ✅ Mantener el código organizado y limpio
- ✅ Facilitar traducciones o múltiples versiones del CV

---

## 🗂️ Estructura del proyecto

```
src/
├── data/
│   └── cv-data.js          # ← TODOS los datos del CV centralizados
├── components/
│   ├── Perfil.astro        # ← Importa datos y los muestra
│   ├── Conocimiento.astro  # ← Importa datos y los muestra
│   ├── Experiencia.astro   # ← Importa datos y los muestra
│   └── Contacto.astro      # ← Importa datos y los muestra
└── pages/
    ├── index.astro         # ← Usa el componente Perfil
    ├── conocimientos.astro # ← Usa el componente Conocimiento
    ├── experiencia.astro   # ← Usa el componente Experiencia
    └── contacto.astro      # ← Usa el componente Contacto
```

---

## 📦 Archivo de datos: `src/data/cv-data.js`

Este archivo contiene **toda la información** de tu CV estructurada en objetos JavaScript.

### Ejemplo de estructura:

```javascript
export const perfilProfesional = {
  titulo: "PERFIL PROFESIONAL",
  emoji: "🧠",
  descripcion: "Tu descripción profesional aquí..."
};

export const conocimientos = {
  titulo: "CONOCIMIENTOS GENERALES",
  emoji: "🛠️",
  secciones: [
    {
      nombre: "Tecnologías Web",
      items: ["HTML5", "CSS3", "JavaScript"]
    }
  ]
};
```

### ¿Por qué usar `export`?

`export` hace que estos datos estén disponibles para importarlos en otros archivos.

---

## 🔄 Consumir datos en componentes

### Paso 1: Importar los datos

En el frontmatter del componente (la sección entre `---`), importas los datos que necesitas:

```astro
---
import { perfilProfesional, aptitudes } from '../data/cv-data.js';
---
```

### Paso 2: Usar los datos en el HTML

Usas llaves `{}` para insertar valores de JavaScript en el HTML:

```astro
<h1>{perfilProfesional.titulo}</h1>
<p>{perfilProfesional.descripcion}</p>
```

### Paso 3: Iterar sobre arrays con `.map()`

Para mostrar listas, usas el método `.map()` de JavaScript:

```astro
<ul>
  {aptitudes.lista.map((aptitud) => (
    <li>{aptitud}</li>
  ))}
</ul>
```

**¿Cómo funciona `.map()`?**

`.map()` recorre cada elemento del array y ejecuta una función para cada uno:

```javascript
// Array original
["Item 1", "Item 2", "Item 3"]

// .map() transforma cada item en HTML
.map((item) => <li>{item}</li>)

// Resultado:
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
```

---

## 💡 Ejemplo completo: Componente Perfil

### Datos en `cv-data.js`:

```javascript
export const perfilProfesional = {
  titulo: "PERFIL PROFESIONAL",
  emoji: "🧠",
  descripcion: "Tu descripción aquí..."
};

export const aptitudes = {
  titulo: "APTITUDES",
  emoji: "🎯",
  lista: [
    "Orden en el trabajo",
    "Buena comunicación",
    "Interés por aprender"
  ]
};
```

### Componente `Perfil.astro`:

```astro
---
// 1. Importar datos
import { perfilProfesional, aptitudes } from '../data/cv-data.js';
---

<div>
  <!-- 2. Usar datos simples con {} -->
  <h1>{perfilProfesional.emoji} {perfilProfesional.titulo}</h1>
  <p>{perfilProfesional.descripcion}</p>

  <!-- 3. Iterar sobre un array -->
  <h2>{aptitudes.emoji} {aptitudes.titulo}</h2>
  <ul>
    {aptitudes.lista.map((aptitud) => (
      <li>{aptitud}</li>
    ))}
  </ul>
</div>
```

### Resultado HTML generado:

```html
<div>
  <h1>🧠 PERFIL PROFESIONAL</h1>
  <p>Tu descripción aquí...</p>

  <h2>🎯 APTITUDES</h2>
  <ul>
    <li>Orden en el trabajo</li>
    <li>Buena comunicación</li>
    <li>Interés por aprender</li>
  </ul>
</div>
```

---

## 🎯 Ventajas de este enfoque

### Antes (sin datos separados):

```astro
<h1>PERFIL PROFESIONAL</h1>
<p>Perfil en formación dentro del desarrollo frontend...</p>

<h2>APTITUDES</h2>
<ul>
  <li>Orden en el trabajo</li>
  <li>Buena comunicación</li>
  <li>Interés por aprender</li>
</ul>
```

**Problema:** Si quieres cambiar "Orden en el trabajo" por "Cuidado por la claridad", tienes que buscar en el HTML.

### Después (con datos separados):

**Archivo de datos:**
```javascript
export const aptitudes = {
  lista: [
    "Cuidado por la claridad",  // ← Solo cambias aquí
    "Buena comunicación",
    "Interés por aprender"
  ]
};
```

**Componente:**
```astro
<ul>
  {aptitudes.lista.map((aptitud) => (
    <li>{aptitud}</li>
  ))}
</ul>
```

**Ventaja:** Cambias el contenido en UN solo lugar y se actualiza automáticamente en todos los componentes que lo usen.

---

## 🔧 Cómo actualizar tu CV

### 1. Editar datos personales

Abre `src/data/cv-data.js` y busca la sección `contacto`:

```javascript
export const contacto = {
  informacion: {
    nombre: "Tu Nombre Aquí",           // ← Cambia esto
    email: "tu-email@example.com",      // ← Cambia esto
    telefono: "+56 9 1234 5678",        // ← Cambia esto
    linkedin: "https://linkedin.com/in/tu-perfil",  // ← Cambia esto
    github: "https://github.com/tu-usuario"         // ← Cambia esto
  }
};
```

### 2. Agregar nueva aptitud

```javascript
export const aptitudes = {
  lista: [
    "Orden en el trabajo",
    "Buena comunicación",
    "Nueva aptitud aquí"  // ← Solo agrega aquí
  ]
};
```

El componente automáticamente mostrará la nueva aptitud.

### 3. Agregar nueva experiencia laboral

```javascript
export const experiencia = {
  trabajos: [
    {
      cargo: "Colaboración en Proyectos Web",
      modalidad: "Remoto",
      periodo: "2023 - 2024",
      responsabilidades: [
        "Responsabilidad 1",
        "Responsabilidad 2"
      ]
    },
    // Agregar nuevo trabajo aquí
    {
      cargo: "Nuevo Trabajo",
      modalidad: "Presencial",
      periodo: "2024 - Presente",
      responsabilidades: [
        "Nueva responsabilidad 1",
        "Nueva responsabilidad 2"
      ]
    }
  ]
};
```

---

## 🌟 Conceptos clave de JavaScript usados

### 1. Objetos

```javascript
const persona = {
  nombre: "Felipe",
  edad: 25
};

// Acceder a propiedades
persona.nombre  // "Felipe"
persona.edad    // 25
```

### 2. Arrays

```javascript
const frutas = ["Manzana", "Pera", "Uva"];

// Acceder a elementos
frutas[0]  // "Manzana"
frutas[1]  // "Pera"
```

### 3. Método `.map()`

```javascript
const numeros = [1, 2, 3];

// Transformar cada número
const dobles = numeros.map((num) => num * 2);
// Resultado: [2, 4, 6]

// En Astro con HTML
{numeros.map((num) => (
  <p>{num}</p>
))}
```

### 4. Destructuring

```javascript
// Sin destructuring
import { contacto } from '../data/cv-data.js';
const info = contacto.informacion;
const nombre = info.nombre;

// Con destructuring (más limpio)
const { informacion } = contacto;
const { nombre } = informacion;
```

---

## 📚 Otras formas de manejar datos en Astro

### Opción 1: JSON (actual enfoque con `.js`)

**Archivo:** `src/data/cv-data.js`
```javascript
export const perfil = { ... };
```

**Ventajas:**
- Puedes usar comentarios
- Más flexible (funciones, cálculos, etc.)

### Opción 2: Archivo JSON puro

**Archivo:** `src/data/cv-data.json`
```json
{
  "perfil": {
    "titulo": "PERFIL PROFESIONAL"
  }
}
```

**Importar:**
```astro
---
import cvData from '../data/cv-data.json';
---
<h1>{cvData.perfil.titulo}</h1>
```

**Ventajas:**
- Más estricto (solo datos)
- Fácil de validar

**Desventajas:**
- No admite comentarios
- Menos flexible

### Opción 3: Markdown con Frontmatter

**Archivo:** `src/content/perfil.md`
```markdown
---
titulo: "PERFIL PROFESIONAL"
emoji: "🧠"
---

Tu descripción profesional aquí en **markdown**.
```

**Importar:**
```astro
---
import { getEntry } from 'astro:content';
const perfil = await getEntry('perfil');
---
<h1>{perfil.data.titulo}</h1>
<div set:html={perfil.render()} />
```

**Ventajas:**
- Ideal para contenido largo con formato
- Soporte para markdown

---

## 🎓 Resumen

1. **Datos centralizados** en `src/data/cv-data.js`
2. **Importar** con `import { ... } from '../data/cv-data.js'`
3. **Mostrar** con `{variable}`
4. **Iterar** con `.map()`
5. **Actualizar** solo en el archivo de datos

Este enfoque hace que tu CV sea:
- ✅ Fácil de mantener
- ✅ Escalable
- ✅ Profesional
- ✅ Reutilizable

---

**¡Ahora sabes cómo funciona el manejo de datos en Astro!** 🚀
