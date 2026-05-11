import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, Play, Image, X,
  ChevronLeft, ChevronRight, ShoppingCart, Wind, Loader2
} from 'lucide-react';

const API_KEY     = 'AIzaSyBHNVsAlSSW1q2GZCFMoSUZ2EMz5CCv7gc';
const FOLDER_ID   = '1BdKYl0yiop1UWe7LM15JfrJ07xrpb1nQ';
const CHECKOUT_URL = 'https://square.link/u/k4qQAZoN';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
}

interface Passenger {
  name: string;
  photos: DriveFile[];
  videos: DriveFile[];
}

// ── helpers ──────────────────────────────────────────────────────────────────

const fileUrl = (id: string, mimeType: string) =>
  mimeType.startsWith('video')
    ? `https://drive.google.com/file/d/${id}/preview`
    : `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

const thumbUrl = (f: DriveFile) =>
  f.thumbnailLink?.replace('=s220', '=s400') ??
  `https://drive.google.com/thumbnail?id=${f.id}&sz=w400`;

// ── LightBox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  passenger: Passenger;
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ passenger, startIndex, onClose }: LightboxProps) => {
  const all = [...passenger.videos, ...passenger.photos];
  const [idx, setIdx] = useState(startIndex);
  const current = all[idx];
  const isVideo = current.mimeType.startsWith('video');

  const prev = () => setIdx((i) => (i - 1 + all.length) % all.length);
  const next = () => setIdx((i) => (i + 1) % all.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
        <div>
          <p className="text-white font-bold font-mono text-lg">{passenger.name}</p>
          <p className="text-slate-500 text-xs font-mono">{idx + 1} / {all.length} · {isVideo ? 'Video' : 'Photo'}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-xs uppercase tracking-wider transition-all"
          >
            <ShoppingCart size={13} />
            Get Full Video
          </a>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-slate-400 hover:text-white transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-4">
        {isVideo ? (
          <iframe
            src={fileUrl(current.id, current.mimeType)}
            className="w-full max-w-4xl aspect-video rounded-xl border border-white/10 shadow-2xl"
            allow="autoplay"
            allowFullScreen
            title={current.name}
          />
        ) : (
          <img
            src={fileUrl(current.id, current.mimeType)}
            alt={current.name}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
          />
        )}

        {/* Prev / Next */}
        {all.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 md:left-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition-colors" aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="absolute right-2 md:right-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition-colors" aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex-shrink-0 flex gap-2 overflow-x-auto px-5 py-3 border-t border-white/10">
        {all.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setIdx(i)}
            className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === idx ? 'border-brand-accent' : 'border-transparent opacity-50 hover:opacity-80'}`}
          >
            {f.mimeType.startsWith('video') ? (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <Play size={16} className="text-brand-accent" />
              </div>
            ) : (
              <img src={thumbUrl(f)} alt="" className="w-full h-full object-cover" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// ── PassengerCard ─────────────────────────────────────────────────────────────

const PassengerCard = ({ passenger, onClick }: { passenger: Passenger; onClick: () => void }) => {
  const cover = passenger.videos[0] ?? passenger.photos[0];
  const hasVideo = passenger.videos.length > 0;

  return (
    <div
      onClick={onClick}
      className="group relative card overflow-hidden cursor-pointer hover:border-brand-accent/40 transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Cover image */}
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        {cover ? (
          cover.mimeType.startsWith('video') ? (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <Play size={40} className="text-brand-accent opacity-70" />
            </div>
          ) : (
            <img
              src={thumbUrl(cover)}
              alt={passenger.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Wind size={40} className="text-slate-700" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {hasVideo && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-brand-accent text-brand-dark text-[10px] font-mono font-black uppercase">
              <Play size={9} fill="currentColor" /> Video
            </span>
          )}
          {passenger.photos.length > 0 && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/60 text-white text-[10px] font-mono font-bold uppercase border border-white/20">
              <Image size={9} /> {passenger.photos.length} Photos
            </span>
          )}
        </div>

        {/* Play icon center */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-brand-accent/90 flex items-center justify-center shadow-xl">
            <Play size={24} className="text-brand-dark ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-white font-bold font-mono text-base">{passenger.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">
            {passenger.videos.length + passenger.photos.length} files
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-brand-dark border border-brand-accent/30 hover:border-brand-accent font-mono text-xs font-bold uppercase tracking-wider transition-all"
        >
          <ShoppingCart size={11} />
          Buy
        </a>
      </div>
    </div>
  );
};

// ── Main page ──────────────────────────────────────────────────────────────────

export const VideosPage = () => {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState('');
  const [search, setSearch]         = useState('');
  const [selected, setSelected]     = useState<{ passenger: Passenger; startIndex: number } | null>(null);

  // Fetch all files from Google Drive folder
  const fetchFiles = useCallback(async () => {
    try {
      setLoading(true);
      let allFiles: DriveFile[] = [];
      let pageToken = '';

      do {
        const params = new URLSearchParams({
          q: `'${FOLDER_ID}' in parents and trashed=false`,
          key: API_KEY,
          fields: 'nextPageToken,files(id,name,mimeType,thumbnailLink)',
          pageSize: '1000',
          ...(pageToken ? { pageToken } : {}),
        });

        const res  = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        allFiles = [...allFiles, ...(data.files ?? [])];
        pageToken = data.nextPageToken ?? '';
      } while (pageToken);

      // Group by passenger name (first segment before underscore)
      const map: Record<string, Passenger> = {};
      for (const f of allFiles) {
        // Skip non-media files
        if (!f.mimeType.startsWith('image') && !f.mimeType.startsWith('video')) continue;
        const passengerName = f.name.split('_')[0];
        if (!map[passengerName]) map[passengerName] = { name: passengerName, photos: [], videos: [] };
        if (f.mimeType.startsWith('video')) map[passengerName].videos.push(f);
        else map[passengerName].photos.push(f);
      }

      // Sort files within each passenger by name
      const sorted = Object.values(map)
        .map((p) => ({
          ...p,
          photos: p.photos.sort((a, b) => a.name.localeCompare(b.name)),
          videos: p.videos.sort((a, b) => a.name.localeCompare(b.name)),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setPassengers(sorted);
    } catch (err: any) {
      setError(err.message ?? 'Failed to load media');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchFiles(); }, [fetchFiles]);

  const filtered = passengers.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-5 py-8 animate-fade-in-up">
      {/* Back */}
      <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20">
          <Play size={30} aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-4">
          JUMP <span className="text-brand-accent">GALLERY</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Find your jump, relive the moment, and grab your full video.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your name…"
          className="w-full bg-brand-surface border border-white/10 rounded-full px-5 py-3 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors font-mono text-sm"
          aria-label="Search passengers"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors" aria-label="Clear search">
            <X size={15} />
          </button>
        )}
      </div>

      {/* States */}
      {loading && (
        <div className="flex flex-col items-center gap-4 py-24 text-slate-500">
          <Loader2 size={32} className="animate-spin text-brand-accent" />
          <p className="font-mono text-sm uppercase tracking-widest">Loading jump gallery…</p>
        </div>
      )}

      {error && (
        <div className="text-center py-24">
          <p className="text-red-400 font-mono mb-4">{error}</p>
          <button onClick={fetchFiles} className="px-6 py-2 rounded-full glass hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-colors">Retry</button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-24">
          <Wind size={48} className="text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 font-mono text-sm">
            {search ? `No results for "${search}"` : 'No media uploaded yet.'}
          </p>
        </div>
      )}

      {/* Grid */}
      {!loading && !error && filtered.length > 0 && (
        <>
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest text-center mb-6">
            {filtered.length} {filtered.length === 1 ? 'jumper' : 'jumpers'} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PassengerCard
                key={p.name}
                passenger={p}
                onClick={() => setSelected({ passenger: p, startIndex: 0 })}
              />
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      {!loading && !error && (
        <div className="mt-16 text-center card border-brand-accent/20 p-8" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.05), rgba(59,130,246,0.05))' }}>
          <p className="text-white font-bold font-mono text-lg mb-2">Don't see your name?</p>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Videos are uploaded within 24 hours of your jump. If you jumped recently, check back soon or reach out directly.
          </p>
          <a
            href="mailto:zack@nomadiczack.com?subject=My Jump Video"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            Contact Zack
          </a>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <Lightbox
          passenger={selected.passenger}
          startIndex={selected.startIndex}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};
