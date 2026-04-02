import { useState } from "react";

export default function Navbar({ onRestrictedClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">TravelBlog</div>

       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
         <li onClick={onRestrictedClick}>Hotels</li>
        <li onClick={onRestrictedClick}>Cabs</li>
        <li className="active">Sightseeing</li>
        <li onClick={onRestrictedClick}>Experiences</li>
        <li onClick={onRestrictedClick}>Shop</li>
        
        <li className="mobile-login">
  <button className="login-btn" onClick={onRestrictedClick}>
    Login
  </button>
</li>
      
      </ul>
  {/* DESKTOP LOGIN */}
      <button className="login-btn desktop-login" onClick={onRestrictedClick}>
  Login
</button>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}