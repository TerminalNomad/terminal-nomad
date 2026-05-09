import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TESTIMONIALS = [
  { id: 1, name: 'Haley Manning',    role: 'Tandem Student', rating: 5, text: 'Zack brought me more pleasure than any man ever could!' },
  { id: 2, name: 'Charlie Jacobs',   role: 'Tandem Student', rating: 5, text: "My son and I went skydiving for the first time together for his 18th birthday. This was the most amazing experience and I would recommend everyone try skydiving at least once. Everyone at Paraclete was fun and made us feel very comfortable and at ease." },
  { id: 3, name: 'Ramesh Swarna',    role: 'Tandem Student', rating: 5, text: "I went skydiving for the first time at Skydive Raleigh, and it was one of the most incredible experiences of my life. Once the parachute opened, my instructor Zack even let me take control — guiding it and doing spins in the sky. It felt thrilling yet completely safe." },
  { id: 4, name: 'Courtney Dragiff', role: 'Tandem Student', rating: 5, text: "Jumped with some friends to celebrate a birthday and Skydive Raleigh was the perfect experience. We felt extremely safe, informed, and confident in our tandem dives. Will definitely be back!" },
  { id: 5, name: 'Emma',             role: 'Tandem Student', rating: 5, text: "HIGHLY RECOMMEND! I went for my 20th birthday and the experience was amazing!!! Zack was incredibly informative, kept me calm the whole time, and kept the energy up. I could tell he genuinely loves his job." },
];

export const TestimonialCarousel = ({ onReadMore }: { onReadMore?: () => void }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleReadMore = () => {
    if (onReadMore) onReadMore();
    else navigate('/testimonials');
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => { setPaused(true); setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setPaused(true); setActiveIndex((i) => (i + 1) % TESTIMONIALS.length); };
  const t = TESTIMONIALS[activeIndex];

  return (
    <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">Reviews</h2>
      <div className="relative card p-7 min-h-[220px] flex flex-col cursor-pointer group hover:border-brand-accent/30 transition-all shadow-xl overflow-hidden" onClick={handleReadMore} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleReadMore()} aria-label="Read all testimonials">
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-white pointer-events-none">
          <MessageSquareQuote size={100} aria-hidden="true" />
        </div>
        <div className="flex gap-1 mb-4 relative z-10">
          {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} className="text-brand-accent fill-brand-accent" aria-hidden="true" />)}
        </div>
        <p key={activeIndex} className="text-slate-300 italic mb-5 font-light text-base leading-relaxed relative z-10 animate-fade-in flex-1">"{t.text}"</p>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <div className="text-white font-bold font-mono text-sm">{t.name}</div>
            <div className="text-brand-accent/80 text-xs font-mono uppercase tracking-wider">{t.role}</div>
          </div>
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={prev} className="w-7 h-7 rounded-full glass flex items-center justify-center hover:border-brand-accent/50 transition-colors" aria-label="Previous review"><ChevronLeft size={14} /></button>
            <button onClick={next} className="w-7 h-7 rounded-full glass flex items-center justify-center hover:border-brand-accent/50 transition-colors" aria-label="Next review"><ChevronRight size={14} /></button>
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {TESTIMONIALS.map((_, idx) => <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-5 bg-brand-accent' : 'w-1.5 bg-slate-700'}`} />)}
        </div>
      </div>
      <div className="text-center mt-3">
        <button onClick={handleReadMore} className="text-xs text-slate-500 hover:text-brand-accent transition-colors font-mono uppercase tracking-widest">Read all logs →</button>
      </div>
    </div>
  );
};
