import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autistic Burnout: What It Is and What Actually Helps — Autism Acceptance World",
  description:
    "Autistic burnout is not regular burnout. It's a specific state of exhaustion, loss of skills, and withdrawal caused by sustained masking and sensory overload. Here's what actually helps.",
  openGraph: {
    title: "Autistic Burnout: What It Is and What Actually Helps",
    description:
      "Autistic burnout is not regular burnout. It's caused by sustained masking and sensory overload. Here's what works — and what doesn't.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/autistic-burnout",
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

const citationStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginBottom: "1.25rem",
};

const warningStyle: React.CSSProperties = {
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

export default function AutisticBurnoutPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Autistic Burnout</span>
      </nav>

      <h1 style={h1Style}>Autistic Burnout: What It Is and What Actually Helps</h1>

      <p style={leadStyle}>
        Autistic burnout is not the same as regular burnout. It's not about working too
        hard, or needing a vacation, or even being stressed. It's a specific neurological
        state — a profound exhaustion that goes down to the bone, that strips away skills
        and coping capacity, and that can last for months or years. And the primary cause
        is something most autistic people have been doing their entire lives: masking.
      </p>

      <p style={bodyStyle}>
        Autistic burnout was formally defined and studied by Dora Raymaker and colleagues
        at the Academic Autism Spectrum Partnership in Research and Education (AASPIRE)
        in 2020. Their research, built on interviews with autistic adults, identified
        a consistent pattern: prolonged exhaustion, loss of skills, reduced tolerance
        for sensory and social input, and increased autistic traits — all resulting from
        the cumulative demands of living in a neurotypical world while masking autistic
        identity. (Raymaker et al., 2020)
      </p>

      <p style={citationStyle}>
        Raymaker, D. M., Teo, A. R., et al. (2020). "Having all of your internal resources
        exhausted beyond measure and being left with no clean-up crew": Defining autistic
        burnout. Autism in Adulthood.
      </p>

      <h2 style={h2Style}>What Autistic Burnout Actually Looks Like</h2>

      <p style={bodyStyle}>
        Autistic burnout has three core features, according to Raymaker's research:
        chronic exhaustion, loss of skills, and reduced tolerance for stimuli. But what
        that looks like in daily life varies.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Common signs of autistic burnout:</p>
        <ul style={listStyle}>
          <li>Exhaustion that doesn't improve with rest — sleep doesn't help</li>
          <li>Skills that used to work no longer working: communication deteriorates, language may become harder, previously manageable tasks become impossible</li>
          <li>Sensory sensitivities that were manageable become overwhelming</li>
          <li>Social capacity drops to near zero — even small talk becomes genuinely impossible</li>
          <li>Executive function collapses — tasks that seemed routine become insurmountable</li>
          <li>Emotional regulation becomes much harder — meltdowns or shutdowns more frequent</li>
          <li>Increased need for sameness and routine</li>
          <li>Withdrawal from things that used to bring joy</li>
          <li>A persistent sense of disconnection from yourself</li>
        </ul>
      </div>

      <h2 style={h2Style}>How It Differs from Depression</h2>

      <p style={bodyStyle}>
        Autistic burnout is frequently misdiagnosed as depression. The overlap is real —
        both involve exhaustion, withdrawal, reduced functioning, and loss of pleasure.
        And burnout can certainly lead to depression, or co-occur with it.
      </p>

      <p style={bodyStyle}>
        The key distinguishing feature is the relationship to demands. <a href="/depression-and-autism" style={{ color: "#A855F7" }}>Depression</a> typically
        involves a pervasive low mood and loss of interest that doesn't directly track
        external demands. Autistic burnout is more specifically tied to the experience of
        being overwhelmed by the cumulative demand of masking and navigating a neurotypical
        world. Reducing those demands — particularly reducing the masking requirement —
        directly addresses burnout in a way that most depression treatments don't.
      </p>

      <p style={bodyStyle}>
        This matters because the treatments are different. Standard depression interventions
        (more structure, more engagement, CBT encouraging behavioral activation) can
        actively worsen autistic burnout by increasing demands at exactly the moment when
        the system needs to reduce them.
      </p>

      <h2 style={h2Style}>Masking as the Primary Cause</h2>

      <p style={bodyStyle}>
        Autistic burnout doesn't come from being autistic. It comes from the sustained
        effort of hiding being autistic in a world that wasn't designed for autistic people.
      </p>

      <p style={bodyStyle}>
        <a href="/masking-and-unmasking" style={{ color: "#A855F7" }}>Masking</a> — suppressing stimming, forcing eye contact, performing neurotypical social
        scripts, managing sensory overwhelm without showing it, processing social information
        in real time through intense concentration — costs enormous cognitive and emotional
        resources. Every interaction where you have to mask depletes something. Over years
        of doing this without recognition, without accommodation, and without permission
        to unmask, the system runs out of resources. That's burnout.
      </p>

      <p style={bodyStyle}>
        This is why burnout tends to follow major transitions: starting college, a new job,
        moving to a new city, a significant relationship change, having children. These
        transitions increase demands, require more masking in unfamiliar environments, and
        push the system past its limits.
      </p>

      <h2 style={h2Style}>What Actually Helps</h2>

      <p style={bodyStyle}>
        Recovery from autistic burnout requires one primary thing: reduction of demands.
        Not management of demands. Not coping strategies. Actual reduction.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Reduce masking demands.</strong> Identify where you're masking and find ways to unmask. This might mean working from home if that's possible, declining social events that were purely obligatory, or letting yourself stim without apology in private and then increasingly in public.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Reduce sensory demands.</strong> Redesign your environment. Identify your sensory triggers and eliminate or reduce them. This is not being difficult. This is medicine.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Rest without guilt.</strong> Autistic burnout requires real rest — not productive rest, not "self-care" that's actually another performance. Unstructured time to do low-demand activities that restore you.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Access to special interests.</strong> Time with your special interests is genuinely restorative for many autistic people. It's not a reward or a treat — it's physiologically regulated. Protect that time.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Social reduction.</strong> During burnout, social interaction — even with people you love — may be impossible or genuinely harmful. This isn't antisocial. It's triage. Communicate your limits and let the right people understand.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Accommodations at work or school.</strong> If you're in burnout, this is the moment to use the accommodations you're entitled to under the ADA (US) or similar protections. Remote work, flexible scheduling, reduced social demands. See our <a href="/workplace" style={{ color: "#A855F7" }}>workplace guide</a> for how to request these formally.</li>
      </ul>

      <h2 style={h2Style}>What Doesn't Work</h2>

      <div style={warningStyle}>
        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#D97706", marginBottom: "0.75rem" }}>
          These interventions are commonly recommended but often make autistic burnout worse:
        </p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>More therapy with more demands.</strong> CBT structured around behavioral activation and cognitive challenging adds demands during a period when the entire problem is too many demands. Therapy that focuses on acceptance, demand reduction, and unmasking is different — and can genuinely help.</li>
          <li><strong style={{ color: "#FAFAF8" }}>More structure.</strong> Adding routines and schedules to a system in burnout often backfires — another set of demands to fail at.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Pushing through.</strong> The neurotypical advice to push through fatigue does not apply to autistic burnout. Pushing through extends burnout and risks making it more severe and longer-lasting.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Increased social engagement as medicine.</strong> The idea that socializing more will help you feel better is particularly damaging in autistic burnout. Social interaction is often a major demand source. More of it makes things worse.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Prevention</h2>

      <p style={bodyStyle}>
        Burnout is easier to prevent than to recover from. The primary prevention strategy
        is reducing the long-term masking load before the system breaks down. This means
        building a life with fewer masking demands — accommodations, reduced social
        obligations, environments that work for your sensory system, and relationships
        where you don't have to perform.
      </p>

      <p style={bodyStyle}>
        Regular recovery time — not just after burnout but as ongoing maintenance — matters.
        If every week ends with you completely depleted, something needs to change in the
        structure of your week, not in your capacity to endure it.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Keep Reading</p>
        <a href="/masking-and-unmasking" style={relatedLinkStyle}>Masking & Unmasking →</a>
        <a href="/depression-and-autism" style={relatedLinkStyle}>Depression & Autism →</a>
        <a href="/workplace" style={relatedLinkStyle}>Workplace & Career as an Autistic Adult →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical or psychological advice. If you are experiencing a mental health
          crisis, please reach out to the 988 Suicide and Crisis Lifeline by calling or texting 988.
        </p>
      </div>
    </article>
  );
}
