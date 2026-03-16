export const metadata = {
  title: "Medication Considerations for Autistic Adults — Autism Acceptance World",
  description:
    "What autistic adults should know about medication: sensory sensitivities to side effects, advocating with prescribers, and what the research actually says.",
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

export default function MedicationPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>Medication Considerations for Autistic Adults</h1>
      <p style={subStyle}>
        Medication can be a useful tool for managing co-occurring conditions like anxiety,
        depression, ADHD, and sleep difficulties. But autistic adults often have different
        experiences with medication than what prescribers expect.
      </p>
      <hr style={dividerStyle} />

      <div style={calloutStyle}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#EF4444" }}>We are not doctors. We are advocates.</strong>{" "}
          Nothing on this page is medical advice. Always consult your prescriber before starting,
          stopping, or changing any medication. This page exists to help you have better
          conversations with your medical providers.
        </p>
      </div>

      <h2 style={h2Style}>Why Medication Works Differently for Autistic People</h2>
      <p style={paraStyle}>
        There is no medication for autism itself — and there should not be. Autism is not a
        disease. But many autistic adults take medication for co-occurring conditions: anxiety,
        depression, ADHD, OCD, sleep disorders, and others. These medications can be genuinely
        helpful. They can also work differently than prescribers anticipate.
      </p>
      <p style={paraStyle}>
        Autistic neurology involves differences in neurotransmitter systems, sensory processing,
        and interoception (awareness of internal body signals) that can affect how medications
        are experienced. Standard dosing guidelines were developed on predominantly non-autistic
        populations. What is a therapeutic dose for one person may be overwhelming or ineffective
        for another.
      </p>
      <p style={paraStyle}>
        This does not mean medication is bad or should be avoided. It means that finding the right
        medication and the right dose often requires more careful titration, more attention to
        subtle effects, and a prescriber who listens to your experience rather than dismissing it.
      </p>

      <h2 style={h2Style}>Sensory Sensitivity to Side Effects</h2>
      <p style={paraStyle}>
        One of the most important and least-discussed aspects of medication for autistic adults
        is sensory sensitivity to side effects. Many autistic people experience side effects more
        intensely than non-autistic people — or notice effects that are technically within
        "normal" range but feel genuinely distressing.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Physical sensations:</strong> Nausea, dizziness,
          tingling, changes in body temperature, or the feeling of the medication "hitting"
          your system can be much more noticeable and distressing for people with heightened
          interoception or sensory processing differences.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Cognitive effects:</strong> Many autistic adults
          report that some medications produce a "fog" or "flatness" that feels like losing
          access to parts of their thinking. If a medication is effective at reducing anxiety
          but also reduces your ability to engage with your interests, that is a legitimate
          concern worth discussing with your prescriber.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Taste and texture:</strong> Pill size, coating,
          taste, and texture can be genuine barriers for autistic adults with oral sensitivities.
          Liquid formulations, different pill formats, or compounded versions may be available.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Sleep disruption:</strong> Medications that affect
          sleep timing or quality can have cascading effects on autistic adults whose regulation
          already depends heavily on routine and adequate rest.
        </li>
      </ul>
      <p style={paraStyle}>
        If a prescriber dismisses your experience of side effects as "not possible at that dose"
        or "you shouldn't be feeling that," that is a red flag. Your sensory experience is real
        and valid, regardless of what the dosing chart says.
      </p>

      <h2 style={h2Style}>Common Medication Categories</h2>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>SSRIs and SNRIs (antidepressants):</strong> Commonly
        prescribed for anxiety and depression. Many autistic adults respond to lower doses than
        standard starting doses. Side effects including emotional blunting, sensory changes, and
        GI effects may be more pronounced. Starting low and titrating slowly is often recommended.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Stimulants (for ADHD):</strong> Many autistic adults
        also have ADHD. Stimulant medication can be very effective for ADHD symptoms but may
        increase anxiety or sensory sensitivity in some autistic people. Finding the right balance
        often requires patience and close monitoring.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Anti-anxiety medications:</strong> Benzodiazepines
        are sometimes prescribed for acute anxiety. They carry dependence risks that apply to
        everyone. For autistic adults, the sedative effects may impair already-challenging
        executive function. Non-benzodiazepine options like buspirone may be worth exploring.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Sleep medications:</strong> Sleep difficulties are
        extremely common in autistic adults. Melatonin (over-the-counter) is the most studied
        option for autistic sleep issues. Prescription sleep medications should be discussed
        carefully with your prescriber, including their effects on sleep architecture and
        next-day functioning.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Mood stabilizers and atypical antipsychotics:</strong>{" "}
        Sometimes prescribed for emotional dysregulation, irritability, or co-occurring
        conditions. These medications carry more significant side effect profiles and warrant
        careful risk-benefit discussion. Autistic adults should be fully informed about potential
        metabolic, neurological, and cognitive effects before starting.
      </p>

      <h2 style={h2Style}>Advocating for Yourself With Prescribers</h2>
      <p style={paraStyle}>
        Medical appointments can be challenging for autistic adults — sensory-unfriendly
        environments, time pressure, communication differences, and power dynamics all make
        it harder to communicate effectively. Here are practical strategies:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Write it down before you go.</strong> Prepare
          a written list of your symptoms, concerns, current medications, and questions. Bring
          it with you. Offer it to your prescriber to read. This bypasses the pressure of having
          to recall everything in the moment.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Name your communication needs.</strong> "I
          communicate better in writing" or "I need a moment to process before I respond" are
          reasonable things to tell a prescriber.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Ask about starting doses.</strong> "Can we start
          at a lower dose than standard and titrate up? I tend to be sensitive to medication
          effects." This is a reasonable, evidence-informed request.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Track your experience.</strong> Keep a daily log
          of medication effects — even brief notes — to bring to follow-up appointments. This
          gives your prescriber concrete data rather than relying on in-the-moment recall.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Bring support if you need it.</strong> A trusted
          person, written notes, or even this page — anything that helps you communicate what
          you need.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>You can change prescribers.</strong> If your
          current prescriber does not listen to your concerns, dismisses your experience, or
          is not willing to adjust their approach for autistic neurology, you are allowed to
          find someone else.
        </li>
      </ul>

      <h2 style={h2Style}>The Right to Informed Consent</h2>
      <p style={paraStyle}>
        You have the right to full information about any medication before you take it. This
        includes: what it is expected to do, what the common and serious side effects are, how
        long it takes to work, what withdrawal or discontinuation looks like, and what
        alternatives exist.
      </p>
      <p style={paraStyle}>
        You also have the right to decline medication. Medication is a tool, not an obligation.
        If you and your provider determine that non-medication approaches (therapy, accommodations,
        lifestyle changes) are sufficient, that is a valid choice. If you determine that
        medication is helpful, that is also valid. The decision is yours.
      </p>
      <p style={paraStyle}>
        Your body, your brain, your choice — with good information and good support.
      </p>

      <div style={{ ...calloutStyle, marginTop: "3rem" }}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is meant to help you have informed conversations with your prescriber. It is
          not a substitute for professional medical advice. If you are experiencing a medication
          emergency, contact your prescriber, go to your nearest emergency room, or call 911.
        </p>
      </div>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/finding-affirming-therapy" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Finding Affirming Therapy →</a>
        <a href="/anxiety-and-autism" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Anxiety & Autism →</a>
        <a href="/sensory-processing" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Sensory Processing →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>
    </main>
  );
}
