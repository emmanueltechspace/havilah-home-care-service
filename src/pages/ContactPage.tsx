import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: SITE.phone,
    href: SITE.phoneHref,
    text: 'We are happy to answer your questions and discuss your family\'s needs.',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: SITE.email,
    href: SITE.emailHref,
    text: 'Send us a message and we will respond promptly.',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    value: SITE.addressLine1,
    text: `Proudly serving ${SITE.serviceArea}.`,
  },
  {
    icon: Clock,
    title: 'Availability',
    value: 'Flexible Hours',
    text: 'We work with families to accommodate scheduling needs. Contact us to discuss.',
  },
];

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us',
    description:
      'Contact HAVILAH Cottage Home Care Services in San Antonio, Texas. Call 210-277-8888 or reach out online to discuss your family\'s care needs.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We Are Here to Listen"
        subtitle="Reach out by phone, email, or through our Request Care form. Whether you are ready to start services or simply exploring options, we welcome your questions — with no pressure and no obligation."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact methods */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, i) => (
              <div
                key={method.title}
                className="reveal card card-hover p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                  <method.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-havilah-900">{method.title}</h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="mt-2 block font-bold text-havilah-700 transition-colors hover:text-havilah-900"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="mt-2 font-bold text-havilah-700">{method.value}</p>
                )}
                <p className="mt-2 text-sm text-charcoal-600">{method.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA to form */}
      <section className="section-y bg-white">
        <Container>
          <div className="reveal grid items-center gap-8 rounded-3xl bg-havilah-900 p-8 text-center md:p-12 lg:grid-cols-[1fr_auto] lg:text-left">
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/15 text-gold-400 lg:mx-0">
                <MessageSquare className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-cream-50 sm:text-3xl">
                Ready to Share Your Needs?
              </h2>
              <p className="mt-3 text-cream-200">
                Fill out our Request Care form and a member of our team will reach out
 to you personally. It only takes a few minutes.
              </p>
            </div>
            <Button to="/request-care" variant="secondary" size="lg">
              Request Care
            </Button>
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
