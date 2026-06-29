import { MapPin, Phone, Mail, MessageCircle, Navigation, Car, Clock } from "lucide-react";
import { gymConfig } from "@/config/gym.config";

export function ContactSection() {
  const { contact, timings } = gymConfig;
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
  const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hi! I'd like to know more about " + gymConfig.brand.name)}`;

  return (
    <section id="contact" className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[var(--accent)]" /> Visit us
          </p>
          <h2 className="font-display text-5xl text-white sm:text-6xl lg:text-7xl">Come train with us</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-md border border-white/10 lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto">
            <iframe
              title="Gym location"
              src={mapsEmbed}
              loading="lazy"
              className="h-full min-h-[400px] w-full grayscale-[0.4] invert-[0.92] saturate-0"
              style={{ border: 0 }}
            />
          </div>
          <div className="space-y-6 bg-[var(--surface)] p-6 sm:p-10">
            <Item icon={<MapPin />} label="Address" value={contact.address} sub={`Near ${contact.landmark}`} />
            <Item icon={<Clock />} label="Hours" value={`Mon–Fri · ${timings.weekdays}`} sub={`Sat–Sun · ${timings.weekends}`} />
            <Item icon={<Phone />} label="Phone" value={contact.phone} />
            <Item icon={<Mail />} label="Email" value={contact.email} />
            <Item icon={<Car />} label="Parking" value={contact.parking} />

            <div className="grid grid-cols-1 gap-2 pt-4 sm:grid-cols-3">
              <a href={contact.googleMaps} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)] transition hover:scale-[1.02]">
                <Navigation className="h-4 w-4" /> Directions
              </a>
              <a href={`tel:${contact.phone}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/50">
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a href={waUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white/50">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub?: string }) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[var(--accent)]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">{label}</p>
        <p className="mt-1 text-sm font-medium text-white sm:text-base">{value}</p>
        {sub && <p className="mt-0.5 text-xs text-white/55">{sub}</p>}
      </div>
    </div>
  );
}
