import Image from "next/image";
import { Mail, UserRound } from "lucide-react";
import type { Coordinator } from "@/data/coordinators";

function initials(name: string) {
  const parts = name
    .replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase() || "?";
}

/**
 * Bloco "Coordenação" das páginas de curso — mostra o coordenador do núcleo
 * e um contato direto por e-mail. O título é configurável para cursos com
 * mais de uma coordenação (ex.: Bacharelado tem também a pedagógica).
 */
export default function CourseCoordinator({
  coordinator,
  title = "Coordenação do Curso",
}: {
  coordinator: Coordinator;
  title?: string;
}) {
  return (
    <div className="mt-10">
      <h2 className="font-serif text-xl font-bold text-brand-950">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        {coordinator.photo ? (
          <Image
            src={coordinator.photo}
            alt={coordinator.name}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full object-cover ring-2 ring-brand-50"
          />
        ) : (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950 text-white/90 ring-2 ring-brand-50">
            {coordinator.name === "A definir" ? (
              <UserRound size={32} strokeWidth={1.5} />
            ) : (
              <span className="font-serif text-2xl font-bold">
                {initials(coordinator.name)}
              </span>
            )}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-bold text-brand-950">
            {coordinator.name}
          </h3>
          <p className="mt-1 text-sm text-stone-600">
            {coordinator.credential ?? coordinator.role}
          </p>
          <a
            href={`mailto:${coordinator.email}`}
            className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-brand-900/10 bg-brand-50/60 px-3.5 py-1.5 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-950"
          >
            <Mail size={15} className="shrink-0" />
            <span className="truncate">{coordinator.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
