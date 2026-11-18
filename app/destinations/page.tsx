import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import DestinationGrid from '@/components/DestinationGrid';
import PageCover from '@/components/PageCover';
import PlanningBanner from '@/components/PlanningBanner';
import { destinations } from '@/lib/places';

export const metadata: Metadata = {
  title: 'Best Places to Visit in Sri Lanka',
  description: 'Explore Sri Lanka’s heritage sites, hills, beaches, wildlife parks and Ramayana destinations. Search by place or region.',
  alternates: { canonical: '/destinations' },
};

export default function DestinationsPage() {
  return (
    <>
      <PageCover label="Sri Lanka destinations" title={<>Find your next <em className="text-yellow">stop.</em></>} description="Explore rock fortresses, temples, highland trails and coastlines. Filter by experience or search for a place you already have in mind." image="/images/ella.webp" position="50% 46%">
        <a href="#destination-directory" className="btn-yellow">Browse places <ArrowDown size={16} /></a>
        <Link className="btn-glass" href="/ramayana-trail">Ramayana Trail <ArrowUpRight size={16} /></Link>
      </PageCover>
      <section className="section-space bg-cream" id="destination-directory">
        <div className="container-main">
          <h2 className="heading mb-6">Explore by interest.</h2>
          <DestinationGrid places={destinations} />
        </div>
      </section>
      <PlanningBanner />
    </>
  );
}
