
import React, { useState, useEffect } from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

interface TestimonialCarouselProps {
  onReadMore: () => void;
}

const TESTIMONIALS = [
  {
    id: 1,
    name: "Haley Manning",
    role: "Tandem Student",
    text: "Zach brought me more pleasure than any man ever could!",
    rating: 5
  },
  {
    id: 2,
    name: "Charlie Jacobs",
    role: "Tandem Student",
    text: "My son and I went skydiving for the first time together for his 18th birthday. I went with Zach and Bren, my son went with Jim and Robin. This was the most amazing experience and I would recommend everyone try skydiving at least once. Everyone at Paraclete was fun and made us feel very comfortable and at ease. Thanks Best Friends!",
    rating: 5
  },
  {
    id: 3,
    name: "Ramesh Swarna",
    role: "Tandem Student",
    text: "I went skydiving for the first time at Skydive Raleigh, and it was one of the most incredible experiences of my life. From start to finish, the whole team was amazing. The free fall was an unbelievable rush, and once the parachute opened, my instructor Zach even let me take control...",
    rating: 5
  },
  {
    id: 4,
    name: "Courtney Dragiff",
    role: "Tandem Student",
    text: "Jumped with some friends to celebrate a birthday and Skydive Raleigh was the perfect experience. From checking in with Jody to a truly thrilling jump with Zach, Kelly and Justin, we had an amazing experience and would highly recommend this spot to anyone.",
    rating: 5
  },
  {
    id: 5,
    name: "Emma",
    role: "Tandem Student",
    text: "HIGHLY RECOMMEND, i went for my 20th & the experience was amazing!!! i jumped with zach & cody was my videographer. zach was incredibly informative & kept me calm the whole time along with keeping the energy up.",
    rating: 5
  }
];

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ onReadMore }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <div className="w-full mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
       <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
        Reviews
      </h2>
      <div 
        onClick={onReadMore}
        className="relative bg-slate-900 border border-white/10 rounded-xl p-8 min-h-[240px] flex flex-col items-center text-center cursor-pointer group hover:border-brand-accent/30 transition-all shadow-xl overflow-hidden"
      >
        {/* Background Icon */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-white pointer-events-none transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
           <MessageSquareQuote size={120} />
        </div>

         {/* Stars */}
         <div className="flex gap-1 mb-6 relative z-10">
            {[...Array(activeTestimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
            ))}
        </div>
        
        {/* Text */}
        <p key={activeIndex} className="text-slate-300 italic mb-6 font-light text-lg leading-relaxed relative z-10 animate-fade-in-up">
            "{activeTestimonial.text}"
        </p>

        {/* Author */}
        <div className="mt-auto relative z-10">
            <div className="text-white font-bold font-mono text-sm">{activeTestimonial.name}</div>
            <div className="text-brand-accent/80 text-xs font-mono uppercase tracking-wider">{activeTestimonial.role}</div>
        </div>

        {/* Indicators */}
         <div className="absolute bottom-4 flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-brand-accent' : 'w-1.5 bg-slate-700'}`}
                />
            ))}
         </div>
      </div>
      
      <div className="text-center mt-2">
         <button onClick={onReadMore} className="text-xs text-slate-500 hover:text-brand-accent transition-colors font-mono uppercase tracking-widest">
            Read all logs
         </button>
      </div>
    </div>
  );
};
