import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import GraduacaoHero from "@/components/sections/graduacao/GraduacaoHero";
import AdmissionProcess from "@/components/sections/graduacao/AdmissionProcess";
import SeloIPB from "@/components/sections/SeloIPB";
import Differentiators from "@/components/sections/Differentiators";
import Faculty from "@/components/sections/graduacao/Faculty";
import CourseCoordinator from "@/components/sections/CourseCoordinator";
import Testimonials from "@/components/sections/Testimonials";
import { coordinators } from "@/data/coordinators";
import { depoimentos } from "@/data/depoimentos";
import { whatsappHref } from "@/lib/whatsapp";
import { ogMetadata } from "@/lib/seo";

const title =
  "Bacharelado em Teologia — Graduação Presencial | Seminário Simonton";
const description =
  "O Bacharelado em Teologia do Seminário Simonton é a formação presencial completa em teologia reformada. O ingresso é pelo Vestibular Unificado da Igreja Presbiteriana do Brasil, organizado pela JET.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Depoimentos do curso — egressos do Bacharelado (placeholders por ora). */
const depoimentosBacharel = depoimentos.filter((d) =>
  d.context.startsWith("Bacharel"),
);

export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <GraduacaoHero />
      <AdmissionProcess />

      {/* Legitimação eclesiástica, no mesmo padrão da Home. */}
      <section className="px-6 pb-4">
        <SeloIPB />
      </section>

      <Differentiators />
      <Faculty />

      {/* Coordenação do curso */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <CourseCoordinator coordinator={coordinators.bacharel} />
      </section>

      {depoimentosBacharel.length > 0 && (
        <Testimonials
          items={depoimentosBacharel}
          title="Egressos do Bacharelado"
        />
      )}

      {/* CTA final + ponte para o FAQ geral */}
      <section className="bg-brand-950 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
              Dê o próximo passo na sua formação
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100/80">
              A secretaria orienta você sobre o Vestibular Unificado da IPB e a
              vida acadêmica no Simonton.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:items-end">
            <a
              href={whatsappHref(
                "Olá! Gostaria de informações sobre o Bacharelado em Teologia e o processo seletivo da IPB."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Falar com a secretaria <ArrowRight size={16} />
            </a>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-sm text-brand-100/80 transition-colors hover:text-white"
            >
              Ver perguntas frequentes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
