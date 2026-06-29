import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { gymConfig } from "@/config/gym.config";

function useCount(target: number, inView: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return v;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="border-y border-white/5 bg-[var(--surface)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
        {gymConfig.stats.map((s) => (
          <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const v = useCount(value, inView);
  return (
    <div className="bg-[var(--surface)] p-6 sm:p-10">
      <div className="font-display text-5xl text-white sm:text-7xl">
        {v.toLocaleString()}
        <span className="text-[var(--accent)]">{suffix}</span>
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/55">{label}</p>
    </div>
  );
}
