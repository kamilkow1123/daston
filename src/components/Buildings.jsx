import React from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import { BuildingsData } from "./BuildingsData";

const Buildings = () => {
  return (
    <div>
      <Navbar visibleMenu={false} alwaysSolid={true} />
      <h1 className="portfolio-page-header">Budynki</h1>
      <Gallery photos={BuildingsData} />
    </div>
  );
};

export default Buildings;
