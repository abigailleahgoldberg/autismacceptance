"use client";

import { useState } from "react";
import { posts } from "./blog/data";

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1.5rem",
};

// Hero
const heroStyle: React.CSSProperties = {
  padding: "6rem 1.5rem 5rem",
  textAlign: "center",
  background:
    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107, 33, 168, 0.18) 0%, transparent 70%)",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.03em",
  lineHeight: 1.05,
  marginBottom: "1.5rem",
};

const heroSubStyle: React.CSSProperties = {
  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
  color: "rgba(250, 250, 248, 0.7)",
  maxWidth: "720px",
  margin: "0 auto 2.5rem",
  lineHeight: 1.7,
};

const heroCTAGroupStyle: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryCTAStyle: React.CSSProperties = {
  backgroundColor: "#6B21A8",
  color: "#FAFAF8",
  padding: "0.875rem 2rem",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #6B21A8",
  transition: "all 0.2s",
};

const secondaryCTAStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  color: "#A855F7",
  padding: "0.875rem 2rem",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 700,
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #A855F7",
  transition: "all 0.2s",
};

// Stats bar
const statsSectionStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.12)",
  borderTop: "1px solid rgba(168, 85, 247, 0.2)",
  borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
  padding: "2.5rem 1.5rem",
};

const statsGridStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
};

const statItemStyle: React.CSSProperties = {
  textAlign: "center",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
  fontWeight: 900,
  color: "#D97706",
  letterSpacing: "-0.03em",
  lineHeight: 1,
  marginBottom: "0.5rem",
};

const statLabelStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#FAFAF8",
  fontWeight: 600,
  marginBottom: "0.35rem",
};

const statNoteStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "rgba(250, 250, 248, 0.5)",
  marginBottom: 0,
};

// Section headings
const sectionStyle: React.CSSProperties = {
  padding: "4rem 1.5rem",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  fontWeight: 800,
  color: "#FAFAF8",
  marginBottom: "0.5rem",
  letterSpacing: "-0.02em",
};

const sectionSubStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "rgba(250, 250, 248, 0.55)",
  marginBottom: "2.5rem",
};

// Topic cards
const topicGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "1.5rem",
};

const topicCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.08)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "12px",
  padding: "1.75rem",
  textDecoration: "none",
  display: "block",
  transition: "border-color 0.2s, background-color 0.2s",
};

const topicIconStyle: React.CSSProperties = {
  fontSize: "2rem",
  marginBottom: "1rem",
  lineHeight: 1,
};

const topicTitleStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "#A855F7",
  marginBottom: "0.5rem",
};

const topicDescStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "rgba(250, 250, 248, 0.65)",
  lineHeight: 1.6,
  marginBottom: 0,
};

// Blog cards
const blogGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.5rem",
};

const blogCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.06)",
  border: "1px solid rgba(168, 85, 247, 0.15)",
  borderRadius: "12px",
  padding: "1.5rem",
  textDecoration: "none",
  display: "block",
  transition: "border-color 0.2s, background-color 0.2s",
};

const blogCategoryStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#D97706",
  marginBottom: "0.5rem",
};

const blogTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#FAFAF8",
  marginBottom: "0.5rem",
  lineHeight: 1.4,
};

const blogDescStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: 0,
};

// Community section
const communitySectionStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.12)",
  borderTop: "1px solid rgba(168, 85, 247, 0.2)",
  borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
  padding: "4rem 1.5rem",
  textAlign: "center",
};

const communityInnerStyle: React.CSSProperties = {
  maxWidth: "640px",
  margin: "0 auto",
};

const communityHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  fontWeight: 800,
  color: "#FAFAF8",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
};

const communityTextStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.7)",
  marginBottom: "2rem",
  lineHeight: 1.7,
};

const formStyle: React.CSSProperties = {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  justifyContent: "center",
};

const inputStyle: React.CSSProperties = {
  flex: "1 1 260px",
  padding: "0.75rem 1rem",
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
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s",
  flexShrink: 0,
};

// Disclaimer
const disclaimerStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.2)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  margin: "3rem 1.5rem",
  maxWidth: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
};

const disclaimerTextStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: 0,
};

const topics = [
  {
    href: "/late-diagnosis",
    icon: "🔍",
    title: "Late Diagnosis",
    desc: "Diagnosed at 30, 40, 50+? You are not alone. Here is everything you need.",
  },
  {
    href: "/masking",
    icon: "🎭",
    title: "Masking and Unmasking",
    desc: "What masking costs you. And what unmasking can give back.",
  },
  {
    href: "/workplace",
    icon: "💼",
    title: "Workplace Rights",
    desc: "ADA, reasonable accommodations, disclosure decisions. Know your rights.",
  },
  {
    href: "/relationships",
    icon: "💜",
    title: "Relationships and Dating",
    desc: "Autistic love, autistic communication, autistic connection. It looks different. It is not less.",
  },
  {
    href: "/sensory",
    icon: "🌿",
    title: "Sensory Needs",
    desc: "Your sensory experience is valid. Tools, strategies, and community knowledge.",
  },
  {
    href: "/burnout",
    icon: "🔋",
    title: "Autistic Burnout",
    desc: "What it is, how to recognize it, and how to actually recover.",
  },
];

const featuredPosts = posts.slice(0, 4);

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("https://formspree.io/f/aaw-community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={heroStyle} aria-labelledby="hero-heading">
        <div style={containerStyle}>
          <h1 style={h1Style} id="hero-heading">
            You are not broken.
          </h1>
          <p style={heroSubStyle}>
            Autism Acceptance World is the largest adult autism resource on the internet.
            Built for autistic adults. Written with the community. No inspiration porn.
            No cure narratives. Just real information, real community, and real acceptance.
          </p>
          <div style={heroCTAGroupStyle}>
            <a href="/resources" style={primaryCTAStyle}>
              Explore Resources
            </a>
            <a href="/community" style={secondaryCTAStyle}>
              Join the Community
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={statsSectionStyle} aria-label="Autism statistics">
        <div style={statsGridStyle}>
          <div style={statItemStyle}>
            <p style={statNumberStyle}>1 in 36</p>
            <p style={statLabelStyle}>Americans are autistic</p>
            <p style={statNoteStyle}>Source: CDC MMWR 2023</p>
          </div>
          <div style={statItemStyle}>
            <p style={statNumberStyle}>80%</p>
            <p style={statLabelStyle}>of autistic adults are under- or un-employed</p>
            <p style={statNoteStyle}>
              Not because of autism -- because of inaccessible workplaces
            </p>
          </div>
          <div style={statItemStyle}>
            <p style={statNumberStyle}>72+</p>
            <p style={statLabelStyle}>Average age of autism diagnosis for women</p>
            <p style={statNoteStyle}>Years of masking. Years of not knowing.</p>
          </div>
        </div>
      </section>

      {/* Topic Hub */}
      <section style={sectionStyle} aria-labelledby="topics-heading">
        <div style={containerStyle}>
          <h2 style={sectionHeadingStyle} id="topics-heading">
            Find what you need
          </h2>
          <p style={sectionSubStyle}>
            Every topic, built for autistic adults. Written by people who actually get it.
          </p>
          <div style={topicGridStyle}>
            {topics.map((t) => (
              <a key={t.href} href={t.href} style={topicCardStyle}>
                <div style={topicIconStyle}>{t.icon}</div>
                <p style={topicTitleStyle}>{t.title}</p>
                <p style={topicDescStyle}>{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured blog posts */}
      <section
        style={{ ...sectionStyle, paddingTop: 0, backgroundColor: "rgba(107,33,168,0.04)" }}
        aria-labelledby="blog-heading"
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionHeadingStyle, paddingTop: "3rem" }} id="blog-heading">
            From the blog
          </h2>
          <p style={sectionSubStyle}>
            Real writing about real autistic adult life. No platitudes.
          </p>
          <div style={blogGridStyle}>
            {featuredPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={blogCardStyle}>
                <p style={blogCategoryStyle}>{post.category}</p>
                <p style={blogTitleStyle}>{post.title}</p>
                <p style={blogDescStyle}>{post.description}</p>
              </a>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              href="/blog"
              style={{
                color: "#A855F7",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "underline",
              }}
            >
              View all articles
            </a>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section style={communitySectionStyle} aria-labelledby="community-heading">
        <div style={communityInnerStyle}>
          <h2 style={communityHeadingStyle} id="community-heading">
            A community built for us
          </h2>
          <p style={communityTextStyle}>
            The autismacceptance.world community is coming. A space for autistic adults --
            no parents speaking over us, no professionals "translating" our experience.
            Join the waitlist.
          </p>
          {submitted ? (
            <p
              style={{
                color: "#A855F7",
                fontWeight: 600,
                fontSize: "1.0625rem",
                padding: "1rem",
                backgroundColor: "rgba(107, 33, 168, 0.15)",
                borderRadius: "8px",
                border: "1px solid rgba(168, 85, 247, 0.3)",
              }}
            >
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
      </section>

      {/* Disclaimer */}
      <div style={disclaimerStyle} role="note" aria-label="Disclaimer">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.75)" }}>Disclaimer:</strong> Not a
          medical site. Not a diagnostic tool. Nothing here is intended as medical advice.
          For diagnosis, see a qualified professional. For community, you are already in the
          right place.
        </p>
      </div>
    </>
  );
}
