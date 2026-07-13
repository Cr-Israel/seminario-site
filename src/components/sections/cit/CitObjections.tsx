import {
  ArrowUpRight,
  Clock,
  GraduationCap,
  ImageIcon,
  Layers,
  type LucideIcon,
} from "lucide-react";

type Objection = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const objections: Objection[] = [
  {
    icon: GraduationCap,
    title: "Achei que teologia era só para pastores",
    text: "O CIT é o primeiro contato do aluno com o conhecimento produzido no ambiente acadêmico do Seminário. Vai além da Escola Dominical e não exige nenhuma formação teológica prévia — é feito para líderes já atuantes e para cristãos em geral que querem se aprofundar.",
  },
  {
    icon: Clock,
    title: "Não tenho tempo nem como me deslocar",
    text: "As aulas são 100% online e ao vivo (não são gravações), em horário marcado. Você estuda de qualquer lugar do Brasil e conclui o curso em até 6 meses.",
  },
  {
    icon: Layers,
    title: "Será que é aprofundado o suficiente?",
    text: "São 8 disciplinas e 32 aulas, ministradas por reverendos, cobrindo Antigo e Novo Testamento, teologia reformada, história da Igreja, interpretação bíblica, aconselhamento cristão e evangelismo prático.",
  },
  {
    icon: ArrowUpRight,
    title: "E o que vem depois do curso?",
    text: "O CIT é o degrau anterior ao Curso Livre de Bacharel em Teologia. Ao concluir, você recebe certificado do Seminário e fica preparado para avançar na formação teológica.",
  },
];

/**
 * Quebra de objeções — blocos laterais alternando o lado do texto e da imagem
 * (esquerda/direita) a cada bloco. Server Component.
 */
export default function CitObjections() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Ainda em dúvida?
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            O que costuma frear quem quer começar
          </h2>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-20">
          {objections.map((item, i) => {
            const textRight = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={textRight ? "lg:order-2" : ""}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-50 text-brand-800">
                    <item.icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-stone-600">
                    {item.text}
                  </p>
                </div>

                {/* TODO: imagem — ilustração/foto do bloco de objeção */}
                <div
                  className={`flex aspect-[4/3] items-center justify-center rounded-sm border border-brand-900/10 bg-gradient-to-br from-brand-50 to-brand-100 ${
                    textRight ? "lg:order-1" : ""
                  }`}
                >
                  <ImageIcon
                    size={40}
                    strokeWidth={1.25}
                    aria-hidden="true"
                    className="text-brand-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
