import { ArrowRight } from "lucide-react";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import EfalDescontosDialog from "./EfalDescontosDialog";
import EfalEnrollButton from "./EfalEnrollButton";
import type { EfalCourse } from "@/data/efal";
import type { EfalLanding } from "@/data/efalLandings";
import { whatsappHref } from "@/lib/whatsapp";

/**
 * CTA que fecha a seção "Esse curso é para mim?" — emenda na identificação que
 * o leitor acabou de fazer com um dos perfis.
 *
 * Ângulo próprio para não repetir os outros dois CTAs da página: a faixa
 * intermediária argumenta com o formato do curso e o CTA final é a matrícula;
 * aqui o trabalho é tirar o medo do clique, descrevendo o que a inscrição pede
 * e o que acontece depois. Layout centralizado, também para não repetir o
 * texto-à-esquerda/botão-à-direita dos outros. Server Component.
 */
export default function EfalCourseCtaInvite({
  course,
  landing,
}: {
  course: EfalCourse;
  landing: EfalLanding;
}) {
  const invite = landing.ctaInvite;
  if (!invite) return null;

  return (
    <section className="bg-brand-900">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          {invite.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-100/80">
          {invite.description}
        </p>

        {course.price && (
          <p className="mt-6 text-sm text-brand-100/70">
            <span className="font-serif text-xl font-bold text-white">
              {course.price.installments}
            </span>{" "}
            · total {course.price.total}
          </p>
        )}

        {landing.descontos && (
          <EfalDescontosDialog
            course={course}
            className="mx-auto mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Há descontos de até 50% — ver quem tem direito
          </EfalDescontosDialog>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EfalEnrollButton
            course={course}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-50 px-8 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white sm:w-auto"
          >
            Quero me inscrever <ArrowRight size={16} aria-hidden="true" />
          </EfalEnrollButton>

          <a
            href={whatsappHref(
              `Olá! Gostaria de saber mais sobre o ${course.title} (${course.code}).`,
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
