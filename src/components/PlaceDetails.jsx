import { useParams, useNavigate } from "react-router-dom";
import placesData from "../data/PlacesData";

export default function PlaceDetails() {
  const { cityName, placeName } = useParams();
  const navigate = useNavigate();

  const place = placesData[cityName]?.[placeName];

  if (!place) {
    return <h2 style={{ padding: "100px 20px" }}>Place not found</h2>;
  }

  return (
    <div className="place-page">

      <div className="place-hero">
        <img src={place.hero} alt={place.title} />
        <div className="hero-overlay">
          <h1>{place.title}</h1>
          <p>{place.tagline}</p>
        </div>
      </div>

      <div className="place-container">
        <section className="place-section">
          <h2>About this place</h2>
          <p>{place.content}</p>
        </section>

        <section className="place-section">
          <h2>Top Highlights</h2>
          <ul>
            {place.highlights.map((item, i) => (
              <li key={i}>✨ {item}</li>
            ))}
          </ul>
        </section>

        <section className="place-section">
          <h2>Gallery</h2>
          <div className="gallery">
            {place.gallery.map((img, i) => (
              <img key={i} src={img} alt="gallery" />
            ))}
          </div>
        </section>

        <section className="place-section">
          <h2>Travel Tips</h2>
          <ul>
            {place.tips.map((tip, i) => (
              <li key={i}>👉 {tip}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}