import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Function: The Operating System Nobody Taught You — Autism Acceptance World",
  description:
    "What executive function actually is, task initiation and autistic inertia, external scaffolding strategies, and apps and tools that actually work.",
  openGraph: {
    title: "Executive Function: The Operating System Nobody Taught You",
    description:
      "What executive function is, autistic inertia, task initiation challenges, and the strategies and tools that actually help.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/executive-function",
    type: "article",
  },
};

const pageStyle: React.CSSProperties = {
  maxWidth: "820px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
};

const breadcrumbStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  marginBottom: "2rem",
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap" as const,
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.03em",
  marginBottom: "1rem",
  lineHeight: 1.1,
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1875rem",
  color: "rgba(250, 250, 248, 0.75)",
  lineHeight: 1.75,
  marginBottom: "2.5rem",
  borderLeft: "3px solid #A855F7",
  paddingLeft: "1.25rem",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#A855F7",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.82)",
  lineHeight: 1.75,
  marginBottom: "1.25rem",
};

const calloutStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.1)",
  border: "1px solid rgba(168, 85, 247, 0.25)",
  borderRadius: "10px",
  padding: "1.5rem",
  margin: "2rem 0",
};

const calloutHeadStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#A855F7",
  marginBottom: "0.75rem",
};

const listStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.82)",
  fontSize: "1.0625rem",
  lineHeight: 1.75,
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
};

const relatedStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginTop: "3rem",
};

const relatedHeadStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  color: "rgba(250, 250, 248, 0.45)",
  marginBottom: "1rem",
};

const relatedLinkStyle: React.CSSProperties = {
  display: "block",
  color: "#A855F7",
  fontSize: "1rem",
  fontWeight: 600,
  textDecoration: "none",
  padding: "0.35rem 0",
};

const disclaimerStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.2)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  marginTop: "3rem",
};

const disclaimerTextStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.5)",
  marginBottom: 0,
  lineHeight: 1.6,
};

export default function ExecutiveFunctionPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Executive Function</span>
      </nav>

      <h1 style={h1Style}>Executive Function: The Operating System Nobody Taught You</h1>

      <p style={leadStyle}>
        You can write code for hours, hold thousands of details about your special interest
        in your head simultaneously, and solve complex problems that defeat other people.
        And you cannot start the five-minute email. You are not lazy. You do not have a
        character flaw. Your executive function works differently, and nobody explained
        how — until now.
      </p>

      <p style={bodyStyle}>
        Executive function is the term for the set of cognitive processes that manage
        goal-directed behavior: starting tasks, switching between them, maintaining focus,
        planning sequences of action, managing time, regulating impulses, and completing
        things. It's the operating system that runs on top of your intelligence — and
        for many autistic adults, it's the part that causes the most daily difficulty.
      </p>

      <p style={bodyStyle}>
        This disconnect — between obvious intelligence or capability in one domain and
        apparent inability to manage basic tasks in another — is one of the most
        confusing and frustrating aspects of being autistic. It's been used against
        autistic people ("you're so smart, you can do this if you just try") in ways
        that cause real harm. Understanding what executive function actually is, and
        why autistic brains struggle with it specifically, changes the framing entirely.
      </p>

      <h2 style={h2Style}>The Executive Function System</h2>

      <p style={bodyStyle}>
        Executive function isn't one thing — it's a cluster of related but distinct
        cognitive abilities that work together. Autistic people often have uneven
        profiles, meaning some executive functions work reasonably well and others
        are genuinely impaired.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>The executive function components:</p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>Task initiation.</strong> The ability to start a task. Often the most significant challenge for autistic adults — distinct from motivation or capability.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Planning and sequencing.</strong> Breaking a goal down into ordered steps. Can be difficult when the number of steps is large or when intermediate steps are ambiguous.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Working memory.</strong> Holding information in mind while using it. Losing your train of thought, forgetting why you walked into a room, losing track of what step you're on.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Cognitive flexibility.</strong> Switching between tasks, adapting to changes in plan. Autistic inertia makes this difficult in both directions.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Inhibition.</strong> Resisting impulses, filtering distractions, delaying responses.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Time perception and management.</strong> Time blindness — the experience of time as binary (now versus not now) — is extremely common in neurodivergent people.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Emotional regulation.</strong> Executive function is deeply connected to emotion regulation, and dysregulation can significantly impair other executive functions.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Task Initiation: The Locked Door Problem</h2>

      <p style={bodyStyle}>
        Task initiation is often described as the most debilitating executive function
        challenge for autistic adults. You need to do the thing. You want to do the thing.
        You know how to do the thing. And you cannot start the thing.
      </p>

      <p style={bodyStyle}>
        This isn't procrastination in the colloquial sense — choosing to do something else
        because the task is aversive. It's a neurological difficulty with the initiation
        mechanism itself. The signal to start doesn't fire. The system remains in a
        holding state regardless of intention.
      </p>

      <p style={bodyStyle}>
        This is partly connected to dopamine — the dopamine system has to be engaged for
        initiation to happen, which is why tasks that are interesting, novel, or carry
        immediate social stakes (someone is waiting) are easier to start. Tasks that are
        routine, low-stakes, or whose benefits are delayed are genuinely harder for the
        autistic brain to initiate.
      </p>

      <h2 style={h2Style}>Autistic Inertia: Objects at Rest and in Motion</h2>

      <p style={bodyStyle}>
        Autistic inertia refers to the difficulty both starting and stopping activities.
        Like Newton's first law applied to behavior: a brain at rest tends to stay at rest,
        and a brain in motion tends to stay in motion.
      </p>

      <p style={bodyStyle}>
        Starting is hard (covered above). But stopping — transitioning away from an
        activity you're engaged in — can be equally difficult. This is why "just five
        more minutes" often turns into another hour. It's why interruptions are so
        disruptive. It's why transitions between activities require significant cognitive
        and sometimes emotional overhead.
      </p>

      <p style={bodyStyle}>
        Understanding inertia as a feature of autistic cognition, not a character flaw,
        allows you to design your environment and schedule around it rather than fighting
        it constantly.
      </p>

      <h2 style={h2Style}>External Scaffolding: Not "Try Harder"</h2>

      <p style={bodyStyle}>
        The solution to executive function challenges is not to develop more willpower.
        Willpower is itself an executive function product, and telling someone with
        executive function challenges to use more willpower is like telling someone with
        a broken leg to walk it off.
      </p>

      <p style={bodyStyle}>
        The solution is <em>external scaffolding</em> — moving the executive function load
        out of your head and into the environment. This is not cheating or giving up.
        It's good engineering.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Externalize everything.</strong> Don't rely on your working memory. Write it down immediately. Use calendar reminders, notes on paper, sticky notes in visible locations. If it's not external, it doesn't exist.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Use transitions as task boundaries.</strong> Schedule tasks to start and end at natural transition points — meals, leaving the house, a designated time that's already marked in the environment.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Make starting tiny.</strong> The two-minute rule: if the first action on a task takes two minutes or less, do only that. Often starting is enough — once in motion, staying in motion is easier.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Body doubling.</strong> Working in the presence of another person (virtually or physically) provides the external social cue that activates the initiation system for many autistic and ADHD people.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Visual timers.</strong> Time blindness responds better to visual time representation than to clocks. A Time Timer or similar tool shows time passing in a visual format that the autistic brain can actually register.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Reduce decision points.</strong> Each decision consumes executive function. Default menus for meals, standard outfits, pre-planned weekly schedules — reducing micro-decisions preserves capacity for decisions that matter.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Transition warnings.</strong> Give yourself five-minute warnings before required transitions. Setting an alarm five minutes before you need to stop an activity gives the brain time to begin the process of disengaging.</li>
      </ul>

      <h2 style={h2Style}>Apps and Tools That Actually Help</h2>

      <p style={bodyStyle}>
        Not all productivity tools work for autistic executive function profiles.
        Here are some that the community consistently finds useful.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Tiimo.</strong> Visual daily planner designed for neurodivergent people. Shows your day as visual time blocks. Reduces the planning load significantly.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Time Timer.</strong> A visual clock where time appears as a shrinking red disc. Makes time passing visible in a way that a digital clock doesn't.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Notion or Obsidian.</strong> Flexible note and task systems. The customizability allows you to build systems that match your actual brain rather than forcing you into a predesigned format.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Body doubling apps.</strong> Focusmate and similar services match you with an accountability partner for virtual co-working sessions. Extremely effective for task initiation.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Alexa/Google Home.</strong> Voice-activated reminders remove the friction of having to open an app to set a reminder. The lower the barrier to capture, the more likely you are to use it.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Forest/Flora.</strong> Gamified focus timers. The game mechanic provides a small dopamine hook that can help with initiation and sustained focus.</li>
      </ul>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/autism-and-adhd" style={relatedLinkStyle}>Autism & ADHD Together →</a>
        <a href="/independent-living" style={relatedLinkStyle}>Living Independently as an Autistic Adult →</a>
        <a href="/financial-management" style={relatedLinkStyle}>Money Management for Autistic Adults →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical or psychological advice. For diagnosis or clinical support,
          please see a qualified professional.
        </p>
      </div>
    </article>
  );
}
