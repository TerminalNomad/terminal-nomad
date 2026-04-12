
import React from 'react';
import { Calendar, MapPin, Plane } from 'lucide-react';

export const ExpeditionsCard = () => {
  const expeditions = [
    {
      location: 'Los Angeles',
      date: '4/13 - 4/17',
      status: 'Current',
      color: 'bg-green-500'
    },
    {
      location: 'Kentucky Derby',
      date: '5/1 - 5/3',
      status: 'Upcoming',
      color: 'bg-brand-accent'
    },
    {
      location: 'Indy500',
      date: '5/21 - 5/25',
      status: 'Upcoming',
      color: 'bg-brand-accent'
    },
    {
      location: 'Portland',
      date: '6/1 - 6/5',
      status: 'Upcoming',
      color: 'bg-brand-accent'
    }
  ];

  return React.createElement('div', { className: "w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up", style: { animationDelay: '0.2s' } },
    /* Header */
    React.createElement('div', { className: "bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between" },
      React.createElement('div', { className: "flex items-center gap-2" },
        React.createElement(Plane, { size: 18, className: "text-brand-accent" }),
        React.createElement('h3', { className: "text-sm font-mono uppercase tracking-widest text-white font-bold" }, "Upcoming Expeditions")
      ),
      React.createElement('div', { className: "flex items-center gap-1.5" },
        React.createElement('div', { className: "w-2 h-2 rounded-full bg-brand-accent animate-pulse" }),
        React.createElement('span', { className: "text-[10px] font-mono uppercase text-slate-500" }, "Live Schedule")
      )
    ),

    /* List */
    React.createElement('div', { className: "p-2" },
      expeditions.map((exp, index) => (
        React.createElement('div', { 
          key: index, 
          className: "flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group" 
        },
          React.createElement('div', { className: "flex items-center gap-4" },
            React.createElement('div', { className: `w-1 h-8 rounded-full ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity` }),
            React.createElement('div', null,
              React.createElement('div', { className: "text-white font-bold font-mono text-sm group-hover:text-brand-accent transition-colors" }, exp.location),
              React.createElement('div', { className: "flex items-center gap-1 text-slate-500 text-xs mt-0.5" },
                React.createElement(Calendar, { size: 12 }),
                React.createElement('span', null, exp.date)
              )
            )
          ),
          React.createElement('div', { className: "flex items-center gap-1 text-slate-600" },
             React.createElement(MapPin, { size: 14, className: "group-hover:text-brand-accent transition-colors" })
          )
        )
      ))
    ),

    /* Footer */
    React.createElement('div', { className: "px-6 py-3 bg-black/20 text-center" },
      React.createElement('p', { className: "text-[10px] text-slate-500 font-mono uppercase tracking-tighter" }, 
        "Dates subject to weather & mission parameters"
      )
    )
  );
};
