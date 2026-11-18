import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Photo from './Photo';

export default function Hero() {
  return (
    <section className="on-dark relative isolate flex min-h-[560px] items-end overflow-hidden bg-deep text-white sm:min-h-[650px] sm:items-center xl:min-h-[min(720px,calc(100svh-83px))]">
      <Photo src="/images/sigiriya-aerial.webp" alt="Aerial view of Sigiriya Rock Fortress and the forest canopy" className="object-cover object-[51%_center] sm:object-center" sizes="100vw" priority />
      <div aria-hidden="true" className="hero-tint absolute inset-0" />
      <div className="container-main relative py-12 sm:py-20 lg:py-[94px]">
        <div className="hero-enter max-w-3xl">
          <div className="eyebrow !mb-5 !text-yellow"><span className="h-px w-7 bg-current" /> Private Sri Lanka tours</div>
          <h1 className="font-display text-[clamp(4.4rem,10.75vw,10.65rem)] leading-[.82] tracking-[-.045em]">
            Discover<br /><em className="text-yellow">Sri Lanka.</em>
          </h1>
          <p className="mt-6 max-w-[390px] text-sm leading-7 text-white sm:mt-7 sm:text-[15px]">Travel from ancient kingdoms and Ramayana temples to tea country, wildlife parks and the Indian Ocean.</p>
          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            <Link className="btn-yellow" href="/destinations">Explore destinations <ArrowUpRight size={16} /></Link>
            <Link className="btn-glass" href="/ramayana-trail">Ramayana Trail <ArrowRight size={16} /></Link>
          </div>
        </div>
        <Link href="/destinations/sigiriya" className="absolute bottom-9 right-12 hidden items-center gap-3 rounded-full border border-white/35 bg-deep/65 py-2.5 pl-2.5 pr-4 text-white backdrop-blur-sm transition-colors hover:bg-deep md:inline-flex">
          <span className="grid size-9 place-items-center rounded-full bg-yellow text-deep"><MapPin size={17} /></span>
          <span><span className="block text-[11px] font-bold">Sigiriya Rock Fortress</span><span className="block text-[10px] text-blue-100">Cultural Triangle</span></span>
          <ArrowUpRight size={14} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
