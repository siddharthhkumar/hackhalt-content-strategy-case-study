import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { SplitReveal } from "./SplitReveal";
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
      title="The Vulnerability Isn't Content. It's Visibility."
      lead="This isn't a volume problem — audits rarely are. The real question is where in the audience's journey this content is positioned to intercept them, and who it's actually built to reach."
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
            02a — Remediation
          </p>
        </Reveal>
        <h3 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] font-bold tracking-wide text-ink md:text-4xl">
          <SplitReveal lines={[{ text: "The Fix: Company-First to Audience-First." }]} />
        </h3>

        <div className="mt-12">
          <MessagingComparison />
        </div>
      </div>
    </SectionShell>
  );
}
