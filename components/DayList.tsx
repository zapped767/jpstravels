'use client';

import { useId, useState } from 'react';
import { Check, ChevronDown, MapPin, Moon } from 'lucide-react';
import type { TourDay } from '@/lib/data';
import Photo from './Photo';

export default function DayList({ days }: { days: TourDay[] }) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="grid gap-3">
      {days.map((day, index) => {
        const open = openDay === index;
        const panelId = `${id}-day-${index + 1}`;
        return (
          <article key={day.title} className={`overflow-hidden rounded-2xl border bg-white ${open ? 'border-navy/30 shadow-sm' : 'border-slate-200'}`}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenDay(open ? null : index)} className="flex w-full items-center justify-between gap-3 rounded-2xl p-3.5 text-left outline-offset-[-4px] sm:gap-4 sm:p-5">
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className={`grid size-[47px] shrink-0 place-content-center rounded-xl text-center font-semibold sm:size-14 ${open ? 'bg-navy text-white' : 'bg-cream text-navy'}`}>
                    <span className="text-[9px] uppercase tracking-[.15em]">Day</span>
                    <span className="text-lg leading-none sm:text-xl">{index + 1}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-navy"><MapPin size={12} className="shrink-0" />{day.place}</span>
                    <span className="mt-1 block text-sm font-semibold leading-5 text-deep sm:text-base">{day.title}</span>
                  </span>
                </span>
                <ChevronDown aria-hidden="true" size={19} className={`shrink-0 text-navy transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div id={panelId} hidden={!open} className="px-4 pb-5 sm:px-5 sm:pb-6">
              {open && (
                <>
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl bg-navy sm:h-64"><Photo src={day.image} alt="" className="object-cover" sizes="(max-width: 1023px) 91vw, 57vw" /></div>
                  <p className="text-sm leading-7 text-slate-700">{day.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {day.highlights.map((item) => <li key={item} className="flex items-center gap-1.5 rounded-full bg-cream px-3 py-2 text-[11px] font-medium text-deep"><Check size={13} className="shrink-0 text-navy" />{item}</li>)}
                  </ul>
                  <p className="mt-4 flex items-center gap-2 text-xs text-slate-600"><Moon size={15} className="text-navy" />Overnight · {day.overnight}</p>
                </>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
