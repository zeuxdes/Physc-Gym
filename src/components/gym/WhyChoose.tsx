import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function WhyChoose() {
  return (
    <section className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Why choose us
            </p>
            <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
              Six reasons members stay.
            </h2>
          </div>
          <p className="text-base text-white/60 sm:text-lg">
            Built around people, not equipment lists. Every detail of the gym — from the lighting to
            the coaching — is set up so you actually want to come back tomorrow.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {gymConfig.whyChoose.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-[60px_1fr_auto] items-center gap-6 py-6 sm:grid-cols-[100px_1fr_auto] sm:py-8"
            >
              <span className="font-display text-2xl text-white/30 transition group-hover:text-[var(--accent)] sm:text-3xl">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl text-white sm:text-5xl">{reason}</h3>
              <span className="hidden h-px w-12 bg-white/15 transition group-hover:w-24 group-hover:bg-[var(--accent)] sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
