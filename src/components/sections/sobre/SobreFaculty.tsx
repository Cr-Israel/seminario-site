import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facultyDirectory } from "@/data/facultyDirectory";

/** Quantos rostos mostrar no resumo antes do "+n" que convida ao clique. */
const MAX_FACES = 6;

/**
 * Resumo do corpo docente na página Sobre — amostra de rostos (facepile) que
 * remete ao diretório completo em /corpo-docente, sem duplicar a listagem.
 * Só entram docentes com foto cadastrada.
 */
export default function SobreFaculty() {
  const withPhoto = facultyDirectory.filter((member) => member.photo);
  const faces = withPhoto.slice(0, MAX_FACES);
  const remaining = facultyDirectory.length - faces.length;

  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Corpo docente
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Professores que unem rigor acadêmico e prática pastoral
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600">
          O ensino do Seminário está a cargo de doutores, mestres e
          professores, comprometidos com a formação integral de cada
          seminarista.
        </p>

        <ul className="mt-10 flex justify-center">
          {faces.map((member, index) => (
            <li
              key={member.name}
              className={index > 0 ? "-ml-4" : undefined}
              style={{ zIndex: index }}
            >
              <Image
                src={member.photo!}
                alt={member.name}
                title={member.name}
                width={64}
                height={64}
                className="h-14 w-14 rounded-full object-cover ring-4 ring-brand-50 sm:h-16 sm:w-16"
              />
            </li>
          ))}
          {remaining > 0 && (
            <li className="-ml-4" style={{ zIndex: faces.length }}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-800 text-sm font-semibold text-white ring-4 ring-brand-50 sm:h-16 sm:w-16">
                +{remaining}
              </span>
            </li>
          )}
        </ul>

        <Link
          href="/corpo-docente"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-transform hover:translate-x-0.5"
        >
          Conheça o corpo docente <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
