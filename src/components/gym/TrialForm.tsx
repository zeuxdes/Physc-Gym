import { useState } from "react";
import { X, Check, Loader2, AlertCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { z } from "zod";
import { gymConfig } from "@/config/gym.config";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid mobile number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  goal: z.string().trim().min(1, "Pick a fitness goal").max(80),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  message: z.string().trim().max(500).optional(),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "submitting" | "success" | "error";

const goals = ["Fat loss", "Muscle gain", "General fitness", "Strength", "Sport-specific"];
const times = ["6–8 AM", "8–11 AM", "11 AM–2 PM", "4–7 PM", "7–10 PM"];

export function TrialForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [data, setData] = useState<FormData>({ name: "", phone: "", email: "", goal: "", date: "", time: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    // Simulated submission — wire to your backend/email/CRM
    await new Promise((res) => setTimeout(res, 1200));
    if (Math.random() > 0.05) setStatus("success");
    else setStatus("error");
  };

  const sendToWhatsApp = () => {
    const msg = `Hi ${gymConfig.brand.name}! I'd like to book a free trial.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0AGoal: ${data.goal}%0AVisit: ${data.date} (${data.time})%0AMessage: ${data.message || "—"}`;
    window.open(`https://wa.me/${gymConfig.contact.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/80 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 240 }}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-[var(--surface)] p-6 shadow-2xl sm:rounded-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white" aria-label="Close">
              <X className="h-4 w-4" />
            </button>

            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="font-display mt-6 text-4xl text-white">You're booked in.</h3>
                <p className="mt-3 text-sm text-white/65">Our team will call you within 2 hours to confirm your trial visit.</p>
                <button onClick={onClose} className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">Done</button>
              </div>
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">Free trial</p>
                <h3 className="font-display mt-2 text-4xl text-white sm:text-5xl">Book your visit</h3>
                <p className="mt-2 text-sm text-white/60">No pressure, no signup. Just come train.</p>

                <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name}>
                    <input value={data.name} onChange={(e) => update("name", e.target.value)} className={inputCls} placeholder="Your name" />
                  </Field>
                  <Field label="Mobile" error={errors.phone}>
                    <input value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} placeholder="+91 ..." />
                  </Field>
                  <Field label="Email" error={errors.email} full>
                    <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@email.com" />
                  </Field>
                  <Field label="Fitness goal" error={errors.goal}>
                    <select value={data.goal} onChange={(e) => update("goal", e.target.value)} className={inputCls}>
                      <option value="">Select…</option>
                      {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred date" error={errors.date}>
                    <input type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
                  </Field>
                  <Field label="Preferred time" error={errors.time} full>
                    <div className="flex flex-wrap gap-2">
                      {times.map((t) => (
                        <button type="button" key={t} onClick={() => update("time", t)} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${data.time === t ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]" : "border-white/15 text-white/70 hover:border-white/40"}`}>{t}</button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Message (optional)" full>
                    <textarea value={data.message} onChange={(e) => update("message", e.target.value)} rows={3} className={inputCls} placeholder="Anything we should know?" />
                  </Field>

                  {status === "error" && (
                    <div className="sm:col-span-2 flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again or send via WhatsApp.
                    </div>
                  )}

                  <div className="sm:col-span-2 mt-2 flex flex-col gap-2 sm:flex-row">
                    <button type="submit" disabled={status === "submitting"} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-foreground)] transition hover:scale-[1.01] disabled:opacity-50">
                      {status === "submitting" ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</> : "Book my trial"}
                    </button>
                    <button type="button" onClick={sendToWhatsApp} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:border-white/50">
                      <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputCls = "w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[var(--accent)] focus:outline-none";

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/55">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
