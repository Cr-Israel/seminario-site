import { efalCourses } from "./efal";
import { onlineProfessors } from "./professors";
import { posProfessors } from "./posProfessors";

/**
 * Diretório completo do corpo docente do STPS, para a página /corpo-docente.
 * Une as duas fontes já existentes, sem lista manual:
 *
 * 1. `onlineProfessors` — todos os nomes das grades reais (EFAL + Pós), com
 *    os códigos dos cursos em que lecionam;
 * 2. `posProfessors` — bios, credenciais e fotos oficiais da Pós.
 *
 * Quando a mesma pessoa aparece nas duas fontes (ex.: "Rev. Jeferson
 * Alvarenga" na grade ≡ "Rev. Jeferson Carvalho Alvarenga" na Pós), o match
 * é feito por primeiro + último nome, sem título nem acentos, e os dados da
 * Pós (nome completo, bio, foto) prevalecem.
 */
export type FacultyMember = {
  name: string;
  credential?: string;
  bio?: string;
  photo?: string;
  /** Códigos dos cursos em que leciona ("CIT", "CFO", "Pós"…). */
  courses: string[];
};

/** Títulos por código de curso, para legenda/tooltip dos chips. */
export const courseTitleByCode: Record<string, string> = {
  ...Object.fromEntries(
    efalCourses.map((course) => [course.code, course.title]),
  ),
  Pós: "Pós-graduação",
};

/** "Rev. Jeferson Carvalho Alvarenga" → "jeferson alvarenga". */
function nameKey(name: string) {
  const parts = name
    .replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return `${parts[0] ?? ""} ${parts[parts.length - 1] ?? ""}`;
}

function buildDirectory(): FacultyMember[] {
  const byKey = new Map<string, FacultyMember>();

  for (const professor of onlineProfessors) {
    byKey.set(nameKey(professor.name), {
      name: professor.name,
      credential: professor.credential,
      bio: professor.bio,
      photo: professor.photo,
      courses: [...professor.courses],
    });
  }

  for (const professor of posProfessors) {
    const key = nameKey(professor.name);
    const existing = byKey.get(key);
    if (existing) {
      existing.name = professor.name; // nome completo oficial da Pós
      existing.credential = professor.credential;
      existing.bio = professor.bio;
      existing.photo = professor.photo ?? existing.photo;
      if (!existing.courses.includes("Pós")) existing.courses.push("Pós");
    } else {
      byKey.set(key, {
        name: professor.name,
        credential: professor.credential,
        bio: professor.bio,
        photo: professor.photo,
        courses: ["Pós"],
      });
    }
  }

  // Cards mais completos (com bio, depois com foto) primeiro; empates em
  // ordem alfabética pelo nome sem título.
  const richness = (member: FacultyMember) =>
    member.bio ? 0 : member.photo ? 1 : 2;
  return [...byKey.values()].sort(
    (a, b) =>
      richness(a) - richness(b) ||
      nameKey(a.name).localeCompare(nameKey(b.name), "pt-BR"),
  );
}

export const facultyDirectory = buildDirectory();
