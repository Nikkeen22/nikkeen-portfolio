// src/main.jsx або src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';    // стилі з Tailwind або власні
import App from './App'; // імпортуємо App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
