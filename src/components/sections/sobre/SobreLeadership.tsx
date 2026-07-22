import Image from "next/image";
import { Mail } from "lucide-react";

import DirectorMessageDialog from "@/components/sections/sobre/DirectorMessageDialog";
import ParallaxOrbs from "@/components/ui/ParallaxOrbs";

/**
 * Direção e capelania lado a lado — dois cartões de vidro fosco sobre o fundo
 * gradiente com orbs. Reúne o que antes eram as seções SobreDirector e
 * SobreChaplaincy; o diretor mantém o modal com a palavra de posse
 * (DirectorMessageDialog) e o capelão, o contato por e-mail.
 */
export default function SobreLeadership() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-100 to-brand-50 py-24">
      {/* Orbs verdes desfocados que acompanham o cursor: dão cor para o vidro
          fosco dos cartões refratar. */}
      <ParallaxOrbs />

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Direção e capelania
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Quem cuida desta casa
        </h2>

        <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
          {/* Diretor */}
          <div className="relative overflow-hidden rounded-xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_30px_rgba(0,65,23,0.08)] backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent sm:p-8">
            <div className="flex items-center gap-5">
              <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/rev-sergio-kitagawa.png"
                  alt="Rev. Dr. Sergio Kitagawa, diretor do Seminário Simonton"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-bold text-brand-950 sm:text-2xl">
                  Rev. Dr. Sergio Kitagawa
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-700">
                  Diretor
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                Ministro da Igreja Presbiteriana do Brasil desde 2010, o Rev.
                Sergio Kitagawa foi pastor auxiliar da 1ª Igreja Presbiteriana
                de Niterói por 14 anos (2009–2024) e atua na Igreja Presbiteriana
                do Sinai.
              </p>
              <p>
                É doutor em História Social pela UERJ, graduado em História pela
                UFF e em Teologia pelo próprio Seminário Simonton, com
                pós-graduação e mestrado em Teologia Histórica pelo Centro
                Presbiteriano de Pós-Graduação Andrew Jumper.
              </p>
              <p>
                Natural de Niterói, é casado com Jessica, pai de Benjamin e fã
                de ficção científica e literatura de fantasia.
              </p>
            </div>

            <DirectorMessageDialog />
          </div>

          {/* Capelão */}
          <div className="relative overflow-hidden rounded-xl border border-white/60 bg-white/55 p-6 shadow-[0_8px_30px_rgba(0,65,23,0.08)] backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent sm:p-8">
            <div className="flex items-center gap-5">
              <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/rev-adelino.jpg"
                  alt="Rev. Adelino da Silva, capelão do Seminário Simonton"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-bold text-brand-950 sm:text-2xl">
                  Rev. Adelino da Silva
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-700">
                  Capelão
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                O Seminário oferece suporte integral aos alunos por meio da
                capelania, que realiza as atividades religiosas da casa e o
                acompanhamento espiritual dos seminaristas, reforçando que, aqui,
                a vivência da fé caminha junto com a formação acadêmica.
              </p>
              <p>
                Sem devoção, não há formação: o cuidado pastoral com cada aluno
                e sua família faz parte do projeto formativo do STPS.
              </p>
            </div>

            <div className="mt-7">
              <a
                href="mailto:capelania.stps@ipb.org.br"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-700 px-6 py-3 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-700 hover:text-white"
              >
                <Mail size={16} /> capelania.stps@ipb.org.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
