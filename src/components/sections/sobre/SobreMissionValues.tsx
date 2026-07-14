import { Check, Eye, Target } from "lucide-react";

/**
 * Missão, visão e valores do Seminário — conteúdo novo, sem equivalente no
 * site antigo.
 */
const values = [
  "Piedade",
  "Compromisso",
  "Humildade",
  "Espírito de Serviço",
  "Excelência profissional",
  "Pensamento Crítico",
  "Ética pessoal e institucional",
  "Comunicação franca e assertiva",
];

export default function SobreMissionValues() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
        Nossa identidade
      </span>
      <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
        Missão, visão e valores
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-sm border border-brand-900/10 bg-white p-8 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-800">
            <Target size={26} strokeWidth={1.75} />
          </div>
          <h3 className="mt-6 font-serif text-2xl font-bold text-brand-950">
            Missão
          </h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            Formar pastores e outros líderes tementes a Deus, que conhecem e
            amam Sua Palavra e que são comprometidos com a expansão do seu
            Reino.
          </p>
        </div>

        <div className="rounded-sm border border-brand-900/10 bg-white p-8 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-800">
            <Eye size={26} strokeWidth={1.75} />
          </div>
          <h3 className="mt-6 font-serif text-2xl font-bold text-brand-950">
            Visão
          </h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">
            Ser referência na formação de líderes cristãos através do ensino de
            Teologia Reformada, pesquisa e reflexão acadêmica.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-sm border border-brand-900/10 bg-white p-8 sm:p-10">
        <h3 className="font-serif text-2xl font-bold text-brand-950">
          Valores
        </h3>
        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li key={value} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Check size={15} strokeWidth={2.5} />
              </span>
              <span className="text-sm font-medium text-brand-900">
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
