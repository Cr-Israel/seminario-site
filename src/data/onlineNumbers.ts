import { efalCourses } from "./efal";
import { posCourses } from "./pos";
import { posProfessors } from "./posProfessors";
import { efalProfessors } from "./professors";

export type MottoStat = { value: string; label: string };

/** Aulas ao vivo nas grades da EFAL, sem contar disciplina repetida entre cursos. */
function efalLiveClassCount() {
  const seen = new Set<string>();
  let total = 0;
  for (const course of efalCourses) {
    for (const discipline of course.curriculum) {
      const key = `${discipline.name}|${discipline.docente}`;
      if (seen.has(key)) continue;
      seen.add(key);
      total += discipline.ementa.filter((item) => /^Aula \d/.test(item)).length;
    }
  }
  return total;
}

/** Arredonda para baixo em múltiplos de 5, para nunca prometer mais do que há. */
const floor5 = (n: number) => Math.floor(n / 5) * 5;

/** Números da EFAL, derivados das grades reais (efal.ts). */
export const efalMottoStats: MottoStat[] = [
  {
    value: `+${floor5(efalLiveClassCount())}`,
    label: "aulas ao vivo nas grades da EFAL",
  },
  {
    value: `+${floor5(efalProfessors.length)}`,
    label: "professores e preletores nos cursos da EFAL",
  },
  {
    value: `${efalCourses.length}`,
    label: "cursos livres, do introdutório à capelania",
  },
];

/** Números da Pós-graduação, derivados de pos.ts e posProfessors.ts. */
export const posMottoStats: MottoStat[] = [
  {
    value: `${posCourses.length}`,
    label: "programas de pós-graduação",
  },
  {
    value: `${Math.min(...posCourses.map((c) => c.curriculum.length))}`,
    label: "disciplinas em cada grade, com projeto de pesquisa",
  },
  {
    value: `${posProfessors.length}`,
    label: "professores mestres e doutores no corpo docente",
  },
];
