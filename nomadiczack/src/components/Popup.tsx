import React, { useState, useEffect } from 'react';
import { X, Mail, Heart } from 'lucide-react';

interface PopupProps {
  onSubscribe: () => void;
  onSupport: () => void;
}

const POPUP_KEY = 'nz_popup_dismissed';

export const Popup = ({ onSubscribe, onSupport }: PopupProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed in a previous session
    if (localStorage.getItem(POPUP_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 10_000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(POPUP_KEY, '1');
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative card border-brand-accent/40 p-7 md:p-9 w-full max-w-sm shadow-2xl animate-scale-in z-10">

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full glass hover:border-white/30 text-slate-500 hover:text-white transition-all"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Glow accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl pointer-events-none"
          style={{ background: 'rgba(6,182,212,0.15)' }}
        />

        <h3
          id="popup-title"
          className="text-2xl font-black text-white font-mono mb-2"
        >
          JOIN THE <span className="text-brand-accent">ADVENTURE</span>
        </h3>

        <p className="text-slate-400 mb-7 leading-relaxed text-sm">
          Don't miss the next drop. Get exclusive content and flight logs straight to your inbox, or fuel the next jump.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => { onSubscribe(); dismiss(); }}
            className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            <Mail size={17} aria-hidden="true" />
            <span>Subscribe to Newsletter</span>
          </button>

          <button
            onClick={() => { onSupport(); dismiss(); }}
            className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl glass hover:bg-white/10 text-white font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95"
          >
            <Heart size={17} className="text-red-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>Support the Journey</span>
          </button>
        </div>

        <p className="text-center text-slate-600 text-xs mt-5 font-mono">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};
