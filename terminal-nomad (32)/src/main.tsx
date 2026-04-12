import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Global Error Catcher (Visual)
window.onerror = function(msg, url, line) {
  const errDiv = document.createElement('div');
  errDiv.className = "bg-red-600 text-white p-5 fixed top-0 left-0 right-0 z-[99999] font-mono text-sm";
  errDiv.innerHTML = `CRITICAL ERROR: ${msg} <br/> at ${url}:${line}`;
  document.body.appendChild(errDiv);
  return false;
};

console.log("Terminal Nomad App Initializing...");

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Root element found. Starting React mount...");
  
  try {
    const root = createRoot(rootElement);
    console.log("React Root created. Calling .render()...");
    root.render(<app/>);
    console.log("The .render() call has been sent to React.");
    
    // Debug: Check if root has children after a delay
    setTimeout(() => {
      console.log("Post-render check - children count:", rootElement.children.length);
      if (rootElement.children.length === 0) {
        console.warn("WARNING: Root is still empty after 2 seconds.");
        const warning = document.createElement('div');
        warning.className = "p-10 bg-black text-yellow-400 font-bold text-2xl fixed inset-0 flex items-center justify-center z-[99998]";
        warning.innerText = "WARNING: React called render but DOM is empty. Check console for errors.";
        document.body.appendChild(warning);
      }
    }, 2000);
    
  } catch (err) {
    console.error("FAILED TO CREATE ROOT OR RENDER:", err);
    const failDiv = document.createElement('div');
    failDiv.className = "bg-white text-red-600 p-10 text-2xl font-bold fixed inset-0 flex items-center justify-center z-[99999]";
    failDiv.innerText = `MOUNT FAILED: ${err}`;
    document.body.appendChild(failDiv);
  }
} else {
  console.error("CRITICAL: #root element not found in the DOM!");
  document.body.innerHTML = "<h1 class="text-red-600 p-10 text-2xl font-bold">CRITICAL: #root element not found!</h1>";
}
