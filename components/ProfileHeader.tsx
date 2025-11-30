import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  const [locationText, setLocationText] = useState('Locating...');

  useEffect(() => {
    // Your specific Google Sheet CSV link
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7Ty_cQhXUU0PXT2u2-LtmW_K8TFKa5luFJGSPRZqEbcduP5NojkcLJ4qASHSZuOPdaw4UMe4yvnu_/pub?output=csv';

    fetch(sheetUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvText) => {
        // Parse the CSV: Split by new line to get rows
        const rows = csvText.split('\n');
        
        // Row 0 is headers, Row 1 is your data
        if (rows.length > 1) {
          // Split the data row by commas
          const cells = rows[1].split(',');
          
          // Clean up the data (remove quotes if Google adds them)
          const city = cells[0]?.replace(/"/g, '').trim();
          const state = cells[1]?.replace(/"/g, '').trim();
          const country = cells[2]?.replace(/"/g, '').trim();

          // Filter out empty values and join with commas
          const locationString = [city, state, country].filter(Boolean).join(', ');
          
          if (locationString) {
            setLocationText(locationString);
          } else {
            throw new Error('Empty location data parsed');
          }
        }
      })
      .catch((error) => {
        console.warn("Could not fetch dynamic location, using fallback:", error);
        // Fallback to default location
        setLocationText('Raeford, NC, USA');
      });
  }, []);

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

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-600 backdrop-blur-md text-xs md:text-sm font-mono text-brand-accent uppercase tracking-widest shadow-lg">
          <MapPin size={14} />
          <span>Currently: {locationText}</span>
        </div>
      </div>
    </div>
  );
};