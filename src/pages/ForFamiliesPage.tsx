import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/lib/constants';
import { ShieldCheck, Heart, MessageSquare, Clock, Phone, BookOpen } from 'lucide-react';

const reassurances = [
  {
    icon: ShieldCheck,
    title: 'Peace of Mind',
    text: 'When you cannot be there yourself, knowing a compassionate, dedicated caregiver is present brings immeasurable relief.',
  },
  {
    icon: Heart,
    title: 'Personal Connection',
    text: 'Our caregivers take the time to truly know your loved one — their preferences, their stories, their daily rhythms.',
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    text: 'We keep families informed with regular updates and transparent conversations. You are always in the loop.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    text: 'From a few hours a week to more comprehensive support, we work around your family’s schedule and needs.',
  },
];

const considerations = [
  'Has your loved one noticed changes in mobility, energy, or daily routines?',
  'Are there tasks around the home that have become difficult or unsafe?',
  'Would companionship and social interaction improve their daily quality of life?',
  'Are you, as a family caregiver, feeling stretched or in need of support?',
  'Would help with meals, housekeeping, or errands make a meaningful difference?',
  'Is there a recent diagnosis or change in health that calls for extra support?',
];

export function ForFamiliesPage() {
  usePageMeta({
    title: 'For Families',
    description:
      'Resources and reassurance for families considering home care. HAVILAH supports families in San Antonio with compassionate guidance every step of the way.',
  });

  return (
    <>
      <PageHeader
        eyebrow="For Families"
        title="Supporting the People Who Care Most"
        subtitle="Choosing care for someone you love is one of the most important decisions a family can make. We are here to walk alongside you with honesty, patience, and genuine partnership — never pressure."
        breadcrumbs={[{ label: 'Families' }]}
      />

      {/* Reassurance section */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal relative">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
                <img
                  src={IMAGES.familyMultigen}
                  alt={IMAGES.familyMultigenAlt}
                  className="aspect-[4/3] w-full object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-havilah-900 px-5 py-4 shadow-xl sm:block lg:-right-6">
                <p className="font-display text-lg font-bold text-gold-400">You Are Not Alone</p>
                <p className="mt-0.5 text-sm text-cream-300">We are here to help</p>
              </div>
            </div>
            <div className="reveal">
              <SectionHeading
                eyebrow="Reassurance"
                title="A Calm, Supportive Partnership"
                subtitle="We understand the emotions that come with this decision — the love, the worry, the questions. Our approach is never fear-based. Instead, we focus on what is possible: a life of dignity, comfort, and connection for your loved one, and peace of mind for you."
              />
              <div className="mt-8">
                <Button to="/request-care" variant="primary">Talk to Us Today</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reassurance cards */}
      <section className="section-y bg-white" aria-labelledby="family-benefits-heading">
        <Container>
          <SectionHeading
            eyebrow="What Families Gain"
            title="More Than Care — Peace of Mind"
            subtitle="When you partner with HAVILAH, you are not just hiring a service. You are gaining a team that cares about your family’s well-being as much as you do."
            center
            className="reveal"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {reassurances.map((item, i) => (
              <div
                key={item.title}
                className="reveal card card-hover flex items-start gap-5 p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-havilah-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Is it time? section */}
      <section className="section-y bg-cream-200">
        <Container>
          <div className="reveal mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Considering Care"
              title="Is It Time to Consider Home Care?"
              subtitle="There is no single answer — every family’s situation is unique. These questions can help you think through whether additional support might benefit your loved one."
              center
            />
            <div className="mt-10 space-y-4">
              {considerations.map((q, i) => (
                <div
                  key={i}
                  className="reveal flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-sm font-bold text-gold-700">
                    {i + 1}
                  </span>
                  <p className="text-charcoal-700">{q}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button to="/request-care" variant="primary" size="lg">Request a Consultation</Button>
              <a
                href="tel:+12102778888"
                className="inline-flex items-center gap-2 text-base font-bold text-havilah-700 transition-colors hover:text-havilah-900"
              >
                <Phone className="h-5 w-5 text-gold-500" aria-hidden="true" />
                Or call us at 210-277-8888
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Resources link */}
      <section className="section-y bg-white">
        <Container>
          <div className="reveal grid items-center gap-8 rounded-3xl bg-havilah-50 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-700 text-gold-400">
                <BookOpen className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-havilah-900">
                Explore Our Family Resources
              </h2>
              <p className="mt-3 text-charcoal-600">
                We have gathered guides, articles, and answers to common questions to
 support you in making informed, confident decisions.
              </p>
            </div>
            <Button to="/resources" variant="primary" size="lg">View Resources</Button>
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
