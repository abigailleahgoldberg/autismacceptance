import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Autism Acceptance',
  description: 'Our commitment to digital accessibility and WCAG 2.1 AA compliance for Autism Acceptance.',
};

export default function AccessibilityPage() {
  return (
    <main style={{ background: '#09080F', color: '#FAFAF8', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#A855F7', marginBottom: '0.5rem' }}>
          Accessibility Statement
        </h1>
        <p style={{ color: '#FAFAF8', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(107,33,168,0.08)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Autism Acceptance is committed to ensuring our website is accessible to everyone, including people with disabilities. We believe digital accessibility is not optional — it is essential, especially for a community that includes many individuals with diverse access needs.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Our Commitment
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We strive to meet <strong>WCAG 2.1 Level AA</strong> standards as defined by the Web Content Accessibility Guidelines. Our goal is to provide an inclusive experience for users with visual, auditory, motor, cognitive, and neurological disabilities.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            How We Test
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            We evaluate our website&apos;s accessibility through the following approaches:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Screen reader testing</strong> — We test with common screen readers to ensure content is readable and navigable by assistive technology.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Keyboard navigation</strong> — All interactive elements are accessible via keyboard without requiring a mouse.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Color contrast</strong> — We aim for a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text to meet WCAG AA standards.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Semantic HTML</strong> — We use proper heading hierarchy, ARIA labels, and semantic markup to support assistive technologies.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Focus management</strong> — Visible focus indicators are maintained throughout the site.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Known Limitations
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            While we work to maintain accessibility, some limitations may exist:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Some third-party embedded content (videos, social media) may not fully meet our accessibility standards.</li>
            <li style={{ marginBottom: '0.5rem' }}>PDF documents linked from this site may not be fully accessible.</li>
            <li style={{ marginBottom: '0.5rem' }}>We continue to improve and address accessibility gaps as they are identified.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Report an Accessibility Issue
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We welcome feedback. If you encounter an accessibility barrier on our site, please let us know:
          </p>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Describe the specific issue you experienced</li>
            <li style={{ marginBottom: '0.5rem' }}>Include the URL of the affected page</li>
            <li style={{ marginBottom: '0.5rem' }}>Tell us what assistive technology or browser you are using (if applicable)</li>
          </ul>
          <p style={{ lineHeight: 1.8, marginTop: '1rem' }}>
            <strong style={{ color: '#A855F7' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#A855F7' }}>thevoiceofcash@gmail.com</a>
          </p>
          <p style={{ lineHeight: 1.8, marginTop: '0.5rem' }}>
            We aim to respond to accessibility reports within 5 business days.
          </p>
        </section>
      </div>
    </main>
  );
}
