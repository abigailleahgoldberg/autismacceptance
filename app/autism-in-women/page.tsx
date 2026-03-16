import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism in Women & Gender-Diverse People — Autism Acceptance World",
  description:
    "Why women and nonbinary people are massively underdiagnosed, the masking tax, and how diagnostic criteria built around boys failed an entire generation of autistic people.",
  openGraph: {
    title: "Autism in Women & Gender-Diverse People",
    description:
      "Why women and nonbinary people are massively underdiagnosed, the masking tax, and how diagnostic criteria built around boys failed an entire generation of autistic people.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/autism-in-women",
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

export default function AutismInWomenPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Autism in Women & Gender-Diverse People</span>
      </nav>

      <h1 style={h1Style}>Autism in Women & Gender-Diverse People</h1>

      <p style={leadStyle}>
        For decades, autism research and clinical practice were built almost entirely around
        one population: white boys. Everyone else — women, nonbinary people, girls, people
        of color — was either excluded from studies or assumed to present identically. They
        don't. And the cost of that assumption has been enormous.
      </p>

      <p style={bodyStyle}>
        Autistic women and gender-diverse people are diagnosed later, diagnosed less
        frequently, and misdiagnosed more often than autistic men. They spend longer in
        the mental health system receiving treatment for the wrong things. They mask harder
        and longer. And they frequently don't learn they're autistic until they're in their
        thirties, forties, or later — sometimes only after a child's diagnosis prompts
        them to look more closely at themselves.
      </p>

      <p style={bodyStyle}>
        This isn't because autism is rarer in women and nonbinary people. Research
        increasingly suggests the gap in diagnosis rates reflects a failure of the
        diagnostic framework, not a real difference in prevalence.
      </p>

      <h2 style={h2Style}>A Diagnostic Framework Built to Miss Half the Population</h2>

      <p style={bodyStyle}>
        The original autism diagnostic criteria were developed primarily from observations
        of male patients. Leo Kanner's foundational work in the 1940s, Hans Asperger's
        research (with its own deeply troubling history), and the DSM criteria that followed
        — all of them were disproportionately based on male presentations of autism.
      </p>

      <p style={bodyStyle}>
        What gets identified as "classic autism" in clinical settings — difficulty with
        eye contact, literal communication, intense interest in technical systems,
        resistance to social scripts — reflects one way autism manifests. It happens to be
        a way that's more common in males. Women and nonbinary autistic people often
        present differently, and those differences were never adequately incorporated into
        the diagnostic picture.
      </p>

      <p style={bodyStyle}>
        Research by Lai, Lombardo, and colleagues has documented meaningful differences
        in how autism presents across genders. Hull, Petrides, and colleagues have
        specifically studied camouflaging — the adaptive process by which autistic people
        learn to mask their autistic traits — and found that it is significantly more
        prevalent among autistic women. (Hull et al., 2017; Lai et al., 2015)
      </p>

      <p style={citationStyle}>
        Hull, L., Petrides, K. V., Allison, C., et al. (2017). "Putting on my best normal": Social
        camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental
        Disorders. Lai, M. C., et al. (2015). Sex/gender differences and autism: Autism Spectrum
        Disorder Diagnosis Considerations. JAMA Psychiatry.
      </p>

      <h2 style={h2Style}>The Masking Tax</h2>

      <p style={bodyStyle}>
        Masking — the process of suppressing, hiding, or mimicking autistic behavior to
        appear neurotypical — is something many autistic people do to varying degrees.
        But research consistently shows that autistic women and nonbinary people mask
        more intensively and from an earlier age than autistic men.
      </p>

      <p style={bodyStyle}>
        Part of this is socialization. Girls are taught social performance earlier and
        more intensively than boys. The social penalties for "odd" behavior are applied
        more harshly to girls. And the social skills autistic girls often develop —
        learning to watch and mimic others, to script conversations, to navigate complex
        social situations through intense observation and effort — can actually make them
        look socially capable in ways that hide their autism.
      </p>

      <p style={bodyStyle}>
        But masking isn't free. It requires enormous cognitive and emotional energy. It's
        associated with significantly higher rates of anxiety, depression, burnout, and
        suicidal ideation. Autistic women who mask effectively are less likely to receive
        support because they appear to be managing fine — even when they're exhausted,
        overwhelmed, and falling apart in private.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>What autistic exhaustion looks like when you're masking well:</p>
        <ul style={listStyle}>
          <li>Appearing calm and functional at work, then shutting down completely at home</li>
          <li>Being able to sustain social performance for hours, then needing days to recover</li>
          <li>Anxiety and depression that clinicians can't quite explain</li>
          <li>The persistent feeling that you're performing, not living</li>
          <li>Sensory overwhelm that builds throughout the day and releases in private</li>
          <li>Autistic burnout episodes that look like depression to the outside world</li>
        </ul>
      </div>

      <h2 style={h2Style}>Signs of Autism in Women That Get Missed</h2>

      <p style={bodyStyle}>
        Because clinical presentations have been defined by male-coded behavior,
        many autistic traits that are common in women and nonbinary people are either
        not on clinicians' radar or are misattributed to other conditions.
      </p>

      <p style={bodyStyle}>
        Women are more likely to be diagnosed with anxiety disorders, depression, eating
        disorders, borderline personality disorder, or complex PTSD — sometimes instead
        of autism, sometimes as co-occurring conditions that obscure the autism underneath.
        These misdiagnoses can result in years of treatment that doesn't address the actual
        root of someone's experience.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Intense special interests in socially acceptable domains.</strong> A deep interest in horses, fiction, celebrities, or social dynamics is less likely to be flagged as autistic than one in trains or computer systems — even though the quality of the interest (intense focus, encyclopedic knowledge, emotional connection) is the same.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Social performance learned through observation and mimicry.</strong> Autistic women often develop sophisticated social scripts by watching others. This can make them appear socially skilled, masking the underlying difficulty and effortfulness of social interaction.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Sensory sensitivities dismissed as "high-maintenance" behavior.</strong> Difficulty with clothing textures, lights, smells, or sounds is often not recognized as sensory processing difference in women — it gets labeled as being picky, sensitive, or difficult.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Rigidity and need for routine reframed as "perfectionism" or "being organized."</strong> Traits that read as autistic in boys may read as positive personality traits in women.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Emotional intensity and empathy.</strong> Autistic women often experience intense empathy — sometimes overwhelmingly so. This doesn't fit the stereotype of autistic people as unempathetic, causing significant diagnostic confusion.</li>
      </ul>

      <h2 style={h2Style}>The Specific Experience of Nonbinary and Gender-Diverse Autistic People</h2>

      <p style={bodyStyle}>
        Research has found notably high rates of gender diversity among autistic people.
        Autistic people are significantly more likely to identify as nonbinary, trans,
        or gender-diverse than the general population, and the relationship between autism
        and gender identity is complex, bidirectional, and still being studied.
      </p>

      <p style={bodyStyle}>
        For gender-diverse autistic people, the experience of being unseen goes double —
        navigating a medical and mental health system that often pathologizes both identities
        simultaneously, while frequently lacking affirming care for either.
      </p>

      <p style={bodyStyle}>
        The Autistic Women and Nonbinary Network (AWN) is one of the leading organizations
        run by and for autistic women and gender-diverse autistic people. Their work centers
        community, advocacy, and the specific experiences of people who have been most
        systematically failed by existing autism frameworks.
      </p>

      <h2 style={h2Style}>Getting Diagnosed As an Adult</h2>

      <p style={bodyStyle}>
        If you're a woman or gender-diverse person who suspects you might be autistic,
        the path to assessment can be frustrating. Many clinicians still hold outdated
        ideas about what autism looks like. You may encounter skepticism.
      </p>

      <p style={bodyStyle}>
        Seek out clinicians with specific experience assessing autism in adults, and
        specifically in women and nonbinary people. Request a referral to a
        neuropsychological assessment. Come with documentation: a personal history of
        the traits and experiences you've noticed, how they've affected your life, and
        how long they've been present.
      </p>

      <p style={bodyStyle}>
        Your experience is real. You are not too social to be autistic. You are not too
        empathetic. You are not masking too well. If your life has felt like hard work in
        ways you couldn't explain, you deserve answers.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Keep Reading</p>
        <a href="/masking-and-unmasking" style={relatedLinkStyle}>Masking & Unmasking →</a>
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
