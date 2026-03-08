export const metadata = {
  title: "Resources for Autistic Adults -- Autism Acceptance World",
  description:
    "Books, apps, crisis support, organizations, and workplace tools for autistic adults. Curated by the community.",
};

const pageStyle: React.CSSProperties = {
  maxWidth: "1100px",
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
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "3.5rem",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#A855F7",
  marginBottom: "0.5rem",
  letterSpacing: "-0.01em",
};

const sectionDividerStyle: React.CSSProperties = {
  height: "2px",
  background: "linear-gradient(to right, rgba(168, 85, 247, 0.4), transparent)",
  marginBottom: "1.5rem",
  border: "none",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.25rem",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.18)",
  borderRadius: "10px",
  padding: "1.4rem",
  textDecoration: "none",
  display: "block",
  transition: "border-color 0.2s",
};

const bookTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#FAFAF8",
  marginBottom: "0.25rem",
};

const bookAuthorStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#D97706",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const bookDescStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: "0.75rem",
};

const amazonLinkStyle: React.CSSProperties = {
  fontSize: "0.8125rem",
  fontWeight: 700,
  color: "#A855F7",
  textDecoration: "none",
  borderBottom: "1px solid rgba(168, 85, 247, 0.4)",
  paddingBottom: "1px",
};

const appCardStyle: React.CSSProperties = {
  ...cardStyle,
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

const appNameStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#FAFAF8",
};

const appDescStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: "0.5rem",
};

const crisisCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.25)",
  borderRadius: "10px",
  padding: "1.4rem",
  marginBottom: "1rem",
};

const crisisNameStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#D97706",
  marginBottom: "0.25rem",
};

const crisisDescStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "rgba(250, 250, 248, 0.65)",
  lineHeight: 1.6,
  marginBottom: "0.5rem",
};

const crisisLinkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "#D97706",
  textDecoration: "none",
};

const orgListStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1rem",
};

const orgItemStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.18)",
  borderRadius: "10px",
  padding: "1.25rem",
};

const orgNameStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#FAFAF8",
  marginBottom: "0.35rem",
};

const orgDescStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.55)",
  lineHeight: 1.6,
  marginBottom: "0.5rem",
};

const books = [
  {
    title: "Unmasking Autism",
    author: "Devon Price, PhD",
    desc: "The book autistic adults actually recommend. Explores the cost of masking and the path toward authentic autistic identity. Written by an autistic psychologist.",
    asin: "B09FXK4P1V",
  },
  {
    title: "Nerdy, Shy, and Socially Inappropriate",
    author: "Cynthia Kim",
    desc: "A frank, funny, and honest account of autistic adult life. Written by an autistic woman who was diagnosed late.",
    asin: "1849057893",
  },
  {
    title: "The Autistic Brain",
    author: "Temple Grandin",
    desc: "A scientific exploration of autistic neurology from one of the most widely known autistic adults. Focuses on how autistic brains work, not how to fix them.",
    asin: "B00AZ4YDHE",
  },
  {
    title: "I Think I Might Be Autistic",
    author: "Cynthia Kim",
    desc: "A practical guide for adults newly considering an autism diagnosis. Covers what to look for, how to get assessed, and what comes next.",
    asin: "B00GC6LGOY",
  },
  {
    title: "Autism in Heels",
    author: "Jennifer Cook O'Toole",
    desc: "Written by and for autistic women. Addresses the specific experiences of autistic women who navigate a world that frequently does not recognize them.",
    asin: "1510730540",
  },
  {
    title: "We're Not Broken",
    author: "Eric Garcia",
    desc: "A journalist's exploration of what the autism rights movement actually wants and why. Written by an autistic adult. Identity-first throughout.",
    asin: "1328587584",
  },
];

const apps = [
  {
    name: "Brain in Hand",
    desc: "A support app for autistic adults. Offers self-monitoring, daily planning tools, and access to a support team if you need it.",
    link: "https://braininhand.co.uk",
  },
  {
    name: "Tiimo",
    desc: "Visual daily planner designed for neurodivergent people. Turns schedules into visual, time-based formats that are easier to process.",
    link: "https://tiimoapp.com",
  },
  {
    name: "Calm",
    desc: "Meditation and sleep app that many autistic adults find useful for regulation. Not autism-specific, but widely used in the community.",
    link: "https://calm.com",
  },
];

const workplaceTools = [
  {
    name: "Job Accommodation Network (JAN)",
    desc: "Free consulting service with workplace accommodation ideas for many diagnoses including autism. Run by the U.S. Department of Labor.",
    link: "https://askjan.org",
  },
  {
    name: "EEOC: Disability Discrimination",
    desc: "Official guidance on your rights under the ADA. Know what your employer is and is not required to do.",
    link: "https://www.eeoc.gov/disability-discrimination",
  },
  {
    name: "Disability Rights Advocates",
    desc: "National nonprofit legal center providing free legal representation for people whose disability rights have been violated.",
    link: "https://dralegal.org",
  },
];

const orgs = [
  {
    name: "Autistic Self Advocacy Network (ASAN)",
    desc: "Led by autistic people. Focuses on policy, rights, and ensuring that autistic people have a say in decisions that affect them.",
    link: "https://autisticadvocacy.org",
  },
  {
    name: "Autistic Women and Nonbinary Network (AWN)",
    desc: "Community and resources specifically for autistic women and nonbinary autistic people. Identity-first, affirming, community-led.",
    link: "https://awnnetwork.org",
  },
  {
    name: "Autism Science Foundation",
    desc: "Funds autism research. Not every autism organization is worth supporting -- this one funds actual science with autistic input.",
    link: "https://autismsciencefoundation.org",
  },
];

const affiliateTag = "autismacceptance-20";

function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
}

export default function ResourcesPage() {
  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>Resources for Autistic Adults</h1>
      <p style={subStyle}>
        Curated tools, books, apps, and support for autistic adults. No cure narratives.
        No inspiration porn. Just useful things.
      </p>

      {/* Books */}
      <section style={sectionStyle} aria-labelledby="books-heading">
        <h2 style={sectionHeadingStyle} id="books-heading">
          Books
        </h2>
        <hr style={sectionDividerStyle} />
        <div style={gridStyle}>
          {books.map((book) => (
            <div key={book.asin} style={cardStyle}>
              <p style={bookTitleStyle}>{book.title}</p>
              <p style={bookAuthorStyle}>{book.author}</p>
              <p style={bookDescStyle}>{book.desc}</p>
              <a
                href={amazonUrl(book.asin)}
                style={amazonLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find on Amazon &rarr;
              </a>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(250, 250, 248, 0.3)",
            marginTop: "1rem",
          }}
        >
          Affiliate disclosure: Amazon links use our affiliate tag. Purchases support this
          site at no cost to you.
        </p>
      </section>

      {/* Apps */}
      <section style={sectionStyle} aria-labelledby="apps-heading">
        <h2 style={sectionHeadingStyle} id="apps-heading">
          Apps
        </h2>
        <hr style={sectionDividerStyle} />
        <div style={gridStyle}>
          {apps.map((app) => (
            <div key={app.name} style={appCardStyle}>
              <p style={appNameStyle}>{app.name}</p>
              <p style={appDescStyle}>{app.desc}</p>
              <a
                href={app.link}
                style={amazonLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Crisis Support */}
      <section style={sectionStyle} aria-labelledby="crisis-heading">
        <h2 style={sectionHeadingStyle} id="crisis-heading">
          Crisis Support
        </h2>
        <hr style={sectionDividerStyle} />
        <p
          style={{
            fontSize: "0.9375rem",
            color: "rgba(250, 250, 248, 0.65)",
            marginBottom: "1.5rem",
          }}
        >
          Autistic adults experience higher rates of anxiety, depression, and suicidal
          ideation than the general population. If you are in crisis, please reach out.
          These services are free and confidential.
        </p>
        <div style={crisisCardStyle}>
          <p style={crisisNameStyle}>988 Suicide and Crisis Lifeline</p>
          <p style={crisisDescStyle}>
            Call or text 988. Available 24/7. For anyone in mental health crisis,
            including autistic adults. You do not have to be suicidal to call.
          </p>
          <a href="tel:988" style={crisisLinkStyle}>
            Call or text: 988
          </a>
        </div>
        <div style={crisisCardStyle}>
          <p style={crisisNameStyle}>Crisis Text Line</p>
          <p style={crisisDescStyle}>
            Text-based crisis support. Useful for autistic adults who find phone calls
            difficult. Available 24/7.
          </p>
          <a href="sms:741741?body=HOME" style={crisisLinkStyle}>
            Text HOME to 741741
          </a>
        </div>
        <div style={crisisCardStyle}>
          <p style={crisisNameStyle}>Autism Response Team</p>
          <p style={crisisDescStyle}>
            Autism Speaks Autism Response Team -- staffed by autistic people and family
            members. For autism-specific questions and crisis navigation.
          </p>
          <a href="tel:18882884762" style={crisisLinkStyle}>
            1-888-288-4762
          </a>
        </div>
      </section>

      {/* Organizations */}
      <section style={sectionStyle} aria-labelledby="orgs-heading">
        <h2 style={sectionHeadingStyle} id="orgs-heading">
          Organizations Worth Supporting
        </h2>
        <hr style={sectionDividerStyle} />
        <ul style={orgListStyle}>
          {orgs.map((org) => (
            <li key={org.name} style={orgItemStyle}>
              <p style={orgNameStyle}>{org.name}</p>
              <p style={orgDescStyle}>{org.desc}</p>
              <a
                href={org.link}
                style={amazonLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website &rarr;
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Workplace Tools */}
      <section style={sectionStyle} aria-labelledby="workplace-heading">
        <h2 style={sectionHeadingStyle} id="workplace-heading">
          Workplace Tools
        </h2>
        <hr style={sectionDividerStyle} />
        <ul style={orgListStyle}>
          {workplaceTools.map((tool) => (
            <li key={tool.name} style={orgItemStyle}>
              <p style={orgNameStyle}>{tool.name}</p>
              <p style={orgDescStyle}>{tool.desc}</p>
              <a
                href={tool.link}
                style={amazonLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website &rarr;
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer */}
      <div
        style={{
          backgroundColor: "rgba(217, 119, 6, 0.06)",
          border: "1px solid rgba(217, 119, 6, 0.2)",
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
          marginTop: "2rem",
        }}
        role="note"
      >
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(250, 250, 248, 0.5)",
            marginBottom: 0,
          }}
        >
          Not a medical site. Resource listings are informational only. Inclusion does not
          constitute endorsement of all positions or practices of listed organizations. For
          medical or psychiatric care, see a qualified provider.
        </p>
      </div>
    </div>
  );
}
