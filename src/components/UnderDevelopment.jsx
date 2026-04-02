export default function UnderDevelopment({ onClose }) {
  return (
    <div className="ud-overlay" onClick={onClose}>
      <div className="ud-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="ud-close" onClick={onClose}>✕</button>

        <h2>🚧 Functionality Not Yet Implemented</h2>
        <p>This feature is planned but not completed within the scope of this assignment.</p>

        <button className="ud-btn" onClick={onClose}>
          Explore Available Features
        </button>
      </div>
    </div>
  );
}