import React from 'react';
import { Calendar, MapPin, Plane } from 'lucide-react';

interface Expedition {
  location: string;
  date: string;
  status: 'Current' | 'Upcoming' | 'Past';
}

const expeditions: Expedition[] = [
  { location: 'Kentucky Derby',              date: 'May 1 – 3',    status: 'Past'     },
  { location: 'Indy 500',                    date: 'May 21 – 25',  status: 'Upcoming' },
  { location: 'Portland',                    date: 'Jun 1 – 5',    status: 'Upcoming' },
  { location: 'Washington, DC',             date: 'Jul 2 – 5',    status: 'Upcoming' },
];

const statusColor: Record<Expedition['status'], string> = {
  Current:  'bg-green-500',
  Upcoming: 'bg-brand-accent',
  Past:     'bg-slate-600',
};

const statusLabel: Record<Expedition['status'], string> = {
  Current:  'Now',
  Upcoming: '',
  Past:     'Done',
};

export const ExpeditionsCard = () => (
  <div
    className="w-full card overflow-hidden shadow-xl animate-fade-in-up"
    style={{ animationDelay: '0.15s' }}
  >
    {/* Header */}
    <div className="bg-white/5 px-5 py-4 border-b border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Plane size={16} className="text-brand-accent" aria-hidden="true" />
        <h3 className="text-sm font-mono uppercase tracking-widest text-white font-bold">
          Upcoming Expeditions
        </h3>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        <span className="text-[10px] font-mono uppercase text-slate-500">Live Schedule</span>
      </div>
    </div>

    {/* List */}
    <div className="p-2">
      {expeditions.map((exp, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-white/5 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-1 h-8 rounded-full ${statusColor[exp.status]} opacity-50 group-hover:opacity-100 transition-opacity`}
            />
            <div>
              <div className="text-white font-bold font-mono text-sm group-hover:text-brand-accent transition-colors">
                {exp.location}
                {exp.location === 'Washington, DC' && (
                  <span className="ml-2 text-[10px] font-mono text-yellow-400/80 normal-case tracking-normal">🎆 US 250th</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                <Calendar size={11} aria-hidden="true" />
                <span>{exp.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {statusLabel[exp.status] && (
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                exp.status === 'Current'
                  ? 'text-green-400 bg-green-500/10'
                  : 'text-slate-500 bg-slate-700/30'
              }`}>
                {statusLabel[exp.status]}
              </span>
            )}
            <MapPin
              size={13}
              className="text-slate-700 group-hover:text-brand-accent transition-colors"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="px-5 py-3 bg-black/20 text-center">
      <p className="text-[10px] text-slate-600 font-mono uppercase tracking-tight">
        Dates subject to weather &amp; mission parameters
      </p>
    </div>
  </div>
);
