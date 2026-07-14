import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const contactInfo = [
  {
    icon: MapPin,
    text: "Rua Isolina, nº 151, Méier, Rio de Janeiro, RJ, CEP 20710-080",
  },
  { icon: Phone, text: "(21) 2201-6734" },
  {
    icon: Mail,
    text: "secretaria.stps@ipb.org.br",
    href: "mailto:secretaria.stps@ipb.org.br",
  },
  { icon: Clock, text: "Segunda a sexta-feira, das 13h às 20h" },
];

const formFields = [
  {
    id: "contato-nome",
    label: "Nome completo",
    type: "text",
    placeholder: "Seu nome",
    autoComplete: "name",
  },
  {
    id: "contato-telefone",
    label: "Telefone / WhatsApp",
    type: "tel",
    placeholder: "(21) 99999-9999",
    autoComplete: "tel",
  },
  {
    id: "contato-email",
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com",
    autoComplete: "email",
  },
];

export default function ContactCta() {
  return (
    <section id="contato" className="bg-brand-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              Fale com a gente
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Dê o próximo passo na sua formação teológica
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-100/75">
              Deixe seus dados que a nossa secretaria entra em contato com
              você, ou fale direto com a gente para tirar dúvidas sobre cursos,
              matrículas e datas de início das turmas.
            </p>

            <div className="mt-8 flex flex-col gap-5 text-sm text-brand-100/85">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-200"
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Falar com a secretaria <ArrowRight size={16} />
            </a>
          </div>

          {/* Formulário de interesse — AINDA NÃO FUNCIONAL: os campos não são
              enviados a lugar nenhum (o botão é type="button" e não há
              action/onSubmit). Quando o back-end existir, trocar o botão para
              type="submit" e ligar o envio ao endpoint. */}
          <form className="flex flex-col gap-5 rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Quero receber contato
              </h3>
              <p className="mt-1 text-sm text-brand-100/70">
                Preencha seus dados e retornaremos em breve.
              </p>
            </div>

            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium uppercase tracking-[0.14em] text-brand-200/90"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-100/40 outline-none transition-colors focus:border-brand-200/60 focus:bg-white/15"
                />
              </div>
            ))}

            <button
              type="button"
              className="mt-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Mapa da sede — Edifício Rev. Roberto Brasileiro Silva. */}
        <div className="mt-14 overflow-hidden rounded-xl border border-white/15">
          <iframe
            src="https://www.google.com/maps?q=Rua+Isolina,+151,+M%C3%A9ier,+Rio+de+Janeiro+-+RJ,+20710-080&output=embed"
            title="Mapa: Seminário Simonton, Rua Isolina, 151, Méier, Rio de Janeiro"
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
