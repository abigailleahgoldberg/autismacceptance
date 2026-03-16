import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensory Processing as an Autistic Adult — Autism Acceptance World",
  description:
    "The 8 senses explained, hyper and hypo sensitivity, sensory diet for adults, workplace sensory survival, and building a sensory-safe home.",
  openGraph: {
    title: "Sensory Processing as an Autistic Adult",
    description:
      "The 8 senses explained, hyper and hypo sensitivity, sensory diet for adults, workplace survival, and building a sensory-safe home.",
    image: "https://autismacceptance.world/bears/bears-together.jpg",
    url: "https://autismacceptance.world/sensory-processing",
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

const senseGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "1rem",
  margin: "1.5rem 0",
};

const senseCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.18)",
  borderRadius: "8px",
  padding: "1rem",
};

const senseNameStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  fontWeight: 700,
  color: "#A855F7",
  marginBottom: "0.35rem",
};

const senseDescStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.65)",
  lineHeight: 1.55,
  marginBottom: 0,
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

const senses = [
  {
    name: "Vision (Visual)",
    desc: "Light, color, movement, visual clutter. Fluorescent lights and busy visual environments are common triggers.",
  },
  {
    name: "Hearing (Auditory)",
    desc: "Sound volume, frequency, unpredictability. Loud or sudden sounds; inability to filter background noise.",
  },
  {
    name: "Touch (Tactile)",
    desc: "Texture of clothing, physical contact, temperature. Tags in clothes, seams in socks, unexpected touch.",
  },
  {
    name: "Taste/Smell (Gustatory/Olfactory)",
    desc: "Strong flavors, food textures, chemical smells, perfumes. Closely linked to sensory overwhelm.",
  },
  {
    name: "Proprioception",
    desc: "Sense of where your body is in space. Affects coordination, clumsiness, and the regulation function of stimming.",
  },
  {
    name: "Vestibular",
    desc: "Balance and movement. Can affect motion sickness, need for movement, or discomfort with certain positions.",
  },
  {
    name: "Interoception",
    desc: "Internal body signals: hunger, thirst, pain, temperature, need to use the bathroom. Often disrupted in autistic people.",
  },
  {
    name: "Thermoception / Pain",
    desc: "Temperature sensitivity and pain processing. Can be hyper (pain is amplified) or hypo (pain goes unnoticed).",
  },
];

export default function SensoryProcessingPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Sensory Processing</span>
      </nav>

      <h1 style={h1Style}>Sensory Processing as an Autistic Adult</h1>

      <p style={leadStyle}>
        You weren't being dramatic. The lights were genuinely too bright. The sound was
        genuinely too loud. The tag in your shirt was genuinely intolerable. Autistic
        sensory processing is different from neurotypical sensory processing, and
        understanding how yours works is one of the most practically useful things
        you can do for your daily life.
      </p>

      <p style={bodyStyle}>
        Sensory processing differences are one of the most common and most impactful
        features of autism. They affect where you can work, what you can wear, which
        social environments are tolerable, how quickly you reach overwhelm, and how you
        recover. Most adults who grew up before the understanding of neurodivergent
        sensory needs were given zero accommodation for these differences — and often
        told that their experience wasn't real.
      </p>

      <p style={bodyStyle}>
        It is real. And it's manageable, once you understand it.
      </p>

      <h2 style={h2Style}>The 8 Senses (Not Just 5)</h2>

      <p style={bodyStyle}>
        The classic five senses — sight, hearing, touch, taste, smell — are only part of
        the picture. There are at least eight sensory systems, and autistic people can
        experience differences in any or all of them.
      </p>

      <div style={senseGridStyle}>
        {senses.map((s) => (
          <div key={s.name} style={senseCardStyle}>
            <p style={senseNameStyle}>{s.name}</p>
            <p style={senseDescStyle}>{s.desc}</p>
          </div>
        ))}
      </div>

      <p style={bodyStyle}>
        Interoception — the sense of your internal body state — deserves particular
        attention. Many autistic people have significant interoceptive differences, which
        can mean difficulty noticing hunger, thirst, pain, or the need to use the
        bathroom until it's urgent. This affects everything from eating and hydration to
        recognizing and naming emotions (alexithymia is closely linked to interoception).
      </p>

      <h2 style={h2Style}>Hyper and Hypo Sensitivity</h2>

      <p style={bodyStyle}>
        Autistic sensory processing can go in either direction — or both directions in
        different sensory channels, or in the same channel at different times.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>Hypersensitivity</strong> means the signal comes in too loud.
        A fluorescent light isn't just slightly annoying — it's actively painful and
        distracting. A seam in a sock isn't a mild awareness — it's consuming attention
        all day. Certain smells aren't just unpleasant — they trigger nausea.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>Hyposensitivity</strong> means the signal comes in too quiet.
        Some autistic people seek intense sensory input — loud music, heavy pressure,
        strong flavors, extreme temperatures — because their system needs more input
        than average to register. Some autistic people don't notice pain until it's severe,
        or don't notice hunger until they're past the point of being able to eat comfortably.
      </p>

      <p style={bodyStyle}>
        Many autistic people experience both: hypersensitive to sound and touch, hyposensitive
        to pain and hunger. Your sensory profile is specific to you. It may also change based
        on your overall state — when you're tired, sick, or approaching burnout, sensory
        thresholds typically lower significantly.
      </p>

      <h2 style={h2Style}>Building a Sensory Diet for Adults</h2>

      <p style={bodyStyle}>
        A "sensory diet" is not about food — it's a deliberately designed schedule of
        sensory input throughout the day that keeps your nervous system regulated.
        The term comes from occupational therapy, but the practice doesn't require
        professional support to implement.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Components of an adult sensory diet:</p>
        <ul style={listStyle}>
          <li><strong style={{ color: "#FAFAF8" }}>Proprioceptive input.</strong> Heavy work (carrying, pushing, pulling), tight compression clothing, weighted blankets. Deeply regulating for most autistic people.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Vestibular input.</strong> Rocking, swinging, walking, exercise. Regulates the nervous system and reduces overwhelm.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Controlled sensory exposure.</strong> Know your triggers and manage exposure deliberately — enough controlled sensory input to keep you regulated, timed to avoid overwhelm.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Recovery time.</strong> Quiet, low-stimulation recovery after high-stimulation periods. This isn't optional — it's maintenance.</li>
          <li><strong style={{ color: "#FAFAF8" }}>Stimming.</strong> Stimming is sensory regulation. Allowing yourself to stim — particularly in private and with trusted people — is part of sensory health.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Workplace Sensory Survival</h2>

      <p style={bodyStyle}>
        Open-plan offices, fluorescent lighting, ambient noise, colleagues who wear strong
        fragrances, communal kitchens — the modern workplace is often a sensory nightmare.
        Here are practical strategies that can make it workable.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Noise-canceling headphones.</strong> One of the most effective tools for autistic adults in open offices. They reduce the auditory load and also signal to colleagues that you're in focus mode, reducing interruptions.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Desk placement.</strong> If possible, request a desk with your back to a wall, away from high-traffic areas and kitchens. Fewer visual inputs from behind you, fewer unpredictable social encounters.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Lighting modifications.</strong> Request permission to use lamps instead of overhead fluorescents. Blue-light glasses and screen filters can reduce visual discomfort significantly.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Fragrance-free requests.</strong> Many workplaces will accommodate fragrance-free policies as a disability accommodation. This is a legitimate ADA request.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Movement breaks.</strong> Schedule short breaks throughout the day for proprioceptive and vestibular input — a brief walk, stairs, anything that involves controlled movement.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Remote work as accommodation.</strong> Working from a controlled home environment eliminates most workplace sensory triggers. If your job can be done remotely, this is worth pursuing as a formal accommodation.</li>
      </ul>

      <h2 style={h2Style}>Building a Sensory-Safe Home</h2>

      <p style={bodyStyle}>
        Your home should be your recovery zone. Building it with your actual sensory
        profile in mind isn't a luxury — it's basic accessibility.
      </p>

      <ul style={listStyle}>
        <li>Replace fluorescent or harsh overhead lighting with warm, dimmable bulbs and lamps on separate circuits</li>
        <li>Invest in bedding and clothing that works for your tactile sensitivities — the specific textures matter and it's worth spending time identifying what actually feels good</li>
        <li>Designate a low-stimulation recovery space — even a corner with good lighting and a comfortable chair without visual clutter counts</li>
        <li>Sound management: white noise machines, heavy curtains, or soundproofing for particularly difficult areas</li>
        <li>Control scent: identify which scents regulate you versus overwhelm you, and build toward a controlled home environment</li>
        <li>Give yourself permission to have sensory-specific preferences in your home without justifying them to anyone</li>
      </ul>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
        <a href="/executive-function" style={relatedLinkStyle}>Executive Function →</a>
        <a href="/workplace" style={relatedLinkStyle}>Workplace & Career as an Autistic Adult →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes medical or occupational therapy advice. For individualized sensory support,
          an occupational therapist with neurodivergent experience can be genuinely helpful.
        </p>
      </div>
    </article>
  );
}
