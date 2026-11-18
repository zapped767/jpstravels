import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, whatsapp } from '@/lib/data';
import EnquiryForm from '@/components/EnquiryForm';
import PageCover from '@/components/PageCover';

export const metadata: Metadata = {
  title: 'Contact & Plan a Private Sri Lanka Tour',
  description: 'Contact JPS Travels in Kurunegala to plan a private Sri Lanka tour or Ramayana pilgrimage.',
  alternates: { canonical: '/contact' },
};

const methods = [
  { icon: Phone, label: 'Call', details: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  { icon: Mail, label: 'Email', details: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MessageCircle, label: 'WhatsApp', details: 'Chat with JPS Travels', href: whatsapp('Hello JPS Travels!') },
  { icon: MapPin, label: 'Office directions', details: CONTACT.address, href: CONTACT.map },
];

export default function ContactPage() {
  return (
    <>
      <PageCover label="Contact JPS Travels" title={<>Plan your <em className="text-yellow">Sri Lanka trip.</em></>} description="Tell us your dates, group size and the places you’d like to visit. We’ll help put the route together." />
      <section className="section-space bg-cream">
        <div className="container-main grid items-start gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div>
            <h2 className="heading">Get in touch.</h2>
            <ul className="mt-6 grid gap-3">
              {methods.map(({ icon: Icon, label, details, href }) => {
                const external = href.startsWith('https:');
                return (
                  <li key={label}>
                    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 hover:border-navy">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-yellow text-deep"><Icon size={17} /></span>
                      <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-deep">{label}</span><span className="mt-1 block break-words text-xs leading-5 text-slate-600">{details}</span></span>
                      <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-navy" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
