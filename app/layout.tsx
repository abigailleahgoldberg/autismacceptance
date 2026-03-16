"use client";

import { useState } from "react";
import "./globals.css";

const navStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: "rgba(9, 8, 15, 0.92)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
  padding: "0 1.5rem",
};

const navInnerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
  gap: "1rem",
  position: "relative",
};

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "0.35rem",
  textDecoration: "none",
  flexShrink: 0,
};

const logoTextStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "#A855F7",
  letterSpacing: "-0.01em",
};

const logoWorldStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 700,
  color: "#D97706",
  letterSpacing: "-0.01em",
};

const navLinkStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.7)",
  fontSize: "0.9375rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s",
  whiteSpace: "nowrap",
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: "#6B21A8",
  color: "#FAFAF8",
  padding: "0.5rem 1.25rem",
  borderRadius: "6px",
  fontSize: "0.9375rem",
  fontWeight: 600,
  textDecoration: "none",
  border: "none",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.2s",
  minHeight: "44px",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#09080F",
  borderTop: "1px solid rgba(168, 85, 247, 0.15)",
  padding: "3rem 1.5rem 2rem",
  marginTop: "4rem",
};

const footerInnerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const footerHeadingStyle: React.CSSProperties = {
  color: "#A855F7",
  fontSize: "0.875rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "0.75rem",
};

const footerTextStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.55)",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  marginBottom: 0,
};

const footerLinkStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.55)",
  fontSize: "0.875rem",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.5rem",
  padding: "0.2rem 0",
  transition: "color 0.2s",
};

const footerBottomStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(168, 85, 247, 0.1)",
  paddingTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const footerLegalStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.35)",
  fontSize: "0.8125rem",
  marginBottom: 0,
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FAFAF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Autism Acceptance World -- The Adult Autism Resource</title>
        <meta
          name="description"
          content="The world's greatest autism acceptance resource. Built for autistic adults. No cure narratives. No inspiration porn. Real information, real community, real acceptance."
        />
        <meta property="og:title" content="Autism Acceptance World — The Adult Autism Resource" />
        <meta property="og:description" content="Built for autistic adults. No cure narratives. No inspiration porn. Real information, real community, real acceptance." />
        <meta property="og:image" content="https://autismacceptance.world/bears/bears-together.jpg" />
        <meta property="og:url" content="https://autismacceptance.world" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Autism Acceptance World" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Autism Acceptance World — The Adult Autism Resource" />
        <meta name="twitter:description" content="Built for autistic adults. No cure narratives. Real acceptance." />
        <meta name="twitter:image" content="https://autismacceptance.world/bears/bears-together.jpg" />
      </head>
      <body>
        <nav style={navStyle} aria-label="Main navigation">
          <div style={navInnerStyle}>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
              <a href="/" style={{ ...logoStyle, display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", zIndex: 10 }} aria-label="Autism Acceptance World home">
                <img src="/bears/bear-forest.jpg" alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" as const }} />
                <span>
                  <span style={logoTextStyle}>Autism Acceptance</span>
                  <span style={logoWorldStyle}> World</span>
                </span>
              </a>
              <a href="https://webearish.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "10px", color: "rgba(168,85,247,0.6)", textDecoration: "none", letterSpacing: "0.5px", paddingLeft: "46px" }}>
                A WeBearish Affiliate
              </a>
            </div>

            {/* Desktop nav */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
              className="nav-desktop"
            >
              <li style={{ width: "100%" }}><a href="/community" style={navLinkStyle}>Community</a></li>
              <li style={{ width: "100%" }}><a href="/resources" style={navLinkStyle}>Resources</a></li>
              <li style={{ width: "100%" }}><a href="/blog" style={navLinkStyle}>Blog</a></li>
              <li style={{ width: "100%" }}><a href="/shop" style={navLinkStyle}>Shop</a></li>
              <li style={{ width: "100%" }}>
                <a href="/community" style={ctaButtonStyle}>Get Support</a>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "44px",
                minWidth: "44px",
              }}
              className="nav-hamburger"
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* Mobile nav drawer - OUTSIDE nav to avoid sticky/fixed conflict on iOS */}
        {menuOpen && (
          <div
            id="mobile-nav"
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(9, 8, 15, 0.98)",
              zIndex: 200,
              overflowY: "auto",
              padding: "1.5rem",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li style={{ width: "100%" }}>
              <a
                href="/community"
                style={{ ...navLinkStyle, display: "block", padding: "0.875rem 0", borderBottom: "1px solid rgba(168,85,247,0.1)", fontSize: "1.0625rem" }}
                onClick={() => setMenuOpen(false)}
              >
                Community
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="/resources"
                style={{ ...navLinkStyle, display: "block", padding: "0.875rem 0", borderBottom: "1px solid rgba(168,85,247,0.1)", fontSize: "1.0625rem" }}
                onClick={() => setMenuOpen(false)}
              >
                Resources
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="/blog"
                style={{ ...navLinkStyle, display: "block", padding: "0.875rem 0", borderBottom: "1px solid rgba(168,85,247,0.1)", fontSize: "1.0625rem" }}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="/shop"
                style={{ ...navLinkStyle, display: "block", padding: "0.875rem 0", borderBottom: "1px solid rgba(168,85,247,0.1)", fontSize: "1.0625rem" }}
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </a>
            </li>
            <li style={{ width: "100%", paddingTop: "0.75rem" }}>
              <a
                href="/community"
                style={{
                  backgroundColor: "#6B21A8",
                  color: "#FAFAF8",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Get Support
              </a>
            </li>
            </ul>
          </div>
        )}

        <style>{`
          .nav-hamburger {
            display: none;
          }
          @media (max-width: 768px) {
            .nav-desktop {
              display: none !important;
            }
            .nav-hamburger {
              display: flex !important;
            }
          }
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 2rem;
            margin-bottom: 2.5rem;
          }
          @media (max-width: 600px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 420px) {
            .footer-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <main>{children}</main>

        <footer style={footerStyle} aria-label="Site footer">
          <div style={footerInnerStyle}>
            <div className="footer-grid">
              <div>
                <p style={{ ...footerHeadingStyle, color: "#A855F7" }}>
                  Autism Acceptance World
                </p>
                <p style={footerTextStyle}>
                  The world's greatest autism acceptance resource. Built for autistic adults,
                  by people who get it. No cure narratives. No inspiration porn.
                  Real information, real community, real acceptance.
                </p>
              </div>

              <div>
                <p style={footerHeadingStyle}>Explore</p>
                <a href="/blog" style={footerLinkStyle}>Blog</a>
                <a href="/resources" style={footerLinkStyle}>Resources</a>
                <a href="/community" style={footerLinkStyle}>Community</a>
                <a href="/shop" style={footerLinkStyle}>Shop</a>
                <a href="/advertise" style={footerLinkStyle}>Advertise</a>
              </div>

              <div>
                <p style={footerHeadingStyle}>Topics</p>
                <a href="/late-diagnosis" style={footerLinkStyle}>Late Diagnosis</a>
                <a href="/masking" style={footerLinkStyle}>Masking and Unmasking</a>
                <a href="/workplace" style={footerLinkStyle}>Workplace Rights</a>
                <a href="/burnout" style={footerLinkStyle}>Autistic Burnout</a>
                <a href="/relationships" style={footerLinkStyle}>Relationships</a>
                <a href="/sensory" style={footerLinkStyle}>Sensory Needs</a>
              </div>

              <div>
                <p style={footerHeadingStyle}>Our Network</p>
                <a
                  href="https://webearish.com"
                  style={footerLinkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WeBearish.com
                </a>
                <a
                  href="https://jewsa.com"
                  style={footerLinkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JewSA.com
                </a>
                <a
                  href="https://u-god.com"
                  style={footerLinkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U-God.com
                </a>
                <a
                  href="https://thevoiceofcash.com"
                  style={footerLinkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Voice of Cash
                </a>
                <a
                  href="https://aiskillsagents.com"
                  style={footerLinkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI Skills Agents
                </a>
              </div>
            </div>

            <div style={footerBottomStyle}>
              <p style={footerLegalStyle}>
                Identity-first language used throughout. Autistic people are not broken.
              </p>
              <p style={footerLegalStyle}>
                &copy; {new Date().getFullYear()} Autism Acceptance World. Not a medical site.
                Nothing here constitutes medical advice. For diagnosis, see a qualified professional.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
