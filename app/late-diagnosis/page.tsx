import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Late Diagnosis: Now What? — Autism Acceptance World",
  description:
    "Getting an autism diagnosis as an adult brings grief, relief, anger, and clarity all at once. Here's what it means, what it doesn't change, and your practical next steps.",
  openGraph: {
    title: "Late Diagnosis: Now What?",
    description:
      "Getting an autism diagnosis as an adult brings grief, relief, anger, and clarity all at once. Here's what it means, what it doesn't change, and your practical next steps.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/late-diagnosis",
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

export default function LateDiagnosisPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Late Diagnosis</span>
      </nav>

      <h1 style={h1Style}>Late Diagnosis: Now What?</h1>

      <p style={leadStyle}>
        You just found out you're autistic. Maybe at 28. Maybe at 52. Maybe you've been
        sitting with a suspicion for years and the formal diagnosis just confirmed what
        part of you already knew. Either way, you're here now. And it's a lot.
      </p>

      <p style={bodyStyle}>
        Late autism diagnoses are not rare. They are increasingly common, and they tend to
        hit differently than childhood diagnoses. There's no parent to process it first.
        No IEP meeting to walk into. Just you, a piece of paper, and a whole lifetime of
        memories suddenly rearranging themselves into a new shape.
      </p>

      <h2 style={h2Style}>The Emotional Tornado Is Real</h2>

      <p style={bodyStyle}>
        What you're feeling right now — grief, relief, anger, clarity, joy, disorientation,
        all at the same time — is completely normal. Many autistic adults describe the
        period after late diagnosis as one of the most emotionally complex of their lives.
      </p>

      <p style={bodyStyle}>
        Relief is usually the first thing people mention. Relief that they have a name for
        it. Relief that the years of struggling weren't weakness, laziness, or personal
        failure. There was a reason. There has always been a reason.
      </p>

      <p style={bodyStyle}>
        Then comes grief. Grief for the younger version of you who didn't know. Grief for
        the support you didn't get, the accommodations you were never offered, the years
        spent trying to force yourself into a mold that was never designed for your brain.
        That grief is legitimate. Let it be there.
      </p>

      <p style={bodyStyle}>
        Anger is common too. Anger at systems that missed you. At professionals who
        dismissed you. At schools, employers, and family members who called you too
        sensitive, too much, too weird. That anger is also legitimate. You were let down.
      </p>

      <p style={bodyStyle}>
        And there's something else — a kind of clarity that many late-diagnosed autistic
        adults describe as transformative. When the story of your life gets rewritten with
        accurate information, things that never made sense start to. That's not a small thing.
      </p>

      <h2 style={h2Style}>Why Are So Many Adults Only Finding Out Now?</h2>

      <p style={bodyStyle}>
        Autism research and diagnostic criteria have historically focused on white male
        children. If you don't fit that profile — if you're a woman, nonbinary, a person
        of color, someone who learned early to mask, or someone whose autistic traits
        look different from the "classic" presentation — the clinical world often didn't
        see you.
      </p>

      <p style={bodyStyle}>
        Diagnostic criteria have evolved. More clinicians are trained to recognize the
        range of how autism actually presents. The internet has allowed autistic adults to
        find each other, share their experiences, and realize they're not alone — which
        frequently leads people to seek assessment for the first time.
      </p>

      <p style={bodyStyle}>
        Many adults are diagnosed after their child receives a diagnosis. Sitting in a
        clinician's office listening to a description of their child, they hear themselves.
        That's not coincidence. Autism is significantly heritable.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Common reasons late diagnoses happen:</p>
        <ul style={listStyle}>
          <li>Diagnostic criteria built around a narrow profile that excluded many autistic people</li>
          <li>Effective masking that hid autistic traits from observers (and sometimes from yourself)</li>
          <li>Being dismissed by professionals who didn't recognize autism in adults</li>
          <li>Lack of access to assessment — financial, geographic, or systemic</li>
          <li>Mental health professionals treating symptoms (anxiety, depression) without looking for underlying causes</li>
          <li>Race and gender bias in clinical assessment and referral patterns</li>
        </ul>
      </div>

      <h2 style={h2Style}>What the Diagnosis Does and Doesn't Change</h2>

      <p style={bodyStyle}>
        Here is what a diagnosis changes: nothing about who you are. You were autistic
        before the paperwork. The diagnosis doesn't make you autistic. It names what was
        always true.
      </p>

      <p style={bodyStyle}>
        What it can change: access. Depending on your country, a formal diagnosis may open
        doors to workplace accommodations under the ADA (in the US), disability benefits if
        applicable, educational support, and access to services. It can also change how
        you understand and talk about yourself, which turns out to matter a lot.
      </p>

      <p style={bodyStyle}>
        What it doesn't change: your relationships, your skills, your history, your worth.
        You are the same person. Your strengths didn't disappear, and your struggles didn't
        become more real — they were always real. You just have more information about why.
      </p>

      <p style={bodyStyle}>
        Some autistic adults find that a diagnosis shifts how their family and community
        respond to them. Some people finally get the benefit of the doubt they'd been
        asking for, for years. Others find that people in their life dismiss the diagnosis
        or weaponize it against them. Both outcomes are possible, and neither is your fault.
      </p>

      <h2 style={h2Style}>Practical First Steps</h2>

      <p style={bodyStyle}>
        You don't have to do everything at once. Here are some things that are often
        helpful in the weeks and months after a late autism diagnosis.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Learn, but pace yourself.</strong> There's a lot of information about autism. Not all of it is good. Prioritize autistic-authored content — books, blogs, videos, communities by and for autistic people.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Connect with other late-diagnosed autistic adults.</strong> The specific experience of late diagnosis is something most people in your life won't understand. Other late-diagnosed autistic adults will. Look for online communities specifically for this.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Revisit your history with new eyes.</strong> Some autistic adults find that journaling about their past through an autistic lens — understanding past struggles, moments of burnout, relationship difficulties — is profoundly healing. Others find it overwhelming. Do what works for you.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Consider what accommodations you've been missing.</strong> Think about your home, work, and social environments. Where are the friction points? A late diagnosis is often an invitation to finally arrange your life in a way that works for your actual brain.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Don't rush to tell everyone.</strong> Disclosure is a decision, not an obligation. You get to decide who knows, when, and how. Take time to process before you start explaining your diagnosis to others.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Find a therapist who gets it — if you want one.</strong> Not every autistic adult needs therapy. But if you do seek one out, look for someone who is affirming, who uses identity-first language, and who doesn't treat autism as something to overcome.</li>
      </ul>

      <h2 style={h2Style}>You Didn't Miss Out on Being Autistic</h2>

      <p style={bodyStyle}>
        Some late-diagnosed autistic adults feel a sense of loss about not knowing sooner.
        That's real. But you've been autistic this whole time, navigating the world with
        your actual brain, even without the framework to understand it.
      </p>

      <p style={bodyStyle}>
        The autistic community is not a club you missed the early membership of. You belong
        here. Your experience is valid exactly as it is — including all the years before
        the diagnosis. Late identification doesn't mean you were failing at being autistic.
        It means the systems around you failed to see you.
      </p>

      <p style={bodyStyle}>
        Welcome. There are a lot of us here.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/masking-and-unmasking" style={relatedLinkStyle}>Masking & Unmasking →</a>
        <a href="/autistic-burnout" style={relatedLinkStyle}>Autistic Burnout →</a>
        <a href="/autism-in-women" style={relatedLinkStyle}>Autism in Women & Gender-Diverse People →</a>
      </div>

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
