import { ArrowRight, MapPin, Clock, Star, Users, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { gymConfig } from "@/config/gym.config";

export function Hero({ onBookTrial }: { onBookTrial: () => void }) {
  const { hero, rating } = gymConfig;
  return (
    <section id="home" className="grain grain-overlay relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background image — PLACEHOLDER */}
      <div className="absolute inset-0">
        <img
          src={hero.imageUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/70"
          >
            <span className="h-px w-8 bg-[var(--accent)]" />
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-white text-[13vw] leading-[0.9] max-w-full sm:text-[10vw] lg:text-[8.5vw] xl:text-[140px]"
          >
            {hero.heading.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-base text-white/75 sm:text-lg"
          >
            {hero.subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onBookTrial}
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-[var(--accent)] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)] transition hover:scale-[1.02]"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a href="#facilities" className="inline-flex h-14 items-center gap-3 rounded-full border border-white/25 px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/60">
              {hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4"
        >
          <InfoItem icon={<MapPin className="h-4 w-4" />} label="Location" value={hero.location} />
          <InfoItem icon={<Clock className="h-4 w-4" />} label="Open today" value={gymConfig.timings.short.replace("Open today · ", "")} />
          <InfoItem icon={<Star className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />} label="Google rating" value={`${rating.score} · ${rating.reviews} reviews`} />
          <InfoItem icon={<Users className="h-4 w-4" />} label="Community" value={hero.activeMembers} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-black/40 p-4 sm:p-5">
      <div className="flex items-center gap-2 text-white/60">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-white sm:text-[15px]">{value}</p>
    </div>
  );
}
