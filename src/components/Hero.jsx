import { useNavigate } from "react-router-dom";
export default function Hero() {
   const navigate = useNavigate();

  const handleScroll = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("explore-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // wait for page render
  };
  return (
    <>
      <div className="hero">
        <div className="overlay">

          <div className="hero-badge">
            🌍 Travel Stories & Guides
          </div>

          <h1>
            Explore the World <br />
            <span>Discover Places, Stories & Experiences</span>
          </h1>

          <p className="hero-description">
            From breathtaking international destinations to hidden gems across India, 
            find inspiration for your next unforgettable journey.
          </p>

          <button className="hero-cta" onClick={handleScroll}>
          Start Exploring ↓
        </button>
<div className="hero-extra">
  ✨ 50+ destinations • 🧭 Curated guides • 🎧 Travel stories
</div>
        </div>
      </div>
    </>
  );
}