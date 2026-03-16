import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books by Autistic Authors — Autism Acceptance World",
  description:
    "15 essential books by autistic authors and autistic-affirming researchers. Devon Price, Nick Walker, Steve Silberman, Cynthia Kim, and more. We are not doctors. We are advocates.",
  openGraph: {
    title: "Books by Autistic Authors",
    description:
      "15 essential books written by autistic people and allies. No cure narratives. No inspiration porn. Real literature about real autistic experience.",
    images: ["https://autismacceptance.world/bears/bears-together.jpg"],
    url: "https://autismacceptance.world/books",
    type: "article",
  },
};

const pageStyle: React.CSSProperties = {
  maxWidth: "820px",
  margin: "0 auto",
  padding: "3rem 1.5rem 5rem",
};

const breadcrumbStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  marginBottom: "2rem",
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap" as const,
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 900,
  color: "#FAFAF8",
  letterSpacing: "-0.03em",
  marginBottom: "1rem",
  lineHeight: 1.1,
};

const leadStyle: React.CSSProperties = {
  fontSize: "1.1875rem",
  color: "rgba(250, 250, 248, 0.75)",
  lineHeight: 1.75,
  marginBottom: "2.5rem",
  borderLeft: "3px solid #A855F7",
  paddingLeft: "1.25rem",
};

const h2Style: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 800,
  color: "#A855F7",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
  letterSpacing: "-0.01em",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "1.0625rem",
  color: "rgba(250, 250, 248, 0.82)",
  lineHeight: 1.75,
  marginBottom: "1.25rem",
};

const bookCardStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
};

const bookTitleStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 800,
  color: "#FAFAF8",
  marginBottom: "0.25rem",
};

const bookAuthorStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "#A855F7",
  fontWeight: 600,
  marginBottom: "0.75rem",
};

const disclaimerStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.45)",
  fontStyle: "italic",
  marginTop: "3rem",
  borderTop: "1px solid rgba(168,85,247,0.1)",
  paddingTop: "1.5rem",
};

export default function BooksPage() {
  return (
    <div style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        <span>/</span>
        <a href="/resources" style={{ color: "inherit", textDecoration: "none" }}>Resources</a>
        <span>/</span>
        <span>Books</span>
      </nav>

      <h1 style={h1Style}>Books by Autistic Authors</h1>

      <p style={leadStyle}>
        These 15 books were written by autistic people or autistic-affirming researchers whose work centers autistic experience without cure narratives, inspiration porn, or the idea that autistic people need to be fixed. Read them in any order. They will change how you think about your own neurology.
      </p>

      <p style={bodyStyle}>
        We use identity-first language throughout, which is the preference of most autistic adults. Amazon links use our affiliate tag — purchases support this site at no extra cost to you.
      </p>

      <h2 style={h2Style}>Essential Reading</h2>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Unmasking Autism</p>
        <p style={bookAuthorStyle}>Devon Price (2022)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          The definitive book on autistic masking for adults. Devon Price is an autistic social psychologist who writes with precision and compassion about what masking costs, how it develops, and how to begin unmasking safely. This book covers late diagnosis, autistic burnout, identity, and why autistic people mask so deeply that they sometimes lose themselves. If you read only one book from this list, make it this one. Price writes from the inside — not as a researcher observing autistic people, but as an autistic person examining their own experience and the systems that shaped it.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Neuroqueer Heresies: Notes on the Neurodiversity Paradigm, Autistic Empowerment, and Postnormal Possibilities</p>
        <p style={bookAuthorStyle}>Nick Walker (2021)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Nick Walker is an autistic scholar, martial artist, and writer who helped develop and articulate the neurodiversity paradigm. This collection of essays covers the intellectual foundations of neurodiversity as a framework — not just as a feel-good concept but as a rigorous, politically grounded way of understanding neurological difference. Walker writes about autism, queerness, and liberation together, making connections that most autism literature completely ignores. Challenging, essential, and genuinely original.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>NeuroTribes: The Legacy of Autism and the Future of Neurodiversity</p>
        <p style={bookAuthorStyle}>Steve Silberman (2015)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Silberman is not autistic, but NeuroTribes is one of the most important books about autism ever written. It traces the history of autism diagnosis — how it was defined, suppressed, shaped by eugenics, and eventually reclaimed by autistic people themselves. The book demolishes the "epidemic" narrative and demonstrates that autistic people have always existed. It also profiles the early autistic communities that formed around science fiction fandom long before autism had a name. A history that reads like a thriller.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>We're Not Broken: Changing the Autism Conversation</p>
        <p style={bookAuthorStyle}>Eric Garcia (2021)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Garcia is an autistic journalist who brings rigorous reporting to the autistic experience in America. He covers healthcare, employment, education, housing, and the political fight for autistic rights. This book is particularly strong on systemic failures — why autistic people are underemployed, underpaid, and undersupported — and on the harm done by organizations that claim to speak for autistic people while consistently centering parents and researchers over autistic adults themselves.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Nerdy, Shy, and Socially Inappropriate: A User Guide to an Asperger Life</p>
        <p style={bookAuthorStyle}>Cynthia Kim (2015)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Cynthia Kim is an autistic adult who writes with humor and specificity about the practical realities of autistic life: social anxiety, sensory processing, executive function, relationships, and work. The "user guide" framing is apt — this is a practical book with real strategies, written from lived experience rather than clinical observation. Kim is also the author of I Think I Might Be Autistic, a guide specifically for adults who are self-identifying or seeking diagnosis.
        </p>
      </div>

      <h2 style={h2Style}>Autistic Women, Gender, and Identity</h2>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Women and Girls with Autism Spectrum Disorder</p>
        <p style={bookAuthorStyle}>Sarah Hendrickx (2015)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Hendrickx is an autistic woman who wrote the book that many autistic women credit with helping them recognize themselves. It covers the specific ways autistic women present differently from autistic men, why they are massively underdiagnosed, and what their actual lives look like. The book includes autistic women's voices throughout. For autistic women who were told for decades that they did not "look autistic," this book often functions as a mirror.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>The Electricity of Every Living Thing</p>
        <p style={bookAuthorStyle}>Katherine May (2018)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          May is an autistic writer who interweaves a solo walking memoir with the story of her late autism diagnosis in midlife. The book is beautiful and precise about the experience of being different without knowing why, and then finally having a name for it. May has since written Enchantment, which also touches on autistic experience. Her writing captures the texture of autistic life — the sensory richness, the exhaustion, the relief — in a way that clinical literature cannot.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Odd Girl Out: An Autistic Woman in a Neurotypical World</p>
        <p style={bookAuthorStyle}>Laura James (2017)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          James is a British journalist who was diagnosed autistic in her mid-40s. This memoir covers the year following her diagnosis — the reassessment of her life, her relationships, her work, and her sense of self. It is honest about the cost of a late diagnosis and the disorientation of recognizing yourself in a framework you should have had access to decades earlier. Practical and emotionally honest without being self-pitying.
        </p>
      </div>

      <h2 style={h2Style}>Autism, Science, and Advocacy</h2>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>The Reason I Jump</p>
        <p style={bookAuthorStyle}>Naoki Higashida (2013, translated by K.A. Yoshida and David Mitchell)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Written when Higashida was thirteen, this book provides a window into the internal experience of a nonspeaking autistic person. He addresses questions neurotypical people ask about autism — why do you do that? what does it feel like? — with directness and occasional poetry. The book has limitations (it was written by a child, translated, and its reception has been complicated within autistic communities) but remains one of the most widely read first-person autism accounts and a useful counterpoint to the idea that nonspeaking autistic people have nothing to say.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Spectrum Women: Walking to the Beat of Autism</p>
        <p style={bookAuthorStyle}>Edited by Barb Cook and Dr. Michelle Garnett (2018)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          An anthology of essays by autistic women covering every aspect of autistic life: relationships, career, mental health, motherhood, sensory experience, and diagnosis. The breadth of voices is the book's strength — it resists the tendency to flatten autistic women into a single profile. Highly practical, organized by topic, and consistently affirming.
        </p>
      </div>

      <h2 style={h2Style}>Neurodiversity and the Autistic Mind</h2>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Autism in Heels: The Untold Story of a Female Life on the Spectrum</p>
        <p style={bookAuthorStyle}>Jennifer Cook O'Toole (2018)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          O'Toole is a speaker and writer who diagnosed herself when her daughter was diagnosed. This memoir covers the specific experience of late-diagnosed autistic women — masking, social performance, relationships, the constant sense of being wrong in ways you cannot name. The writing is accessible and the author's self-awareness about her own masking is sharp.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Been There. Done That. Try This! An Aspie's Guide to Life on Earth</p>
        <p style={bookAuthorStyle}>Edited by Tony Attwood and Craig R. Evans (2014)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          An anthology structured around practical challenges autistic adults face, with responses from autistic contributors including Temple Grandin, Liane Holliday Willey, and others. Organized by life domain: employment, relationships, sensory issues, mental health. The peer-to-peer format makes this particularly useful — you are getting strategies from autistic adults with lived experience, not professionals speculating.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>The Autistic Brain: Thinking Across the Spectrum</p>
        <p style={bookAuthorStyle}>Temple Grandin and Richard Panek (2013)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Temple Grandin is one of the most recognized autistic adults in the world, and this book is her most science-focused work. She covers brain imaging research, the different types of autistic cognition (visual thinkers, pattern thinkers, verbal thinkers), and what neuroscience is actually learning about autistic brains. Grandin holds more conservative views on autism than many autistic advocates, and that tension is worth noting, but the science content is valuable and her perspective as a lifelong autistic person who was institutionalized as a child gives her observations weight.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>Loud Hands: Autistic People, Speaking</p>
        <p style={bookAuthorStyle}>Edited by Julia Bascom / Autistic Self Advocacy Network (2012)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          An anthology of essays, poetry, and personal narratives from autistic people, published by ASAN. The title comes from Julia Bascom's essay of the same name about stimming and the right to stim freely. This collection is explicitly political — it is about autistic people speaking for themselves, in their own words, on their own terms. A foundational text of the autistic rights movement. Many of the pieces are available free online through ASAN.
        </p>
      </div>

      <div style={bookCardStyle}>
        <p style={bookTitleStyle}>What I Mean When I Say I'm Autistic</p>
        <p style={bookAuthorStyle}>Annie Kotowicz (2022)</p>
        <p style={{ ...bodyStyle, marginBottom: 0 }}>
          Kotowicz is an autistic writer who created the Neuroclastic contributor community. This book is particularly strong on explaining autistic experience to neurotypical people — which makes it useful both for autistic people who want language to explain themselves and for family members, partners, and coworkers who want to understand. The writing is clear, specific, and grounded in actual autistic experience rather than clinical observation.
        </p>
      </div>

      <div style={{ backgroundColor: "rgba(107, 33, 168, 0.07)", border: "1px solid rgba(168, 85, 247, 0.2)", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(250, 250, 248, 0.45)", marginBottom: "1rem" }}>Keep Reading</p>
        <a href="/glossary" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Autism Glossary →</a>
        <a href="/late-diagnosis" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Late Diagnosis: Now What? →</a>
        <a href="/podcasts" style={{ display: "block", color: "#A855F7", fontSize: "1rem", fontWeight: 600, textDecoration: "none", padding: "0.35rem 0" }}>Autistic Podcasts Worth Your Time →</a>
      </div>

      <p style={{ fontSize: "0.875rem", color: "rgba(250,250,248,0.4)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        This site is a <a href="https://webearish.com" style={{ color: "#A855F7" }} target="_blank" rel="noopener noreferrer">WeBearish</a> affiliate. 100% of merch profits are reinvested into autism acceptance programs.
      </p>

      <p style={disclaimerStyle}>
        We are not doctors. We are advocates. Amazon affiliate links support this site at no extra cost to you. Reading these books is not a substitute for professional diagnosis or mental health care.
      </p>
    </div>
  );
}
