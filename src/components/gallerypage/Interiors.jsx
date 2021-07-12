import React from "react";
import Navbar from "../navigation/Navbar";
import Gallery from "./Gallery";
import Footer from "../navigation/Footer";
import { InteriorsData } from "./InteriorsData";
import ScrollToTop from "../navigation/ScrollToTop";

const Interiors = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar visibleMenu={false} alwaysSolid={true} />
      <h1 className="portfolio-page-header">Wnętrza</h1>
      <Gallery photos={InteriorsData} />
      <Footer />
    </div>
  );
};

export default Interiors;
