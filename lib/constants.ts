// WhatsApp configuration
export const WHATSAPP_PHONE = "5215512345678"; // Número de WhatsApp sin el + inicial
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

// WhatsApp messages for different CTAs
export const WHATSAPP_MESSAGES = {
  ORDER: "Hola! Quiero hacer un pedido.",
  RESERVATION: "Hola! Quiero reservar una mesa.",
  MENU_ITEM: (itemName: string) =>
    `Hola! Me interesa el producto: ${itemName}. ¿Tienes disponibilidad?`,
  REVIEW: "Hola! Quiero dejar una reseña de mi experiencia.",
  GENERAL: "Hola! Me gustaría saber más sobre Grill & Chill.",
};

// Restaurant info
export const RESTAURANT_INFO = {
  name: "GRILL & CHILL",
  address: "Av. Principal 123, Zona Gourmet, Ciudad de México, CDMX",
  hours: {
    weekday: "13:00 - 23:00", // Martes a Jueves
    friday: "13:00 - 01:00", // Viernes y Sábado
    sunday: "13:00 - 22:00",
  },
  email: "info@grillchill.mx",
  year: 2024,
};

// Social links
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/grillchill",
  twitter: "https://twitter.com/grillchill",
  facebook: "https://facebook.com/grillchill",
};
