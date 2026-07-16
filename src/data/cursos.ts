import { efalCourses, type EfalCourse } from "./efal";
import { posCourses } from "./pos";

/**
 * FONTE ÚNICA DE VERDADE dos cursos/programas da instituição.
 *
 * Modalidade e nível são ATRIBUTOS do curso (exibidos como badge), não marcas
 * separadas — princípio "uma casa só". Os cursos da EFAL e da Pós continuam
 * detalhados em efal.ts/pos.ts (grades, ementas, docentes); aqui fica a visão
 * institucional unificada usada na Home (comparador, select de contato,
 * próximas turmas) e em qualquer lugar que liste "todos os cursos".
 */
export type Modalidade = "presencial" | "online" | "hibrido";
export type Nivel = "bacharelado" | "curso-livre" | "pos-graduacao";

export interface Curso {
  slug: string;
  nome: string;
  /** Sigla curta quando houver (ex.: "CIT", "CFO"). */
  codigo?: string;
  nivel: Nivel;
  modalidade: Modalidade;
  duracao: string;
  /** Próxima turma/ingresso, quando conhecido (ex.: "Agosto/2026"). */
  proximaTurma?: string;
  descricaoCurta: string;
  /** Forma de ingresso (ex.: "Vestibular Unificado da IPB (JET)"). */
  ingresso: string;
  /** Página do curso dentro do site. */
  href: string;
  /** Programa em destaque (o Bacharelado, carro-chefe institucional). */
  destaque?: boolean;
}

export const modalidadeLabel: Record<Modalidade, string> = {
  presencial: "Presencial",
  online: "100% Online",
  hibrido: "Híbrido",
};

export const nivelLabel: Record<Nivel, string> = {
  bacharelado: "Bacharelado",
  "curso-livre": "Curso Livre",
  "pos-graduacao": "Pós-graduação",
};

/**
 * Extrai das datas de início da grade (campo `start`, ex.: "Início em
 * 04/08/2026") o mês/ano de começo das turmas — hoje só o Curso de Libras
 * tem essas datas no calendário oficial 2026.2.
 */
function proximaTurmaEfal(course: EfalCourse): string | undefined {
  const match = course.curriculum
    .map((d) => d.start?.match(/\d{2}\/(\d{2})\/(\d{4})/))
    .find(Boolean);
  if (match) {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    ];
    const mes = meses[Number(match[1]) - 1];
    return mes ? `${mes}/${match[2]}` : undefined;
  }
  // Cursos com grade e apresentação confirmadas estão no calendário 2026.2;
  // os marcados isNew ainda estão em estruturação.
  return course.isNew ? undefined : "Turmas 2026.2";
}

const bacharelado: Curso = {
  slug: "bacharelado-teologia",
  nome: "Bacharelado em Teologia",
  nivel: "bacharelado",
  modalidade: "presencial",
  // TODO(conteúdo): confirmar a duração oficial do Bacharelado com a secretaria.
  duracao: "[PLACEHOLDER] Duração a confirmar",
  // TODO(conteúdo): confirmar as datas do próximo Vestibular Unificado (JET).
  proximaTurma: "[PLACEHOLDER] Conforme o calendário do Vestibular Unificado da IPB",
  descricaoCurta:
    "A formação teológica completa do Seminário, presencial no Rio de Janeiro, voltada ao preparo de pastores e líderes para a IPB.",
  ingresso: "Vestibular Unificado da IPB (JET)",
  href: "/graduacao",
  destaque: true,
};

const cursosEfal: Curso[] = efalCourses.map((c) => ({
  slug: c.slug,
  nome: c.title,
  codigo: c.code,
  nivel: "curso-livre",
  modalidade: "online",
  duracao: c.duration,
  proximaTurma: proximaTurmaEfal(c),
  descricaoCurta: c.tagline,
  ingresso: "Inscrição direta pelo Seminário",
  href: `/cursos-online/${c.slug}`,
}));

const cursosPos: Curso[] = posCourses.map((c) => ({
  slug: c.slug,
  nome: c.title,
  nivel: "pos-graduacao",
  modalidade: "online",
  duracao: c.duration,
  // TODO(conteúdo): confirmar datas das turmas de Pós com o Núcleo de Pós-graduação.
  proximaTurma: undefined,
  descricaoCurta: c.tagline,
  ingresso: "Inscrição direta pelo Seminário",
  href: `/cursos-online/${c.slug}`,
}));

/** Todos os programas da instituição, do Bacharelado à Pós, em ordem de nível. */
export const cursos: Curso[] = [bacharelado, ...cursosEfal, ...cursosPos];

export function getCurso(slug: string) {
  return cursos.find((curso) => curso.slug === slug);
}
