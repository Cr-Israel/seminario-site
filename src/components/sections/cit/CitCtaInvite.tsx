import { ArrowRight } from "lucide-react";
import { getEfalCourse } from "@/data/efal";
import InscricaoButton from "@/components/inscricao/InscricaoButton";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import CitDescontosDialog from "./CitDescontosDialog";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * CTA que fecha a seção "Esse curso é para mim?" — emenda na identificação que
 * o leitor acabou de fazer com um dos perfis.
 *
 * Ângulo próprio para não repetir os outros dois CTAs da página: o CitCtaBand
 * argumenta com o formato do curso e o CitEnroll é a matrícula final; aqui o
 * trabalho é tirar o medo do clique, descrevendo o que o formulário pede e o
 * que acontece depois. Layout centralizado, também para não repetir o
 * texto-à-esquerda/botão-à-direita dos outros. Server Component.
 */
export default function CitCtaInvite() {
  const course = getEfalCourse("cit");

  return (
    <section className="bg-brand-900">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          Se reconheceu em algum desses perfis?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-100/80">
          A inscrição leva um minuto e pede só nome, telefone e e-mail. A
          secretaria entra em contato para concluir a matrícula e tirar as
          últimas dúvidas antes de você começar.
        </p>

        {course?.price && (
          <p className="mt-6 text-sm text-brand-100/70">
            <span className="font-serif text-xl font-bold text-white">
              {course.price.installments}
            </span>{" "}
            · total {course.price.total}
          </p>
        )}

        <CitDescontosDialog className="mx-auto mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 underline-offset-4 transition-colors hover:text-white hover:underline">
          Há descontos de até 50% — ver quem tem direito
        </CitDescontosDialog>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <InscricaoButton
            curso={course?.title ?? "Curso Introdutório de Teologia"}
            origem={course?.origem ?? "efal"}
            codigo={course?.codigo ?? "CIT"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-50 px-8 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white sm:w-auto"
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <WhatsappIcon size={17} />
            Falar com o nosso time
          </a>
        </div>
      </div>
    </section>
  );
}
