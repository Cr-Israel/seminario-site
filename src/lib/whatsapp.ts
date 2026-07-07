/**
 * Contato da secretaria via WhatsApp — Eliane Estevam.
 * 55 (Brasil) + 21 (DDD) + número. Usado no botão flutuante e nos
 * botões "Falar com a secretaria" espalhados pelo site.
 */
export const WHATSAPP_NUMBER = "5521964027542";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de mais informações sobre os cursos do Seminário Simonton.";

/** Monta o link wa.me com uma mensagem pré-preenchida. */
export function whatsappHref(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
