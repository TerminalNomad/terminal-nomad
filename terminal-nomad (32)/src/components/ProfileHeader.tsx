import React from 'react';
import { MapPin, User, Briefcase, Camera, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProfileHeaderProps {
  location: string;
  onAboutClick: () => void;
  onWorkClick: () => void;
  onHandcamClick: () => void;
}

export const ProfileHeader: React.FC<profileheaderprops> = ({ location, onAboutClick, onWorkClick, onHandcamClick }) => {
  return (
    <div classname="w-full flex flex-col items-center relative mb-8">
      {/* Banner Image Area */}
      <div classname="w-full h-80 md:h-96 relative overflow-hidden bg-slate-900">
        <img src="https://lh3.googleusercontent.com/d/1j8RymY3MoVpu5EUmbg6TkanFbP33_bN2" alt="Terminal Nomad Banner" classname="w-full h-full object-cover object-center" style="{{" objectposition:="" 'center="" 40%'="" }}="" referrerpolicy="no-referrer" onerror="{(e)" ==""> {
            console.warn("Google Drive image failed to load, switching to fallback.");
            e.currentTarget.src = "https://images.unsplash.com/photo-1512453979798-5ea904ac6666?q=80&w=1600&auto=format&fit=crop";
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div classname="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30 opacity-90"/>
      </div>

      {/* Profile Content - Overlapping the banner */}
      <div classname="flex flex-col items-center -mt-24 relative z-10 px-4 w-full">
        {/* Profile Avatar */}
        <div classname="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-2xl mb-6 overflow-hidden relative group">
           <div classname="absolute inset-0 bg-gradient-to-br from-brand-accent to-blue-600 opacity-80"/>
           <span classname="relative z-10 text-4xl md:text-5xl font-bold text-white font-mono">TN</span>
        </div>

        <h1 classname="text-4xl md:text-5xl font-black text-white tracking-tighter font-mono mb-2 drop-shadow-xl text-center">
          TERMINAL<span classname="text-brand-accent">NOMAD</span>
        </h1>
        
        <p classname="text-slate-200 text-lg font-medium max-w-sm mx-auto leading-relaxed mb-6 text-center drop-shadow-md">
          Chasing horizons & terminal velocity<br/>around the globe.
        </p>

        {/* Handcam Call to Action - Stands Out */}
        <div classname="mb-6 w-full max-w-xs animate-pulse hover:animate-none">
            <button onclick="{onHandcamClick}" classname="w-full group flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-accent to-blue-500 hover:from-white hover:to-white transition-all text-brand-dark font-black font-mono text-sm uppercase tracking-tighter hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/30 border-2 border-white/20">
                <div classname="flex items-center gap-3">
                    <arrowright size="{18}" classname="animate-bounce-x"/>
                    <div classname="flex items-center gap-2">
                        <camera size="{20}" classname="group-hover:rotate-12 transition-transform"/>
                        <span>Jumped with me?</span>
                    </div>
                    <arrowleft size="{18}" classname="animate-bounce-x-reverse"/>
                </div>
                <span classname="text-[10px] opacity-80 font-bold">Get your handcam video here</span>
            </button>
        </div>

        <div classname="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600 backdrop-blur-md text-xs md:text-sm font-mono text-brand-accent uppercase tracking-widest shadow-lg mb-6">
          <mappin size="{14}/">
          <span>Currently: {location}</span>
        </div>

        {/* Buttons */}
        <div classname="flex flex-wrap justify-center gap-4">
            {/* About Me */}
            <button onclick="{onAboutClick}" classname="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
                <user size="{16}/">
                <span>About Me</span>
            </button>

            {/* Work With Me */}
            <button onclick="{onWorkClick}" classname="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
                <briefcase size="{16}/">
                <span>Work With Me</span>
            </button>
        </div>
      </div>
    </div>
  );
};
