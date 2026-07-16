import CourseCard from "@/components/ui/CourseCard";
import SeloIPB from "./SeloIPB";
import { cursos } from "@/data/cursos";

const bacharelado = cursos.find((curso) => curso.destaque);
const cursosLivres = cursos.filter((curso) => curso.nivel === "curso-livre");
const posGraduacoes = cursos.filter((curso) => curso.nivel === "pos-graduacao");

/** Rótulo sutil que separa os níveis dentro da MESMA grade. */
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="col-span-full mt-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-stone-500 first:mt-0">
      {children}
      <span aria-hidden className="h-px flex-1 bg-brand-900/10" />
    </p>
  );
}

/**
 * Comparador institucional de cursos — TODOS os programas da casa na mesma
 * seção, com o mesmo card, agrupados sutilmente por nível (Bacharelado em
 * destaque, depois cursos livres da EFAL, depois Pós-graduação). Modalidade
 * é badge, não bloco separado. Logo abaixo, a faixa de legitimação SeloIPB.
 */
export default function CoursesGrid() {
  return (
    <section id="cursos" className="scroll-mt-24 bg-brand-50/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Cursos e formação
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Um caminho de formação para cada etapa do chamado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Do Bacharelado presencial aos cursos livres e à pós-graduação
            online — a mesma casa, o mesmo compromisso confessional, em
            diferentes modalidades.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bacharelado && (
            <>
              <GroupLabel>Graduação</GroupLabel>
              <CourseCard curso={bacharelado} featured />
            </>
          )}

          <GroupLabel>Cursos livres · EFAL</GroupLabel>
          {cursosLivres.map((curso) => (
            <CourseCard key={curso.slug} curso={curso} />
          ))}

          <GroupLabel>Pós-graduação</GroupLabel>
          {posGraduacoes.map((curso) => (
            <CourseCard key={curso.slug} curso={curso} />
          ))}
        </div>

        <SeloIPB className="mt-14" />
      </div>
    </section>
  );
}
