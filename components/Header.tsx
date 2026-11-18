'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Ramayana Trail', href: '/ramayana-trail' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Our Story', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const open = openFor === pathname;

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenFor(null);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-deep/5 bg-white/95 backdrop-blur-xl">
      <div className="container-main flex h-[70px] items-center justify-between gap-4 lg:h-[83px]">
        <Link href="/" onClick={() => setOpenFor(null)} aria-label="JPS Travels home" className="flex shrink-0 items-center gap-2.5">
          <Image src="/images/jps-mark.webp" width={77} height={51} alt="" className="h-auto w-[62px] object-contain sm:w-[70px]" priority />
          <div className="border-l border-slate-200 pl-2.5 leading-tight">
            <span className="block text-base font-bold tracking-tight text-deep sm:text-[18px]">JPS <span className="text-navy">Travels</span></span>
            <span className="mt-0.5 block text-[8px] font-semibold uppercase tracking-[.21em] text-slate-600">Sri Lanka</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-[clamp(13px,2vw,30px)] lg:flex" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} className={`relative py-3 text-[12px] font-semibold transition-colors hover:text-navy ${isActive(href) ? 'text-navy after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:rounded-full after:bg-yellow' : 'text-slate-700'}`}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-yellow hidden lg:inline-flex">Plan my trip <ArrowUpRight size={16} /></Link>
        <button ref={menuButton} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpenFor(open ? null : pathname)} className="grid size-11 place-items-center rounded-full border border-slate-200 text-deep lg:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <nav id="mobile-nav" hidden={!open} aria-label="Mobile navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-70px)] overflow-auto border-t border-slate-200 bg-white shadow-lux lg:hidden">
        <div className="container-main pb-5 pt-1">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={() => setOpenFor(null)} className={`flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold ${isActive(href) ? 'text-navy' : 'text-deep'}`}>
              {label} <ArrowUpRight size={15} />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpenFor(null)} className="btn-yellow mt-4 w-full">Plan my trip <ArrowUpRight size={16} /></Link>
        </div>
      </nav>
    </header>
  );
}
