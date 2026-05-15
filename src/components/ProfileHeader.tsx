import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, User, Briefcase, Camera, ArrowRight } from 'lucide-react';

interface ProfileHeaderProps {
  location: string;
}

const PROFILE_PHOTO = "/profile_photo.jpg";

export const ProfileHeader = ({ location }: ProfileHeaderProps) => {
  const handleBannerError = (e: React.SyntheticEvent<HTMLImageElement>) => {
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
          onError={handleBannerError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 via-transparent to-brand-dark/30" />
      </div>

      {/* Profile content */}
      <div className="flex flex-col items-center -mt-24 md:-mt-28 relative z-10 px-4 w-full">

        {/* Avatar */}
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-brand-dark shadow-2xl mb-5 overflow-hidden ring-2 ring-brand-accent/40 flex-shrink-0">
          <img
            src={PROFILE_PHOTO}
            alt="Zack — NomadicZack skydiving instructor"
            className="w-full h-full object-cover"
            style={{ objectPosition: '15% 15%' }}
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter font-mono mb-2 drop-shadow-xl text-center leading-none">
          NOMADIC<span className="text-brand-accent">ZACK</span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg font-medium max-w-xs mx-auto leading-relaxed mb-5 text-center">
          Chasing horizons &amp; terminal velocity around the globe.
        </p>

        {/* Skydive Media CTA */}
        <div className="mb-5 w-full max-w-sm">
          <Link
            to="/media"
            className="w-full group flex flex-col items-center justify-center gap-1.5 px-6 py-4 rounded-2xl transition-all font-black font-mono text-sm uppercase tracking-tight text-brand-dark shadow-xl border-2 border-white/20 animate-pulse-glow hover:animate-none"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
            aria-label="Preview and get your skydive media"
          >
            <div className="flex items-center gap-3">
              <Camera size={20} className="group-hover:rotate-12 transition-transform flex-shrink-0" aria-hidden="true" />
              <span className="text-center leading-tight">Preview &amp; Get Your Skydive Media Here!</span>
              <ArrowRight size={18} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </div>
            <span className="text-[10px] opacity-80 font-bold tracking-widest">Videos · Photos · Handcam</span>
          </Link>
        </div>

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/90 border border-slate-700 backdrop-blur-md text-xs font-mono text-brand-accent uppercase tracking-widest shadow-lg mb-6">
          <MapPin size={12} aria-hidden="true" />
          <span>Currently: {location}</span>
        </div>

        {/* Nav buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/about"
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-brand-accent hover:bg-white border-2 border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-wider hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            <User size={15} aria-hidden="true" />
            <span>About Me</span>
          </Link>
          <Link
            to="/work"
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-transparent hover:bg-white border-2 border-brand-accent hover:border-white transition-all text-brand-accent hover:text-brand-dark font-bold font-mono text-sm uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            <Briefcase size={15} aria-hidden="true" />
            <span>Work With Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
