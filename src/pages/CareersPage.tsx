import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { Button } from '@/components/ui/Button';
import { IMAGES, SITE } from '@/lib/constants';
import { Heart, Sparkles, ArrowRight, Users, ShieldCheck, Clock } from 'lucide-react';

const culturePoints = [
  {
    icon: Heart,
    title: 'Culture of Care',
    text: 'We invest in our caregivers the same way they invest in our clients — with respect, support, and genuine appreciation. When caregivers feel valued, the care they give is extraordinary.',
  },
  {
    icon: Sparkles,
    title: 'Purpose-Driven Work',
    text: 'Every day is an opportunity to make a meaningful difference in someone’s life. This is work that matters — work that changes lives, including your own.',
  },
  {
    icon: ArrowRight,
    title: 'Growth Opportunity',
    text: 'We support our team members’ professional development and provide a pathway to grow within our organization. Your dedication is recognized and rewarded.',
  },
];

const whatWeLookFor = [
  'Genuine compassion and empathy for older adults',
  'Patience, reliability, and a positive attitude',
  'Commitment to treating every person with dignity',
  'Strong communication and teamwork skills',
  'Dependability and a professional work ethic',
];

const benefits = [
  { icon: Users, title: 'Supportive Team', text: 'You join a community that has your back.' },
  { icon: ShieldCheck, title: 'Meaningful Work', text: 'Make a real difference every day.' },
  { icon: Clock, title: 'Flexible Schedules', text: 'We work with your availability.' },
];

export function CareersPage() {
  usePageMeta({
    title: 'Careers',
    description:
      'Join the HAVILAH Cottage Home Care Services team. We are looking for compassionate caregivers in San Antonio, Texas who lead with heart and dignity.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Become Part of Something Meaningful"
        subtitle="We are always looking for compassionate, dedicated people who feel called to care. If you believe in treating others with dignity and leading with heart, we would love to meet you."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Culture section */}
      <section className="section-y bg-cream-100">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal relative order-first lg:order-last">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-charcoal-900/10">
                <img
                  src={IMAGES.nursePortrait}
                  alt={IMAGES.nursePortraitAlt}
                  className="aspect-[4/3] w-full object-cover"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-gold-400 px-5 py-4 shadow-xl sm:block lg:-left-6">
                <p className="font-display text-lg font-bold text-havilah-900">Join Our Team</p>
                <p className="mt-0.5 text-sm text-havilah-800">Care that changes lives</p>
              </div>
            </div>
            <div className="reveal">
              <SectionHeading
                eyebrow="Why Work With Us"
                title="A Place Where Your Compassion Is Valued"
                subtitle="Caregiving is more than a job — it is a calling. At HAVILAH, we honor that calling by creating a workplace where caregivers feel respected, supported, and appreciated for the extraordinary work they do."
              />
              <div className="mt-8 space-y-6">
                {culturePoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-havilah-50 text-havilah-700">
                      <point.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-havilah-900">{point.title}</h3>
                      <p className="mt-1 text-sm text-charcoal-600">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What we look for */}
      <section className="section-y bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <SectionHeading
                eyebrow="Who We Are Looking For"
                title="Qualities We Value Most"
                subtitle="Experience can be taught. Character cannot. We look for people who bring heart to their work — and we help them grow from there."
              />
              <ul className="mt-8 space-y-4">
                {whatWeLookFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <SectionHeading
                eyebrow="What You Can Expect"
                title="A Workplace That Supports You"
              />
              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="card card-hover flex items-start gap-5 p-6">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                      <benefit.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-havilah-900">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-charcoal-600">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="section-y bg-cream-200">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="Apply Now"
              title="Ready to Make a Difference?"
              subtitle={`If you feel called to compassionate caregiving, we would love to hear from you. Reach out to learn about current opportunities and start a conversation.`}
              center
            />
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={SITE.phoneHref} variant="primary" size="lg">
                Call {SITE.phone}
              </Button>
              <Button href={SITE.emailHref} variant="outline" size="lg">
                Email Us
              </Button>
            </div>
            <p className="mt-6 text-sm text-charcoal-500">
              Application form coming soon. In the meantime, please contact us directly —
 we look forward to meeting you.
            </p>
          </div>
        </Container>
      </section>

      <CTABaterial
        title="Join a Team That Cares About You"
        subtitle="At HAVILAH, your compassion is your greatest qualification. Let's talk about how you can make a difference with us."
      />
    </>
  );
}
