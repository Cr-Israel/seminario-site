import { BadgeCheck, Church, GraduationCap, HeartHandshake } from "lucide-react";

/**
 * Prova de valor em 4 cards — reconhecimento eclesiástico, tradição, corpo
 * docente e formação integral. Texto extraído de About/Differentiators; com o
 * "Quem somos" completo morando na página Sobre, este bloco resume a
 * identidade da casa na Home.
 */
const highlights = [
  {
    icon: BadgeCheck,
    title: "Reconhecimento",
    text: "Currículo aprovado pelo Supremo Concílio da IPB e certificação pela JURET, a Junta Regional de Educação Teológica.",
  },
  {
    icon: Church,
    title: "Tradição",
    text: "Desde 1986 formando pastores e líderes para o sagrado ministério na IPB e para a igreja local.",
  },
  {
    icon: GraduationCap,
    title: "Corpo docente",
    text: "Mestres e doutores que unem rigor acadêmico e prática pastoral, em atuação nas igrejas.",
  },
  {
    icon: HeartHandshake,
    title: "Formação integral",
    text: "Piedade unida à reflexão acadêmica, com cuidado pela formação de cada aluno e de sua família.",
  },
];

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-sm border border-brand-900/10 bg-white p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
              <Icon size={22} aria-hidden />
            </div>
            <h3 className="mt-5 font-serif text-lg font-bold text-brand-950">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
