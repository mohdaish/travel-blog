export default function Footer({ onRestrictedClick }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">TravelBlog</h2>
          <p>
            Discover the world with curated travel experiences, best deals,
            and unforgettable adventures.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li onClick={onRestrictedClick}>Hotels</li>
            <li onClick={onRestrictedClick}>Cabs</li>
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Sightseeing
            </li>
            <li onClick={onRestrictedClick}>Experiences</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li onClick={onRestrictedClick}>Help Center</li>
            <li onClick={onRestrictedClick}>Cancellation</li>
            <li onClick={onRestrictedClick}>FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:support@travelblog.com">
              support@travelblog.com
            </a>
          </div>

          <div className="contact-item">
            <span>Phone</span>
            <a href="tel:+919999999999">
              +91 99999 99999
            </a>
          </div>

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