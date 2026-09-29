import { SectionShell } from "./SectionShell";
import { ContentWorkflow } from "./ContentWorkflow";
import { RepurposingTree } from "./RepurposingTree";

export function WorkflowSection() {
  return (
    <SectionShell
      id="workflow"
      number="04"
      eyebrow="Content Workflow"
      title="The Playbook Behind the System."
      lead="A documented, repeatable procedure — the kind any operator on the team could run without waiting on one person's judgement call. Find, filter, plan, create, review, publish, measure, learn. Then repeat."
      tag="Proposed workflow"
    >
      <ContentWorkflow />

      <div className="mt-24 border-t border-line pt-16 md:mt-28 md:pt-20">
        <RepurposingTree />
      </div>
    </SectionShell>
  );
}
