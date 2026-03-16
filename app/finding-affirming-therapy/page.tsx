export const metadata = {
  title: "Finding Therapy That Actually Works (Not ABA) — Autism Acceptance World",
  description:
    "A guide to finding affirming therapy as an autistic adult: what to look for, red flags, green flags, and questions to ask before your first session.",
};

const pageStyle: React.CSSProperties = {
  maxWidth: "860px",
  margin: "0 auto",
  padding: "3.5rem 1.5rem 6rem",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.03em",
  marginBottom: "0.75rem",
  lineHeight: 1.1,
};

const subStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  color: "rgba(250, 250, 248, 0.6)",
  marginBottom: "3rem",
  maxWidth: "640px",
  lineHeight: 1.7,
};

const h2Style: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#A855F7",
  marginBottom: "0.75rem",
  marginTop: "2.5rem",
  letterSpacing: "-0.01em",
};

const paraStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.82)",
  lineHeight: 1.8,
  marginBottom: "1.25rem",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
};

const liStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.82)",
  lineHeight: 1.8,
  marginBottom: "0.5rem",
};

const calloutStyle: React.CSSProperties = {
  backgroundColor: "rgba(168, 85, 247, 0.08)",
  border: "1px solid rgba(168, 85, 247, 0.25)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "2rem",
  marginTop: "1rem",
};

const calloutTextStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "rgba(250, 250, 248, 0.7)",
  lineHeight: 1.7,
  margin: 0,
};

const dividerStyle: React.CSSProperties = {
  height: "2px",
  background: "linear-gradient(to right, rgba(168, 85, 247, 0.4), transparent)",
  border: "none",
  marginBottom: "3rem",
};

const flagBoxStyle: React.CSSProperties = {
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
};

const redFlagStyle: React.CSSProperties = {
  ...flagBoxStyle,
  backgroundColor: "rgba(239, 68, 68, 0.07)",
  border: "1px solid rgba(239, 68, 68, 0.2)",
};

const greenFlagStyle: React.CSSProperties = {
  ...flagBoxStyle,
  backgroundColor: "rgba(34, 197, 94, 0.07)",
  border: "1px solid rgba(34, 197, 94, 0.2)",
};

export default function FindingAffirmingTherapyPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>Finding Therapy That Actually Works (Not ABA)</h1>
      <p style={subStyle}>
        Good therapy can change your life. Bad therapy — especially the kind that treats autism
        as something to fix — can cause real harm. Here is how to find one and avoid the other.
      </p>
      <hr style={dividerStyle} />

      <div style={calloutStyle}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is for informational purposes only and does not constitute medical or mental
          health advice. Please work with qualified professionals for diagnosis and treatment.
        </p>
      </div>

      <h2 style={h2Style}>What Affirming Therapy Looks Like</h2>
      <p style={paraStyle}>
        Affirming therapy for autistic adults starts from a fundamental premise: autism is
        not a disorder to be corrected. It is a neurological difference that comes with both
        challenges and strengths. The goal of therapy is not to make an autistic person less
        autistic. It is to support that person in living a life that is meaningful, sustainable,
        and genuinely their own.
      </p>
      <p style={paraStyle}>
        Affirming therapy looks like this:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          The therapist follows your lead on what needs addressing, rather than having a
          predetermined agenda of autistic traits to reduce
        </li>
        <li style={liStyle}>
          Accommodations for your communication style — written communication, different session
          formats, sensory-friendly environments — are offered without you having to fight for them
        </li>
        <li style={liStyle}>
          Your autistic experience is treated as valid and your perception of social situations
          is taken seriously
        </li>
        <li style={liStyle}>
          The therapist uses identity-first language or follows your preference
        </li>
        <li style={liStyle}>
          They understand that your challenges are often caused by mismatches between your
          neurology and your environment, not by deficits in your personality
        </li>
        <li style={liStyle}>
          They do not push compliance, eye contact, or neurotypical social performance as goals
        </li>
      </ul>

      <h2 style={h2Style}>Red Flags: Leave This Therapist</h2>
      <div style={redFlagStyle}>
        <ul style={{ ...listStyle, marginBottom: 0 }}>
          <li style={liStyle}>
            They describe the goal of therapy as helping you "seem more normal" or "be easier
            to be around"
          </li>
          <li style={liStyle}>
            They have ABA training and apply a compliance-focused approach to adult therapy
          </li>
          <li style={liStyle}>
            They dismiss your experiences of sensory pain or overload as exaggeration
          </li>
          <li style={liStyle}>
            They insist on eye contact or "appropriate" body language as a therapeutic goal
          </li>
          <li style={liStyle}>
            They suggest autism is the cause of your relationship problems rather than asking
            about the relationship itself
          </li>
          <li style={liStyle}>
            They use functioning labels ("high-functioning") in ways that minimize your struggles
          </li>
          <li style={liStyle}>
            They talk about autism as a tragedy or something to overcome
          </li>
          <li style={liStyle}>
            They recommend "curing" autism through diet, supplements, or other interventions
          </li>
          <li style={liStyle}>
            They have not worked with autistic adults and rely entirely on outdated clinical
            frameworks
          </li>
        </ul>
      </div>

      <h2 style={h2Style}>Green Flags: This Therapist Gets It</h2>
      <div style={greenFlagStyle}>
        <ul style={{ ...listStyle, marginBottom: 0 }}>
          <li style={liStyle}>
            They use your preferred language and ask what that is in your first session
          </li>
          <li style={liStyle}>
            They acknowledge the neurodiversity framework and its validity
          </li>
          <li style={liStyle}>
            They ask about your sensory environment and make accommodations
          </li>
          <li style={liStyle}>
            They are familiar with autistic-led research and organizations (ASAN, Nick Walker,
            Devon Price, etc.)
          </li>
          <li style={liStyle}>
            They do not pathologize stimming, special interests, direct communication, or
            other autistic traits
          </li>
          <li style={liStyle}>
            They ask what YOU want from therapy, not what they think an autistic person needs
          </li>
          <li style={liStyle}>
            They are comfortable with silence, asynchronous communication, or non-standard
            session formats
          </li>
          <li style={liStyle}>
            They acknowledge when something is outside their expertise
          </li>
        </ul>
      </div>

      <h2 style={h2Style}>Questions to Ask Before Your First Session</h2>
      <p style={paraStyle}>
        You have the right to interview a potential therapist before committing to working with
        them. Many offer a brief phone or video consultation for free. These questions can help
        you assess fit:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          "What is your approach to working with autistic adults? What does your framework
          look like?"
        </li>
        <li style={liStyle}>
          "Do you believe autism is something to be treated or reduced, or do you work from a
          neurodiversity model?"
        </li>
        <li style={liStyle}>
          "I have sensory sensitivities. Can you describe your office environment? Are you
          flexible about lighting, seating, or other accommodations?"
        </li>
        <li style={liStyle}>
          "Are you open to written communication between or instead of some sessions?"
        </li>
        <li style={liStyle}>
          "How do you handle situations where I disagree with your interpretation of something?"
        </li>
        <li style={liStyle}>
          "Are you familiar with the concept of masking and its effects on autistic mental health?"
        </li>
        <li style={liStyle}>
          "What is your stance on ABA for autistic adults?"
        </li>
      </ul>
      <p style={paraStyle}>
        A therapist who responds defensively to these questions, or who clearly does not know the
        concepts you are asking about, is probably not the right fit for autistic-affirming work.
      </p>

      <h2 style={h2Style}>Types of Therapy That Can Work Well for Autistic Adults</h2>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>CBT adapted for autistic neurology:</strong> Standard
        CBT assumes a particular relationship between thoughts, feelings, and behaviors that does
        not always match autistic experience (especially with alexithymia). Adapted CBT that works
        with concrete behavioral anchors, allows more structure and predictability, and does not
        require accessing emotions on demand can be effective.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>DBT (Dialectical Behavior Therapy):</strong> DBT
        skills — distress tolerance, emotional regulation, interpersonal effectiveness — translate
        well to many autistic adults, particularly those who experience intense emotional responses
        or RSD. The structured, skills-based format often fits autistic learning styles.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Somatic therapy:</strong> Body-based approaches that
        work with physical sensations rather than requiring emotional labeling can be very effective
        for autistic adults, especially those processing trauma or who experience alexithymia.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Occupational therapy:</strong> OT focused on sensory
        processing, executive function, and daily living skills can address practical challenges
        that pure talk therapy does not reach.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Internal Family Systems (IFS):</strong> IFS, which
        works with distinct "parts" of the self, resonates with some autistic adults — particularly
        the parts-based model of understanding masking, the "true self," and protective responses.
      </p>
      <p style={paraStyle}>
        No single approach works for everyone. You are allowed to try different things, leave what
        is not working, and advocate for adapting any approach to your specific needs. The goal is
        therapy that is useful to you, not therapy that fits a predetermined model.
      </p>

      <h2 style={h2Style}>Where to Find Affirming Therapists</h2>
      <p style={paraStyle}>
        See our{" "}
        <a href="/therapist-directory" style={{ color: "#A855F7" }}>
          Therapist Directory page
        </a>{" "}
        for curated lists of directories, filter tips for Psychology Today, and resources from
        ASAN and other autistic-led organizations.
      </p>

      <div style={{ ...calloutStyle, marginTop: "3rem" }}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong>{" "}
          Finding the right therapist takes time and that is okay. You deserve support that
          actually fits your neurology. Do not settle for a therapist who treats you as a problem
          to be managed.
        </p>
      </div>
    </main>
  );
}
