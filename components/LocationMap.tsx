
import React from 'react';

interface LocationMapProps {
  location: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
  // Using the specific My Maps embed link derived from the user's ID
  const mapSrc = "https://www.google.com/maps/d/embed?mid=1ufYzD_a9DWAElKjermwnXfdllimjFT4";

  return (
    <div className="w-full mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
        My Travels
      </h2>
      <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900 group">
         <iframe 
           width="100%" 
           height="100%" 
           src={mapSrc}
           title="My Travels Map"
           // The magic: Invert colors to make it dark, rotate hue to fix water color (blue), and adjust contrast
           style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(90%) contrast(85%)' }}
           className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:filter-none transition-all duration-700"
         />
         
         {/* Decorative Overlay */}
         <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl ring-1 ring-white/10" />
      </div>
    </div>
  );
};
