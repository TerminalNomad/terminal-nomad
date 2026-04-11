import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log("Terminal Nomad App Initializing...");

function App() {
  console.log("App Component Rendering...");
  return (
    <div classname="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white p-10 text-center">
      <h1 classname="text-5xl font-bold mb-4">BLUE SCREEN = SUCCESS</h1>
      <p classname="text-xl opacity-70">React rendered using Tailwind classes instead of style props.</p>
      <div classname="mt-8 p-4 border border-white/20 rounded">
        Build Time: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log("Root element found. Rendering...");
  const root = createRoot(rootElement);
  root.render(<app/>);
  console.log("Render call complete.");
} else {
  console.error("Root element not found!");
}
