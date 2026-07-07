import Image from "next/image";
import { Mail, UserRound } from "lucide-react";
import type { Coordinator } from "@/data/coordinators";

function initials(name: string) {
  const parts = name.replace(/^Rev\.?\s+/i, "").trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase() || "?";
}

/**
 * Bloco "Coordenação" das páginas de curso — mostra o coordenador do núcleo
 * e um contato direto por e-mail.
 */
export default function CourseCoordinator({
  coordinator,
}: {
  coordinator: Coordinator;
}) {
  return (
    <div className="mt-10">
      <h2 className="font-serif text-xl font-bold text-brand-950">
        Coordenação
      </h2>
      <div className="mt-4 flex flex-col gap-5 rounded-sm border border-brand-900/10 bg-white p-6 sm:flex-row sm:items-center">
        {coordinator.photo ? (
          <Image
            src={coordinator.photo}
            alt={coordinator.name}
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800">
            {coordinator.name === "A definir" ? (
              <UserRound size={30} strokeWidth={1.5} />
            ) : (
              <span className="font-serif text-xl font-bold">
                {initials(coordinator.name)}
              </span>
            )}
          </div>
        )}
        <div>
          <h3 className="font-serif text-lg font-bold text-brand-950">
            {coordinator.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-brand-700">
            {coordinator.role}
          </p>
          <a
            href={`mailto:${coordinator.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-brand-800 transition-colors hover:text-brand-950"
          >
            <Mail size={15} /> {coordinator.email}
          </a>
        </div>
      </div>
    </div>
  );
}
