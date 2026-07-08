import { UserRound } from "lucide-react";
import { facultyPlaceholder } from "@/data/faculty";

/**
 * Corpo docente do Bacharelado.
 * TODO: substituir os dados de data/faculty.ts por professores reais (nome,
 * titulação e foto). Enquanto isso, os cards usam um avatar genérico — mesmo
 * padrão de placeholder dos cursos CFL/CFM/CFC.
 */
export default function Faculty() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Corpo docente
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Professores que unem rigor acadêmico e prática pastoral
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Mestres e doutores, muitos deles pastores em atuação, comprometidos
            com a formação integral de cada seminarista.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facultyPlaceholder.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-sm border border-brand-900/10 bg-white p-7 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <UserRound size={34} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-base font-bold text-brand-950">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-700">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {member.focus}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-stone-400">
          {/* TODO: remover este aviso ao inserir os professores reais. */}
          Corpo docente ilustrativo — nomes e áreas serão atualizados em breve.
        </p>
      </div>
    </section>
  );
}
