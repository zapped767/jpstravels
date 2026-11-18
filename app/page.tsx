import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Compass, MapPin, Route, UsersRound } from 'lucide-react';
import Hero from '@/components/Hero';
import Photo from '@/components/Photo';
import PlaceCard from '@/components/PlaceCard';
import TourCard from '@/components/TourCard';
import PlanningBanner from '@/components/PlanningBanner';
import { tours, trailTours } from '@/lib/data';
import { destinations, getDestination } from '@/lib/places';

export const metadata: Metadata = {
  title: 'Private Sri Lanka Tours & Ramayana Pilgrimages',
  alternates: { canonical: '/' },
};

const highlights = ['sigiriya', 'ella', 'galle', 'yala', 'jaffna', 'trinco'].map((id) => getDestination(id)!);
const journeys = [tours[1], trailTours[1], tours[2]];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-b border-deep/10 bg-cream">
        <div className="container-main grid grid-cols-2 gap-x-3 gap-y-4 py-5 sm:grid-cols-4 sm:gap-5 sm:py-6">
          {[
            { icon: MapPin, label: `${destinations.length} destinations`, href: '/destinations' },
            { icon: Compass, label: 'Ramayana pilgrimage', href: '/ramayana-trail' },
            { icon: Route, label: 'Day-by-day itineraries', href: '/packages' },
            { icon: UsersRound, label: 'Private trip planning', href: '/contact' },
          ].map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} className="group flex items-center gap-2 text-[10px] font-semibold leading-4 text-deep hover:text-navy sm:gap-2.5 sm:text-xs">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-100 text-navy transition-colors group-hover:bg-yellow sm:size-9"><Icon size={16} /></span>{label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section-space" id="discover">
        <div className="container-main">
          <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Explore the island</span>
              <h2 className="heading">Where to go <em className="text-navy">in Sri Lanka.</em></h2>
            </div>
            <Link href="/destinations" className="btn-outline shrink-0">All destinations <ArrowUpRight size={16} /></Link>
          </div>
          <div className="filter-track -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5">
            {highlights.map((place) => (
              <div key={place.id} className="w-[min(80vw,370px)] shrink-0 snap-center sm:w-auto">
                <PlaceCard place={place} sizes="(max-width: 639px) 80vw, (max-width: 1023px) 46vw, 31vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark bg-deep text-white">
        <div className="container-main grid items-stretch gap-6 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:py-16">
          <div className="order-2 flex flex-col justify-center pb-2 sm:pb-0 lg:order-none">
            <span className="eyebrow !text-yellow"><span className="h-px w-6 bg-current" />Pilgrimage & heritage</span>
            <h2 className="heading !text-white">The Ramayana<br /><em className="text-yellow">&amp; Ravana Trail.</em></h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100 sm:mt-6">Follow the stories of Rama, Sita, Hanuman and Ravana through cliff-top shrines, highland gardens and waterfalls. Start in Chilaw or spend more time among the temples around Nuwara Eliya and Ella.</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-blue-100 sm:mt-6">
              <span>Koneswaram Temple</span><span className="text-yellow" aria-hidden="true">·</span>
              <span>Seetha Amman Temple</span><span className="text-yellow" aria-hidden="true">·</span><span>Ravana Falls</span>
            </div>
            <div className="mt-7"><Link href="/ramayana-trail" className="btn-yellow">Explore the Ramayana Trail <ArrowUpRight size={16} /></Link></div>
          </div>
          <div className="grid h-[270px] grid-cols-[1.45fr_1fr] gap-2.5 sm:h-[360px] sm:gap-3 lg:h-[460px]">
            <div className="relative overflow-hidden rounded-2xl bg-navy">
              <Photo src="/images/koneswaram-reference.webp" alt="Shiva statue at Koneswaram Temple above the sea" className="object-cover object-[62%_center]" sizes="(max-width: 1023px) 56vw, 30vw" />
              <div className="card-tint absolute inset-0" aria-hidden="true" />
              <span className="absolute bottom-4 left-4 right-2 text-[10px] font-semibold text-white sm:bottom-5 sm:left-5 sm:text-xs">Koneswaram Temple, Trincomalee</span>
            </div>
            <div className="grid min-h-0 grid-rows-2 gap-2.5 sm:gap-3">
              <div className="relative overflow-hidden rounded-2xl bg-navy"><Photo src="/images/seetha-reference.webp" alt="Entrance to Seetha Amman Temple" className="object-cover object-[50%_43%]" sizes="(max-width: 1023px) 36vw, 19vw" /></div>
              <div className="relative overflow-hidden rounded-2xl bg-navy"><Photo src="/images/ravana-falls.webp" alt="Ravana Falls near Ella" className="object-cover object-[50%_40%]" sizes="(max-width: 1023px) 36vw, 19vw" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-cream">
        <div className="container-main">
          <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Private Sri Lanka itineraries</span>
              <h2 className="heading">Find <em className="text-navy">your journey.</em></h2>
            </div>
            <Link href="/packages" className="btn-outline shrink-0">All tour packages <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {journeys.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </div>
      </section>
      <PlanningBanner />
    </>
  );
}
