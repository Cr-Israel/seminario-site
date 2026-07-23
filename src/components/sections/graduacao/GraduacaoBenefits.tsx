import { beneficios } from "@/data/graduacao";

/**
 * "Você terá acesso a" — grid dos seis benefícios da vida acadêmica no STPS
 * (biblioteca, semanas teológicas, certificado, estágio, salas e monografia).
 */
export default function GraduacaoBenefits() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Vida acadêmica
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Você terá acesso a
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-sm border border-brand-900/10 bg-white p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <Icon size={22} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-brand-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
