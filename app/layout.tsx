import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autism Acceptance World -- The Adult Autism Resource",
  description:
    "The world's greatest autism acceptance resource. Built for autistic adults. No cure narratives. No inspiration porn. Real information, real community, real acceptance.",
  keywords:
    "autism, autistic adults, autism acceptance, late diagnosis, autism resources, neurodiversity, autistic community",
  openGraph: {
    title: "Autism Acceptance World",
    description:
      "Built for autistic adults, by people who get it. The largest adult autism resource on the internet.",
    url: "https://autismacceptance.world",
    siteName: "Autism Acceptance World",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autism Acceptance World",
    description: "Built for autistic adults. No cure narratives. No inspiration porn.",
  },
  metadataBase: new URL("https://autismacceptance.world"),
};

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

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const navLinkStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.7)",
  fontSize: "0.9375rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s",
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
  display: "inline-block",
  transition: "background-color 0.2s",
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

const footerGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "2rem",
  marginBottom: "2.5rem",
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
  marginBottom: "0.4rem",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={navStyle} aria-label="Main navigation">
          <div style={navInnerStyle}>
            <a href="/" style={logoStyle} aria-label="Autism Acceptance World home">
              <span style={logoTextStyle}>Autism Acceptance</span>
              <span style={logoWorldStyle}>World</span>
            </a>
            <ul style={navLinksStyle}>
              <li>
                <a href="/community" style={navLinkStyle}>Community</a>
              </li>
              <li>
                <a href="/resources" style={navLinkStyle}>Resources</a>
              </li>
              <li>
                <a href="/blog" style={navLinkStyle}>Blog</a>
              </li>
              <li>
                <a href="/community" style={ctaButtonStyle}>Get Support</a>
              </li>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer style={footerStyle} aria-label="Site footer">
          <div style={footerInnerStyle}>
            <div style={footerGridStyle}>
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
