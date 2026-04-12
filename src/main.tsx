import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Global Error Catcher (Visual)
window.onerror = function(msg, url, line) {
  const errDiv = document.createElement('div');
  errDiv.className = "bg-red-600 text-white p-5 fixed top-0 left-0 right-0 z-[99999] font-mono text-xs";
  errDiv.innerHTML = `CRITICAL ERROR: ${msg} <br/> at ${url}:${line}`;
  document.body.appendChild(errDiv);
  return false;
};

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <react.strictmode>
        <app/>
      </React.StrictMode>
    );
  } catch (err) {
    console.error("FAILED TO RENDER:", err);
  }
}
