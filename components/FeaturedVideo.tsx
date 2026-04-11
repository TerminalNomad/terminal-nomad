import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface FeaturedVideoProps {
  videoId: string;
}

export const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full mb-8 animate-fade-in-up">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
        Latest Drop
      </h2>
      <div className="flex flex-col gap-3">
        {/* Video Wrapper */}
        <div 
          className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            /* Thumbnail & Play Button Facade */
            <>
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </>
          ) : (
            /* Actual Iframe loads only after click */
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Featured Drop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
        
        {/* External Link Fallback */}
        <div className="flex justify-center">
            <a 
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-brand-accent hover:text-white transition-colors font-mono uppercase tracking-wider"
            >
                <span>Watch on YouTube</span>
                <ExternalLink size={12} />
            </a>
        </div>
      </div>
    </div>
  );
};