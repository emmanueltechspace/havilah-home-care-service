import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { RequestCareForm } from '@/components/RequestCareForm';
import { SITE } from '@/lib/constants';
import { Phone, Mail, ShieldCheck, Clock } from 'lucide-react';

export function RequestCarePage() {
  usePageMeta({
    title: 'Request Care',
    description:
      'Request care from HAVILAH Cottage Home Care Services. Fill out our form or call 210-277-8888 to start a no-pressure consultation about your family\'s home care needs in San Antonio, Texas.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Request Care"
        title="Let's Start the Conversation"
        subtitle="Share a few details about your family's needs, and a member of our team will reach out to you personally. There is no pressure and no obligation — just a genuine conversation about how we can help."
        breadcrumbs={[{ label: 'Request Care' }]}
      />

      <section className="section-y bg-cream-100">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
            {/* Sidebar */}
            <aside className="reveal space-y-6">
              {/* Direct contact */}
              <div className="card p-6">
                <h2 className="text-lg font-bold text-havilah-900">Prefer to Talk Directly?</h2>
                <p className="mt-2 text-sm text-charcoal-600">
                  We are just a phone call away. Reach out and we will be happy to help.
                </p>
                <div className="mt-5 space-y-4">
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 rounded-lg bg-havilah-50 p-4 transition-colors hover:bg-havilah-100"
                  >
                    <Phone className="h-5 w-5 text-havilah-700" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-charcoal-500">Call us</p>
                      <p className="font-bold text-havilah-900">{SITE.phone}</p>
                    </div>
                  </a>
                  <a
                    href={SITE.emailHref}
                    className="flex items-center gap-3 rounded-lg bg-havilah-50 p-4 transition-colors hover:bg-havilah-100"
                  >
                    <Mail className="h-5 w-5 text-havilah-700" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-charcoal-500">Email us</p>
                      <p className="font-bold text-havilah-900">{SITE.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div className="card p-6">
                <h2 className="text-lg font-bold text-havilah-900">What Happens Next?</h2>
                <ol className="mt-4 space-y-4">
                  {[
                    { icon: Phone, title: 'We Reach Out', text: 'A team member contacts you to learn about your needs.' },
                    { icon: Clock, title: 'We Schedule a Consultation', text: 'We arrange a time to talk in detail — at your convenience.' },
                    { icon: ShieldCheck, title: 'We Build a Care Plan', text: 'Together, we create a personalized plan for your loved one.' },
                  ].map((step, i) => (
                    <li key={step.title} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                        <step.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-havilah-900">
                          {i + 1}. {step.title}
                        </p>
                        <p className="mt-0.5 text-sm text-charcoal-600">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Privacy note */}
              <div className="rounded-2xl bg-havilah-50 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-havilah-700" aria-hidden="true" />
                  <p className="text-sm text-charcoal-600">
                    Your information is kept strictly confidential and is never shared
 with third parties without your consent.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="reveal">
              <RequestCareForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
