import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workplace & Career as an Autistic Adult — Autism Acceptance World",
  description:
    "Disclosure decisions, ADA accommodations, jobs that play to autistic strengths, surviving open offices, and remote work as accommodation.",
  openGraph: {
    title: "Workplace & Career as an Autistic Adult",
    description:
      "Disclosure decisions, ADA accommodations, jobs that play to autistic strengths, surviving open offices, and remote work as accommodation.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/workplace",
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

export default function WorkplacePage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Workplace & Career</span>
      </nav>

      <h1 style={h1Style}>Workplace & Career as an Autistic Adult</h1>

      <p style={leadStyle}>
        The workplace was not designed for autistic people. Open offices, unwritten social
        rules, performance reviews that grade "culture fit," networking events, and
        mandatory fun — all of it creates significant barriers that have nothing to do with
        job competency. But there are strategies, rights, and approaches that can make
        work genuinely sustainable.
      </p>

      <p style={bodyStyle}>
        Research consistently shows that autistic adults experience high rates of
        unemployment and underemployment — not because of lack of ability, but because
        of inaccessible hiring processes, hostile work environments, and the absence of
        basic accommodations. Understanding your rights and your options matters.
      </p>

      <h2 style={h2Style}>Disclosure: The Decision Framework</h2>

      <p style={bodyStyle}>
        Whether to <a href="/disclosure" style={{ color: "#A855F7" }}>disclose your autism</a> to an employer is one of the most complex
        decisions autistic adults face in the workplace. There's no universally right answer.
        The calculus is different for every person and every job.
      </p>

      <p style={bodyStyle}>
        Disclosure is not required. You are under no legal obligation to tell an employer
        you're autistic during hiring, during employment, or at any other point — unless
        you are requesting an accommodation, in which case some level of disclosure (not
        necessarily a formal diagnosis, but documentation of the limitation) is typically
        required.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Questions to ask before disclosing at work:</p>
        <ul style={listStyle}>
          <li>Do I need an accommodation that requires disclosure?</li>
          <li>Has this employer demonstrated that it treats autistic or disabled employees equitably?</li>
          <li>Will disclosure change how my work is assessed, or is it already being assessed differently?</li>
          <li>Is there a disability employee resource group or HR representative who has experience with neurodivergent employees?</li>
          <li>What is the risk if the disclosure goes badly? Can I absorb that risk?</li>
          <li>Is the accommodation I need available informally, without a formal disclosure process?</li>
        </ul>
      </div>

      <h2 style={h2Style}>Your Legal Rights: ADA Accommodations</h2>

      <p style={bodyStyle}>
        In the United States, the Americans with Disabilities Act (ADA) requires employers
        with 15 or more employees to provide reasonable accommodations for employees with
        disabilities — including autism. Autism qualifies. You do not need a severe or
        obvious presentation to be covered.
      </p>

      <p style={bodyStyle}>
        A "reasonable accommodation" is any modification that allows you to perform the
        essential functions of your job without causing undue hardship to the employer.
        The range of what's reasonable is broad and includes many things that cost
        employers nothing.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Remote work or hybrid schedule.</strong> Working from home eliminates most sensory and social demands of the workplace. This is an extremely effective autism accommodation and is increasingly recognized as reasonable.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Written instructions and communication.</strong> Receiving instructions in writing rather than verbally, or having verbal instructions followed up in writing, is a straightforward and common accommodation.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Noise-canceling headphones or a quiet workspace.</strong> Addressing auditory sensory issues is a recognized accommodation.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Flexible scheduling.</strong> Adjusted start and end times to avoid rush-hour commutes, or to accommodate your natural productivity rhythms.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Modified performance review process.</strong> Having performance criteria explained explicitly and in advance, with objective rather than social criteria.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Advance notice of changes.</strong> Prior notice of schedule changes, meeting agenda changes, or workplace transitions.</li>
      </ul>

      <p style={bodyStyle}>
        To request an accommodation, you typically contact your HR department or manager,
        state that you have a disability and need an accommodation, and provide documentation
        from a healthcare provider. You do not have to say the word "autism" — you can
        describe the functional limitation ("I have a condition that affects my sensory
        processing and focus in open-plan environments").
      </p>

      <p style={bodyStyle}>
        The Job Accommodation Network (askjan.org) is a free resource run by the
        Department of Labor that provides specific accommodation suggestions for many
        disabilities and situations.
      </p>

      <h2 style={h2Style}>Work Environments and Job Types That Play to Autistic Strengths</h2>

      <p style={bodyStyle}>
        Autistic people bring genuine strengths to work: high accuracy and attention to
        detail, deep pattern recognition, sustained focus on complex problems, direct
        communication, strong ethical commitment, and deep expertise in areas of intense
        interest. The question is finding environments that allow those strengths to show
        up while minimizing unnecessary barriers.
      </p>

      <p style={bodyStyle}>
        Work environments that tend to work well for autistic adults have some combination
        of: clear expectations and explicit feedback, predictable schedules, reduced
        social performance demands, meaningful work with clear quality standards, and
        some degree of autonomy in how work gets done.
      </p>

      <ul style={listStyle}>
        <li>Remote-first or remote-optional workplaces</li>
        <li>Technical fields with objective quality standards (software, engineering, data analysis)</li>
        <li>Skilled trades with clear competency frameworks</li>
        <li>Research environments that value expertise and depth over sociability</li>
        <li>Creative fields where unusual thinking is an asset</li>
        <li>Writing, editing, or content work with clear briefs</li>
        <li>Veterinary, animal care, or nature-based work</li>
        <li>Roles with a high degree of independent work and clear deliverables</li>
      </ul>

      <h2 style={h2Style}>Surviving Open Offices</h2>

      <p style={bodyStyle}>
        Open-plan offices are among the most hostile work environments for autistic adults.
        Constant auditory input, unpredictable social demands, visual overstimulation,
        lack of transition space — they're designed in ways that actively impair the
        kinds of deep focus that many autistic people do best.
      </p>

      <ul style={listStyle}>
        <li>Noise-canceling headphones as a primary defense — and as a visual signal to colleagues</li>
        <li>Desk placement away from high-traffic areas and collaborative zones</li>
        <li>Permission to use a quiet room or focus space for deep work</li>
        <li>Scheduled focused work blocks with no meetings or interruptions</li>
        <li>Communicating your work style explicitly ("I do my best work without interruptions — please email me or message me rather than dropping by")</li>
      </ul>

      <h2 style={h2Style}>Remote Work as Accommodation</h2>

      <p style={bodyStyle}>
        For many autistic workers, remote work is not just a preference — it's a
        transformative accommodation. Removing the sensory demands of a shared office,
        the social performance demands of constant co-presence, and the executive function
        demands of an unpredictable environment can make the difference between sustainable
        work and recurrent burnout.
      </p>

      <p style={bodyStyle}>
        Post-pandemic, many employers have shifted to remote or hybrid models, and the
        case for remote work as an ADA accommodation has strengthened. If you're currently
        required to be in-office and it's significantly impacting your ability to work,
        this is worth pursuing formally.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Keep Reading</p>
        <a href="/disclosure" style={relatedLinkStyle}>Disclosure: When and How to Tell People You're Autistic →</a>
        <a href="/legal-rights" style={relatedLinkStyle}>Legal Rights for Autistic Adults →</a>
        <a href="/executive-function" style={relatedLinkStyle}>Executive Function →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "2rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes legal advice. For guidance on ADA accommodations or employment rights,
          consult an employment attorney or contact the EEOC.
        </p>
      </div>
    </article>
  );
}
