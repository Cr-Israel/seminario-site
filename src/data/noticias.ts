/**
 * Notícias e vida acadêmica — fonte única da seção de notícias da Home
 * (src/components/sections/News.tsx), estrutura pronta para o futuro
 * blog/agenda.
 */
export interface Noticia {
  titulo: string;
  resumo: string;
  /** Data ISO (aaaa-mm-dd) — formatada na exibição. */
  data: string;
  href: string;
  imagem?: string;
}

// TODO(conteúdo): substituir pelos três primeiros itens reais de
// notícias/eventos e ligar o SHOW_NEWS em News.tsx.
export const noticias: Noticia[] = [
  {
    titulo: "[PLACEHOLDER] Título da primeira notícia",
    resumo:
      "[PLACEHOLDER] Resumo curto da notícia ou evento — duas linhas no máximo.",
    data: "2026-07-01",
    href: "#",
  },
  {
    titulo: "[PLACEHOLDER] Título da segunda notícia",
    resumo:
      "[PLACEHOLDER] Resumo curto da notícia ou evento — duas linhas no máximo.",
    data: "2026-07-01",
    href: "#",
  },
  {
    titulo: "[PLACEHOLDER] Título da terceira notícia",
    resumo:
      "[PLACEHOLDER] Resumo curto da notícia ou evento — duas linhas no máximo.",
    data: "2026-07-01",
    href: "#",
  },
];
