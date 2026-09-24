import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { LinkArrow } from './Button';
import { Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

interface CTABaterialProps {
  title?: string;
  subtitle?: string;
}

export function CTABaterial({
  title = 'Let’s Talk About Your Family’s Care Needs',
  subtitle = 'Reach out today for a complimentary, no-pressure consultation. We’re here to listen, answer your questions, and help you find the right path forward.',
}: CTABaterialProps) {
  return (
    <section className="relative overflow-hidden bg-havilah-900 py-20 md:py-28">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-havilah-800 via-havilah-900 to-havilah-950" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-havilah-500/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-gold-300">Get Started Today</p>
          <h2 className="text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-200">{subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/request-care" className="btn btn-secondary btn-lg">
              Request Care
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2.5 text-lg font-bold text-cream-50 transition-colors hover:text-gold-300"
            >
              <Phone className="h-5 w-5 text-gold-400" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
