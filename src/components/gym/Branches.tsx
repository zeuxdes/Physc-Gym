import { Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Branches() {
  return (
    <section id="locations" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[var(--accent)]" /> Our branches
          </p>
          <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
            Train at the nearest Physc Gym location
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
            Choose from our convenient, fully equipped branches across the city. Each location
            offers premium gear, certified coaches and a supportive training community.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {gymConfig.branches.map((branch, index) => (
            <motion.article
              key={`${branch.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black p-6 text-white shadow-lg shadow-black/20"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                <MapPin className="h-4 w-4" /> {branch.city}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{branch.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{branch.address}</p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/40" />
                  <span>{branch.hours}</span>
                </div>
                <p>{branch.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
