import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100" aria-labelledby="hero-heading">
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-havilah-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-gold-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-havilah-100/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="relative z-20 reveal is-visible">
          <div className="inline-flex items-center gap-2 rounded-full bg-havilah-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-havilah-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            San Antonio, Texas
          </div>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-havilah-900 sm:text-5xl lg:text-6xl"
          >
            Care With Dignity.
            <br />
            <span className="text-gradient-gold">Comfort With Love.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-600">
            HAVILAH Cottage Home Care Services provides personalized, compassionate
            care that honors the individuality of every person we serve. Because your
            loved one deserves more than care — they deserve to feel truly seen, valued,
            and at peace in the comfort of home.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/request-care" className="btn btn-primary btn-lg">
              Request Care
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Learn About Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-charcoal-500">
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-gold-500" aria-hidden="true" />
              Care That Honors Dignity
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-500" aria-hidden="true" />
              Trusted Locally in San Antonio
            </span>
          </div>
        </div>

        <div className="relative flex min-h-[430px] items-end justify-center reveal is-visible sm:min-h-[520px] lg:min-h-[640px]">
          <div
            className="absolute bottom-2 left-1/2 h-[78%] w-[72%] -translate-x-1/2 rounded-[48%_52%_42%_58%] bg-gradient-to-br from-havilah-100 via-cream-50 to-gold-100/80"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-havilah-200/30 blur-3xl sm:h-80 sm:w-80"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-20 right-3 h-32 w-32 rounded-full bg-gold-300/30 blur-2xl sm:right-10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-16 left-1/2 h-[72%] w-px -translate-x-1/2 bg-gradient-to-t from-gold-400/40 via-gold-300/10 to-transparent"
            aria-hidden="true"
          />

          <img
            src="/images/image.png"
            alt="Compassionate HAVILAH caregiver in purple scrubs, smiling warmly with her arms crossed."
            className="relative z-10 h-[min(620px,128vw)] w-auto max-w-[82vw] object-contain object-bottom drop-shadow-[0_26px_24px_rgba(61,39,91,0.2)] transition-transform duration-700 hover:-translate-y-1"
            width={768}
            height={1536}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
