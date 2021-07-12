import React from "react";
import Navbar from "../navigation/Navbar";
import Gallery from "./Gallery";
import Footer from "../navigation/Footer";
import { BuildingsData } from "./BuildingsData";
import ScrollToTop from "../navigation/ScrollToTop";

const Buildings = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar visibleMenu={false} alwaysSolid={true} />
      <h1 className="portfolio-page-header">Budynki</h1>
      <Gallery photos={BuildingsData} />
      <Footer />
    </div>
  );
};

export default Buildings;
