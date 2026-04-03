import { useNavigate } from "react-router-dom";
export default function Footer({ onRestrictedClick }) {
  const navigate = useNavigate();
  return (

    <footer className="footer">
      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">TravelBlog</h2>
          <p>
           Inspiring journeys, travel stories, and curated guides to help you
            explore the world in a better way.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li onClick={onRestrictedClick}>Hotels</li>
           <li onClick={() => navigate("/trip-ideas")}>
  Trip Ideas
</li>

           <li onClick={() => navigate("/")}>Destination</li>
           
            <li onClick={onRestrictedClick}>Experiences</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Stories</h4>
          <ul>
            
<li onClick={() => navigate("/journeys")}>
  Journeys
</li>
            <li onClick={onRestrictedClick}>Travel Blog</li>
            <li onClick={onRestrictedClick}>Tips & Hacks</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Stay Connected</h4>

         <p>Get travel inspiration & updates</p>
<li>
  <button 
    className="footer-subscribe-btn"
    onClick={() => navigate("/subscribe")}
  >
    Subscribe ✉️
  </button>
</li>
          {/* SOCIAL */}
          <div className="socials">
            <span title="Website">🌐</span>
            <span title="Instagram">📸</span>
            <span title="Twitter">🐦</span>
            <span title="LinkedIn">💼</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 TravelBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}