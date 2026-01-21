/**
 * Datos de contacto en TypeScript para mostrar tipado y autocompletado.
 */

export interface Contacto {
  titulo: string;
  kicker: string;
  descripcion: string;
  informacion: InformacionContacto;
  campos: CampoContacto[];
  disponibilidad: DisponibilidadContacto;
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

export interface CampoContacto {
  key: keyof InformacionContacto;
  titulo: string;
  icono: string;
  tipo: 'texto' | 'email' | 'tel' | 'enlace';
  label?: string;
}

export interface DisponibilidadContacto {
  titulo: string;
  ctaLabel: string;
  ctaIcon: string;
}

export const contacto: Contacto = {
  titulo: "Contacto",
  kicker: "Canales directos",
  descripcion:
    "Puedes contactarme por los canales disponibles o revisar mis perfiles. Respondo en el menor tiempo posible.",
  informacion: {
    nombre: "Felipe Belmar",
    email: "felipe.contactame@gmail.com",
    telefono: "+56 9 650 69 659",
    ubicacion: "Temuco, Chile",
    linkedin: "https://www.linkedin.com/in/felipe-belmar/",
    github: "https://github.com/dimefipe",
    disponibilidad: "Disponible para oportunidades remotas o híbridas",
  },
  campos: [
    {
      key: "nombre",
      titulo: "Nombre",
      icono: "ri-user-line",
      tipo: "texto",
    },
    {
      key: "email",
      titulo: "Email",
      icono: "ri-mail-line",
      tipo: "email",
    },
    {
      key: "telefono",
      titulo: "Teléfono",
      icono: "ri-phone-line",
      tipo: "tel",
    },
    {
      key: "ubicacion",
      titulo: "Ubicación",
      icono: "ri-map-pin-line",
      tipo: "texto",
    },
    {
      key: "linkedin",
      titulo: "LinkedIn",
      icono: "ri-linkedin-line",
      tipo: "enlace",
      label: "Ver perfil",
    },
    {
      key: "github",
      titulo: "GitHub",
      icono: "ri-github-line",
      tipo: "enlace",
      label: "Ver repositorios",
    },
  ],
  disponibilidad: {
    titulo: "Disponibilidad",
    ctaLabel: "Escríbeme",
    ctaIcon: "ri-send-plane-2-line",
  },
};

export default contacto;
