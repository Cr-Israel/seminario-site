import type { ReactNode } from "react";
import Image from "next/image";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * Abertura da página da EFAL: a capa oficial do núcleo, exibida inteira e sem
 * véu — ela já traz o wordmark e o nome da escola —, e logo abaixo a chamada
 * da página, que antes ficava sobreposta à arte e disputava leitura com ela.
 *
 * `proofBar` é a barra de provas (OnlineStats), encaixada entre a capa e a
 * chamada para subir sobre a borda da arte, como na Pós.
 */
export default function EfalHero({ proofBar }: { proofBar?: ReactNode }) {
  return (
    <>
      {/* Capa de ponta a ponta. O recorte (object-cover) só come a faixa de
          verde vazio: com o foco em 52% da altura, sobram tanto o wordmark
          quanto a assinatura do Seminário, à direita da arte. */}
      <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[19/8]">
        <Image
          src="/images/capa-efal.jpg"
          alt="EFAL — Escola de Formação e Aperfeiçoamento de Líderes · Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
          fill
          priority
          sizes="100vw"
          // Fundo em degradê com granulado banda feio na qualidade padrão (75).
          quality={90}
          className="object-cover object-[center_52%]"
        />
      </div>

      {proofBar}

      {/* Chamada em duas colunas, ocupando a largura da página: título à
          esquerda, apoio e CTAs à direita — em vez da coluna estreita
          centralizada, que deixava a tela vazia dos dois lados. */}
      <section className="bg-stone-50 px-6 pb-16 pt-14 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              Escola de Formação e Aperfeiçoamento de Líderes
            </span>
            <h1 className="mt-5 font-serif text-4xl font-extrabold leading-[1.1] text-brand-950 sm:text-5xl lg:text-6xl">
              Capacitação teológica para quem já serve na igreja local
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
              Cursos livres 100% online, com aula ao vivo: escolha a trilha do
              seu ministério, estude de qualquer lugar do Brasil e inscreva-se
              direto — sem vestibular.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#trilhas"
                className="rounded-sm bg-brand-900 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                Encontre o seu curso
              </a>
              <a
                href={whatsappHref(
                  "Olá! Gostaria de mais informações sobre os cursos da EFAL do Seminário Simonton.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-brand-900/20 px-7 py-3.5 text-center text-sm font-medium text-brand-800 transition-colors hover:bg-brand-50"
              >
                Falar com a secretaria
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
