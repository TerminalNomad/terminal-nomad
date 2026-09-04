import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  Copy,
  CreditCard,
  DollarSign,
  ExternalLink,
  Heart,
  RefreshCw,
  Smartphone,
  Square,
  Star,
  Wallet,
  Zap,
} from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJEQxxI3i1rYkRK7qE95x45Oo';

const REVIEW_PROMPTS = [
  'What part of the experience stood out most to you?',
  'How did the crew help you feel prepared for the jump?',
  'How did you feel before takeoff and after landing?',
  'What would you tell someone considering their first skydive?',
  'What made today feel especially memorable?',
];

const PAYMENT_LINKS = [
  {
    name: 'Venmo',
    detail: '@NomadicZack',
    url: 'https://www.venmo.com/u/NomadicZack',
    color: '#008CFF',
    icon: Wallet,
  },
  {
    name: 'Cash App',
    detail: '$NomadicZack',
    url: 'https://cash.app/$NomadicZack',
    color: '#00D632',
    icon: DollarSign,
  },
  {
    name: 'PayPal',
    detail: 'TerminalNomad',
    url: 'https://www.paypal.biz/TerminalNomad',
    color: '#38A1F3',
    icon: CreditCard,
  },
  {
    name: 'Zelle',
    detail: 'Open payment profile',
    url: 'https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiWmFjaGVyeSBLcmlldGVuc3RlaW4iLCJlbWFpbCI6ImFjdGFsaXZlQGdtYWlsLmNvbSJ9',
    color: '#B982FF',
    icon: Zap,
  },
  {
    name: 'Square',
    detail: 'Secure payment',
    url: 'https://square.link/u/txX0xLNq',
    color: '#F8FAFC',
    icon: Square,
  },
];

export const ReviewTipPage = () => {
  const [promptIndex, setPromptIndex] = useState(() => Math.floor(Math.random() * REVIEW_PROMPTS.length));
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);
  const draftRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Review & Tip | NomadicZack';
    return () => { document.title = previousTitle; };
  }, []);

  const nextPrompt = () => {
    setPromptIndex((current) => (current + 1) % REVIEW_PROMPTS.length);
  };

  const copyDraft = async () => {
    const text = draft.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      draftRef.current?.focus();
      draftRef.current?.select();
      document.execCommand('copy');
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

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
            I hope your adventure is something you never forget. Thanks for trusting the crew—and me—with your experience.
          </p>
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="text-slate-500">You jumped with</span>
            <strong className="font-mono text-white">Zack</strong>
          </div>
        </header>

        <section className="card mb-5 overflow-hidden p-5 shadow-2xl sm:p-7" aria-labelledby="review-heading">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/20">
              <Star size={25} fill="currentColor" aria-hidden="true" />
            </div>
            <div>
              <h2 id="review-heading" className="text-xl font-black text-white">Share your experience</h2>
              <p className="mt-1 text-sm leading-5 text-slate-400">
                An honest Google review helps future jumpers know what the experience is really like.
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 text-center font-black text-slate-950 shadow-lg transition-transform active:scale-[.98]"
          >
            <Star size={20} fill="currentColor" className="text-amber-500" aria-hidden="true" />
            Review Skydive Raleigh
            <ExternalLink size={16} className="opacity-50 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>

          <details className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <summary className="cursor-pointer list-none text-sm font-bold text-slate-200 marker:hidden">
              Want help getting started?
              <span className="float-right text-brand-accent">+</span>
            </summary>
            <div className="mt-4">
              <div className="mb-3 flex items-start justify-between gap-3 rounded-xl border border-brand-accent/15 bg-brand-accent/5 p-3">
                <p className="text-sm leading-5 text-slate-300">{REVIEW_PROMPTS[promptIndex]}</p>
                <button
                  type="button"
                  onClick={nextPrompt}
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-brand-accent transition-colors hover:bg-brand-accent/10"
                  aria-label="Show another writing prompt"
                >
                  <RefreshCw size={17} aria-hidden="true" />
                </button>
              </div>
              <label htmlFor="review-draft" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Draft in your own words
              </label>
              <textarea
                ref={draftRef}
                id="review-draft"
                value={draft}
                onChange={(event) => { setDraft(event.target.value); setCopied(false); }}
                rows={5}
                placeholder="Write whatever feels true about your experience…"
                className="w-full resize-y rounded-xl border border-white/10 bg-brand-dark/80 p-3 text-base leading-6 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-brand-accent/70"
              />
              <button
                type="button"
                onClick={copyDraft}
                disabled={!draft.trim()}
                className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 font-bold text-white transition-colors enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              >
                {copied ? <Check size={18} className="text-emerald-400" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                {copied ? 'Copied—paste it into Google' : 'Copy my draft'}
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-600">
                Your words stay on this device unless you choose to copy them.
              </p>
            </div>
          </details>
        </section>

        <section className="card overflow-hidden p-5 shadow-2xl sm:p-7" aria-labelledby="tip-heading">
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

          <div className="grid gap-3 sm:grid-cols-2">
            {PAYMENT_LINKS.map(({ name, detail, url, color, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[.98]"
                style={{ borderColor: `${color}35` }}
                aria-label={`Tip with ${name}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30" style={{ color }}>
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <strong className="block text-base text-white">{name}</strong>
                  <span className="block truncate text-xs text-slate-500">{detail}</span>
                </span>
                <ExternalLink size={14} className="shrink-0 text-slate-600 transition-colors group-hover:text-slate-300" aria-hidden="true" />
              </a>
            ))}

            <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:col-span-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/30 text-white">
                <Smartphone size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block text-base text-white">Apple Cash</strong>
                <span className="block text-xs leading-5 text-slate-500">Ask Zack to start Tap to Cash while you’re together.</span>
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
