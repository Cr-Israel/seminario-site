/**
 * Galeria "Nossa casa" (página Sobre) — os espaços da nova sede (Edifício
 * Rev. Roberto Brasileiro Silva, 2022) e registros da antiga sede, na Rua
 * Joaquina Rosa. Fotos reais do acervo da instituição.
 */
export interface FotoCampus {
  src: string;
  /** Descrição acessível real da imagem. */
  alt: string;
  /** Legenda discreta exibida sob a foto e no lightbox. */
  legenda: string;
  /** Ocupa duas colunas na grade (fotos panorâmicas de destaque). */
  wide?: boolean;
}

export const fotosCampus: FotoCampus[] = [
  {
    src: "/images/capela.jpeg",
    alt: "Capela da nova sede do Seminário Simonton, com fileiras de poltronas de madeira, púlpito e cruz ao fundo",
    legenda: "Capela da nova sede",
    wide: true,
  },
  {
    src: "/images/biblioteca.jpeg",
    alt: "Estantes de madeira repletas de livros na biblioteca do Seminário Simonton",
    legenda: "Biblioteca",
  },
  {
    src: "/images/sala-de-aula.jpeg",
    alt: "Sala de aula da nova sede do Seminário Simonton, com carteiras estofadas e janelas amplas",
    legenda: "Sala de aula da nova sede",
  },
  {
    src: "/images/frente-antiga-stps.jpeg",
    alt: "Fachada da antiga sede do Seminário Simonton, na Rua Joaquina Rosa, no Méier",
    legenda: "Memória: a fachada da antiga sede, na Rua Joaquina Rosa",
  },
  {
    src: "/images/aula-antiga-sede.jpeg",
    alt: "Professor e alunos durante aula em uma sala da antiga sede do Seminário",
    legenda: "Memória: aula na antiga sede",
  },
];
