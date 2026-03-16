import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Autism Acceptance',
  description: 'Important medical disclaimer for Autism Acceptance. This site does not provide medical advice, diagnosis, or treatment.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#09080F', color: '#FAFAF8', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#A855F7', marginBottom: '0.5rem' }}>
          Medical Disclaimer
        </h1>
        <p style={{ color: '#FAFAF8', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(220,38,38,0.12)', border: '2px solid rgba(220,38,38,0.5)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, fontWeight: 700, color: '#FCA5A5', margin: 0, fontSize: '1.05rem' }}>
            ⚠️ IMPORTANT: The content on this website is NOT medical advice, NOT therapy, and NOT a diagnosis. This site does not replace professional medical, therapeutic, or educational consultation. Always consult qualified healthcare providers for medical decisions.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Not Medical Advice
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Autism Acceptance (autismacceptance.world) provides informational, educational, and community-focused content about autism spectrum disorder. We are not doctors, therapists, psychologists, BCBAs (Board Certified Behavior Analysts), special education specialists, or licensed healthcare providers of any kind.
          </p>
          <p style={{ lineHeight: 1.8, marginTop: '1rem' }}>
            Nothing on this website constitutes medical advice, a medical diagnosis, a therapeutic recommendation, or a treatment plan. Content is not intended to diagnose, treat, cure, or prevent any condition.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Do Not Make Medical Decisions Based on This Site
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Do not make medical, therapeutic, or educational decisions based solely on content from this website. Individual circumstances vary significantly. What works for one person may not work for another, and autism support is highly individualized.
          </p>
          <p style={{ lineHeight: 1.8, marginTop: '1rem' }}>
            Always consult qualified healthcare providers, including your child&apos;s pediatrician, neurologist, developmental specialist, psychiatrist, psychologist, or speech-language pathologist, before making changes to treatment, therapy, medication, or educational plans.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Emergency Situations
          </h2>
          <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '6px', padding: '1rem' }}>
            <p style={{ lineHeight: 1.8, margin: 0 }}>
              If you or someone you know is in crisis or needs immediate medical attention, call <strong>911</strong> or your local emergency services immediately. Do not rely on this website in emergency situations. The 988 Suicide &amp; Crisis Lifeline (call or text <strong>988</strong>) is available 24/7.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Some content on this website may be created or assisted by artificial intelligence tools. AI-generated content about autism, development, or therapy may contain errors, outdated research, or oversimplifications. We strongly encourage readers to verify all health-related information with qualified professionals and peer-reviewed sources.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            This website may link to external resources, organizations, or research. We are not responsible for the content, accuracy, or practices of any third-party websites. External links are provided for informational purposes and do not constitute endorsement.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#A855F7', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(168,85,247,0.2)' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Questions about this disclaimer? Contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#A855F7' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
