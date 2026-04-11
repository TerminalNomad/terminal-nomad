import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR CAUGHT:", event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error("UNHANDLED PROMISE REJECTION:", event.reason);
});

// Move App component here temporarily to debug import issues
function App() {
  console.log("App Component Rendering... (Inside App function)");
  return (
    <div style="{{" minheight:="" '100vh',="" display:="" 'flex',="" flexdirection:="" 'column',="" backgroundcolor:="" '#0f172a',="" alignitems:="" 'center',="" justifycontent:="" 'center',="" color:="" 'white',="" zindex:="" 9999,="" position:="" 'relative'="" }}="">
      <h1 style="{{" fontsize:="" '3rem',="" fontweight:="" 'bold',="" margin:="" 0="" }}="">TERMINAL NOMAD</h1>
      <p style="{{" color:="" '#94a3b8'="" }}="">If you see this, the app is rendering.</p>
      <div style="{{" margintop:="" '20px',="" padding:="" '10px',="" border:="" '1px="" solid="" white'="" }}="">
        React Version: {React.version}
      </div>
    </div>
  );
}

console.log("Terminal Nomad App Initializing...");
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("CRITICAL: Could not find root element #root");
  throw new Error("Could not find root element to mount to");
}

console.log("Root element found:", rootElement);
console.log("Root element dimensions:", rootElement.getBoundingClientRect());

const root = ReactDOM.createRoot(rootElement);
try {
  console.log("Attempting root.render(<app/>)...");
  root.render(<app/>);
  console.log("Root.render call completed.");
  
  // Check after a short delay if anything was added to the DOM
  setTimeout(() => {
    console.log("DOM Check - Root children count:", rootElement.children.length);
    console.log("DOM Check - Root innerHTML length:", rootElement.innerHTML.length);
    if (rootElement.children.length === 0) {
      console.warn("WARNING: Root element is still empty after 1 second.");
    }
  }, 1000);
} catch (error) {
  console.error("CRITICAL: React render failed synchronously:", error);
}
