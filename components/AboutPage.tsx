
import React from 'react';
import { ArrowLeft, Wind, Globe, Camera } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Terminal
      </button>

      {/* Header Section */}
      <div className="relative mb-12 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 p-8 md:p-12 text-center md:text-left">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Wind size={120} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white font-mono mb-4 relative z-10">
          THE <span className="text-brand-accent">NOMAD</span>
        </h1>
        <h2 className="text-xl text-slate-300 font-medium max-w-2xl relative z-10">
          Skydiving Instructor. Content Creator. Adrenaline Architect.
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Text Content */}
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            <strong className="text-white">I don't just exist; I descend.</strong>
          </p>
          <p>
            My name is Zachery, but most know me as the Terminal Nomad. Based out of Raeford, NC, but often found 13,000 feet above the most beautiful landscapes on Earth, I've dedicated my life to the art of human flight.
          </p>
          <p>
            What started as a curiosity quickly turned into an obsession, and then a lifestyle. Now, I travel the globe chasing horizons, teaching others how to fly, and capturing the raw, unfiltered beauty of the world from a perspective few ever get to see.
          </p>
          <p>
            Through my content, I aim to share the intensity of terminal velocity and the serenity of the canopy ride. Whether I'm carving clouds or editing the next drop, the mission is always the same: <span className="text-brand-accent">Live vividly.</span>
          </p>
        </div>

        {/* Stats / Visuals */}
        <div className="flex flex-col gap-6">
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Globe className="text-brand-accent mb-3" size={32} />
              <div className="text-3xl font-bold text-white font-mono">Global</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Traveler</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Camera className="text-brand-accent mb-3" size={32} />
              <div className="text-3xl font-bold text-white font-mono">4K</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Creator</div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-brand-accent/10 border border-brand-accent/20 p-8 rounded-xl mt-auto">
            <p className="font-mono text-brand-accent italic text-sm md:text-base">
              "The edge is not where things end. It's where the real view begins."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
