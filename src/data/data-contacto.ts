/**
 * Archivo TypeScript con tipos definidos para datos de contacto
 * Demuestra el uso de interfaces y tipado fuerte
 */

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
  emoji: "ðŸ“§",
  informacion: {
    nombre: "Felipe Belmar",
    email: "felipe.contactame@gmail.com",
    telefono: "+56 9 650 69 659",
    ubicacion: "Temuco, Chile",
    linkedin: "https://www.linkedin.com/in/felipe-belmar/",
    github: "https://github.com/dimefipe",
    disponibilidad: "Disponible para oportunidades remotas o hÃ­bridas"
  }
};

// Exportar tambiÃ©n como default
export default contacto;



