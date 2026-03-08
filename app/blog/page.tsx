import { posts } from "./data";

export const metadata = {
  title: "Blog -- Autism Acceptance World",
  description:
    "Articles for autistic adults. Late diagnosis, masking, burnout, workplace rights, relationships, sensory needs. Identity-first, no inspiration porn.",
};

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

const pageStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
};

const heroStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
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
  maxWidth: "600px",
  marginBottom: 0,
};

const filterBarStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginBottom: "2.5rem",
};

const chipBaseStyle: React.CSSProperties = {
  padding: "0.35rem 1rem",
  borderRadius: "999px",
  fontSize: "0.875rem",
  fontWeight: 600,
  textDecoration: "none",
  border: "1px solid rgba(168, 85, 247, 0.35)",
  color: "rgba(250, 250, 248, 0.65)",
  backgroundColor: "transparent",
  display: "inline-block",
  transition: "all 0.15s",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "1.5rem",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.18)",
  borderRadius: "12px",
  padding: "1.75rem",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  transition: "border-color 0.2s, background-color 0.2s",
};

const categoryStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#D97706",
  marginBottom: 0,
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  fontWeight: 700,
  color: "#FAFAF8",
  lineHeight: 1.35,
  marginBottom: 0,
};

const cardDescStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: 0,
  flexGrow: 1,
};

const dateStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  color: "rgba(250, 250, 248, 0.35)",
  marginBottom: 0,
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  // In Next.js App Router server components, searchParams is async in newer versions
  // but we will handle the filter server-side by linking to ?category=X
  // For simplicity, render all posts and note filter chips are navigation links
  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <h1 style={h1Style}>Blog</h1>
        <p style={subStyle}>
          Written for autistic adults. Identity-first. No inspiration porn.
        </p>
      </div>

      <div style={filterBarStyle} role="navigation" aria-label="Filter by category">
        {categories.map((cat) => (
          <a
            key={cat}
            href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
            style={chipBaseStyle}
          >
            {cat}
          </a>
        ))}
      </div>

      <div style={gridStyle}>
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} style={cardStyle}>
            <p style={categoryStyle}>{post.category}</p>
            <p style={cardTitleStyle}>{post.title}</p>
            <p style={cardDescStyle}>{post.description}</p>
            <p style={dateStyle}>{formatDate(post.date)}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
