
import React from 'react';
import { MapPin, User, Briefcase } from 'lucide-react';

interface ProfileHeaderProps {
  location: string;
  onAboutClick: () => void;
  onWorkClick: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ location, onAboutClick, onWorkClick }) => {
  return (
    <div className="w-full flex flex-col items-center relative mb-8">
      {/* Banner Image Area */}
      <div className="w-full h-80 md:h-96 relative overflow-hidden bg-slate-900">
        <img 
          src="https://lh3.googleusercontent.com/d/1j8RymY3MoVpu5EUmbg6TkanFbP33_bN2"
          alt="Terminal Nomad Banner"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 40%' }}
          referrerPolicy="no-referrer"
          onError={(e) => {
            console.warn("Google Drive image failed to load, switching to fallback.");
            e.currentTarget.src = "https://images.unsplash.com/photo-1512453979798-5ea904ac6666?q=80&w=1600&auto=format&fit=crop";
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30 opacity-90" />
      </div>

      {/* Profile Content - Overlapping the banner */}
      <div className="flex flex-col items-center -mt-24 relative z-10 px-4 w-full">
        {/* Profile Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-2xl mb-6 overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-accent to-blue-600 opacity-80" />
           <span className="relative z-10 text-4xl md:text-5xl font-bold text-white font-mono">TN</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter font-mono mb-2 drop-shadow-xl text-center">
          TERMINAL<span className="text-brand-accent">NOMAD</span>
        </h1>
        
        <p className="text-slate-200 text-lg font-medium max-w-sm mx-auto leading-relaxed mb-6 text-center drop-shadow-md">
          Chasing horizons & terminal velocity<br />around the globe.
        </p>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600 backdrop-blur-md text-xs md:text-sm font-mono text-brand-accent uppercase tracking-widest shadow-lg mb-6">
          <MapPin size={14} />
          <span>Currently: {location}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
            {/* About Me */}
            <button
            onClick={onAboutClick}
            className="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
            >
                <User size={16} />
                <span>About Me</span>
            </button>

            {/* Work With Me */}
            <button
            onClick={onWorkClick}
            className="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
            >
                <Briefcase size={16} />
                <span>Work With Me</span>
            </button>
        </div>
      </div>
    </div>
  );
};
