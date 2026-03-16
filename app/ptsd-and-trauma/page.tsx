export const metadata = {
  title: "PTSD & Trauma in the Autistic Community — Autism Acceptance World",
  description:
    "PTSD rates are significantly elevated in autistic adults. Here is why — and what trauma-informed, autism-affirming support looks like.",
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

export default function PtsdAndTraumaPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>PTSD &amp; Trauma in the Autistic Community</h1>
      <p style={subStyle}>
        Autistic adults experience PTSD and complex trauma at significantly higher rates than
        the general population. The reasons are specific, documented, and deeply connected to
        the systems that were supposed to help us.
      </p>
      <hr style={dividerStyle} />

      <div style={calloutStyle}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is for informational purposes only and does not constitute medical or mental
          health advice. Please work with qualified professionals for diagnosis and treatment.
        </p>
      </div>

      <h2 style={h2Style}>The Numbers Are Not Surprising Once You Know the History</h2>
      <p style={paraStyle}>
        Research on PTSD prevalence in autistic people is still developing, but the studies
        that exist consistently show dramatically elevated rates — some finding that autistic
        adults are more than twice as likely to meet PTSD criteria as non-autistic adults.
        Other research on autistic adults who were subjected to behavioral intervention programs
        in childhood has found PTSD symptom rates comparable to combat veterans.
      </p>
      <p style={paraStyle}>
        When you understand what autistic people have often been through, these numbers stop
        being surprising. They become the predictable outcome of decades of harmful practices,
        normalized bullying, medical mistreatment, and a world that consistently communicated
        that the autistic way of being was something to be fixed rather than accommodated.
      </p>

      <h2 style={h2Style}>Sources of Trauma Specific to Autistic Experience</h2>
      <p style={paraStyle}>
        Trauma in autistic adults often comes from sources that clinicians may not immediately
        recognize as traumatic — because they were presented as "treatment" or "normal growing up."
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Childhood behavioral interventions:</strong>{" "}
          Programs designed to reduce autistic behaviors through conditioning — including programs
          that used punishment for natural autistic responses — have caused documented, lasting
          psychological harm. The autistic adult community has spoken clearly about this. The
          research is catching up. Many autistic adults carry significant trauma from interventions
          that were labeled "therapy."
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Bullying and social exclusion:</strong> Autistic
          children are bullied at significantly higher rates than non-autistic children. This
          bullying is often chronic, severe, and dismissed by adults who did not understand or
          intervene. Chronic social victimization is a recognized pathway to complex PTSD.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Medical trauma:</strong> Autistic people have
          sensory sensitivities that can make medical procedures genuinely overwhelming. When
          medical providers do not accommodate these needs — restrain patients, insist on
          compliance, dismiss pain reports — the resulting experiences can be traumatic. Many
          autistic adults avoid medical care as a result.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Masking trauma:</strong> Spending years performing
          a version of yourself that suppresses your natural responses, constantly monitoring for
          social errors, and experiencing repeated rejection despite enormous effort — this is a
          form of chronic stress that produces trauma. Some autistic adults describe unmasking as
          recovering a self that was systematically suppressed.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Caregiver and institutional relationships:</strong>{" "}
          Autistic people are at elevated risk of abuse across the lifespan due to factors
          including communication differences, dependence on caregivers, difficulty being believed,
          and the normalization of compliance in autistic "treatment." Abuse that occurs within
          systems supposed to protect you produces particularly complex trauma.
        </li>
      </ul>

      <h2 style={h2Style}>Complex PTSD and Developmental Trauma</h2>
      <p style={paraStyle}>
        For many autistic adults, the relevant diagnosis is not single-incident PTSD but complex
        PTSD (C-PTSD) — the result of repeated, prolonged traumatic experiences rather than a
        single event. C-PTSD is associated with chronic emotional dysregulation, disturbances in
        self-perception, and difficulties in relationships.
      </p>
      <p style={paraStyle}>
        C-PTSD symptoms in autistic adults can overlap significantly with autistic traits in ways
        that make both harder to recognize:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          Hypervigilance that looks like social anxiety
        </li>
        <li style={liStyle}>
          Emotional dysregulation that gets attributed to autism rather than trauma history
        </li>
        <li style={liStyle}>
          Shutdown states that can be read as "behavioral issues" rather than trauma responses
        </li>
        <li style={liStyle}>
          Avoidance of situations that echo traumatic contexts (certain institutions, medical
          settings, school-like environments)
        </li>
        <li style={liStyle}>
          A fundamental distrust of helpers, caregivers, and systems — based on accurate
          historical information
        </li>
      </ul>
      <p style={paraStyle}>
        Developmental trauma — trauma that occurs during childhood when the nervous system is
        still forming — can be particularly complex because it shapes the developing brain's
        baseline response patterns. For autistic children who experienced chronic stress or
        traumatic interventions, the nervous system may have organized itself around those
        experiences in ways that persist into adulthood.
      </p>

      <h2 style={h2Style}>How Autistic Neurology Affects Trauma Processing</h2>
      <p style={paraStyle}>
        Autistic neurology interacts with trauma in ways that standard trauma models may not
        fully account for.
      </p>
      <p style={paraStyle}>
        Sensory processing differences mean that sensory triggers for trauma can be more intense
        and more pervasive. Sounds, smells, textures, or physical sensations that echo traumatic
        contexts can produce full physiological trauma responses in autistic people who may not
        immediately recognize the connection.
      </p>
      <p style={paraStyle}>
        Alexithymia — difficulty identifying and naming internal emotional states — can make it
        harder to recognize when you are in a trauma response. You may experience the physical
        symptoms (heart rate increase, dissociation, sudden fatigue) without the emotional label
        that would tell a neurotypical person "I am being triggered."
      </p>
      <p style={paraStyle}>
        Monotropism means that once a trauma response is activated, it may dominate attention
        completely — flooding the system with the traumatic content and making it very difficult
        to shift attention elsewhere.
      </p>

      <h2 style={h2Style}>Trauma-Informed Approaches That Respect Autistic Neurology</h2>
      <p style={paraStyle}>
        Effective trauma treatment for autistic adults needs to account for autistic neurology,
        not work against it.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Somatic approaches:</strong> Body-based trauma
          therapies that work with physical sensations rather than requiring emotional labeling
          can be effective for autistic adults with alexithymia. The work happens in the body,
          not just the narrative.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Paced and collaborative exposure:</strong> If
          exposure work is part of treatment, it should be fully collaborative, paced entirely
          by the autistic person, and accompanied by robust coping resources. Never forced.
          Never "for your own good."
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Sensory safety in the therapy environment:</strong>{" "}
          The physical environment of therapy matters. Fluorescent lighting, certain sounds, a
          practitioner who requires eye contact — these can activate the nervous system in ways
          that make trauma work harder. A good trauma therapist will ask about sensory needs.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Explicit validation of autistic experience:</strong>{" "}
          Good trauma treatment for autistic adults names the sources of trauma clearly — including
          the harm done by systems that were supposed to help. This is not "dwelling on the past."
          It is accurate history that supports genuine healing.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Flexibility in communication:</strong> Written
          processing, drawing, movement, different session formats — a trauma-informed autistic
          affirming therapist will offer options, not just the standard talk-therapy format.
        </li>
      </ul>

      <h2 style={h2Style}>You Were Not Difficult. The Systems Failed You.</h2>
      <p style={paraStyle}>
        Many autistic adults carry internalized blame for what happened to them. The message
        embedded in years of behavioral intervention is that your natural responses were the
        problem — that the goal was to change you until you were acceptable.
      </p>
      <p style={paraStyle}>
        That message was wrong. Your responses were not the problem. Systems that prioritized
        compliance over wellbeing, that treated natural autistic behavior as something to
        extinguish rather than accommodate — those systems failed you.
      </p>
      <p style={paraStyle}>
        Trauma recovery for autistic adults often includes dismantling that internalized story.
        You were not too much. You were not broken. You were autistic in environments that did
        not accommodate you and sometimes actively harmed you. The harm was real. The recovery
        is possible.
      </p>

      <div style={{ ...calloutStyle, marginTop: "3rem" }}>
        <p style={calloutTextStyle}>
          If you are in crisis, please reach out. Call or text{" "}
          <strong style={{ color: "#FAFAF8" }}>988</strong> for the Suicide and Crisis Lifeline,
          or text <strong style={{ color: "#FAFAF8" }}>HOME to 741741</strong> for the Crisis
          Text Line. See our{" "}
          <a href="/crisis-resources" style={{ color: "#A855F7" }}>
            Crisis Resources page
          </a>{" "}
          for more autistic-specific support.
        </p>
      </div>
    </main>
  );
}
