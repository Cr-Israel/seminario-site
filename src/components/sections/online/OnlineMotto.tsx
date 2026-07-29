import { ArrowRight } from "lucide-react";
import type { MottoStat } from "@/data/onlineNumbers";
import { whatsappHref } from "@/lib/whatsapp";

type Props = {
  stats: MottoStat[];
  description: string;
  /** Mensagem que abre no WhatsApp da secretaria. */
  whatsappMessage: string;
};

/**
 * Faixa de impacto entre a lista de cursos e o FAQ — motto institucional em
 * palavras grandes + números derivados dos dados reais das grades
 * (src/data/onlineNumbers.ts), no espírito do banner "Formar | Servir |
 * Transformar" da Academia Martin Bucer.
 */
export default function OnlineMotto({
  stats,
  description,
  whatsappMessage,
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-brand-900/10 bg-white py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #004117 0, #004117 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <p className="font-serif text-5xl font-extrabold leading-[1.08] text-brand-950 sm:text-6xl">
          Ensinar.
          <br />
          <span className="text-brand-700">Formar.</span>
          <br />
          Servir.
        </p>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-brand-400/60 pl-4"
              >
                <span className="block font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-stone-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-brand-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Quero me inscrever <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
