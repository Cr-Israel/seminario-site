import Image from "next/image";
import { Mail } from "lucide-react";

/**
 * Capelania — suporte espiritual aos alunos, sob responsabilidade do
 * Rev. Adelino da Silva. Conteúdo do site antigo.
 */
export default function SobreChaplaincy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
        Cuidado pastoral
      </span>
      <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
        Capelania
      </h2>

      <div className="mt-12 flex flex-col items-start gap-10 rounded-sm border border-brand-900/10 bg-white p-6 sm:p-10 md:flex-row-reverse md:gap-14">
        <div className="w-full max-w-[15rem] shrink-0 overflow-hidden rounded-xl md:max-w-[17rem]">
          <Image
            src="/images/rev-adelino.jpg"
            alt="Rev. Adelino da Silva, capelão do Seminário Simonton"
            width={960}
            height={1280}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-serif text-2xl font-bold text-brand-950 sm:text-3xl">
            Rev. Adelino da Silva
          </h3>
          <p className="mt-1 text-sm font-medium text-brand-700">Capelão</p>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            O Seminário oferece suporte integral aos alunos por meio da
            capelania, que realiza as atividades religiosas da casa e o
            acompanhamento espiritual dos seminaristas, reforçando que, aqui, a
            vivência da fé caminha junto com a formação acadêmica.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Sem devoção, não há formação: o cuidado pastoral com cada aluno e
            sua família faz parte do projeto formativo do STPS.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:capelania.stps@ipb.org.br"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-700 px-6 py-3 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-700 hover:text-white"
            >
              <Mail size={16} /> capelania.stps@ipb.org.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
