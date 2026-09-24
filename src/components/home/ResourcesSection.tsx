import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkArrow } from '@/components/ui/Button';
import { RESOURCES } from '@/lib/constants';
import { BookOpen, GraduationCap, FileText, HelpCircle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GraduationCap,
  FileText,
  HelpCircle,
};

export function ResourcesSection() {
  return (
    <section className="section-y bg-white" aria-labelledby="resources-heading">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Knowledge to Guide Your Journey"
          subtitle="We believe informed families make confident decisions. Explore our growing collection of guides, articles, and answers to common questions."
          center
          className="reveal"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource) => {
            const Icon = iconMap[resource.icon];
            return (
              <article
                key={resource.title}
                className="reveal card card-hover group flex flex-col p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700 transition-colors group-hover:bg-gold-400 group-hover:text-havilah-900">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 text-lg font-bold text-havilah-900">{resource.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-600">
                  {resource.description}
                </p>
                <div className="mt-5">
                  <LinkArrow to={resource.link}>Explore</LinkArrow>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
