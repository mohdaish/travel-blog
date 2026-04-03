import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // ✅ ADD THIS

import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* ✅ WRAP HERE */}
      <Root />
    </BrowserRouter>
  </StrictMode>,
)