'use client';

import { useState, type FormEvent } from 'react';
import type { SiteContent } from '@/content/site';

type Status = 'idle' | 'sending' | 'success' | 'invalid' | 'error';

interface ContactFormProps {
  labels: SiteContent['contact']['form'];
}

const inputClass =
  'block h-11 w-full rounded-control border border-line bg-surface px-3 text-body text-ink placeholder:text-ink-muted focus-visible:border-primary';

export function ContactForm({ labels }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus(response.status === 400 ? 'invalid' : 'error');
      }
    } catch {
      setStatus('error');
    }
  }

  const message =
    status === 'success'
      ? labels.success
      : status === 'invalid'
        ? labels.invalid
        : status === 'error'
          ? labels.error
          : '';

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate={false}>
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-small font-medium text-ink">
          {labels.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-small font-medium text-ink">
          {labels.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={255}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-small font-medium text-ink">
          {labels.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className={`${inputClass} h-auto py-2.5`}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="honeypot" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-small ${status === 'success' ? 'text-success' : 'text-error'} ${message ? '' : 'sr-only'}`}
      >
        {message}
      </p>
    </form>
  );
}
