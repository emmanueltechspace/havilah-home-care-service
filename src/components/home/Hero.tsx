import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100" aria-labelledby="hero-heading">
      {/* Background decorative shapes */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-havilah-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-gold-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div className="reveal is-visible">
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

          {/* Trust indicators */}
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

        {/* Image column */}
        <div className="relative isolate flex min-h-[420px] items-end justify-center reveal is-visible sm:min-h-[520px] lg:min-h-[620px]">
          <div className="absolute inset-x-6 bottom-4 top-10 rounded-[3rem] bg-gradient-to-br from-havilah-100 via-cream-50 to-gold-100/80 shadow-inner shadow-white/80" aria-hidden="true" />
          <div className="absolute bottom-0 right-3 h-72 w-72 rounded-full bg-gold-300/25 blur-3xl sm:right-8" aria-hidden="true" />
          <div className="absolute left-3 top-16 h-64 w-64 rounded-full bg-havilah-200/35 blur-3xl sm:left-8" aria-hidden="true" />

          <div className="relative z-10 flex h-[min(620px,82vw)] w-full max-w-[520px] items-end justify-center overflow-hidden rounded-[3rem]">
            <img
              src="/images/image.png"
              alt="Compassionate HAVILAH caregiver in purple scrubs, smiling warmly with arms crossed."
              className="absolute bottom-[-1%] left-1/2 z-10 h-auto w-[150%] max-w-none -translate-x-1/2 object-contain object-bottom mix-blend-screen drop-shadow-[0_28px_22px_rgba(61,39,91,0.22)] transition-transform duration-700 hover:scale-[1.02]"
              width={768}
              height={1536}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-8 sm:right-auto sm:max-w-[250px]">
              <p className="font-display text-base font-bold text-havilah-900">Care begins with listening.</p>
              <p className="mt-0.5 text-xs font-semibold text-charcoal-500">A more personal kind of home care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
