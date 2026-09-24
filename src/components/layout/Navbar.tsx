import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) =>
    location.pathname === to ||
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-havilah-900 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/95 shadow-lg shadow-charcoal-900/5 backdrop-blur-md'
            : 'bg-cream-50/80 backdrop-blur-sm'
        }`}
      >
        {/* Top bar */}
        <div
          className={`hidden border-b border-havilah-100 bg-havilah-900 transition-all duration-300 lg:block ${
            scrolled ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'
          }`}
        >
          <div className="container-x flex h-10 items-center justify-between text-sm text-cream-200">
            <span className="flex items-center gap-2">
              <Heart className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
              {SITE.foundedNote}
            </span>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 font-semibold transition-colors hover:text-gold-300"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="container-x" aria-label="Main navigation">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3" aria-label={`${SITE.name} home`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-havilah-800 text-gold-400 shadow-md transition-transform group-hover:scale-105">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-havilah-900">HAVILAH</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold-600">
                  Cottage Home Care
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    aria-current={isActive(link.to) ? 'page' : undefined}
                    className={`rounded-lg px-3.5 py-2 text-sm font-bold transition-colors ${
                      isActive(link.to)
                        ? 'text-havilah-900 bg-havilah-50'
                        : 'text-charcoal-600 hover:text-havilah-700 hover:bg-havilah-50/50'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="/request-care" className="btn btn-primary">
                Request Care
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-havilah-900 transition-colors hover:bg-havilah-50 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-menu">
          <div
            className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm animate-fade-in-simple"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-cream-50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-havilah-100 px-6 py-5">
              <span className="font-display text-lg font-bold text-havilah-900">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-havilah-900 hover:bg-havilah-50"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={`block rounded-lg px-4 py-3 text-base font-bold transition-colors ${
                      isActive(link.to)
                        ? 'bg-havilah-50 text-havilah-900'
                        : 'text-charcoal-700 hover:bg-havilah-50/50 hover:text-havilah-700'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="border-t border-havilah-100 px-4 py-4">
              <Link to="/request-care" className="btn btn-primary w-full">
                Request Care
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg border-2 border-havilah-200 px-4 py-3 text-base font-bold text-havilah-700 transition-colors hover:bg-havilah-50"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
