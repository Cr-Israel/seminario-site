import { BadgeCheck, CalendarCheck, MapPin, Radio } from "lucide-react";
import Header from "@/components/layout/Header";
import OnlineHero from "@/components/sections/online/OnlineHero";
import OnlineStats, {
  type ProofItem,
} from "@/components/sections/online/OnlineStats";
import EfalProfiles from "@/components/sections/online/EfalProfiles";
import CourseCatalog from "@/components/sections/online/CourseCatalog";
import { efalCards } from "@/components/sections/online/courseCards";
import OnlineFaculty from "@/components/sections/online/OnlineFaculty";
import Testimonials from "@/components/sections/Testimonials";
import OnlineMotto from "@/components/sections/online/OnlineMotto";
import OnlineFaq from "@/components/sections/online/OnlineFaq";
import InterestForm from "@/components/sections/online/InterestForm";
import SeloIPB from "@/components/sections/SeloIPB";
import { coordinators } from "@/data/coordinators";
import { depoimentos } from "@/data/depoimentos";
import { efalCourses } from "@/data/efal";
import { efalFaqItems } from "@/data/faqOnline";
import { efalMottoStats } from "@/data/onlineNumbers";
import { efalProfessors } from "@/data/professors";
import { ogMetadata } from "@/lib/seo";

const title = "EFAL — Escola de Formação de Líderes | Seminário Simonton";
const description =
  "Cursos livres de teologia 100% online, com aula ao vivo: os 7 cursos da EFAL do Seminário Simonton, com inscrição direta — sem vestibular — e certificação pela JURET/IPB.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Depoimentos de alunos dos cursos da EFAL (placeholders por ora). */
const depoimentosEfal = depoimentos.filter(
  (d) => !d.context.startsWith("Bacharel"),
);

const proofItems: ProofItem[] = [
  { icon: Radio, title: "100% ao vivo", detail: "nada de aula gravada" },
  { icon: BadgeCheck, title: "Certificação", detail: "JURET/IPB" },
  { icon: CalendarCheck, title: "Turmas 2026.2", detail: "matrículas abertas" },
  { icon: MapPin, title: "Alunos", detail: "de todo o Brasil" },
];

/**
 * Página da EFAL — funil claro (guia por perfil → catálogo → docentes →
 * depoimentos → FAQ → contato), mas dentro da mesma casa institucional:
 * mesmos selos, mesmo tom vocacional, sem urgência artificial. A
 * Pós-graduação tem página irmã em /pos-graduacao.
 */
export default function EfalPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <OnlineHero
        eyebrow="EFAL · Escola de Formação de Líderes"
        title="Capacitação teológica para quem já serve na igreja local"
        description="Cursos livres 100% online, com aula ao vivo: escolha a trilha do seu ministério, estude de qualquer lugar do Brasil e inscreva-se direto — sem vestibular."
        ctaHref="#trilhas"
        ctaLabel="Encontre o seu curso"
        whatsappMessage="Olá! Gostaria de mais informações sobre os cursos da EFAL do Seminário Simonton."
      />
      <OnlineStats items={proofItems} />
      <EfalProfiles />
      <CourseCatalog
        eyebrow="Cursos da EFAL"
        title="Escolha por onde começar"
        cards={efalCards}
        coordinator={coordinators.efal}
        coordinatorQuestion="Dúvidas sobre os cursos da EFAL?"
        featuredKey="cit"
      />

      {/* Legitimação eclesiástica logo abaixo do catálogo, como na Home. */}
      <section className="px-6 pb-20">
        <SeloIPB />
      </section>

      <OnlineFaculty
        professors={efalProfessors}
        description="Cada disciplina tem um rosto: pastores e professores que unem vida, ministério e sala de aula nas grades da EFAL."
      />
      <Testimonials items={depoimentosEfal} title="Quem estudou, recomenda" />
      <OnlineMotto
        stats={efalMottoStats}
        description="Do primeiro contato com a teologia reformada à capacitação de oficiais, professores e líderes, cada curso da EFAL existe para servir à igreja local — com professor ao vivo, do início ao fim."
        whatsappMessage="Olá! Quero me inscrever em um dos cursos da EFAL do Seminário Simonton."
      />
      <OnlineFaq
        items={efalFaqItems}
        description="Reunimos aqui as perguntas mais comuns sobre a EFAL. Não achou a sua? A secretaria responde direto no WhatsApp."
        whatsappMessage="Olá! Tenho uma dúvida sobre os cursos da EFAL do Seminário Simonton."
      />
      <InterestForm
        groupLabel="EFAL"
        courses={efalCourses.map((course) => course.title)}
        description="Deixe seus dados e o curso do seu interesse: avisamos você assim que as inscrições das próximas turmas da EFAL forem abertas."
      />
    </div>
  );
}
