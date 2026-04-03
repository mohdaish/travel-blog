import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journeys from "./components/Journeys";
import PlaceDetails from "./components/PlaceDetails";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import Bestsellers from "./components/Bestsellers";
import UnderDevelopment from "./components/UnderDevelopment";
import BackButton from "./components/BackButton";
import TripIdeas from "./components/TripIdeas";
import Subscribe from "./components/Subscribe";
import "./App.css";

function App() {
  const [showUD, setShowUD] = useState(false);
  const location = useLocation();
  const hideFooter = location.pathname === "/subscribe";
const showBackButton =
  location.pathname.startsWith("/city") ||
  location.pathname === "/journeys"||
  location.pathname.startsWith("/trip-ideas") ||
  location.pathname === "/subscribe";
  const isHomePage = location.pathname === "/";

  const openPopup = () => {
    setShowUD(true);
  };

  useEffect(() => {
    document.body.style.overflow = showUD ? "hidden" : "auto";
  }, [showUD]);

  return (
    <>
      <Navbar onRestrictedClick={openPopup} />
{isHomePage && <Hero />}

     {showBackButton && (
  <div className="back-wrapper">
    <BackButton />
  </div>
)}
{/* <div className={!isHomePage ? "page-without-hero" : ""}> */}
      <Routes>
        <Route path="/" element={<Bestsellers />} />
        <Route path="/city/:cityName" element={<Trending />} />
        <Route
          path="/city/:cityName/place/:placeName"
          element={<PlaceDetails />}
        />
        <Route path="/trip-ideas" element={<TripIdeas />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
{/* </div> */}
    {!hideFooter && <Footer onRestrictedClick={openPopup} />}

      {showUD && (
        <UnderDevelopment onClose={() => setShowUD(false)} />
      )}
    </>
  );
}

export default App;