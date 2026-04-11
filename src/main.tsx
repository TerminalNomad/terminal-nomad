import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

console.log("Terminal Nomad App Initializing...");

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Root element found. Starting React mount...");
  
  try {
    const root = createRoot(rootElement);
    console.log("React Root created. Calling .render()...");
    
    // Simplest possible render call
    root.render(
      <div classname="min-h-screen flex items-center justify-center bg-blue-600 text-white">
        <h1 classname="text-4xl font-bold">REACT IS ALIVE</h1>
      </div>
    );
    
    console.log("The .render() call has been sent to React.");
  } catch (err) {
    console.error("FAILED TO RENDER:", err);
  }
} else {
  console.error("CRITICAL: #root element not found!");
}
