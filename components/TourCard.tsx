import Link from 'next/link';
import { ArrowUpRight, Clock3, Route } from 'lucide-react';
import type { Tour } from '@/lib/data';
import Photo from './Photo';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep/10 bg-white shadow-sm transition-shadow hover:shadow-lux">
      <Link href={`/packages/${tour.slug}`} className="flex h-full flex-col rounded-2xl outline-offset-[-4px]">
        <div className="relative aspect-[1.65] overflow-hidden bg-navy">
          <Photo src={tour.hero} alt="" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 48vw, 32vw" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-deep"><Clock3 size={13} className="text-navy" />{tour.duration} days · {tour.nights} nights</span>
        </div>
        <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
          <span className="text-[10px] font-bold uppercase tracking-[.15em] text-navy">{tour.eyebrow}</span>
          <h3 className="mt-2 font-display text-[36px] leading-none text-deep lg:text-[41px]">{tour.title}</h3>
          <p className="mt-3 text-[13px] leading-6 text-slate-600">{tour.description}</p>
          <p className="mb-4 mt-3 flex items-start gap-1.5 text-[11px] font-semibold leading-5 text-slate-600"><Route size={14} className="mt-0.5 shrink-0 text-navy" />{tour.route.slice(0, 3).join(' · ')}</p>
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <span className="text-xs font-bold text-navy">View itinerary</span>
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-cream text-navy transition-colors group-hover:bg-yellow group-hover:text-deep"><ArrowUpRight size={17} /></span>
          </div>
        </div>
      </Link>
    </article>
  );
}
