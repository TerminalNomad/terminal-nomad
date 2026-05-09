import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { SocialButton } from './SocialButton';
import { LinkItem, LinkCategory } from '../types';

interface SupportPageProps {
  onBack: () => void;
  links: LinkItem[];
}

export const SupportPage = ({ onBack, links }: SupportPageProps) => {
  const supportLinks = links.filter((l) => l.category === LinkCategory.SUPPORT);

  return (
    <div className="w-full max-w-2xl mx-auto px-5 py-8 animate-fade-in-up">
      {/* Back */}
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <Heart size={30} aria-hidden="true" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white font-mono mb-4">
          SUPPORT THE <span className="text-brand-accent">JOURNEY</span>
        </h1>
        <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
          Creating high-quality content and traveling the world isn't cheap. Your support keeps the dream alive and the parachute packed.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        {supportLinks.map((link) => (
          <SocialButton key={link.id} item={link} />
        ))}
      </div>

      <p className="mt-12 text-center text-slate-500 text-sm">
        Thank you for being part of the crew. ✈️
      </p>
    </div>
  );
};
