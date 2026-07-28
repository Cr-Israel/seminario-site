import { ArrowRight, Check } from "lucide-react";
import { getEfalCourse } from "@/data/efal";
import InscricaoButton from "@/components/inscricao/InscricaoButton";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import CitDescontosDialog from "./CitDescontosDialog";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * Faixa de CTA intermediária, logo depois da quebra de objeções: recolhe quem
 * já se convenceu antes de a página seguir para currículo, professores e FAQ.
 *
 * Abre o mesmo modal de inscrição do CTA final (CitEnroll) em vez de apenas
 * rolar até a âncora — o rótulo do botão promete inscrição, então precisa
 * entregar inscrição. Os números vêm de efal.ts para não divergirem da ficha
 * do curso.
 */
export default function CitCtaBand() {
  const course = getEfalCourse("cit");
  const facts = [course?.disciplines, course?.format, course?.duration].filter(
    (fact): fact is string => Boolean(fact),
  );

  return (
    <section className="bg-brand-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Comece agora, sem sair de casa e sem pré-requisito.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100/80">
              Aula ao vivo com os professores do Seminário e gravada, para
              você rever quando puder, quantas vezes quiser.
            </p>
          </div>

          {/* Ação primária sólida; o WhatsApp fica em ênfase menor, como saída
              para quem ainda tem pergunta antes de se inscrever. */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
            <InscricaoButton
              curso={course?.title ?? "Curso Introdutório de Teologia"}
              origem={course?.origem ?? "efal"}
              codigo={course?.codigo ?? "CIT"}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Quero me inscrever <ArrowRight size={16} aria-hidden="true" />
            </InscricaoButton>

            <a
              href={whatsappHref(
                `Olá! Gostaria de saber mais sobre o ${
                  course?.title ?? "Curso Introdutório de Teologia"
                } (CIT).`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <WhatsappIcon size={17} />
              Em dúvida? Fale com o nosso time no WhatsApp
            </a>

            <CitDescontosDialog className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-brand-200 underline-offset-4 transition-colors hover:text-white hover:underline" />
          </div>
        </div>

        {facts.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-brand-100/75">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <Check
                  size={15}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="shrink-0 text-brand-300"
                />
                {fact}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
