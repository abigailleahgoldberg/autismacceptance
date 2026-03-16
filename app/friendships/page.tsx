import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friendships as an Autistic Adult — Autism Acceptance World",
  description:
    "Why maintaining friendships is exhausting (and that's OK), quality over quantity, parallel play friendships, how to find your people, and online vs in-person friendships.",
  openGraph: {
    title: "Friendships as an Autistic Adult",
    description:
      "Why maintaining friendships is exhausting, quality over quantity, parallel play friendships, and how to find your people.",
    image: "https://autismacceptance.world/bears/bears-together.jpg",
    url: "https://autismacceptance.world/friendships",
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

export default function FriendshipsPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Friendships</span>
      </nav>

      <h1 style={h1Style}>Friendships as an Autistic Adult</h1>

      <p style={leadStyle}>
        Friendship is supposed to be the easy part — you like each other, you spend time
        together, done. For many autistic adults, it's the opposite: the work of
        maintaining friendships is exhausting, confusing, and often invisible to the people
        we're trying to be friends with. Understanding why — and finding approaches that
        actually work — makes a real difference.
      </p>

      <p style={bodyStyle}>
        Autistic adults often struggle with friendship not because they don't value
        connection, but because the neurotypical model of friendship maintenance — casual
        regular contact, implicit emotional availability, unstructured social interaction
        — demands exactly the kinds of cognitive and social resources that autistic
        people have in limited supply. The social labor required to maintain friendships
        at neurotypical intensity is genuinely exhausting. And asking yourself to sustain
        that indefinitely will eventually produce burnout.
      </p>

      <h2 style={h2Style}>Why Friendship Maintenance Is Exhausting</h2>

      <p style={bodyStyle}>
        For neurotypical people, casual social contact is generally pleasant and
        restorative. For many autistic people, social interaction is cognitive work —
        even with people they genuinely like and want to see. The processing demands
        of real-time conversation, managing facial expressions, navigating unstructured
        social scripts, and performing the ambient maintenance of friendship ("just
        checking in," small talk, being available when someone needs to vent) can
        be genuinely depleting.
      </p>

      <p style={bodyStyle}>
        This doesn't mean you don't care about your friends. It means the infrastructure
        for friendship was built for a different kind of nervous system. You care deeply —
        you're just running out of processing bandwidth.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Things that make friendship maintenance harder for autistic adults:</p>
        <ul style={listStyle}>
          <li>Unstructured social time without a clear purpose or activity</li>
          <li>The expectation of spontaneous, frequent, low-stakes contact ("texting to check in")</li>
          <li>Unclear social obligations (when is it rude not to respond? how soon? what do you say?)</li>
          <li>Managing the expectation of continuous emotional availability</li>
          <li>Time blindness — not noticing that too much time has passed between contacts</li>
          <li>Executive function demands of initiating contact</li>
        </ul>
      </div>

      <h2 style={h2Style}>Quality Over Quantity Is Not a Consolation Prize</h2>

      <p style={bodyStyle}>
        The neurotypical model of adult friendship often involves a large social network
        of moderate-depth connections — lots of people you see occasionally, some regularly.
        Many autistic adults function better with a smaller number of deeper connections.
        This isn't a failure to build enough friendships. It's a different architecture.
      </p>

      <p style={bodyStyle}>
        Two or three people who genuinely understand you, accept you as you are, and don't
        require you to perform — that's a richer social life than twenty people with whom
        you're always masking. The goal is connection, not quantity.
      </p>

      <p style={bodyStyle}>
        Releasing yourself from the obligation to maintain more friendships than you have
        capacity for is not giving up on people. It's being honest about your actual
        resources and directing them toward the relationships that matter most to you.
      </p>

      <h2 style={h2Style}>Parallel Play Friendships</h2>

      <p style={bodyStyle}>
        Parallel play — doing things in the same space without directly interacting — is
        natural for young children and often dismissed as a lesser form of social
        connection in adults. For autistic adults, it's often the ideal friendship model.
      </p>

      <p style={bodyStyle}>
        Parallel play friendships are built around shared activity or shared presence
        rather than sustained conversation. You watch movies together without talking
        through them. You both work on your own projects in the same room. You play video
        games, craft, cook, or code alongside each other. The connection comes from
        co-presence and shared experience — not from verbal processing of your respective
        inner lives.
      </p>

      <p style={bodyStyle}>
        These friendships can be profoundly restorative for autistic adults precisely
        because they don't require the same level of cognitive social labor as
        conversation-focused connection. If you find yourself drawn to this kind of
        friendship, that's not a sign that you're doing friendship wrong. It's a sign
        that you know what kind of connection actually works for you.
      </p>

      <h2 style={h2Style}>How to Find Your People</h2>

      <p style={bodyStyle}>
        Autistic adults consistently report that their easiest friendships are with other
        autistic people — and particularly with people who share their specific interests.
        The combination of shared neurotype and shared topic of interest removes many
        of the most difficult aspects of neurotypical social interaction.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Interest-based communities.</strong> Whether online or in person, communities organized around specific interests — games, crafts, fandoms, sports, professional fields — provide a built-in conversation topic and filter for people with whom you share something real.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Autistic community specifically.</strong> Online autistic communities (forums, subreddits, Discord servers, social media groups for autistic adults) are spaces where the social rules are different in ways that tend to work better for autistic people. Less small talk, more depth, more directness, more acceptance of stimming and special interests.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Repeated low-stakes contact.</strong> Proximity and familiarity build friendship. Attending the same recurring event — a weekly game night, a book club, a class — creates the repeated contact that allows friendships to develop gradually without any single interaction having high stakes.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Be direct about friendship.</strong> Neurotypical friendship often develops through an implicit process of gradually increasing investment. Autistic adults can be more direct: "I've really enjoyed talking with you. Would you want to get coffee sometime?" Most people find directness charming, not off-putting.</li>
      </ul>

      <h2 style={h2Style}>Online Friendships Are Real Friendships</h2>

      <p style={bodyStyle}>
        Online friendships — built and maintained primarily through text, gaming, or
        online communities — are often dismissed as less real or less meaningful than
        in-person relationships. For many autistic adults, they're the deepest and most
        sustainable friendships they have.
      </p>

      <p style={bodyStyle}>
        Online communication removes many of the most difficult aspects of autistic social
        interaction: the real-time processing demands, the sensory load of shared physical
        space, the performance of facial expression and body language, the unpredictability
        of spontaneous encounter. What remains is actual exchange of ideas, experiences,
        humor, and care — which is what friendship is actually made of.
      </p>

      <p style={bodyStyle}>
        If your most significant friendships are primarily online, you are not isolated.
        You are using the communication medium that works best for your brain to connect
        with people who matter to you. That's not a lesser form of friendship.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/relationships-and-dating" style={relatedLinkStyle}>Relationships & Dating While Autistic →</a>
        <a href="/disclosure" style={relatedLinkStyle}>Disclosure: When and How to Tell People You're Autistic →</a>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
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
