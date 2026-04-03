export default function Subscribe() {
  return (
    <div className="subscribe-page">
      <h5 className="subscribe-tag">SIGN UP FOR TRAVELBLOG NEWSLETTER</h5>

      <h1 className="subscribe-title">
        Join travelers around the world and get inspiring travel stories,
        guides, and tips straight to your inbox.
      </h1>

      <p className="subscribe-desc">
        Enter your email and stay updated with the latest travel content.
      </p>

      <div className="subscribe-form">
        <input type="email" placeholder="Email Address" />
        <button onClick={() => alert("Subscribed Successfully!")}>
  SIGN UP
</button>
      </div>
    </div>
  );
}