
import React from 'react';

interface LocationMapProps {
  location: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
  // Use a default query if location is loading to ensure map renders something valid
  const mapQuery = (location === 'Locating...' || !location) ? 'Raeford, NC, USA' : location;

  return (
    <div className="w-full mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
        Current Drop Zone
      </h2>
      <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900 group">
         {/* Standard Google Maps Embed */}
         <iframe 
           width="100%" 
           height="100%" 
           src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
           frameBorder="0" 
           scrolling="no" 
           marginHeight={0} 
           marginWidth={0}
           title="Live Tracker Map"
           className="w-full h-full opacity-80 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
           loading="lazy"
         />
         
         {/* Decorative Overlay */}
         <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl ring-1 ring-white/10" />
      </div>
    </div>
  );
};
