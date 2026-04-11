import React from 'react';
import ReactDOM from 'react-dom/client';

console.log("Terminal Nomad App Initializing...");

// 1. Force Root Visibility
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.style.display = 'block';
  rootElement.style.visibility = 'visible';
  rootElement.style.opacity = '1';
  rootElement.style.minHeight = '100vh';
  console.log("Root element forced to visible.");
}

// 2. Simple Component with immediate logging
const blueStyle: React.CSSProperties = { 
  padding: '100px', 
  background: 'blue', 
  color: 'white', 
  fontSize: '30px',
  textAlign: 'center'
};

function App() {
  console.log("App function EXECUTING...");
  return (
    <div style="{blueStyle}">
      <h1>BLUE SCREEN = REACT EXECUTED</h1>
      <p>If you see this, React is definitely working.</p>
    </div>
  );
}

// 3. Mount with extra safety
if (rootElement) {
  try {
    console.log("Creating root...");
    const root = ReactDOM.createRoot(rootElement);
    console.log("Root created. Calling render...");
    root.render(React.createElement(App));
    console.log("Render called.");
    
    // Fallback: If nothing happens in 3 seconds, show a message
    setTimeout(() => {
      if (rootElement.innerHTML === "") {
        console.error("FALLBACK TRIGGERED: Root is still empty!");
        rootElement.innerHTML = "<h1>FALLBACK: React failed to render content.</h1>";
      }
    }, 3000);
    
  } catch (err) {
    console.error("MOUNT ERROR:", err);
    if (rootElement) {
      rootElement.innerHTML = "<h1>MOUNT ERROR OCCURRED</h1>";
    }
  }
} else {
  console.error("ROOT NOT FOUND");
}
