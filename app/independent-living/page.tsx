import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Independently as an Autistic Adult — Autism Acceptance World",
  description:
    "Practical skills nobody taught you, routines as lifelines, managing household tasks with executive function challenges, and support services for autistic adults.",
  openGraph: {
    title: "Living Independently as an Autistic Adult",
    description:
      "Practical skills nobody taught you, routines as lifelines, managing household tasks with executive function challenges, and support services.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/independent-living",
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

export default function IndependentLivingPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Independent Living</span>
      </nav>

      <h1 style={h1Style}>Living Independently as an Autistic Adult</h1>

      <p style={leadStyle}>
        Nobody handed you an instruction manual for daily life as an autistic adult.
        The "life skills" curriculum in school assumed a neurotypical operating system —
        one where initiating tasks, tracking multiple responsibilities, managing time,
        and maintaining routines happen more or less automatically. For autistic adults,
        many of those things require deliberate scaffolding. That's not a deficit.
        It's a design problem, and it has solutions.
      </p>

      <p style={bodyStyle}>
        Independent living for autistic adults looks different for different people.
        Some autistic adults live fully independently with minimal support. Some use
        significant daily support. Most are somewhere in between — capable of a great
        deal, with specific areas where external scaffolding or support makes the
        difference between managing and thriving.
      </p>

      <p style={bodyStyle}>
        There is no correct level of independence. The goal is a life that works for you,
        with the level of support that makes it sustainable. More support doesn't mean
        less success. Asking for help doesn't mean failing at adulthood.
      </p>

      <h2 style={h2Style}>Practical Skills Nobody Taught You</h2>

      <p style={bodyStyle}>
        There's an assumption built into most adult life preparation: that you'll figure
        it out. Watch how other people do it and learn. Ask when you need to. Autistic
        adults often find that this informal learning process doesn't work the way it's
        supposed to — because the cues that tell neurotypical people "you should know this
        by now" don't register the same way.
      </p>

      <p style={bodyStyle}>
        It's completely normal to be an intelligent, capable adult who doesn't know how
        to make a doctor's appointment on the phone, or who has never paid a bill by
        mail, or who doesn't know what the right procedure is for getting car insurance.
        These are learnable skills. They're not a measure of your intelligence or worth.
        They're just things nobody explicitly taught you.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Phone calls.</strong> Many autistic adults find phone calls genuinely difficult — the real-time verbal demands, the social scripts, the inability to see the other person's face. It's fine to script phone calls in advance, to use apps that replace phone calls wherever possible (telehealth, online scheduling), and to have a trusted person help with particularly difficult calls.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Medical appointments.</strong> Bring written notes about what you want to discuss. Request written summaries of recommendations. It's okay to say "I need you to write that down for me."</li>
        <li><strong style={{ color: "#FAFAF8" }}>Household maintenance.</strong> Create a written schedule for recurring tasks (dishes, laundry, trash, cleaning) and attach them to existing habits rather than trying to remember them from scratch. Many autistic adults do well with task rotation apps.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Cooking and eating.</strong> Interoceptive differences mean many autistic adults don't notice hunger reliably. Scheduled mealtimes — rather than eating when you feel hungry — work better for many people.</li>
      </ul>

      <h2 style={h2Style}>Routines as Lifelines</h2>

      <p style={bodyStyle}>
        Routines are often described as a coping mechanism for autistic people, framed
        in terms of managing anxiety. That framing is accurate but incomplete. Routines
        also dramatically reduce the executive function load of daily life by converting
        decision sequences into automatic processes.
      </p>

      <p style={bodyStyle}>
        Every morning routine removes dozens of decisions from the cognitive queue: what
        order to do things in, what to eat, what to wear. When those decisions are already
        made and encoded in habit, you preserve mental energy for things that actually
        require it.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Designing effective routines:</p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>Start simple.</strong> A two-step morning routine that you actually complete is more valuable than a ten-step routine you abandon. Build up gradually.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Anchor to existing behaviors.</strong> Attach new habits to things you already do reliably: after you make coffee, you take your medication. After you get into bed, you check your schedule for tomorrow.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Make the environment do the work.</strong> Put the thing in the place where you need it. If you always forget to take your medication, put it next to the thing you use every morning. Don't rely on memory — rely on placement.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Plan for disruption.</strong> Decide in advance what the modified routine looks like for sick days, travel days, and holidays. Having a "disrupted routine" plan reduces the destabilization when normal routine breaks down.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Managing Household Tasks with Executive Function Challenges</h2>

      <p style={bodyStyle}>
        Household maintenance requires exactly the combination of executive function
        capacities that are most challenging for many autistic adults: task initiation
        on uninteresting tasks, time awareness, multi-step planning, and the ability
        to complete tasks that have delayed or invisible rewards.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Lower the bar radically.</strong> Done is better than perfect. A quick wipe of the counter is better than a full clean that never happens because it feels overwhelming. Reduce standards until tasks are completable, then adjust upward.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Task bundling.</strong> Pair an unpleasant task with something enjoyable: the podcast you only listen to while doing dishes, the playlist you only play while cleaning. The enjoyable thing provides dopamine; the task gets done.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Reduce the cost of disorder.</strong> Systems that accommodate mess rather than eliminating it are more sustainable: large laundry baskets that don't need to be sorted, dishes that all match (no hunting for lids), storage that doesn't require folding.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Get help if you need it.</strong> Paying for a housecleaning service, grocery delivery, or a meal prep service are not signs of failure — they're intelligent allocation of limited executive function resources.</li>
      </ul>

      <h2 style={h2Style}>Support Services Available</h2>

      <p style={bodyStyle}>
        Many autistic adults are eligible for support services they don't know about.
        Services vary significantly by state, country, and circumstance, but may include:
      </p>

      <ul style={listStyle}>
        <li>Supported living services through state developmental disability agencies</li>
        <li>Vocational rehabilitation support for employment</li>
        <li>Independent living centers (federally funded) offering skills training and peer support</li>
        <li>SNAP (food assistance), Medicaid, and other income-based support programs</li>
        <li>Section 8 housing assistance</li>
        <li>Case management services through mental health and disability systems</li>
      </ul>

      <p style={bodyStyle}>
        Many of these services are under-utilized because the application processes are
        themselves executive-function-heavy and require phone calls, paperwork, and
        multiple follow-ups. If navigating the application process is the barrier,
        disability advocates and social workers can help with this specifically — their
        job is to help people access the systems they're entitled to.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Keep Reading</p>
        <a href="/executive-function" style={relatedLinkStyle}>Executive Function →</a>
        <a href="/financial-management" style={relatedLinkStyle}>Money Management for Autistic Adults →</a>
        <a href="/sensory-processing" style={relatedLinkStyle}>Sensory Processing as an Autistic Adult →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical, legal, or financial advice. Support service availability varies
          by location. Contact your state or local developmental disabilities agency for information
          specific to your area.
        </p>
      </div>
    </article>
  );
}
