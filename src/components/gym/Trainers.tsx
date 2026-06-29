import { Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Trainers({ onBook }: { onBook: () => void }) {
  return (
    <section id="trainers" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[var(--accent)]" /> Trainers
          </p>
          <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
            Meet the experts behind your progress
          </h2>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3 xl:grid-cols-4">
          {gymConfig.trainers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
              className="group w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-md bg-black sm:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--surface)]">
                <img src={t.imageUrl} alt={t.name} loading="lazy" className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <a
                  href={t.instagram}
                  className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                  aria-label={`${t.name} on Instagram`}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">{t.speciality}</p>
                  <h3 className="font-display mt-1 text-2xl text-white">{t.name}</h3>
                </div>
              </div>
              <div className="space-y-3 p-4 text-xs text-white/65">
                <div className="flex items-center justify-between">
                  <span>Experience</span>
                  <span className="text-white">{t.years} yrs</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span>Certifications</span>
                  <span className="text-white">{t.certs}</span>
                </div>
                <button
                  onClick={onBook}
                  className="mt-3 inline-flex w-full items-center justify-between rounded-full border border-white/15 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Book a consultation <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
