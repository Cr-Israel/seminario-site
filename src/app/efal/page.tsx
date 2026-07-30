import Link from "next/link";
import { BadgeCheck, CalendarCheck, MapPin, Radio } from "lucide-react";
import Header from "@/components/layout/Header";
import EfalHero from "@/components/sections/online/EfalHero";
import OnlineStats, {
  type ProofItem,
} from "@/components/sections/online/OnlineStats";
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
import { efalCourses, efalTopics } from "@/data/efal";
import { efalFaqItems } from "@/data/faqOnline";
import { efalMottoStats } from "@/data/onlineNumbers";
import { efalProfessors } from "@/data/professors";
import { ogMetadata } from "@/lib/seo";

const title =
  "EFAL — Escola de Formação e Aperfeiçoamento de Líderes | Seminário Simonton";
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
 * Página da EFAL — funil claro (catálogo navegável por tópico → docentes →
 * depoimentos → FAQ → contato), mas dentro da mesma casa institucional:
 * mesmos selos, mesmo tom vocacional, sem urgência artificial. A
 * Pós-graduação tem página irmã em /pos-graduacao.
 */
export default function EfalPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <EfalHero proofBar={<OnlineStats items={proofItems} />} />
      <CourseCatalog
        eyebrow="Guia de cursos"
        title="Um ambiente teológico completo"
        description="Cada chamado tem um ponto de partida. Encontre o seu."
        cards={efalCards}
        topics={efalTopics}
        tinted
        coordinator={coordinators.efal}
        coordinatorQuestion="Dúvidas sobre os cursos da EFAL?"
        featuredKey="cit"
      >
        {/* A EFAL não cobre quem já tem formação — a ponte para a página irmã. */}
        <p className="mt-12 text-center text-sm leading-relaxed text-stone-600">
          Já tem formação teológica e quer se aprofundar?{" "}
          <Link
            href="/pos-graduacao"
            className="font-medium text-brand-800 underline underline-offset-4 transition-colors hover:text-brand-900"
          >
            Conheça a Pós-graduação
          </Link>
          .
        </p>
      </CourseCatalog>

      {/* Legitimação eclesiástica logo abaixo do catálogo, como na Home. */}
      <SeloIPB />

      <OnlineFaculty
        professors={efalProfessors}
        description="Cada disciplina tem um rosto: pastores e professores que unem vida, ministério e sala de aula."
      />
      <Testimonials items={depoimentosEfal} title="Quem estudou, recomenda" />
      <OnlineMotto
        stats={efalMottoStats}
        description="Do primeiro contato com a teologia reformada à capacitação de oficiais, professores e líderes, cada curso da EFAL existe para servir à igreja local, com professores ao vivo, do início ao fim da sua caminhada."
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
