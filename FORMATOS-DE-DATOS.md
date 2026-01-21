# 📚 Guía de Formatos de Datos en Astro

Este proyecto demuestra **4 formatos diferentes** para almacenar y consumir datos en Astro.

## 🎯 Archivos Creados

### 1. JavaScript (.js) - `src/data/data-perfil.js`
**Usado en:** [src/components/Perfil.astro](src/components/Perfil.astro)

```javascript
export const perfilProfesional = {
  titulo: "PERFIL PROFESIONAL",
  emoji: "👤",
  descripcion: "Desarrollador web en formación..."
};

export const aptitudes = {
  titulo: "APTITUDES PERSONALES",
  emoji: "🌟",
  lista: ["...", "..."]
};
```

**Ventajas:**
- ✅ Puedes exportar múltiples objetos
- ✅ Puedes incluir funciones y lógica
- ✅ Sintaxis JavaScript completa

**Cómo importar:**
```astro
---
import { perfilProfesional, aptitudes } from '../data/data-perfil.js';
---
```

---

### 2. JSON (.json) - `src/data/data-conocimientos.json`
**Usado en:** [src/components/Conocimiento.astro](src/components/Conocimiento.astro)

```json
{
  "titulo": "CONOCIMIENTOS GENERALES",
  "emoji": "🛠️",
  "secciones": [
    {
      "nombre": "Tecnologías Web",
      "items": ["HTML5", "CSS3", "JavaScript"]
    }
  ]
}
```

**Ventajas:**
- ✅ Formato universal y estándar
- ✅ Fácil de validar con esquemas
- ✅ Ideal para datos que vienen de APIs

**Cómo importar:**
```astro
---
import conocimientos from '../data/data-conocimientos.json';
const { titulo, emoji, secciones } = conocimientos;
---
```

---

### 3. Markdown (.md) - `src/data/data-experiencia.md`
**Usado en:** [src/components/Experiencia.astro](src/components/Experiencia.astro)

```markdown
---
titulo: "EXPERIENCIA PROFESIONAL"
emoji: "💼"
trabajos:
  - cargo: "Freelance - Desarrollo Web"
    modalidad: "Remoto"
    responsabilidades:
      - "Desarrollo de sitios web"
      - "Implementación de diseños"

interesProfesional:
  titulo: "INTERÉS PROFESIONAL"
  emoji: "🎯"
  intereses:
    - "Aprender frameworks modernos"
---

# Experiencia Profesional

Este archivo combina datos (frontmatter YAML) con contenido Markdown.
```

**Ventajas:**
- ✅ Combina datos estructurados con contenido
- ✅ Sintaxis YAML más legible que JSON
- ✅ Puedes documentar los datos en el mismo archivo

**Cómo importar:**
```astro
---
const experienciaData = await import('../data/data-experiencia.md');
const { trabajos, interesProfesional, idiomas } = experienciaData.frontmatter;
---
```

---

### 4. TypeScript (.ts) - `src/data/data-contacto.ts`
**Usado en:** [src/components/Contacto.astro](src/components/Contacto.astro)

```typescript
// Definir interfaces
export interface Contacto {
  titulo: string;
  emoji: string;
  informacion: InformacionContacto;
}

export interface InformacionContacto {
  nombre: string;
  email: string;
  telefono: string;
  ubicacion: string;
  linkedin: string;
  github: string;
  disponibilidad: string;
}

// Exportar datos tipados
export const contacto: Contacto = {
  titulo: "CONTACTO",
  emoji: "📧",
  informacion: {
    nombre: "Felipe Osorio",
    email: "contacto@ejemplo.com",
    // ...
  }
};
```

**Ventajas:**
- ✅ Autocompletado inteligente en el IDE
- ✅ Detección de errores en tiempo de desarrollo
- ✅ Documentación automática de la estructura
- ✅ Refactorización segura

**Cómo importar:**
```astro
---
import { contacto } from '../data/data-contacto';
const { informacion } = contacto;
---
```

---

## 🔍 Comparación Rápida

| Formato | Extensión | Mejor Para | Complejidad |
|---------|-----------|------------|-------------|
| JavaScript | .js | Proyectos flexibles con lógica | Baja |
| JSON | .json | Datos de APIs o servicios externos | Baja |
| Markdown | .md | Contenido con metadata (blogs, CMS) | Media |
| TypeScript | .ts | Proyectos grandes con validación | Media-Alta |

---

## ✅ Cuándo Usar Cada Uno

### Usa JavaScript (.js) cuando:
- Necesitas exportar múltiples objetos
- Quieres incluir funciones helpers
- Prefieres sintaxis JavaScript familiar

### Usa JSON (.json) cuando:
- Los datos vienen de una API REST
- Necesitas validar con JSON Schema
- Quieres un formato universalmente compatible

### Usa Markdown (.md) cuando:
- Necesitas combinar datos y documentación
- Estás construyendo un blog o CMS
- Prefieres YAML sobre JSON para los datos

### Usa TypeScript (.ts) cuando:
- Trabajas en un proyecto grande
- Quieres prevenir errores de tipo
- Trabajas en equipo y necesitas interfaces claras
- Quieres mejor experiencia de desarrollo (IntelliSense)

---

## 🚀 Próximos Pasos

1. **Explora cada archivo** en `src/data/` para ver ejemplos reales
2. **Lee cada componente** en `src/components/` para ver cómo se importan
3. **Revisa [DATA-METHODS.md](DATA-METHODS.md)** para documentación completa
4. **Experimenta** creando tus propios archivos de datos

---

## 💡 Consejos

- **Empieza simple**: Usa .js para tus primeros proyectos
- **Sé consistente**: No mezcles formatos sin razón en el mismo proyecto
- **Documenta**: Agrega comentarios explicando por qué elegiste cada formato
- **Valida**: Usa TypeScript cuando el proyecto crezca para evitar errores

---

¡Ahora sabes usar todos los formatos de datos disponibles en Astro! 🎉
