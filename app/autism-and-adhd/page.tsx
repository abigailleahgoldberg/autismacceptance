import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism & ADHD Together (AuDHD) — Autism Acceptance World",
  description:
    "AuDHD: the overlap, the contradictions, the chaos. Monotropism meets attention variability. Why treatment for one can worsen the other. Practical strategies that honor both.",
  openGraph: {
    title: "Autism & ADHD Together (AuDHD)",
    description:
      "AuDHD: the overlap, the contradictions, the chaos. Monotropism meets attention variability. Practical strategies that honor both.",
    image: "https://autismacceptance.world/bears/bears-together.jpg",
    url: "https://autismacceptance.world/autism-and-adhd",
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

const goldCalloutStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.07)",
  border: "1px solid rgba(217, 119, 6, 0.25)",
  borderRadius: "10px",
  padding: "1.5rem",
  margin: "2rem 0",
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

export default function AutismAndADHDPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Autism & ADHD Together</span>
      </nav>

      <h1 style={h1Style}>Autism & ADHD Together</h1>

      <p style={leadStyle}>
        If you're both autistic and have ADHD — a combination the community has started
        calling AuDHD — you already know that nothing quite adds up the way it should.
        You're hyperfocused and scattered. You crave routine and hate boredom. You can
        sustain attention for eight hours on the right thing and can't start a five-minute
        task to save your life. You are not broken. You are navigating two neurotypes
        that contradict each other in specific, exhausting ways.
      </p>

      <p style={bodyStyle}>
        Research estimates that somewhere between 50 and 70 percent of autistic people
        also have ADHD, and a similar proportion of ADHD diagnoses co-occur with autism.
        For a long time, the DSM didn't allow both diagnoses simultaneously — the assumption
        was that the two conditions were mutually exclusive. That restriction was removed
        in 2013, and since then the overlap has become one of the most discussed topics in
        the neurodivergent community.
      </p>

      <h2 style={h2Style}>The Overlap and Why It's Genuinely Confusing</h2>

      <p style={bodyStyle}>
        Autism and ADHD share several features: executive function challenges, emotional
        dysregulation, social difficulty, sensory sensitivities. They can look similar
        from the outside, and they often mask each other in clinical assessments.
      </p>

      <p style={bodyStyle}>
        But they're distinct neurological profiles with different underlying mechanisms.
        ADHD involves dysregulation of the dopamine system, affecting attention, motivation,
        and impulse control. Autism involves broader differences in how the brain processes
        sensory information, social input, and patterns. Having both means having both
        sets of challenges — not a blend of the two.
      </p>

      <p style={bodyStyle}>
        One of the clearest contradictions: autism often comes with monotropism — the
        tendency to focus attention intensely on one thing at a time, sometimes to the
        exclusion of everything else. ADHD comes with attention dysregulation — difficulty
        sustaining attention, impulsivity, and the constant pull toward novelty. Put them
        together and you get someone who can hyperfocus for eight hours on something that
        captivates them, but cannot redirect that focus intentionally, and cannot start
        tasks that don't immediately engage the dopamine system.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>The AuDHD contradiction loop in real life:</p>
        <ul style={listStyle}>
          <li>You need routine (autism) but get bored by it (ADHD)</li>
          <li>You can hyperfocus intensely but can't initiate the task (ADHD executive dysfunction + autistic inertia)</li>
          <li>You crave sameness but impulsively chase novelty</li>
          <li>Social situations drain you (autism) but isolation becomes intolerable (ADHD)</li>
          <li>You know exactly what you want to say but can't sequence the words in real time</li>
          <li>Stimulant medication helps attention but worsens sensory sensitivity or anxiety</li>
        </ul>
      </div>

      <h2 style={h2Style}>The Diagnostic Mess</h2>

      <p style={bodyStyle}>
        Getting accurately diagnosed with both conditions is harder than it should be.
        Many clinicians still aren't comfortable assessing for both simultaneously.
        ADHD can mask autism — someone who appears impulsive and distractible may not
        get assessed for the underlying autistic profile driving their behavior. Autism
        can mask ADHD — someone whose autistic rigidity creates the appearance of focus
        may not get assessed for the attention dysregulation happening underneath.
      </p>

      <p style={bodyStyle}>
        Many AuDHD adults were diagnosed with one condition first, often ADHD in childhood,
        and only later recognized the autism piece — frequently after treatment for ADHD
        didn't fully address their experience. Others were diagnosed autistic first and
        later recognized ADHD as a distinct and treatable part of their neurology.
      </p>

      <h2 style={h2Style}>When Treatment for One Makes the Other Worse</h2>

      <p style={bodyStyle}>
        This is one of the most important things to know about AuDHD: treatment designed
        for one condition can significantly worsen the other.
      </p>

      <p style={bodyStyle}>
        Stimulant medications for ADHD are often effective at improving attention and
        reducing impulsivity. But in AuDHD people, they can also amplify autistic rigidity,
        increase sensory sensitivity, worsen anxiety, reduce flexibility, and make autistic
        inertia more severe. Some AuDHD adults report that stimulants make them "too focused"
        — locked in on one thing to the point of inability to shift.
      </p>

      <p style={bodyStyle}>
        Behavioral strategies designed for autistic people often emphasize structure,
        routine, and predictability. Those are genuinely helpful for the autistic part of
        the profile — but the ADHD part needs novelty, flexibility, and external stimulation.
        A rigid routine that doesn't allow for novelty-seeking will work against the dopamine
        system constantly.
      </p>

      <div style={goldCalloutStyle}>
        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#D97706", marginBottom: "0.75rem" }}>
          If you're AuDHD and medication isn't working as expected:
        </p>
        <p style={bodyStyle}>
          Tell your prescriber both diagnoses. Dosing and medication selection for AuDHD
          often needs to account for autistic sensory sensitivity. Lower doses and extended-release
          formulations are often better tolerated. Non-stimulant options (atomoxetine, guanfacine)
          may work better for some AuDHD profiles. This is worth discussing explicitly.
        </p>
      </div>

      <h2 style={h2Style}>Practical Strategies That Honor Both</h2>

      <p style={bodyStyle}>
        Managing AuDHD means finding strategies that work with both neurotypes, not
        strategies that were designed for only one. That often means rejecting advice
        that feels wrong, even if it comes from well-intentioned sources.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Novelty within routine.</strong> Build flexibility into your routines deliberately. The destination (eating, exercising, doing the dishes) can stay constant; the specific form it takes can vary. This satisfies the autistic need for predictability while feeding the ADHD need for novelty.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Body doubling.</strong> Working in the presence of another person (in person or virtually) addresses the ADHD need for external structure without requiring complex social interaction. Highly effective for many AuDHD people.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Interest-based planning.</strong> Schedule tasks you need to do alongside tasks you want to do. The dopamine from the enjoyable task can provide momentum for the necessary one.</li>
        <li><strong style={{ color: "#FAFAF8" }}>External timers and alarms.</strong> Both autism and ADHD affect time perception. External timers provide the structure the autistic brain needs and the interruption of hyperfocus the ADHD brain can't provide for itself.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Sensory-compatible stimulation.</strong> ADHD brains often need stimulation to focus. Sensory-safe background stimulation — specific music, white noise, fidgets, movement — can provide the dopamine without overwhelming the autistic sensory system.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Find your interest-access point.</strong> Monotropism means that if you can find a genuine interest connection to an otherwise difficult task, your brain will engage differently. Look for that connection before giving up on the task.</li>
      </ul>

      <h2 style={h2Style}>You're Not Failing at Having Either Condition</h2>

      <p style={bodyStyle}>
        AuDHD is one of the most underserved neurological profiles in clinical and
        community settings. Most autism content doesn't account for ADHD. Most ADHD
        content doesn't account for autism. The resources built for one condition often
        actively don't work for the other.
      </p>

      <p style={bodyStyle}>
        If you've tried strategies that work for autistic people or for ADHD people and
        found that they half-work, or work for a while and then don't, or work in some
        situations but create new problems in others — you're not doing it wrong.
        You're dealing with two systems that are genuinely in tension. Finding what
        works for your specific combination is a legitimate, ongoing project, not a
        personal failing.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/executive-function" style={relatedLinkStyle}>Executive Function: The Operating System Nobody Taught You →</a>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
        <a href="/sensory-processing" style={relatedLinkStyle}>Sensory Processing as an Autistic Adult →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical or psychological advice. For diagnosis, medication, or clinical
          support, please see a qualified professional.
        </p>
      </div>
    </article>
  );
}
