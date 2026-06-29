import { useState } from "react";
import { Clock, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gymConfig } from "@/config/gym.config";

const CATEGORIES = ["All", "Yoga", "Zumba", "CrossFit", "Boxing", "Functional training"];

export function Schedule({ onReserve }: { onReserve: () => void }) {
  const [filter, setFilter] = useState("All");
  const items = gymConfig.schedule.filter((s) => filter === "All" || s.category === filter);

  return (
    <section className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Weekly schedule
            </p>
            <h2 className="font-display text-5xl text-white sm:text-6xl">This week at the gym</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition ${
                  filter === c
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
                    : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-white/10">
          <AnimatePresence mode="popLayout">
            {items.map((s, i) => (
              <motion.div
                key={`${s.day}-${s.name}-${s.time}-${i}`}
                layout
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="group grid grid-cols-[60px_1fr_auto] items-center gap-4 border-b border-white/5 bg-[var(--surface)] p-4 transition hover:bg-white/[0.04] sm:grid-cols-[80px_1.4fr_1fr_1fr_auto] sm:gap-6 sm:p-6"
              >
                <div className="font-display text-2xl text-[var(--accent)] sm:text-3xl">{s.day}</div>
                <div>
                  <h3 className="font-semibold text-white sm:text-lg">{s.name}</h3>
                  <p className="text-xs text-white/55">w/ {s.trainer}</p>
                </div>
                <div className="hidden items-center gap-2 text-sm text-white/75 sm:flex">
                  <Clock className="h-4 w-4 text-white/40" />
                  {s.time} · {s.duration}
                </div>
                <div className="hidden items-center gap-2 text-sm text-white/75 sm:flex">
                  <Users className="h-4 w-4 text-white/40" />
                  {s.slots} slots
                </div>
                <button
                  onClick={onReserve}
                  className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] sm:text-[11px]"
                >
                  Reserve
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
