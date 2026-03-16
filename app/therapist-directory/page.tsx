import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finding an Autistic-Affirming Therapist — Autism Acceptance World",
  description:
    "How to find a therapist who actually understands autism. Neurodivergent Therapist Directory, Psychology Today filters, questions to ask, and red flags to avoid. We are not doctors. We are advocates.",
  openGraph: {
    title: "Finding an Autistic-Affirming Therapist",
    description:
      "How to find a therapist who understands autism. Red flags, green flags, questions to ask, and where to search.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/therapist-directory",
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

const flagBoxStyle = (color: string): React.CSSProperties => ({
  backgroundColor: `rgba(${color}, 0.08)`,
  border: `1px solid rgba(${color}, 0.3)`,
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1.25rem",
});

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function TherapistDirectoryPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <a href="/resources" style={{ color: "inherit", textDecoration: "none" }}>Resources</a>
        <span>/</span>
        <span>Find a Therapist</span>
      </nav>

      <h1 style={h1Style}>Finding an Autistic-Affirming Therapist</h1>

      <p style={leadStyle}>
        Most therapists were not trained to work with autistic adults. Many were trained in frameworks that treat autism as a deficit to be corrected. Finding one who actually understands autistic neurology takes effort — but the difference between an affirming therapist and an uninformed one is enormous.
      </p>

      <p style={bodyStyle}>
        This guide covers where to search, what to ask, and how to recognize both red flags and green flags in the first few sessions.
      </p>

      <h2 style={h2Style}>Where to Search</h2>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Neurodivergent Therapist Directory</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          The most targeted resource for finding neurodivergent-affirming therapists. Listings are self-submitted by providers who identify as neurodivergent themselves or who specifically specialize in neurodivergent clients. Search at neurodivergenttherapist.com. The directory covers the US, UK, Canada, and Australia with filter options by specialty, location, and insurance acceptance.
        </p>
      </div>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Psychology Today Therapist Finder</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          The most widely used therapist directory. Go to psychologytoday.com/us/therapists and use these filters: under "Issues" select Autism Spectrum Disorder and/or Neurodevelopmental Disorders. Under "Therapy Types" you can filter for approaches that tend to be more compatible with autistic clients — Acceptance and Commitment Therapy (ACT) and Internal Family Systems (IFS) show up more often among neurodivergent-affirming providers. Read profiles carefully: providers who describe autism in cure-focused or deficit-only language in their own profile copy are showing you who they are.
        </p>
      </div>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Alma, Headway, Zocdoc</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          These insurance-based directories can filter by specialty. Search "autism" or "neurodivergent" in the specialty field. These platforms lean toward therapists who accept insurance, which makes them useful for people with limited budgets. Not all autistic-affirming therapists list on these platforms, but enough do to make them worth checking.
        </p>
      </div>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Autistic Community Word of Mouth</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Reddit communities like r/AutisticAdults and r/autism regularly have threads asking for therapist recommendations by location. A therapist recommended by multiple autistic adults is often a more reliable signal than directory listings alone. Facebook groups for autistic adults in your city or region can also be useful for referrals.
        </p>
      </div>

      <h2 style={h2Style}>Questions to Ask Before the First Session</h2>

      <p style={bodyStyle}>
        You are interviewing the therapist, not the other way around. A brief phone consultation (many therapists offer a free 15-minute call) is an opportunity to ask direct questions. Here are questions that tend to surface useful information:
      </p>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.75rem" }}>"What is your experience working with autistic adults specifically?" — You want to hear specific experience, not generic disability experience.</li>
        <li style={{ marginBottom: "0.75rem" }}>"Are you familiar with autistic burnout as a distinct experience?" — A therapist who knows this term and can speak to it has done their homework.</li>
        <li style={{ marginBottom: "0.75rem" }}>"What is your view on masking in autistic clients? Do you work with clients on unmasking?" — This question separates therapists who see masking as adaptive from those who see it as a goal.</li>
        <li style={{ marginBottom: "0.75rem" }}>"Do you have autistic clients currently or previously?" — Recent experience with autistic adults is more relevant than training alone.</li>
        <li style={{ marginBottom: "0.75rem" }}>"How do you adapt your communication style for autistic clients?" — Good answers include explicit communication, written summaries, flexible pacing, and patience with processing time. Red flag if they cannot answer this.</li>
        <li style={{ marginBottom: "0.75rem" }}>"What is your view on ABA-based approaches for adult autistic clients?" — The answer should not include ABA as an appropriate adult intervention. If it does, end the call.</li>
      </ul>

      <h2 style={h2Style}>Green Flags</h2>

      <div style={flagBoxStyle("34, 197, 94")}>
        <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginBottom: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>Uses identity-first language ("autistic person") without prompting</li>
          <li style={{ marginBottom: "0.5rem" }}>Familiar with autistic burnout, masking, and the double empathy problem</li>
          <li style={{ marginBottom: "0.5rem" }}>Asks about your sensory needs for the session environment (lighting, noise, seating)</li>
          <li style={{ marginBottom: "0.5rem" }}>Does not treat eye contact as a therapeutic goal</li>
          <li style={{ marginBottom: "0.5rem" }}>Communicates explicitly and literally, not in hints and subtext</li>
          <li style={{ marginBottom: "0.5rem" }}>Willing to provide session summaries in writing</li>
          <li style={{ marginBottom: "0.5rem" }}>Does not pathologize stimming or other autistic traits</li>
          <li style={{ marginBottom: "0.5rem" }}>Has lived experience with neurodivergence themselves or has substantial autistic adult clientele</li>
          <li style={{ marginBottom: "0.5rem" }}>Treats your stated experience as authoritative rather than a symptom to be interpreted</li>
        </ul>
      </div>

      <h2 style={h2Style}>Red Flags</h2>

      <div style={flagBoxStyle("220, 38, 38")}>
        <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", marginBottom: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>Uses person-first language exclusively and corrects you when you say "autistic person"</li>
          <li style={{ marginBottom: "0.5rem" }}>Frames autism as a deficit to be managed rather than a neurological difference to be understood</li>
          <li style={{ marginBottom: "0.5rem" }}>Believes eye contact and other social mimicry are appropriate therapy goals for autistic adults</li>
          <li style={{ marginBottom: "0.5rem" }}>Recommends ABA-based techniques or framings for adult clients</li>
          <li style={{ marginBottom: "0.5rem" }}>Does not know what autistic burnout is or dismisses it</li>
          <li style={{ marginBottom: "0.5rem" }}>Treats your autism as the explanation for all your problems</li>
          <li style={{ marginBottom: "0.5rem" }}>Pushes social skills training as the primary intervention</li>
          <li style={{ marginBottom: "0.5rem" }}>Seems more interested in your functioning as seen by others than your internal experience</li>
          <li style={{ marginBottom: "0.5rem" }}>Dismisses sensory pain or treats it as anxiety to be habituated to</li>
        </ul>
      </div>

      <h2 style={h2Style}>Therapy Modalities That Tend to Work</h2>

      <p style={bodyStyle}>
        No therapy modality is universally right for autistic adults, and the therapist matters more than the modality. That said, certain approaches tend to be more compatible with autistic neurology than others.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>Acceptance and Commitment Therapy (ACT)</strong> works with psychological flexibility and values-based living rather than trying to eliminate autistic traits. It tends to be compatible with autistic adults because it does not require the therapist to define "normal" functioning as the goal.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>Internal Family Systems (IFS)</strong> has gained significant traction in autistic communities. The framework — working with internal "parts" rather than trying to change surface behavior — resonates with many autistic adults' experience of their own internal complexity.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>Somatic approaches</strong> can be helpful for autistic adults with significant sensory and body-awareness components to their experience, including interoceptive differences and trauma held in the body.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>CBT</strong> is widely used and has the most research base, including with autistic populations. It can work well with an autistic-affirming therapist who adapts it for autistic communication styles. It can be actively harmful with a therapist who uses it to pathologize autistic traits or push social compliance.
      </p>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/finding-affirming-therapy" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Finding Affirming Therapy →</a>
        <a href="/legal-rights" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Legal Rights for Autistic Adults →</a>
        <a href="/crisis-resources" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Crisis Resources →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors. We are advocates. This page provides general guidance only. Finding the right therapist is a personal process. The directory links above are starting points, not endorsements of specific providers.
      </p>
    </div>
  );
}
