import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * Botão flutuante "fala com a secretaria" via WhatsApp, presente no site todo.
 * Contato: Eliane Estevam — (21) 96402-7542.
 */
export default function WhatsappFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a secretaria no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-950/30 transition-all hover:scale-105 hover:bg-brand-800"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
