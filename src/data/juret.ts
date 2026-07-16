/**
 * Composição da JURET-Rio — Junta Regional de Educação Teológica do Rio de
 * Janeiro, órgão da IPB que superintende a administração do Seminário,
 * subordinado à JET (Junta de Educação Teológica).
 *
 * Nomes conferidos na página oficial da IPB em 16/07/2026:
 * https://www.ipb.org.br/junta-regional-de-educacao-teologica
 *
 * TODO(conteúdo): fotos dos demais membros a caminho — ao recebê-las, salvar
 * em /public/images e preencher o campo `photo`; o card troca as iniciais
 * pela foto sozinho.
 */
export type JuretMember = {
  /** Nome como consta na página oficial (com "Rev." ou "Presb."). */
  name: string;
  /** Função na junta, quando conhecida (ex.: "Presidente"). */
  role?: string;
  /** Caminho da foto em /public — sem foto, o card mostra as iniciais. */
  photo?: string;
};

/** Presidente da JURET-Rio. */
export const juretPresidente: JuretMember = {
  name: "Rev. Sandro Moreira de Matos",
  role: "Presidente",
  photo: "/images/rev-sandro-matos.jpeg",
};

/** Demais membros titulares. */
export const juretTitulares: JuretMember[] = [
  { name: "Rev. Arivelton Peisini" },
  { name: "Rev. Márcio José da Silva Ciriaco" },
  { name: "Presb. Paschoal da Silva Filho" },
  { name: "Presb. Antônio José Rosa" },
];

/** Membros suplentes. */
export const juretSuplentes: JuretMember[] = [
  { name: "Rev. Lourival Marciano" },
  { name: "Rev. Edson Arantes do Nascimento" },
  { name: "Rev. Lael Viana de Alcântara" },
  { name: "Presb. Dorvy da Silva Correia" },
  { name: "Presb. Cláudio Roberto Quaresmo Machado" },
];
