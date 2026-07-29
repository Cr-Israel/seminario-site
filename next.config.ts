import type { NextConfig } from "next";
import { posCourses } from "./src/data/pos";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // quando o back-end/CMS servir imagens de outro domínio, adiciona aqui
      // { protocol: "https", hostname: "cdn.seminariosimonton.com.br" },
    ],
    // O Next 16 exige allowlist de qualidade. 75 é o padrão; 90 atende as
    // artes em degradê (capa da EFAL), que bandeiam na compressão padrão.
    qualities: [75, 90],
  },
  /**
   * A antiga rota única /cursos-online (EFAL + Pós na mesma página, com abas)
   * foi separada em /efal e /pos-graduacao. Os redirects preservam os links
   * já divulgados: cada curso da Pós vai para a nova rota do seu núcleo e o
   * resto — todos os cursos da EFAL e a raiz — cai na EFAL.
   */
  async redirects() {
    return [
      ...posCourses.map((course) => ({
        source: `/cursos-online/${course.slug}`,
        destination: `/pos-graduacao/${course.slug}`,
        permanent: true,
      })),
      {
        source: "/cursos-online/:slug",
        destination: "/efal/:slug",
        permanent: true,
      },
      {
        source: "/cursos-online",
        destination: "/efal",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
