import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, Camera, Wind, ArrowUpRight } from 'lucide-react';

export const WorkWithMePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto px-5 py-8 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <Briefcase size={30} aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-4">MISSION <span className="text-brand-accent">PROFILE</span></h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Partner with NomadicZack for high-altitude experiences and content that converts.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="card p-8 group hover:border-brand-accent/40 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 bg-blue-500/15 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Wind size={24} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white font-mono mb-3">Tandem Experiences</h3>
          <p className="text-slate-400 leading-relaxed mb-6 text-sm">Jump with me personally. I offer exclusive VIP tandem experiences with premium 4K video and photos. I handle the safety, you handle the screaming.</p>
          <a href="mailto:zack@terminalnomad.com?subject=Tandem Inquiry" className="inline-flex items-center gap-2 text-brand-accent font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
            Book a Jump <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="card p-8 group hover:border-brand-accent/40 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 bg-purple-500/15 text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <Camera size={24} aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white font-mono mb-3">Brand Partnerships</h3>
          <p className="text-slate-400 leading-relaxed mb-6 text-sm">High-octane content for brands that live on the edge. I create extreme UGC and professional campaigns featuring your product in freefall.</p>
          <a href="mailto:zack@terminalnomad.com?subject=Brand Partnership" className="inline-flex items-center gap-2 text-brand-accent font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
            Start a Campaign <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="card border-brand-accent/30 p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(59,130,246,0.08))' }}>
        <h3 className="text-2xl font-bold text-white font-mono mb-2">Have something else in mind?</h3>
        <p className="text-slate-300 mb-7">If it involves altitude, adrenaline, or adventure — I'm listening.</p>
        <a href="mailto:zack@terminalnomad.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20">Contact Me</a>
      </div>
    </div>
  );
};
