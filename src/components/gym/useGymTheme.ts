import { useEffect, useState } from "react";
import { gymConfig } from "@/config/gym.config";

/** Applies accent + background colours from config at runtime. */
export function useGymTheme() {
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--background", gymConfig.colors.background);
    r.setProperty("--surface", gymConfig.colors.surface);
    r.setProperty("--accent", gymConfig.colors.accent);
    r.setProperty("--accent-foreground", gymConfig.colors.accentForeground);
    r.setProperty("--ring", gymConfig.colors.accent);
  }, []);
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
