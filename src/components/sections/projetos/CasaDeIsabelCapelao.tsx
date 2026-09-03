import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { chaplaincyWhatsappHref } from "@/lib/whatsapp";

/**
 * Fecho da página: a palavra do capelão, que idealizou o projeto, e o caminho
 * direto para falar com ele. Reaproveita o cartão de vidro claro usado no
 * bloco da liderança em /sobre.
 */
export default function CasaDeIsabelCapelao() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-xl border border-brand-900/10 bg-brand-50/60 p-7 sm:p-10">
          <div className="flex items-center gap-5">
            <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/rev-adelino.jpg"
                alt="Rev. Adelino da Silva, capelão do Seminário Simonton"
                fill
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-xl font-bold text-brand-950 sm:text-2xl">
                Rev. Adelino da Silva
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-700">
                Capelão do STPS
              </p>
            </div>
          </div>

          <blockquote className="mt-7 font-serif text-lg italic leading-relaxed text-brand-900">
            &ldquo;Se puder e quiser, venha conosco!&rdquo;
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            A Casa de Isabel nasceu na capelania e é conduzida por ela. Para
            participar dos encontros, indicar uma irmã ou oferecer ajuda em
            qualquer das frentes, fale diretamente com o capelão.
          </p>

          <a
            href={chaplaincyWhatsappHref(
              "Olá, Rev. Adelino! Gostaria de saber mais sobre o projeto Casa de Isabel.",
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Falar com a capelania
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
