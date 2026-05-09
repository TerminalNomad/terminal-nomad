import React from 'react';
import { MapPin, User, Briefcase, Camera, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProfileHeaderProps {
  location: string;
  onAboutClick: () => void;
  onWorkClick: () => void;
  onHandcamClick: () => void;
}

export const ProfileHeader = ({ location, onAboutClick, onWorkClick, onHandcamClick }: ProfileHeaderProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1545472956-3b14e6a0a42e?q=80&w=1600&auto=format&fit=crop';
  };

  return (
    <div className="w-full flex flex-col items-center relative mb-8">
      {/* Banner */}
      <div className="w-full h-72 md:h-96 relative overflow-hidden bg-slate-900">
        <img
          src="https://lh3.googleusercontent.com/d/1j8RymY3MoVpu5EUmbg6TkanFbP33_bN2"
          alt="NomadicZack skydiving banner"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 via-transparent to-brand-dark/30" />
      </div>

      {/* Profile content overlapping banner */}
      <div className="flex flex-col items-center -mt-28 md:-mt-32 relative z-10 px-4 w-full">

        {/* Avatar */}
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-brand-dark bg-brand-surface flex items-center justify-center shadow-2xl mb-5 overflow-hidden ring-2 ring-brand-accent/30">
          <img
            src="https://lh3.googleusercontent.com/d/1j8RymY3MoVpu5EUmbg6TkanFbP33_bN2"
            alt="NomadicZack profile"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to initials
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-3xl md:text-4xl font-black text-white font-mono" style="background:linear-gradient(135deg,#06b6d4,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">NZ</span>`;
              }
            }}
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-mono mb-2 drop-shadow-xl text-center leading-none">
          NOMADIC<span className="text-brand-accent">ZACK</span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg font-medium max-w-xs mx-auto leading-relaxed mb-5 text-center">
          Chasing horizons &amp; terminal velocity around the globe.
        </p>

        {/* Handcam CTA — pulsing to draw attention */}
        <div className="mb-5 w-full max-w-xs">
          <button
            onClick={onHandcamClick}
            className="w-full group flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-2xl transition-all font-black font-mono text-sm uppercase tracking-tight text-brand-dark shadow-xl border-2 border-white/20 animate-pulse-glow hover:animate-none"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
            aria-label="Get your handcam video"
          >
            <div className="flex items-center gap-3">
              <ArrowRight size={18} className="animate-bounce-x" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <Camera size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                <span>Jumped with me?</span>
              </div>
              <ArrowLeft size={18} className="animate-bounce-x-reverse" aria-hidden="true" />
            </div>
            <span className="text-[10px] opacity-80 font-bold">Get your handcam video here</span>
          </button>
        </div>

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-slate-700 backdrop-blur-md text-xs font-mono text-brand-accent uppercase tracking-widest shadow-lg mb-6">
          <MapPin size={12} aria-hidden="true" />
          <span>Currently: {location}</span>
        </div>

        {/* Nav buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={onAboutClick}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-brand-accent hover:bg-white border-2 border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-wider hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            <User size={15} aria-hidden="true" />
            <span>About Me</span>
          </button>
          <button
            onClick={onWorkClick}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-transparent hover:bg-white border-2 border-brand-accent hover:border-white transition-all text-brand-accent hover:text-brand-dark font-bold font-mono text-sm uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            <Briefcase size={15} aria-hidden="true" />
            <span>Work With Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};
