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
  /** Bio quando o curso já a fornece (ex.: professoras do Curso de Libras). */
  bio?: string;
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
  Adelino: "/images/rev-adelino.jpg",
  "João Batista": "/images/rev-joao.jpg",
  "Arina Martins": "/images/prof-arina.png",
  "Cláudio Larieira": "/images/prof-claudio-larieira.png",
  "Simone Xavier": "/images/prof-simone-xavier.png",
  "André Monteiro": "/images/rev-andre-monteiro.jpeg",
  "Bruno Taioli": "/images/rev-bruno-taioli.png",
  "Júnio Cesar": "/images/rev-junio-cesar.jpeg",
  "Pedro Dulci": "/images/rev-pedro-dulci.png",
  "Renato Prates": "/images/rev-renato-prates.png",
  "Ricardo Narciso": "/images/rev-ricardo-narciso.jpeg",
  // Nilson Carneiro dos Santos — aparece nas grades como "Rev. Nilson Santos".
  "Nilson Santos": "/images/rev-nilson-carneiro.jpeg",
  // Docentes da Pós ainda SEM nome nas grades (NT, Cosmovisão, Plantação).
  // Quando entrarem em pos.ts com estes nomes, a foto conecta sozinha:
  "Alessandra Viegas": "/images/prof-alessandra-viegas.jpeg",
  "Jeane Cavalier": "/images/prof-jeane-cavalier.jpeg",
  "Ivo Cesar": "/images/rev-ivo-cesar.jpeg",
  "José Mirabeau": "/images/rev-jose-mirabeau.jpeg",
  "Paulo Won": "/images/rev-paulo-won.jpeg",
  "Vinicius Jordão": "/images/rev-vinicius-jordao.jpeg",
};

/** Foto de um docente pelo nome (com ou sem título) — undefined se não houver. */
export function professorPhoto(name: string) {
  return photoByName[stripTitle(name)];
}

function buildProfessors(): OnlineProfessor[] {
  const byKey = new Map<string, OnlineProfessor>();

  const add = (
    rawName: string,
    courseCode: string,
    credential?: string,
    bio?: string,
  ) => {
    // "Professor" / "Professor em aberto" são placeholders de docente a definir.
    if (/^Professor( em aberto)?$/.test(rawName)) return;
    const key = stripTitle(rawName);
    const existing = byKey.get(key);
    if (existing) {
      if (!existing.courses.includes(courseCode)) {
        existing.courses.push(courseCode);
      }
      if (credential && !existing.credential) existing.credential = credential;
      if (bio && !existing.bio) existing.bio = bio;
    } else {
      byKey.set(key, {
        name: rawName,
        courses: [courseCode],
        photo: photoByName[key],
        credential,
        bio,
      });
    }
  };

  for (const course of efalCourses) {
    for (const discipline of course.curriculum) {
      add(discipline.docente, course.code);
    }
    for (const professor of course.professors ?? []) {
      add(professor.name, course.code, professor.credential, professor.bio);
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
