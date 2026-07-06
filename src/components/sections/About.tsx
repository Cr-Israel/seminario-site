import { Church, ScrollText, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Church,
    title: "Soberania de Deus e Escritura",
    text: "A Bíblia como palavra de Deus inspirada, inerrante e suficiente — única regra de fé e prática.",
  },
  {
    icon: ScrollText,
    title: "Confissão de Westminster",
    text: "Fiéis exposições doutrinárias que orientam todo o currículo acadêmico do Seminário.",
  },
  {
    icon: HeartHandshake,
    title: "Formação integral",
    text: "Acolhimento de alunos e famílias, com projetos como a Casa de Isabel, cuidando de quem caminha ao lado do seminarista.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Quem somos
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Sem devoção não há formação
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton é
            uma instituição cristã de ensino teológico e confissão de fé
            reformada, jurisdicionada à Igreja Presbiteriana do Brasil.
            Buscamos ser referência para o presbiterianismo, oferecendo
            sólido conhecimento bíblico-teológico e formando pastores que
            suprirão o sagrado ministério na IPB.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Unimos piedade à reflexão acadêmica, sob o referencial da
            teologia reformada, e o compromisso com a expansão do evangelho
            do Reino — cuidando também da formação integral de cada aluno e
            de sua família.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-sm border border-stone-100 bg-white p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <item.icon size={18} strokeWidth={1.75} />
              </div>
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
    </section>
  );
}
