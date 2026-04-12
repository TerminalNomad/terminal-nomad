import React from 'react';
import { ArrowLeft, Briefcase, Camera, Wind, ArrowUpRight } from 'lucide-react';

interface WorkWithMePageProps {
  onBack: () => void;
}

export const WorkWithMePage: React.FC<workwithmepageprops> = ({ onBack }) => {
  return (
    <div classname="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button onclick="{onBack}" classname="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <arrowleft size="{16}" classname="group-hover:-translate-x-1 transition-transform"/>
        Back to Terminal
      </button>

      {/* Header */}
      <div classname="text-center mb-16">
        <div classname="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <briefcase size="{32}/">
        </div>
        <h1 classname="text-4xl md:text-5xl font-black text-white font-mono mb-4">
          MISSION <span classname="text-brand-accent">PROFILE</span>
        </h1>
        <p classname="text-slate-400 text-lg max-w-2xl mx-auto">
          Partner with Terminal Nomad for high-altitude experiences and content.
        </p>
      </div>

      {/* Ventures Grid */}
      <div classname="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1: Tandems */}
        <div classname="bg-slate-900 border border-white/10 p-8 rounded-2xl group hover:border-brand-accent/50 transition-all hover:-translate-y-1">
          <div classname="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <wind size="{24}/">
          </div>
          <h3 classname="text-xl font-bold text-white font-mono mb-3">Tandem Experiences</h3>
          <p classname="text-slate-400 leading-relaxed mb-6">
            Want to jump with me? I offer exclusive VIP tandem experiences. I handle the safety, you handle the screaming. Includes premium 4K video and photos.
          </p>
          <a href="mailto:zach@terminalnomad.com?subject=Tandem Inquiry" classname="inline-flex items-center text-brand-accent font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
            Book a Jump <arrowupright size="{16}" classname="ml-2"/>
          </a>
        </div>

        {/* Card 2: Brand Deals */}
        <div classname="bg-slate-900 border border-white/10 p-8 rounded-2xl group hover:border-brand-accent/50 transition-all hover:-translate-y-1">
          <div classname="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <camera size="{24}/">
          </div>
          <h3 classname="text-xl font-bold text-white font-mono mb-3">Brand Partnerships</h3>
          <p classname="text-slate-400 leading-relaxed mb-6">
            High-octane content for brands that live on the edge. I create extreme UGC and professional campaigns featuring your product in freefall.
          </p>
          <a href="mailto:zach@terminalnomad.com?subject=Brand Partnership" classname="inline-flex items-center text-brand-accent font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
            Start a Campaign <arrowupright size="{16}" classname="ml-2"/>
          </a>
        </div>

      </div>

      {/* General Contact */}
      <div classname="bg-gradient-to-r from-brand-accent/20 to-blue-600/20 border border-brand-accent/30 rounded-2xl p-8 text-center">
        <h3 classname="text-2xl font-bold text-white font-mono mb-2">Have something else in mind?</h3>
        <p classname="text-slate-300 mb-6">If it involves altitude, adrenaline, or adventure, I'm listening.</p>
        <a href="mailto:zach@terminalnomad.com" classname="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">
          Contact Me
        </a>
      </div>
    </div>
  );
};
