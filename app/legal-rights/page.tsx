import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Rights for Autistic Adults — Autism Acceptance World",
  description:
    "ADA workplace accommodations, Fair Housing Act protections, 504 plans, and how to request them with real scripts. We are not doctors. We are advocates.",
  openGraph: {
    title: "Legal Rights for Autistic Adults",
    description:
      "ADA workplace rights, Fair Housing, educational accommodations, and scripts to request them. Real legal information for autistic adults.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/legal-rights",
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

const h3Style: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "#D8B4FE",
  marginTop: "1.75rem",
  marginBottom: "0.5rem",
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

const scriptBoxStyle: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.3)",
  border: "1px solid rgba(168, 85, 247, 0.3)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  margin: "1.5rem 0",
  fontFamily: "monospace",
  fontSize: "0.9375rem",
  color: "rgba(250,250,248,0.85)",
  lineHeight: 1.7,
  whiteSpace: "pre-wrap" as const,
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function LegalRightsPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <a href="/resources" style={{ color: "inherit", textDecoration: "none" }}>Resources</a>
        <span>/</span>
        <span>Legal Rights</span>
      </nav>

      <h1 style={h1Style}>Legal Rights for Autistic Adults</h1>

      <p style={leadStyle}>
        Autistic adults have enforceable legal rights in the United States. The Americans with Disabilities Act, the Fair Housing Act, and Section 504 of the Rehabilitation Act all apply to autism. This guide covers the most important protections and how to actually use them.
      </p>

      <p style={bodyStyle}>
        This is general legal information, not legal advice. Laws are complex and vary by jurisdiction. If you are dealing with a specific legal situation, contacting a disability rights attorney or your state's Protection and Advocacy organization is worth doing.
      </p>

      <h2 style={h2Style}>Workplace Rights: The Americans with Disabilities Act</h2>

      <p style={bodyStyle}>
        The Americans with Disabilities Act (ADA), as amended in 2008, prohibits employment discrimination against people with disabilities and requires employers with 15 or more employees to provide reasonable accommodations.
      </p>

      <p style={bodyStyle}>
        Autism qualifies as a disability under the ADA because it substantially limits major life activities including communication, social interaction, and neurological function. You do not need to have a severe presentation to qualify — the ADA covers a wide range of autistic experiences.
      </p>

      <h3 style={h3Style}>What Reasonable Accommodations Mean</h3>

      <p style={bodyStyle}>
        A reasonable accommodation is any modification to a job, work environment, or work practices that enables a qualified employee to perform the essential functions of their job without causing undue hardship to the employer. Common examples for autistic employees include:
      </p>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>Noise-canceling headphones or a private/quieter workspace</li>
        <li style={{ marginBottom: "0.5rem" }}>Written communication for instructions, feedback, and meeting notes</li>
        <li style={{ marginBottom: "0.5rem" }}>Modified schedules or flexible start and end times</li>
        <li style={{ marginBottom: "0.5rem" }}>Remote work or hybrid arrangements</li>
        <li style={{ marginBottom: "0.5rem" }}>Meeting agendas provided in advance</li>
        <li style={{ marginBottom: "0.5rem" }}>Lighting modifications (turning off overhead fluorescents, using a desk lamp)</li>
        <li style={{ marginBottom: "0.5rem" }}>Clear, written job expectations and performance criteria</li>
        <li style={{ marginBottom: "0.5rem" }}>A single point of contact for feedback rather than multiple sources</li>
        <li style={{ marginBottom: "0.5rem" }}>Additional processing time for verbal instructions or questions</li>
      </ul>

      <h3 style={h3Style}>You Do Not Have to Disclose Your Diagnosis</h3>

      <p style={bodyStyle}>
        You are not required to tell your employer you are autistic. You only need to communicate that you have a medical condition that affects certain aspects of your work and that you need a specific accommodation. Your employer may request documentation from a healthcare provider confirming that a disability exists and that the accommodation is appropriate — but they cannot require your full medical records or your specific diagnosis.
      </p>

      <h3 style={h3Style}>How to Request an Accommodation</h3>

      <p style={bodyStyle}>Use this template as a starting point. Adapt it to your specific request and situation:</p>

      <div style={scriptBoxStyle}>{`Subject: Request for Reasonable Accommodation Under the ADA

Dear [HR Contact Name],

I am writing to formally request a reasonable accommodation under Title I of the Americans with Disabilities Act (ADA).

I have a medical condition that affects [describe functional impact, e.g., "my ability to process auditory information in noisy environments" or "my ability to interpret verbal-only instructions accurately"].

I am requesting the following accommodation: [state your specific request clearly, e.g., "permission to work remotely two days per week" or "that all task instructions be provided in writing"].

I am happy to provide documentation from my healthcare provider supporting this request. Please let me know what documentation you require and the process for reviewing accommodation requests.

Thank you for your consideration.

[Your name]
[Date]`}</div>

      <p style={bodyStyle}>
        Keep a copy of everything you send. Your employer must engage in an "interactive process" — they cannot simply refuse. If they deny your request, ask for the denial in writing with their reasoning.
      </p>

      <h3 style={h3Style}>If Your Employer Refuses</h3>

      <p style={bodyStyle}>
        File a charge with the Equal Employment Opportunity Commission (EEOC) at eeoc.gov. There are time limits: generally 180 days from the discriminatory act, or 300 days in states with their own anti-discrimination laws. Retaliation for requesting an accommodation is also illegal.
      </p>

      <h2 style={h2Style}>Housing Rights: The Fair Housing Act</h2>

      <p style={bodyStyle}>
        The Fair Housing Act (FHA) prohibits housing discrimination based on disability and requires landlords and housing providers to make reasonable accommodations in rules, policies, practices, and services, and to allow reasonable modifications to physical structures.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Reasonable Accommodations in Housing</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Housing accommodations autistic adults have successfully requested include: permission to keep emotional support animals even in no-pet buildings (documentation from a licensed mental health provider required), assignment to a quieter unit in the building, modified notice requirements for entry that give more advance warning, and written communication from management rather than phone calls. The FHA applies to most private landlords with four or more units, public housing, condominiums, and housing associations.
        </p>
      </div>

      <h3 style={h3Style}>Requesting a Housing Accommodation</h3>

      <div style={scriptBoxStyle}>{`Dear [Landlord/Property Manager Name],

I am writing to request a reasonable accommodation under the Fair Housing Act.

I have a disability that affects [describe functional impact, e.g., "my sensitivity to sound and my ability to process unexpected interactions"]. To address this, I am requesting [specific accommodation, e.g., "a minimum of 48 hours written notice before any entry to my unit except in emergencies"].

I am prepared to provide documentation from a licensed healthcare provider confirming my disability and the need for this accommodation. Please let me know your process for reviewing accommodation requests.

[Your name]
[Unit number]
[Date]`}</div>

      <p style={bodyStyle}>
        If a housing accommodation is denied, file a complaint with the Department of Housing and Urban Development (HUD) at hud.gov/program_offices/fair_housing_equal_opp. Complaints must be filed within one year of the discriminatory act.
      </p>

      <h2 style={h2Style}>Educational Rights: Section 504 Plans</h2>

      <p style={bodyStyle}>
        Section 504 of the Rehabilitation Act of 1973 prohibits discrimination against students with disabilities in any program receiving federal funding — which includes nearly all public schools and many colleges and universities.
      </p>

      <p style={bodyStyle}>
        Unlike IEPs (Individualized Education Programs, which apply to K-12 special education), 504 plans extend into higher education and apply to students who do not qualify for special education services but still need accommodations to access equal education.
      </p>

      <h3 style={h3Style}>Common 504 Accommodations for Autistic Students</h3>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>Extended time on tests and assignments</li>
        <li style={{ marginBottom: "0.5rem" }}>Reduced distraction testing environment</li>
        <li style={{ marginBottom: "0.5rem" }}>Written versions of verbal instructions</li>
        <li style={{ marginBottom: "0.5rem" }}>Permission to record lectures</li>
        <li style={{ marginBottom: "0.5rem" }}>Flexible attendance policies for sensory overload days</li>
        <li style={{ marginBottom: "0.5rem" }}>Priority seating (away from high-noise areas)</li>
        <li style={{ marginBottom: "0.5rem" }}>Permission to use fidget tools or sensory supports in class</li>
        <li style={{ marginBottom: "0.5rem" }}>Reduced course load without financial aid penalty</li>
      </ul>

      <h3 style={h3Style}>How to Request Educational Accommodations</h3>

      <p style={bodyStyle}>
        In K-12: Contact the school's 504 coordinator (this is a required position at schools receiving federal funding). Request a meeting in writing. Provide documentation of your child's autism diagnosis from a licensed professional. Schools must evaluate the request within a reasonable time.
      </p>

      <p style={bodyStyle}>
        In higher education: Contact the school's Disability Services or Accessibility Services office. Bring documentation of your diagnosis. The process varies by institution but typically involves an intake meeting, review of documentation, and development of an accommodation letter that you then present to each professor.
      </p>

      <div style={scriptBoxStyle}>{`Subject: Request for Academic Accommodations — [Your Name]

Dear Disability Services,

I am a [year/program] student at [institution name] and I am writing to request academic accommodations under Section 504 of the Rehabilitation Act and the Americans with Disabilities Act.

I have been diagnosed with [Autism Spectrum Disorder / describe condition if not disclosing diagnosis]. My condition affects [describe functional impact, e.g., "my processing speed for timed tests and my ability to focus in noisy testing environments"].

I would like to request an intake meeting to discuss appropriate accommodations and to submit my documentation. I can be reached at [email] or [phone].

Thank you,
[Your name]
[Student ID]
[Program/Year]`}</div>

      <h2 style={h2Style}>Additional Legal Resources</h2>

      <ul style={{ ...bodyStyle, paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>ADA National Network</strong> — adata.org — Free guidance on ADA rights, accommodation requests, and filing complaints. Regional ADA centers offer free consultations.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>EEOC</strong> — eeoc.gov — File workplace discrimination complaints, access guides on the ADA accommodation process.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Your state's Protection and Advocacy (P&A) organization</strong> — Every state has a federally funded P&A organization that provides free legal services on disability rights issues. Find yours at ndrn.org/about/ndrn-member-agencies.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Disability Rights Advocates</strong> — dralegal.org — Nonprofit litigation organization that handles disability rights class action cases.</li>
        <li style={{ marginBottom: "0.75rem" }}><strong style={{ color: "#FAFAF8" }}>Autistic Self Advocacy Network</strong> — autisticadvocacy.org — Policy resources and guides on autistic rights.</li>
      </ul>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/workplace" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Workplace & Career as an Autistic Adult →</a>
        <a href="/college-and-education" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>College & Education →</a>
        <a href="/disclosure" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Disclosure: When and How to Tell People →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors or lawyers. We are advocates. This page provides general legal information only and does not constitute legal advice. Laws and their application vary by jurisdiction and individual circumstance. For specific legal situations, consult a disability rights attorney or your state's Protection and Advocacy organization.
      </p>
    </div>
  );
}
