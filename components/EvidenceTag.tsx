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
    <span className={`tag uppercase tracking-[0.1em] ${styles[kind]}`}>
      {children}
    </span>
  );
}
