
import React from 'react';
import { LinkItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface SocialButtonProps {
  item: LinkItem;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ item }) => {
  const { title, url, icon: Icon, color } = item;
  
  // Dynamic style for hover border color if provided, else default to accent
  const hoverStyle = color ? { borderColor: color, boxShadow: `0 0 15px -3px ${color}40` } : {};

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Responsive padding: p-5 for easier touch on mobile, md:p-4 for desktop density
      // Responsive text: text-xl for mobile readability, md:text-lg for desktop
      className="group relative flex items-center w-full p-5 md:p-4 mb-3 transition-all duration-300 ease-out border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] hover:border-brand-accent/50 overflow-hidden active:scale-95"
      style={{} /* We use inline styles via onMouseEnter if we wanted complex dynamic colors, but tailwind is safer for now */}
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />

      <div className={`flex items-center justify-center w-12 h-12 md:w-10 md:h-10 rounded-lg bg-black/30 text-white mr-5 md:mr-4 shadow-inner group-hover:text-brand-accent transition-colors`}>
        <Icon size={24} className="md:w-5 md:h-5" />
      </div>

      <span className="flex-1 text-xl md:text-lg font-semibold tracking-wide text-slate-100 group-hover:text-white">
        {title}
      </span>

      <ExternalLink size={20} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 md:w-4 md:h-4" />
    </a>
  );
};
