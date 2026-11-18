import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import PageCover from '@/components/PageCover';
import photoCredits from '@/lib/photo-credits.json';

export const metadata: Metadata = {
  title: 'Photo Credits',
  description: 'Photography and licence information for JPS Travels’ Sri Lanka destination guide.',
  alternates: { canonical: '/photo-credits' },
};

function licenceLink(licence: string) {
  if (licence === 'Public domain') return null;
  if (licence === 'CC0') return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const [, kind, version] = licence.split(' ');
  return `https://creativecommons.org/licenses/${kind.toLowerCase()}/${version}/`;
}

export default function PhotoCreditsPage() {
  return (
    <>
      <PageCover label="JPS Travels" title="Photo credits." description="Photographers, source images and reuse licences for the destination guide." />
      <section className="section-space bg-cream">
        <div className="container-main max-w-5xl">
          <h2 className="heading">Destination photography.</h2>
          <p className="section-copy mt-4">Wikimedia Commons photographs have been resized and converted to WebP. The site may crop them to fit different screens. Reuse of those photos follows the licence stated for each original.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {photoCredits.map((photo) => {
              const href = licenceLink(photo.license);
              return (
                <li key={photo.file} className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 text-sm">
                  <a href={photo.source} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 break-words font-semibold text-navy hover:underline">{photo.title}<ArrowUpRight size={15} className="mt-0.5 shrink-0" /></a>
                  <p className="mt-1.5 break-words text-xs leading-6 text-slate-600">{photo.author} · {href ? <a href={href} target="_blank" rel="noreferrer" className="text-navy underline">{photo.license}</a> : photo.license}</p>
                </li>
              );
            })}
          </ul>
          <p className="section-copy mt-7">JPS supplied the logo and reference images for Sigiriya, Koneswaram, Seetha Amman Temple and Nallur. The supplied Nallur reference is included in the project and the destination page uses the credited Commons photograph.</p>
        </div>
      </section>
    </>
  );
}
