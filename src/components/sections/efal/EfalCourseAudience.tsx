import type { EfalLanding } from "@/data/efalLandings";

/**
 * "Esse curso é para mim?" — pergunta, resposta corrida e uma faixa de quatro
 * perfis. Fica depois dos instrutores e antes do FAQ: quem chegou até aqui já
 * conhece o conteúdo e quem ensina, e a dúvida que sobra é se o curso serve
 * para ele. Server Component.
 */
export default function EfalCourseAudience({
  landing,
}: {
  landing: EfalLanding;
}) {
  const audience = landing.audience;
  if (!audience) return null;

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            {audience.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            {audience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            {audience.intro}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.profiles.map((profile) => (
            <li
              key={profile.title}
              className="flex flex-col rounded-sm bg-brand-800 p-7 transition-colors hover:bg-brand-700"
            >
              <profile.icon
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-brand-200"
              />
              <h3 className="mt-6 font-serif text-lg font-bold text-white">
                {profile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                {profile.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
