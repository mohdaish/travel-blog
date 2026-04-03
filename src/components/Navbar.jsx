import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar({ onRestrictedClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">TravelBlog</div>

       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
         <li onClick={onRestrictedClick}>Hotels</li>
        <li
  className={location.pathname === "/trip-ideas" ? "active" : ""}
  onClick={() => navigate("/trip-ideas")}
>
  Trip Ideas
</li>
        <li
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        Destination
      </li>
       <li
        className={location.pathname === "/journeys" ? "active" : ""}
        onClick={() => navigate("/journeys")}
      >
        Journeys
      </li>
        <li onClick={onRestrictedClick}>Podcast</li>
        
        
 <li className="mobile-login">
  <button 
    className="login-btn"
    onClick={() => navigate("/subscribe")}
  >
    Subscribe
  </button>
</li>

      
      </ul>
  {/* DESKTOP LOGIN */}
     <button 
  className="login-btn desktop-login" 
  onClick={() => navigate("/subscribe")}
>
  Subscribe
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