import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  course: string;
  text: string;
  initials: string;
};

// TODO: substituir por depoimentos reais de alunos (coletar com a
// secretaria/marketing). Nomes, textos e "fotos" (círculo com iniciais)
// abaixo são placeholders genéricos, fáceis de trocar — ao receber os
// depoimentos reais, incluir também a foto (campo photo + next/image).
const testimonials: Testimonial[] = [
  {
    name: "Aluno do CIT",
    course: "Curso Introdutório de Teologia — turma 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    initials: "AC",
  },
  {
    name: "Aluna do Curso de Libras",
    course: "Curso de Libras — turma 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    initials: "AL",
  },
  {
    name: "Aluno do CFO",
    course: "Curso de Formação de Oficiais — turma 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.",
    initials: "AF",
  },
];

/** Prova social do marketplace — depoimentos curtos de ex-alunos. */
export default function OnlineTestimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Prova social
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Quem estudou, recomenda
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.course}
              className="flex h-full flex-col rounded-sm border border-brand-900/10 bg-brand-50/40 p-7 shadow-sm"
            >
              <Quote size={22} className="text-brand-400" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-5">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 font-serif text-sm font-bold text-brand-800"
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-950">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-stone-500">{testimonial.course}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
