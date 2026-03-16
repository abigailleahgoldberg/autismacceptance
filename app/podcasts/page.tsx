import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autistic Podcasts Worth Your Time — Autism Acceptance World",
  description:
    "10 podcasts made by and for autistic people. Where to listen, what makes each one worth your time, and why autistic-led media matters. We are not doctors. We are advocates.",
  openGraph: {
    title: "Autistic Podcasts Worth Your Time",
    description:
      "10 podcasts by autistic hosts for autistic listeners. No cure narratives. No inspiration porn. Real voices.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/podcasts",
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

const podcastCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
};

const podcastNameStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 800,
  color: "#FAFAF8",
  marginBottom: "0.25rem",
};

const podcastMetaStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "#A855F7",
  fontWeight: 600,
  marginBottom: "0.75rem",
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function PodcastsPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <a href="/resources" style={{ color: "inherit", textDecoration: "none" }}>Resources</a>
        <span>/</span>
        <span>Podcasts</span>
      </nav>

      <h1 style={h1Style}>Autistic Podcasts Worth Your Time</h1>

      <p style={leadStyle}>
        These 10 podcasts are made by autistic people, for autistic people. They cover diagnosis, burnout, relationships, work, identity, and daily life — all from the inside. Available on Spotify, Apple Podcasts, and most podcast apps unless otherwise noted.
      </p>

      <p style={bodyStyle}>
        A note on format: audio-only content is not universally accessible for autistic people. Several of these shows offer transcripts or captions for select episodes. Where we know transcripts are available, we have noted it. When in doubt, check the show's website directly.
      </p>

      <h2 style={h2Style}>Core Shows</h2>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>1800 Seconds on Autism</p>
        <p style={podcastMetaStyle}>Hosted by Autism Together | UK-based | Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Each episode is approximately 30 minutes and features autistic people talking about their own experiences. The format is straightforward: autistic guests discuss specific topics from their perspective. Episodes cover late diagnosis, employment, relationships, mental health, and sensory processing. The show is produced in the UK and is particularly strong on autistic adult voices that are not commonly heard in American autism media. A good starting show if you are new to autistic podcasts — accessible, honest, and never condescending.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>The Autistic Culture Podcast</p>
        <p style={podcastMetaStyle}>Hosted by Dr. Amy Laurent and Jacquelyn Fede | Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          One of the most intellectually rigorous autistic podcasts available. Laurent and Fede explore autistic culture as a real culture — with its own values, communication styles, humor, and ways of moving through the world. Episodes examine what autistic culture actually looks like, why it is worth preserving and celebrating, and how the pathologizing lens of clinical autism literature misses almost everything important about autistic experience. Essential listening if you want to think more deeply about what autistic identity actually means.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Autism in the Adult</p>
        <p style={podcastMetaStyle}>Independent autistic-hosted podcast | Available on Spotify and Apple Podcasts</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Specifically focused on autistic adults — not children, not parents, not professionals. The host interviews autistic adults about their lives, covering late diagnosis, navigating systems designed for neurotypical people, relationships, work, and daily life. The adult focus makes it immediately relevant in a way that many autism podcasts are not. If you are tired of autism media that treats autistic adults as an afterthought, this show was made specifically for you.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Neurodivergent Rebel</p>
        <p style={podcastMetaStyle}>Hosted by Lyric Holmans | Available everywhere | Also on YouTube with captions</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Lyric Holmans is an autistic and ADHD advocate who has been creating content about neurodivergence since 2016. The podcast covers a wide range of topics including masking, burnout, workplace experience, relationships, and disability rights. Holmans is particularly thoughtful on intersectionality — the ways that being autistic intersects with other identities. The YouTube channel provides captioned video versions of content, which makes it more accessible than audio-only formats for many autistic people.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Divergent Conversations</p>
        <p style={podcastMetaStyle}>Hosted by Patrick Casale and Dr. Megan Anna Neff | Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Casale and Neff are both neurodivergent mental health professionals who discuss autism and ADHD from a clinical and personal perspective simultaneously. This show is particularly useful for autistic people who are also therapists or counselors, for people navigating the mental health system, and for anyone who wants to understand how neurodivergence shows up in therapeutic settings. The hosts are honest about the ways that mainstream mental health practice often fails neurodivergent clients.
        </p>
      </div>

      <h2 style={h2Style}>More Recommended Listening</h2>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>The Autistic Me</p>
        <p style={podcastMetaStyle}>Available on Spotify and Apple Podcasts</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          A personal podcast from an autistic adult documenting life after late diagnosis. Less polished than some shows on this list, which is part of its value — it captures the actual, ongoing experience of figuring out what autism means in your own life after years without the framework. Episodes are conversational and honest about uncertainty, confusion, and the non-linear process of self-understanding after diagnosis.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Different, Not Less</p>
        <p style={podcastMetaStyle}>Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Takes the title from Temple Grandin's framing and runs with it. This show covers the practical and emotional dimensions of autistic adult life with a focus on strengths-based approaches — not "fixing" autistic people but understanding how autistic cognition works and how to build environments and lives that support it. Strong episodes on employment, education, and creative work.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Autistic AF</p>
        <p style={podcastMetaStyle}>Available on Spotify | Explicit content</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Not for everyone, but for the right listener this is one of the most honest autism podcasts out there. The explicit content warning is there for a reason — the hosts do not soften their language or their analysis. Covers masking, trauma, healthcare system failures, ableism in everyday interactions, and the exhaustion of being autistic in a world designed for neurotypical people. If you want an autism podcast that does not hedge or perform positivity, this one delivers.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>The Misfit Talk Podcast</p>
        <p style={podcastMetaStyle}>Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Hosted by and for neurodivergent people, with a particular focus on autistic and ADHD adults who feel like they never quite fit. The show covers daily life, mental health, relationships, and the experience of late diagnosis with warmth and specificity. Good for autistic adults who are early in their post-diagnosis journey and looking for community voices.
        </p>
      </div>

      <div style={podcastCardStyle}>
        <p style={podcastNameStyle}>Actually Autistic on Air</p>
        <p style={podcastMetaStyle}>Available everywhere</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Part of the broader "Actually Autistic" community movement — autistic people speaking for themselves rather than having professionals speak about them. This show features conversations between autistic adults about topics they choose, in language they choose, with no filter from neurotypical gatekeepers. The format is deliberately casual and sometimes raw. The guests are not experts or advocates in the formal sense — they are just autistic people talking about their lives.
        </p>
      </div>

      <h2 style={h2Style}>How to Listen</h2>

      <p style={bodyStyle}>
        All of these shows are available on major podcast platforms. Search the title in Spotify, Apple Podcasts, Pocket Casts, Overcast, or any podcast app. Most are free. Several have Patreon-supported versions with bonus episodes or early access.
      </p>

      <p style={bodyStyle}>
        If audio format is challenging for you, check the show's website for transcripts. YouTube versions of podcast episodes are increasingly common and typically include auto-generated or human-corrected captions. Searching the show name on YouTube often surfaces video versions.
      </p>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/books" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Books by Autistic Authors →</a>
        <a href="/community" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Community →</a>
        <a href="/blog" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Blog →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors. We are advocates. Podcast recommendations reflect our editorial judgment. We have no paid relationship with any show listed here.
      </p>
    </div>
  );
}
