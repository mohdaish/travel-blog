import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

import Article from "./components/Article";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import Bestsellers from "./components/Bestsellers";
import UnderDevelopment from "./components/UnderDevelopment";

import "./App.css";

function App() {
  const [showUD, setShowUD] = useState(false);

  const openPopup = () => {
    setShowUD(true);
  };

  useEffect(() => {
    document.body.style.overflow = showUD ? "hidden" : "auto";
  }, [showUD]);

  return (
    <>
      <Navbar onRestrictedClick={openPopup} />
      <Hero onSearchClick={openPopup} />

      <Trending />
      <Bestsellers />
      <Highlights />
      
      <Article />
      <Footer onRestrictedClick={openPopup} />

      {showUD && (
        <UnderDevelopment onClose={() => setShowUD(false)} />
      )}
    </>
  );
}

export default App;