import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import PageCover from '@/components/PageCover';
import PlanningBanner from '@/components/PlanningBanner';
import TourCard from '@/components/TourCard';
import { tours, trailTours } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sri Lanka Tour Packages & Private Itineraries',
  description: 'Compare six private Sri Lanka tour itineraries, from culture and safaris to 5-day and 9-day Ramayana pilgrimages.',
  alternates: { canonical: '/packages' },
};

const islandTours = tours.filter((tour) => !trailTours.includes(tour));

export default function PackagesPage() {
  return (
    <>
      <PageCover label="Private Sri Lanka itineraries" title={<>Find <em className="text-yellow">your journey.</em></>} description="Compare day-by-day routes for Sri Lanka’s heritage, highlands, wildlife and coast, or choose a private Ramayana pilgrimage." image="/images/ella.webp" position="50% 50%">
        <a href="#island-journeys" className="btn-yellow">Island journeys <ArrowDown size={16} /></a>
        <a href="#pilgrimages" className="btn-glass">Ramayana pilgrimages <ArrowUpRight size={16} /></a>
      </PageCover>
      <section id="island-journeys" className="section-space bg-cream">
        <div className="container-main">
          <h2 className="heading">Island journeys.</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:mt-9">
            {islandTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </div>
      </section>
      <section id="pilgrimages" className="section-space">
        <div className="container-main">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading">Ramayana <em className="text-navy">pilgrimages.</em></h2>
            <Link href="/ramayana-trail" className="btn-outline">Explore the trail <ArrowUpRight size={16} /></Link>
          </div>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:mt-9">
            {trailTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </div>
      </section>
      <PlanningBanner />
    </>
  );
}
