import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export function TermsPage() {
  usePageMeta({
    title: 'Terms of Service',
    description: `Terms of Service for ${SITE.name}. The terms and conditions governing use of our website and services.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`The terms and conditions governing your use of the ${SITE.name} website and services.`}
        breadcrumbs={[{ label: 'Terms' }]}
      />

      <section className="section-y bg-cream-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="card p-8 md:p-10">
              <div className="space-y-6 text-charcoal-700">
                <div>
                  <h2 className="text-xl font-bold text-havilah-900">1. Acceptance of Terms</h2>
                  <p className="mt-3 leading-relaxed">
                    By accessing and using the {SITE.name} website, you accept and agree to be
 bound by these Terms of Service. If you do not agree with any part of these terms,
 please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">2. Use of Our Website</h2>
                  <p className="mt-3 leading-relaxed">
                    You agree to use our website for lawful purposes only and in a manner that
 does not infringe the rights of others. You must not use our website to transmit
 harmful, offensive, or misleading content.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">3. Services</h2>
                  <p className="mt-3 leading-relaxed">
                    The information provided on this website is for general informational
 purposes only and does not constitute medical advice. Our care services are subject
 to individual assessment and the development of a personalized care plan. Service
 availability may vary based on location and caregiver availability.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">4. Intellectual Property</h2>
                  <p className="mt-3 leading-relaxed">
                    All content on this website, including text, graphics, logos, and design
 elements, is the property of {SITE.name} or its licensors and is protected by
 applicable intellectual property laws. You may not reproduce or distribute our
 content without prior written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">5. Limitation of Liability</h2>
                  <p className="mt-3 leading-relaxed">
                    {SITE.name} is not liable for any direct, indirect, incidental, or
 consequential damages arising from your use of our website or services. The
 information on this website is provided &ldquo;as is&rdquo; without warranties of any
 kind.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">6. Third-Party Links</h2>
                  <p className="mt-3 leading-relaxed">
                    Our website may contain links to third-party websites. We are not
 responsible for the content or practices of these external sites and encourage you
 to review their terms and privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">7. Changes to Terms</h2>
                  <p className="mt-3 leading-relaxed">
                    We reserve the right to update these Terms of Service at any time. Changes
 will be posted on this page with an updated revision date. Continued use of our
 website after changes constitutes acceptance of the updated terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">8. Contact</h2>
                  <p className="mt-3 leading-relaxed">
                    Questions about these Terms of Service? Please contact us:
                  </p>
                  <div className="mt-3 space-y-1 text-charcoal-600">
                    <p><strong>{SITE.name}</strong></p>
                    <p>Phone: <a href={SITE.phoneHref} className="text-havilah-700 hover:text-havilah-900">{SITE.phone}</a></p>
                    <p>Email: <a href={SITE.emailHref} className="text-havilah-700 hover:text-havilah-900">{SITE.email}</a></p>
                    <p>{SITE.addressLine1}</p>
                  </div>
                </div>

                <p className="border-t border-charcoal-200 pt-6 text-sm text-charcoal-400">
                  These Terms of Service are a placeholder and should be reviewed and approved
 by qualified legal counsel before publication.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
