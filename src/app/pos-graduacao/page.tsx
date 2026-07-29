import { BadgeCheck, GraduationCap, Layers, Radio } from "lucide-react";
import Header from "@/components/layout/Header";
import OnlineHero from "@/components/sections/online/OnlineHero";
import OnlineStats, {
  type ProofItem,
} from "@/components/sections/online/OnlineStats";
import CourseCatalog from "@/components/sections/online/CourseCatalog";
import { posCards } from "@/components/sections/online/courseCards";
import PosFaculty from "@/components/sections/online/PosFaculty";
import OnlineMotto from "@/components/sections/online/OnlineMotto";
import OnlineFaq from "@/components/sections/online/OnlineFaq";
import InterestForm from "@/components/sections/online/InterestForm";
import SeloIPB from "@/components/sections/SeloIPB";
import { coordinators } from "@/data/coordinators";
import { posFaqItems } from "@/data/faqOnline";
import { posMottoStats } from "@/data/onlineNumbers";
import { posCourses } from "@/data/pos";
import { ogMetadata } from "@/lib/seo";

const title = "Pós-graduação | Seminário Simonton";
const description =
  "Especialização teológica 100% online, com aula ao vivo: os programas de pós-graduação do Seminário Simonton, com inscrição direta — sem vestibular — e corpo docente de mestres e doutores.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

const proofItems: ProofItem[] = [
  { icon: Radio, title: "100% ao vivo", detail: "nada de aula gravada" },
  { icon: BadgeCheck, title: "Certificação", detail: "JURET/IPB" },
  {
    icon: GraduationCap,
    title: `${posCourses.length} programas`,
    detail: "de especialização teológica",
  },
  { icon: Layers, title: "9 disciplinas", detail: "em cada grade" },
];

/**
 * Página da Pós-graduação — irmã de /efal, com a mesma anatomia (catálogo →
 * corpo docente → FAQ → contato), mas voltada a quem já tem formação e busca
 * aprofundamento.
 */
export default function PosGraduacaoPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <OnlineHero
        eyebrow="Pós-graduação"
        title="Aprofundamento teológico para quem já caminhou um trecho"
        description="Programas de especialização 100% online, com aula ao vivo e professores mestres e doutores. Inscrição direta, sem processo seletivo, de qualquer lugar do Brasil."
        ctaHref="#cursos"
        ctaLabel="Ver os programas"
        whatsappMessage="Olá! Gostaria de mais informações sobre a Pós-graduação do Seminário Simonton."
      />
      <OnlineStats items={proofItems} />
      <CourseCatalog
        eyebrow="Programas de pós-graduação"
        title="Escolha a sua área de aprofundamento"
        cards={posCards}
        coordinator={coordinators.pos}
        coordinatorQuestion="Dúvidas sobre a Pós-graduação?"
      >
        <PosFaculty />
      </CourseCatalog>

      {/* Legitimação eclesiástica logo abaixo do catálogo, como na Home. */}
      <section className="px-6 pb-20">
        <SeloIPB />
      </section>

      <OnlineMotto
        stats={posMottoStats}
        description="Teologia reformada estudada a fundo, com pesquisa e rigor acadêmico, a serviço de quem lidera, ensina e prega na igreja local — com professor ao vivo, do início ao fim."
        whatsappMessage="Olá! Quero me inscrever em um dos programas de Pós-graduação do Seminário Simonton."
      />
      <OnlineFaq
        items={posFaqItems}
        description="Reunimos aqui as perguntas mais comuns sobre a Pós-graduação. Não achou a sua? A secretaria responde direto no WhatsApp."
        whatsappMessage="Olá! Tenho uma dúvida sobre a Pós-graduação do Seminário Simonton."
      />
      <InterestForm
        groupLabel="Pós-graduação"
        courses={posCourses.map((course) => course.title)}
        description="Deixe seus dados e o programa do seu interesse: avisamos você assim que as inscrições das próximas turmas da Pós-graduação forem abertas."
      />
    </div>
  );
}
