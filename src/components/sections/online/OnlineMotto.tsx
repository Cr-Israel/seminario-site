import { ArrowRight } from "lucide-react";
import { efalCourses } from "@/data/efal";
import { posCourses } from "@/data/pos";
import { whatsappHref } from "@/lib/whatsapp";

/** Remove títulos honoríficos para deduplicar docentes citados com e sem eles. */
function stripTitle(name: string) {
  return name.replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "").trim();
}

const professorNames = new Set<string>();
for (const course of efalCourses) {
  for (const discipline of course.curriculum) {
    if (!/^Professor( em aberto)?$/.test(discipline.docente)) {
      professorNames.add(stripTitle(discipline.docente));
    }
  }
  for (const professor of course.professors ?? []) {
    professorNames.add(stripTitle(professor.name));
  }
}
for (const course of posCourses) {
  for (const discipline of course.curriculum) {
    if (discipline.professor) professorNames.add(stripTitle(discipline.professor));
  }
}

const seenDisciplines = new Set<string>();
let liveClassCount = 0;
for (const course of efalCourses) {
  for (const discipline of course.curriculum) {
    const key = `${discipline.name}|${discipline.docente}`;
    if (seenDisciplines.has(key)) continue;
    seenDisciplines.add(key);
    liveClassCount += discipline.ementa.filter((item) =>
      /^Aula \d/.test(item),
    ).length;
  }
}

/** Arredonda para baixo em múltiplos de 5, para nunca prometer mais do que há. */
const floor5 = (n: number) => Math.floor(n / 5) * 5;

const stats = [
  {
    value: `+${floor5(liveClassCount)}`,
    label: "aulas ao vivo nas grades da EFAL",
  },
  {
    value: `+${floor5(professorNames.size)}`,
    label: "professores e preletores nos cursos online",
  },
  {
    value: `${efalCourses.length + posCourses.length}`,
    label: "cursos e programas entre EFAL e Pós-graduação",
  },
];

/**
 * Faixa de impacto entre a lista de cursos e o FAQ — motto institucional em
 * palavras grandes + números derivados dos dados reais das grades (efal.ts e
 * pos.ts), no espírito do banner "Formar | Servir | Transformar" da Academia
 * Martin Bucer.
 */
export default function OnlineMotto() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 sm:py-24">
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
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-700/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <p className="font-serif text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl">
          Ensinar.
          <br />
          <span className="text-brand-200">Formar.</span>
          <br />
          Servir.
        </p>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
            Do primeiro contato com a teologia reformada ao aprofundamento na
            pós-graduação, cada curso existe para capacitar quem serve à igreja
            local — com professor ao vivo, do início ao fim.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-brand-400/60 pl-4"
              >
                <span className="block font-serif text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-brand-100/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href={whatsappHref(
              "Olá! Quero me inscrever em um dos cursos online do Seminário Simonton.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Inscreva-se agora <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
