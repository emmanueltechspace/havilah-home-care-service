import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ eyebrow, title, subtitle, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-havilah-900 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-havilah-800 via-havilah-900 to-havilah-950" aria-hidden="true" />
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-cream-300">
              <li>
                <Link to="/" className="transition-colors hover:text-gold-300">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-gold-500" aria-hidden="true" />
                  {crumb.to ? (
                    <Link to={crumb.to} className="transition-colors hover:text-gold-300">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-cream-100">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow mb-3 text-gold-300">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-cream-50 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
