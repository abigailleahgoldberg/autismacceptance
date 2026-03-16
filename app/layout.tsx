"use client";

import { useState, useRef, useEffect } from "react";
import "./globals.css";

const navStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: "rgba(9, 8, 15, 0.92)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
  padding: "0 1rem",
  maxWidth: "100vw",
  overflow: "visible",
};

const navInnerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
  gap: "0.5rem",
  position: "relative",
  width: "100%",
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

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: "#6B21A8",
  color: "#FAFAF8",
  padding: "0.5rem 1.25rem",
  borderRadius: "6px",
  fontSize: "0.875rem",
  fontWeight: 600,
  textDecoration: "none",
  border: "none",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.2s",
  minHeight: "44px",
  whiteSpace: "nowrap" as const,
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

const dropdownCategories = [
  {
    label: "Understanding Autism",
    links: [
      { label: "Late Diagnosis", href: "/late-diagnosis" },
      { label: "Autism in Women", href: "/autism-in-women" },
      { label: "Autism in Men", href: "/autism-in-men" },
      { label: "Autism & ADHD", href: "/autism-and-adhd" },
      { label: "Autistic Burnout", href: "/autistic-burnout" },
      { label: "Masking", href: "/masking-and-unmasking" },
      { label: "Sensory Processing", href: "/sensory-processing" },
      { label: "Executive Function", href: "/executive-function" },
    ],
  },
  {
    label: "Life as an Adult",
    links: [
      { label: "Workplace", href: "/workplace" },
      { label: "Relationships", href: "/relationships-and-dating" },
      { label: "Friendships", href: "/friendships" },
      { label: "Independent Living", href: "/independent-living" },
      { label: "Finances", href: "/financial-management" },
      { label: "College", href: "/college-and-education" },
      { label: "Disclosure", href: "/disclosure" },
    ],
  },
  {
    label: "Mental Health",
    links: [
      { label: "Anxiety", href: "/anxiety-and-autism" },
      { label: "Depression", href: "/depression-and-autism" },
      { label: "PTSD", href: "/ptsd-and-trauma" },
      { label: "Finding Therapy", href: "/finding-affirming-therapy" },
      { label: "Medication", href: "/medication" },
      { label: "Crisis Resources", href: "/crisis-resources" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Books", href: "/books" },
      { label: "Podcasts", href: "/podcasts" },
      { label: "Therapists", href: "/therapist-directory" },
      { label: "Legal Rights", href: "/legal-rights" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog" },
      { label: "Shop", href: "/shop" },
    ],
  },
];

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

function DropdownMenu({ category, index }: { category: typeof dropdownCategories[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li
      ref={ref}
      style={{ position: "relative", listStyle: "none" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(250, 250, 248, 0.7)",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: "0.25rem 0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          whiteSpace: "nowrap" as const,
          transition: "color 0.2s",
        }}
      >
        {category.label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="2,4 6,8 10,4" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: index >= 2 ? "auto" : "0",
            right: index >= 2 ? "0" : "auto",
            backgroundColor: "rgba(14, 12, 24, 0.98)",
            border: "1px solid rgba(168, 85, 247, 0.25)",
            borderRadius: "10px",
            padding: "0.75rem",
            minWidth: "200px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            zIndex: 200,
          }}
        >
          {category.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "0.5rem 0.75rem",
                color: "rgba(250, 250, 248, 0.8)",
                textDecoration: "none",
                fontSize: "0.9rem",
                borderRadius: "6px",
                transition: "background 0.15s, color 0.15s",
                whiteSpace: "nowrap" as const,
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(168,85,247,0.15)";
                (e.target as HTMLElement).style.color = "#FAFAF8";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "rgba(250, 250, 248, 0.8)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<number | null>(null);

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
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px", flexShrink: 0, minWidth: 0 }}>
              <a href="/" style={{ ...logoStyle, display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", zIndex: 10 }} aria-label="Autism Acceptance World home">
                <img src="/bears/bear-forest.jpg" alt="" style={{ width: 36, height: 36, minWidth: 36, borderRadius: "50%", objectFit: "cover" as const }} />
                <span style={{ whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>
                  <span style={logoTextStyle}>Autism Acceptance</span>
                  <span style={logoWorldStyle}> World</span>
                </span>
              </a>
              <a href="https://webearish.com" target="_blank" rel="noopener noreferrer" className="affiliate-link" style={{ fontSize: "10px", color: "rgba(168,85,247,0.6)", textDecoration: "none", letterSpacing: "0.5px", paddingLeft: "46px" }}>
                A WeBearish Affiliate
              </a>
            </div>

            {/* Desktop mega-nav */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
                flexShrink: 1,
              }}
              className="nav-desktop"
            >
              {dropdownCategories.map((cat, i) => (
                <DropdownMenu key={cat.label} category={cat} index={i} />
              ))}
              <li style={{ marginLeft: "0.5rem" }}>
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

        {/* Mobile nav drawer */}
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
              padding: "1rem 1.5rem 2rem",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {dropdownCategories.map((cat, catIdx) => (
              <div key={cat.label} style={{ marginBottom: "0.5rem" }}>
                <button
                  onClick={() => setOpenMobileCategory(openMobileCategory === catIdx ? null : catIdx)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(168,85,247,0.15)",
                    width: "100%",
                    textAlign: "left" as const,
                    cursor: "pointer",
                    color: "#A855F7",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    padding: "0.875rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {cat.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    {openMobileCategory === catIdx
                      ? <polyline points="4,10 8,6 12,10" />
                      : <polyline points="4,6 8,10 12,6" />
                    }
                  </svg>
                </button>
                {openMobileCategory === catIdx && (
                  <ul style={{ listStyle: "none", margin: "0.25rem 0 0.5rem", padding: "0 0 0 0.5rem" }}>
                    {cat.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          style={{
                            display: "block",
                            padding: "0.625rem 0.5rem",
                            color: "rgba(250,250,248,0.8)",
                            textDecoration: "none",
                            fontSize: "1rem",
                            borderBottom: "1px solid rgba(168,85,247,0.06)",
                          }}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div style={{ paddingTop: "1rem" }}>
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
            </div>
          </div>
        )}

        <style>{`
          .nav-hamburger {
            display: none;
          }
          @media (max-width: 900px) {
            .nav-desktop {
              display: none !important;
            }
            .nav-hamburger {
              display: flex !important;
            }
            .affiliate-link {
              display: none;
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
                <a href="/masking-and-unmasking" style={footerLinkStyle}>Masking and Unmasking</a>
                <a href="/workplace" style={footerLinkStyle}>Workplace Rights</a>
                <a href="/autistic-burnout" style={footerLinkStyle}>Autistic Burnout</a>
                <a href="/relationships-and-dating" style={footerLinkStyle}>Relationships</a>
                <a href="/sensory-processing" style={footerLinkStyle}>Sensory Needs</a>
              </div>

              <div>
                <p style={footerHeadingStyle}>Our Network</p>
                <a href="https://webearish.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">WeBearish.com</a>
                <a href="https://jewsa.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">JewSA.com</a>
                <a href="https://u-god.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">U-God.com</a>
                <a href="https://thevoiceofcash.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">The Voice of Cash</a>
                <a href="https://aiskillsagents.com" style={footerLinkStyle} target="_blank" rel="noopener noreferrer">AI Skills Agents</a>
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
