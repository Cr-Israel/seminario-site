"use client";

import { useState } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";
import { efalCourses } from "@/data/efal";
import { posCourses } from "@/data/pos";
import { enviarContato } from "@/app/actions/contato";

const textFields = [
  {
    id: "interest-name",
    name: "name",
    label: "Nome completo",
    type: "text",
    placeholder: "Seu nome",
    autoComplete: "name",
  },
  {
    id: "interest-phone",
    name: "phone",
    label: "Telefone / WhatsApp",
    type: "tel",
    placeholder: "(21) 99999-9999",
    autoComplete: "tel",
  },
  {
    id: "interest-email",
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com",
    autoComplete: "email",
  },
];

export default function InterestForm() {
  const [submitted, setSubmitted] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    setError(null);
    setSending(true);
    try {
      // Mesma planilha do formulário de contato da Home; a mensagem fixa
      // identifica a origem "avise-me" na coluna mensagem.
      const result = await enviarContato({
        nome: name,
        telefone: String(data.get("phone") ?? "").trim(),
        email,
        cursoInteresse: String(data.get("course") ?? ""),
        mensagem: "Avise-me quando abrirem novas turmas.",
        website: String(data.get("website") ?? "") || undefined,
      });
      if (result.ok) {
        setSubmitted({
          name: name.split(/\s+/)[0] ?? "",
          email,
        });
      } else {
        setError("Não foi possível enviar. Tente novamente.");
      }
    } catch {
      setError("Não foi possível enviar. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="bg-brand-950 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
            Próximas turmas
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Ainda não decidiu? Avise-me quando abrirem novas turmas
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-100/75">
            Deixe seus dados e o curso do seu interesse: avisamos você assim
            que as inscrições das próximas turmas da EFAL e da Pós-graduação
            forem abertas.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-8 text-sm leading-relaxed text-brand-100 backdrop-blur">
            <Check size={18} className="mt-0.5 shrink-0 text-brand-200" />
            <p>
              Pronto{submitted.name ? `, ${submitted.name}` : ""}! Avisaremos
              você em <strong>{submitted.email}</strong> assim que houver
              novidade.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur"
          >
            {textFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label
                  htmlFor={field.id}
                  className="text-xs font-medium uppercase tracking-[0.14em] text-brand-200/90"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-100/40 outline-none transition-colors focus:border-brand-200/60 focus:bg-white/15"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="interest-course"
                className="text-xs font-medium uppercase tracking-[0.14em] text-brand-200/90"
              >
                Curso de interesse
              </label>
              <select
                id="interest-course"
                name="course"
                required
                defaultValue=""
                className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-200/60 focus:bg-white/15 [&>optgroup]:text-stone-900 [&>option]:text-stone-900"
              >
                <option value="" disabled>
                  Selecione um curso
                </option>
                <optgroup label="EFAL">
                  {efalCourses.map((course) => (
                    <option key={course.slug} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Pós-graduação">
                  {posCourses.map((course) => (
                    <option key={course.slug} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </optgroup>
                <option value="Ainda não decidi">Ainda não decidi</option>
              </select>
            </div>

            {/* Honeypot anti-spam: invisível e fora do fluxo de teclado. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              defaultValue=""
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            {error && (
              <p role="alert" className="text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? (
                <>
                  <LoaderCircle size={15} className="animate-spin" /> Enviando…
                </>
              ) : (
                <>
                  <Send size={15} /> Avise-me
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
