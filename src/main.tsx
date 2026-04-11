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
