import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Landmark, MapPin, Route, Shirt } from 'lucide-react';
import PageCover from '@/components/PageCover';
import PlaceCard from '@/components/PlaceCard';
import PlanningBanner from '@/components/PlanningBanner';
import TourCard from '@/components/TourCard';
import { trailTours } from '@/lib/data';
import { getDestination, trailRegions } from '@/lib/places';

export const metadata: Metadata = {
  title: 'Sri Lanka Ramayana Trail & Ravana Sites',
  description: 'Explore the Sri Lanka Ramayana Trail from Koneswaram and Seetha Amman to Ravana Falls and Cave, with 5-day and 9-day private itineraries.',
  alternates: { canonical: '/ramayana-trail' },
  openGraph: { images: [{ url: '/images/koneswaram-reference.webp', alt: 'Shiva statue on Swami Rock, Trincomalee' }] },
};

export default function RamayanaTrailPage() {
  return (
    <>
      <PageCover label="Sri Lanka pilgrimage journeys" title={<>The Ramayana<br /><em className="text-yellow">&amp; Ravana Trail.</em></>} description="Visit sacred temples, highland landscapes and coastal sites linked in Sri Lankan tradition with Rama, Sita, Hanuman and Ravana." image="/images/koneswaram-reference.webp" position="50% 26%">
        <a className="btn-yellow" href="#trail-stops">Browse trail stops <ArrowDown size={16} /></a>
        <a className="btn-glass" href="#trail-itineraries">View itineraries <ArrowUpRight size={16} /></a>
      </PageCover>

      <section className="border-b border-deep/10 bg-white">
        <div className="container-main grid gap-6 py-9 sm:py-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-12">
          <div>
            <span className="eyebrow">Traditions of the trail</span>
            <h2 className="heading">An epic told <em className="text-navy">through places.</em></h2>
          </div>
          <div>
            <p className="section-copy">The Ramayana is a Hindu epic. On this route, local and devotional traditions connect scenes from the epic with particular Sri Lankan places. The trail brings those stories together with visits to living places of worship and landscapes that have their own histories.</p>
            <a href="https://www.srilanka.travel/ramayanaya/places.php" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-navy hover:underline">Sri Lanka Tourism’s Ramayana guide <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="trail-stops" className="section-space bg-cream">
        <div className="container-main">
          <span className="eyebrow">Plan your route</span>
          <h2 className="heading">Places along <em className="text-navy">the trail.</em></h2>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {trailRegions.map((group, index) => <a href={`#trail-region-${index + 1}`} key={group.name} className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 text-[11px] font-semibold text-navy hover:border-navy"><MapPin size={13} />{group.name}</a>)}
          </div>
          <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-14">
            {trailRegions.map((group, index) => (
              <div key={group.name} id={`trail-region-${index + 1}`}>
                <h3 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-deep sm:text-xl"><MapPin size={19} className="text-navy" />{group.name}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {group.ids.map((id) => <PlaceCard key={id} place={getDestination(id)!} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trail-itineraries" className="section-space">
        <div className="container-main">
          <span className="eyebrow">Private pilgrimages</span>
          <h2 className="heading">Two ways <em className="text-navy">to follow it.</em></h2>
          <div className="mt-7 grid gap-5 sm:mt-9 md:grid-cols-2">
            {trailTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-deep/10 bg-cream">
        <div className="container-main py-9 sm:py-12">
          <h2 className="heading">Before you visit.</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { icon: Shirt, title: 'Dress for temple visits', text: 'Keep shoulders and knees covered, remove shoes where asked and follow temple photography guidance.' },
              { icon: Landmark, title: 'Plan around worship', text: 'Check opening and puja times with your guide. Festivals and special ceremonies can affect entry and travel time.' },
              { icon: Route, title: 'Choose a comfortable pace', text: 'Some sites involve steps or uneven ground. Tell us about mobility needs and the visits that matter most to you.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <Icon size={22} className="text-navy" /><h3 className="mt-3 font-semibold text-deep">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PlanningBanner title="Plan your pilgrimage." description="Share your preferred temples, travel dates and group size. We’ll help arrange the stops around your schedule." />
    </>
  );
}
