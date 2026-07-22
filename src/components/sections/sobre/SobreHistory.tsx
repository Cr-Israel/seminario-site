"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Linha do tempo institucional — marcos extraídos da página "Sobre nós" do
 * site antigo (seminariosimonton.com.br/bem-vindo/sobre-nos).
 *
 * Timeline horizontal scroll-driven: o wrapper é alto (N × 55vh) e o conteúdo
 * fica sticky ocupando a tela; o progresso do scroll dentro do wrapper define
 * qual marco está ativo — a bolinha ativa preenche em verde e o texto dela é
 * revelado, enquanto as demais voltam ao estado neutro. Marcos com foto do
 * acervo exibem-na ao lado do texto (só em telas largas, para não estourar a
 * altura da seção sticky).
 */
type Milestone = {
  year: string;
  text: string;
  image?: { src: string; alt: string; caption: string };
};

const milestones: Milestone[] = [
  {
    year: "1867",
    text: "O Rev. Ashbel Green Simonton, pioneiro do presbiterianismo no Brasil, funda no Rio de Janeiro o “Seminário Primitivo”, dando início à formação teológica presbiteriana no país.",
    image: {
      src: "/images/primeiro-seminario.jpeg",
      alt: "Reprodução histórica da fachada do Seminário Primitivo do Rio de Janeiro",
      caption: "O Seminário Primitivo do Rio de Janeiro",
    },
  },
  {
    year: "1888",
    text: "O Sínodo decide criar um seminário em Nova Friburgo/RJ — transferido para São Paulo dois anos depois.",
  },
  {
    year: "1982",
    text: "Uma extensão do Seminário Presbiteriano do Sul é instalada em Nova Iguaçu/RJ: nasce o embrião do atual Seminário Simonton.",
  },
  {
    year: "1984",
    text: "A extensão transfere-se para a Igreja Presbiteriana do Méier, sob a direção do Rev. Thiago Rodrigues Rocha.",
  },
  {
    year: "1986",
    text: "O Supremo Concílio da IPB a transforma no Seminário Teológico Presbiteriano do Rio de Janeiro.",
  },
  {
    year: "1992",
    text: "O Seminário passa a funcionar na Rua Joaquina Rosa, 199, no Méier, onde realiza seus vestibulares desde então.",
    image: {
      src: "/images/antiga-sede.jpeg",
      alt: "Fachada da antiga sede do Seminário, na Rua Joaquina Rosa, 199, com o letreiro Seminário Teológico Presbiteriano do Rio de Janeiro",
      caption: "A sede da Rua Joaquina Rosa, 199, no Méier",
    },
  },
  {
    year: "2006",
    text: "A instituição recebe o nome atual, em homenagem ao Rev. Ashbel Green Simonton.",
    image: {
      src: "/images/ashbel-green-simonton.png",
      alt: "Retrato do Rev. Ashbel Green Simonton",
      caption: "Rev. Ashbel Green Simonton, pioneiro do presbiterianismo no Brasil",
    },
  },
  {
    year: "2022",
    text: "Inauguração da nova sede — o Edifício Rev. Roberto Brasileiro Silva, na Rua Isolina, 151, Méier.",
    image: {
      src: "/images/seminario-frente.jpeg",
      alt: "Fachada de vidro da nova sede do Seminário Simonton, o Edifício Rev. Roberto Brasileiro Silva",
      caption: "O Edifício Rev. Roberto Brasileiro Silva, na Rua Isolina, 151",
    },
  },
];

export default function SobreHistory() {
  const wrapRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      setActive(
        Math.min(milestones.length - 1, Math.floor(progress * milestones.length)),
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Clicar numa bolinha rola a janela até o trecho do wrapper daquele marco. */
  const goTo = (index: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const elTop = window.scrollY + el.getBoundingClientRect().top;
    window.scrollTo({
      top: elTop + ((index + 0.5) / milestones.length) * scrollable,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: `${milestones.length * 55}vh` }}
    >
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              Nossa história
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
              Mais de um século e meio de formação teológica
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Fundado em 1986 pelo Supremo Concílio da IPB, a partir de uma
              extensão do Seminário Presbiteriano do Sul, o Simonton é herdeiro
              de uma trajetória que remonta ao próprio fundador do
              presbiterianismo brasileiro.
            </p>
          </div>

          {/* Trilha horizontal com as bolinhas */}
          <div className="relative mt-20">
            <span
              aria-hidden
              className="absolute left-3 right-3 top-[11px] h-0.5 bg-brand-200/60"
            />
            <ol className="relative flex items-start justify-between">
              {milestones.map((item, i) => (
                <li key={item.year}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ver marco de ${item.year}`}
                    aria-current={i === active ? "true" : undefined}
                    className="group flex cursor-pointer flex-col items-center gap-2.5"
                  >
                    <span
                      className={`h-6 w-6 rounded-full border-2 transition-all duration-300 motion-reduce:transition-none ${
                        i === active
                          ? "scale-125 border-brand-700 bg-brand-700 dark:border-brand-400 dark:bg-brand-400"
                          : "border-brand-200 bg-white group-hover:border-brand-400 dark:border-white/25 dark:bg-transparent"
                      }`}
                    />
                    <span
                      className={`font-serif text-xs font-bold transition-colors duration-300 motion-reduce:transition-none sm:text-lg ${
                        i === active
                          ? "text-brand-700"
                          : "text-stone-400 group-hover:text-stone-600"
                      }`}
                    >
                      {item.year}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Texto do marco ativo — todos empilhados na mesma célula do grid
              (altura = maior texto, sem layout shift); só o ativo é visível.
              Quando o marco tem foto do acervo, ela aparece à direita (lg+). */}
          <div className="mt-14 grid">
            {milestones.map((item, i) => (
              <div
                key={item.year}
                aria-hidden={i !== active}
                className={`[grid-area:1/1] transition-all duration-500 motion-reduce:transition-none ${
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }`}
              >
                <div className="flex items-start gap-12">
                  <div className="max-w-3xl flex-1">
                    <p className="font-serif text-4xl font-extrabold text-brand-700 sm:text-5xl">
                      {item.year}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-stone-600">
                      {item.text}
                    </p>
                  </div>
                  {item.image && (
                    <figure className="hidden w-60 shrink-0 lg:block xl:w-72">
                      <div className="relative aspect-[3/4] max-h-[38vh] w-full overflow-hidden rounded-sm border border-brand-900/10 bg-white">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="288px"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs leading-snug text-stone-500">
                        {item.image.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
