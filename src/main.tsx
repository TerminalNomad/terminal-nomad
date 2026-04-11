import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Latest version with fixed casing for Netlify deployment
console.log("Terminal Nomad App Initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <app/>
);
