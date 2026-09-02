/**
 * Notícias e vida acadêmica — fonte única da seção da Home
 * (src/components/sections/News.tsx), da listagem em /noticias e das páginas
 * de leitura em /noticias/[slug].
 *
 * PUBLICAÇÃO: um item só aparece no site quando `isPlaceholder` sai (ou vira
 * false). Os exemplos abaixo ficam aqui como MODELO da estrutura — enquanto
 * todos forem placeholder, a seção da Home some sozinha e a listagem mostra
 * o estado "em breve". Não existe mais uma chave manual para virar: publicar
 * é escrever a notícia e apagar a linha `isPlaceholder: true`.
 */
export const noticiaCategorias = [
  "Institucional",
  "Vida acadêmica",
  "Eventos",
  "Formatura",
] as const;

export type NoticiaCategoria = (typeof noticiaCategorias)[number];

export interface Noticia {
  /** Usado na URL: /noticias/<slug>. Só minúsculas, hífens, sem acento. */
  slug: string;
  titulo: string;
  /** Chamada de 1–2 linhas usada no card e na metadata da página. */
  resumo: string;
  /** Data ISO (aaaa-mm-dd) — formatada na exibição, e ordena a listagem. */
  data: string;
  categoria: NoticiaCategoria;
  /** Caminho em /public. Sem imagem, o card cai num cabeçalho verde. */
  imagem?: string;
  /** Texto da notícia, um item por parágrafo. */
  corpo: string[];
  /** true = exemplo de estrutura; não é publicado. Apagar ao escrever a real. */
  isPlaceholder?: boolean;
}

const todas: Noticia[] = [
  {
    slug: "exemplo-formatura",
    titulo: "[PLACEHOLDER] Título da notícia de formatura",
    resumo:
      "[PLACEHOLDER] Chamada curta da notícia — uma ou duas linhas, é o que aparece no card e no compartilhamento.",
    data: "2026-07-01",
    categoria: "Formatura",
    imagem: "/images/formatura-2025.jpeg",
    corpo: [
      "[PLACEHOLDER] Primeiro parágrafo da notícia. Cada item deste array vira um parágrafo na página de leitura.",
      "[PLACEHOLDER] Segundo parágrafo — contexto, nomes, números, falas.",
    ],
    isPlaceholder: true,
  },
  {
    slug: "exemplo-vida-academica",
    titulo: "[PLACEHOLDER] Título da notícia de vida acadêmica",
    resumo:
      "[PLACEHOLDER] Chamada curta da notícia — uma ou duas linhas, é o que aparece no card e no compartilhamento.",
    data: "2026-06-15",
    categoria: "Vida acadêmica",
    corpo: [
      "[PLACEHOLDER] Notícia sem imagem: o card e o topo da página usam o cabeçalho verde no lugar da foto.",
    ],
    isPlaceholder: true,
  },
  {
    slug: "exemplo-evento",
    titulo: "[PLACEHOLDER] Título da notícia de evento",
    resumo:
      "[PLACEHOLDER] Chamada curta da notícia — uma ou duas linhas, é o que aparece no card e no compartilhamento.",
    data: "2026-05-20",
    categoria: "Eventos",
    corpo: ["[PLACEHOLDER] Corpo da notícia."],
    isPlaceholder: true,
  },
];

/** O que de fato vai ao ar, da mais recente para a mais antiga. */
export const noticias: Noticia[] = todas
  .filter((n) => !n.isPlaceholder)
  .sort((a, b) => b.data.localeCompare(a.data));

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}
