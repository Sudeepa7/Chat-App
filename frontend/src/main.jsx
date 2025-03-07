import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider> {/* Wrap the app with AuthContextProvider */}
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);