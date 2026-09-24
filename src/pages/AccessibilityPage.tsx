import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/constants';
import { Eye, Keyboard, Globe, Mail, Phone, Type } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Readable Colors and Contrast',
    text: 'We design with sufficient color contrast ratios to ensure text is readable for visitors with visual impairments, following WCAG 2.2 AA standards.',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Navigation',
    text: 'Our website can be navigated using a keyboard alone. All interactive elements are reachable and operable without a mouse.',
  },
  {
    icon: Type,
    title: 'Clear Typography',
    text: 'We use legible font families and sizes with appropriate line spacing to support comfortable reading for all visitors.',
  },
  {
    icon: Globe,
    title: 'Semantic Structure',
    text: 'Our pages use proper HTML headings and landmarks so screen readers can navigate content logically and efficiently.',
  },
];

export function AccessibilityPage() {
  usePageMeta({
    title: 'Accessibility',
    description: `${SITE.name} is committed to making our website accessible to everyone, including individuals with disabilities, in accordance with WCAG 2.2 AA standards.`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Accessibility Commitment"
        subtitle={`${SITE.name} is dedicated to ensuring our website is accessible to everyone, including individuals with disabilities. We strive to follow WCAG 2.2 AA standards.`}
        breadcrumbs={[{ label: 'Accessibility' }]}
      />

      <section className="section-y bg-cream-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Commitment */}
            <div className="reveal card p-8 md:p-10">
              <h2 className="text-xl font-bold text-havilah-900">Our Commitment</h2>
              <p className="mt-4 leading-relaxed text-charcoal-700">
                We believe that everyone — regardless of ability — should be able to learn
 about and access the care they need. We are continuously working to improve the
 accessibility of our website and welcome your feedback.
              </p>
            </div>

            {/* What we do */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="reveal card p-7"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-havilah-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Feedback */}
            <div className="reveal mt-8 card p-8 md:p-10">
              <h2 className="text-xl font-bold text-havilah-900">Feedback and Assistance</h2>
              <p className="mt-4 leading-relaxed text-charcoal-700">
                If you encounter any accessibility barriers on our website, or if you need
 assistance accessing our services, please let us know. We take all feedback seriously
 and will work to address any issues promptly.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 rounded-lg bg-havilah-50 p-4 transition-colors hover:bg-havilah-100"
                >
                  <Phone className="h-5 w-5 text-havilah-700" aria-hidden="true" />
                  <span className="font-bold text-havilah-900">{SITE.phone}</span>
                </a>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 rounded-lg bg-havilah-50 p-4 transition-colors hover:bg-havilah-100"
                >
                  <Mail className="h-5 w-5 text-havilah-700" aria-hidden="true" />
                  <span className="font-bold text-havilah-900">{SITE.email}</span>
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm text-charcoal-400">
              This Accessibility statement is a placeholder and should be reviewed and approved
 by qualified legal counsel before publication.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
