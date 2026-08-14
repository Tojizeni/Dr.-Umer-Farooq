import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Providers
import { ConvexProvider, ConvexReactClient } from "convex/react"; // Yahan se ConvexProvider import hoga
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Convex Backend Client setup
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Convex Provider (Database) */}
    <ConvexProvider client={convex}>

      {/* Helmet Provider (SEO Meta Tags) */}
      <HelmetProvider>

        {/* React Router Provider (Routing) */}
        <BrowserRouter>
          <App />
        </BrowserRouter>

      </HelmetProvider>

    </ConvexProvider>
  </StrictMode>,
)