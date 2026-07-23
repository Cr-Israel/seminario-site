import Image from "next/image";
import Header from "@/components/layout/Header";
import GraduacaoHero from "@/components/sections/graduacao/GraduacaoHero";
import GraduacaoAbout from "@/components/sections/graduacao/GraduacaoAbout";
import GraduacaoBenefits from "@/components/sections/graduacao/GraduacaoBenefits";
import AdmissionProcess from "@/components/sections/graduacao/AdmissionProcess";
import GraduacaoStructure from "@/components/sections/graduacao/GraduacaoStructure";
import GraduacaoCtaFinal from "@/components/sections/graduacao/GraduacaoCtaFinal";
import SeloIPB from "@/components/sections/SeloIPB";
import Differentiators from "@/components/sections/Differentiators";
import Faculty from "@/components/sections/graduacao/Faculty";
import Testimonials from "@/components/sections/Testimonials";
import { depoimentos } from "@/data/depoimentos";
import { ogMetadata } from "@/lib/seo";

const title =
  "Curso Livre de Bacharelado em Teologia — Presencial | Seminário Simonton";
const description =
  "O Curso Livre de Bacharelado em Teologia do Seminário Simonton oferece uma sólida formação reformada presencial. O currículo reflete o aprovado pela Igreja Presbiteriana do Brasil e o ingresso é pelo processo de admissão da JET.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Depoimentos do curso — egressos do Bacharelado (placeholders por ora). */
const depoimentosBacharel = depoimentos.filter((d) =>
  d.context.startsWith("Bacharel"),
);

/**
 * Página do Curso Livre de Bacharelado em Teologia. Ritmo de fundos
 * alternados: hero escuro, sobre o curso e benefícios, processo de admissão
 * pela JET (com os links reais), estrutura da sede (escuro), corpo docente
 * real, diferenciais e CTA final repetindo inscrição e Manual do Candidato.
 */
export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <GraduacaoHero />
      <GraduacaoAbout />
      <GraduacaoBenefits />
      <AdmissionProcess />

      {/* Legitimação eclesiástica, no mesmo padrão da Home. */}
      <section className="px-6 pb-4">
        <SeloIPB />
      </section>

      <GraduacaoStructure />
      <Faculty />
      <Differentiators />

      {/* Formatura — registro do acervo, ponte para os depoimentos de egressos. */}
      <section className="bg-white py-16">
        <figure className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[2/1] overflow-hidden rounded-sm border border-brand-900/10">
            <Image
              src="/images/formatura-2025.jpeg"
              alt="Formandos do Seminário Simonton de beca e capelo, erguendo seus diplomas durante o culto de formatura"
              fill
              sizes="(max-width: 1152px) 100vw, 1104px"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-stone-500">
            Culto de formatura da turma de 2025
          </figcaption>
        </figure>
      </section>

      {depoimentosBacharel.length > 0 && (
        <Testimonials
          items={depoimentosBacharel}
          title="Egressos do Bacharelado"
        />
      )}

      <GraduacaoCtaFinal />
    </div>
  );
}
