import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import WhatsappFab from "@/components/layout/WhatsappFab";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// TODO(conteúdo): confirmar o domínio oficial do novo site (o antigo era
// seminariosimonton.com.br) — usado nas URLs absolutas de SEO/Open Graph.
const SITE_URL = "https://seminariosimonton.com.br";

const SITE_TITLE = "Seminário Simonton | Formação Teológica Reformada";
const SITE_DESCRIPTION =
  "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — formando pastores e líderes para a glória de Deus desde 1982.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Seminário Simonton",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/logo-verde-trim.png" }],
  },
};

/**
 * Dados estruturados da instituição (schema.org/EducationalOrganization),
 * renderizados como <script type="application/ld+json"> no layout raiz,
 * conforme o guia oficial do Next (docs/01-app/02-guides/json-ld.md).
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton",
  alternateName: "Seminário Simonton",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-verde-trim.png`,
  foundingDate: "1982",
  telephone: "+55-21-2201-6734",
  email: "secretaria.stps@ipb.org.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Isolina, 151 – Méier",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "20710-080",
    addressCountry: "BR",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Igreja Presbiteriana do Brasil",
  },
  sameAs: [
    "https://www.instagram.com/seminariosimonton/",
    "https://www.youtube.com/seminariosimonton",
    "https://www.facebook.com/seminariosimonton/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={montserrat.variable}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        {/* Aplica o tema salvo antes da primeira pintura, evitando flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
