import { Reveal } from "./Reveal";
import { finalShifts } from "@/lib/data";

export function FinalShift() {
  return (
    <section className="section-rule bg-void">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <p className="glow-text font-mono text-xs tracking-[0.2em] text-signal uppercase">
            Audit Conclusion — The Shift
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <p className="font-display text-3xl leading-[1.1] font-bold tracking-wide text-ink/35 md:text-4xl">
              &ldquo;Posting Content&rdquo;
            </p>
            <span aria-hidden className="glow-text justify-self-start font-mono text-signal md:justify-self-center">
              &rarr;
            </span>
            <p className="glow-text font-display text-3xl leading-[1.1] font-bold tracking-wide text-ink md:text-4xl">
              &ldquo;Building a Content System&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-px overflow-hidden border border-signal-line/40 bg-signal-line/20 sm:grid-cols-2 lg:grid-cols-4">
            {finalShifts.map((shift) => (
              <div key={shift.from} className="bg-void px-6 py-7">
                <p className="font-mono text-xs text-ink-faint line-through">{shift.from}</p>
                <p className="mt-2 font-display text-lg font-semibold tracking-wide text-ink">
                  {shift.to}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            HackHalt doesn&rsquo;t need to become another cybersecurity page posting cybersecurity
            facts. The opportunity is to become a place where future cybersecurity professionals
            come to learn, participate, build confidence and discover what they can become.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm tracking-[0.06em] text-signal uppercase">
            <span>Strategy</span>
            <span aria-hidden className="text-ink-faint">&rarr;</span>
            <span>System</span>
            <span aria-hidden className="text-ink-faint">&rarr;</span>
            <span>Measurement</span>
            <span aria-hidden className="text-ink-faint">&rarr;</span>
            <span>Iteration</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
