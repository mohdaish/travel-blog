import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // If user has history → go back
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // If directly opened page → go home
      navigate("/");
    }
  };

  return (
    <div className="back-button">
      <button onClick={handleBack}>
        ← Back
      </button>
    </div>
  );
}