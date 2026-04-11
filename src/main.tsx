import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR CAUGHT:", event.error);
});

const containerStyle: React.CSSProperties = { 
  minHeight: '100vh', 
  display: 'flex', 
  flexDirection: 'column', 
  backgroundColor: '#064e3b', 
  alignItems: 'center', 
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'sans-serif'
};

const h1Style: React.CSSProperties = { fontSize: '4rem', margin: 0 };
const pStyle: React.CSSProperties = { fontSize: '1.5rem', opacity: 0.8 };

function DebugApp() {
  useEffect(() => {
    console.log("DebugApp MOUNTED to DOM");
  }, []);

  return (
    <div style="{containerStyle}">
      <h1 style="{h1Style}">REACT IS WORKING</h1>
      <p style="{pStyle}">If you see this GREEN screen, React is healthy.</p>
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
