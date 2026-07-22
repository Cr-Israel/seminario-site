/**
 * Galeria "Nossa casa" (página Sobre) — os espaços da sede atual (Edifício
 * Rev. Roberto Brasileiro Silva, 2022, na Rua Isolina, 151, Méier). A primeira
 * foto é a de destaque (fachada). Fotos reais do acervo da instituição.
 */
export interface FotoCampus {
  src: string;
  /** Descrição acessível real da imagem. */
  alt: string;
  /** Legenda discreta exibida sobre a foto e no lightbox. */
  legenda: string;
}

export const fotosCampus: FotoCampus[] = [
  {
    src: "/images/seminario-frente.jpeg",
    alt: "Fachada de vidro espelhado da sede do Seminário Simonton, com o nome da instituição em letras metálicas",
    legenda: "Fachada — Edifício Rev. Roberto Brasileiro Silva",
  },
  {
    src: "/images/capela.jpeg",
    alt: "Capela da sede do Seminário Simonton, com fileiras de poltronas de madeira, púlpito e cruz ao fundo",
    legenda: "Capela",
  },
  {
    src: "/images/biblioteca.jpeg",
    alt: "Estantes de madeira repletas de livros na biblioteca do Seminário Simonton",
    legenda: "Biblioteca",
  },
  {
    src: "/images/sala-de-aula.jpeg",
    alt: "Sala de aula da sede do Seminário Simonton, com carteiras estofadas e janelas amplas",
    legenda: "Sala de aula",
  },
];
