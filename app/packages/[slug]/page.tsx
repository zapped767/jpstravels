import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, MessageCircle, X } from 'lucide-react';
import { tours, trailTours, quote } from '@/lib/data';
import PageCover from '@/components/PageCover';
import DayList from '@/components/DayList';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();
  return {
    title: `${tour.title} · ${tour.duration}-Day Sri Lanka Itinerary`,
    description: tour.description,
    alternates: { canonical: `/packages/${tour.slug}` },
    openGraph: { images: [{ url: tour.hero }] },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();
  const isTrail = trailTours.includes(tour);

  return (
    <>
      <PageCover label={tour.eyebrow} title={tour.title} description={tour.description} image={tour.hero} position={tour.heroPosition ?? "50% 46%"}>
        <Link href={isTrail ? '/ramayana-trail#trail-itineraries' : '/packages#island-journeys'} className="btn-glass"><ArrowLeft size={16} />{isTrail ? 'Ramayana itineraries' : 'All packages'}</Link>
        <span className="inline-flex items-center gap-2 px-2 text-xs font-semibold"><Clock3 size={16} className="text-yellow" />{tour.duration} days · {tour.nights} nights</span>
      </PageCover>
      <section className="section-space bg-cream">
        <div className="container-main grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(290px,350px)] lg:gap-10">
          <div className="min-w-0">
            <h2 className="heading">Your itinerary.</h2>
            <ul aria-label="Route overview" className="mt-5 flex flex-wrap gap-2">
              {tour.route.map((stop) => <li key={stop} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-deep"><MapPin size={13} className="text-navy" />{stop}</li>)}
            </ul>
            <p className="mb-6 mt-5 text-sm leading-7 text-slate-600">Open each day to see the suggested stops and overnight base. The route can be adjusted for flight times, temple schedules and the pace you prefer.</p>
            <DayList days={tour.days} />
            <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {[
                { title: 'Included in the itinerary', icon: Check, items: tour.included },
                { title: 'Quoted separately', icon: X, items: tour.excluded },
              ].map(({ title, icon: Icon, items }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="font-display text-3xl leading-none text-deep">{title}</h3>
                  <ul className="mt-4 grid gap-3">
                    {items.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-6 text-slate-700"><Icon size={15} className="mt-1 shrink-0 text-navy" />{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <aside aria-label="Request pricing" className="rounded-2xl border border-deep/10 bg-white p-5 shadow-lux sm:p-7 lg:sticky lg:top-[107px]">
            <div className="grid size-11 place-items-center rounded-full bg-yellow text-deep"><MessageCircle size={21} /></div>
            <h2 className="mt-4 font-display text-[39px] leading-none text-deep">Get a private quote.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Share your dates, group size and accommodation preferences for confirmed availability and pricing.</p>
            {tour.price !== null && (
              <div className="mt-5 rounded-xl bg-cream p-4 text-navy">
                <p className="text-[11px] font-semibold">Illustrative guide price per person</p>
                <p className="mt-1 text-2xl font-bold">${tour.price.toLocaleString('en-US')} <span className="text-xs font-semibold">USD</span></p>
              </div>
            )}
            <a href={quote(tour.title)} target="_blank" rel="noreferrer" className="btn-blue mt-6 w-full">Request a WhatsApp quote <ArrowUpRight size={16} /></a>
            <Link href="/contact" className="mt-4 block text-center text-xs font-semibold text-navy hover:underline">Use the trip enquiry form</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
