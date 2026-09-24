import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/constants';

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Accessibility', to: '/accessibility' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      {/* Main footer */}
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-havilah-700 text-gold-400">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-cream-50">HAVILAH</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-400">
                  Cottage Home Care
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-charcoal-300">
              {SITE.tagline} Personalized home care services in {SITE.addressLine1}.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`${SITE.shortName} on ${social.label} (placeholder link)`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-800 text-charcoal-300 transition-all hover:bg-havilah-700 hover:text-cream-50"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Navigation
            </h2>
            <ul className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 sm:gap-x-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal-300 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/request-care"
                  className="text-charcoal-300 transition-colors hover:text-cream-50"
                >
                  Request Care
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Contact
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" aria-hidden="true" />
                <a
                  href={SITE.phoneHref}
                  className="text-charcoal-300 transition-colors hover:text-cream-50"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" aria-hidden="true" />
                <a
                  href={SITE.emailHref}
                  className="text-charcoal-300 transition-colors hover:text-cream-50"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" aria-hidden="true" />
                <span className="text-charcoal-300">{SITE.addressLine1}</span>
              </li>
            </ul>
          </div>

          {/* CTA + Legal */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-gold-400">
              Get Started
            </h2>
            <p className="mb-4 text-sm text-charcoal-300">
              Ready to learn more? Start with a no-pressure consultation.
            </p>
            <Link to="/request-care" className="btn btn-secondary w-full sm:w-auto">
              Request Care
            </Link>
            <ul className="mt-8 space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal-300 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-charcoal-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-charcoal-500">
            Care With Dignity. Comfort With Love.
          </p>
        </div>
      </div>
    </footer>
  );
}
