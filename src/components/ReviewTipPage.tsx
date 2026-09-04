import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  Heart,
} from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJEQxxI3i1rYkRK7qE95x45Oo';

const PAYMENT_LINKS = [
  {
    name: 'Venmo',
    url: 'https://www.venmo.com/u/NomadicZack',
    color: '#008CFF',
    icon: '/payment-icons/venmo.svg',
  },
  {
    name: 'Cash App',
    url: 'https://cash.app/$NomadicZack',
    color: '#00D632',
    icon: '/payment-icons/cashapp.svg',
  },
  {
    name: 'PayPal',
    url: 'https://www.paypal.biz/TerminalNomad',
    color: '#38A1F3',
    icon: '/payment-icons/paypal.svg',
  },
  {
    name: 'Zelle',
    url: 'https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiWmFjaGVyeSBLcmlldGVuc3RlaW4iLCJlbWFpbCI6ImFjdGFsaXZlQGdtYWlsLmNvbSJ9',
    color: '#B982FF',
    icon: '/payment-icons/zelle.svg',
  },
  {
    name: 'Square',
    url: 'https://square.link/u/txX0xLNq',
    color: '#F8FAFC',
    icon: '/payment-icons/square.svg',
  },
];

export const ReviewTipPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Review & Tip | NomadicZack';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-3 sm:px-6 sm:pt-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-35"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(6,182,212,.55), transparent 62%)' }}
      />
      <div className="relative mx-auto w-full max-w-xl">
        <Link
          to="/"
          className="mb-2 inline-flex min-h-9 items-center gap-2 rounded-full px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:bg-white/5 hover:text-white sm:mb-5 sm:min-h-11"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          NomadicZack
        </Link>

        <header className="mb-4 text-center sm:mb-6">
          <div className="mx-auto mb-2 h-[8.75rem] w-[8.75rem] overflow-hidden rounded-full border-2 border-brand-accent/60 bg-brand-surface shadow-2xl shadow-cyan-500/20 sm:mb-4 sm:h-[10.5rem] sm:w-[10.5rem]">
            <img
              src="/profile_photo.jpg"
              alt="Zack"
              className="h-full w-full object-cover"
              style={{ objectPosition: '15% 15%' }}
            />
          </div>
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-accent sm:mb-2 sm:text-[11px] sm:tracking-[0.25em]">
            Thanks for sharing the sky
          </p>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            What a <span className="text-gradient">ride.</span>
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-5 text-slate-400 sm:mt-3 sm:text-base sm:leading-6">
            I hope your adventure is something you never forget. Thanks for trusting the crew and me with your experience.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-3 inline-flex min-h-11 items-center justify-center gap-1 rounded-full border border-brand-accent/35 bg-brand-accent/10 px-3 py-2 text-base font-black text-white shadow-lg shadow-cyan-500/10 transition-all hover:border-brand-accent/70 hover:bg-brand-accent/15 active:scale-[.98] sm:mt-5 sm:min-h-12 sm:gap-2 sm:px-5 sm:py-3 sm:text-lg"
          >
            <ChevronsRight
              size={20}
              className="shrink-0 animate-bounce-x text-brand-accent drop-shadow-[0_0_7px_rgba(34,211,238,0.8)] sm:h-6 sm:w-6"
              aria-hidden="true"
            />
            <span>Review your jump with</span>
            <span className="ml-1.5 font-mono text-lg font-black tracking-[0.08em] text-brand-accent drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] sm:text-xl">
              ZACK!
            </span>
            <ChevronsLeft
              size={20}
              className="shrink-0 animate-bounce-x-reverse text-brand-accent drop-shadow-[0_0_7px_rgba(34,211,238,0.8)] sm:h-6 sm:w-6"
              aria-hidden="true"
            />
          </a>
        </header>

        <section className="card mb-5 overflow-hidden p-4 shadow-2xl sm:p-7" aria-labelledby="tip-heading">
          <div className="mb-3 flex items-start gap-3 sm:mb-5 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-400/10 text-pink-300 ring-1 ring-pink-300/20 sm:h-12 sm:w-12 sm:rounded-2xl">
              <Heart size={21} aria-hidden="true" />
            </div>
            <div>
              <h2 id="tip-heading" className="text-lg font-black text-white sm:text-xl">Leave a tip</h2>
              <p className="mt-0.5 text-xs leading-4 text-slate-400 sm:mt-1 sm:text-sm sm:leading-5">
                <span className="block">Tips are appreciated and never expected.</span>
                <span className="block">Choose any payment method.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {PAYMENT_LINKS.map(({ name, url, color, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[.98] sm:min-h-20 sm:gap-3 sm:rounded-2xl sm:p-3"
                style={{ borderColor: `${color}35` }}
                aria-label={`Tip with ${name}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/30 sm:h-11 sm:w-11 sm:rounded-xl">
                  <img src={icon} alt="" className="h-5 w-5 object-contain sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-sm text-white sm:text-base">{name}</strong>
                </span>
                <ExternalLink size={12} className="shrink-0 text-slate-600 transition-colors group-hover:text-slate-300" aria-hidden="true" />
              </a>
            ))}

            <div className="flex min-h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 sm:min-h-20 sm:gap-3 sm:rounded-2xl sm:p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black/30 text-white sm:h-11 sm:w-11 sm:rounded-xl">
                <img src="/payment-icons/apple.svg" alt="" className="h-5 w-5 object-contain sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block text-sm text-white sm:text-base">Apple Cash</strong>
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-2.5 text-[11px] leading-4 text-slate-400 sm:mt-5 sm:gap-3 sm:p-3 sm:text-xs sm:leading-5">
            <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
            <p>Leaving a review and leaving a tip are completely separate. Both are always optional.</p>
          </div>
        </section>

        <p className="mt-7 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-700">
          Blue skies · NomadicZack
        </p>
      </div>
    </main>
  );
};
