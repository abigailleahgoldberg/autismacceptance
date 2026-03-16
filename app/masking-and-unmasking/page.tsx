import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masking & Unmasking — Autism Acceptance World",
  description:
    "What masking really is, its long-term cost, why unmasking is both terrifying and necessary, and how to start safely.",
  openGraph: {
    title: "Masking & Unmasking",
    description:
      "What masking really is, its long-term cost, why unmasking is both terrifying and necessary, and how to start safely.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/masking-and-unmasking",
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

export default function MaskingAndUnmaskingPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Masking & Unmasking</span>
      </nav>

      <h1 style={h1Style}>Masking & Unmasking</h1>

      <p style={leadStyle}>
        Masking is not just pretending. It's not putting on a social face the way most
        people do when they're at work or meeting strangers. For autistic people, masking
        is a survival strategy — learned early, often unconsciously, and maintained at
        enormous cost. Understanding what it actually is, and what it costs, is one of the
        most important things an autistic adult can do.
      </p>

      <p style={bodyStyle}>
        The clinical term is "camouflaging," and research by Pearson and Rose (2021)
        describes it as comprising three components: assimilation (trying to fit in and
        avoid standing out as autistic), masking (hiding autistic behaviors), and
        compensation (using strategies to overcome social difficulties). Most autistic
        people do all three, often simultaneously, often without realizing they're doing it.
      </p>

      <p style={citationStyle}>
        Pearson, A., & Rose, K. (2021). A conceptual analysis of autistic masking:
        Understanding the narrative of stigma and the illusion of choice. Autism in Adulthood.
      </p>

      <h2 style={h2Style}>What Masking Actually Is</h2>

      <p style={bodyStyle}>
        Masking is the suppression of natural autistic behavior to meet neurotypical
        social expectations. It includes:
      </p>

      <ul style={listStyle}>
        <li>Suppressing or hiding stimming — the repetitive movements and sounds that regulate the nervous system</li>
        <li>Forcing eye contact that doesn't come naturally, or consciously managing how much you make</li>
        <li>Scripting conversations in advance, running through possible responses, preparing for likely exchanges</li>
        <li>Monitoring your own face and body language in real time to ensure it reads as neurotypical</li>
        <li>Mirroring others' behavior, tone, vocabulary, and mannerisms</li>
        <li>Managing sensory distress without showing it</li>
        <li>Suppressing the need to talk at length about your special interests in social contexts where that's "too much"</li>
        <li>Performing interest, engagement, or emotional responses that you don't feel in the expected way</li>
      </ul>

      <p style={bodyStyle}>
        Most of this is learned young. Many autistic people developed masking behaviors
        before they had words for what they were doing — before they knew they were
        autistic at all. The masking built up as a protection against bullying, exclusion,
        criticism, and the social feedback that something was wrong with how they naturally
        were. It often worked, in the narrow sense of reducing immediate social penalties.
        The cost came later.
      </p>

      <h2 style={h2Style}>The Long-Term Cost</h2>

      <p style={bodyStyle}>
        Pearson and Rose (2021) and subsequent research have documented the substantial
        costs of autistic camouflaging. These include significantly elevated rates of{" "}
        <a href="/anxiety-and-autism" style={{ color: "#A855F7" }}>anxiety</a>, depression, and suicidal ideation in autistic people who mask heavily.
        They include <a href="/autistic-burnout" style={{ color: "#A855F7" }}>autistic burnout</a> — the prolonged collapse of functioning that follows
        years of sustained masking demand. They include a compromised sense of identity
        — not knowing who you actually are because you've spent so long performing who
        you're supposed to be.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>What sustained masking costs over time:</p>
        <ul style={listStyle}>
          <li>Chronic exhaustion — every interaction consumes extraordinary resources</li>
          <li>Anxiety that seems to have no clear cause — because the cause is the masking itself</li>
          <li>Difficulty knowing your own preferences, needs, and feelings</li>
          <li>Identity confusion — the "who am I under this" feeling</li>
          <li>Reduced capacity to unmask even in private — the mask can become the default</li>
          <li>Autistic burnout: extended loss of function, skills, and coping capacity</li>
          <li>Increased rates of depression and suicidal ideation</li>
        </ul>
      </div>

      <p style={bodyStyle}>
        There's also something harder to name: the grief of not having been accepted as
        you actually were. Masking is often a response to real experiences of rejection
        and punishment for autistic behavior. That history is real, and it doesn't go
        away when you decide to stop masking.
      </p>

      <h2 style={h2Style}>Why Unmasking Is Terrifying</h2>

      <p style={bodyStyle}>
        Knowing that masking is harmful and deciding to stop are not the same thing.
        Unmasking is genuinely frightening for most autistic adults, for reasons that
        are completely rational.
      </p>

      <p style={bodyStyle}>
        The mask was built to protect you. It formed in response to real consequences —
        social exclusion, bullying, family punishment, job loss, relationship failure.
        The nervous system learned that being visibly autistic is dangerous. That learning
        doesn't disappear because you've read that unmasking is healthy. The fear response
        is real. It makes sense. Acknowledging that is part of the work.
      </p>

      <p style={bodyStyle}>
        There's also the question of who you are without the mask. For people who have
        been masking since early childhood, the answer isn't immediately obvious. This
        is especially common among autistic adults who received a <a href="/late-diagnosis" style={{ color: "#A855F7" }}>late diagnosis</a> — the
        mask was built long before there was a framework to understand it. Unmasking
        isn't just removing something — it's rediscovering, or sometimes building for the
        first time, a sense of who you actually are.
      </p>

      <h2 style={h2Style}>How to Start Unmasking Safely</h2>

      <p style={bodyStyle}>
        Unmasking doesn't have to be all-or-nothing. Most autistic adults find that it
        happens gradually, in specific contexts with specific people, over time.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Start with stimming in private.</strong> If you suppress stimming, start allowing it when you're alone. Notice what feels regulating. This is often the first step — reclaiming the basic regulatory behaviors that your body naturally wants to do.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Find one safe person.</strong> The first person you unmask with matters. It should be someone who has demonstrated that they can handle you being actually autistic — not just tolerant of the masked version. Often this is another autistic person.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Use autistic-only spaces.</strong> Online and in-person communities of autistic adults often feel dramatically different from neurotypical spaces because everyone is masking less. These spaces can be genuinely restorative and give you a chance to practice being unmasked.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Experiment at low stakes.</strong> Low-stakes social situations — strangers you'll never see again, brief interactions — can be places to practice not masking something small: letting yourself look around instead of forcing eye contact, not laughing at a joke you didn't find funny.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Notice the relief.</strong> The experience of not having to mask, even briefly, often carries an immediate physical relief. That relief is useful feedback. It shows you what the masking was costing.</li>
      </ul>

      <h2 style={h2Style}>Unmasking Is Not the End Goal — Living Is</h2>

      <p style={bodyStyle}>
        Unmasking is not about abandoning all social adaptation. It's about the difference
        between strategic, chosen adaptation and the involuntary, identity-suppressing,
        exhausting performance of not being autistic. Some social adaptation is normal
        and fine — everyone adjusts their behavior in different contexts. The goal is for
        that adjustment to be a choice, not a compulsion driven by fear.
      </p>

      <p style={bodyStyle}>
        The goal of unmasking is a life where you have more energy for the things that
        matter to you — where the resources that were being spent on performance get
        redirected to work, relationships, creativity, and rest. That's not idealistic.
        Autistic adults who successfully reduce their masking load often describe it as
        transformative.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Keep Reading</p>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
        <a href="/late-diagnosis" style={relatedLinkStyle}>Late Diagnosis: Now What? →</a>
        <a href="/anxiety-and-autism" style={relatedLinkStyle}>Anxiety & Autism →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

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
