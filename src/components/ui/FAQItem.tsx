import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-bold text-havilah-900">{question}</span>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-gold-600 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open && (
        <div className="px-6 pb-5 animate-fade-in-simple">
          <p className="text-charcoal-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
