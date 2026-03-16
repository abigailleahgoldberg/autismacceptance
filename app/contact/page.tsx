import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Autism Acceptance',
  description: 'Get in touch with the Autism Acceptance team.',
};

export default function ContactPage() {
  return (
    <main style={{ background: '#09080F', color: '#FAFAF8', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#A855F7', marginBottom: '0.5rem' }}>
          Contact Us
        </h1>
        <p style={{ color: '#FAFAF8', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          How can we help?
        </p>

        <div style={{ background: 'rgba(107,33,168,0.08)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Whether you have feedback on our content, want to share your story, or have a content inquiry — we&apos;d love to hear from you.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            <strong style={{ color: '#A855F7' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#A855F7', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
          <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: '4px', padding: '1rem' }}>
            <p style={{ lineHeight: 1.8, fontSize: '0.9rem', margin: 0, color: '#FCA5A5' }}>
              <strong>Medical emergency?</strong> Call 911 or your local emergency services. This is not a crisis line. For mental health crises, call or text <strong>988</strong>.
            </p>
          </div>
        </div>

        <div style={{ background: 'rgba(107,33,168,0.05)', border: '1px solid rgba(168,85,247,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem' }}>
            What We Can Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Content feedback or corrections</li>
            <li style={{ marginBottom: '0.5rem' }}>Community stories or contributions</li>
            <li style={{ marginBottom: '0.5rem' }}>Partnership and resource sharing</li>
            <li style={{ marginBottom: '0.5rem' }}>Accessibility concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
