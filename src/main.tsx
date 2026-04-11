import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log("Terminal Nomad App Initializing...");

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log("Root element found. Rendering App...");
  const root = createRoot(rootElement);
  root.render(<app/>);
} else {
  console.error("Root element not found!");
}
