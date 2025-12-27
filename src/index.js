import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import ImageProtection from './ImageProtection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImageProtection>
      <App />
    </ImageProtection>
  </React.StrictMode>
);