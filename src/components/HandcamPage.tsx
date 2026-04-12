
import React from 'react';
import { ArrowLeft, Camera, ExternalLink, Video } from 'lucide-react';

interface HandcamPageProps {
  onBack: () => void;
}

export const HandcamPage: React.FC<handcampageprops> = ({ onBack }) => {
  return (
    <div classname="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button onclick="{onBack}" classname="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <arrowleft size="{16}" classname="group-hover:-translate-x-1 transition-transform"/>
        Back to Terminal
      </button>

      {/* Header */}
      <div classname="text-center mb-12">
        <div classname="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20 shadow-xl shadow-brand-accent/5">
          <camera size="{40}/">
        </div>
        <h1 classname="text-4xl md:text-5xl font-black text-white font-mono mb-4">
          HANDCAM <span classname="text-brand-accent">VIDEO</span>
        </h1>
        <p classname="text-slate-400 text-lg max-w-2xl mx-auto">
          Relive your jump with high-definition footage captured right from the wrist.
        </p>
      </div>

      {/* Content Section */}
      <div classname="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12">
        <div classname="p-8 md:p-12">
          <div classname="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div classname="space-y-6">
              <div classname="flex items-start gap-4">
                <div classname="mt-1 bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                  <video size="{20}/">
                </div>
                <div>
                  <h3 classname="text-white font-bold text-xl mb-2">High Definition Footage</h3>
                  <p classname="text-slate-400">Crystal clear 4K or 1080p video of your entire experience, from the plane exit to the landing.</p>
                </div>
              </div>
              
              <div classname="flex items-start gap-4">
                <div classname="mt-1 bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                  <externallink size="{20}/">
                </div>
                <div>
                  <h3 classname="text-white font-bold text-xl mb-2">Easy Digital Delivery</h3>
                  <p classname="text-slate-400">Receive all of your raw files from the jump directly via email or a secure download link shortly after your landing.</p>
                </div>
              </div>

              <div classname="pt-4">
                <p classname="text-slate-300 italic font-mono text-sm border-l-2 border-brand-accent pl-4">
                  "The best way to show your friends and family what it's really like to fly."
                </p>
              </div>
            </div>

            <div classname="bg-brand-dark/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
              <h4 classname="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4">Ready to order?</h4>
              <p classname="text-white text-2xl font-bold mb-6">Secure Checkout via Square</p>
              
              <div classname="w-full mb-6 p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-xl text-left">
                <p classname="text-brand-accent text-xs font-mono uppercase tracking-wider mb-2 font-bold">Important Note:</p>
                <p classname="text-slate-300 text-sm leading-relaxed">
                  Please ensure you enter the <span classname="text-white font-bold underline">correct passenger's name and email address</span> when filling out the Square payment form so I can match the footage to your jump.
                </p>
              </div>

              <a href="https://square.link/u/k4qQAZoN" target="_blank" rel="noopener noreferrer" classname="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-accent/20">
                <span>Get My Video</span>
                <externallink size="{18}/">
              </a>
              
              <p classname="mt-6 text-slate-500 text-xs">
                Clicking the button will open a secure Square payment page in a new tab.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ / Info */}
      <div classname="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div classname="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h5 classname="text-white font-bold mb-2 font-mono text-sm uppercase">When will I get it?</h5>
          <p classname="text-slate-400 text-sm">Usually same day but may take up to 24 hours.</p>
        </div>
        <div classname="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h5 classname="text-white font-bold mb-2 font-mono text-sm uppercase">What's included?</h5>
          <p classname="text-slate-400 text-sm">You will receive all of your raw files from the jump.</p>
        </div>
        <div classname="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h5 classname="text-white font-bold mb-2 font-mono text-sm uppercase">Need help?</h5>
          <p classname="text-slate-400 text-sm">Contact me directly at zach@terminalnomad.com for any questions.</p>
        </div>
      </div>
    </div>
  );
};
