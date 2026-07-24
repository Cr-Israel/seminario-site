import { docentes } from "@/data/docentes";
import FacultyGrid from "./FacultyGrid";

/**
 * Corpo docente do Bacharelado — dados reais em src/data/docentes.ts. O grid
 * clicável e o modal de perfil ficam no FacultyGrid (client); aqui fica só o
 * cabeçalho estático, renderizado no servidor.
 */
export default function Faculty() {
  return (
    <section id="corpo-docente" className="bg-brand-50/60 py-24">
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
            com a formação integral de cada seminarista. Clique em um professor
            para ver o perfil completo.
          </p>
        </div>

        <div className="mt-14">
          <FacultyGrid docentes={docentes} />
        </div>
      </div>
    </section>
  );
}
