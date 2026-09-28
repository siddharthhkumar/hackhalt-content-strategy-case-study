const styles: Record<string, string> = {
  observed: "border-line text-ink-soft",
  proposed: "border-signal-line text-signal-ink bg-signal-soft",
  workflow: "border-line text-ink-soft",
  measurement: "border-signal-line text-signal-ink bg-signal-soft",
};

export function EvidenceTag({
  kind = "observed",
  children,
}: {
  kind?: "observed" | "proposed" | "workflow" | "measurement";
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase ${styles[kind]}`}
    >
      {children}
    </span>
  );
}
