import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ModalidadeBadge from "@/components/ui/ModalidadeBadge";
import type { Modalidade, Nivel } from "@/data/cursos";

type Gateway = {
  nome: string;
  descricao: string;
  nivel: Nivel;
  modalidade: Modalidade;
  href: string;
  cta: string;
};

/**
 * Três portas de entrada para as trilhas de formação da casa — Bacharelado,
 * EFAL e Pós-graduação. Não é o comparador de cursos (esse mora nas páginas de
 * cada trilha); aqui é só o encaminhamento institucional, um card por trilha.
 *
 * EFAL e Pós apontam para /cursos-online (arquitetura "uma casa só" — não há
 * rotas /efal nem /pos); a Pós desce até a âncora #pos.
 */
const gateways: Gateway[] = [
  {
    nome: "Bacharelado em Teologia",
    descricao:
      "A formação teológica completa, presencial no Rio de Janeiro, para o preparo pastoral.",
    nivel: "bacharelado",
    modalidade: "presencial",
    href: "/graduacao",
    cta: "Conheça o curso",
  },
  {
    nome: "EFAL",
    descricao:
      "Cursos livres para capacitar líderes da igreja local, com aulas online ao vivo.",
    nivel: "curso-livre",
    modalidade: "online",
    href: "/cursos-online",
    cta: "Conheça os cursos",
  },
  {
    nome: "Pós-graduação",
    descricao:
      "Especialização teológica para aprofundar a formação de pastores e líderes.",
    nivel: "pos-graduacao",
    modalidade: "online",
    href: "/cursos-online#pos",
    cta: "Conheça os cursos",
  },
];

export default function CoursesGateway() {
  return (
    <section id="cursos" className="scroll-mt-24 bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Cursos e formação
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Um caminho de formação para cada etapa do chamado
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {gateways.map((gateway) => (
            <Link
              key={gateway.nome}
              href={gateway.href}
              className="group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              <ModalidadeBadge
                nivel={gateway.nivel}
                modalidade={gateway.modalidade}
              />
              <h3 className="mt-5 font-serif text-2xl font-bold text-brand-950">
                {gateway.nome}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {gateway.descricao}
              </p>
              <span className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
                {gateway.cta} <ArrowRight size={15} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
