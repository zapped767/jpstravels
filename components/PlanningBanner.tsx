import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function PlanningBanner({ title = 'Make the route yours.', description = 'Tell us where you want to go, when you’re travelling and who’s coming with you. We’ll help turn those ideas into a private Sri Lanka itinerary.' }: { title?: string; description?: string }) {
  return (
    <section className="bg-yellow">
      <div className="container-main flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center sm:gap-8 sm:py-12 lg:py-16">
        <div>
          <h2 className="heading">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-deep">{description}</p>
        </div>
        <Link href="/contact" className="btn-blue shrink-0">Plan my trip <ArrowUpRight size={17} /></Link>
      </div>
    </section>
  );
}
