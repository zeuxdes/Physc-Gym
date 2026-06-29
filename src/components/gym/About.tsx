import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function About() {
  const { about } = gymConfig;
  return (
    <section id="about" className="relative bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-[3/4]"
        >
          <img src={about.imageUrl} alt="Gym infrastructure" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[var(--accent)]" />
            {about.label}
          </p>
          <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-[64px]">
            {about.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base text-white/65 sm:text-lg">{about.body}</p>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {about.differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-[40px_1fr] items-baseline gap-4 py-5"
              >
                <span className="font-display text-xl text-[var(--accent)]">0{i + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-white">{d.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#facilities" className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            {about.cta}
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-foreground)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
