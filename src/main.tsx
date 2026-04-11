import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR CAUGHT:", event.error);
});

function DebugApp() {
  useEffect(() => {
    console.log("DebugApp MOUNTED to DOM");
  }, []);

  return (
    <div style="{{" minheight:="" '100vh',="" display:="" 'flex',="" flexdirection:="" 'column',="" backgroundcolor:="" '#064e3b',="" alignitems:="" 'center',="" justifycontent:="" 'center',="" color:="" 'white',="" fontfamily:="" 'sans-serif'="" }}="">
      <h1 style="{{" fontsize:="" '4rem',="" margin:="" 0="" }}="">REACT IS WORKING</h1>
      <p style="{{" fontsize:="" '1.5rem',="" opacity:="" 0.8="" }}="">If you see this GREEN screen, React is healthy.</p>
      <p>Timestamp: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

console.log("Terminal Nomad App Initializing...");
const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Found root element, creating React root...");
  const root = createRoot(rootElement);
  console.log("Calling root.render...");
  root.render(<debugapp/>);
  console.log("root.render call finished.");
} else {
  console.error("Root element NOT FOUND");
}
