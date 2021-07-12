import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-wrapper">
        <div className="portfolio-card">
          <h2>RZUTY</h2>
          <Link className="portfolio-card-button" to="/rzuty">
            otwórz
          </Link>
        </div>
        <div className="portfolio-card">
          <h2>BUDYNKI</h2>
          <Link className="portfolio-card-button" to="/budynki">
            otwórz
          </Link>
        </div>
        <div className="portfolio-card">
          <h2>WNĘTRZA</h2>
          <Link className="portfolio-card-button" to="/wnetrza">
            otwórz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
