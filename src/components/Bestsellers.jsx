
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Bestsellers() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const navigate = useNavigate();
const [selectedPlace, setSelectedPlace] = useState(null);
  const scroll = (ref, direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      ref.current.scrollLeft -= scrollAmount;
    } else {
      ref.current.scrollLeft += scrollAmount;
    }
  };
const renderCards = (data) =>
  data.map((item) => (
    <div className="b-card" key={item.name} role="button"
  tabIndex={0} onClick={() => navigate(`/city/${item.name}`)}>
      <img src={item.img} alt={`${item.name} travel destination`} />
      <div className="b-overlay">
  <h3>{item.name}</h3>
  <span className="explore-btn">Explore →</span>
</div>
    </div>
  ));
  const international = [
    { name: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd" },
    { name: "Bangkok", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365" },
    { name: "Dubai", img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775133294/Picture_20for_20itinerary_20list-638436641299656143_q7s3wy.jpg" },
    { name: "Phuket", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "Pattaya",  img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da" },
    { name: "Hanoi",  img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d" },
  ];

  const indian = [
    { name: "Goa",  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "Jaipur", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41" },
    { name: "Agra", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523" },
    { name: "Delhi", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5" },
    { name: "Mumbai",  img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66" },
    
    { name: "Leh Laddakh", img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775133444/leh-laddakh-tour-package-nta-holidays-pune_monwic.jpg" },
  ];

  return (
    <section id="explore-section" className="bestsellers">
      <div className="container">

        {/* INTERNATIONAL */}
        <div className="slider-header">
          <h2>Explore International Destinations</h2>
          <div className="arrows">
            <button onClick={() => scroll(scrollRef1, "left")}>‹</button>
            <button onClick={() => scroll(scrollRef1, "right")}>›</button>
          </div>
        </div>

        <div className="bestseller-row" ref={scrollRef1}>
          {renderCards(international)
          }
        </div>

        {/* INDIAN */}
        <div className="slider-header mt">
          <h2>Explore Destinations in India</h2>
          <div className="arrows">
            <button onClick={() => scroll(scrollRef2, "left")}>‹</button>
            <button onClick={() => scroll(scrollRef2, "right")}>›</button>
          </div>
        </div>

        <div className="bestseller-row" ref={scrollRef2}>
          {renderCards(indian)}
        </div>

      </div>
      {selectedPlace && (
  <div className="modal-overlay" onClick={() => setSelectedPlace(null)}>
    
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

      

      {/* IMAGE */}
      <img src={selectedPlace.img} alt={selectedPlace.name} />

      {/* CONTENT */}
      <div className="modal-info">
        <h2>{selectedPlace.name}</h2>
        

        <p className="desc">
          Explore top attractions, guided tours and unforgettable experiences in {selectedPlace.name}.
        </p>
      </div>

    </div>
  </div>
)}
    </section>
    
  );
}