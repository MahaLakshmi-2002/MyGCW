import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Replace with your root component

const root = createRoot(document.getElementById('root')); // Replace 'root' with your target container

root.render(<App />);

