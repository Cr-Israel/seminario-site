import { efalCourses, type EfalCourse } from "./efal";
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
  /** Bio quando o curso já a fornece (ex.: professoras do Curso de Formação em Libras). */
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

/** Código usado nas grades da Pós, que não têm sigla própria por programa. */
const POS_CODE = "Pós";

/** Docentes que lecionam em alguma grade da EFAL — vitrine de /efal. */
export const efalProfessors = onlineProfessors.filter((professor) =>
  professor.courses.some((code) => code !== POS_CODE),
);

/** Instrutor de um curso, como exibido na seção "Quem ensina" da landing. */
export type CourseInstructor = {
  /** Nome como está na grade, com título (ex.: "Rev. Diego Maia"). */
  name: string;
  /** "Professor" / "Professora", conforme o título na grade. */
  role: string;
  /** Disciplinas que leciona no curso, já mescladas ("… 1 e 2"). */
  discipline: string;
  bio: string;
  credential?: string;
  /** Caminho em /public — ausente enquanto não temos a foto real. */
  photo?: string;
};

// TODO: substituir pelas bios reais dos professores conforme forem chegando —
// hoje só as professoras do Curso de Formação em Libras têm bio própria
// (declarada em efal.ts).
const BIO_PLACEHOLDER_REV =
  "Reverendo da Igreja Presbiteriana do Brasil, com experiência pastoral e docente na formação de líderes. Dedica-se ao ensino teológico reformado e ao discipulado na igreja local. Biografia completa em breve.";
const BIO_PLACEHOLDER_PROFA =
  "Professora do corpo docente da EFAL, com experiência na formação de líderes e no ensino da igreja local. Biografia completa em breve.";
const BIO_PLACEHOLDER_PROF =
  "Professor do corpo docente da EFAL, com experiência na formação de líderes e no ensino da igreja local. Biografia completa em breve.";

function isReverendo(name: string) {
  return /^Rev\./i.test(name);
}

function isProfessora(name: string) {
  return /^Profª/i.test(name);
}

function bioPadrao(name: string) {
  if (isReverendo(name)) return BIO_PLACEHOLDER_REV;
  return isProfessora(name) ? BIO_PLACEHOLDER_PROFA : BIO_PLACEHOLDER_PROF;
}

/**
 * Junta as disciplinas de um mesmo docente numa linha só, colapsando a
 * numeração das sequências: "Introdução à Teologia Reformada 1" e "… 2" viram
 * "Introdução à Teologia Reformada 1 e 2". Disciplinas diferentes ficam
 * separadas por "·".
 */
function mergeDisciplineNames(names: string[]) {
  const groups = new Map<string, string[]>();
  for (const name of names) {
    const match = name.match(/^(.*?)\s+(\d+)$/);
    const base = match ? match[1] : name;
    const numbers = groups.get(base) ?? [];
    if (match) numbers.push(match[2]);
    groups.set(base, numbers);
  }
  return [...groups.entries()]
    .map(([base, numbers]) => {
      if (numbers.length === 0) return base;
      if (numbers.length === 1) return `${base} ${numbers[0]}`;
      return `${base} ${numbers.slice(0, -1).join(", ")} e ${numbers.at(-1)}`;
    })
    .join(" · ");
}

/**
 * Instrutores de um curso da EFAL, derivados da própria grade: cada docente
 * aparece uma vez, na ordem em que a primeira disciplina dele entra no
 * currículo, com todas as suas disciplinas na mesma linha. Docentes ainda em
 * aberto ("Professor", "Professor em aberto") ficam de fora.
 *
 * Bio, credencial e foto vêm de `course.professors` quando o curso as declara
 * (é o caso do Curso de Formação em Libras); senão, foto do mapa central e bio
 * provisória.
 */
export function courseInstructors(course: EfalCourse): CourseInstructor[] {
  const disciplinesByName = new Map<string, { name: string; items: string[] }>();

  for (const discipline of course.curriculum) {
    const raw = discipline.docente;
    if (/^Professor( em aberto)?$/.test(raw)) continue;
    const key = stripTitle(raw);
    const entry = disciplinesByName.get(key);
    if (entry) entry.items.push(discipline.name);
    else disciplinesByName.set(key, { name: raw, items: [discipline.name] });
  }

  return [...disciplinesByName.entries()].map(([key, { name, items }]) => {
    const declared = course.professors?.find(
      (professor) => stripTitle(professor.name) === key,
    );
    return {
      name,
      role: isProfessora(name) ? "Professora" : "Professor",
      discipline: mergeDisciplineNames(items),
      bio: declared?.bio ?? bioPadrao(name),
      credential: declared?.credential,
      photo: declared?.photo ?? photoByName[key],
    };
  });
}
