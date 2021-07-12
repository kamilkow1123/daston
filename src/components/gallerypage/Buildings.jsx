import React from "react";
import Navbar from "../navigation/Navbar";
import Gallery from "./Gallery";
import Footer from "../navigation/Footer";
import { BuildingsData } from "./BuildingsData";
import ScrollToTop from "../navigation/ScrollToTop";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Buildings = () => {
  const togglePortfolio = () => {
    scroll.scrollTo(
      window.innerHeight - 80,
      {
        //   duration : 0,
        //uncomment for instant scroll
      }
    ); //portfolio is the second section, navbar is 80px
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar visibleMenu={false} alwaysSolid={true} />
      <div className="portfolio-page">
        <Link
          to="/"
          onClick={togglePortfolio}
          className="portfolio-page-button"
        >
          <FaArrowLeft className="portfolio-page-button-icon" /> wróć do
          portfolio
        </Link>
        <h1 className="portfolio-page-header">Budynki</h1>
        <div className="portfolio-page-placeholder" />
      </div>
      <Gallery photos={BuildingsData} />
      <Footer />
    </div>
  );
};

export default Buildings;
