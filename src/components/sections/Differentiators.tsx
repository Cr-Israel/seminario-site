import { ScrollText } from "lucide-react";

const reasons = [
  {
    title: "Corpo docente qualificado",
    text: "Professores mestres e doutores, muitos deles pastores em atuação, unindo rigor acadêmico à experiência pastoral.",
  },
  {
    title: "Flexibilidade sem perder o acompanhamento",
    text: "Cursos presenciais e 100% online, sempre com interação real entre aluno e professor — nada de aula gravada sem suporte.",
  },
  {
    title: "Reconhecimento institucional",
    text: "Currículo aprovado pelo Supremo Concílio da IPB e certificações outorgadas pela Junta Regional de Educação Teológica.",
  },
];

export default function Differentiators() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-sm bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-10 text-white">
            <ScrollText size={28} strokeWidth={1.5} className="text-brand-200" />
            <p className="mt-8 font-serif text-2xl italic leading-snug">
              &ldquo;Sede fortes e corajosos, não temais, nem vos
              atemorizeis diante deles, porque o Senhor, vosso Deus, é quem
              vai convosco.&rdquo;
            </p>
            <p className="mt-6 text-sm text-brand-200/70">Deuteronômio 31:6</p>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 items-center justify-center rounded-full bg-brand-50 text-center font-serif text-sm font-semibold text-brand-900 shadow-lg sm:flex">
            Desde
            <br />
            1982
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Por que estudar aqui
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Formação séria, para quem leva a fé a sério
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {reasons.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <span className="font-serif text-2xl font-extrabold text-brand-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
