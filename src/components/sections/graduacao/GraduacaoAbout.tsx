import { departamentos } from "@/data/graduacao";

/**
 * "Sobre o curso" — descrição oficial e os cinco departamentos em que se
 * dividem as disciplinas, apresentados como chips.
 */
export default function GraduacaoAbout() {
  return (
    <section id="sobre-o-curso" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Sobre o curso
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Currículo aprovado pela Igreja Presbiteriana do Brasil
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600">
          Nosso curso busca fornecer aos alunos uma sólida formação na teologia
          reformada. As disciplinas refletem o currículo aprovado pela Igreja
          Presbiteriana do Brasil para todos os seus seminários, divididas em
          cinco departamentos.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-3">
        {departamentos.map((dep) => (
          <li
            key={dep}
            className="rounded-full border border-brand-900/15 bg-white px-5 py-2 text-sm font-medium text-brand-800"
          >
            {dep}
          </li>
        ))}
      </ul>
    </section>
  );
}
