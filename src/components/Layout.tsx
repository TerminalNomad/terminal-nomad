import React from 'react';
import { Outlet } from 'react-router-dom';
import { Popup } from './Popup';
import { useNavigate } from 'react-router-dom';

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #06b6d4, transparent 70%)' }}
      />

      {/* Popup — shown after 10s, once per session */}
      <Popup
        onSubscribe={() => navigate('/newsletter')}
        onSupport={() => navigate('/support')}
      />

      {/* Page content rendered by router */}
      <div className="flex-grow w-full relative z-40">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-700 text-xs relative z-40 border-t border-white/5 mt-auto">
        <p className="mb-1 font-mono">© {new Date().getFullYear()} Terminal Nomad, LLC.</p>
        <p className="opacity-50">Designed for the edge.</p>
      </footer>
    </div>
  );
};
