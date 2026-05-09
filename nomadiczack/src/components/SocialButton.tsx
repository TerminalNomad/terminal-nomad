import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LinkItem } from '../types';

interface SocialButtonProps {
  item: LinkItem;
}

export const SocialButton = ({ item }: SocialButtonProps) => {
  const { title, url, icon: Icon, color } = item;
  const isExternal = url.startsWith('http');

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group relative flex items-center w-full p-3.5 transition-all duration-300 ease-out border rounded-xl overflow-hidden active:scale-95 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      style={color ? { borderColor: `${color}40` } : {}}
      aria-label={`${title} — opens in new tab`}
    >
      {/* Shimmer effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
          animation: 'shimmer 1.5s ease-in-out',
        }}
      />

      {/* Icon container */}
      <div
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-black/30 text-white mr-3 shadow-inner flex-shrink-0 transition-colors duration-300"
        style={color ? { color } : {}}
      >
        <Icon size={18} aria-hidden="true" />
      </div>

      <span className="flex-1 text-base font-semibold tracking-wide text-slate-100 group-hover:text-white transition-colors">
        {title}
      </span>

      <ExternalLink
        size={14}
        className="text-slate-600 opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0 flex-shrink-0"
        aria-hidden="true"
      />
    </a>
  );
};
