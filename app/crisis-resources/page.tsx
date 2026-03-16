import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crisis Resources for Autistic Adults — Autism Acceptance World",
  description:
    "988 Lifeline, Crisis Text Line, autistic-specific crisis support, safety planning, and what to tell a counselor about being autistic. We are not doctors. We are advocates.",
  openGraph: {
    title: "Crisis Resources for Autistic Adults",
    description:
      "988 Lifeline, Crisis Text Line, and autistic-specific crisis support. Real resources for autistic adults in distress.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/crisis-resources",
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

const urgentBoxStyle: React.CSSProperties = {
  backgroundColor: "rgba(220, 38, 38, 0.12)",
  border: "2px solid rgba(220, 38, 38, 0.5)",
  borderRadius: "10px",
  padding: "1.5rem",
  margin: "1.5rem 0",
};

const urgentHeadStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 800,
  color: "#FCA5A5",
  marginBottom: "0.75rem",
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

const resourceCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1.25rem",
};

const resourceNameStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 800,
  color: "#FAFAF8",
  marginBottom: "0.35rem",
};

const resourceContactStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 900,
  color: "#A855F7",
  marginBottom: "0.5rem",
  letterSpacing: "-0.02em",
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function CrisisResourcesPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <span>Crisis Resources</span>
      </nav>

      <h1 style={h1Style}>Crisis Resources for Autistic Adults</h1>

      <p style={leadStyle}>
        If you are in crisis right now, you can reach the 988 Suicide and Crisis Lifeline by calling or texting 988. Crisis Text Line is available by texting HOME to 741741. You do not have to explain your autism before asking for help. You deserve support.
      </p>

      <div style={urgentBoxStyle}>
        <p style={urgentHeadStyle}>If you are in immediate danger, call 911.</p>
        <p style={{ ...bodyStyle, color: "rgba(250,250,248,0.82)", marginBottom: 0 }}>
          If you are autistic and worried about police contact, you can tell the 988 counselor that. They can help coordinate responses that are safer. See the section on talking to crisis counselors below.
        </p>
      </div>

      <h2 style={h2Style}>Immediate Crisis Lines</h2>

      <div style={resourceCardStyle}>
        <p style={resourceNameStyle}>988 Suicide and Crisis Lifeline</p>
        <p style={resourceContactStyle}>Call or text: 988</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Available 24/7 in the United States. You can call or text. The text option is useful if speaking on the phone is difficult for you. Chat is also available at 988lifeline.org. Tell the counselor you are autistic if that is useful context. You do not have to be suicidal to call — any mental health crisis qualifies.
        </p>
      </div>

      <div style={resourceCardStyle}>
        <p style={resourceNameStyle}>Crisis Text Line</p>
        <p style={resourceContactStyle}>Text HOME to 741741</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Text-based crisis support, available 24/7. Many autistic adults find text communication significantly easier than phone calls during crisis. A trained crisis counselor responds. Free, confidential, and does not require you to speak aloud.
        </p>
      </div>

      <div style={resourceCardStyle}>
        <p style={resourceNameStyle}>Trans Lifeline</p>
        <p style={resourceContactStyle}>877-565-8860</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Staffed by trans people for trans people. Many autistic adults are also trans or gender-diverse. Trans Lifeline provides peer support from counselors who share your community. No non-consensual active rescue policy.
        </p>
      </div>

      <div style={resourceCardStyle}>
        <p style={resourceNameStyle}>Trevor Project (LGBTQ+ youth under 25)</p>
        <p style={resourceContactStyle}>1-866-488-7386 / Text START to 678-678</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Crisis support for LGBTQ+ people under 25. Autistic LGBTQ+ youth are at significantly elevated risk for mental health crises. TrevorSpace also provides peer community.
        </p>
      </div>

      <h2 style={h2Style}>Autistic-Specific Crisis Support</h2>

      <p style={bodyStyle}>
        Most mainstream crisis lines are not specifically trained in autistic experiences. That does not mean they are useless — trained crisis counselors can help even without autism-specific knowledge. But there are also resources that center autistic experiences specifically.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Autistic Self Advocacy Network (ASAN)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          ASAN does not operate a crisis line, but their website (autisticadvocacy.org) has a crisis resources page with updated autistic-specific resources, including community mental health contacts and peer support directories. ASAN also advocates for autistic-affirming crisis responses and can help you navigate systems.
        </p>
      </div>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Autism Society of America Helpline</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          1-800-328-8476. Not a crisis line in the same sense as 988, but can help connect you with local autism-specific resources, support groups, and services. Useful for navigating the system after the immediate crisis passes.
        </p>
      </div>

      <h2 style={h2Style}>What to Tell a Crisis Counselor About Being Autistic</h2>

      <p style={bodyStyle}>
        You do not have to disclose that you are autistic to get crisis support. The counselor will try to help you regardless. But if it is relevant, telling them can help them support you better.
      </p>

      <p style={bodyStyle}>
        Things that are useful to share if you can:
      </p>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.75rem" }}>If you are texting because phone calls are hard for you, you can say that. "I find phone calls very difficult. Text is easier for me." They will not judge this.</li>
        <li style={{ marginBottom: "0.75rem" }}>If you are processing slowly, you can say "I need more time to respond." A good counselor will slow down.</li>
        <li style={{ marginBottom: "0.75rem" }}>If direct language helps you: "I am autistic. Please be direct and literal with me." Counselors are trained to adapt their communication style.</li>
        <li style={{ marginBottom: "0.75rem" }}>If you are worried about police contact: "I am autistic. If you are considering sending a welfare check, please know that police contact can be dangerous for autistic people and I would prefer other options." You can also ask what their active rescue policy is before disclosing your location.</li>
        <li style={{ marginBottom: "0.75rem" }}>If you are in sensory overload as part of the crisis: "I am overwhelmed by sensory input right now. I am in a safe physical location but my nervous system is in crisis." This is a valid crisis state.</li>
      </ul>

      <h2 style={h2Style}>Safety Planning for Autistic Adults</h2>

      <p style={bodyStyle}>
        A safety plan is a document you create when you are not in crisis that helps you know what to do when you are. For autistic adults, the most useful safety plans are specific and practical — not generic templates.
      </p>

      <p style={bodyStyle}>
        Your safety plan might include:
      </p>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Warning signs for you specifically.</strong> Not the generic list — your actual early warning signs. Increased sensory sensitivity before anyone else notices. Losing words. Not being able to eat. Specific thoughts that appear early in a bad spiral.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Your regulation strategies.</strong> The specific things that actually help you: the weighted blanket, the specific playlist, the walk, the special interest. Written down so you can access the list when executive function is impaired.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>One or two specific people to contact.</strong> With their numbers. Not a long list. One or two.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>The crisis lines above.</strong> With the specific method you find most accessible (text vs. call).</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>What to do about your immediate environment.</strong> Remove or secure any means of self-harm. Get out of a sensory-overloading environment. Go somewhere specific that feels safer.</li>
      </ul>

      <p style={bodyStyle}>
        The Stanley-Brown Safety Planning Intervention is a widely used template. Search "safety planning template PDF" to find versions you can print and fill out with your provider or on your own.
      </p>

      <h2 style={h2Style}>After the Crisis Passes</h2>

      <p style={bodyStyle}>
        Crisis is not the end of the conversation. After the acute crisis passes, it is worth looking at what contributed to it. Autistic burnout, chronic sensory overload, prolonged masking, and lack of access to community are all factors that raise crisis risk. Addressing those underlying conditions reduces future crisis risk.
      </p>

      <p style={bodyStyle}>
        If you do not currently have a mental health provider, the resources at our <a href="/therapist-directory" style={{ color: "#A855F7" }}>therapist directory page</a> include information on finding neurodivergent-affirming providers. Finding a therapist who understands autism makes a real difference.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors. We are advocates. This page provides resource information only. It is not a substitute for professional mental health care or emergency services.
      </p>
    </div>
  );
}
