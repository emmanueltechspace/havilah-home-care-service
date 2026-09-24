import { HeartHandshake, UserCheck, Crown, ShieldCheck } from 'lucide-react';
import { TRUST_STRIP } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake,
  UserCheck,
  Crown,
  ShieldCheck,
};

export function TrustStrip() {
  return (
    <section className="border-y border-havilah-100 bg-white" aria-label="Our values">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4">
          {TRUST_STRIP.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 px-4 py-8 text-center md:flex-row md:gap-4 md:text-left"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-havilah-50 text-havilah-700">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </span>
                <span className="text-base font-bold text-havilah-900">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
