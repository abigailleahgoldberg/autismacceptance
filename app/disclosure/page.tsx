import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosure: When and How to Tell People You're Autistic — Autism Acceptance World",
  description:
    "The decision framework for autism disclosure. Workplace, family, dating, and friend disclosure scripts. When NOT to disclose. Written for autistic adults.",
  openGraph: {
    title: "Disclosure: When and How to Tell People You're Autistic",
    description:
      "The decision framework for autism disclosure. Workplace, family, dating, and friend scripts. When NOT to disclose.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/disclosure",
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

const h3Style: React.CSSProperties = {
  fontSize: "1.1875rem",
  fontWeight: 700,
  color: "#D97706",
  marginTop: "1.75rem",
  marginBottom: "0.5rem",
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

const scriptStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.2)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  margin: "1rem 0 1.5rem",
  fontStyle: "italic",
  color: "rgba(250, 250, 248, 0.75)",
  fontSize: "1rem",
  lineHeight: 1.7,
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

export default function DisclosurePage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Disclosure</span>
      </nav>

      <h1 style={h1Style}>Disclosure: When and How to Tell People You're Autistic</h1>

      <p style={leadStyle}>
        Telling someone you're autistic is not a confession. It's not an apology. It's
        information — and you get to decide who receives it, when, how, and whether to
        share it at all. Disclosure is a decision, not an obligation. And the decision
        changes depending on who you're telling, what you need from them, and how safe
        the environment is.
      </p>

      <p style={bodyStyle}>
        Many autistic adults agonize over disclosure. Should you tell your boss? Your
        parents? The person you're dating? Your friends? There's no universal right answer.
        But there is a decision framework that can help you think through it clearly,
        and there are scripts that can make the conversation easier when you choose to
        have it.
      </p>

      <h2 style={h2Style}>The Decision Framework</h2>

      <p style={bodyStyle}>
        Before disclosing to anyone, ask yourself these questions. They won't give you
        a yes or no, but they'll clarify the stakes.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Questions to ask before every disclosure decision:</p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>Who benefits from knowing?</strong> Does this person need this information to understand you, accommodate you, or treat you fairly? Or are you disclosing because you feel obligated?</li>
          <li><strong style={{ color: "#FAFAF8" }}>What's the power dynamic?</strong> Disclosing to a boss carries different risks than disclosing to a friend. Consider who has power over your employment, housing, or social standing.</li>
          <li><strong style={{ color: "#FAFAF8" }}>What's this person's track record with vulnerability?</strong> Have they responded well to other people's disclosures? Do they use personal information against people?</li>
          <li><strong style={{ color: "#FAFAF8" }}>What do you want to happen after disclosure?</strong> Are you looking for understanding? Accommodations? Permission to unmask? Being clear about your goal helps you frame the conversation.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Can you absorb a negative response?</strong> Not everyone will respond well. Some people will dismiss it, minimize it, or use it against you. If a negative response would be genuinely harmful, consider whether disclosure is worth the risk right now.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Can you get what you need without disclosing?</strong> Sometimes the accommodation or understanding you're looking for is available without a formal label. "I work better with written instructions" doesn't require saying "because I'm autistic."</li>
        </ul>
      </div>

      <h2 style={h2Style}>Workplace Disclosure</h2>

      <p style={bodyStyle}>
        Workplace disclosure carries the highest stakes because it directly involves your
        livelihood. In the US, your employer cannot legally discriminate against you for
        being autistic (ADA protections), but legal protection and actual safety are not
        the same thing. Bias exists. Proving discrimination is difficult. The calculation
        here should be pragmatic.
      </p>

      <p style={bodyStyle}>
        Disclose at work when you need a formal accommodation that requires documentation.
        Consider disclosing when you have a specific, trusted manager who has demonstrated
        openness to neurodivergent employees. Don't disclose during the hiring process
        unless you're confident the organization is genuinely inclusive — not just
        performatively diverse.
      </p>

      <p style={bodyStyle}>
        When you do disclose at work, frame it in terms of function and accommodation,
        not identity or labels. Most managers don't need to understand autism broadly —
        they need to understand what you need to do your job well.
      </p>

      <p style={h3Style}>Script for workplace disclosure:</p>
      <div style={scriptStyle}>
        "I want to let you know that I have a neurological condition that affects how I
        process sensory information and social interaction. It doesn't affect my ability
        to do my work — in some ways it's an asset — but there are some adjustments that
        would help me be more effective. Specifically, [your accommodations: noise-canceling
        headphones, written instructions, remote work days, etc.]. I'm happy to go through
        the formal accommodation process with HR if that's helpful."
      </div>

      <h2 style={h2Style}>Family Disclosure (Especially Parents)</h2>

      <p style={bodyStyle}>
        Telling your parents you're autistic — especially if you were diagnosed as an
        adult — is often one of the most emotionally loaded disclosure situations. Parents
        may respond with guilt ("how did we miss this?"), denial ("you don't seem autistic"),
        grief, or defensiveness. Some respond beautifully. You won't know until it happens.
      </p>

      <p style={bodyStyle}>
        What often helps: frame it as a positive. You're not delivering bad news. You're
        sharing information that has helped you understand yourself better. Lead with what's
        changed for the better since learning this. Give them time to process — their
        reaction in the first conversation may not be their final reaction.
      </p>

      <p style={h3Style}>Script for family disclosure:</p>
      <div style={scriptStyle}>
        "I've been learning something about myself that I want to share with you. I've
        found out that I'm autistic. I know that might be surprising, and you might have
        questions. For me, it's actually been a really positive thing — it's helped me
        understand a lot about my life that didn't make sense before. I'm still the same
        person. I just have more information about how my brain works now."
      </div>

      <h2 style={h2Style}>Dating Disclosure</h2>

      <p style={bodyStyle}>
        When to tell someone you're dating is deeply personal. There's no correct timeline.
        Some people mention it in their dating profile. Some bring it up on the first date.
        Some wait until the relationship has established trust. All of these approaches
        are valid.
      </p>

      <p style={bodyStyle}>
        What matters more than timing is how you frame it. Presenting it as information
        that helps your partner understand you — rather than as a problem or a warning —
        sets the tone for how they'll receive it.
      </p>

      <p style={h3Style}>Script for dating disclosure:</p>
      <div style={scriptStyle}>
        "There's something I'd like to share with you because I think it'll help you
        understand me better. I'm autistic. What that looks like for me is [specific things:
        I need downtime after social events, I'm very direct in how I communicate, I have
        sensory sensitivities around certain things]. It doesn't change anything about how
        I feel about you. I just want you to have accurate information about how I work."
      </div>

      <h2 style={h2Style}>Friend Disclosure</h2>

      <p style={bodyStyle}>
        Friends are often the easiest category for disclosure because the stakes are
        lower and the relationship is already built on some level of mutual acceptance.
        Most autistic adults find that friends respond positively — often with something
        like "that makes so much sense."
      </p>

      <p style={bodyStyle}>
        The risk with friend disclosure is mostly around minimization ("everyone's a
        little autistic") or unwanted redefinition of the relationship ("I'll be more
        careful around you now"). Setting the tone clearly helps.
      </p>

      <p style={h3Style}>Script for friend disclosure:</p>
      <div style={scriptStyle}>
        "Hey, so I wanted to tell you something — I'm autistic. I found out [recently /
        a while ago] and it's been really helpful in understanding myself. I'm telling you
        because you're important to me and I want you to know the real me. I don't need
        anything to change between us. I just want you to have this context."
      </div>

      <h2 style={h2Style}>When NOT to Disclose</h2>

      <div style={warningStyle}>
        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#D97706", marginBottom: "0.75rem" }}>
          Disclosure is not always safe or beneficial. Consider NOT disclosing when:
        </p>
        <ul style={listStyle}>
          <li>The person has a history of using personal information against people</li>
          <li>The power imbalance is significant and there are no protections in place</li>
          <li>You're in a hostile work environment where disability is stigmatized</li>
          <li>You're disclosing to satisfy someone else's expectation, not your own need</li>
          <li>You're in crisis and the disclosure would add additional emotional load</li>
          <li>The person has previously dismissed or minimized your experiences</li>
          <li>You can access what you need (accommodations, understanding) without the label</li>
        </ul>
        <p style={{ fontSize: "0.9375rem", color: "rgba(250, 250, 248, 0.65)", marginBottom: 0, lineHeight: 1.7 }}>
          Choosing not to disclose is not lying. It's not hiding. It's a legitimate decision
          to manage your own personal information in a world that does not always respond
          to that information safely.
        </p>
      </div>

      <h2 style={h2Style}>After Disclosure</h2>

      <p style={bodyStyle}>
        However someone responds to your disclosure, remember: their response is about
        their relationship with the concept of autism, not about your worth. Negative
        responses often come from ignorance, fear, or personal discomfort — not from
        accurate assessment of you.
      </p>

      <p style={bodyStyle}>
        Give people time. Many people's initial reaction improves significantly once
        they've had time to process, learn, and adjust their understanding. The person
        who says "you don't look autistic" on day one may become one of your strongest
        allies by month three.
      </p>

      <p style={bodyStyle}>
        And if they don't come around — if they consistently dismiss, minimize, or
        weaponize your disclosure — that's information about them, not about whether you
        should have told them.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/workplace" style={relatedLinkStyle}>Workplace & Career as an Autistic Adult →</a>
        <a href="/relationships-and-dating" style={relatedLinkStyle}>Relationships & Dating While Autistic →</a>
        <a href="/late-diagnosis" style={relatedLinkStyle}>Late Diagnosis: Now What? →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical, legal, or professional advice. For workplace accommodation
          questions, consult the Job Accommodation Network (askjan.org) or an employment attorney.
        </p>
      </div>
    </article>
  );
}
