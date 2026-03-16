import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism in Men: Beyond the Stereotype — Autism Acceptance World",
  description:
    "Breaking the 'awkward tech guy' stereotype. Emotional depth, relationships, masculinity, and burnout patterns in autistic men.",
  openGraph: {
    title: "Autism in Men: Beyond the Stereotype",
    description:
      "Breaking the 'awkward tech guy' stereotype. Emotional depth, relationships, masculinity, and burnout patterns in autistic men.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/autism-in-men",
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

export default function AutismInMenPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Autism in Men: Beyond the Stereotype</span>
      </nav>

      <h1 style={h1Style}>Autism in Men: Beyond the Stereotype</h1>

      <p style={leadStyle}>
        There's a version of the autistic man that exists in popular culture: brilliant,
        socially awkward, working in tech, doesn't pick up on social cues. Maybe a little
        robotic. That's not autism. That's a caricature. And for the millions of autistic
        men who don't fit it, that stereotype has been quietly harmful.
      </p>

      <p style={bodyStyle}>
        Autistic men are emotionally complex. They form deep attachments. They experience
        intense love, profound loyalty, and acute grief. Many are highly socially aware —
        they just process and respond to social information differently. The idea that
        autistic men lack emotional depth is wrong, and it's caused real damage: in
        relationships, in clinical settings, and in how autistic men understand themselves.
      </p>

      <h2 style={h2Style}>The Stereotype and Its Costs</h2>

      <p style={bodyStyle}>
        The "awkward tech genius" stereotype isn't just limiting — it actively obscures
        which autistic men get identified and which don't. An autistic man who works in
        construction, who cares deeply about his community, who is funny and warm but
        struggles with sensory overwhelm and executive function — he doesn't fit the
        template. So he often goes unrecognized.
      </p>

      <p style={bodyStyle}>
        Autistic men who don't match the stereotype frequently receive other diagnoses
        first: ADHD (sometimes correctly, sometimes not), depression, personality disorders,
        oppositional defiant disorder in childhood. Or they receive no diagnosis at all
        and are simply labeled difficult, unreliable, or immature.
      </p>

      <p style={bodyStyle}>
        Meanwhile, autistic men who do work in tech or academia often find their autism
        is normalized to the point of invisibility — "everyone here is like that" — which
        means they also don't get support.
      </p>

      <h2 style={h2Style}>Emotional Expression: Different, Not Absent</h2>

      <p style={bodyStyle}>
        Many autistic men experience emotions intensely. Very intensely. The issue often
        isn't that the feeling isn't there — it's that the pathway from feeling to
        expression doesn't work the way neurotypical culture expects.
      </p>

      <p style={bodyStyle}>
        Alexithymia — difficulty identifying and describing one's own emotional states —
        is common in autistic people of all genders, but the interaction between alexithymia
        and male socialization creates a specific dynamic. Men are already taught to
        suppress emotional expression. Autistic men may additionally struggle to identify
        what they're feeling in the first place. The result can look like emotional absence
        when the reality is closer to emotional traffic jam.
      </p>

      <p style={bodyStyle}>
        This has enormous consequences for relationships. Partners of autistic men often
        describe feeling like the emotional labor falls entirely on them, not recognizing
        that their partner is feeling deeply — just not communicating it in the expected
        ways. Understanding this is the first step toward bridging it.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Signs autism may look like in men who don't fit the stereotype:</p>
        <ul style={listStyle}>
          <li>Intense loyalty and devotion to specific people, places, and interests</li>
          <li>Difficulty with uncertainty and change that looks like stubbornness or control</li>
          <li>Sensory sensitivities that get written off as personal preference</li>
          <li>Deep knowledge in specific areas that isn't academic but is encyclopedic</li>
          <li>Social difficulty that reads as arrogance, rudeness, or lack of interest</li>
          <li>Emotional explosions that come after extended periods of apparent calm</li>
          <li>Intense discomfort in unstructured social settings that leads to avoidance</li>
        </ul>
      </div>

      <h2 style={h2Style}>Masculinity and the Autistic Experience</h2>

      <p style={bodyStyle}>
        Autistic men often find themselves at odds with dominant masculinity norms — not
        because they lack masculinity, but because those norms were never built with
        neurodivergent people in mind. The performative confidence, the casual social ease,
        the ability to navigate informal hierarchies through banter and rivalry — these
        don't come naturally to many autistic men, and the failure to perform them correctly
        can result in exclusion, harassment, or worse.
      </p>

      <p style={bodyStyle}>
        At the same time, autistic men are often drawn to the structure and clarity that
        certain masculine spaces offer. Rules-based environments — competitive games,
        formal codes of conduct, hobbyist communities with established hierarchies of
        expertise — can feel genuinely safer than the ambiguous social landscape of
        everyday interaction.
      </p>

      <p style={bodyStyle}>
        This creates a particular tension for many autistic men: craving community and
        connection, but finding that the available templates for male bonding are exhausting
        or inaccessible. Friendships that revolve around shared activity tend to work better
        than friendships built primarily around conversation. That's not a failure — it's
        a different kind of intimacy that's valid on its own terms.
      </p>

      <h2 style={h2Style}>Burnout in Autistic Men</h2>

      <p style={bodyStyle}>
        Autistic burnout — a state of profound exhaustion, reduced function, and withdrawal
        that results from sustained masking and sensory/cognitive overload — affects autistic
        men significantly, but may look different from burnout in autistic women and
        nonbinary people.
      </p>

      <p style={bodyStyle}>
        Autistic men in burnout sometimes withdraw completely into their special interests
        as a coping mechanism. They may become irritable, reactive, or shutdown — behaviors
        that are often pathologized or attributed to character issues rather than neurological
        overload. Depression is the most common misdiagnosis when autistic men are in burnout.
      </p>

      <p style={bodyStyle}>
        The workplace is a primary driver of burnout in autistic men. Open-plan offices,
        constant interruption, informal social demands, networking culture, and the unspoken
        expectation to be "on" all day are genuinely difficult for many autistic people.
        Men may be less likely to seek help or acknowledge that they're struggling — the
        masking may be different from women's masking, but it's still masking.
      </p>

      <h2 style={h2Style}>Relationships as an Autistic Man</h2>

      <p style={bodyStyle}>
        Autistic men often experience profound connection in their intimate relationships,
        but the communication differences between autistic and neurotypical people can
        create genuine friction. The double empathy problem — the idea that neurotypical
        and autistic people mutually misread each other, not just in one direction —
        applies strongly here.
      </p>

      <p style={bodyStyle}>
        Many autistic men report that romantic relationships are easier when they can talk
        explicitly about needs, preferences, and communication styles. The neurotypical
        model of "just knowing" what a partner wants is particularly difficult for autistic
        people. Direct conversation about what works, what doesn't, and what each person
        needs is not a sign that a relationship is in trouble — it's often what makes
        autistic relationships work better than average.
      </p>

      <p style={bodyStyle}>
        Autistic men who understand themselves tend to build better relationships — with
        partners, with children, with friends. That self-knowledge doesn't come automatically
        with a diagnosis. It comes from reflection, from community, and from finally having
        an accurate framework for who you are and how you work.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
        <a href="/relationships-and-dating" style={relatedLinkStyle}>Relationships & Dating While Autistic →</a>
        <a href="/masking-and-unmasking" style={relatedLinkStyle}>Masking & Unmasking →</a>
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
