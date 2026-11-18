'use client';

import { ArrowUpRight } from 'lucide-react';
import { CONTACT, whatsapp } from '@/lib/data';
import type { FormEvent } from 'react';

export default function EnquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const message = [
      'Hello JPS Travels! I’d like to plan a Sri Lanka trip.',
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Travel dates: ${fields.get('dates') || 'Flexible'}`,
      `Travellers: ${fields.get('travellers')}`,
      `Trip notes: ${fields.get('message') || 'Please contact me to discuss my trip.'}`,
    ].join('\n');
    window.open(whatsapp(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lux sm:p-8">
      <h2 className="font-display text-[40px] leading-none text-deep">Tell us about your trip.</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-deep">Your name <span aria-hidden="true">*</span><input name="name" required maxLength={100} autoComplete="name" className="field" placeholder="Full name" /></label>
        <label className="text-xs font-semibold text-deep">Your email <span aria-hidden="true">*</span><input name="email" required type="email" autoComplete="email" className="field" placeholder="you@example.com" /></label>
        <label className="text-xs font-semibold text-deep">Preferred travel dates<input name="dates" maxLength={100} className="field" placeholder="e.g. 12–20 March" /></label>
        <label className="text-xs font-semibold text-deep">Number of travellers <span aria-hidden="true">*</span><input name="travellers" required type="number" min="1" max="40" defaultValue="2" className="field" /></label>
      </div>
      <label className="mt-4 block text-xs font-semibold text-deep">Trip notes<textarea name="message" rows={4} maxLength={3000} className="field resize-y" placeholder="Places, hotel preferences, budget or special requests" /></label>
      <button className="btn-yellow mt-5" type="submit">Continue to WhatsApp <ArrowUpRight size={16} /></button>
      <p className="mt-4 text-xs leading-6 text-slate-600">Review your message in WhatsApp before sending. You can also email <a className="break-words font-semibold text-navy underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p>
    </form>
  );
}
