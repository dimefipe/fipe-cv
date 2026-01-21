/**
 * Archivo JavaScript con datos del perfil y aptitudes.
 * Útil para mostrar cómo importar y reutilizar data en Astro.
 */

import perfilImagen from '../assets/fipe.jpg';

export const perfilProfesional = {
  titulo: "Perfil profesional",
  nombre: "Felipe Belmar",
  etiquetas: ["Desarrollador en formación"],
  descripcion:
    "Desarrollador web en formación con conocimientos fundamentales en HTML, CSS y JavaScript. Apasionado por aprender y aplicar nuevas tecnologías. Busco mi primera oportunidad profesional para crecer en el desarrollo web mientras contribuyo con dedicación y ganas de aprender.",
  imagen: perfilImagen,
  imagenAlt: "Felipe Belmar",
  badge: "UI / Web",
  cta: {
    label: "Hablemos por WhatsApp",
    href: "https://wa.me/56965069659",
    icon: "ri-whatsapp-line",
  },
  social: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@fipe.digital",
      icon: "ri-tiktok-fill",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fipe.digital",
      icon: "ri-instagram-fill",
    },
  ],
};

export const aptitudes = {
  titulo: "Habilidades blandas",
  icon: "ri-brain-2-line",
  lista: [
    {
      nombre: "Aprendizaje autónomo",
      porcentaje: 80,
      descripcion:
        "Combino aprendizaje autodidacta con formación tradicional. Mis principales fuentes son cursos de Udemy, Domestika, IA, YouTube y plataformas similares, complementados con educación formal.",
    },
    {
      nombre: "Comunicación efectiva",
      porcentaje: 90,
      descripcion:
        "5 años de experiencia impartiendo clases presenciales de maquetado web en la carrera de Diseño Gráfico (Santo Tomás, Temuco). Busco múltiples formas de explicar conceptos para adaptarme a diferentes estilos de aprendizaje.",
    },
    {
      nombre: "Responsabilidad",
      porcentaje: 100,
      descripcion:
        "Experiencia gestionando una amplia cartera de proyectos WordPress no-code para múltiples clientes. Cuando asumo un compromiso, me lo tomo con total seriedad y lo llevo a término.",
    },
    {
      nombre: "Mentalidad de mejora continua",
      porcentaje: 85,
      descripcion:
        "Busco constantemente optimizar la escalabilidad mediante sistemas de diseño y componentes reutilizables. Me interesa profundizar en frameworks como Vue. Equilibro el deseo de mejorar con la practicidad para evitar el perfeccionismo paralizante.",
    },
  ],
};
