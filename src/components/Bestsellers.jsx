
import { useRef, useState } from "react";
export default function Bestsellers() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
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
  tabIndex={0} onClick={() => setSelectedPlace(item)}>
      <img src={item.img} alt={`${item.name} travel destination`} />
      <div className="b-overlay">{item.name}</div>
    </div>
  ));
  const international = [
    { name: "Singapore",
     price: "₹29,999", rating: 4.5,
    duration: "5 Days • 4 Nights", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd" },
    { name: "Phuket",
     price: "₹19,999", 
      rating: 4.2,
    duration: "5 Days • 4 Nights", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "Bangkok", price: "₹45,999", rating: 4.5,
    duration: "6 Days • 5 Nights", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365" },
    { name: "Pattaya", price: "₹37,999", rating: 4.3,
    duration: "5 Days • 4 Nights", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da" },
    { name: "Hanoi", price: "₹35,999", rating: 4.3,
    duration: "5 Days • 4 Nights", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d" },
    { name: "Dubai", price: "₹40,999", rating: 4.5,
    duration: "10 Days • 9 Nights", img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775133294/Picture_20for_20itinerary_20list-638436641299656143_q7s3wy.jpg" }
  ];

  const indian = [
    { name: "Goa", price: "₹9,999", rating: 4.5,
    duration: "4 Days • 3 Nights", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "Jaipur", price: "₹4,999", rating: 4.5,
    duration: "3 Days • 2 Nights", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41" },
    { name: "Agra", price: "₹3,999", rating: 4.1,
    duration: "1 Days • 1 Night", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523" },
    { name: "Delhi", price: "₹5,999", rating: 4.3,
    duration: "2 Days • 2 Nights", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5" },
    { name: "Mumbai", price: "₹9,999", rating: 4.4,
    duration: "3 Days • 3 Nights", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66" },
    
    { name: "Leh Laddakh", price: "₹8,999", rating: 4.4,
    duration: "3 Days • 2 Nights", img: "https://res.cloudinary.com/ds8enhd9j/image/upload/v1775133444/leh-laddakh-tour-package-nta-holidays-pune_monwic.jpg" },
  ];

  return (
    <section className="bestsellers">
      <div className="container">

        {/* INTERNATIONAL */}
        <div className="slider-header">
          <h2>International Bestsellers – <span>50% Off</span></h2>
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
          <h2>Top Indian Bestsellers – <span>50% Off</span></h2>
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

      {/* CLOSE BUTTON */}
      <button className="close-btn" onClick={() => setSelectedPlace(null)}>
        ✕
      </button>

      {/* IMAGE */}
      <img src={selectedPlace.img} alt={selectedPlace.name} />

      {/* CONTENT */}
      <div className="modal-info">
        <h2>{selectedPlace.name}</h2>
        <p className="price">{selectedPlace.price}</p>
<div className="meta">
  <span>⭐ {selectedPlace.rating}</span>
  <span>•</span>
  <span>{selectedPlace?.duration}</span>
</div>
        <p className="desc">
          Explore top attractions, guided tours and unforgettable experiences in {selectedPlace.name}.
        </p>

        <button className="book-btn">Book Now</button>
      </div>

    </div>
  </div>
)}
    </section>
    
  );
}