/**
 * Datos del CV de Felipe Belmar
 * Este archivo centraliza toda la información del CV para poder reutilizarla
 * en diferentes componentes de Astro
 */

export const perfilProfesional = {
  titulo: "PERFIL PROFESIONAL",
  emoji: "🧠",
  descripcion: `Perfil en formación dentro del desarrollo frontend, con conocimientos generales de tecnologías web y un interés claro por aprender frameworks modernos como Vue.js. Me caracterizo por trabajar de forma ordenada, avanzar paso a paso apoyándome en guías y ejemplos, y mantener una actitud constante de aprendizaje. Busco integrarme a un equipo remoto donde la capacitación, las buenas prácticas y la mejora continua sean parte del proceso.`
};

export const conocimientos = {
  titulo: "CONOCIMIENTOS GENERALES",
  emoji: "🛠️",
  secciones: [
    {
      nombre: "Tecnologías Web",
      items: ["HTML5", "CSS3", "JavaScript (nociones generales)"]
    },
    {
      nombre: "Conceptos",
      items: [
        "Estructura básica de interfaces web",
        "Separación entre contenido, estilos y comportamiento",
        "Maquetación responsive básica",
        "Comprensión general del flujo de una aplicación web"
      ]
    },
    {
      nombre: "Herramientas",
      items: [
        "Git (uso inicial)",
        "Entornos de desarrollo locales"
      ]
    }
  ]
};

export const aptitudes = {
  titulo: "APTITUDES",
  emoji: "🎯",
  lista: [
    "Cuidado por la claridad y el orden en el trabajo",
    "Hábito de revisar y ajustar el trabajo antes de entregar",
    "Hábito de apoyarse en guías y ejemplos para avanzar paso a paso",
    "Disposición a trabajar siguiendo convenciones y procesos definidos",
    "Buena comunicación en entornos remotos",
    "Interés genuino por aprender y mejorar progresivamente"
  ]
};

export const experiencia = {
  titulo: "EXPERIENCIA (FORMATO NEUTRO)",
  emoji: "💼",
  trabajos: [
    {
      cargo: "Colaboración en Proyectos Web",
      modalidad: "Remoto",
      periodo: "", // Puedes agregar fechas aquí si las tienes
      responsabilidades: [
        "Apoyo en tareas relacionadas con estructura y estilos de interfaces web.",
        "Implementación de cambios siguiendo indicaciones técnicas claras.",
        "Corrección de errores simples y ajustes visuales.",
        "Trabajo colaborativo con foco en aprendizaje, orden y mejora continua."
      ]
    }
  ]
};

export const interesProfesional = {
  titulo: "INTERÉS PROFESIONAL",
  emoji: "🌱",
  intereses: [
    "Aprender Vue.js desde una base correcta",
    "Comprender buenas prácticas de desarrollo frontend",
    "Trabajar con estándares de calidad y equipos estructurados",
    "Crecer progresivamente a través de capacitación y acompañamiento técnico"
  ]
};

export const idiomas = {
  titulo: "IDIOMAS",
  emoji: "🌍",
  lista: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Lectura básica de documentación técnica" }
  ]
};

export const cierre = {
  titulo: "CIERRE",
  emoji: "🎯",
  texto: "Persona comprometida con su proceso de formación, con base general en desarrollo web y motivación por crecer dentro de un entorno profesional que fomente el aprendizaje y el trabajo en equipo."
};

export const contacto = {
  titulo: "CONTACTO",
  emoji: "📧",
  informacion: {
    nombre: "Felipe Belmar",
    email: "tu-email@example.com", // Cambia esto por tu email real
    telefono: "+56 9 1234 5678", // Cambia esto por tu teléfono real
    ubicacion: "Chile",
    linkedin: "https://linkedin.com/in/tu-perfil", // Cambia esto
    github: "https://github.com/tu-usuario", // Cambia esto
    disponibilidad: "Trabajo remoto"
  }
};

// Exportar todo como un objeto completo (opcional, para facilitar importación)
export const cvData = {
  perfilProfesional,
  conocimientos,
  aptitudes,
  experiencia,
  interesProfesional,
  idiomas,
  cierre,
  contacto
};
