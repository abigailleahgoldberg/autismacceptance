import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Money Management for Autistic Adults — Autism Acceptance World",
  description:
    "Executive function and finances, autopay everything, impulse spending and special interests, building financial routines, and SSI/SSDI basics.",
  openGraph: {
    title: "Money Management for Autistic Adults",
    description:
      "Executive function and finances, autopay everything, impulse spending and special interests, building financial routines, and SSI/SSDI basics.",
    image: "https://autismacceptance.world/bears/bears-together.jpg",
    url: "https://autismacceptance.world/financial-management",
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

const calloutStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.1)",
  border: "1px solid rgba(168, 85, 247, 0.25)",
  borderRadius: "10px",
  padding: "1.5rem",
  margin: "2rem 0",
};

const calloutHeadStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#A855F7",
  marginBottom: "0.75rem",
};

const listStyle: React.CSSProperties = {
  color: "rgba(250, 250, 248, 0.82)",
  fontSize: "1.0625rem",
  lineHeight: 1.75,
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
};

const relatedStyle: React.CSSProperties = {
  backgroundColor: "rgba(107, 33, 168, 0.07)",
  border: "1px solid rgba(168, 85, 247, 0.2)",
  borderRadius: "10px",
  padding: "1.5rem",
  marginTop: "3rem",
};

const relatedHeadStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  color: "rgba(250, 250, 248, 0.45)",
  marginBottom: "1rem",
};

const relatedLinkStyle: React.CSSProperties = {
  display: "block",
  color: "#A855F7",
  fontSize: "1rem",
  fontWeight: 600,
  textDecoration: "none",
  padding: "0.35rem 0",
};

const disclaimerStyle: React.CSSProperties = {
  backgroundColor: "rgba(217, 119, 6, 0.06)",
  border: "1px solid rgba(217, 119, 6, 0.2)",
  borderRadius: "8px",
  padding: "1.25rem 1.5rem",
  marginTop: "3rem",
};

const disclaimerTextStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(250, 250, 248, 0.5)",
  marginBottom: 0,
  lineHeight: 1.6,
};

export default function FinancialManagementPage() {
  return (
    <article style={pageStyle}>
      <nav style={breadcrumbStyle} aria-label="Breadcrumb">
        <a href="/" style={{ color: "rgba(250,250,248,0.45)", textDecoration: "none" }}>Home</a>
        <span aria-hidden="true">/</span>
        <span style={{ color: "#A855F7" }}>Money Management</span>
      </nav>

      <h1 style={h1Style}>Money Management for Autistic Adults</h1>

      <p style={leadStyle}>
        Finances and executive function are a difficult combination. Bills that go unpaid
        not because you don't have the money but because the task of paying them never
        got initiated. Subscriptions you forgot to cancel. The impulse purchase at 2am
        for a new item in your special interest category. Late fees on a credit card
        you meant to pay. This is not irresponsibility. This is executive function
        doing exactly what it does — and there are reliable workarounds.
      </p>

      <p style={bodyStyle}>
        Managing money as an autistic adult requires building systems that do the
        executive function work for you, because relying on yourself to remember, initiate,
        and follow through on financial tasks regularly is a recipe for ongoing stress.
        The goal is to set things up so that most of the financial machinery runs on its
        own, leaving you only the decisions that actually require judgment.
      </p>

      <h2 style={h2Style}>Executive Function and Finances: The Specific Problems</h2>

      <p style={bodyStyle}>
        Financial management is one of the areas where executive function challenges
        have the most concrete consequences. A missed bill creates a late fee. A missed
        credit card payment affects your credit score. An overdrawn bank account creates
        cascading fees. The downstream consequences of executive function failure in this
        domain are real and compounding in ways that pile-up at work or at home often aren't.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Time blindness makes deadlines abstract.</strong> "Payment due in 14 days" doesn't register as urgency for brains with time perception differences. The due date feels remote until it doesn't — and by then it's often past.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Task initiation on unpleasant tasks.</strong> Financial admin is often genuinely unpleasant. Opening the bill, logging into the portal, filling out the form — each step requires initiation. The task gets avoided.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Working memory in financial contexts.</strong> Remembering the account number, which account to use, whether you already paid this — without external systems, working memory failures lead to duplicates, omissions, and errors.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Decision paralysis with options.</strong> Financial decisions with multiple options (which phone plan, which insurance tier) can trigger decision paralysis that results in no decision — and sometimes in expensive defaults.</li>
      </ul>

      <h2 style={h2Style}>Autopay Everything. Seriously.</h2>

      <p style={bodyStyle}>
        This is the single highest-leverage financial strategy for autistic adults with
        executive function challenges: set up autopay for every bill that will allow it.
        Rent (many landlords accept autopay). Utilities. Phone. Internet. Insurance.
        Credit cards. Subscriptions. Everything.
      </p>

      <p style={bodyStyle}>
        Autopay removes the task initiation requirement entirely. The decision gets made
        once and then executes indefinitely without requiring any further cognitive
        engagement. The risk of late fees drops to near zero. The mental load of
        financial management drops significantly.
      </p>

      <div style={calloutStyle}>
        <p style={calloutHeadStyle}>Autopay setup checklist:</p>
        <ul style={listStyle}>
          <li>Rent / mortgage</li>
          <li>Electricity, gas, water</li>
          <li>Phone (set to pay in full, not minimum)</li>
          <li>Internet</li>
          <li>Health insurance premiums</li>
          <li>Car insurance</li>
          <li>Renter's or homeowner's insurance</li>
          <li>Any subscription services</li>
          <li>Credit cards — autopay the full statement balance, not just the minimum</li>
        </ul>
        <p style={{ fontSize: "0.9375rem", color: "rgba(250, 250, 248, 0.65)", marginBottom: 0 }}>
          For credit cards: set autopay to "full statement balance" — this prevents interest
          charges and eliminates the monthly decision of how much to pay.
        </p>
      </div>

      <h2 style={h2Style}>Impulse Spending and Special Interests</h2>

      <p style={bodyStyle}>
        The combination of executive function challenges and intense special interests
        creates a specific financial risk: impulse spending in the categories of your
        special interests. The dopamine hit of acquiring a new item related to something
        you care deeply about is real and strong. The decision-making circuits that
        would normally apply a brake to the purchase are less reliable when the impulse
        is strong.
      </p>

      <p style={bodyStyle}>
        This isn't a character flaw. It's the interaction between the autistic interest
        system and the dopamine reward system. But the consequences are real. Some strategies:
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>The 48-hour rule.</strong> For any non-essential purchase over a threshold you set (say, $50), implement a mandatory 48-hour waiting period before buying. Remove items from cart; revisit in 48 hours. Many impulse purchases don't survive 48 hours.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Special interest budget allocation.</strong> Allocate a fixed monthly amount for your special interests — whatever you can genuinely afford. This legitimizes the spending, makes it planned rather than impulsive, and creates a hard boundary.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Friction on impulsive channels.</strong> Remove stored credit cards from browsers. Delete shopping apps. Make the path to impulse purchases longer and more effortful. The same executive function challenges that make it hard to initiate tasks also make it easier to avoid things that have been made harder.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Wish lists as displacement.</strong> Add items to a wish list instead of purchasing. This partially satisfies the acquisition impulse. Many items get forgotten before you ever buy them.</li>
      </ul>

      <h2 style={h2Style}>Building Financial Routines</h2>

      <p style={bodyStyle}>
        Beyond autopay, a small number of scheduled financial check-ins can catch problems
        before they compound. The key is making these as low-friction as possible.
      </p>

      <ul style={listStyle}>
        <li><strong style={{ color: "#FAFAF8" }}>Weekly 10-minute check-in.</strong> Once a week (schedule it as a recurring calendar event with an alarm), look at your bank account and credit card balance. Not to manage or analyze — just to know what's there. Awareness prevents surprises.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Monthly bill review.</strong> Once a month, verify that all autopays have processed correctly and look for any subscriptions you've forgotten about. Takes 10-15 minutes. Catches errors.</li>
        <li><strong style={{ color: "#FAFAF8" }}>Annual insurance and subscription review.</strong> Once a year, review all insurance policies and subscriptions. Cancel what you don't use. Shop rates on insurance. This one session typically saves significant money.</li>
      </ul>

      <h2 style={h2Style}>SSI/SSDI Basics</h2>

      <p style={bodyStyle}>
        Autistic adults who are unable to work full-time or who have limited work capacity
        may qualify for Social Security disability benefits — SSI (Supplemental Security
        Income) or SSDI (Social Security Disability Insurance). Autism is a qualifying
        condition. The application process is notoriously difficult and often requires
        multiple attempts, but the benefits can be significant.
      </p>

      <p style={bodyStyle}>
        <strong style={{ color: "#FAFAF8" }}>SSI</strong> is for people with limited income and resources regardless of work history.
        <strong style={{ color: "#FAFAF8" }}>SSDI</strong> is based on your Social Security work credits — you need to have worked and paid into
        the system. Both programs have complex rules that are worth understanding before applying.
      </p>

      <p style={bodyStyle}>
        Most SSI/SSDI applications are denied initially. Hiring a disability attorney (who
        works on contingency — they only get paid if you win) to handle your application
        or appeal dramatically increases approval rates. This is widely recommended by
        disability advocates.
      </p>

      <div style={relatedStyle}>
        <p style={relatedHeadStyle}>Related Pages</p>
        <a href="/executive-function" style={relatedLinkStyle}>Executive Function →</a>
        <a href="/independent-living" style={relatedLinkStyle}>Living Independently as an Autistic Adult →</a>
        <a href="/workplace" style={relatedLinkStyle}>Workplace & Career as an Autistic Adult →</a>
      </div>

      <div style={disclaimerStyle} role="note">
        <p style={disclaimerTextStyle}>
          <strong style={{ color: "rgba(250,250,248,0.7)" }}>We are not doctors. We are advocates.</strong>{" "}
          This page is written for informational and community support purposes. Nothing here
          constitutes financial or legal advice. For personalized financial guidance, consult
          a financial advisor. For SSI/SSDI, consult a disability attorney.
        </p>
      </div>
    </article>
  );
}
