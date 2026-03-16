import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationships & Dating While Autistic — Autism Acceptance World",
  description:
    "The double empathy problem in romantic relationships, communication style differences, sensory considerations in intimacy, dating apps, and autistic-autistic relationships.",
  openGraph: {
    title: "Relationships & Dating While Autistic",
    description:
      "Double empathy in romantic relationships, communication style differences, sensory considerations in intimacy, and autistic-autistic relationships.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/relationships-and-dating",
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

export default function RelationshipsAndDatingPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Relationships & Dating</span>
      </nav>

      <h1 style={h1Style}>Relationships & Dating While Autistic</h1>

      <p style={leadStyle}>
        Autistic people form deep, genuine, committed bonds. Autistic love is real. What
        often looks like a lack of connection or emotional unavailability is usually a
        different way of connecting, communicating, and expressing care — one that
        neurotypical culture frequently misreads. Understanding the actual dynamics at
        play makes building relationships dramatically easier.
      </p>

      <p style={bodyStyle}>
        The stereotype of the autistic person who doesn't want relationships, doesn't
        experience love, and can't handle intimacy is wrong. Most autistic adults want
        connection. Many want romantic partnership. The challenges aren't in the desire
        — they're in the communication, the navigation, and the systemic mismatch between
        how autistic people naturally relate and what the dominant relationship culture
        expects.
      </p>

      <h2 style={h2Style}>The Double Empathy Problem</h2>

      <p style={bodyStyle}>
        The traditional framing of autism in relationships has been: autistic person
        fails to understand neurotypical partner. The research of Damian Milton and
        others has substantially revised this. The "double empathy problem" posits that
        communication difficulties between autistic and neurotypical people are mutual
        — each has difficulty understanding the other's perspective, communication style,
        and emotional experience.
      </p>

      <p style={bodyStyle}>
        Crucially, studies have found that autistic people communicate significantly
        better with other autistic people than with neurotypical people — and vice versa.
        This suggests the difficulty isn't a deficit in the autistic person. It's a
        mismatch between communication styles that affects both parties.
      </p>

      <p style={bodyStyle}>
        In practical terms: when a relationship has communication difficulties, it's
        worth examining whether those difficulties stem from an inherent problem in one
        partner, or from a style mismatch that both partners can work to bridge. The
        answer changes what a solution looks like.
      </p>

      <h2 style={h2Style}>Communication Style Differences</h2>

      <p style={bodyStyle}>
        Autistic communication tends toward directness, literalness, and explicit
        expression of information. Neurotypical communication tends to rely heavily on
        implication, context, and social convention. Neither is better or worse — they're
        different, and they create friction when both parties expect the other to
        communicate the way they naturally do.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Communication approaches that help in autistic relationships:</p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>Say what you mean directly.</strong> "I would like more physical affection" rather than acting distant and hoping your partner notices. Explicit requests work better than implied needs.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Ask for explicit communication in return.</strong> It's reasonable to tell a partner that you process communication better when it's direct — and to ask them to tell you clearly what they need rather than expecting you to guess.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Develop relationship-specific scripts.</strong> Many autistic people do well with explicit agreements about how to handle specific recurring situations — arguing, requesting space, expressing distress. Building these agreements in calm moments makes them available during difficult ones.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Written communication for difficult topics.</strong> Text or email allows processing time for both parties and creates a record of what was said. Many autistic people communicate more clearly in writing.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Named check-ins.</strong> Regular, scheduled, explicit conversations about how the relationship is going eliminate some of the ambient social maintenance that autistic people often find exhausting and confusing.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Sensory Considerations in Intimacy</h2>

      <p style={bodyStyle}>
        Physical intimacy involves a concentration of sensory input. For autistic people
        with sensory sensitivities, this can be genuinely challenging — not because of
        disinterest in the partner, but because certain types of touch, textures, sounds,
        or lighting activate the sensory system in ways that override the experience of
        connection.
      </p>

      <p style={bodyStyle}>
        This is not a problem to be hidden or worked around silently. It's information
        that's useful to share with a partner. Conversations about sensory preferences
        in intimate contexts — what feels good, what's overwhelming, what the person
        needs to regulate beforehand — are conversations that build intimacy and make
        physical connection more sustainable.
      </p>

      <p style={bodyStyle}>
        It's also worth noting that some autistic people experience heightened sensory
        pleasure — heightened sensitivity can go in both directions, and physical intimacy
        can be particularly intense in positive ways. Again, communication about what's
        actually happening in your body is more useful than guessing.
      </p>

      <h2 style={h2Style}>Dating Apps as an Autistic Person</h2>

      <p style={bodyStyle}>
        Dating apps have some genuine advantages for autistic adults. They remove the
        ambiguity of whether someone is romantically interested. They allow scripted
        communication with time to think before responding. They reduce the demands of
        unstructured social situations. They make interests and preferences visible
        upfront in ways that face-to-face encounters don't.
      </p>

      <p style={bodyStyle}>
        The disadvantages are real too: the volume of messaging can be overwhelming,
        the gap between text-based communication and in-person interaction can be jarring,
        and the social scripts that work on apps don't always transfer to dates.
      </p>

      <ul style={listStyle}>
        <li>Use apps as a filter — identify compatible people before investing emotional energy in in-person meetings</li>
        <li>Communicate early about your communication style ("I tend to be pretty direct — I prefer honest over polite")</li>
        <li>Choose first date settings deliberately — not loud bars, not situations with too many sensory demands</li>
        <li>It's okay to have a prepared set of conversation topics or questions for first dates</li>
        <li>Be honest about needing processing time between messages rather than instant responses</li>
      </ul>

      <h2 style={h2Style}>Autistic-Autistic Relationships</h2>

      <p style={bodyStyle}>
        Autistic people in relationships with other autistic people often report that
        these relationships feel fundamentally different from neurotypical relationships
        — in good ways. Communication that works. Social expectations that match.
        Stimming without judgment. Shared understanding of sensory needs and regulation.
        The absence of the constant double-empathy friction.
      </p>

      <p style={bodyStyle}>
        These relationships have their own challenges — two executive function systems
        that both struggle, both partners potentially in burnout simultaneously, less
        natural compensation between communication styles. But the baseline is
        frequently one of deeper mutual recognition.
      </p>

      <p style={bodyStyle}>
        If you consistently feel more comfortable with autistic people and more misread
        by neurotypical partners, that's useful information about what kind of relationship
        context works best for you. Seeking out autistic community — online, in person —
        isn't just about friendship. It's about finding people who might be potential
        partners who communicate the way you do.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/friendships" style={relatedLinkStyle}>Friendships as an Autistic Adult →</a>
        <a href="/disclosure" style={relatedLinkStyle}>Disclosure: When and How to Tell People You're Autistic →</a>
        <a href="/masking-and-unmasking" style={relatedLinkStyle}>Masking & Unmasking →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical or therapeutic advice. Couples therapy or individual therapy with
          an autism-affirming therapist can be genuinely helpful for relationship challenges.
        </p>
      </div>
    </article>
  );
}
