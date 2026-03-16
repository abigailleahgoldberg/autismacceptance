"use client";

import { useState } from "react";
import Image from "next/image";
import { posts } from "./blog/data";

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1.5rem",
};

// Hero
const heroStyle: React.CSSProperties = {
  padding: "clamp(3rem, 8vw, 6rem) 1.5rem clamp(2.5rem, 6vw, 5rem)",
  textAlign: "center",
  background:
    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(107, 33, 168, 0.18) 0%, transparent 70%)",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
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

// Stats bar
const statsSectionStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.12)",
  borderTop: "1px solid rgba(168, 85, 247, 0.2)",
  borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
  padding: "clamp(1.75rem, 4vw, 2.5rem) 1.5rem",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
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
const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(1.625rem, 4vw, 2.5rem)",
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
const topicCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.08)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "12px",
  padding: "1.75rem",
  textDecoration: "none",
  display: "block",
  transition: "border-color 0.2s, background-color 0.2s",
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
  padding: "clamp(2.5rem, 6vw, 4rem) 1.5rem",
  textAlign: "center",
};

const communityHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(1.625rem, 4vw, 2.5rem)",
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

const disclaimerStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.2)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  margin: "3rem auto",
  maxWidth: "1200px",
};

const topics = [
  {
    href: "/late-diagnosis",
    title: "Late Diagnosis",
    desc: "Diagnosed at 30, 40, 50+? You are not alone. Here is everything you need.",
  },
  {
    href: "/masking",
    title: "Masking and Unmasking",
    desc: "What masking costs you. And what unmasking can give back.",
  },
  {
    href: "/workplace",
    title: "Workplace Rights",
    desc: "ADA, reasonable accommodations, disclosure decisions. Know your rights.",
  },
  {
    href: "/relationships",
    title: "Relationships and Dating",
    desc: "Autistic love, autistic communication, autistic connection. It looks different. It is not less.",
  },
  {
    href: "/sensory",
    title: "Sensory Needs",
    desc: "Your sensory experience is valid. Tools, strategies, and community knowledge.",
  },
  {
    href: "/burnout",
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
      {/* Responsive styles */}
      <style>{`
        .hero-cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-primary {
          background-color: #6B21A8;
          color: #FAFAF8;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          border: 2px solid #6B21A8;
          transition: all 0.2s;
          min-height: 44px;
        }
        .cta-secondary {
          background-color: transparent;
          color: #A855F7;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          border: 2px solid #A855F7;
          transition: all 0.2s;
          min-height: 44px;
        }
        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .topic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .section-pad {
          padding: clamp(2.5rem, 6vw, 4rem) 1.5rem;
        }
        .community-form {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .community-input {
          flex: 1 1 260px;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(168, 85, 247, 0.4);
          background-color: rgba(9, 8, 15, 0.6);
          color: #FAFAF8;
          font-size: 1rem;
          outline: none;
          min-height: 44px;
        }
        .community-submit {
          background-color: #6B21A8;
          color: #FAFAF8;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          flex-shrink: 0;
          min-height: 44px;
          font-family: inherit;
        }

        /* Bear section */
        .bear-section {
          padding: clamp(2.5rem, 6vw, 4rem) 1.5rem;
          background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(107, 33, 168, 0.1) 0%, transparent 80%);
        }
        .bear-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: auto auto;
          gap: 1rem;
          max-width: 1100px;
          margin: 0 auto 1.75rem;
        }
        .bear-hero-img {
          grid-row: 1 / 3;
          grid-column: 1 / 2;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4 / 3;
        }
        .bear-secondary-img {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4 / 3;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }
          .topic-grid {
            grid-template-columns: 1fr;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .shop-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-cta-group a {
            width: 100%;
            text-align: center;
          }
          .bear-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }
          .bear-hero-img {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
          }
          .bear-secondary-img {
            grid-column: 1 / 2;
          }
        }

        @media (max-width: 480px) {
          .shop-grid {
            grid-template-columns: 1fr;
          }
          .cta-primary,
          .cta-secondary {
            width: 100%;
            text-align: center;
          }
          .community-form {
            flex-direction: column;
          }
          .community-input,
          .community-submit {
            width: 100%;
          }
        }
      `}</style>

      {/* Hero */}
      <section style={heroStyle} aria-labelledby="hero-heading">
        <div style={containerStyle}>
          <div style={{ marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <Image
              src="/bears/bears-together.jpg"
              alt="Bears together"
              width={800}
              height={300}
              style={{ width: "100%", maxWidth: 600, height: "auto", borderRadius: 12, objectFit: "cover", margin: "0 auto", display: "block", opacity: 0.85 }}
              priority
            />
          </div>
          <h1 style={h1Style} id="hero-heading">
            Autism Acceptance Starts Here.
          </h1>
          <p style={heroSubStyle}>
            Autism Acceptance World is the largest adult autism resource on the internet.
            Built for autistic adults. Written with the community. No inspiration porn.
            No cure narratives. Just real information, real community, and real acceptance.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(168,85,247,0.7)", marginBottom: "1.5rem" }}>
            A <a href="https://webearish.com" target="_blank" rel="noopener noreferrer" style={{ color: "#A855F7", textDecoration: "underline" }}>WeBearish</a> affiliate — 100% of profits reinvested into autism acceptance programs
          </p>
          <div className="hero-cta-group">
            <a href="/resources" className="cta-primary">
              Explore Resources
            </a>
            <a href="/community" className="cta-secondary">
              Join the Community
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={statsSectionStyle} aria-label="Autism statistics">
        <div className="stats-grid">
          <div style={{ textAlign: "center" }}>
            <p style={statNumberStyle}>1 in 36</p>
            <p style={statLabelStyle}>Americans are autistic</p>
            <p style={statNoteStyle}>Source: CDC MMWR 2023</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={statNumberStyle}>80%</p>
            <p style={statLabelStyle}>of autistic adults are under- or un-employed</p>
            <p style={statNoteStyle}>
              Not because of autism — because of inaccessible workplaces
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={statNumberStyle}>72+</p>
            <p style={statLabelStyle}>Average age of autism diagnosis for women</p>
            <p style={statNoteStyle}>Years of masking. Years of not knowing.</p>
          </div>
        </div>
      </section>

      {/* Topic Hub */}
      <section className="section-pad" aria-labelledby="topics-heading">
        <div style={containerStyle}>
          <h2 style={sectionHeadingStyle} id="topics-heading">
            Find what you need
          </h2>
          <p style={sectionSubStyle}>
            Every topic, built for autistic adults. Written by people who actually get it.
          </p>
          <div className="topic-grid">
            {topics.map((t) => (
              <a key={t.href} href={t.href} style={topicCardStyle}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#A855F7", marginBottom: "0.75rem" }} />
                <p style={topicTitleStyle}>{t.title}</p>
                <p style={topicDescStyle}>{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bear Photo Section */}
      {/* Bear section removed — photo now in hero */}

      {/* Featured blog posts */}
      <section
        style={{ paddingTop: 0, backgroundColor: "rgba(107,33,168,0.04)" }}
        className="section-pad"
        aria-labelledby="blog-heading"
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionHeadingStyle, paddingTop: "1rem" }} id="blog-heading">
            From the blog
          </h2>
          <p style={sectionSubStyle}>
            Real writing about real autistic adult life. No platitudes.
          </p>
          <div className="blog-grid">
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

      {/* Shop for Acceptance callout */}
      <section
        className="section-pad"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(107, 33, 168, 0.15) 0%, transparent 75%)",
        }}
        aria-labelledby="shop-callout-heading"
      >
        <div style={containerStyle}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={sectionHeadingStyle} id="shop-callout-heading">
              Shop for Acceptance
            </h2>
            <p style={sectionSubStyle}>
              Adult autism acceptance merch from WeBearish. 100% of profits reinvested into this community.
            </p>
          </div>
          <div className="shop-grid">
            {[
              { name: "Acceptance Over Awareness", price: "$34.99", color: "#6B21A8" },
              { name: "Different Not Less", price: "$59.99", color: "#4C1D95" },
              { name: "Stimming Is Self-Care", price: "$34.99", color: "#5B21B6" },
              { name: "Actually Autistic", price: "$28.99", color: "#D97706" },
            ].map((item) => (
              <a
                key={item.name}
                href="/shop"
                style={{
                  backgroundColor: "rgba(107, 33, 168, 0.07)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22 0%, ${item.color}44 100%)`,
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(168, 85, 247, 0.12)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 100 100"
                    fill={item.color}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "44px", height: "44px", opacity: 0.5 }}
                  >
                    <circle cx="28" cy="30" r="14" />
                    <circle cx="72" cy="30" r="14" />
                    <circle cx="50" cy="45" r="28" />
                    <ellipse cx="50" cy="82" rx="24" ry="18" />
                  </svg>
                </div>
                <div style={{ padding: "1rem" }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FAFAF8", marginBottom: "0.25rem", lineHeight: 1.3 }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: "1.125rem", fontWeight: 900, color: "#A855F7", marginBottom: 0, letterSpacing: "-0.01em" }}>
                    {item.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/shop" className="cta-primary">
              Visit the Shop
            </a>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section style={communitySectionStyle} aria-labelledby="community-heading">
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={communityHeadingStyle} id="community-heading">
            A community built for us
          </h2>
          <p style={communityTextStyle}>
            The autismacceptance.world community is coming. A space for autistic adults —
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
              className="community-form"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/aaw-community"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="community-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for community waitlist"
              />
              <button type="submit" className="community-submit">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <div style={disclaimerStyle} role="note" aria-label="Disclaimer">
        <p style={{ fontSize: "0.875rem", color: "rgba(250, 250, 248, 0.55)", lineHeight: 1.6, marginBottom: 0 }}>
          <strong style={{ color: "rgba(250,250,248,0.75)" }}>Disclaimer:</strong> Not a
          medical site. Not a diagnostic tool. Nothing here is intended as medical advice.
          For diagnosis, see a qualified professional. For community, you are already in the
          right place.
        </p>
      </div>
    </>
  );
}
