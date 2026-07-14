import { BookOpen, ScrollText, Sparkles } from "lucide-react";

/**
 * Confissão de fé — fecho da página Sobre. O Seminário é confessional e,
 * como instituição da IPB, adota os Símbolos de Fé de Westminster.
 */
const documents = [
  {
    icon: BookOpen,
    title: "Confissão de Fé de Westminster",
    description:
      "A exposição sistemática da fé reformada, elaborada pela Assembleia de Westminster (1643–1649).",
  },
  {
    icon: ScrollText,
    title: "Catecismo Maior de Westminster",
    description:
      "O ensino da fé cristã em profundidade, em formato de perguntas e respostas.",
  },
  {
    icon: Sparkles,
    title: "Breve Catecismo de Westminster",
    description:
      "O resumo acessível da doutrina cristã, ideal para a instrução de novos crentes e famílias.",
  },
];

export default function SobreConfession() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
            Confissão de fé
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
            No que cremos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-100/80 sm:text-lg">
            O Seminário Simonton é uma instituição confessional: cremos que as
            Escrituras Sagradas são a nossa única e infalível regra de fé e
            prática. Como instituição da Igreja Presbiteriana do Brasil,
            adotamos os Símbolos de Fé de Westminster como fiéis expressões do
            ensino das Escrituras.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {documents.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
