import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    text: "Rua Isolina, nº 151, Méier — Rio de Janeiro, RJ, CEP 20710-080",
  },
  { icon: Phone, text: "(21) 2201-6734" },
  { icon: Mail, text: "contato@seminariosimonton.com.br" },
  { icon: Clock, text: "Segunda a sexta-feira, das 13h às 20h" },
];

export default function ContactCta() {
  return (
    <section id="contato" className="bg-brand-950 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-300/90">
            Fale com a gente
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Dê o próximo passo na sua formação teológica
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-100/75">
            Nossa secretaria está pronta para tirar suas dúvidas sobre
            cursos, matrículas e datas de início das turmas.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent-500 px-7 py-3.5 text-sm font-medium text-brand-950 transition-colors hover:bg-accent-400"
          >
            Falar com a secretaria <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex flex-col gap-5 text-sm text-brand-100/85">
          {contactInfo.map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <item.icon size={18} className="mt-0.5 shrink-0 text-accent-300" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
