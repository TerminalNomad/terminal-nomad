
import React, { useState, useEffect } from 'react';
import { X, Mail, Heart } from 'lucide-react';

interface PopupProps {
  onSubscribe: () => void;
  onSupport: () => void;
}

export const Popup: React.FC<popupprops> = ({ onSubscribe, onSupport }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if user hasn't manually closed it in this session
      if (!hasClosed) {
        setIsVisible(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  if (!isVisible) return null;

  return (
    <div classname="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div classname="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 pointer-events-auto" onclick="{handleClose}"/>

      {/* Modal Content */}
      <div classname="relative bg-slate-900 border border-brand-accent/30 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto animate-fade-in-up transform transition-all">
        
        {/* Close Button */}
        <button onclick="{handleClose}" classname="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1">
          <x size="{20}"/>
        </button>

        <h3 classname="text-2xl font-bold text-white font-mono mb-2">
          JOIN THE <span classname="text-brand-accent">ADVENTURE</span>
        </h3>
        
        <p classname="text-slate-300 mb-6 leading-relaxed">
          Don't miss the next drop. Get exclusive content and flight logs sent directly to your inbox, or fuel the next jump.
        </p>

        <div classname="flex flex-col gap-3">
          <button onclick="{()" ==""> { onSubscribe(); handleClose(); }}
            className="group flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02]"
          >
            <mail size="{18}"/>
            <span>Subscribe to Newsletter</span>
          </button>

          <button onclick="{()" ==""> { onSupport(); handleClose(); }}
            className="group flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02]"
          >
            <heart size="{18}" classname="text-red-500 group-hover:scale-110 transition-transform"/>
            <span>Support the Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
};
