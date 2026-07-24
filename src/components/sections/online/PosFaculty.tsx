import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { posProfessors, type PosProfessor } from "@/data/posProfessors";

function initials(name: string) {
  const parts = name
    .replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase() || "?";
}

// A checagem roda no servidor (build): docente cujo arquivo de foto ainda não
// foi salvo em /public cai no avatar de iniciais em vez de quebrar a imagem.
function hasPhoto(professor: PosProfessor) {
  if (!professor.photo) return false;
  return existsSync(join(process.cwd(), "public", professor.photo));
}

/**
 * "Corpo docente da Pós-graduação" — grid de cards com foto, nome, credencial
 * e bio, no mesmo estilo dos cards de professores do Curso de Libras
 * (CourseProfessors). Server Component, renderizada dentro da aba
 * Pós-graduação do catálogo via slot (prop `posFaculty` de OnlineCourses).
 */
export default function PosFaculty() {
  return (
    <div className="mt-14">
      <div className="max-w-2xl">
        <h3 className="font-serif text-2xl font-bold text-brand-950">
          Corpo docente da Pós-graduação
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Pastores e pesquisadores que unem ministério e academia conduzem as
          disciplinas dos programas de pós.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posProfessors.map((professor) => (
          <div
            key={professor.slug}
            className="flex flex-col gap-4 rounded-sm border border-brand-900/10 bg-white p-6"
          >
            <div className="flex items-center gap-4">
              {hasPhoto(professor) ? (
                <Image
                  src={professor.photo!}
                  alt={professor.name}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-50 font-serif text-xl font-bold text-brand-800"
                >
                  {initials(professor.name)}
                </div>
              )}
              <div className="min-w-0">
                <h4 className="font-serif text-base font-bold text-brand-950">
                  {professor.name}
                </h4>
                {professor.credential !== "A confirmar" && (
                  <p className="mt-0.5 text-xs italic text-brand-700">
                    {professor.credential}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-600">
              {professor.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
