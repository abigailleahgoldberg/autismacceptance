export const metadata = {
  title: "Depression & Autism — Autism Acceptance World",
  description:
    "Depression in autistic adults is often a response to masking, rejection, and isolation — not a built-in feature of autism. Here is what affirming support looks like.",
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

export default function DepressionAndAutismPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>Depression &amp; Autism</h1>
      <p style={subStyle}>
        Depression rates among autistic adults are significantly higher than in the general
        population. The reasons are understandable: years of masking, repeated rejection,
        isolation, and a world that communicates daily that you are too much or not enough.
      </p>
      <hr style={dividerStyle} />

      <div style={calloutStyle}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong> This
          page is for informational purposes only and does not constitute medical or mental health
          advice. Please work with qualified professionals for diagnosis and treatment.
        </p>
      </div>

      <h2 style={h2Style}>Why Autistic Adults Experience Depression at Higher Rates</h2>
      <p style={paraStyle}>
        Depression is not a symptom of autism. It is a response to circumstances. And the
        circumstances that many autistic adults face — chronic social rejection, exhausting
        masking, sensory overload with no relief, unemployment or underemployment, isolation
        from community — are exactly the kind of circumstances that produce depression.
      </p>
      <p style={paraStyle}>
        Research consistently shows that autistic people experience depression at significantly
        elevated rates compared to non-autistic people. This is not because autistic brains are
        prone to depression by design. It is because autistic people are more likely to have
        experienced the specific conditions that lead to depression: rejection, invisibility,
        exhaustion from performing a self that is not your own.
      </p>
      <p style={paraStyle}>
        Recognizing that depression is environmental rather than intrinsic is important. It means
        the path forward includes changing conditions, not just managing symptoms. It means
        community, accommodation, and genuine acceptance are not optional extras — they are
        depression prevention.
      </p>

      <h2 style={h2Style}>How Depression Presents Differently in Autistic People</h2>
      <p style={paraStyle}>
        Depression in autistic adults does not always look like the textbook presentation.
        Clinicians trained on neurotypical presentations may miss it entirely — or misidentify
        it as something else.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Increased rigidity:</strong> Depression can look
          like increased need for routine and sameness, or a narrowing of interests. This can be
          mistaken for "more autistic behavior" rather than recognized as a depressive episode.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Withdrawal from special interests:</strong> Losing
          engagement with a deep interest is often a significant warning sign for autistic adults.
          If the thing that usually holds your attention no longer does, that is meaningful.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Shutdown rather than sadness:</strong> Autistic
          depression often presents as shutdown — reduced communication, reduced activity, low
          energy, going quiet — rather than visible crying or expressed sadness.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Burnout overlap:</strong> Autistic burnout and
          depression share many features. They can co-occur or be mistaken for each other.
          See our page on autistic burnout for more on this distinction.
        </li>
      </ul>

      <h2 style={h2Style}>Alexithymia: Not Knowing You Are Depressed</h2>
      <p style={paraStyle}>
        Alexithymia is the difficulty identifying and describing one's own emotional states.
        It is common in autistic people — research suggests roughly half of autistic adults
        experience significant alexithymia.
      </p>
      <p style={paraStyle}>
        For autistic people with alexithymia, depression can be entirely invisible from the
        inside. You might notice that you are functioning poorly — not doing things you normally
        do, feeling physically heavy, not caring about outcomes — without having a clear internal
        label of "I feel depressed." You might notice the behavioral symptoms without connecting
        them to an emotional state.
      </p>
      <p style={paraStyle}>
        This matters for self-monitoring. Instead of asking "am I depressed?" try tracking
        behavioral indicators: Am I engaging with my interests? Am I doing basic self-care? Am
        I communicating with people I care about? Have I been in shutdown for more than a day
        or two? These behavioral signals may be more accessible than emotional ones.
      </p>
      <p style={paraStyle}>
        It also matters for treatment. Therapy approaches that rely heavily on identifying and
        naming emotions may need to be adapted. A skilled, affirming therapist who understands
        alexithymia can work with behavioral anchors and physical sensations rather than requiring
        emotional labeling.
      </p>

      <h2 style={h2Style}>The Masking Toll</h2>
      <p style={paraStyle}>
        Masking — hiding autistic traits to appear neurotypical — is one of the strongest
        predictors of depression in autistic people. The research on this is consistent and clear.
        Autistic adults who mask heavily are significantly more likely to experience depression,
        anxiety, and suicidal ideation than those who mask less.
      </p>
      <p style={paraStyle}>
        This is not surprising. Masking requires enormous cognitive and emotional resources.
        It requires suppressing natural responses, monitoring yourself constantly, performing
        a version of yourself that is not quite real. Over time, this produces a disconnection
        from your own sense of self — and that disconnection is a core feature of depression.
      </p>
      <p style={paraStyle}>
        The implication is not "just stop masking" — that is a dangerous oversimplification.
        Many autistic adults mask because the consequences of not masking are real: job loss,
        social rejection, safety risks. The implication is that reducing masking pressure —
        through finding safer communities, affirming workplaces, and environments where you can
        be yourself — is a genuine mental health intervention.
      </p>

      <h2 style={h2Style}>Rejection Sensitive Dysphoria</h2>
      <p style={paraStyle}>
        Many autistic adults, particularly those who also have ADHD, experience rejection
        sensitive dysphoria (RSD) — an intense emotional response to perceived or actual
        rejection, criticism, or failure. This is not weakness. It is a pattern in how
        certain brains process social threat.
      </p>
      <p style={paraStyle}>
        RSD can produce depressive episodes that feel acute and overwhelming, then lift relatively
        quickly once the perceived rejection is resolved or reframed. This pattern is different
        from a major depressive episode but can be just as destabilizing. Recognizing it as RSD
        rather than character failure is an important first step.
      </p>

      <h2 style={h2Style}>What Affirming Therapy Looks Like</h2>
      <p style={paraStyle}>
        Affirming therapy for autistic adults with depression looks different from standard
        depression treatment. Key features include:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          A therapist who understands autism and does not treat autistic traits as deficits
          to be corrected
        </li>
        <li style={liStyle}>
          Approaches that work with alexithymia rather than requiring emotional labeling
        </li>
        <li style={liStyle}>
          Focus on environmental changes and accommodations alongside internal coping strategies
        </li>
        <li style={liStyle}>
          Recognition that some autistic depression is directly caused by external factors
          that need to change — not just internal thinking patterns that need to be reframed
        </li>
        <li style={liStyle}>
          Flexible session formats (written check-ins, different communication styles,
          sensory-friendly environments)
        </li>
        <li style={liStyle}>
          Explicit work on unmasking and self-acceptance alongside depression management
        </li>
      </ul>
      <p style={paraStyle}>
        See our page on{" "}
        <a href="/finding-affirming-therapy" style={{ color: "#A855F7" }}>
          finding affirming therapy
        </a>{" "}
        for more detail on what to look for and what to avoid.
      </p>

      <h2 style={h2Style}>You Are Not Too Much</h2>
      <p style={paraStyle}>
        Depression often tells a story about you — that you are a burden, that things will
        never improve, that you are inherently broken. For autistic adults who have spent years
        receiving messages that their natural way of being is wrong, these stories can feel
        very true.
      </p>
      <p style={paraStyle}>
        They are not true. Your depression is a response to real experiences in a real world
        that has not, on the whole, done right by autistic people. That is not your fault.
        Your neurology is not the problem. The mismatch between what you need and what most
        environments provide is the problem — and mismatches can change.
      </p>
      <p style={paraStyle}>
        Autistic adults can and do recover from depression. Usually through a combination of
        better support, more aligned environments, community, and sometimes medication. The
        path forward exists.
      </p>

      <div style={{ ...calloutStyle, marginTop: "3rem" }}>
        <p style={calloutTextStyle}>
          If you are in crisis, please reach out now. Call or text{" "}
          <strong style={{ color: "#FAFAF8" }}>988</strong> for the Suicide and Crisis
          Lifeline, or text <strong style={{ color: "#FAFAF8" }}>HOME to 741741</strong> for
          the Crisis Text Line. See our{" "}
          <a href="/crisis-resources" style={{ color: "#A855F7" }}>
            Crisis Resources page
          </a>{" "}
          for more autistic-specific support.
        </p>
      </div>
    </main>
  );
}
