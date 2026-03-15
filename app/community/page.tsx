"use client";

import { useState } from "react";

export default function CommunityPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("https://formspree.io/f/aaw-community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "community-page" }),
      });
    } catch {
      // fail silently
    }
    setSubmitted(true);
    setEmail("");
  }

  const pageStyle: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "4rem 1.5rem 6rem",
  };

  const heroStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "4rem",
  };

  const h1Style: React.CSSProperties = {
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
    fontWeight: 900,
    color: "#FAFAF8",
    letterSpacing: "-0.03em",
    lineHeight: 1.05,
    marginBottom: "1.25rem",
  };

  const subStyle: React.CSSProperties = {
    fontSize: "1.1875rem",
    color: "rgba(250, 250, 248, 0.65)",
    maxWidth: "620px",
    margin: "0 auto 2.5rem",
    lineHeight: 1.7,
  };

  const valuePropsStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1.25rem",
    marginBottom: "4rem",
  };

  const valuePropStyle: React.CSSProperties = {
    backgroundColor: "rgba(107, 33, 168, 0.08)",
    border: "1px solid rgba(168, 85, 247, 0.2)",
    borderRadius: "12px",
    padding: "1.5rem",
  };

  const valuePropIconStyle: React.CSSProperties = {
    fontSize: "1.75rem",
    marginBottom: "0.75rem",
    lineHeight: 1,
  };

  const valuePropTitleStyle: React.CSSProperties = {
    fontSize: "1.0625rem",
    fontWeight: 700,
    color: "#A855F7",
    marginBottom: "0.5rem",
  };

  const valuePropTextStyle: React.CSSProperties = {
    fontSize: "0.9375rem",
    color: "rgba(250, 250, 248, 0.6)",
    lineHeight: 1.6,
    marginBottom: 0,
  };

  const waitlistBoxStyle: React.CSSProperties = {
    backgroundColor: "rgba(107, 33, 168, 0.12)",
    border: "1px solid rgba(168, 85, 247, 0.25)",
    borderRadius: "16px",
    padding: "3rem 2rem",
    textAlign: "center",
    marginBottom: "3rem",
  };

  const waitlistHeadStyle: React.CSSProperties = {
    fontSize: "1.75rem",
    fontWeight: 800,
    color: "#FAFAF8",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
  };

  const waitlistSubStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "rgba(250, 250, 248, 0.6)",
    marginBottom: "2rem",
    maxWidth: "520px",
    margin: "0 auto 2rem",
    lineHeight: 1.65,
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "480px",
    margin: "0 auto",
  };

  const inputStyle: React.CSSProperties = {
    flex: "1 1 240px",
    padding: "0.8rem 1rem",
    borderRadius: "8px",
    border: "1px solid rgba(168, 85, 247, 0.4)",
    backgroundColor: "rgba(9, 8, 15, 0.6)",
    color: "#FAFAF8",
    fontSize: "1rem",
    outline: "none",
  };

  const submitButtonStyle: React.CSSProperties = {
    backgroundColor: "#6B21A8",
    color: "#FAFAF8",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
  };

  const successStyle: React.CSSProperties = {
    color: "#A855F7",
    fontWeight: 600,
    fontSize: "1.0625rem",
    padding: "1rem 1.5rem",
    backgroundColor: "rgba(107, 33, 168, 0.15)",
    borderRadius: "8px",
    border: "1px solid rgba(168, 85, 247, 0.3)",
    display: "inline-block",
  };

  const principlesStyle: React.CSSProperties = {
    borderTop: "1px solid rgba(168, 85, 247, 0.15)",
    paddingTop: "3rem",
  };

  const principlesHeadStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#FAFAF8",
    marginBottom: "1.5rem",
    letterSpacing: "-0.02em",
  };

  const principleListStyle: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const principleItemStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.75rem",
    alignItems: "flex-start",
  };

  const principleCheckStyle: React.CSSProperties = {
    color: "#A855F7",
    fontWeight: 700,
    fontSize: "1.125rem",
    flexShrink: 0,
    marginTop: "0.15rem",
  };

  const principleTextStyle: React.CSSProperties = {
    fontSize: "1rem",
    color: "rgba(250, 250, 248, 0.7)",
    lineHeight: 1.6,
  };

  const valueProps = [
    {
      icon: "🎙",
      title: "Autistic adults first",
      text: "No parents speaking over us. No professionals translating our experience. Autistic adults are the primary voice here.",
    },
    {
      icon: "🚫",
      title: "No cure narratives",
      text: "You will not find ABA promotion, functioning labels used to dismiss, or the idea that autistic people need to be fixed.",
    },
    {
      icon: "🌿",
      title: "Sensory-aware design",
      text: "The space will be designed with autistic sensory and communication needs in mind. No chaos, no overload.",
    },
    {
      icon: "🔒",
      title: "Actually private",
      text: "Your information stays yours. We are not building a surveillance product wrapped in community aesthetics.",
    },
    {
      icon: "💜",
      title: "Identity-first",
      text: "Autistic person, not person with autism. We follow the language preferences of the community we are building for.",
    },
    {
      icon: "🧠",
      title: "Late diagnosis welcome",
      text: "Diagnosed last year at 47? Figuring out if you are autistic at all? You are welcome here, wherever you are in the process.",
    },
  ];

  const principles = [
    "Identity-first language throughout",
    "No cure narratives, no ABA promotion, ever",
    "Autistic adults are moderators and decision-makers",
    "No inspiration porn, no pity framing",
    "Functioning labels are not used to dismiss or limit",
    "Parents of autistic adults are welcome as observers, not as the primary voice",
    "Mental health content is handled with care and crisis resources are prominent",
  ];

  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <h1 style={h1Style}>A community built by us.</h1>
        <p style={subStyle}>
          No parents speaking over us. No professionals "translating" our experience.
          No inspiration porn. No cure narratives. Just autistic adults -- connecting,
          sharing knowledge, and building something real together.
        </p>
      </div>

      <div style={valuePropsStyle}>
        {valueProps.map((vp) => (
          <div key={vp.title} style={valuePropStyle}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#A855F7', marginBottom: '0.75rem' }} />
            <p style={valuePropTitleStyle}>{vp.title}</p>
            <p style={valuePropTextStyle}>{vp.text}</p>
          </div>
        ))}
      </div>

      <div style={waitlistBoxStyle}>
        <h2 style={waitlistHeadStyle}>Join the waitlist</h2>
        <p style={waitlistSubStyle}>
          The community is in development. Join the waitlist and we will reach out when
          we launch -- with early access and input into how the community is shaped.
        </p>
        {submitted ? (
          <p style={successStyle}>
            You are on the list. We will reach out when we launch.
          </p>
        ) : (
          <form
            style={formStyle}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/aaw-community"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for community waitlist"
            />
            <button type="submit" style={submitButtonStyle}>
              Join Waitlist
            </button>
          </form>
        )}
      </div>

      <div style={principlesStyle}>
        <h2 style={principlesHeadStyle}>Our principles</h2>
        <ul style={principleListStyle}>
          {principles.map((p) => (
            <li key={p} style={principleItemStyle}>
              <span style={principleCheckStyle}>+</span>
              <span style={principleTextStyle}>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
