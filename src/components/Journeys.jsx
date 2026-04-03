export default function Journeys() {
  const journeys = [
    {
      title: "3 Days in Goa",
      desc: "Beaches, nightlife & hidden gems",
      img: "https://images.unsplash.com/photo-1587922546307-776227941871"
    },
    {
      title: "Singapore in 48 Hours",
      desc: "City lights, food & attractions",
      img: "https://images.unsplash.com/photo-1508962914676-134849a727f0"
    },
    {
      title: "Bangkok Budget Trip",
      desc: "Temples, street food & shopping",
      img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365"
    }
  ];

  return (
    <section id="journeys-section" className="journeys">
      <h2>✨ Travel Journeys</h2>
      <p>Real itineraries & travel stories to inspire your next trip</p>

      <div className="journey-grid">
        {journeys.map((item, index) => (
          <div className="journey-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="journey-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>Read Story →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}