import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // quando o back-end/CMS servir imagens de outro domínio, adiciona aqui
      // { protocol: "https", hostname: "cdn.seminariosimonton.com.br" },
    ],
  },
};

export default nextConfig;