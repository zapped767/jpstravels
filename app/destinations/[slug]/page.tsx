import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Compass, MapPin, MessageCircle } from 'lucide-react';
import PageCover from '@/components/PageCover';
import Photo from '@/components/Photo';
import PlaceCard from '@/components/PlaceCard';
import { destinations, getDestination } from '@/lib/places';
import { quote } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((place) => ({ slug: place.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = getDestination((await params).slug);
  if (!place) notFound();

  return {
    title: `${place.name}, Sri Lanka`,
    description: place.summary,
    alternates: { canonical: `/destinations/${place.id}` },
    ...(place.image ? { openGraph: { images: [{ url: place.image, alt: place.imageAlt }] } } : {}),
  };
}

export default async function DestinationPage({ params }: Props) {
  const place = getDestination((await params).slug);
  if (!place) notFound();

  const related = destinations.filter((item) => item.category === place.category && item.id !== place.id);
  const ordered = [...related.filter((item) => item.region === place.region), ...related.filter((item) => item.region !== place.region)];
  const trail = place.category === 'Ramayana';

  return (
    <>
      <PageCover label={place.region} title={place.name} description={place.summary} image={place.image} position={place.imagePosition}>
        <Link href={trail ? '/ramayana-trail#trail-stops' : '/destinations#destination-directory'} className="btn-glass"><ArrowLeft size={16} />{trail ? 'Back to the trail' : 'All destinations'}</Link>
      </PageCover>
      <section className="section-space bg-white">
        <div className="container-main grid items-start gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,.85fr)] lg:gap-12">
          <div>
            <span className="eyebrow">{place.category}</span>
            <h2 className="heading">What to see.</h2>
            <p className="section-copy mt-5">{place.details}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {place.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 rounded-xl bg-cream p-4 text-sm font-medium leading-6 text-deep"><MapPin size={16} className="mt-1 shrink-0 text-navy" />{highlight}</li>
              ))}
            </ul>
            {place.gallery?.map((item) => (
              <figure key={item.image} className="mt-7 overflow-hidden rounded-2xl border border-slate-100 bg-cream">
                <div className="relative h-[min(65vw,400px)]"><Photo src={item.image} alt={item.alt} className="object-contain" sizes="(max-width: 1023px) 92vw, 55vw" /></div>
                <figcaption className="px-4 py-3 text-xs text-slate-600">{item.alt}</figcaption>
              </figure>
            ))}
          </div>
          <aside className="rounded-2xl border border-deep/10 bg-cream p-5 sm:p-7 lg:sticky lg:top-[107px]">
            <div className="grid size-11 place-items-center rounded-full bg-yellow text-deep"><Compass size={22} /></div>
            <h2 className="mt-4 font-display text-[38px] leading-none text-deep">Before you visit.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{place.tip}</p>
            <a href={quote(place.name)} target="_blank" rel="noreferrer" className="btn-blue mt-6"><MessageCircle size={16} />Add to my trip <ArrowUpRight size={14} /></a>
          </aside>
        </div>
      </section>
      <section className="section-space bg-cream">
        <div className="container-main">
          <h2 className="heading mb-6 sm:mb-8">{trail ? <>More <em className="text-navy">trail stops.</em></> : <>Keep <em className="text-navy">exploring.</em></>}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {ordered.slice(0, 3).map((item) => <PlaceCard key={item.id} place={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
