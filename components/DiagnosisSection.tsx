import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { AudienceProfiles } from "./AudienceProfiles";
import { DiscoveryGap } from "./DiscoveryGap";
import { MessagingComparison } from "./MessagingComparison";
import { EvidenceTag } from "./EvidenceTag";

export function DiagnosisSection() {
  return (
    <SectionShell
      id="diagnosis"
      number="02"
      eyebrow="Diagnosis"
      title="The problem isn't a lack of content."
      lead="HackHalt already has enough subject matter. The strategic question is where that content enters the audience's journey — and who it's actually written for."
    >
      <div className="space-y-10">
        <div>
          <Reveal>
            <EvidenceTag kind="observed">Content audit finding</EvidenceTag>
          </Reveal>
          <div className="mt-4">
            <AudienceProfiles />
          </div>
        </div>

        <DiscoveryGap />
      </div>

      <div className="mt-24 border-t border-line pt-16 md:mt-28 md:pt-20">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
            02a — The shift required
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Move from company-first to audience-first.
          </h3>
        </Reveal>

        <div className="mt-12">
          <MessagingComparison />
        </div>
      </div>
    </SectionShell>
  );
}
