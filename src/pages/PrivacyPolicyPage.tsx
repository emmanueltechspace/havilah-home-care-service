import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `Privacy Policy for ${SITE.name}. Learn how we collect, use, and protect your personal information.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How ${SITE.name} collects, uses, and protects your personal information.`}
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-y bg-cream-100">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="card p-8 md:p-10">
              <div className="space-y-6 text-charcoal-700">
                <div>
                  <h2 className="text-xl font-bold text-havilah-900">1. Introduction</h2>
                  <p className="mt-3 leading-relaxed">
                    {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is
 committed to protecting your privacy. This Privacy Policy explains how we collect, use,
 and safeguard your personal information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">2. Information We Collect</h2>
                  <p className="mt-3 leading-relaxed">
                    We may collect the following types of information:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span><strong>Contact information:</strong> name, phone number, email address, and mailing address.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span><strong>Care inquiry details:</strong> information you provide through our Request Care form, including care needs and preferences.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span><strong>Usage data:</strong> anonymized information about how you interact with our website.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">3. How We Use Your Information</h2>
                  <p className="mt-3 leading-relaxed">We use the information we collect to:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span>Respond to your inquiries and provide information about our services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span>Assess your care needs and develop personalized care plans.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span>Communicate with you about our services and your care.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span>Improve our website and services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      <span>Comply with applicable legal and regulatory requirements.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">4. Information Sharing</h2>
                  <p className="mt-3 leading-relaxed">
                    We do not sell, rent, or trade your personal information to third parties.
 We may share your information with trusted partners who assist us in providing our
 services, or when required by law. All such sharing is done with appropriate
 confidentiality safeguards.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">5. Data Security</h2>
                  <p className="mt-3 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect
 your personal information against unauthorized access, loss, or misuse. However, no
 method of transmission over the internet is completely secure, and we cannot guarantee
 absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">6. Your Rights</h2>
                  <p className="mt-3 leading-relaxed">
                    You have the right to access, correct, or request deletion of your personal
 information. You may also opt out of receiving marketing communications at any time.
 To exercise these rights, please contact us using the information below.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">7. Cookies</h2>
                  <p className="mt-3 leading-relaxed">
                    Our website may use cookies to improve your browsing experience. You can
 control cookies through your browser settings. Disabling cookies may affect some
 functionality of the website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">8. Changes to This Policy</h2>
                  <p className="mt-3 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be
 posted on this page with an updated revision date.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-havilah-900">9. Contact Us</h2>
                  <p className="mt-3 leading-relaxed">
                    If you have questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="mt-3 space-y-1 text-charcoal-600">
                    <p><strong>{SITE.name}</strong></p>
                    <p>Phone: <a href={SITE.phoneHref} className="text-havilah-700 hover:text-havilah-900">{SITE.phone}</a></p>
                    <p>Email: <a href={SITE.emailHref} className="text-havilah-700 hover:text-havilah-900">{SITE.email}</a></p>
                    <p>{SITE.addressLine1}</p>
                  </div>
                </div>

                <p className="border-t border-charcoal-200 pt-6 text-sm text-charcoal-400">
                  This Privacy Policy is a placeholder and should be reviewed and approved by
 qualified legal counsel before publication.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
