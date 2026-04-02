import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Bestsellers from "../components/Bestsellers";
import Highlights from "../components/Highlights";

import Article from "../components/Article";
import Footer from "../components/Footer";
import { useState } from "react";
import UnderDevelopment from "../components/UnderDevelopment";

export default function Home() {
  const [showUD, setShowUD] = useState(false);
  return (
    <>
    <Navbar onRestrictedClick={() => setShowUD(true)} />
      <Hero onSearchClick={() => setShowUD(true)} />
      
      {/* other sections */}
      
      {showUD && <UnderDevelopment onClose={() => setShowUD(false)} />}
      {/* <Navbar />
      <Hero /> */}

      <Trending />
      <Bestsellers />

      <Highlights />
     
      <Article />

      <Footer />
    </>
  );
}