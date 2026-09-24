import { usePageMeta } from '@/lib/usePageMeta';
import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTABaterial } from '@/components/ui/CTABaterial';
import { FAQItem } from '@/components/ui/FAQItem';
import { Button } from '@/components/ui/Button';
import { FAQS, RESOURCES } from '@/lib/constants';
import { BookOpen, GraduationCap, FileText, HelpCircle, Phone } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  FileText,
  HelpCircle,
};

const articles = [
  {
    title: 'Understanding Home Care Options',
    excerpt: 'A guide to the different types of home care services and how to choose what is right for your family.',
    category: 'Care Guides',
    badge: 'Coming Soon',
  },
  {
    title: 'Starting the Care Conversation',
    excerpt: 'Tips for talking with your loved one about receiving care — with empathy and respect.',
    category: 'Family Education',
    badge: 'Coming Soon',
  },
  {
    title: 'Signs It May Be Time for Additional Support',
    excerpt: 'Recognizing the subtle signs that a loved one could benefit from extra help at home.',
    category: 'Helpful Articles',
    badge: 'Coming Soon',
  },
  {
    title: 'Caring for the Caregiver',
    excerpt: 'Why self-care matters for family caregivers, and how respite care can help.',
    category: 'Family Education',
    badge: 'Coming Soon',
  },
  {
    title: 'Creating a Safe Home Environment',
    excerpt: 'Simple modifications and habits that can make a home safer for aging in place.',
    category: 'Helpful Articles',
    badge: 'Coming Soon',
  },
  {
    title: 'Navigating Care Transitions',
    excerpt: 'How to manage the emotional and practical aspects of transitioning to home care.',
    category: 'Care Guides',
    badge: 'Coming Soon',
  },
];

export function ResourcesPage() {
  usePageMeta({
    title: 'Resources',
    description:
      'Explore HAVILAH’s resource library: care guides, family education, helpful articles, and FAQs about home care in San Antonio, Texas.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Knowledge to Guide Your Care Journey"
        subtitle="We believe informed families make confident decisions. Our resource library is growing with guides, articles, and answers designed to support you every step of the way."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      {/* Resource categories */}
      <section className="section-y bg-cream-100">
        <Container>
          <SectionHeading
            eyebrow="Browse by Category"
            title="Find the Information You Need"
            center
            className="reveal"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCES.map((resource, i) => {
              const Icon = iconMap[resource.icon];
              return (
                <div
                  key={resource.title}
                  className="reveal card card-hover p-7"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                    {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-havilah-900">{resource.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    {resource.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="section-y bg-white" aria-labelledby="articles-heading">
        <Container>
          <SectionHeading
            eyebrow="Helpful Articles"
            title="A Growing Library of Insights"
            subtitle="We are building a collection of articles to help families navigate home care decisions. Check back as we add new content."
            center
            className="reveal"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <article
                key={article.title}
                className="reveal card card-hover flex flex-col p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-havilah-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-havilah-700">
                    {article.category}
                  </span>
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-gold-700">
                    {article.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-havilah-900">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-y bg-cream-200" aria-labelledby="faq-heading">
        <Container>
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            subtitle="Answers to the questions families ask us most. Do not see your question here? We are just a phone call away."
            center
            className="reveal"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {FAQS.map((faq, i) => (
              <div key={faq.question} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <p className="text-charcoal-600">Still have questions?</p>
            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="tel:+12102778888" variant="primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call 210-277-8888
              </Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABaterial />
    </>
  );
}
