import React from "react";
import Card from "../../../Components/Card";
import "./PortfolioGallary.scss";
import neoBankLanding from "../../../assets/images/large-bg.jpg"

const portfolioList = [
    {
        img:neoBankLanding,
        projectName: "NeoBank",
        projectType: "Website",
        externalLink1text: "neobenk.com",
        externalLink1Link: "https://neobenk.com"
    },
    {
        img:neoBankLanding,
        projectName: "NeoBank",
        projectType: "Web Application",
        externalLink1text: "neobenk.com",
        externalLink1Link: "https://neobenk.com",
        externalLink2text: "neobenk.com",
        externalLink2Link: "https://neobenk.com"
    },
    {
        img:neoBankLanding,
        projectName: "NeoBank",
        projectType: "Email Templates"
    },
    {
        img:neoBankLanding,
        projectName: "Imu",
        projectType: "Web Application"
    }]
const PortfolioGallery = () => {
    return(
        <div className="portfolio-gallery">
            {portfolioList.map(portfolio =>
                <div className="portfolio-grid">
                    <Card portfolio={portfolio}/>
                </div>
            )}

        </div>
    );
};

export default PortfolioGallery;
