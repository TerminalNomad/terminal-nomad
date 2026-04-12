import React from 'react';
import { MapPin, User, Briefcase, Camera, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProfileHeaderProps {
  location: string;
  onAboutClick: () => void;
  onWorkClick: () => void;
  onHandcamClick: () => void;
}

export const ProfileHeader = ({ location, onAboutClick, onWorkClick, onHandcamClick }: ProfileHeaderProps) => {
  const handleImageError = (e: any) => {
    console.warn("Google Drive image failed to load, switching to fallback.");
    e.currentTarget.src = "https://images.unsplash.com/photo-1512453979798-5ea904ac6666?q=80&w=1600&auto=format&fit=crop";
  };

  return React.createElement('div', { className: "w-full flex flex-col items-center relative mb-8" },
    /* Banner Image Area */
    React.createElement('div', { className: "w-full h-80 md:h-96 relative overflow-hidden bg-slate-900" },
      React.createElement('img', { 
        src: "https://lh3.googleusercontent.com/d/1j8RymY3MoVpu5EUmbg6TkanFbP33_bN2", 
        alt: "Terminal Nomad Banner", 
        className: "w-full h-full object-cover object-center", 
        style: { objectPosition: 'center 40%' }, 
        referrerPolicy: "no-referrer", 
        onError: handleImageError
      }),
      /* Gradient Overlay for text readability */
      React.createElement('div', { className: "absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30 opacity-90" })
    ),

    /* Profile Content - Overlapping the banner */
    React.createElement('div', { className: "flex flex-col items-center -mt-24 relative z-10 px-4 w-full" },
      /* Profile Avatar */
      React.createElement('div', { className: "w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-2xl mb-6 overflow-hidden relative group" },
         React.createElement('div', { className: "absolute inset-0 bg-gradient-to-br from-brand-accent to-blue-600 opacity-80" }),
         React.createElement('span', { className: "relative z-10 text-4xl md:text-5xl font-bold text-white font-mono" }, "NZ")
      ),

      React.createElement('h1', { className: "text-4xl md:text-5xl font-black text-white tracking-tighter font-mono mb-2 drop-shadow-xl text-center" },
        "NOMADIC",
        React.createElement('span', { className: "text-brand-accent" }, "ZACK")
      ),
      
      React.createElement('p', { className: "text-slate-200 text-lg font-medium max-w-sm mx-auto leading-relaxed mb-6 text-center drop-shadow-md" },
        "Chasing horizons & terminal velocity",
        React.createElement('br', null),
        "around the globe."
      ),

      /* Handcam Call to Action - Stands Out */
      React.createElement('div', { className: "mb-6 w-full max-w-xs animate-pulse hover:animate-none" },
          React.createElement('button', { 
            onClick: onHandcamClick, 
            className: "w-full group flex flex-col items-center justify-center gap-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-accent to-blue-500 hover:from-white hover:to-white transition-all text-brand-dark font-black font-mono text-sm uppercase tracking-tighter hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/30 border-2 border-white/20"
          },
            React.createElement('div', { className: "flex items-center gap-3" },
              React.createElement(ArrowRight, { size: 18, className: "animate-bounce-x" }),
              React.createElement('div', { className: "flex items-center gap-2" },
                React.createElement(Camera, { size: 20, className: "group-hover:rotate-12 transition-transform" }),
                React.createElement('span', null, "Jumped with me?")
              ),
              React.createElement(ArrowLeft, { size: 18, className: "animate-bounce-x-reverse" })
            ),
            React.createElement('span', { className: "text-[10px] opacity-80 font-bold" }, "Get your handcam video here")
          )
      ),

      React.createElement('div', { className: "inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600 backdrop-blur-md text-xs md:text-sm font-mono text-brand-accent uppercase tracking-widest shadow-lg mb-6" },
        React.createElement(MapPin, { size: 14 }),
        React.createElement('span', null, `Currently: ${location}`)
      ),

      /* Buttons */
      React.createElement('div', { className: "flex flex-wrap justify-center gap-4" },
          /* About Me */
          React.createElement('button', { 
            onClick: onAboutClick, 
            className: "group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          },
            React.createElement(User, { size: 16 }),
            React.createElement('span', null, "About Me")
          ),

          /* Work With Me */
          React.createElement('button', { 
            onClick: onWorkClick, 
            className: "group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent hover:bg-white border border-transparent transition-all text-brand-dark font-bold font-mono text-sm uppercase tracking-widest hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          },
            React.createElement(Briefcase, { size: 16 }),
            React.createElement('span', null, "Work With Me")
          )
      )
    )
  );
};
