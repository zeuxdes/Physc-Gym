import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function FinalCTA({ onBook }: { onBook: () => void }) {
  const waUrl = `https://wa.me/${gymConfig.contact.whatsapp}`;
  return (
    <section className="grain grain-overlay relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={gymConfig.finalCta.imageUrl} alt="" className="h-full w-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-28 text-center sm:py-40 sm:px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display mx-auto max-w-5xl text-4xl text-white sm:text-5xl lg:text-6xl xl:text-[110px]"
        >
          {gymConfig.finalCta.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-base text-white/70 sm:text-lg"
        >
          {gymConfig.finalCta.body}
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button onClick={onBook} className="group inline-flex h-14 items-center gap-3 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)] transition hover:scale-[1.02]">
            Book your free trial
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <a href={waUrl} target="_blank" rel="noreferrer" className="inline-flex h-14 items-center gap-3 rounded-full border border-white/25 px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/60">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
