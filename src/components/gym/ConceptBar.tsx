import { gymConfig } from "@/config/gym.config";

export function ConceptBar() {
  if (!gymConfig.agency.showConceptBar) return null;
  return (
    <div className="relative z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
        <span className="truncate">
          Website concept created exclusively for{" "}
          <span className="text-white">{gymConfig.brand.name}</span>
        </span>
        <span className="hidden shrink-0 sm:inline">
          Concept by <span className="text-white">{gymConfig.agency.name}</span>
        </span>
      </div>
    </div>
  );
}
