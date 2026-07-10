import Image from "next/image";
import type { EfalProfessor } from "@/data/efal";

/**
 * Seção "Professoras do curso" — cards com foto redonda, nome, credencial
 * (opcional) e bio. Reaproveita a estética do CourseCoordinator. Renderizada
 * apenas quando o curso define `professors`.
 */
export default function CourseProfessors({
  professors,
}: {
  professors: EfalProfessor[];
}) {
  if (professors.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="font-serif text-xl font-bold text-brand-950">
        Professoras do curso
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {professors.map((professor) => (
          <div
            key={professor.name}
            className="flex flex-col gap-4 rounded-sm border border-brand-900/10 bg-white p-6"
          >
            <div className="flex items-center gap-4">
              <Image
                src={professor.photo}
                alt={professor.name}
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <h3 className="font-serif text-base font-bold text-brand-950">
                  {professor.name}
                </h3>
                {professor.credential && (
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
