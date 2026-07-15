import { efalCourses } from "./efal";
import { posCourses } from "./pos";

/**
 * Professor exibido na vitrine do corpo docente dos Cursos Online — derivado
 * automaticamente das grades reais (efal.ts e pos.ts), sem lista manual:
 * novo docente numa grade aparece sozinho na vitrine.
 */
export type OnlineProfessor = {
  /** Nome como está na grade (com título, ex.: "Rev. Diego Maia"). */
  name: string;
  /** Códigos dos cursos em que leciona, na ordem das grades (ex.: ["CIT", "CFO"]). */
  courses: string[];
  /** Foto em /public, quando já disponível — sem foto o card mostra as iniciais. */
  photo?: string;
  credential?: string;
};

/** Remove títulos para deduplicar ("Profª Vívian…" ≡ "Vívian…"). */
function stripTitle(name: string) {
  return name.replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "").trim();
}

/**
 * Fotos já existentes em /public, indexadas pelo nome sem título.
 * TODO: conforme as fotos dos demais professores chegarem, basta salvá-las em
 * /public/images e acrescentar a linha aqui — o card troca as iniciais pela foto.
 */
const photoByName: Record<string, string> = {
  "Vívian Vianna Breder": "/images/professoras/foto-prof-vivian.png",
  "Letícia Muniz Magalhães da Cunha": "/images/professoras/foto-prof-leticia.png",
  "Sérgio Kitagawa": "/images/rev-sergio-kitagawa.png",
  Adelino: "/images/rev-adelino.png",
  "João Batista": "/images/rev-joao.jpg",
};

function buildProfessors(): OnlineProfessor[] {
  const byKey = new Map<string, OnlineProfessor>();

  const add = (rawName: string, courseCode: string, credential?: string) => {
    // "Professor" / "Professor em aberto" são placeholders de docente a definir.
    if (/^Professor( em aberto)?$/.test(rawName)) return;
    const key = stripTitle(rawName);
    const existing = byKey.get(key);
    if (existing) {
      if (!existing.courses.includes(courseCode)) {
        existing.courses.push(courseCode);
      }
      if (credential && !existing.credential) existing.credential = credential;
    } else {
      byKey.set(key, {
        name: rawName,
        courses: [courseCode],
        photo: photoByName[key],
        credential,
      });
    }
  };

  for (const course of efalCourses) {
    for (const discipline of course.curriculum) {
      add(discipline.docente, course.code);
    }
    for (const professor of course.professors ?? []) {
      add(professor.name, course.code, professor.credential);
    }
  }
  for (const course of posCourses) {
    for (const discipline of course.curriculum) {
      if (discipline.professor) add(discipline.professor, "Pós");
    }
  }

  return [...byKey.values()];
}

export const onlineProfessors = buildProfessors();
