import type { Metadata } from "next";

/**
 * Domínio canônico do site — fonte única para metadataBase, JSON-LD, sitemap
 * e robots.
 *
 * TODO(conteúdo): confirmar o domínio oficial do novo site com a direção (o
 * antigo era seminariosimonton.com.br). Em preview/produção na Vercel, a
 * variável NEXT_PUBLIC_SITE_URL sobrescreve sem precisar mexer no código.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://seminariosimonton.com.br";

/**
 * Open Graph básico e consistente para todas as rotas. Como o Next substitui
 * (não mescla) o objeto `openGraph` da rota sobre o do layout, cada página
 * monta o seu com este helper para não perder siteName/locale.
 *
 * A IMAGEM não entra aqui de propósito: quem responde por ela é
 * src/app/opengraph-image.tsx, que o Next aplica a todas as rotas e que tem
 * prioridade sobre o objeto `metadata` (ver docs/…/generate-metadata.md).
 */
export function ogMetadata(
  title: string,
  description: string,
): Metadata["openGraph"] {
  return {
    type: "website",
    locale: "pt_BR",
    siteName: "Seminário Simonton",
    title,
    description,
  };
}
