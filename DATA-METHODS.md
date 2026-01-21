# Métodos de Consumo de Datos en Astro

Este documento muestra los **4 formatos de archivos diferentes** para almacenar y consumir datos en Astro: JavaScript (.js), JSON (.json), Markdown (.md) y TypeScript (.ts).

## 📁 Archivos de Datos Creados

| Componente | Archivo de Datos | Formato |
|------------|------------------|---------|
| Perfil | `src/data/data-perfil.js` | JavaScript |
| Conocimientos | `src/data/data-conocimientos.json` | JSON |
| Experiencia | `src/data/data-experiencia.md` | Markdown + YAML |
| Contacto | `src/data/data-contacto.ts` | TypeScript |

Cada componente demuestra un **método diferente de importar y consumir datos**, permitiéndote aprender todas las opciones disponibles en Astro.

---

## 📦 Método 1: Archivo JavaScript (.js)

**Componente:** `src/components/Perfil.astro`
**Archivo de datos:** `src/data/data-perfil.js`

### Concepto:
Importar solo lo que necesitas desde un archivo JavaScript. Este es el método más común y sencillo. Los archivos .js permiten exportar múltiples objetos y usar JavaScript nativo.

### Código del archivo de datos:
```javascript
// src/data/data-perfil.js
export const perfilProfesional = {
  titulo: "PERFIL PROFESIONAL",
  emoji: "👤",
  descripcion: "Desarrollador web en formación..."
};

export const aptitudes = {
  titulo: "APTITUDES PERSONALES",
  emoji: "🌟",
  lista: [
    "Capacidad de aprendizaje rápido",
    "Atención al detalle en el código"
  ]
};
```

### Código del componente:
```astro
---
import { perfilProfesional, aptitudes } from '../data/data-perfil.js';
---

<h1>{perfilProfesional.titulo}</h1>
<p>{perfilProfesional.descripcion}</p>

<ul>
  {aptitudes.lista.map((aptitud) => (
    <li>{aptitud}</li>
  ))}
</ul>
```

### Ventajas:
- ✅ Código limpio y fácil de leer
- ✅ Puedes exportar múltiples objetos
- ✅ Acceso directo a las propiedades
- ✅ Puedes incluir funciones y lógica

### Cuándo usarlo:
- Para componentes simples
- Cuando necesitas múltiples exports
- Cuando quieres flexibilidad total de JavaScript

---

## 📦 Método 2: Archivo JSON (.json)

**Componente:** `src/components/Conocimiento.astro`
**Archivo de datos:** `src/data/data-conocimientos.json`

### Concepto:
Importar datos desde un archivo JSON puro. Los archivos JSON son ideales para datos estructurados, fáciles de validar y editar. Astro los convierte automáticamente en objetos JavaScript.

### Código del archivo de datos:
```json
{
  "titulo": "CONOCIMIENTOS GENERALES",
  "emoji": "🛠️",
  "secciones": [
    {
      "nombre": "Tecnologías Web",
      "items": [
        "HTML5",
        "CSS3",
        "JavaScript (nociones generales)"
      ]
    },
    {
      "nombre": "Conceptos",
      "items": [
        "Estructura básica de interfaces web",
        "Maquetación responsive básica"
      ]
    }
  ]
}
```

### Código del componente:
```astro
---
import conocimientos from '../data/data-conocimientos.json';

// Destructuring del objeto importado
const { titulo, emoji, secciones } = conocimientos;

// Hacer cálculos con los datos
const totalItems = secciones.reduce(
  (acc, seccion) => acc + seccion.items.length,
  0
);
---

<h1>{emoji} {titulo}</h1>
<p>Total: {totalItems}</p>

{secciones.map((seccion) => (
  <div>
    <h2>{seccion.nombre}</h2>
    <ul>
      {seccion.items.map((item) => <li>{item}</li>)}
    </ul>
  </div>
))}
```

### Ventajas:
- ✅ Formato universal y estándar
- ✅ Fácil de validar con esquemas JSON
- ✅ Ideal para datos que vienen de APIs
- ✅ Editores de texto lo resaltan automáticamente

### Cuándo usarlo:
- Para datos puramente estructurados
- Cuando trabajas con APIs REST
- Cuando necesitas validación de esquema
- Para datos que otros sistemas también usan

---

## 📦 Método 3: Archivo Markdown (.md) con Frontmatter

**Componente:** `src/components/Experiencia.astro`
**Archivo de datos:** `src/data/data-experiencia.md`

### Concepto:
Los archivos Markdown permiten combinar datos (en el frontmatter YAML) con contenido en Markdown. Astro procesa automáticamente el frontmatter y lo convierte en objetos JavaScript accesibles.

### Código del archivo de datos:
```markdown
---
titulo: "EXPERIENCIA PROFESIONAL"
emoji: "💼"
trabajos:
  - cargo: "Freelance - Desarrollo Web"
    modalidad: "Remoto"
    periodo: "Actual"
    responsabilidades:
      - "Desarrollo de sitios web con HTML, CSS y JavaScript básico"
      - "Comprensión de la estructura de proyectos web"

interesProfesional:
  titulo: "INTERÉS PROFESIONAL"
  emoji: "🎯"
  intereses:
    - "Aprender frameworks modernos como Vue.js o React"
    - "Desarrollar habilidades en backend con Node.js"

idiomas:
  titulo: "IDIOMAS"
  emoji: "🌍"
  lista:
    - idioma: "Español"
      nivel: "Nativo"
---

# Experiencia Profesional

Este archivo contiene toda la información relacionada con la experiencia laboral.
```

### Código del componente:
```astro
---
const experienciaData = await import('../data/data-experiencia.md');

// Acceder al frontmatter del archivo Markdown
const { trabajos, interesProfesional, idiomas, titulo, emoji } = experienciaData.frontmatter;

// Crear objeto experiencia
const experiencia = {
  titulo: titulo,
  emoji: emoji,
  trabajos: trabajos
};

// Crear datos derivados
const totalResponsabilidades = experiencia.trabajos.reduce(
  (acc, trabajo) => acc + trabajo.responsabilidades.length,
  0
);
---

<h1>{experiencia.titulo}</h1>
<p>Total: {totalResponsabilidades}</p>

{experiencia.trabajos.map((trabajo) => (
  <div>
    <h2>{trabajo.cargo}</h2>
    <ul>
      {trabajo.responsabilidades.map((resp) => <li>{resp}</li>)}
    </ul>
  </div>
))}
```

### Ventajas:
- ✅ Combina datos estructurados con contenido
- ✅ Sintaxis YAML más legible que JSON
- ✅ Puedes incluir documentación en Markdown
- ✅ Ideal para contenido con metadatos

### Cuándo usarlo:
- Para contenido que necesita documentación
- Cuando quieres datos + explicaciones
- Para sistemas de blog o CMS
- Cuando prefieres YAML sobre JSON

---

## 📦 Método 4: Archivo TypeScript (.ts) con Tipos

**Componente:** `src/components/Contacto.astro`
**Archivo de datos:** `src/data/data-contacto.ts`

### Concepto:
Usar TypeScript para definir interfaces y tipos que validen la estructura de tus datos. Esto proporciona autocompletado, detección de errores en tiempo de desarrollo y documentación automática.

### Código del archivo de datos:
```typescript
// src/data/data-contacto.ts

// Definir interfaces para tipar los datos
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

// Exportar los datos tipados
export const contacto: Contacto = {
  titulo: "CONTACTO",
  emoji: "📧",
  informacion: {
    nombre: "Felipe Osorio",
    email: "contacto@ejemplo.com",
    telefono: "+1 234 567 890",
    ubicacion: "Ciudad, País",
    linkedin: "https://linkedin.com/in/tu-perfil",
    github: "https://github.com/tu-usuario",
    disponibilidad: "Disponible para oportunidades remotas"
  }
};

export default contacto;
```

### Código del componente:
```astro
---
import { contacto } from '../data/data-contacto';

const { informacion } = contacto;

// Transformar datos en un array estructurado
const camposContacto = [
  {
    icono: 'ri-user-line',
    titulo: 'Nombre',
    valor: informacion.nombre,
    tipo: 'texto'
  },
  {
    icono: 'ri-mail-line',
    titulo: 'Email',
    valor: informacion.email,
    tipo: 'email',
    enlace: `mailto:${informacion.email}`
  },
  // ... más campos
];

// Filtrar solo campos con valor
const camposConValor = camposContacto.filter(campo => campo.valor);
---

{camposConValor.map((campo) => (
  <div>
    <i class={campo.icono}></i>
    <h3>{campo.titulo}</h3>

    {campo.tipo === 'texto' ? (
      <p>{campo.valor}</p>
    ) : (
      <a href={campo.enlace}>{campo.valor}</a>
    )}
  </div>
))}
```

### Ventajas:
- ✅ Autocompletado inteligente en el IDE
- ✅ Detección de errores antes de ejecutar
- ✅ Documentación automática de la estructura
- ✅ Refactorización segura

### Cuándo usarlo:
- Para proyectos grandes con muchos datos
- Cuando trabajas en equipo
- Cuando quieres prevenir errores de tipo
- Para mejor experiencia de desarrollo

---

## 🎯 Comparación de Métodos

| Formato | Archivo | Ventaja Principal | Mejor Uso |
|---------|---------|-------------------|-----------|
| **JavaScript (.js)** | data-perfil.js | Flexibilidad total | Datos con lógica |
| **JSON (.json)** | data-conocimientos.json | Universal y estándar | Datos de APIs |
| **Markdown (.md)** | data-experiencia.md | Datos + contenido | Blog/CMS |
| **TypeScript (.ts)** | data-contacto.ts | Seguridad de tipos | Proyectos grandes |

---

## 📚 Métodos de Arrays en JavaScript

### .map()
Transforma cada elemento de un array:
```javascript
const numeros = [1, 2, 3];
const dobles = numeros.map(num => num * 2);
// Resultado: [2, 4, 6]
```

### .filter()
Filtra elementos que cumplen una condición:
```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
// Resultado: [2, 4]
```

### .reduce()
Reduce un array a un solo valor:
```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, num) => acc + num, 0);
// Resultado: 10
```

### .forEach()
Ejecuta una función para cada elemento (no devuelve nada):
```javascript
const numeros = [1, 2, 3];
numeros.forEach(num => console.log(num));
// Imprime: 1, 2, 3
```

---

## 🔄 Operadores Útiles

### Destructuring de objetos:
```javascript
// Extraer propiedades de un objeto
const persona = { nombre: 'Ana', edad: 25 };
const { nombre, edad } = persona;
// nombre = 'Ana', edad = 25
```

### Destructuring de arrays:
```javascript
// Extraer elementos de un array
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores;
// primero = 'rojo', segundo = 'verde'
```

### Spread operator (...):
```javascript
// Copiar o combinar arrays/objetos
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2];
// [1, 2, 3, 4]
```

### Operador ternario:
```javascript
// Condición compacta
const edad = 18;
const mensaje = edad >= 18 ? 'Mayor' : 'Menor';
```

### Optional chaining (?.):
```javascript
// Acceso seguro a propiedades anidadas
const usuario = { perfil: { nombre: 'Ana' } };
const nombre = usuario?.perfil?.nombre; // 'Ana'
const ciudad = usuario?.direccion?.ciudad; // undefined (no error)
```

---

## 💡 Mejores Prácticas

### 1. Elige el método según la complejidad
```astro
<!-- Simple: usa import directo -->
---
import { perfil } from '../data/cv-data.js';
---
<p>{perfil.nombre}</p>

<!-- Complejo: usa transformación -->
---
import { contacto } from '../data/cv-data.js';
const campos = transformarDatos(contacto);
---
{campos.map(campo => <div>...</div>)}
```

### 2. Separa la lógica de la presentación
```astro
---
// ✅ BIEN: Lógica en el frontmatter
import { datos } from './data.js';
const procesados = datos.filter(d => d.activo);
---

{procesados.map(item => <div>{item.nombre}</div>)}

<!-- ❌ MAL: Lógica en el HTML -->
{datos.filter(d => d.activo).map(item => <div>{item.nombre}</div>)}
```

### 3. Usa nombres descriptivos
```javascript
// ✅ BIEN
const trabajosActivos = trabajos.filter(t => t.estado === 'activo');
const totalExperiencia = trabajos.reduce((acc, t) => acc + t.años, 0);

// ❌ MAL
const t = trabajos.filter(x => x.estado === 'activo');
const total = trabajos.reduce((a, b) => a + b.años, 0);
```

### 4. Comenta transformaciones complejas
```javascript
// Calcular el total de años de experiencia sumando todos los trabajos
const añosTotales = experiencias.reduce(
  (acumulador, trabajo) => acumulador + trabajo.duracionEnAños,
  0 // Empezar desde 0
);
```

---

## 🎓 Resumen

### Elige el formato correcto:

1. **JavaScript (.js)** → Máxima flexibilidad, puedes exportar funciones y múltiples objetos
2. **JSON (.json)** → Formato estándar, ideal para datos que vienen de APIs o sistemas externos
3. **Markdown (.md)** → Combina datos (frontmatter YAML) con contenido en Markdown, perfecto para blogs
4. **TypeScript (.ts)** → Agrega tipos y validación, mejor para proyectos grandes y trabajo en equipo

### Ventajas de cada formato:

| Formato | Pro | Contra |
|---------|-----|--------|
| .js | Flexibilidad total | Sin validación de tipos |
| .json | Universal, fácil validar | Solo datos, sin lógica |
| .md | Datos + documentación | Sintaxis YAML puede ser confusa |
| .ts | Tipos y autocompletado | Requiere configurar TypeScript |

**Regla general:**
- Empieza con **.js** para simplicidad
- Usa **.json** si los datos vienen de una API
- Usa **.md** si necesitas explicar el contenido
- Usa **.ts** cuando el proyecto crece y necesitas seguridad

---

## 🔍 Cómo Importar Cada Formato

```astro
---
// JavaScript (.js)
import { objeto } from './archivo.js';

// JSON (.json)
import datos from './archivo.json';

// Markdown (.md)
const mdData = await import('./archivo.md');
const { frontmatter } = mdData;

// TypeScript (.ts)
import { objeto } from './archivo'; // Sin extensión
---
```

---

¡Ahora tienes ejemplos de **todos los formatos de datos** posibles en Astro! 🚀
