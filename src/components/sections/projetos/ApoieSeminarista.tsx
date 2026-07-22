import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Convite ao sustento de seminaristas — igrejas e irmãos que desejam
 * participar da formação de futuros pastores. Página do projeto em /apoie-um-seminarista.
 */
export default function ApoieSeminarista() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Participe desta obra
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Apoie um seminarista
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
          Formar um pastor é uma obra de toda a igreja. Muitos seminaristas
          deixam cidade e trabalho para se dedicar aos anos de preparo, e o
          sustento deles depende da comunhão de igrejas e irmãos que abraçam
          essa causa. Ao apoiar um seminarista, você participa diretamente do
          ministério que ele exercerá.
        </p>
        {/* TODO(conteúdo): definir os canais reais de apoio (PIX, dados
            bancários, contato da tesouraria) e substituir o placeholder. */}
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600">
          [PLACEHOLDER] Informações sobre como contribuir — PIX, dados
          bancários e contato da tesouraria.
        </p>
        <Link
          href="/#contato"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-700 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-800"
        >
          Quero apoiar
          <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
