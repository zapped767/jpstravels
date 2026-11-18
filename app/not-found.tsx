import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-cream text-center">
      <div className="container-main py-24 sm:py-32">
        <span className="eyebrow">Page unavailable</span>
        <h1 className="heading">Page not found.</h1>
        <p className="mt-5 text-sm leading-7 text-slate-600">Browse the destination guide to find your next stop in Sri Lanka.</p>
        <Link href="/destinations" className="btn-blue mt-6">Explore destinations <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}
