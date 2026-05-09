import React from 'react';
import { ArrowLeft, Wind, Globe, Camera, Award } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage = ({ onBack }: AboutPageProps) => (
  <div className="w-full max-w-4xl mx-auto px-5 py-8 animate-fade-in-up">
    {/* Back */}
    <button
      onClick={onBack}
      className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
    >
      <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
      Back to NomadicZack
    </button>

    {/* Hero banner */}
    <div className="relative mb-10 card overflow-hidden p-8 md:p-12 text-center md:text-left">
      <div className="absolute top-0 right-0 p-6 opacity-[0.06]">
        <Wind size={160} aria-hidden="true" />
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-white font-mono mb-3 relative z-10">
        THE <span className="text-brand-accent">NOMAD</span>
      </h1>
      <h2 className="text-lg text-slate-300 font-medium relative z-10">
        Skydiving Instructor · Content Creator · Adrenaline Architect
      </h2>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

      {/* Bio */}
      <div className="space-y-5 text-slate-300 leading-relaxed text-base">
        <p>
          <strong className="text-white">I don't just exist; I descend.</strong>
        </p>
        <p>
          My name is Zack. Based out of Raeford, NC, but often found 13,000 feet above the most beautiful landscapes on Earth — I've dedicated my life to the art of human flight.
        </p>
        <p>
          What started as a curiosity quickly turned into an obsession, and then a lifestyle. Now, I travel the globe chasing horizons, teaching others how to fly, and capturing the raw, unfiltered beauty of the world from a perspective few ever get to see.
        </p>
        <p>
          Through my content, I aim to share the intensity of terminal velocity and the serenity of the canopy ride. Whether I'm carving clouds or editing the next drop, the mission is always the same:{' '}
          <span className="text-brand-accent font-semibold">Live vividly.</span>
        </p>
      </div>

      {/* Stats + quote */}
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Globe, label: 'Traveler', value: 'Global' },
            { icon: Camera, label: '4K Creator', value: 'Content' },
            { icon: Award, label: 'Certified', value: 'USPA' },
            { icon: Wind, label: 'Jumps', value: '1,000+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-xl p-5">
              <Icon className="text-brand-accent mb-3" size={28} aria-hidden="true" />
              <div className="text-2xl font-bold text-white font-mono">{value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-brand-accent/10 border border-brand-accent/20 p-7 rounded-xl">
          <p className="font-mono text-brand-accent italic text-sm md:text-base leading-relaxed">
            "The edge is not where things end. It's where the real view begins."
          </p>
        </div>

        <a
          href="mailto:zack@terminalnomad.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
);
