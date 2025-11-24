import { WHATSAPP_URL, WHATSAPP_MESSAGES } from "./constants";

// Generate WhatsApp link with message
export const generateWhatsAppLink = (
  message: string | ((msg: string) => string)
): string => {
  const encodedMessage = encodeURIComponent(
    typeof message === "function" ? message("") : message
  );
  return `${WHATSAPP_URL}?text=${encodedMessage}`;
};

// Format price to currency
export const formatPrice = (price: string): string => {
  return price;
};

// Get WhatsApp message for specific action
export const getWhatsAppMessage = (
  action: keyof typeof WHATSAPP_MESSAGES,
  param?: string
): string => {
  const messageTemplate = WHATSAPP_MESSAGES[action];
  if (action === "MENU_ITEM" && param) {
    return (messageTemplate as Function)(param);
  }
  return messageTemplate as string;
};

// Combine class names
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};
