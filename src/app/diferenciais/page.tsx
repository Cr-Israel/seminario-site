import Header from "@/components/layout/Header";
import DiferenciaisHero from "@/components/sections/diferenciais/DiferenciaisHero";
import DiferenciaisNav from "@/components/sections/diferenciais/DiferenciaisNav";
import DiferencialBlock from "@/components/sections/diferenciais/DiferencialBlock";
import DiferenciaisQuote from "@/components/sections/diferenciais/DiferenciaisQuote";
import DiferenciaisCta from "@/components/sections/diferenciais/DiferenciaisCta";
import SobreFaculty from "@/components/sections/sobre/SobreFaculty";
import { diferenciais } from "@/data/diferenciais";
import { ogMetadata } from "@/lib/seo";

const title = "Nossos Diferenciais | Seminário Simonton";
const description =
  "Os diferenciais do Seminário Simonton: identidade confessional reformada, reconhecimento na IPB, herança que remonta a Simonton, corpo docente pastoral, acompanhamento real e formação integral.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Página "Nossos Diferenciais": hero escuro com a tese, faixa de âncoras,
 * seis seções detalhadas em zigue-zague (dados em src/data/diferenciais.ts)
 * com um pull quote confessional no meio, resumo do corpo docente e CTA
 * final. Fundos alternam claro/escuro para dar ritmo.
 */
export default function DiferenciaisPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <DiferenciaisHero />
      <DiferenciaisNav />
      {diferenciais.slice(0, 3).map((item, i) => (
        <DiferencialBlock key={item.id} item={item} index={i} />
      ))}
      <DiferenciaisQuote />
      {diferenciais.slice(3).map((item, i) => (
        <DiferencialBlock key={item.id} item={item} index={i + 3} />
      ))}
      <SobreFaculty />
      <DiferenciaisCta />
    </div>
  );
}
