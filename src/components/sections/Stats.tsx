"use client";

import { useEffect, useRef, useState } from "react";
import { cursos } from "@/data/cursos";

const stats = [
  { value: 1986, label: "Ano de fundação" },
  { value: 40, label: "Anos formando pastores" },
  // Derivado da fonte única de cursos — Bacharelado + EFAL + Pós-graduação.
  { value: 10, prefix: "+", label: "Cursos ativos" },
  // { value: cursos.length, label: "Cursos ativos" },
  { value: 500, prefix: "+", label: "Alunos formados" },
];

function useCountUp(target: number, startWhenVisible: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhenVisible) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [startWhenVisible, target]);

  return value;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

function StatCard({
  value,
  prefix,
  label,
  inView,
}: {
  value: number;
  prefix?: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <div className="flex flex-col items-center px-6 py-2 text-center sm:px-10">
      <span className="font-serif text-4xl font-extrabold text-brand-900 sm:text-5xl">
        {prefix}
        {count}
      </span>
      <span className="mt-2 max-w-[10rem] text-sm text-stone-600">{label}</span>
    </div>
  );
}

export default function Stats() {
  const [statsRef, statsInView] = useInView<HTMLDivElement>();

  return (
    <section className="relative px-6">
      <div
        ref={statsRef}
        className="mx-auto -mt-16 flex max-w-5xl flex-wrap justify-center rounded-sm bg-white shadow-xl shadow-brand-950/10"
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} inView={statsInView} />
        ))}
      </div>
    </section>
  );
}
