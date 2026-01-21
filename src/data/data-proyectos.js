/**
 * Datos de proyectos y copy de la sección principal.
 * Este archivo usa JavaScript para mostrar cómo exportar objetos y arrays.
 */

import reservaImage from '../assets/reserva.webp';
import ticsurImage from '../assets/ticsur.webp';
import mieunacomImage from '../assets/mieunacom.webp';

const reservaImageUrl =
  typeof reservaImage === 'string' ? reservaImage : reservaImage.src;
const ticsurImageUrl =
  typeof ticsurImage === 'string' ? ticsurImage : ticsurImage.src;
const mieunacomImageUrl =
  typeof mieunacomImage === 'string' ? mieunacomImage : mieunacomImage.src;

export const proyectosSection = {
  kicker: "Conocimientos aplicados",
  title: "Proyectos que respaldan mi experiencia",
  intro:
    "Cada proyecto refleja mi trabajo en maquetado UI con HTML, metodología BEM, CSS y JavaScript. Aquí priorizo claridad visual, estructura y entrega de valor desde la interfaz.",
  demoBadge: "Demo en vivo",
  ctaLabel: "Ver demo",
  skillsLabel: "Conocimientos aplicados",
};

export const proyectos = [
  {
    title: "Reserva Médica",
    description:
      "Maquetado UI para un sistema de reservas médicas que estaba desarrollando otro equipo en MDTech. Se implementó como un plugin dentro del producto principal, asegurando consistencia visual y claridad en el flujo de formularios.",
    image: reservaImageUrl,
    link: "https://reserva-medica.netlify.app/",
    tech: [
      { label: "HTML", icon: "ri-html5-line" },
      { label: "BEM", icon: "ri-brackets-line" },
      { label: "CSS", icon: "ri-css3-line" },
      { label: "JavaScript", icon: "ri-javascript-line" },
    ],
    skills: [
      "Maquetado modular con metodología BEM.",
      "Estructura de formularios para reservas y datos clínicos.",
      "Estilos responsivos para paneles y pasos guiados.",
      "Integración visual de un plugin en un producto existente.",
    ],
  },
  {
    title: "Ticsur",
    description:
      "Sitio de la primera edición del evento TI tipo hackathon de Santo Tomás, auspiciado por Ticsur. La propuesta comunica agenda, speakers y convocatoria con foco en inscripción y difusión.",
    image: ticsurImageUrl,
    link: "https://ticsur.netlify.app/",
    tech: [
      { label: "HTML", icon: "ri-html5-line" },
      { label: "BEM", icon: "ri-brackets-line" },
      { label: "CSS", icon: "ri-css3-line" },
      { label: "JavaScript", icon: "ri-javascript-line" },
    ],
    skills: [
      "Landing enfocada en comunicación de eventos TI.",
      "Jerarquía visual para agenda, speakers y sponsors.",
      "Componentes reutilizables para secciones informativas.",
      "Maquetado responsive para difusión móvil.",
    ],
  },
  {
    title: "Mieunacom",
    description:
      "SaaS de preparación EUNACOM donde reformulé la UI y realicé la maquetación completa del landing de ventas. Se optimizó la jerarquía visual, los CTA y la narrativa de valor.",
    image: mieunacomImageUrl,
    link: "https://mieunacom.netlify.app/",
    tech: [
      { label: "HTML", icon: "ri-html5-line" },
      { label: "BEM", icon: "ri-brackets-line" },
      { label: "CSS", icon: "ri-css3-line" },
      { label: "JavaScript", icon: "ri-javascript-line" },
    ],
    skills: [
      "Reformulación de UI y estructura de secciones.",
      "Optimización de CTA y mensajes de conversión.",
      "Maquetado web completo del landing de ventas.",
      "Consistencia visual entre hero, planes y testimonios.",
    ],
  },
];
