// Single source of truth for case-study content.
// Everything here is grounded in the HackHalt Content & Social Growth Review.
// Labels (STRATEGIC OBSERVATION / PROPOSED / etc.) mark the evidentiary status of each claim —
// no performance numbers are invented anywhere in this file.

export const navItems = [
  { id: "context", number: "01", label: "Context" },
  { id: "diagnosis", number: "02", label: "Diagnosis" },
  { id: "strategy", number: "03", label: "Content Strategy" },
  { id: "workflow", number: "04", label: "Workflow" },
  { id: "automation", number: "05", label: "Automation" },
  { id: "measurement", number: "06", label: "Measurement" },
  { id: "growth-loop", number: "07", label: "Growth Loop" },
] as const;

export const foundations = [
  {
    title: "Cybersecurity Education",
    need: "“I want to actually understand this, not just hear that it matters.”",
    angle: "Foundational and advanced technical concepts explained in plain language.",
    role: "Top-of-funnel discovery — the widest possible entry point.",
  },
  {
    title: "Career Development",
    need: "“What does this job actually look like, and how do I get one?”",
    angle: "Guidance on entering and navigating the security industry.",
    role: "Mid-funnel interest — turns curiosity into a career narrative.",
  },
  {
    title: "Practical Learning",
    need: "“Can I try this myself before I commit to anything?”",
    angle: "Hands-on labs and real-world scenario handling.",
    role: "Demonstration layer — proof the learning is real, not theoretical.",
  },
  {
    title: "Internships & Projects",
    need: "“What would I actually build or ship here?”",
    angle: "Direct applied learning opportunities and portfolio assets.",
    role: "Bridges learning content to tangible outcomes.",
  },
  {
    title: "Student Experiences",
    need: "“Did this work for someone like me?”",
    angle: "Peer journeys, outcomes, and honest accounts of the process.",
    role: "Trust layer — social proof that de-risks the decision to act.",
  },
  {
    title: "Mentorship",
    need: "“Will I be guided, or left to figure it out alone?”",
    angle: "Guidance and community support shown in practice, not claimed.",
    role: "Conversion layer — the human reason to choose HackHalt specifically.",
  },
] as const;

export const audiencePersons = {
  a: {
    label: "Person A",
    tag: "High Intent",
    description:
      "Already knows HackHalt. Actively searching for cybersecurity internships or structured training. Converts easily when shown direct program updates.",
    path: ["Program", "Information", "Application"],
  },
  b: {
    label: "Person B",
    tag: "Discovery",
    description:
      "Interested in cybersecurity or tech entry, but doesn’t know HackHalt exists. Needs an immediate, value-driven hook while scrolling to pause, learn, and engage.",
    path: ["Question", "Value", "Interest", "Trust", "HackHalt"],
  },
} as const;

export const discoveryFunnel = [
  { label: "People who don’t know HackHalt", weight: 1, gap: false },
  { label: "People learning", weight: 0.42, gap: true },
  { label: "People who trust", weight: 0.22, gap: true },
  { label: "People ready to act", weight: 0.1, gap: false },
] as const;

export const messagingComparison = [
  {
    quote: "Here is our internship.",
    consequence: "High friction — assumes prior interest.",
  },
  {
    quote: "Applications are open.",
    consequence: "Low discovery potential — speaks only to Person A.",
  },
  {
    quote: "Our programme includes projects.",
    consequence: "Product-first framing, not audience-first.",
  },
] as const;

export const messagingTarget = [
  {
    quote: "How do I actually start cybersecurity?",
    consequence: "Problem-solving — broad appeal, shareable.",
  },
  {
    quote: "What does an entry-level SOC analyst do?",
    consequence: "Curiosity-led — discovery friendly.",
  },
  {
    quote: "Can you spot the red flags in this phishing attempt?",
    consequence: "Participatory — earns attention on its own merit.",
  },
] as const;

export const newJourney = [
  "Audience Question",
  "Useful Answer",
  "Attention",
  "Engagement",
  "Follow",
  "Trust",
  "HackHalt Solution",
  "Action",
] as const;

export const contentPillars = [
  {
    number: "01",
    name: "Educate",
    prompt: "“Help me understand.”",
    example: "What is a SOC analyst?",
    intent: "Broad reach and top-of-funnel discovery.",
  },
  {
    number: "02",
    name: "Demonstrate",
    prompt: "“Show me how it works.”",
    example: "Step-by-step suspicious file analysis.",
    intent: "Showcasing practical application.",
  },
  {
    number: "03",
    name: "Discuss",
    prompt: "“Give me something to think about.”",
    example: "Is a computer science degree still required for cybersecurity?",
    intent: "Driving engagement, comments and shares.",
  },
  {
    number: "04",
    name: "Prove",
    prompt: "“Can I trust you?”",
    example: "Real student projects and outcomes.",
    intent: "Social proof and credibility building.",
  },
  {
    number: "05",
    name: "Convert",
    prompt: "“What should I do next?”",
    example: "HackHalt programme information.",
    intent: "Direct calls to action and programme drives.",
  },
] as const;

export const workflowSteps = [
  {
    step: "Find",
    detail: [
      "Audience questions",
      "Cybersecurity news",
      "Search topics",
      "Comments",
      "Industry conversations",
      "Past performance",
    ],
  },
  {
    step: "Filter",
    detail: ["Relevance", "Audience need", "Platform fit", "HackHalt expertise"],
  },
  {
    step: "Plan",
    detail: ["Audience", "Objective", "Hook", "Format", "CTA"],
  },
  {
    step: "Create",
    detail: ["Copy", "Reels", "Carousels", "LinkedIn posts", "Articles", "Stories"],
  },
  {
    step: "Review",
    detail: ["Accuracy", "Brand voice", "Visual quality", "CTA", "Cybersecurity sensitivity"],
  },
  {
    step: "Publish",
    detail: ["Scheduling", "Platform adaptation", "Distribution"],
  },
  {
    step: "Measure",
    detail: ["Reach", "Engagement", "Intent", "Business outcomes"],
  },
  {
    step: "Learn",
    detail: ["Keep", "Improve", "Retest", "Stop"],
  },
] as const;

export const repurposingTree = {
  core: "How does a SOC analyst investigate a suspicious login?",
  branches: [
    { channel: "LinkedIn", format: "Professional breakdown" },
    { channel: "Instagram Carousel", format: "5 things a SOC analyst checks" },
    { channel: "Reel", format: "Can you spot this suspicious login?" },
    { channel: "Story", format: "Interactive quiz" },
    { channel: "Website", format: "Detailed cybersecurity guide" },
    { channel: "Newsletter", format: "Weekly cybersecurity lesson" },
  ],
} as const;

export const automationEngine = [
  "Topic aggregation & trend scraping",
  "Research organisation & source collation",
  "Initial content brief generation",
  "Hook & headline variation",
  "Multi-platform format repurposing",
  "Scheduling & cross-posting distribution",
  "Analytics data aggregation",
  "Weekly performance summary reporting",
] as const;

export const automationHuman = [
  "Overall direction & content strategy",
  "Final topic selection & prioritisation",
  "Cybersecurity technical accuracy verification",
  "Brand voice, ethics, and nuance enforcement",
  "Authentic community engagement & replies",
  "Final asset sign-off & publishing approval",
] as const;

export const automationPipeline = [
  "Content Sources",
  "Topic Database",
  "AI Research Assist",
  "Content Brief",
  "Human Strategy",
  "Content Creation",
  "Human Approval",
  "Scheduling",
  "Performance",
  "Automated Report",
  "Human Analysis",
  "Next Iteration",
] as const;

export const measurementLevels = [
  {
    number: "01",
    name: "Reach",
    question: "Did people see us?",
    metrics: ["Reach", "Impressions", "Views"],
  },
  {
    number: "02",
    name: "Engagement",
    question: "Did they care?",
    metrics: ["Shares", "Saves", "Comments"],
  },
  {
    number: "03",
    name: "Intent",
    question: "Did they want more?",
    metrics: ["Profile visits", "Clicks", "DMs"],
  },
  {
    number: "04",
    name: "Business",
    question: "Did they act?",
    metrics: ["Leads", "Applications", "Registrations"],
  },
] as const;

export const growthLoop = [
  { number: "01", name: "Understand", question: "What are we doing?", detail: "Map HackHalt’s existing content themes, offerings and audience touchpoints before proposing any change." },
  { number: "02", name: "Observe", question: "What is happening?", detail: "Read the current content ecosystem as it actually behaves — who it speaks to, and who it skips." },
  { number: "03", name: "Identify", question: "Where is the gap?", detail: "Locate the discovery gap: a content ecosystem heavier at the bottom of the funnel than the top." },
  { number: "04", name: "Diagnose", question: "Why is it happening?", detail: "Trace the gap to its root cause — messaging built company-first rather than audience-first." },
  { number: "05", name: "Solve", question: "What should change?", detail: "Reframe messaging around audience questions, and organise output into five content pillars." },
  { number: "06", name: "Execute", question: "How do we deploy it?", detail: "Run the FIND → LEARN workflow, supported by an automation layer that preserves human judgement." },
  { number: "07", name: "Measure", question: "Did it work?", detail: "Evaluate across reach, engagement, intent and business outcomes — not attention alone." },
  { number: "08", name: "Optimise", question: "What changes next?", detail: "Feed findings back into understanding, closing the loop and starting the next iteration." },
] as const;

export const finalShifts = [
  { from: "Company-first", to: "Audience-first" },
  { from: "One-off posts", to: "Content ecosystem" },
  { from: "Manual repetition", to: "Automated workflow" },
  { from: "Vanity metrics", to: "Business signals" },
] as const;
