"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

export default function InterestForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar a um endpoint/serviço de e-mail (o back-end é feito
    // separadamente). Por ora só confirmamos a interação na interface.
    setSubmitted(true);
  }

  return (
    <section className="bg-brand-950 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
          Ainda não decidiu? Avise-me quando abrirem novas turmas
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-100/75">
          Deixe seu e-mail e avisamos assim que as inscrições das próximas
          turmas da EFAL e da Pós-graduação forem abertas.
        </p>

        {submitted ? (
          <div className="mx-auto mt-9 inline-flex items-center gap-3 rounded-sm bg-white/10 px-6 py-4 text-sm text-brand-100">
            <Check size={18} className="text-brand-200" />
            Pronto! Avisaremos você em <strong>{email}</strong> assim que houver
            novidade.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="interest-email" className="sr-only">
              Seu e-mail
            </label>
            <input
              id="interest-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu-email@exemplo.com"
              className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-brand-100/50 focus:border-brand-200/60 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-brand-50 px-6 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              <Send size={15} /> Avise-me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
