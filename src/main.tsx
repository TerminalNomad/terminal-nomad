import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// 1. Global Error Catcher (Visual)
window.onerror = function(msg, url, line) {
  const errDiv = document.createElement('div');
  errDiv.style.cssText = "background:red; color:white; padding:20px; position:fixed; top:0; left:0; right:0; z-index:99999; font-family:monospace;";
  errDiv.innerHTML = `CRITICAL ERROR: ${msg} <br/> at ${url}:${line}`;
  document.body.appendChild(errDiv);
  return false;
};

console.log("Terminal Nomad App Initializing...");

// 2. Component with internal logging
function App() {
  console.log("App Component is actually EXECUTING its body now.");
  return (
    <div classname="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-10 text-center">
      <h1 classname="text-6xl font-black mb-6 tracking-tighter">REACT IS ALIVE</h1>
      <p classname="text-2xl opacity-90 max-w-lg mx-auto leading-relaxed">
        If you see this BLUE screen with WHITE text, the rendering engine is finally working.
      </p>
      <div classname="mt-12 px-6 py-3 bg-white/10 rounded-full font-mono text-sm border border-white/20">
        Rendered at: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Root element found. Starting React mount...");
  
  // Force visibility of the root just in case
  rootElement.style.display = 'block';
  rootElement.style.minHeight = '100vh';
  
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
        warning.innerHTML = "<h1 style="color:yellow; background:black; padding:20px;">WARNING: React called render but DOM is empty.</h1>";
        document.body.appendChild(warning);
      }
    }, 2000);
    
  } catch (err) {
    console.error("FAILED TO CREATE ROOT OR RENDER:", err);
    const failDiv = document.createElement('div');
    failDiv.innerHTML = `<h1 style="color:red; background:white; padding:50px;">MOUNT FAILED: ${err}</h1>`;
    document.body.appendChild(failDiv);
  }
} else {
  console.error("CRITICAL: #root element not found in the DOM!");
  document.body.innerHTML = "<h1 style="color:red; padding:50px;">CRITICAL: #root element not found!</h1>";
}
