import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Move App component here temporarily to debug import issues
function App() {
  console.log("App Component Rendering...");
  return (
    <div classname="min-h-screen flex flex-col bg-brand-dark items-center justify-center">
      <h1 classname="text-white text-4xl font-bold">TERMINAL NOMAD</h1>
      <p classname="text-slate-400">If you see this, the app is rendering.</p>
    </div>
  );
}

console.log("Terminal Nomad App Initializing...");
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("CRITICAL: Could not find root element #root");
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
try {
  root.render(<app/>);
  console.log("Root.render called successfully.");
} catch (error) {
  console.error("CRITICAL: React render failed:", error);
}
