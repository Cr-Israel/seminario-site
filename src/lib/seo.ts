import type { Metadata } from "next";

/**
 * Open Graph básico e consistente para todas as rotas. Como o Next substitui
 * (não mescla) o objeto `openGraph` da rota sobre o do layout, cada página
 * monta o seu com este helper para não perder siteName/locale/imagem.
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
    images: [{ url: "/images/logo-verde-trim.png" }],
  };
}
