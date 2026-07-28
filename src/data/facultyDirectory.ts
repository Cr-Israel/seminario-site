import { docentes } from "./docentes";
import { efalCourses } from "./efal";
import { onlineProfessors } from "./professors";
import { posProfessors } from "./posProfessors";

/**
 * Diretório completo do corpo docente do STPS, para a página /corpo-docente.
 * Une as três fontes já existentes, sem lista manual:
 *
 * 1. `onlineProfessors` — todos os nomes das grades reais (EFAL + Pós), com
 *    os códigos dos cursos em que lecionam;
 * 2. `posProfessors` — bios, credenciais e fotos oficiais da Pós;
 * 3. `docentes` — o corpo docente do Bacharelado (Graduação).
 *
 * Quando a mesma pessoa aparece em mais de uma fonte (ex.: "Rev. Jeferson
 * Alvarenga" na grade ≡ "Rev. Jeferson Carvalho Alvarenga" na Pós), o match
 * é feito por primeiro + último nome, sem título nem acentos. Os dados da Pós
 * prevalecem; a Graduação apenas preenche o que falta e marca o curso.
 */
export type FacultyMember = {
  name: string;
  credential?: string;
  bio?: string;
  photo?: string;
  /** Função institucional em destaque (direção, decanato, coordenação…). */
  role?: string;
  /** Códigos dos cursos em que leciona ("Bacharel", "Pós", "CIT", "CFO"…). */
  courses: string[];
};

/** Títulos por código de curso, para legenda/tooltip dos chips. */
export const courseTitleByCode: Record<string, string> = {
  Bacharel: "Bacharelado em Teologia",
  Pós: "Pós-graduação",
  ...Object.fromEntries(
    efalCourses.map((course) => [course.code, course.title]),
  ),
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

  // Graduação (docentes.ts). Só preenche o que falta — os dados da Pós/grade
  // prevalecem — e marca o curso "Bacharel". `graduacaoAlias` reconcilia os
  // docentes cujo nome completo no Bacharelado difere da forma curta usada nas
  // grades, evitando cards duplicados da mesma pessoa.
  const graduacaoAlias: Record<string, string> = {
    "adelino silva": "adelino adelino", // Rev. Adelino da Silva ≡ Rev. Adelino (nome único → chave "adelino adelino")
  };
  for (const docente of docentes) {
    const rawKey = nameKey(docente.name);
    const key = graduacaoAlias[rawKey] ?? rawKey;
    const existing = byKey.get(key);
    if (existing) {
      existing.credential ??= docente.credential;
      existing.bio ??= docente.bio;
      existing.photo ??= docente.photo;
      existing.role ??= docente.role;
      if (!existing.courses.includes("Bacharel")) {
        existing.courses.unshift("Bacharel");
      }
    } else {
      byKey.set(key, {
        name: docente.name,
        credential: docente.credential,
        bio: docente.bio,
        photo: docente.photo,
        role: docente.role,
        courses: ["Bacharel"],
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
