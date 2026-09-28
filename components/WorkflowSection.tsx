import { SectionShell } from "./SectionShell";
import { ContentWorkflow } from "./ContentWorkflow";
import { RepurposingTree } from "./RepurposingTree";

export function WorkflowSection() {
  return (
    <SectionShell
      id="workflow"
      number="04"
      eyebrow="Content Workflow"
      title="Good strategy needs an operating system."
      lead="A repeatable, closed-loop process — from finding a topic to learning from what shipped."
      tag="Proposed workflow"
    >
      <ContentWorkflow />

      <div className="mt-24 border-t border-line pt-16 md:mt-28 md:pt-20">
        <RepurposingTree />
      </div>
    </SectionShell>
  );
}
