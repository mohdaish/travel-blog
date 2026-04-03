import { useNavigate } from "react-router-dom";

export default function TripIdeas() {
  const navigate = useNavigate();

  const trips = [
    {
      title: "Romantic Getaway",
      desc: "Perfect destinations for couples",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      title: "Budget Trips",
      desc: "Travel more, spend less",
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    },
    {
      title: "Adventure Trips",
      desc: "Thrill & outdoor experiences",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      title: "Family Holidays",
      desc: "Fun trips for everyone",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    }
  ];

  return (
    <div className="trip-page">
      <h1>✨ Trip Ideas</h1>
      <p>Find the perfect trip based on your mood & style</p>

      <div className="trip-grid">
        {trips.map((item, index) => (
          <div className="trip-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="trip-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}