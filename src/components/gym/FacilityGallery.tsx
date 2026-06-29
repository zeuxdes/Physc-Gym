import { useState } from "react";
import { X, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function FacilityGallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="facilities" className="bg-[var(--background)] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Facilities
            </p>
            <h2 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
              Explore every corner of the gym
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/55">
            Replace these placeholder photos with the client's real facility images for the final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {gymConfig.facilities.slice(0, 2).map((f, i) => (
            <motion.button
              key={f.name}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              className="group relative block overflow-hidden rounded-xl bg-[var(--surface)] aspect-square text-left"
            >
              <img
                src={f.imageUrl}
                alt={f.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <div className="h-28 sm:h-32 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <h3 className="font-display text-xl text-white sm:text-2xl">{f.name}</h3>
                  <p className="mt-2 max-w-xs text-[13px] leading-5 text-white/70 opacity-100 sm:text-sm max-h-10 overflow-hidden">
                    {f.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)] opacity-100">
                    <ImageIcon className="h-3 w-3" /> View gallery
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              className="max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gymConfig.facilities[active].imageUrl} alt="" className="h-full w-full object-cover" />
              <div className="bg-black p-5 sm:p-6">
                <h3 className="font-display text-3xl text-white">{gymConfig.facilities[active].name}</h3>
                <p className="mt-2 text-sm text-white/65">{gymConfig.facilities[active].desc}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Placeholder image — replace with client's real photograph
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
