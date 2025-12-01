
import React from 'react';
import { ArrowLeft, Star, MessageSquareQuote, User } from 'lucide-react';

interface TestimonialsPageProps {
  onBack: () => void;
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
    text: "I went skydiving for the first time at Skydive Raleigh, and it was one of the most incredible experiences of my life. From start to finish, the whole team was amazing. The free fall was an unbelievable rush, and once the parachute opened, my instructor Zach even let me take control, guiding it and doing spins in the sky. It felt thrilling yet completely safe at the same time. My instructor Zach Krietens was outstanding—calm, professional, and fun. I 100% recommend Skydive Raleigh—it’s an unforgettable adventure! 💯🪂",
    rating: 5
  },
  {
    id: 4,
    name: "Courtney Dragiff",
    role: "Tandem Student",
    text: "Jumped with some friends to celebrate a birthday and Skydive Raleigh was the perfect experience. From checking in with Jody to a truly thrilling jump with Zach, Kelly and Justin, we had an amazing experience and would highly recommend this spot to anyone. We felt extremely safe, informed, as relaxed as possible and confident in our tandem dives! Will definitely be back.",
    rating: 5
  },
  {
    id: 5,
    name: "Emma",
    role: "Tandem Student",
    text: "HIGHLY RECOMMEND, i went for my 20th & the experience was amazing!!! i jumped with zach & cody was my videographer. zach was incredibly informative & kept me calm the whole time along with keeping the energy up. cody was soooo good at photos & got them back to me immediately. i loved the energy of the people who worked with me & i can tell they love their jobs.",
    rating: 5
  }
];

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Terminal
      </button>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <MessageSquareQuote size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-4">
          FLIGHT <span className="text-brand-accent">LOGS</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Stories from the sky and experiences from around the globe.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((review) => (
          <div key={review.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-accent/30 transition-colors group relative overflow-hidden flex flex-col">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none transform translate-x-4 -translate-y-4">
               <MessageSquareQuote size={100} />
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
              ))}
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 relative z-10 italic flex-grow">
              "{review.text}"
            </p>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 border border-slate-600 flex-shrink-0">
                <User size={20} />
              </div>
              <div>
                <div className="text-white font-bold font-mono text-sm">{review.name}</div>
                <div className="text-brand-accent/80 text-xs font-mono uppercase tracking-wider">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-4">Have we flown together?</p>
        <a 
          href="mailto:contact@terminalnomad.com?subject=Testimonial" 
          className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-mono uppercase tracking-wider border-b border-brand-accent/30 hover:border-brand-accent pb-1"
        >
          Submit your review
        </a>
      </div>
    </div>
  );
};
