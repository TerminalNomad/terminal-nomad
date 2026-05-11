import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Camera, ExternalLink, Video, Clock,
  Package, HelpCircle, Search, Play, Image,
  X, ChevronLeft, ChevronRight, ShoppingCart,
  Wind, Loader2, CreditCard,
} from 'lucide-react';

const API_KEY      = import.meta.env.VITE_GOOGLE_API_KEY as string;
const FOLDER_ID    = import.meta.env.VITE_GOOGLE_FOLDER_ID as string;
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

const thumbUrl = (f: DriveFile) =>
  f.thumbnailLink?.replace('=s220', '=s400') ??
  `https://drive.google.com/thumbnail?id=${f.id}&sz=w400`;

const fullUrl = (f: DriveFile) =>
  f.mimeType.startsWith('video')
    ? `https://drive.google.com/file/d/${f.id}/preview`
    : `https://drive.google.com/thumbnail?id=${f.id}&sz=w1200`;

// ── Lightbox ─────────────────────────────────────────────────────────────────

const Lightbox = ({
  passenger,
  startIndex,
  onClose,
}: {
  passenger: Passenger;
  startIndex: number;
  onClose: () => void;
}) => {
  const all = [...passenger.videos, ...passenger.photos];
  const [idx, setIdx] = useState(startIndex);
  const current = all[idx];
  const isVideo = current.mimeType.startsWith('video');

  const prev = () => setIdx((i) => (i - 1 + all.length) % all.length);
  const next = () => setIdx((i) => (i + 1) % all.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
        <div>
          <p className="text-white font-bold font-mono">{passenger.name}</p>
          <p className="text-slate-500 text-xs font-mono">
            {idx + 1} / {all.length} · {isVideo ? 'Video' : 'Photo'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-xs uppercase tracking-wider transition-all"
          >
            <ShoppingCart size={13} />
            Buy Full Video
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-4">
        {isVideo ? (
          <iframe
            src={fullUrl(current)}
            className="w-full max-w-4xl aspect-video rounded-xl border border-white/10 shadow-2xl"
            allow="autoplay"
            allowFullScreen
            title={current.name}
          />
        ) : (
          <img
            src={fullUrl(current)}
            alt={current.name}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
          />
        )}
        {all.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 md:left-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex-shrink-0 flex gap-2 overflow-x-auto px-4 py-3 border-t border-white/10">
        {all.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setIdx(i)}
            className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === idx ? 'border-brand-accent' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            {f.mimeType.startsWith('video') ? (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <Play size={14} className="text-brand-accent" />
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

const PassengerCard = ({
  passenger,
  onClick,
}: {
  passenger: Passenger;
  onClick: () => void;
}) => {
  const cover = passenger.videos[0] ?? passenger.photos[0];
  const hasVideo = passenger.videos.length > 0;

  return (
    <div
      onClick={onClick}
      className="group relative card overflow-hidden cursor-pointer hover:border-brand-accent/40 transition-all hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        {cover ? (
          cover.mimeType.startsWith('video') ? (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <Play size={36} className="text-brand-accent opacity-70" />
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
            <Wind size={36} className="text-slate-700" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {hasVideo && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-accent text-brand-dark text-[10px] font-mono font-black uppercase">
              <Play size={8} fill="currentColor" /> Video
            </span>
          )}
          {passenger.photos.length > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono font-bold uppercase border border-white/20">
              <Image size={8} /> {passenger.photos.length}
            </span>
          )}
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-brand-accent/90 flex items-center justify-center shadow-xl">
            <Play size={20} className="text-brand-dark ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-white font-bold font-mono">{passenger.name}</p>
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
          <ShoppingCart size={10} />
          Buy
        </a>
      </div>
    </div>
  );
};

// ── Main page ─────────────────────────────────────────────────────────────────

export const MediaPage = () => {
  const navigate = useNavigate();
  const [passengers, setPassengers]   = useState<Passenger[]>([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState('');
  const [search, setSearch]           = useState('');
  const [selected, setSelected]       = useState<{ passenger: Passenger; startIndex: number } | null>(null);

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
        allFiles  = [...allFiles, ...(data.files ?? [])];
        pageToken = data.nextPageToken ?? '';
      } while (pageToken);

      const map: Record<string, Passenger> = {};
      for (const f of allFiles) {
        if (!f.mimeType.startsWith('image') && !f.mimeType.startsWith('video')) continue;
        const name = f.name.split('_')[0];
        if (!map[name]) map[name] = { name, photos: [], videos: [] };
        if (f.mimeType.startsWith('video')) map[name].videos.push(f);
        else map[name].photos.push(f);
      }

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
    <div className="w-full max-w-5xl mx-auto px-5 py-8 animate-fade-in-up">

      {/* Back */}
      <button
        onClick={() => navigate('/')}
        className="group flex items-center gap-2 text-slate-400 hover:text-brand-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to NomadicZack
      </button>

      {/* ── Hero header ───────────────────────────────────────────────────── */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6 border border-brand-accent/20"
          style={{ boxShadow: '0 0 40px rgba(6,182,212,0.1)' }}
        >
          <Camera size={36} aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white font-mono mb-3">
          YOUR <span className="text-brand-accent">SKYDIVE MEDIA</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Preview your jump footage, download your photos, and grab your full handcam video — all in one place.
        </p>
      </div>

      {/* ── Two-column intro ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

        {/* Preview card */}
        <div className="card p-7 border-brand-accent/20 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent/15 rounded-xl flex items-center justify-center text-brand-accent flex-shrink-0">
              <Video size={20} />
            </div>
            <h2 className="text-white font-bold font-mono text-lg">Jump Gallery</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Search your name below to find your blurred preview videos and photos. Click to play, swipe through your shots, and see every moment of your freefall.
          </p>
          <div className="flex items-center gap-2 text-brand-accent/80 text-xs font-mono uppercase tracking-wider">
            <Image size={12} />
            <span>Preview photos &amp; teaser video included</span>
          </div>
        </div>

        {/* Buy card */}
        <div className="card p-7 border-brand-accent/30 flex flex-col gap-4" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.06), rgba(59,130,246,0.06))' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0">
              <CreditCard size={20} />
            </div>
            <h2 className="text-white font-bold font-mono text-lg">Get the Full Video</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Love what you see? Purchase your complete, uncompressed 4K handcam footage through secure Square checkout. Delivered to your inbox within 24 hours.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20 mt-auto"
          >
            <ShoppingCart size={15} />
            Buy via Square
            <ExternalLink size={13} />
          </a>
        </div>

      </div>

      {/* ── FAQ row ───────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {[
          { icon: Clock,      title: 'When will I get it?', body: 'Usually same day, within 24 hours of your jump.' },
          { icon: Package,    title: "What's included?",    body: 'All raw, uncompressed files. No watermarks, no compression.' },
          { icon: HelpCircle, title: 'Need help?',          body: 'Email zack@nomadiczack.com and he\'ll sort you out.' },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="glass rounded-2xl p-5">
            <Icon size={18} className="text-brand-accent mb-3" aria-hidden="true" />
            <h5 className="text-white font-bold mb-1.5 font-mono text-sm uppercase">{title}</h5>
            <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-white/10" />
        <div className="flex items-center gap-2 text-brand-accent font-mono text-xs uppercase tracking-widest">
          <Play size={12} fill="currentColor" />
          <span>Jump Gallery</span>
          <Play size={12} fill="currentColor" className="rotate-180" />
        </div>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* ── Search ────────────────────────────────────────────────────────── */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type your first name to find your jump…"
          className="w-full bg-brand-surface border border-white/10 rounded-full px-5 py-3 pl-11 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors font-mono text-sm"
          aria-label="Search for your jump"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* ── States ────────────────────────────────────────────────────────── */}
      {loading && (
        <div className="flex flex-col items-center gap-4 py-20 text-slate-500">
          <Loader2 size={30} className="animate-spin text-brand-accent" />
          <p className="font-mono text-sm uppercase tracking-widest">Loading your jumps…</p>
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <p className="text-red-400 font-mono mb-4">{error}</p>
          <button
            onClick={fetchFiles}
            className="px-6 py-2 rounded-full glass hover:bg-white/10 text-white font-mono text-sm uppercase tracking-wider transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-center py-20">
          <Wind size={44} className="text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 font-mono text-sm">
            {search ? `No results for "${search}"` : 'No media uploaded yet — check back soon!'}
          </p>
        </div>
      )}

      {/* ── Gallery grid ──────────────────────────────────────────────────── */}
      {!loading && !error && filtered.length > 0 && (
        <>
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest text-center mb-6">
            {filtered.length} {filtered.length === 1 ? 'jumper' : 'jumpers'} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── Not here CTA ──────────────────────────────────────────────────── */}
      {!loading && !error && (
        <div className="mt-14 text-center card border-white/10 p-8">
          <p className="text-white font-bold font-mono mb-2">Don't see your name?</p>
          <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
            Media is uploaded within 24 hours. If you jumped recently, check back soon — or reach out directly.
          </p>
          <a
            href="mailto:zack@nomadiczack.com?subject=My Jump Media"
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
