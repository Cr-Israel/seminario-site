/**
 * Composição da JURET-Rio — Junta Regional de Educação Teológica do Rio de
 * Janeiro, órgão da IPB que superintende a administração do Seminário,
 * subordinado à JET (Junta de Educação Teológica).
 *
 * Nomes e cargos conforme informado pelo Seminário em 21/07/2026.
 *
 * TODO(conteúdo): fotos dos demais membros a caminho — ao recebê-las, salvar
 * em /public/images e preencher o campo `photo`; o card troca as iniciais
 * pela foto sozinho.
 */
export type JuretMember = {
  /** Nome com o tratamento eclesiástico ("Rev." ou "Presb."). */
  name: string;
  /** Cargo na junta (ex.: "Presidente", "Vogal"). */
  role: string;
  /** Caminho da foto em /public — sem foto, o card mostra as iniciais. */
  photo?: string;
};

/** Presidente da JURET-Rio. */
export const juretPresidente: JuretMember = {
  name: "Rev. Sandro Moreira de Matos",
  role: "Presidente",
  photo: "/images/rev-sandro-matos.jpeg",
};

/** Demais membros da junta, com seus cargos. */
export const juretMembros: JuretMember[] = [
  { name: "Presb. Paschoal da Silva Filho", role: "Vice-Presidente" },
  { name: "Rev. Márcio José da Silva Ciriaco", role: "Secretário" },
  { name: "Presb. Antônio José Rosa", role: "Vogal" },
  { name: "Rev. Lourival Marciano dos Santos", role: "Vogal" },
];
