import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, whatsapp } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="on-dark bg-deep text-white">
      <div className="container-main py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_1fr]">
          <div>
            <Link href="/" className="inline-block text-lg font-bold">JPS <span className="text-yellow">Travels</span></Link>
            <p className="mt-4 max-w-sm font-display text-[42px] leading-[.98]">Private journeys <em className="text-yellow">across Sri Lanka.</em></p>
            <a href={whatsapp('Hello JPS Travels! I’d like to plan a Sri Lanka trip.')} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-yellow"><MessageCircle size={17} /> Chat on WhatsApp</a>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.17em] text-yellow">Explore</h2>
            <ul className="mt-4 grid gap-3 text-sm text-blue-100">
              <li><Link className="hover:text-white" href="/destinations">Destinations</Link></li>
              <li><Link className="hover:text-white" href="/ramayana-trail">Ramayana Trail</Link></li>
              <li><Link className="hover:text-white" href="/packages">Tour Packages</Link></li>
              <li><Link className="hover:text-white" href="/about">Our Story</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.17em] text-yellow">Contact JPS Travels</h2>
            <div className="mt-4 grid gap-4 text-sm leading-6 text-blue-100">
              <a href={CONTACT.map} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 hover:text-white"><MapPin size={17} className="mt-1 shrink-0 text-yellow" />{CONTACT.address}</a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 hover:text-white"><Phone size={16} className="shrink-0 text-yellow" />{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 break-all hover:text-white"><Mail size={17} className="shrink-0 text-yellow" />{CONTACT.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-5 text-xs text-blue-100">
          <span>© {new Date().getFullYear()} JPS Travels</span>
          <Link href="/photo-credits" className="inline-flex items-center gap-1.5 hover:text-yellow">Photo credits <ArrowUpRight size={13} /></Link>
        </div>
      </div>
    </footer>
  );
}
