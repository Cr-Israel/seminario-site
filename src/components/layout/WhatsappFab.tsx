import { whatsappHref } from "@/lib/whatsapp";
import WhatsappIcon from "@/components/ui/WhatsappIcon";

/**
 * Botão flutuante "fale com a nossa equipe" via WhatsApp, presente no site todo.
 * Contato: Eliane Estevam — (21) 96402-7542.
 */
export default function WhatsappFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a nossa equipe no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-950/30 transition-all hover:scale-105 hover:bg-brand-800"
    >
      <WhatsappIcon size={28} />
    </a>
  );
}
