import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MessageSquareQuote, User } from 'lucide-react';
import { TESTIMONIALS } from './TestimonialCarousel';

export const TestimonialsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-5xl mx-auto px-5 py-8 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <MessageSquareQuote size={30} aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-4">FLIGHT <span className="text-brand-accent">LOGS</span></h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Stories from the sky — from those who've taken the leap.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((review) => (
          <div key={review.id} className="card p-7 hover:border-brand-accent/30 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-[0.04] pointer-events-none">
              <MessageSquareQuote size={90} aria-hidden="true" />
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={14} className="text-brand-accent fill-brand-accent" aria-hidden="true" />
              ))}
            </div>
            <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10 italic flex-1">"{review.text}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600 flex-shrink-0">
                <User size={17} aria-hidden="true" />
              </div>
              <div>
                <div className="text-white font-bold font-mono text-sm">{review.name}</div>
                <div className="text-brand-accent/80 text-xs font-mono uppercase tracking-wider">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-3 text-sm">Have we flown together?</p>
        <a href="mailto:zack@terminalnomad.com?subject=Testimonial" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-mono uppercase tracking-wider text-sm border-b border-brand-accent/30 hover:border-brand-accent pb-1">
          Submit your review →
        </a>
      </div>
    </div>
  );
};
