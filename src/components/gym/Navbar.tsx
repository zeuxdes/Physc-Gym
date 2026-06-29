import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { gymConfig } from "@/config/gym.config";
import { useScrolled } from "./useGymTheme";

const links = [
  { label: "Home", href: "#home" },
  { label: "Facilities", href: "#facilities" },
  { label: "Classes", href: "#programmes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Memberships", href: "#memberships" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onBookTrial }: { onBookTrial: () => void }) {
  const scrolled = useScrolled(32);
  const [open, setOpen] = useState(false);
  const brandLogo = gymConfig.brand.logoImage ? (
    <img
      src={gymConfig.brand.logoImage}
      alt={gymConfig.brand.name}
      className="h-12 w-auto object-contain sm:h-14"
    />
  ) : (
    gymConfig.brand.logoText
  );

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "top-0 bg-black/85 backdrop-blur-xl border-b border-white/5"
          : "top-0 bg-transparent"
      } ${gymConfig.agency.showConceptBar && !scrolled ? "translate-y-[34px] sm:translate-y-[36px]" : ""}`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#home"
          className="font-display flex items-center text-2xl tracking-wide text-white"
        >
          {brandLogo}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-reveal text-[12px] uppercase tracking-[0.18em] text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={gymConfig.contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white sm:flex"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <button
            onClick={onBookTrial}
            className="hidden h-10 items-center rounded-full bg-[var(--accent)] px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)] transition hover:scale-[1.03] sm:inline-flex"
          >
            Book a Free Trial
          </button>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-display flex items-center text-2xl text-white">{brandLogo}</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 pt-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block py-3 text-4xl text-white/90 hover:text-[var(--accent)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 px-6">
            <button
              onClick={() => {
                setOpen(false);
                onBookTrial();
              }}
              className="h-12 rounded-full bg-[var(--accent)] text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)]"
            >
              Book a Free Trial
            </button>
            <a
              href={gymConfig.contact.instagram}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 text-sm uppercase tracking-[0.16em] text-white"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
