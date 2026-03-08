import { notFound } from "next/navigation";
import { posts } from "../data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} -- Autism Acceptance World`,
    description: post.description,
  };
}

const pageStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: "3rem",
  alignItems: "start",
};

const articleStyle: React.CSSProperties = {
  minWidth: 0,
};

const categoryBadgeStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#D97706",
  marginBottom: "1rem",
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.025em",
  lineHeight: 1.1,
  marginBottom: "1rem",
};

const metaStyle: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "2rem",
  borderBottom: "1px solid rgba(168, 85, 247, 0.15)",
};

const dateStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.4)",
};

const descStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  color: "rgba(250, 250, 248, 0.65)",
  lineHeight: 1.7,
  marginBottom: "2rem",
  fontStyle: "italic",
};

const contentStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.85)",
  lineHeight: 1.75,
  fontSize: "1.0625rem",
};

const sidebarStyle: React.CSSProperties = {
  position: "sticky",
  top: "80px",
};

const sidebarCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.08)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "12px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
};

const sidebarHeadingStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#A855F7",
  marginBottom: "1rem",
};

const sidebarLinkStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.65)",
  fontSize: "0.9rem",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.6rem",
  lineHeight: 1.4,
};

const backLinkStyle: React.CSSProperties = {
  color: "#A855F7",
  fontSize: "0.875rem",
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
  marginBottom: "2rem",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          style={{
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#A855F7",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#FAFAF8",
            marginTop: "1.75rem",
            marginBottom: "0.6rem",
          }}
        >
          {line.slice(4)}
        </h3>
      );
    } else {
      elements.push(
        <p key={key++} style={{ marginBottom: "1.25rem" }}>
          {line}
        </p>
      );
    }
  }

  return elements;
}

const moreResources = [
  { href: "/resources", label: "Full Resource Hub" },
  { href: "/community", label: "Join the Community" },
  { href: "/late-diagnosis", label: "Late Diagnosis Guide" },
  { href: "/workplace", label: "Workplace Rights" },
  { href: "/burnout", label: "Autistic Burnout" },
  { href: "/masking", label: "Masking and Unmasking" },
];

const crisisLinks = [
  { href: "tel:988", label: "988 Suicide and Crisis Lifeline" },
  {
    href: "sms:741741?body=HOME",
    label: "Text HOME to 741741 (Crisis Text Line)",
  },
  { href: "tel:18882884762", label: "Autism Response Team: 1-888-288-4762" },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <div style={pageStyle}>
      <article style={articleStyle}>
        <a href="/blog" style={backLinkStyle}>
          &larr; Back to Blog
        </a>
        <span style={categoryBadgeStyle}>{post.category}</span>
        <h1 style={h1Style}>{post.title}</h1>
        <div style={metaStyle}>
          <span style={dateStyle}>{formatDate(post.date)}</span>
        </div>
        <p style={descStyle}>{post.description}</p>
        <div style={contentStyle}>{renderContent(post.content)}</div>
      </article>

      <aside style={sidebarStyle} aria-label="Sidebar">
        <div style={sidebarCardStyle}>
          <p style={sidebarHeadingStyle}>More Resources</p>
          {moreResources.map((r) => (
            <a key={r.href} href={r.href} style={sidebarLinkStyle}>
              {r.label}
            </a>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <div style={sidebarCardStyle}>
            <p style={sidebarHeadingStyle}>Related Articles</p>
            {relatedPosts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} style={sidebarLinkStyle}>
                {p.title}
              </a>
            ))}
          </div>
        )}

        <div
          style={{
            ...sidebarCardStyle,
            borderColor: "rgba(217, 119, 6, 0.3)",
            backgroundColor: "rgba(217, 119, 6, 0.05)",
          }}
        >
          <p style={{ ...sidebarHeadingStyle, color: "#D97706" }}>Crisis Support</p>
          {crisisLinks.map((c) => (
            <a key={c.href} href={c.href} style={{ ...sidebarLinkStyle, color: "#D97706" }}>
              {c.label}
            </a>
          ))}
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(250,250,248,0.35)",
              marginTop: "0.5rem",
              marginBottom: 0,
            }}
          >
            Not a medical site. For emergencies, call 911.
          </p>
        </div>
      </aside>
    </div>
  );
}
