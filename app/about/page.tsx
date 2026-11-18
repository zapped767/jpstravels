import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Compass, HeartHandshake, Route } from 'lucide-react';
import PageCover from '@/components/PageCover';
import PlanningBanner from '@/components/PlanningBanner';

export const metadata: Metadata = {
  title: 'About JPS Travels Sri Lanka',
  description: 'Meet JPS Travels, a Kurunegala-based team helping travellers plan private Sri Lanka trips and pilgrimage itineraries.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageCover label="JPS Travels · Kurunegala, Sri Lanka" title={<>About <em className="text-yellow">JPS Travels.</em></>} description="We help you plan a private Sri Lanka trip around the places you want to experience and the pace you want to travel." image="/images/negombo.webp" position="50% 53%">
        <Link href="/contact" className="btn-yellow">Talk to our team <ArrowUpRight size={16} /></Link>
      </PageCover>
      <section className="section-space">
        <div className="container-main">
          <h2 className="heading">How we plan <em className="text-navy">your trip.</em></h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3 lg:mt-9 lg:gap-5">
            {[
              { icon: Compass, title: 'Choose your places', text: 'Start with a heritage site, a beach, a national park or the temples you want to visit on the Ramayana trail.' },
              { icon: Route, title: 'Shape the route', text: 'We arrange the stops around your flight times, the pace that suits your group and the number of days you have.' },
              { icon: HeartHandshake, title: 'Confirm the details', text: 'We prepare a proposal with transport, accommodation preferences, optional experiences and confirmed pricing.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-cream p-5 sm:p-7">
                <span className="grid size-11 place-items-center rounded-full bg-yellow text-deep"><Icon size={21} /></span>
                <h3 className="mt-4 font-display text-[34px] leading-none text-deep">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PlanningBanner />
    </>
  );
}
