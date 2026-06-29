import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Transformations() {
  return (
    <section id="transformations" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-px w-8 bg-[var(--accent)]" /> Transformations
            </p>
            <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">
              Real members. Real progress.
            </h2>
          </div>
          <p className="max-w-sm text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            ⚠ Sample placeholder content — replace with approved member photos & testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gymConfig.transformations.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden rounded-md border border-white/10 bg-black"
            >
              <div className="aspect-[4/5]">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={t.before} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={t.after} alt="After" />}
                  
                  style={{ height: "100%" }}
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/50">
                  <span>{t.goal}</span>
                  <span>{t.duration}</span>
                </div>
                <h3 className="font-display text-2xl text-white">{t.name}</h3>
                <p className="text-sm text-white/65">"{t.quote}"</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
