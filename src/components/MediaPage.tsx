import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Camera, ExternalLink, Video, Clock,
  Package, HelpCircle, Search, Play, Image as ImageIcon,
  X, ChevronLeft, ChevronRight, ShoppingCart,
  Wind, Loader2, CreditCard,
} from 'lucide-react';

const API_KEY      = import.meta.env.VITE_GOOGLE_API_KEY      ?? '';
const FOLDER_ID    = import.meta.env.VITE_GOOGLE_FOLDER_ID    ?? '';
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

// ── helpers ─────────────────────────────────────────────────────────────────

const FOLDER_MIME = 'application/vnd.google-apps.folder';

const thumbUrl = (f: DriveFile) =>
  f.thumbnailLink?.replace('=s220', '=s400') ??
  `https://drive.google.com/thumbnail?id=${f.id}&sz=w400`;

const fullUrl = (f: DriveFile) =>
  f.mimeType.startsWith('video')
    ? `https://drive.google.com/file/d/${f.id}/preview`
    : `https://drive.google.com/thumbnail?id=${f.id}&sz=w1920`;

// Convert "Zack_Krietenstein" or "ZACK KRIETENSTEIN" → "Zack Krietenstein"
const prettyName = (raw: string) =>
  raw
    .replace(/_/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

const listFolder = async (folderId: string): Promise<DriveFile[]> => {
  let all: DriveFile[] = [];
  let pageToken = '';
  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed=false`,
      key: API_KEY,
      fields: 'nextPageToken,files(id,name,mimeType,thumbnailLink)',
      pageSize: '1000',
      ...(pageToken ? { pageToken } : {}),
    });
    const res  = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    all       = [...all, ...(data.files ?? [])];
    pageToken = data.nextPageToken ?? '';
  } while (pageToken);
  return all;
};

// ── Lightbox ────────────────────────────────────────────────────────────────

const Lightbox = ({
  passenger,
  startIndex,
  onClose,
}: {
  passenger: Passenger;
  startIndex: number;
  onClose: () => void;
}) => {
  const media = [...passenger.videos, ...passenger.photos];
  const [index, setIndex] = useState(startIndex);
  const current = media[index];

  const prev = useCallback(() => setIndex((i) => (i - 1 + media.length) % media.length), [media.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % media.length), [media.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  if (!current) return null;
  const isVideo = current.mimeType.startsWith('video');

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div>
          <h3 className="text-white font-mono font-bold uppercase tracking-wider">{prettyName(passenger.name)}</h3>
          <p className="text-slate-400 text-sm">{index + 1} of {media.length}</p>
        </div>
        <button onClick={onClose} className="text-white hover:text-brand-accent p-2 rounded-full hover:bg-white/10 transition" aria-label="Close">
          <X size={24} />
        </button>
      </div>

      {/* Main viewer */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {media.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-4 z-10 text-white hover:text-brand-accent p-3 rounded-full bg-black/40 hover:bg-black/70 transition" aria-label="Previous">
              <ChevronLeft size={32} />
            </button>
            <button onClick={next} className="absolute right-4 z-10 text-white hover:text-brand-accent p-3 rounded-full bg-black/40 hover:bg-black/70 transition" aria-label="Next">
              <ChevronRight size={32} />
            </button>
          </>
        )}

        {isVideo ? (
          <iframe
            key={current.id}
            src={fullUrl(current)}
            className="w-full h-full max-w-5xl max-h-[80vh]"
            allow="autoplay"
            allowFullScreen
            title={current.name}
          />
        ) : (
          <img src={fullUrl(current)} alt={current.name} className="max-w-full max-h-[80vh] object-contain" />
        )}
      </div>

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div className="border-t border-white/10 p-3 overflow-x-auto">
          <div className="flex gap-2 justify-center">
            {media.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                  i === index ? 'border-brand-accent scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={thumbUrl(m)} alt="" className="w-full h-full object-cover" />
                {m.mimeType.startsWith('video') && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play size={16} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Passenger card ──────────────────────────────────────────────────────────

const PassengerCard = ({ passenger, onOpen }: { passenger: Passenger; onOpen: (startIndex: number) => void }) => {
  const cover = passenger.photos[0] ?? passenger.videos[0];
  if (!cover) return null;
  const display = prettyName(passenger.name);

  return (
    <div className="group relative bg-brand-card border border-white/10 rounded-2xl overflow-hidden hover:border-brand-accent/50 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-accent/10">
      <button onClick={() => onOpen(0)} className="block w-full">
        <div className="relative aspect-video bg-slate-900 overflow-hidden">
          <img src={thumbUrl(cover)} alt={display} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Glowing play indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition">
            <div className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center shadow-2xl shadow-brand-accent/50 group-hover:scale-110 transition">
              <Play size={28} className="text-brand-dark ml-1" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {passenger.videos.length > 0 && (
              <span className="px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-1">
                <Video size={10} /> {passenger.videos.length}
              </span>
            )}
            {passenger.photos.length > 0 && (
              <span className="px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-1">
                <ImageIcon size={10} /> {passenger.photos.length}
              </span>
            )}
          </div>

          {/* Name */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-bold text-lg leading-tight font-mono uppercase tracking-wide drop-shadow-lg">{display}</h3>
          </div>
        </div>
      </button>

      <div className="p-3 flex gap-2">
        <button
          onClick={() => onOpen(0)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider transition"
        >
          <Play size={10} /> Preview
        </button>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-brand-dark border border-brand-accent/30 hover:border-brand-accent font-mono text-xs font-bold uppercase tracking-wider transition-all"
        >
          <ShoppingCart size={10} /> Buy
        </a>
      </div>
    </div>
  );
};

// ── Main page ───────────────────────────────────────────────────────────────

export const MediaPage = () => {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState('');
  const [search, setSearch]         = useState('');
  const [selected, setSelected]     = useState<{ passenger: Passenger; startIndex: number } | null>(null);

  const fetchPassengers = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      // 1. List items at the top-level Previews folder
      const topLevel = await listFolder(FOLDER_ID);

      // 2. Separate subfolders (customer folders) from any loose files (legacy flat structure)
      const customerFolders = topLevel.filter((f) => f.mimeType === FOLDER_MIME);
      const looseFiles      = topLevel.filter((f) => f.mimeType !== FOLDER_MIME);

      const map: Record<string, Passenger> = {};

      // 3. For each customer subfolder, fetch its contents
      // Run in parallel for speed, but cap concurrency to avoid hitting rate limits
      const concurrency = 6;
      let idx = 0;
      const workers = Array.from({ length: concurrency }, async () => {
        while (idx < customerFolders.length) {
          const i = idx++;
          const folder = customerFolders[i];
          try {
            const items = await listFolder(folder.id);
            const photos: DriveFile[] = [];
            const videos: DriveFile[] = [];
            for (const f of items) {
              if (f.mimeType.startsWith('image')) photos.push(f);
              else if (f.mimeType.startsWith('video')) videos.push(f);
              // ignore README.txt and other non-media files
            }
            // Skip empty subfolders
            if (photos.length === 0 && videos.length === 0) continue;
            map[folder.name] = {
              name: folder.name,
              photos: photos.sort((a, b) => a.name.localeCompare(b.name)),
              videos: videos.sort((a, b) => a.name.localeCompare(b.name)),
            };
          } catch (e) {
            console.warn(`Skipping folder ${folder.name}:`, e);
          }
        }
      });
      await Promise.all(workers);

      // 4. Fallback: also handle any loose files at top level (old flat layout)
      for (const f of looseFiles) {
        if (!f.mimeType.startsWith('image') && !f.mimeType.startsWith('video')) continue;
        const key = f.name.split('_')[0];
        if (!map[key]) map[key] = { name: key, photos: [], videos: [] };
        if (f.mimeType.startsWith('video')) map[key].videos.push(f);
        else map[key].photos.push(f);
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
      setError(err.message ?? 'Could not load gallery');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPassengers(); }, [fetchPassengers]);

  const filtered = passengers.filter((p) =>
    prettyName(p.name).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-accent transition mb-6 text-sm font-mono"
        >
          <ArrowLeft size={16} /> Back home
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono uppercase tracking-widest mb-4">
            <Wind size={12} /> Skydive Media
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter font-mono mb-3">
            YOUR <span className="text-brand-accent">JUMP</span>, IMMORTALIZED
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Find your name below to see your preview photos and teaser video. To unlock the full unblurred footage,
            tap the Buy button — clear photos and your edited handcam video will be emailed to you within hours.
          </p>
        </div>

        {/* Top info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-brand-card border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Camera size={18} className="text-brand-accent" />
              <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Jump Gallery</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every jumper gets a folder of blurred preview photos plus a watermarked teaser video.
              Browse below and find yours.
            </p>
          </div>
          <div className="bg-brand-card border border-brand-accent/30 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard size={18} className="text-brand-accent" />
              <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-brand-accent">Get The Full Video</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              Pay through Square and I'll send the clear, watermark-free version directly to your inbox.
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-accent hover:bg-white text-brand-dark font-mono text-xs font-bold uppercase tracking-wider transition"
            >
              <ShoppingCart size={14} /> Buy Now <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-2">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search your first name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-brand-card border border-white/10 focus:border-brand-accent focus:outline-none text-white placeholder-slate-500 font-mono text-sm"
          />
        </div>
        {!loading && !error && (
          <p className="text-center text-slate-500 text-xs font-mono">
            {filtered.length} {filtered.length === 1 ? 'jumper' : 'jumpers'} {search && `matching "${search}"`}
          </p>
        )}
      </div>

      {/* Gallery */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <Loader2 size={32} className="animate-spin mb-3 text-brand-accent" />
            <p className="font-mono text-sm">Loading jumps from the cloud...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
            <p className="text-red-400 font-mono text-sm mb-2">Couldn't load gallery</p>
            <p className="text-slate-400 text-xs">{error}</p>
            <button onClick={fetchPassengers} className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition">
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="font-mono text-sm">
              {search ? `No jumpers found for "${search}"` : 'No jumps in the gallery yet.'}
            </p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <PassengerCard
                key={p.name}
                passenger={p}
                onOpen={(i) => setSelected({ passenger: p, startIndex: i })}
              />
            ))}
          </div>
        )}
      </div>

      {/* Don't see your name */}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-br from-brand-card to-brand-dark border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold font-mono uppercase tracking-wider mb-2">Don't see your name?</h3>
          <p className="text-slate-400 text-sm mb-4 max-w-md mx-auto">
            New jumps usually appear within a few hours. If you jumped recently and don't see your name yet, reach out directly.
          </p>
          <a
            href="mailto:zack@nomadiczack.com?subject=My Jump Media"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-white text-brand-dark font-bold font-mono text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/20"
          >
            Contact Zack
          </a>
        </div>
      </div>

      {/* FAQ row */}
      <div className="max-w-5xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-brand-card border border-white/10 rounded-2xl p-5">
          <Clock size={18} className="text-brand-accent mb-2" />
          <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-1">When will I get it?</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Previews appear within hours of your jump. After purchase, the full clear video is sent within 24 hours.
          </p>
        </div>
        <div className="bg-brand-card border border-white/10 rounded-2xl p-5">
          <Package size={18} className="text-brand-accent mb-2" />
          <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-1">What's included</h4>
          <ul className="text-slate-400 text-sm leading-relaxed space-y-1">
            <li>— Edited video</li>
            <li>— Raw videos</li>
            <li>— Photos</li>
          </ul>
        </div>
        <div className="bg-brand-card border border-white/10 rounded-2xl p-5">
          <HelpCircle size={18} className="text-brand-accent mb-2" />
          <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-1">Need help?</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Email <a href="mailto:zack@nomadiczack.com" className="text-brand-accent hover:underline">zack@nomadiczack.com</a> anytime.
          </p>
        </div>
      </div>

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
