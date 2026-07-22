import Header from "@/components/layout/Header";
import SobreJuret from "@/components/sections/sobre/SobreJuret";
import { ogMetadata } from "@/lib/seo";

const title = "JURET-Rio | Seminário Simonton";
const description =
  "Conheça a JURET-Rio, a Junta Regional de Educação Teológica da Igreja Presbiteriana do Brasil que superintende o Seminário Simonton.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

export default function JuretRioPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <SobreJuret />
    </div>
  );
}
