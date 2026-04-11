import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR CAUGHT:", event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error("UNHANDLED PROMISE REJECTION:", event.reason);
});

// Move App component here temporarily to debug import issues
const appStyle: React.CSSProperties = { 
  minHeight: '100vh', 
  display: 'flex', 
  flexDirection: 'column', 
  backgroundColor: '#0f172a', 
  alignItems: 'center', 
  justifyContent: 'center',
  color: 'white',
  zIndex: 9999,
  position: 'relative'
};

const titleStyle: React.CSSProperties = { fontSize: '3rem', fontWeight: 'bold', margin: 0 };
const textStyle: React.CSSProperties = { color: '#94a3b8' };
const debugBoxStyle: React.CSSProperties = { marginTop: '20px', padding: '10px', border: '1px solid white' };

function App() {
  console.log("App Component Rendering... (Inside App function)");
  return (
    <div style="{appStyle}">
      <h1 style="{titleStyle}">TERMINAL NOMAD</h1>
      <p style="{textStyle}">If you see this, the app is rendering.</p>
      <div style="{debugBoxStyle}">
        Build Timestamp: {new Date().toISOString()}
      </div>
    </div>
  );
}

console.log("Terminal Nomad App Initializing...");
const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Manual Injection: Setting innerHTML...");
  rootElement.innerHTML = `
    <div style="background: red; color: white; padding: 50px; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; z-index: 9999; position: relative;">
      <h1 style="font-size: 5rem; margin: 0;">JS IS ALIVE</h1>
      <p style="font-size: 2rem;">If you see this RED screen, the issue is with React.</p>
      <p>Time: ${new Date().toLocaleTimeString()}</p>
    </div>
  `;
  console.log("Manual Injection: Done.");
} else {
  console.error("Manual Injection: Root not found!");
}

// Keep the rest for debugging but don't let it overwrite the manual test yet
/*
const root = ReactDOM.createRoot(rootElement!);
...
*/
