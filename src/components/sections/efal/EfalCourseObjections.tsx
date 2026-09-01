import type { EfalLanding } from "@/data/efalLandings";

/**
 * Quebra de objeções — grade de cards, dois por linha a partir de sm. O
 * conteúdo é próprio de cada curso (efalLandings.ts). Server Component.
 */
export default function EfalCourseObjections({
  landing,
}: {
  landing: EfalLanding;
}) {
  const objections = landing.objections;
  if (!objections) return null;

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            {objections.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            {objections.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {objections.items.map((item) => (
            <li
              key={item.title}
              className="rounded-sm border border-brand-900/10 bg-white p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-800">
                <item.icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
