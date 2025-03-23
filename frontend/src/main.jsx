import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import './index.css'
import { SocketContextProvider } from './context/SocketContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider> {/* Wrap the app with AuthContextProvider */}
      <SocketContextProvider>
      <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);