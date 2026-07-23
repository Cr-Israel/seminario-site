import Image from "next/image";
import { docentes } from "@/data/docentes";

/** Iniciais para o avatar de quem ainda não tem foto no acervo. */
function initials(name: string) {
  return name
    .replace(/^(Rev\.|Profª|Prof\.)\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Corpo docente do Bacharelado — dados reais em src/data/docentes.ts. Cada card
 * mostra a foto (ou as iniciais), o nome, a credencial resumida e, quando há,
 * a função institucional (direção, decanato, coordenação, capelania).
 * TODO(conteúdo): fotos ausentes e bios completas ("Ler mais") em docentes.ts.
 */
export default function Faculty() {
  return (
    <section id="corpo-docente" className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Corpo docente
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Professores que unem rigor acadêmico e prática pastoral
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Mestres e doutores, muitos deles pastores em atuação, comprometidos
            com a formação integral de cada seminarista.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docentes.map((docente) => (
            <li
              key={docente.name}
              className="flex gap-4 rounded-sm border border-brand-900/10 bg-white p-6"
            >
              {docente.photo ? (
                <Image
                  src={docente.photo}
                  alt={`Retrato de ${docente.name}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span
                  aria-hidden
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-lg font-bold text-brand-800"
                >
                  {initials(docente.name)}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="font-serif text-base font-bold text-brand-950">
                  {docente.name}
                </h3>
                {docente.role && (
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-700">
                    {docente.role}
                  </p>
                )}
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {docente.credential}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
