import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
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
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-5 sm:px-6 sm:pt-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-35"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(6,182,212,.55), transparent 62%)' }}
      />
      <div className="relative mx-auto w-full max-w-xl">
        <Link
          to="/"
          className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          NomadicZack
        </Link>

        <header className="mb-6 text-center">
          <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-brand-accent/60 bg-brand-surface shadow-2xl shadow-cyan-500/20">
            <img
              src="/profile_photo.jpg"
              alt="Zack"
              className="h-full w-full object-cover"
              style={{ objectPosition: '15% 15%' }}
            />
          </div>
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-accent">
            Thanks for sharing the sky
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            What a <span className="text-gradient">ride.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
            I hope your adventure is something you never forget. Thanks for trusting the crew and me with your experience.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-brand-accent/35 bg-brand-accent/10 px-6 py-3 text-base font-black text-white shadow-lg shadow-cyan-500/10 transition-all hover:border-brand-accent/70 hover:bg-brand-accent/15 active:scale-[.98] sm:text-lg"
          >
            Review your jump with Zack!
          </a>
        </header>

        <section className="card mb-5 overflow-hidden p-5 shadow-2xl sm:p-7" aria-labelledby="tip-heading">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-400/10 text-pink-300 ring-1 ring-pink-300/20">
              <Heart size={25} aria-hidden="true" />
            </div>
            <div>
              <h2 id="tip-heading" className="text-xl font-black text-white">Leave a tip</h2>
              <p className="mt-1 text-sm leading-5 text-slate-400">
                Tips are always appreciated and never expected. Choose whichever app is easiest for you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PAYMENT_LINKS.map(({ name, url, color, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[.98]"
                style={{ borderColor: `${color}35` }}
                aria-label={`Tip with ${name}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30">
                  <img src={icon} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-sm text-white sm:text-base">{name}</strong>
                </span>
                <ExternalLink size={13} className="shrink-0 text-slate-600 transition-colors group-hover:text-slate-300" aria-hidden="true" />
              </a>
            ))}

            <div className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30 text-white">
                <img src="/payment-icons/apple.svg" alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block text-sm text-white sm:text-base">Apple Cash</strong>
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-3 text-xs leading-5 text-slate-400">
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
