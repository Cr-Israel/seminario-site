import Header from "@/components/layout/Header";
import CasaDeIsabelHero from "@/components/sections/projetos/CasaDeIsabelHero";
import CasaDeIsabelNome from "@/components/sections/projetos/CasaDeIsabelNome";
import CasaDeIsabelEncontros from "@/components/sections/projetos/CasaDeIsabelEncontros";
import CasaDeIsabelApoio from "@/components/sections/projetos/CasaDeIsabelApoio";
import CasaDeIsabelCapelao from "@/components/sections/projetos/CasaDeIsabelCapelao";
import { ogMetadata } from "@/lib/seo";

const title = "Casa de Isabel | Seminário Simonton";
const description =
  "Projeto da capelania do Seminário Simonton que acolhe esposas e futuras esposas de seminaristas: encontros mensais, Congresso de Casais e Encontro de Mulheres.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Página do projeto Casa de Isabel. Ordem: apresentação (hero), a referência
 * bíblica que dá nome ao projeto, a agenda de encontros, as frentes de
 * cooperação abertas a quem é de fora e o fecho com a palavra do capelão.
 * Fundos alternam claro/escuro para dar ritmo, como nas demais páginas.
 */
export default function CasaDeIsabelPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <CasaDeIsabelHero />
      <CasaDeIsabelNome />
      <CasaDeIsabelEncontros />
      <CasaDeIsabelApoio />
      <CasaDeIsabelCapelao />
    </div>
  );
}
