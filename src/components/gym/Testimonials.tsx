import { Star } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Testimonials() {
  return (
    <section className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Reviews
            </p>
            <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
              What our members say
            </h2>
          </div>
          <div className="rounded-md border border-white/10 bg-black p-6">
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl text-white">{gymConfig.rating.score}</div>
              <div>
                <div className="flex items-center gap-0.5 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/60">
                  Based on {gymConfig.rating.reviews} Google reviews
                </p>
              </div>
            </div>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Sample data · Connect Google Business for live reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gymConfig.testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-md border border-white/10 bg-black p-6"
            >
              <div className="flex items-center gap-0.5 text-[var(--accent)]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-white/80">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <img src={t.imageUrl} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-[11px] text-white/50">{t.duration}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
