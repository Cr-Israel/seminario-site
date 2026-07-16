import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  juretPresidente,
  juretTitulares,
  juretSuplentes,
  type JuretMember,
} from "@/data/juret";

function initials(name: string) {
  const parts = name
    .replace(/^(Rev\.|Presb\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase() || "?";
}

function MemberCard({ member }: { member: JuretMember }) {
  return (
    <div className="flex items-center gap-4 rounded-sm border border-brand-900/10 bg-white p-5">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-50 font-serif text-base font-bold text-brand-800">
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="font-serif text-sm font-bold leading-snug text-brand-950">
          {member.name}
        </p>
        {member.role && (
          <p className="mt-0.5 text-xs font-medium text-brand-700">
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * JURET-Rio — a Junta Regional de Educação Teológica que superintende o
 * Seminário, elo institucional entre a casa e a IPB. Presidente em destaque
 * (com foto), demais titulares e suplentes em cards; composição conforme a
 * página oficial da IPB (fonte em src/data/juret.ts).
 */
export default function SobreJuret() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Supervisão eclesiástica
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          JURET-Rio
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
          A Junta Regional de Educação Teológica (JURET) é o órgão da Igreja
          Presbiteriana do Brasil responsável por superintender a administração
          dos seminários de sua região, subordinado à Junta de Educação
          Teológica (JET). É composta por cinco membros — três pastores e dois
          presbíteros — eleitos pelo Supremo Concílio da IPB. A JURET-Rio
          supervisiona o Seminário Simonton e outorga a certificação dos
          cursos da EFAL.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-14">
          {/* Presidente em destaque */}
          <div className="flex flex-col items-center rounded-sm border border-brand-900/10 bg-brand-50/60 p-8 text-center">
            <div className="h-36 w-36 overflow-hidden rounded-full ring-2 ring-brand-900/10">
              {juretPresidente.photo && (
                <Image
                  src={juretPresidente.photo}
                  alt={juretPresidente.name}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <h3 className="mt-6 font-serif text-xl font-bold text-brand-950">
              {juretPresidente.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-700">
              {juretPresidente.role} da JURET-Rio
            </p>
          </div>

          {/* Demais membros */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Membros titulares
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {juretTitulares.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>

            <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              Membros suplentes
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {juretSuplentes.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>

            <a
              href="https://www.ipb.org.br/junta-regional-de-educacao-teologica"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-800 transition-colors hover:text-brand-700"
            >
              Composição oficial no site da IPB <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
