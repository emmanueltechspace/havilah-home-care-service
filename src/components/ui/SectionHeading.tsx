interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? 'text-gold-300' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl md:text-4xl ${
          light ? 'text-cream-50' : 'text-havilah-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-cream-200' : 'text-charcoal-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
