import Image from "next/image";
import { facultyDirectory, courseTitleByCode } from "@/data/facultyDirectory";

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

/**
 * Diretório completo do corpo docente — um card por docente, com foto (ou
 * iniciais), credencial, chips dos cursos em que leciona e bio quando já
 * disponível. Os dados vêm de facultyDirectory (grades EFAL + Pós).
 */
export default function FacultyDirectory() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-6 md:grid-cols-2">
          {facultyDirectory.map((member) => (
            <article
              key={member.name}
              className="rounded-xl border border-brand-900/10 bg-white p-7"
            >
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-100">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-300">
                      <span className="font-serif text-2xl font-bold text-brand-900">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="font-serif text-lg font-bold leading-snug text-brand-950">
                    {member.name}
                  </h2>
                  {member.credential && (
                    <p className="mt-1 text-sm italic text-stone-500">
                      {member.credential}
                    </p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {member.courses.map((code) => (
                      <span
                        key={code}
                        title={courseTitleByCode[code]}
                        className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-800"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {member.bio && (
                <p className="mt-5 text-sm leading-relaxed text-stone-600">
                  {member.bio}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Legenda dos códigos de curso usados nos chips. */}
        <dl className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-stone-400">
          {Object.entries(courseTitleByCode).map(([code, title]) => (
            <div key={code} className="flex gap-1.5">
              <dt className="font-semibold uppercase tracking-wider">
                {code}
              </dt>
              <dd>— {title}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
