import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Memberships({ onEnquire }: { onEnquire: () => void }) {
  const { plans } = gymConfig.memberships;
  return (
    <section id="memberships" className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Memberships
            </p>
            <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
              Choose your commitment
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/55">
            Every plan includes full gym access and group classes. The longer you commit, the more
            you get back.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative flex flex-col rounded-md border p-7 transition ${
                plan.popular
                  ? "border-[var(--accent)]/60 bg-gradient-to-b from-[var(--accent)]/[0.08] to-transparent"
                  : "border-white/10 bg-[var(--surface)] hover:border-white/25"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-foreground)]">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-3xl text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/55">{plan.desc}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6 text-sm text-white/75">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onEnquire}
                className={`mt-7 inline-flex h-12 items-center justify-between rounded-full px-5 text-[11px] font-semibold uppercase tracking-[0.16em] transition ${
                  plan.popular
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:scale-[1.02]"
                    : "border border-white/20 text-white hover:border-white/50"
                }`}
              >
                Get membership details
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
