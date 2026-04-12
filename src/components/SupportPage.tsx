
import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { SocialButton } from './SocialButton';
import { LinkItem, LinkCategory } from '../types';

interface SupportPageProps {
  onBack: () => void;
  links: LinkItem[];
}

export const SupportPage = ({ onBack, links }: SupportPageProps) => {
  const supportLinks = links.filter(link => link.category === LinkCategory.SUPPORT);

  return React.createElement('div', { className: "w-full max-w-3xl mx-auto px-6 py-8 animate-fade-in-up" },
    /* Navigation */
    React.createElement('button', { 
      onClick: onBack, 
      className: "group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider" 
    },
      React.createElement(ArrowLeft, { size: 16, className: "group-hover:-translate-x-1 transition-transform" }),
      "Back to NomadicZack"
    ),

    /* Header */
    React.createElement('div', { className: "text-center mb-12" },
      React.createElement('div', { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20" },
        React.createElement(Heart, { size: 32 })
      ),
      React.createElement('h1', { className: "text-3xl md:text-5xl font-black text-white font-mono mb-4" },
        "SUPPORT THE ",
        React.createElement('span', { className: "text-brand-accent" }, "JOURNEY")
      ),
      React.createElement('p', { className: "text-slate-400 text-lg max-w-lg mx-auto" },
        "Creating high-quality content and traveling the world isn't cheap. Your support keeps the dream alive and the parachute packed."
      )
    ),

    /* Links Container */
    React.createElement('div', { className: "grid gap-4 max-w-md mx-auto" },
      supportLinks.map(link => (
        React.createElement(SocialButton, { key: link.id, item: link })
      ))
    ),

    React.createElement('div', { className: "mt-12 text-center text-slate-500 text-sm" },
      React.createElement('p', null, "Thank you for being part of the crew. ✈️")
    )
  );
};
