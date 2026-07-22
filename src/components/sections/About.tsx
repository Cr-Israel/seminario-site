import { Church, Heart, Earth } from "lucide-react";

const pillars = [
  {
    icon: Church,
    title: "Teologia Reformada",
    text: "Como seminário confessional, zelamos pela Teologia Reformada, que reúne o melhor da reflexão e da sistematização teológica, sempre alicerçada na fidelidade às Escrituras Sagradas.",
  },
  {
    icon: Heart,
    title: "Piedade",
    text: "Como parte da Igreja de Cristo, valorizamos a piedade, reconhecendo que o temor do Senhor é o princípio da sabedoria. Cremos que fomos irresistivelmente vocacionados pelo Espírito Santo para uma íntima comunhão com o Pai, mediante Jesus Cristo, o Filho.",
  },
  {
    icon: Earth,
    title: "Proclamação do Evangelho",
    text: "Como casa de profetas, dedicamo-nos à proclamação do Evangelho, anunciando, com tudo o que somos, falamos e fazemos — dentro e fora da sala de aula — que Jesus Cristo é o Senhor, para a glória de Deus Pai.",
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
            Sem devoção, não há formação.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton é
            uma instituição cristã de ensino teológico e confissão de fé
            reformada, jurisdicionada à Igreja Presbiteriana do Brasil.
            Buscamos ser referência para o presbiterianismo, oferecendo
            sólido conhecimento bíblico-teológico, formando pastores que
            suprirão o sagrado ministério na IPB e aperfeiçoando
            líderes para a igreja local.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Unimos piedade à reflexão acadêmica, sob o referencial da
            teologia reformada, e o compromisso com a expansão do evangelho
            do Reino, cuidando também da formação integral de cada aluno e
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
