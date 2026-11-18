'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { categories, type Destination } from '@/lib/places';
import PlaceCard from './PlaceCard';

const filters = ['All places', ...categories] as const;
const pageSize = 12;

export default function DestinationGrid({ places }: { places: Destination[] }) {
  const [active, setActive] = useState<typeof filters[number]>('All places');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(pageSize);
  const term = query.trim().toLowerCase();
  const selected = places.filter((place) => (
    (active === 'All places' || place.category === active) &&
    (!term || [place.name, place.region, place.category, ...(place.aliases ?? []), ...place.highlights].some((value) => value.toLowerCase().includes(term)))
  ));

  const reset = () => {
    setActive('All places');
    setQuery('');
    setLimit(pageSize);
  };

  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 lg:flex lg:items-center lg:justify-between lg:gap-5">
        <div className="filter-track flex gap-1.5 overflow-x-auto pb-2 lg:pb-0" role="group" aria-label="Filter destinations">
          {filters.map((filter) => (
            <button type="button" key={filter} aria-pressed={active === filter} onClick={() => { setActive(filter); setLimit(pageSize); }} className={`min-h-11 shrink-0 rounded-full px-4 text-xs font-semibold outline-offset-[-3px] transition-colors lg:px-3 xl:px-4 ${active === filter ? 'bg-navy text-white focus-visible:outline-white' : 'bg-cream text-deep hover:bg-blue-100'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div className="relative mt-2 flex min-w-0 items-center lg:mt-0 lg:w-[280px]">
          <Search size={17} aria-hidden="true" className="pointer-events-none absolute left-3.5 text-navy" />
          <input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setLimit(pageSize); }} aria-label="Search destinations" placeholder="Search by place or region" className="w-full rounded-full border border-slate-200 bg-cream py-3 pl-10 pr-10 text-base text-deep placeholder:text-slate-500 [&::-webkit-search-cancel-button]:hidden lg:text-xs" />
          {query && <button type="button" aria-label="Clear search" onClick={() => { setQuery(''); setLimit(pageSize); }} className="absolute right-1 grid size-9 place-items-center rounded-full text-slate-600 hover:bg-blue-100"><X size={15} /></button>}
        </div>
      </div>
      <p role="status" className="mb-4 mt-6 text-xs font-medium text-slate-600">
        {selected.length > limit ? `Showing ${limit} of ${selected.length} places` : `${selected.length} ${selected.length === 1 ? 'place' : 'places'} found`}
      </p>
      {selected.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {selected.slice(0, limit).map((place) => <PlaceCard key={place.id} place={place} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-12">
          <h3 className="font-display text-4xl text-deep">No places found</h3>
          <p className="mt-2 text-sm text-slate-600">Try a different search or clear your filters.</p>
          <button type="button" className="btn-outline mt-5" onClick={reset}>Clear filters</button>
        </div>
      )}
      {selected.length > limit && (
        <div className="mt-7 text-center">
          <button type="button" onClick={() => setLimit((count) => count + pageSize)} className="btn-outline">Show more places</button>
        </div>
      )}
    </>
  );
}
