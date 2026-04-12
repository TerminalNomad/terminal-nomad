import React, { useState, useEffect } from 'react';
import { X, Mail, Heart } from 'lucide-react';

interface PopupProps {
  onSubscribe: () => void;
  onSupport: () => void;
}

export const Popup = ({ onSubscribe, onSupport }: PopupProps) => {
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

  const handleSubscribeClick = () => {
    onSubscribe();
    handleClose();
  };

  const handleSupportClick = () => {
    onSupport();
    handleClose();
  };

  if (!isVisible) return null;

  return React.createElement('div', { className: "fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 sm:p-6 pointer-events-none" },
    /* Backdrop */
    React.createElement('div', { className: "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 pointer-events-auto", onClick: handleClose }),

    /* Modal Content */
    React.createElement('div', { className: "relative bg-slate-900 border border-brand-accent/30 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto animate-fade-in-up transform transition-all" },
      
      /* Close Button */
      React.createElement('button', { onClick: handleClose, className: "absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1" },
        React.createElement(X, { size: 20 })
      ),

      React.createElement('h3', { className: "text-2xl font-bold text-white font-mono mb-2" },
        "JOIN THE ",
        React.createElement('span', { className: "text-brand-accent" }, "ADVENTURE")
      ),
      
      React.createElement('p', { className: "text-slate-300 mb-6 leading-relaxed" },
        "Don't miss the next drop. Get exclusive content and flight logs sent directly to your inbox, or fuel the next jump."
      ),

      React.createElement('div', { className: "flex flex-col gap-3" },
        React.createElement('button', { 
          onClick: handleSubscribeClick,
          className: "group flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02]"
        },
          React.createElement(Mail, { size: 18 }),
          React.createElement('span', null, "Subscribe to Newsletter")
        ),

        React.createElement('button', { 
          onClick: handleSupportClick,
          className: "group flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold font-mono uppercase tracking-widest transition-all hover:scale-[1.02]"
        },
          React.createElement(Heart, { size: 18, className: "text-red-500 group-hover:scale-110 transition-transform" }),
          React.createElement('span', null, "Support the Journey")
        )
      )
    )
  );
};
