import React from "react";
import Navbar from "../navigation/Navbar";
import Gallery from "./Gallery";
import Footer from "../navigation/Footer";
import { PlansData } from "./PlansData";
import ScrollToTop from "../navigation/ScrollToTop";

const Plans = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar visibleMenu={false} alwaysSolid={true} />
      <h1 className="portfolio-page-header">Rzuty</h1>
      <Gallery photos={PlansData} />
      <Footer />
    </div>
  );
};

export default Plans;
