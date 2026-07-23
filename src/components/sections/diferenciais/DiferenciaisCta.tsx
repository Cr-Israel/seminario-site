import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * CTA final da página de diferenciais — convite sóbrio para conhecer as
 * trilhas de curso ou falar com a secretaria, no padrão do CTA de /graduacao.
 */
export default function DiferenciaisCta() {
  return (
    <section className="bg-brand-950 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Venha conhecer esta casa
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-100/80">
            Do Bacharelado presencial aos cursos online da EFAL e da
            pós-graduação, há uma trilha de formação para a sua vocação.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            href="/#cursos"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Conheça nossos cursos <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
