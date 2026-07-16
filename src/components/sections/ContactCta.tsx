"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
  LoaderCircle,
} from "lucide-react";
import { cursos } from "@/data/cursos";
import { submitContactForm, type ContactFormData } from "@/lib/forms";
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

const textFields = [
  {
    id: "contato-nome",
    name: "name" as const,
    label: "Nome completo",
    type: "text",
    placeholder: "Seu nome",
    autoComplete: "name",
  },
  {
    id: "contato-telefone",
    name: "phone" as const,
    label: "Telefone / WhatsApp",
    type: "tel",
    placeholder: "(21) 99999-9999",
    autoComplete: "tel",
  },
  {
    id: "contato-email",
    name: "email" as const,
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com",
    autoComplete: "email",
  },
];

const emptyForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

const inputClass =
  "rounded-sm border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-100/40 outline-none transition-colors focus:border-brand-200/60 focus:bg-white/15";

const labelClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-brand-200/90";

/** Validação básica no cliente; o back-end fará a validação definitiva. */
function validate(data: ContactFormData): string | null {
  if (!data.name.trim()) return "Informe seu nome.";
  if (!/^[\d\s()+.-]{8,}$/.test(data.phone.trim())) {
    return "Informe um telefone válido, com DDD.";
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    return "Informe um e-mail válido.";
  }
  if (!data.course) return "Selecione o curso de interesse.";
  return null;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactCta() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function setField(name: keyof ContactFormData, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("loading");
    try {
      const result = await submitContactForm(form);
      setStatus(result.ok ? "success" : "error");
      if (!result.ok) setError("Não foi possível enviar. Tente novamente.");
    } catch {
      setStatus("error");
      setError("Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <section id="contato" className="scroll-mt-24 bg-brand-950 py-24">
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

          {status === "success" ? (
            <div className="flex items-start gap-3 self-start rounded-xl border border-white/15 bg-white/5 p-8 text-sm leading-relaxed text-brand-100 backdrop-blur">
              <Check size={18} className="mt-0.5 shrink-0 text-brand-200" />
              <p>
                Recebemos seus dados{form.name ? `, ${form.name.split(/\s+/)[0]}` : ""}.
                A secretaria entrará em contato em breve para conversar sobre{" "}
                <strong>{form.course}</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Quero receber contato
                </h3>
                <p className="mt-1 text-sm text-brand-100/70">
                  Preencha seus dados e retornaremos em breve.
                </p>
              </div>

              {textFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label htmlFor={field.id} className={labelClass}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required
                    value={form[field.name]}
                    onChange={(e) => setField(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    className={inputClass}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contato-curso" className={labelClass}>
                  Curso de interesse
                </label>
                <select
                  id="contato-curso"
                  name="course"
                  required
                  value={form.course}
                  onChange={(e) => setField("course", e.target.value)}
                  className={`${inputClass} [&>option]:text-stone-900`}
                >
                  <option value="" disabled>
                    Selecione um curso
                  </option>
                  {cursos.map((curso) => (
                    <option key={curso.slug} value={curso.nome}>
                      {curso.nome}
                    </option>
                  ))}
                  <option value="Ainda não decidi">Ainda não decidi</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contato-mensagem" className={labelClass}>
                  Mensagem
                </label>
                <textarea
                  id="contato-mensagem"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  placeholder="Conte-nos como podemos ajudar (opcional)"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <LoaderCircle size={16} className="animate-spin" /> Enviando…
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          )}
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
