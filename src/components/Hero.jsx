
export default function Hero({ onSearchClick }){
   
  return (
    <>
    <div className="hero">
      <div className="overlay">

        {/* Top small badge */}
        <div className="hero-badge">
          ✈️ Sight Seeing
        </div>

        {/* Main heading */}
        <h1>
          Sight Seeing, Activities & Attractions <br />
          <span>- 50% Off</span>
        </h1>

        {/* Floating Search Box */}
        <div className="search-container">

          <div className="search-item">
            <label>Where to?</label>
            <input type="text" placeholder="Search by place / attraction" />
          </div>

          <div className="divider"></div>

          <div className="search-item">
            <label>Trip Date</label>
            <input type="date" />
          </div>

          <button className="search-btn" onClick={onSearchClick}>
            🔍
          </button>
        </div>

        {/* Bottom strip */}
        <p className="hero-bottom-text">
          Best Prices | Free Cancellation | Earn rewards
        </p>

      </div>
    </div>
    

    </>
  );
}