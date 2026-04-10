
import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { SocialButton } from './SocialButton';
import { LinkItem, LinkCategory } from '../types';

interface SupportPageProps {
  onBack: () => void;
  links: LinkItem[];
}

export const SupportPage: React.FC<supportpageprops> = ({ onBack, links }) => {
  const supportLinks = links.filter(link => link.category === LinkCategory.SUPPORT);

  return (
    <div classname="w-full max-w-3xl mx-auto px-6 py-8 animate-fade-in-up">
      {/* Navigation */}
      <button onclick="{onBack}" classname="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <arrowleft size="{16}" classname="group-hover:-translate-x-1 transition-transform"/>
        Back to Terminal
      </button>

      {/* Header */}
      <div classname="text-center mb-12">
        <div classname="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <heart size="{32}"/>
        </div>
        <h1 classname="text-3xl md:text-5xl font-black text-white font-mono mb-4">
          SUPPORT THE <span classname="text-brand-accent">JOURNEY</span>
        </h1>
        <p classname="text-slate-400 text-lg max-w-lg mx-auto">
          Creating high-quality content and traveling the world isn't cheap. Your support keeps the dream alive and the parachute packed.
        </p>
      </div>

      {/* Links Container */}
      <div classname="grid gap-4 max-w-md mx-auto">
        {supportLinks.map(link => (
          <socialbutton key="{link.id}" item="{link}"/>
        ))}
      </div>

      <div classname="mt-12 text-center text-slate-500 text-sm">
        <p>Thank you for being part of the crew. ✈️</p>
      </div>
    </div>
  );
};
