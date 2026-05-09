import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface FeaturedVideoProps {
  videoId: string;
}

export const FeaturedVideo = ({ videoId }: FeaturedVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full animate-fade-in-up">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
        Latest Drop
      </h2>

      <div className="flex flex-col gap-3">
        {/* Video wrapper */}
        <div
          className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl group cursor-pointer"
          onClick={() => setIsPlaying(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
          aria-label="Play featured video"
        >
          {!isPlaying ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                  style={{ background: 'rgba(6,182,212,0.9)', boxShadow: '0 0 40px rgba(6,182,212,0.5)' }}
                >
                  <Play fill="white" className="text-white ml-1" size={30} aria-hidden="true" />
                </div>
              </div>

              {/* "LATEST" badge */}
              <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-brand-accent text-brand-dark text-[10px] font-mono font-black uppercase tracking-widest">
                New
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Featured Drop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>

        {/* Watch on YouTube link */}
        <div className="flex justify-center">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-brand-accent hover:text-white transition-colors font-mono uppercase tracking-wider"
          >
            <span>Watch on YouTube</span>
            <ExternalLink size={11} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
