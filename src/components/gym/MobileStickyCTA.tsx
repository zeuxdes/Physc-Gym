import { Phone, MessageCircle, Calendar } from "lucide-react";
import { gymConfig } from "@/config/gym.config";

export function MobileStickyCTA({ onBook }: { onBook: () => void }) {
  const waUrl = `https://wa.me/${gymConfig.contact.whatsapp}`;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-3 gap-px border-t border-white/10 bg-black/95 backdrop-blur-md sm:hidden">
      <a href={`tel:${gymConfig.contact.phone}`} className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-white">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a href={waUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-white">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <button onClick={onBook} className="flex flex-col items-center gap-1 bg-[var(--accent)] py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-foreground)]">
        <Calendar className="h-4 w-4" /> Book Trial
      </button>
    </div>
  );
}
