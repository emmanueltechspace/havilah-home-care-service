import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  relationship: string;
  assistanceType: string;
  timeframe: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialData: FormData = {
  name: '',
  phone: '',
  email: '',
  preferredContact: '',
  relationship: '',
  assistanceType: '',
  timeframe: '',
  message: '',
};

const contactOptions = ['Phone', 'Email', 'Either'];
const relationshipOptions = [
  'Self',
  'Spouse / Partner',
  'Parent',
  'Grandparent',
  'Sibling',
  'Other Family Member',
  'Friend',
  'Other',
];
const assistanceOptions = [
  'Personal Care',
  'Companion Care',
  'Homemaker Services',
  'Respite Care',
  'Medication Reminders',
  'Specialized Care Support',
  'Not Sure Yet',
];
const timeframeOptions = [
  'Immediately',
  'Within 1-2 Weeks',
  'Within 1 Month',
  'Just Exploring Options',
];

export function RequestCareForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!data.name.trim()) {
      next.name = 'Please enter your name.';
    } else if (data.name.trim().length < 2) {
      next.name = 'Name must be at least 2 characters.';
    }

    if (!data.phone.trim()) {
      next.phone = 'Please enter a phone number.';
    } else if (!/^[\d\s\-\(\)\.]{10,}$/.test(data.phone.trim())) {
      next.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }

    if (!data.preferredContact) {
      next.preferredContact = 'Please select a preferred contact method.';
    }

    if (!data.assistanceType) {
      next.assistanceType = 'Please select the type of assistance requested.';
    }

    if (!data.timeframe) {
      next.timeframe = 'Please select a preferred timeframe.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('care_inquiries').insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim() || null,
        preferred_contact: data.preferredContact,
        relationship: data.relationship || null,
        assistance_type: data.assistanceType,
        timeframe: data.timeframe,
        message: data.message.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setData(initialData);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center md:p-12" role="status" aria-live="polite">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-havilah-900">Thank You for Reaching Out</h3>
        <p className="mx-auto mt-4 max-w-md text-charcoal-600">
          Your inquiry has been received. A member of our team will contact you soon to
 discuss your family's care needs. We are honored you chose HAVILAH.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-outline mt-8"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 md:p-10">
      {status === 'error' && (
        <div
          className="mb-6 flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span>
            Something went wrong while submitting your inquiry. Please try again, or call
 us directly at 210-277-8888.
          </span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className="label-field">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="input-field"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" className="error-text">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label-field">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="input-field"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            autoComplete="tel"
            placeholder="210-555-1234"
          />
          {errors.phone && (
            <p id="phone-error" className="error-text">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="label-field">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="input-field"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="error-text">{errors.email}</p>
          )}
        </div>

        {/* Preferred contact */}
        <div>
          <label htmlFor="preferredContact" className="label-field">
            Preferred Contact Method <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="preferredContact"
            value={data.preferredContact}
            onChange={(e) => updateField('preferredContact', e.target.value)}
            className="input-field"
            aria-required="true"
            aria-invalid={!!errors.preferredContact}
            aria-describedby={errors.preferredContact ? 'contact-error' : undefined}
          >
            <option value="">Select a method</option>
            {contactOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.preferredContact && (
            <p id="contact-error" className="error-text">{errors.preferredContact}</p>
          )}
        </div>

        {/* Relationship */}
        <div>
          <label htmlFor="relationship" className="label-field">
            Who Needs Care / Relationship
          </label>
          <select
            id="relationship"
            value={data.relationship}
            onChange={(e) => updateField('relationship', e.target.value)}
            className="input-field"
          >
            <option value="">Select a relationship</option>
            {relationshipOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Assistance type */}
        <div className="sm:col-span-2">
          <label htmlFor="assistanceType" className="label-field">
            General Assistance Requested <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="assistanceType"
            value={data.assistanceType}
            onChange={(e) => updateField('assistanceType', e.target.value)}
            className="input-field"
            aria-required="true"
            aria-invalid={!!errors.assistanceType}
            aria-describedby={errors.assistanceType ? 'assistance-error' : undefined}
          >
            <option value="">Select a service type</option>
            {assistanceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.assistanceType && (
            <p id="assistance-error" className="error-text">{errors.assistanceType}</p>
          )}
        </div>

        {/* Timeframe */}
        <div className="sm:col-span-2">
          <fieldset>
            <legend className="label-field">
              Preferred Timeframe <span className="text-red-500" aria-hidden="true">*</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {timeframeOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    data.timeframe === opt
                      ? 'border-havilah-600 bg-havilah-50 text-havilah-900'
                      : 'border-charcoal-200 text-charcoal-600 hover:border-havilah-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeframe"
                    value={opt}
                    checked={data.timeframe === opt}
                    onChange={(e) => updateField('timeframe', e.target.value)}
                    className="h-4 w-4 accent-havilah-700"
                    aria-required="true"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>
          {errors.timeframe && (
            <p className="error-text">{errors.timeframe}</p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="label-field">
            Additional Message
          </label>
          <textarea
            id="message"
            value={data.message}
            onChange={(e) => updateField('message', e.target.value)}
            className="input-field min-h-[120px] resize-y"
            rows={5}
            placeholder="Tell us a bit about your loved one's needs, schedule preferences, or any questions you have."
          />
        </div>

        {/* Spam protection placeholder (honeypot) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website (leave blank)</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal-500">
          <span className="text-red-500">*</span> Required fields. Your information is kept
 confidential.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary btn-lg w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              Submit Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
