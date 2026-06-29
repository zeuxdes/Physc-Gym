import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Programmes({ onEnquire }: { onEnquire: () => void }) {
  return (
    <section id="programmes" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[var(--accent)]" /> Programmes & classes
          </p>
          <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
            Find the training style that fits you
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gymConfig.programmes.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={onEnquire}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-black text-left"
            >
              <img src={p.imageUrl} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-[900ms] group-hover:scale-110 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <span className="inline-flex w-fit items-center rounded-full border border-white/25 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                  {p.level}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-white sm:text-4xl">{p.name}</h3>
                  <p className="mt-2 text-xs text-white/65 sm:text-sm">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    Enquire now
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
