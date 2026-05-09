import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, ExternalLink, Video, Clock, Package, HelpCircle } from 'lucide-react';

export const HandcamPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto px-5 py-8 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20 shadow-xl" style={{ boxShadow: '0 0 40px rgba(6,182,212,0.1)' }}>
          <Camera size={38} aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-4">HANDCAM <span className="text-brand-accent">VIDEO</span></h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Relive your jump with high-definition footage captured right from the wrist.</p>
      </div>
      <div className="card overflow-hidden shadow-2xl mb-12">
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-accent/15 p-2.5 rounded-xl text-brand-accent flex-shrink-0"><Video size={20} aria-hidden="true" /></div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5">High-Definition Footage</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Crystal-clear 4K or 1080p video of your entire experience, from the plane exit to the landing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-brand-accent/15 p-2.5 rounded-xl text-brand-accent flex-shrink-0"><ExternalLink size={20} aria-hidden="true" /></div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5">Easy Digital Delivery</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">All raw files delivered via email or a secure download link shortly after your landing.</p>
                </div>
              </div>
              <blockquote className="border-l-2 border-brand-accent pl-4 mt-6">
                <p className="text-slate-300 italic font-mono text-sm leading-relaxed">"The best way to show your friends and family what it's really like to fly."</p>
              </blockquote>
            </div>
            <div className="glass rounded-2xl p-7 flex flex-col items-center text-center">
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-3">Ready to order?</p>
              <p className="text-white text-xl font-bold mb-6">Secure Checkout via Square</p>
              <div className="w-full mb-6 p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-xl text-left">
                <p className="text-brand-accent text-xs font-mono uppercase tracking-wider mb-1.5 font-bold">Important Note:</p>
                <p className="text-slate-300 text-sm leading-relaxed">Please enter the <span className="text-white font-bold underline decoration-brand-accent/50">correct passenger's name and email address</span> so I can match the footage to your jump.</p>
              </div>
              <a href="https://square.link/u/k4qQAZoN" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/20 text-sm">
                Get My Video <ExternalLink size={17} aria-hidden="true" />
              </a>
              <p className="mt-5 text-slate-600 text-xs">Opens a secure Square payment page in a new tab.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: Clock,       title: 'When will I get it?', body: 'Usually the same day but may take up to 24 hours.' },
          { icon: Package,     title: "What's included?",    body: 'You receive all raw files from the jump — no compression, no watermarks.' },
          { icon: HelpCircle,  title: 'Need help?',          body: 'Contact me at zack@nomadiczack.com for any questions.' },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="glass rounded-2xl p-6">
            <Icon size={20} className="text-brand-accent mb-3" aria-hidden="true" />
            <h5 className="text-white font-bold mb-2 font-mono text-sm uppercase">{title}</h5>
            <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
