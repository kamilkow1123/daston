import React, { useState } from "react";
import Sidebar from "../navigation/Sidebar";
import Navbar from "../navigation/Navbar";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import InfoSection from "./InfoSection";
import ContactSection from "./contact/ContactSection";
import Footer from "../navigation/Footer";
// import ScrollToTop from "../navigation/ScrollToTop";

const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container" id="home-container">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} visibleMenu={true} alwaysSolid={false} />
      <HeroSection />
      <Portfolio />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
