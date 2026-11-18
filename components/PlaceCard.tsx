import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Destination } from '@/lib/places';
import Photo from './Photo';

const cardSizes = '(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw';

export default function PlaceCard({ place, sizes = cardSizes }: { place: Destination; sizes?: string }) {
  return (
    <article className="group relative isolate h-full min-h-[300px] overflow-hidden rounded-2xl bg-deep text-white sm:min-h-[330px]">
      <Link href={`/destinations/${place.id}`} className="on-dark flex h-full min-h-[inherit] flex-col justify-end p-5 outline-offset-[-4px] sm:p-6">
        {place.image ? (
          <>
            <Photo src={place.image} alt="" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes={sizes} position={place.imagePosition} />
            <div aria-hidden="true" className="card-tint absolute inset-0" />
          </>
        ) : <div aria-hidden="true" className="trail-art absolute inset-0" />}
        <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.11em] text-deep sm:left-6 sm:top-6">{place.category}</span>
        <div className="relative flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 flex items-start gap-1.5 text-[10px] font-semibold leading-4 text-yellow"><MapPin size={13} className="mt-0.5 shrink-0" />{place.region}</p>
            <h3 className="max-w-[465px] font-display text-[clamp(2.1rem,3.2vw,3.05rem)] leading-[.98] tracking-[-.015em]">{place.name}</h3>
            <p className="mt-2 max-w-xs text-[11px] leading-5 text-white sm:text-xs">{place.summary}</p>
          </div>
          <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/50 text-white transition-colors group-hover:border-yellow group-hover:bg-yellow group-hover:text-deep sm:size-11"><ArrowUpRight size={17} /></span>
        </div>
      </Link>
    </article>
  );
}
