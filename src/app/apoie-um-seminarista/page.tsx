import Header from "@/components/layout/Header";
import ApoieSeminarista from "@/components/sections/projetos/ApoieSeminarista";
import { ogMetadata } from "@/lib/seo";

const title = "Apoie um seminarista | Seminário Simonton";
const description =
  "Participe da formação de futuros pastores: conheça como igrejas e irmãos podem apoiar o sustento de seminaristas do Seminário Simonton.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

export default function ApoieSeminaristaPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <ApoieSeminarista />
    </div>
  );
}
