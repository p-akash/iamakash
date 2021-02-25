import React from "react";
import Card from "../../../Components/Card";
import "./PortfolioGallary.scss";

const PortfolioGallery = () => {
    return(
        <div className="portfolio-gallery">
            <div className="portfolio-grid">
                <Card/>
            </div>
            <div className="portfolio-grid">
                <Card/>
            </div>
        </div>
    );
};

export default PortfolioGallery;
