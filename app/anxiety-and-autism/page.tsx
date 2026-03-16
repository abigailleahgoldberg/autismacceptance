export const metadata = {
  title: "Anxiety & Autism: Understanding the Connection — Autism Acceptance World",
  description:
    "Anxiety in autistic adults is most often a response to hostile environments, not an inherent feature of autism. Here is what that means and what actually helps.",
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

export default function AnxietyAndAutismPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>Anxiety &amp; Autism: Understanding the Connection</h1>
      <p style={subStyle}>
        Anxiety is one of the most common experiences among autistic adults — but it is not
        inherent to autism. Most of the time, anxiety is a response to a world that was not
        built for autistic brains.
      </p>
      <hr style={dividerStyle} />

      <div style={calloutStyle}>
        <p style={calloutTextStyle}>
          <strong style={{ color: "#A855F7" }}>We are not doctors. We are advocates.</strong> This
          page is for informational purposes only and does not constitute medical or mental health
          advice. Please work with qualified professionals for diagnosis and treatment.
        </p>
      </div>

      <h2 style={h2Style}>Anxiety Is Not Built Into Autism</h2>
      <p style={paraStyle}>
        If you are autistic and you experience anxiety, you have probably been told that anxiety
        is just part of autism. That is an incomplete — and often harmful — framing. Anxiety is
        not hardwired into autistic neurology. Anxiety develops when a nervous system is
        repeatedly exposed to environments, demands, or relationships that feel threatening or
        unmanageable.
      </p>
      <p style={paraStyle}>
        Autistic people live in a world that is structurally hostile to autistic neurology. Loud
        offices. Unpredictable social rules. Eye contact demands. Sensory overload on public
        transit. Years of being told your natural responses are wrong. These experiences produce
        anxiety not because of autism itself, but because of the mismatch between autistic needs
        and neurotypical environments.
      </p>
      <p style={paraStyle}>
        This distinction matters because it shifts the focus. The question is not "how do we
        reduce autistic anxiety by making autistic people more tolerant?" It is: "how do we
        reduce the environmental load that produces anxiety in the first place?"
      </p>

      <h2 style={h2Style}>Monotropism and the Anxiety Loop</h2>
      <p style={paraStyle}>
        Monotropism is the tendency of autistic attention to flow intensely toward a small number
        of interests or concerns at a time. This is a natural feature of autistic cognition — and
        it has important implications for anxiety.
      </p>
      <p style={paraStyle}>
        When a threat or worry enters the monotropic attention system, it can become the dominant
        focus. The autistic brain processes that threat deeply, repeatedly, and thoroughly — which
        is useful for solving problems, but exhausting when the "threat" is a social interaction
        from two weeks ago or an ambiguous text message that might mean something bad.
      </p>
      <p style={paraStyle}>
        Rumination is not a character flaw. It is monotropism applied to distressing content.
        Understanding this can reduce self-blame and open up more effective strategies: interrupting
        the loop with a focused activity, using body-based grounding techniques to shift out of
        the mental channel, or finding safe predictability that reduces the number of ambiguous
        inputs the system has to process.
      </p>

      <h2 style={h2Style}>Types of Anxiety in Autistic Adults</h2>
      <p style={paraStyle}>
        Anxiety in autistic people shows up in several overlapping forms. Understanding the
        differences can help you identify what you are actually dealing with.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Sensory anxiety</strong> emerges directly from
        sensory overload or anticipation of sensory overload. Crowded spaces, fluorescent lights,
        certain sounds or textures — these can trigger a genuine threat response in the nervous
        system. This is not phobia. It is your body correctly registering an overwhelming input.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Social anxiety</strong> in autistic adults is often
        rooted in a history of social rejection, confusion, and failure despite effort. You learned
        that social situations are unpredictable and that the consequences of getting it wrong can
        be severe. The anxiety makes sense given the data your nervous system has collected.
      </p>
      <p style={paraStyle}>
        <strong style={{ color: "#FAFAF8" }}>Generalized anxiety</strong> shows up as persistent
        background threat — a sense that something could go wrong at any time. This is often
        the result of accumulated stress from living in environments that were not designed for
        your nervous system.
      </p>

      <h2 style={h2Style}>What Actually Helps</h2>
      <p style={paraStyle}>
        The most effective interventions for anxiety in autistic adults tend to address the
        environment and the system, not just the internal response.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Accommodations:</strong> Reducing sensory load,
          having predictable routines, working asynchronously when possible, using noise-canceling
          headphones — these reduce the raw amount of anxiety-producing input. Accommodations are
          not crutches. They are the equivalent of giving a person with a sprained ankle a crutch.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Predictability:</strong> Unpredictability is a
          major driver of anxiety for many autistic people. Schedules, advance notice of changes,
          written instructions, and clear expectations reduce the cognitive load of constant
          uncertainty.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Sensory regulation:</strong> Stimming, fidgeting,
          weighted blankets, specific textures, movement — these are genuine regulation tools.
          Supporting your sensory needs is not self-indulgence. It is managing your nervous system.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Affirming therapy:</strong> CBT adapted for
          autistic neurology, somatic approaches, and therapists who understand autism can be
          genuinely helpful. See our page on <a href="/finding-affirming-therapy" style={{ color: "#A855F7" }}>finding affirming therapy</a>.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Community:</strong> Being around other autistic
          people reduces the hypervigilance that comes from constant social decoding in
          neurotypical spaces.
        </li>
      </ul>

      <h2 style={h2Style}>What Does Not Help</h2>
      <p style={paraStyle}>
        Some common approaches to anxiety are actively counterproductive for autistic adults.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Exposure therapy without consent or
          preparation:</strong> Traditional exposure therapy — flooding someone with feared stimuli
          until the response extinguishes — can be retraumatizing for autistic people, particularly
          when the "feared" stimulus is a legitimate sensory threat, not an irrational phobia.
          If you choose to work with exposure-based approaches, they should be highly collaborative,
          paced by you, and adapted to autistic needs.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>"Just relax":</strong> This advice is not useful
          to anyone, but it is especially useless for autistic people whose anxiety often has
          concrete environmental causes. "Relaxing" does not reduce sensory overload or make
          an unpredictable situation predictable.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Pushing through masking:</strong> Encouraging
          autistic people to hide their anxiety responses rather than address the root causes
          increases the overall load and makes things worse over time.
        </li>
        <li style={liStyle}>
          <strong style={{ color: "#FAFAF8" }}>Generic mindfulness without adaptation:</strong>{" "}
          Standard mindfulness practices can be difficult for autistic people who experience
          interoception differently. Body scan exercises may produce anxiety rather than calm.
          Movement-based mindfulness or focused attention to a specific sensory input often works
          better.
        </li>
      </ul>

      <h2 style={h2Style}>Your Anxiety Is Telling You Something</h2>
      <p style={paraStyle}>
        Anxiety is not just noise in the system. It is information. It is your nervous system
        reporting that something in your environment or your situation exceeds your current capacity
        to manage. Listening to that information — and making changes based on it — is more useful
        than simply trying to suppress the signal.
      </p>
      <p style={paraStyle}>
        You deserve an environment that does not produce constant anxiety. You deserve support that
        is actually adapted to how your brain works. And you deserve to be taken seriously when you
        describe what triggers your nervous system rather than being told to tolerate more.
      </p>
      <p style={paraStyle}>
        Anxiety is common in the autistic community. That is not evidence that anxiety is intrinsic
        to autism. It is evidence that autistic people are routinely placed in environments that
        produce anxiety. The answer is better environments, better support, and genuine accommodation
        — not teaching autistic people to tolerate more stress.
      </p>

      <div style={{ ...calloutStyle, marginTop: "3rem" }}>
        <p style={calloutTextStyle}>
          If you are in crisis, please reach out. The 988 Suicide &amp; Crisis Lifeline is
          available by call or text at <strong style={{ color: "#FAFAF8" }}>988</strong>. The
          Crisis Text Line is available by texting <strong style={{ color: "#FAFAF8" }}>HOME
          to 741741</strong>. See our{" "}
          <a href="/crisis-resources" style={{ color: "#A855F7" }}>
            Crisis Resources page
          </a>{" "}
          for autistic-specific support.
        </p>
      </div>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/autistic-burnout" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Autistic Burnout →</a>
        <a href="/sensory-processing" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Sensory Processing as an Autistic Adult →</a>
        <a href="/finding-affirming-therapy" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Finding Affirming Therapy →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>
    </main>
  );
}
