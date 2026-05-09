import React, { useState, useEffect } from 'react';
import {
  Instagram,
  Facebook,
  Youtube,
  Wallet,
  DollarSign,
  Zap,
  Square,
  Mail,
  MessageSquareQuote,
} from 'lucide-react';

import { ProfileHeader } from './components/ProfileHeader';
import { SocialButton } from './components/SocialButton';
import { FeaturedVideo } from './components/FeaturedVideo';
import { ExpeditionsCard } from './components/ExpeditionsCard';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { Popup } from './components/Popup';
import { AboutPage } from './components/AboutPage';
import { WorkWithMePage } from './components/WorkWithMePage';
import { TestimonialsPage } from './components/TestimonialsPage';
import { NewsletterPage } from './components/NewsletterPage';
import { SupportPage } from './components/SupportPage';
import { HandcamPage } from './components/HandcamPage';
import { LinkItem, LinkCategory } from './types';

// ─── Custom icons ────────────────────────────────────────────────────────────

const TikTokIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const PaypalIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.5 8.5c-.5-3-3.5-5-6.5-5H6.5a1 1 0 0 0-1 1v15h4l1-6h2c3 0 5.5-2 6-5.5Z" />
    <path d="m10.5 14.5.5-3" />
  </svg>
);

const SnapchatIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.5c-2.3 0-5.5 1.7-5.5 6 0 2.5 1.2 3.6 1.2 5 0 1.2-1 1.7-1.7 1.7-1 0-1.5.8-1.5 1.8 0 1.8 2.2 2.5 3.5 2.5.5 0 1 .5 1 1 0 .6-.7 1-1.5 1-.3 0-.5.2-.5.5 0 .5 1 .5 2 .5 1.5 0 3-.2 5-.5 2 .3 3.5.5 5 .5 1 0 2 0 2-.5 0-.3-.2-.5-.5-.5-.8 0-1.5-.4-1.5-1 0-.5.5-1 1-1 1.3 0 3.5-.7 3.5-2.5 0-1-.5-1.8-1.5-1.8-.7 0-1.7-.5-1.7-1.7 0-1.4 1.2-2.5 1.2-5 0-4.3-3.2-6-5.5-6z" />
  </svg>
);

// ─── Link data ───────────────────────────────────────────────────────────────

const LINKS: LinkItem[] = [
  // Social
  { id: '1', title: 'Instagram', url: 'https://www.instagram.com/thenomadiczack',   icon: Instagram as any, category: LinkCategory.SOCIAL,  color: '#E1306C' },
  { id: '2', title: 'TikTok',    url: 'https://www.tiktok.com/@nomadiczack',         icon: TikTokIcon,       category: LinkCategory.SOCIAL,  color: '#00F2EA' },
  { id: '3', title: 'YouTube',   url: 'https://www.youtube.com/@NomadicZack',         icon: Youtube as any,   category: LinkCategory.SOCIAL,  color: '#FF0000' },
  { id: '4', title: 'Facebook',  url: 'https://www.facebook.com/nomadiczack',         icon: Facebook as any,  category: LinkCategory.SOCIAL,  color: '#1877F2' },
  { id: '5', title: 'Snapchat',  url: 'https://www.snapchat.com/add/nomadiczack',     icon: SnapchatIcon,     category: LinkCategory.SOCIAL,  color: '#FFFC00' },

  // Support
  { id: '6',  title: 'Venmo',   url: 'https://www.venmo.com/u/NomadicZack',          icon: Wallet as any,    category: LinkCategory.SUPPORT, color: '#008CFF' },
  { id: '7',  title: 'PayPal',  url: 'https://www.paypal.biz/TerminalNomad',         icon: PaypalIcon,       category: LinkCategory.SUPPORT, color: '#003087' },
  { id: '8',  title: 'Square',  url: 'https://square.link/u/txX0xLNq',               icon: Square as any,    category: LinkCategory.SUPPORT, color: '#FFFFFF' },
  { id: '9',  title: 'Zelle',   url: 'https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiWmFjaGVyeSBLcmlldGVuc3RlaW4iLCJlbWFpbCI6ImFjdGFsaXZlQGdtYWlsLmNvbSJ9', icon: Zap as any, category: LinkCategory.SUPPORT, color: '#6D1ED4' },
  { id: '10', title: 'CashApp', url: 'https://cash.app/$NomadicZack',                icon: DollarSign as any,category: LinkCategory.SUPPORT, color: '#00D632' },
];

// ─── View types ──────────────────────────────────────────────────────────────

type View = 'home' | 'about' | 'testimonials' | 'work' | 'newsletter' | 'support' | 'handcam';

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<View>('home');
  const [location, setLocation] = useState('Locating…');

  const socialLinks  = LINKS.filter((l) => l.category === LinkCategory.SOCIAL);
  const supportLinks = LINKS.filter((l) => l.category === LinkCategory.SUPPORT);

  // Fetch dynamic location from Google Sheet
  useEffect(() => {
    const sheetUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7Ty_cQhXUU0PXT2u2-LtmW_K8TFKa5luFJGSPRZqEbcduP5NojkcLJ4qASHSZuOPdaw4UMe4yvnu_/pub?output=csv';

    fetch(sheetUrl)
      .then((r) => {
        if (!r.ok) throw new Error('Failed');
        return r.text();
      })
      .then((csv) => {
        const rows  = csv.split('\n');
        if (rows.length > 1) {
          const cells   = rows[1].split(',');
          const city    = cells[0]?.replace(/"/g, '').trim();
          const state   = cells[1]?.replace(/"/g, '').trim();
          const country = cells[2]?.replace(/"/g, '').trim();
          const loc = [city, state, country].filter(Boolean).join(', ');
          if (loc) setLocation(loc);
        }
      })
      .catch(() => setLocation('Raeford, NC, USA'));
  }, []);

  const goTo = (v: View) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(v);
  };

  const goHome = () => goTo('home');

  // ── Render current view ───────────────────────────────────────────────────
  const renderView = () => {
    switch (view) {
      case 'about':        return <AboutPage        onBack={goHome} />;
      case 'work':         return <WorkWithMePage    onBack={goHome} />;
      case 'testimonials': return <TestimonialsPage  onBack={goHome} />;
      case 'newsletter':   return <NewsletterPage    onBack={goHome} />;
      case 'support':      return <SupportPage       onBack={goHome} links={LINKS} />;
      case 'handcam':      return <HandcamPage       onBack={goHome} />;

      default: return (
        <>
          <ProfileHeader
            location={location}
            onAboutClick={() => goTo('about')}
            onWorkClick={() => goTo('work')}
            onHandcamClick={() => goTo('handcam')}
          />

          <main className="w-full max-w-md md:max-w-6xl mx-auto px-5 pb-24 relative z-40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Left column */}
              <div className="md:col-span-7 flex flex-col gap-8 order-1">
                <FeaturedVideo videoId="mqipTSa6EQU" />
                <ExpeditionsCard />
                <TestimonialCarousel onReadMore={() => goTo('testimonials')} />
              </div>

              {/* Right column — sticky on desktop */}
              <div className="md:col-span-5 flex flex-col gap-8 order-2 md:sticky md:top-8">

                {/* Social links */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
                    Connect
                  </h2>
                  <div className="flex flex-col gap-2.5">
                    {socialLinks.map((link) => (
                      <SocialButton key={link.id} item={link} />
                    ))}
                  </div>
                </div>

                {/* Support links */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
                    Support the Journey
                  </h2>
                  <div className="flex flex-col gap-2.5">
                    {supportLinks.map((link) => (
                      <SocialButton key={link.id} item={link} />
                    ))}
                  </div>
                </div>

                {/* Secondary nav links */}
                <div
                  className="flex flex-col items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  <button
                    onClick={() => goTo('testimonials')}
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors text-sm font-mono py-2 hover:bg-white/5 rounded-lg w-full justify-center"
                  >
                    <MessageSquareQuote size={15} aria-hidden="true" />
                    Testimonials
                  </button>
                  <a
                    href="mailto:zack@terminalnomad.com"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors text-sm font-mono py-2 hover:bg-white/5 rounded-lg w-full justify-center"
                  >
                    <Mail size={15} aria-hidden="true" />
                    Business Inquiries
                  </a>
                </div>

              </div>
            </div>
          </main>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #06b6d4, transparent 70%)' }}
      />

      {/* Popup — shown after 10s, once per session */}
      <Popup
        onSubscribe={() => goTo('newsletter')}
        onSupport={() => goTo('support')}
      />

      {/* Page content */}
      <div className="flex-grow w-full relative z-40">
        {renderView()}
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-700 text-xs relative z-40 border-t border-white/5 mt-auto">
        <p className="mb-1 font-mono">© {new Date().getFullYear()} Terminal Nomad, LLC.</p>
        <p className="opacity-50">Designed for the edge.</p>
      </footer>
    </div>
  );
}
