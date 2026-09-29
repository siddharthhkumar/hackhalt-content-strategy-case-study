import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";

export function SectionShell({
  id,
  number,
  eyebrow,
  title,
  lead,
  tag,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  tag?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="section-rule scroll-mt-20">
      <div className="wrap py-20 md:py-28">
        <div className="relative">
          <span
            aria-hidden
            className="num-anchor pointer-events-none absolute -top-6 right-0 hidden select-none text-[7rem] leading-none font-mono md:block lg:text-[9rem]"
          >
            {number}
          </span>

          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-signal uppercase">
              <span className="font-mono md:hidden">{number}</span>
              <span>{eyebrow}</span>
              {tag ? (
                <span className="tag border-line py-1 text-ink-soft">{tag}</span>
              ) : null}
            </div>
          </Reveal>

          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.06] font-bold tracking-wide text-ink md:text-5xl lg:text-6xl">
            <SplitReveal lines={[{ text: title }]} />
          </h2>

          {lead ? (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{lead}</p>
            </Reveal>
          ) : null}
        </div>

        {children ? <div className="mt-14 md:mt-16">{children}</div> : null}
      </div>
    </section>
  );
}
