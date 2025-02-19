import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"; // Ensure Tailwind is imported
import App from './App';
import AuthProvider from '../context/AuthProvider';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
