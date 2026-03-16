import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism Glossary: 30+ Terms Explained — Autism Acceptance World",
  description:
    "Neurodiversity, masking, stimming, monotropism, PDA, alexithymia, autistic burnout, double empathy problem, and 25+ more terms explained from an autistic perspective. We are not doctors. We are advocates.",
  openGraph: {
    title: "Autism Glossary: 30+ Terms Explained",
    description:
      "Essential autism and neurodivergence terms defined clearly and without clinical condescension. Identity-first, autistic-affirming.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/glossary",
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
  fontSize: "1.25rem",
  fontWeight: 800,
  color: "#A855F7",
  marginTop: "2.25rem",
  marginBottom: "0.5rem",
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.82)",
  lineHeight: 1.75,
  marginBottom: "1.25rem",
};

const termStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
  borderBottom: "1px solid rgba(168,85,247,0.12)",
  paddingBottom: "1.5rem",
  marginBottom: "1.5rem",
};

const termHeadStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 800,
  color: "#FAFAF8",
  letterSpacing: "-0.01em",
};

const termBodyStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.8)",
  lineHeight: 1.7,
  margin: 0,
};

const sectionHeaderStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 900,
  color: "#D97706",
  marginTop: "3rem",
  marginBottom: "1.5rem",
  letterSpacing: "-0.02em",
  borderBottom: "2px solid rgba(217,119,6,0.25)",
  paddingBottom: "0.5rem",
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function GlossaryPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <a href="/resources" style={{ color: "inherit", textDecoration: "none" }}>Resources</a>
        <span>/</span>
        <span>Glossary</span>
      </nav>

      <h1 style={h1Style}>Autism Glossary</h1>

      <p style={leadStyle}>
        30+ terms from the autistic community and neurodiversity movement, explained clearly and without clinical condescension. These definitions center autistic perspectives — not the deficit-based language of older clinical literature.
      </p>

      <p style={bodyStyle}>
        Terms are listed alphabetically within sections. If you are looking for a specific term, use your browser's find function (Ctrl+F or Cmd+F).
      </p>

      <p style={sectionHeaderStyle}>A</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Alexithymia</p>
        <p style={termBodyStyle}>
          Difficulty identifying and describing one's own emotions. Not the same as not having emotions — alexithymia is a processing difference in emotion recognition, not emotional absence. Many autistic people experience alexithymia to varying degrees. It can look like struggling to answer "how do you feel?" or only noticing emotional states indirectly (recognizing you are upset because you started crying, rather than feeling the upset before the tears). Common in autistic people, though also present in non-autistic people and distinct from autism itself.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Autism Spectrum Disorder (ASD)</p>
        <p style={termBodyStyle}>
          The current diagnostic term for autism in the DSM-5 and ICD-11. The "spectrum" reflects the broad range of presentations — not a linear spectrum from mild to severe, but a multidimensional one across many different traits. Many autistic people and advocates find the word "disorder" problematic and prefer "autism" or "autistic" without the disorder framing. The diagnostic criteria cover social communication differences, restricted and repetitive behaviors, and sensory differences.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Autistic Burnout</p>
        <p style={termBodyStyle}>
          A state of physical and neurological exhaustion that develops when autistic demands exceed sustainable capacity over time. Characterized by skill regression (losing abilities that were previously available), extreme exhaustion, and increased autistic traits. Not the same as general burnout or depression, though it can trigger both. Typically caused by long-term masking, chronic sensory overload, or major life transitions without adequate support. Recovery requires reducing demands and increasing genuine rest, not pushing through.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Autistic Inertia</p>
        <p style={termBodyStyle}>
          Difficulty starting, stopping, or transitioning between activities — distinct from procrastination or laziness. Autistic inertia reflects how autistic cognition often requires more activation energy to begin a task or disengage from an ongoing one. Related to executive function differences and monotropic attention style. "Task initiation difficulty" and "transition difficulty" are clinical descriptions of the same phenomenon.
        </p>
      </div>

      <p style={sectionHeaderStyle}>D</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Double Empathy Problem</p>
        <p style={termBodyStyle}>
          A theory developed by autistic researcher Damian Milton describing the mutual difficulty of understanding between autistic and non-autistic people. The traditional view holds that autistic people lack empathy and therefore struggle socially with neurotypicals. The double empathy problem reframes this: both groups have difficulty understanding each other. Non-autistic people are equally bad at reading autistic social cues and equally prone to misinterpreting autistic communication. The failure is mutual, not one-directional. This reframe has substantial empirical support.
        </p>
      </div>

      <p style={sectionHeaderStyle}>E</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Echolalia</p>
        <p style={termBodyStyle}>
          Repeating or echoing words, phrases, or sentences — either immediately after hearing them (immediate echolalia) or in different contexts much later (delayed echolalia). Echolalia is a natural feature of autistic communication, not a deficit. It can serve many functions: self-regulation, communication, processing information, or expressing emotion through borrowed language. Many autistic people use scripted phrases from shows, books, or conversations as a primary communication tool. This is valid communication, not mimicry without meaning.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Executive Function</p>
        <p style={termBodyStyle}>
          An umbrella term for cognitive processes that govern planning, organization, task initiation, cognitive flexibility, working memory, and impulse control. Autistic people often have uneven executive function profiles — strong in some domains, significantly challenged in others. Difficulty with executive function is commonly misread as laziness or low motivation. External scaffolding (written lists, timers, body doubling, visual schedules) addresses executive function challenges more effectively than willpower-based approaches.
        </p>
      </div>

      <p style={sectionHeaderStyle}>H</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Hyperfocus</p>
        <p style={termBodyStyle}>
          Intense, sustained engagement with a topic or task — often to the exclusion of awareness of time, hunger, thirst, or other needs. More associated with ADHD than autism specifically, but common in autistic people and in those with both. Hyperfocus is not a flaw — it is how autistic and ADHD people often do their best work. The challenge is the lack of control over when it occurs and the difficulty disengaging when necessary. Also related to monotropism (see below).
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Hypersensitivity</p>
        <p style={termBodyStyle}>
          Experiencing sensory input more intensely than average. Hypersensitive autistic people may find sounds, lights, textures, smells, or tastes overwhelming at intensities that are comfortable or neutral for most people. This is not metaphorical sensitivity — it reflects real differences in how the nervous system processes sensory data. Hypersensitivity is a recognized feature of autism in the DSM-5.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Hyposensitivity</p>
        <p style={termBodyStyle}>
          Experiencing sensory input less intensely than average — needing more stimulation to register sensation. Hyposensitive autistic people may seek out intense sensory input, not notice pain that would be significant to most people, or have difficulty sensing internal body states like hunger or thirst. Many autistic people experience both hyposensitivity and hypersensitivity in different sensory channels simultaneously.
        </p>
      </div>

      <p style={sectionHeaderStyle}>I</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Identity-First Language</p>
        <p style={termBodyStyle}>
          Referring to someone as an "autistic person" rather than a "person with autism." Identity-first language treats autism as an integral part of who the person is, not a condition separate from or incidental to their identity. Preferred by the majority of autistic adults in surveys. This site uses identity-first language throughout. (See also: Person-First Language.)
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Interoception</p>
        <p style={termBodyStyle}>
          The internal sense system — awareness of what is happening inside your body: hunger, thirst, pain, temperature, heart rate, need for the bathroom, emotional states felt physically. Many autistic people have interoceptive differences, experiencing these signals differently or less reliably than average. This can lead to difficulty with basic self-care (not noticing hunger until severe) and difficulty identifying emotions (because emotional experience often has a physical component that interoceptive differences can obscure).
        </p>
      </div>

      <p style={sectionHeaderStyle}>M</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Masking</p>
        <p style={termBodyStyle}>
          The practice of suppressing or hiding autistic traits in order to appear neurotypical. Masking can include forcing eye contact, suppressing stimming, performing social scripts, mirroring others' behavior, and hiding sensory pain. It develops as a survival response to social and professional environments that penalize visible autistic difference. Masking is cognitively expensive and a primary driver of autistic burnout. Most autistic adults mask to some degree; many have masked so thoroughly and for so long that they do not know what their unmasked self looks like.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Meltdown</p>
        <p style={termBodyStyle}>
          An involuntary response to sensory or emotional overwhelm in which an autistic person loses regulatory capacity — often resulting in crying, screaming, self-injurious behavior, or physically uncontrolled distress. Meltdowns are not tantrums (which are volitional) — they are involuntary nervous system responses to overload that has exceeded tolerance. Meltdowns typically decrease in frequency as autistic adults develop better understanding of their own triggers and needs, but they do not disappear entirely and do not indicate immaturity or poor character.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Monotropism</p>
        <p style={termBodyStyle}>
          A theory of autistic cognition developed by autistic thinkers Dinah Murray, Wenn Lawson, and Mike Lesser. Monotropism describes a cognitive tendency to focus deeply on one or few things at a time, with limited cognitive resources available outside that focus. The theory explains autistic strengths (deep expertise, sustained focus) and challenges (transitions, multitasking, divided attention) through a single underlying mechanism. Gaining significant acceptance in autistic and research communities as a more accurate model than deficit-based framings.
        </p>
      </div>

      <p style={sectionHeaderStyle}>N</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Neurodivergent</p>
        <p style={termBodyStyle}>
          A person whose neurological development or function diverges significantly from what is considered typical. Term coined by autistic sociologist Kassiane Asasumasu. Includes autism, ADHD, dyslexia, dyspraxia, Tourette syndrome, and other conditions characterized by neurological difference. Often used as a broader term than "autistic" to describe the community of people whose brains work differently from the dominant neurotypical norm.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Neurodiversity</p>
        <p style={termBodyStyle}>
          The biological reality that neurological development varies across the human population, producing a diversity of minds and cognitive styles — the same way there is biological diversity in height, temperament, and immune function. Term coined by autistic sociologist Judy Singer in the late 1990s. In its broader usage, neurodiversity is a paradigm: the position that neurological difference is a natural and valuable form of human diversity, not a defect to be corrected. Not synonymous with "accepting all symptoms without support" — neurodiversity advocates support autistic people's needs while rejecting the framing that autistic people need to be fixed.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Neurotypical</p>
        <p style={termBodyStyle}>
          A person whose neurological development and function is considered typical for their age and culture. Not a pejorative — simply the descriptor for people without diagnosed or significant neurological differences. Used in autistic and neurodivergent communities to distinguish between neurotypical and neurodivergent experiences without implying that either is superior.
        </p>
      </div>

      <p style={sectionHeaderStyle}>P</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>PDA (Pathological Demand Avoidance)</p>
        <p style={termBodyStyle}>
          A profile associated with autism in which the person experiences extreme anxiety in response to demands and expectations — even desired ones — and uses avoidance strategies to manage that anxiety. PDA is controversial as a distinct diagnosis (it is not in the DSM-5 or ICD-11 as a separate category) but widely recognized in the autistic community as a real presentation that differs meaningfully from other autistic profiles. PDA-profile autistic people often respond poorly to demand-heavy environments and benefit from autonomy-supportive approaches. Increasingly preferred term: Pervasive Drive for Autonomy.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Person-First Language</p>
        <p style={termBodyStyle}>
          Referring to someone as a "person with autism" rather than an "autistic person," with the intention of centering the person before the condition. Developed with positive intentions but rejected as the community-wide preference by most autistic adults surveyed. This site uses identity-first language instead. (See also: Identity-First Language.)
        </p>
      </div>

      <p style={sectionHeaderStyle}>S</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Sensory Overload</p>
        <p style={termBodyStyle}>
          A state in which sensory input exceeds the nervous system's ability to process it, resulting in significant distress, difficulty functioning, and often a meltdown or shutdown. Sensory overload can be triggered by a single intense sensory input (very loud sound) or by the cumulative effect of multiple moderate inputs over time (a full day in a loud, bright, crowded environment). Preventing sensory overload is more effective than managing it once it has begun.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Shutdown</p>
        <p style={termBodyStyle}>
          An inward response to overwhelm in which an autistic person withdraws, stops communicating, and becomes difficult to reach externally. The opposite of a meltdown in presentation, but similar in underlying cause (sensory or emotional overload). Shutdowns are involuntary. During a shutdown, an autistic person may be unable to speak (selective mutism can be a feature), to make decisions, or to process incoming information. Shutdowns require space and quiet — not more input, questions, or engagement.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Special Interest</p>
        <p style={termBodyStyle}>
          An intense, focused interest that an autistic person engages with deeply and consistently over time. Special interests are a characteristic autistic experience — not the same as hobbies, which are engaged with more casually. Special interests can last years or decades. They provide genuine joy, regulation, and often expertise. The content varies enormously: trains, weather systems, specific TV shows, historical periods, animals, mathematics, music. Special interests are not symptoms to be reduced — they are central to autistic identity and wellbeing.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Spoon Theory</p>
        <p style={termBodyStyle}>
          A metaphor developed by lupus patient Christine Miserandino to describe limited energy reserves in chronic illness, widely adopted in autistic and disability communities. "Spoons" represent units of energy. Everyone starts the day with a certain number. Activities cost spoons. Unlike non-disabled people who can often borrow against tomorrow's spoons, chronically ill and disabled people (including many autistic adults) have a fixed or smaller supply that, once depleted, is gone. Helps explain why activities that seem simple to neurotypicals can be exhausting for autistic people, and why autistic adults must choose carefully how to spend limited energy.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Stimming (Self-Stimulatory Behavior)</p>
        <p style={termBodyStyle}>
          Repetitive movements, sounds, or sensory inputs that autistic people use to regulate their nervous system. Stimming can include rocking, hand-flapping, spinning, humming, tapping, chewing, pacing, picking at skin, or any repeated sensory activity. Stimming is not a behavior problem — it is a regulatory tool. Suppressing stimming requires cognitive effort and removes the regulatory benefit. Research confirms that forcing autistic people to suppress stimming causes harm. Autistic adults have the right to stim in ways that do not harm themselves or others.
        </p>
      </div>

      <p style={sectionHeaderStyle}>U – W</p>

      <div style={termStyle}>
        <p style={termHeadStyle}>Unmasking</p>
        <p style={termBodyStyle}>
          The gradual process of reducing or releasing the performance of neurotypicality. Unmasking is not a single event or decision — it is a long, sometimes difficult process of discovering what exists under decades of social performance. Unmasking typically begins in safe contexts (alone, with trusted people) and expands as safety grows. It often triggers an anxiety spike initially. The long-term outcomes — reduced exhaustion, stronger sense of identity, more authentic relationships — are consistently reported as worth the difficulty.
        </p>
      </div>

      <div style={termStyle}>
        <p style={termHeadStyle}>Working Memory</p>
        <p style={termBodyStyle}>
          The cognitive system that holds information in mind while you are using it. Working memory allows you to follow multi-step instructions, remember what you were doing when interrupted, and hold context across a conversation. Working memory differences are common in autistic people and a major contributor to executive function challenges. External supports — written notes, visual schedules, reminders — effectively bypass working memory limitations.
        </p>
      </div>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/late-diagnosis" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Late Diagnosis: Now What? →</a>
        <a href="/books" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Books by Autistic Authors →</a>
        <a href="/blog" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Blog →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors. We are advocates. These definitions reflect autistic community usage and neurodiversity-affirming perspectives. Clinical definitions may vary.
      </p>
    </div>
  );
}
