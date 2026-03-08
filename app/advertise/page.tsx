export const metadata = {
  title: "Advertise -- Autism Acceptance World",
  description:
    "Reach autistic adults, late-diagnosed adults, autistic professionals, and their partners. Advertising on Autism Acceptance World.",
};

const pageStyle: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.03em",
  marginBottom: "0.75rem",
};

const subStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  color: "rgba(250, 250, 248, 0.6)",
  marginBottom: "3rem",
  maxWidth: "640px",
  lineHeight: 1.7,
};

const sectionHeadStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: 800,
  color: "#A855F7",
  marginBottom: "0.5rem",
  letterSpacing: "-0.01em",
};

const dividerStyle: React.CSSProperties = {
  height: "2px",
  background: "linear-gradient(to right, rgba(168, 85, 247, 0.4), transparent)",
  marginBottom: "1.5rem",
  border: "none",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "3rem",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "1rem",
  marginBottom: "1rem",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.18)",
  borderRadius: "10px",
  padding: "1.25rem",
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#FAFAF8",
  marginBottom: "0.35rem",
};

const cardTextStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: 0,
};

const rejectCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(239, 68, 68, 0.05)",
  border: "1px solid rgba(239, 68, 68, 0.2)",
  borderRadius: "10px",
  padding: "1.25rem",
};

const rejectTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "rgba(239, 68, 68, 0.85)",
  marginBottom: "0.35rem",
};

const pricingGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.25rem",
  marginBottom: "2rem",
};

const pricingCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.1)",
  border: "1px solid rgba(168, 85, 247, 0.25)",
  borderRadius: "12px",
  padding: "1.75rem",
};

const pricingTypeStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#D97706",
  marginBottom: "0.35rem",
};

const pricingPriceStyle: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: 900,
  color: "#FAFAF8",
  marginBottom: "0.5rem",
  letterSpacing: "-0.02em",
};

const pricingDescStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(250, 250, 248, 0.6)",
  lineHeight: 1.6,
  marginBottom: 0,
};

const ctaStyle: React.CSSProperties = {
  backgroundColor: "#6B21A8",
  color: "#FAFAF8",
  padding: "1rem 2rem",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
  marginTop: "0.5rem",
};

const accepted = [
  {
    title: "Sensory tools and products",
    text: "Noise-canceling headphones, stim tools, weighted blankets, sensory-friendly clothing. Directly useful to our audience.",
  },
  {
    title: "Autism-affirming therapy",
    text: "Therapists and services that use neurodiversity-affirming approaches. Explicitly no ABA. No cure framing.",
  },
  {
    title: "Workplace accessibility tools",
    text: "Remote work tools, accommodation assistance services, neurodiversity employment programs.",
  },
  {
    title: "Neurodiversity employment programs",
    text: "Organizations that genuinely work to employ autistic adults. Not tokenistic diversity programs.",
  },
  {
    title: "Books and educational content",
    text: "Books about autism, neurodivergence, self-advocacy, and related topics. Identity-first framing required.",
  },
  {
    title: "Mental health apps",
    text: "Apps focused on anxiety management, regulation, and mental health. Must be appropriate for autistic users.",
  },
];

const rejected = [
  {
    title: "ABA therapy",
    text: "We do not promote applied behavior analysis. This is not negotiable.",
  },
  {
    title: "Cure-focused products or services",
    text: "Anything that frames autism as a disease to be eliminated or cured will not be accepted.",
  },
  {
    title: "Inspiration porn content",
    text: "Products or campaigns that exploit autistic people for neurotypical emotional satisfaction.",
  },
  {
    title: "Functioning labels used pejoratively",
    text: "Any advertiser whose copy uses 'high-functioning' or 'low-functioning' to dismiss or diminish autistic people.",
  },
];

const pricing = [
  {
    type: "Guest Post",
    price: "$200 -- $400",
    desc: "A 500+ word article written by your team and reviewed by us. Must meet editorial standards: identity-first, no cure framing, genuinely useful to autistic adults.",
  },
  {
    type: "Link Insertion",
    price: "$100 -- $200",
    desc: "A contextual link inserted into relevant existing content. Must be editorially appropriate and relevant to the article topic.",
  },
];

export default function AdvertisePage() {
  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>Advertise on Autism Acceptance World</h1>
      <p style={subStyle}>
        Reach autistic adults, late-diagnosed adults, autistic professionals, and the
        partners and families who want to actually understand them. Our audience is engaged,
        trust-based, and not well-served by mainstream autism advertising that ignores
        what autistic adults actually want.
      </p>

      {/* Who we accept */}
      <section style={sectionStyle} aria-labelledby="accept-heading">
        <h2 style={sectionHeadStyle} id="accept-heading">
          We accept advertising from
        </h2>
        <hr style={dividerStyle} />
        <div style={gridStyle}>
          {accepted.map((a) => (
            <div key={a.title} style={cardStyle}>
              <p style={cardTitleStyle}>{a.title}</p>
              <p style={cardTextStyle}>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we reject */}
      <section style={sectionStyle} aria-labelledby="reject-heading">
        <h2 style={{ ...sectionHeadStyle, color: "rgba(239,68,68,0.85)" }} id="reject-heading">
          We do not accept advertising from
        </h2>
        <hr
          style={{
            ...dividerStyle,
            background:
              "linear-gradient(to right, rgba(239, 68, 68, 0.4), transparent)",
          }}
        />
        <div style={gridStyle}>
          {rejected.map((r) => (
            <div key={r.title} style={rejectCardStyle}>
              <p style={rejectTitleStyle}>{r.title}</p>
              <p style={cardTextStyle}>{r.text}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "0.9375rem",
            color: "rgba(250, 250, 248, 0.5)",
            marginTop: "1rem",
          }}
        >
          These standards are not negotiable. Submissions that do not meet them will be
          declined without discussion.
        </p>
      </section>

      {/* Pricing */}
      <section style={sectionStyle} aria-labelledby="pricing-heading">
        <h2 style={sectionHeadStyle} id="pricing-heading">
          Pricing
        </h2>
        <hr style={dividerStyle} />
        <div style={pricingGridStyle}>
          {pricing.map((p) => (
            <div key={p.type} style={pricingCardStyle}>
              <p style={pricingTypeStyle}>{p.type}</p>
              <p style={pricingPriceStyle}>{p.price}</p>
              <p style={pricingDescStyle}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(250, 250, 248, 0.45)",
          }}
        >
          Pricing depends on content type, link placement, and traffic levels. All placements
          are labeled as sponsored content or affiliate links per FTC guidelines.
        </p>
      </section>

      {/* CTA */}
      <section style={sectionStyle} aria-labelledby="contact-heading">
        <h2 style={sectionHeadStyle} id="contact-heading">
          Get in touch
        </h2>
        <hr style={dividerStyle} />
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(250, 250, 248, 0.65)",
            marginBottom: "1.25rem",
            lineHeight: 1.7,
          }}
        >
          To inquire about advertising, email us at{" "}
          <a
            href="mailto:advertise@autismacceptance.world"
            style={{ color: "#A855F7", fontWeight: 600 }}
          >
            advertise@autismacceptance.world
          </a>
          . Include a description of what you are offering, your website URL, and the type
          of placement you are interested in.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(250, 250, 248, 0.45)",
          }}
        >
          We review all advertising requests for alignment with our editorial standards
          before accepting. We reserve the right to decline any advertiser at any time.
        </p>
      </section>
    </div>
  );
}
