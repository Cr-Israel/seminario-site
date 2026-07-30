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
 * Faixa de fechamento entre os depoimentos e o FAQ — o motto institucional
 * num card de vidro, e ao lado os números derivados das grades reais
 * (src/data/onlineNumbers.ts) com a última chamada para inscrição.
 *
 * No verde escuro (bg-brand-950), o mesmo do formulário de interesse e dos
 * heros das páginas de curso — superfície que o dark mode preserva, então a
 * seção é a mesma nos dois temas.
 *
 * Os halos desfocados atrás do card não são enfeite: sem nada por trás, o
 * `backdrop-blur` não tem o que refratar e o vidro vira um retângulo cinza.
 */
export default function OnlineMotto({
  stats,
  description,
  whatsappMessage,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-4 h-96 w-96 rounded-full bg-brand-700/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <p className="rounded-xl border border-white/15 bg-white/10 p-10 font-serif text-5xl font-extrabold leading-[1.05] tracking-tight text-white backdrop-blur-md sm:p-12 sm:text-6xl">
          Ensinar.
          <br />
          <span className="text-brand-400">Formar.</span>
          <br />
          Servir.
        </p>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {description}
          </p>

          {/* Separados por espaço, não por linhas: o tamanho do número já os
              distingue sozinho. */}
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-4xl font-extrabold leading-none text-white">
                    {stat.value}
                  </span>
                  <span className="mt-2.5 block text-sm leading-snug text-brand-200">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-8 py-4 text-sm font-medium text-brand-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
          >
            Quero me inscrever <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
