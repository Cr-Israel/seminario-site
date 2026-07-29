import { whatsappHref } from "@/lib/whatsapp";

type Props = {
  /** Etiqueta acima do título (ex.: "Pós-graduação"). */
  eyebrow: string;
  title: string;
  description: string;
  /** CTA principal — âncora para a seção que a página quer destacar. */
  ctaHref: string;
  ctaLabel: string;
  /** Mensagem que abre no WhatsApp da secretaria, quando personalizada. */
  whatsappMessage?: string;
};

/**
 * Hero escuro das páginas de trilha online — hoje o da Pós-graduação; a EFAL
 * abre com a sua capa oficial (EfalHero).
 */
export default function OnlineHero({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  whatsappMessage,
}: Props) {
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
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
          {eyebrow}
        </p>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          {description}
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={ctaHref}
            className="rounded-sm bg-brand-50 px-7 py-3.5 text-center text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            {ctaLabel}
          </a>
          <a
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Falar com a secretaria
          </a>
        </div>
      </div>
    </section>
  );
}
