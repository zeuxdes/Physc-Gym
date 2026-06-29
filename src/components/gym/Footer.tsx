import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { gymConfig } from "@/config/gym.config";

const nav = ["Home", "Facilities", "Classes", "Trainers", "Memberships", "Contact"];
const programmes = ["Strength Training", "Personal Training", "CrossFit", "Yoga", "Boxing"];

export function Footer() {
  const brandLogo = gymConfig.brand.logoImage ? (
    <img
      src={gymConfig.brand.logoImage}
      alt={gymConfig.brand.name}
      className="h-16 w-auto object-contain"
    />
  ) : (
    gymConfig.brand.logoText
  );

  return (
    <footer className="border-t border-white/5 bg-black pb-32 pt-20 sm:pb-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="font-display flex items-center text-3xl text-white">{brandLogo}</div>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              {gymConfig.brand.tagline}. {gymConfig.about.body.slice(0, 110)}…
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={gymConfig.contact.instagram}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <FooterCol
            title="Navigation"
            items={nav.map((n) => ({ label: n, href: `#${n.toLowerCase()}` }))}
          />
          <FooterCol
            title="Programmes"
            items={programmes.map((p) => ({ label: p, href: "#programmes" }))}
          />
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-white/45">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{gymConfig.contact.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                {gymConfig.contact.phone}
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                {gymConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {gymConfig.brand.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
          <p>
            Website concept by <span className="text-white">{gymConfig.agency.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.22em] text-white/45">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/70">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="link-reveal hover:text-white">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
