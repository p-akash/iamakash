import React from "react";
import Card from "../../../Components/Card";
import "./PortfolioGallary.scss";
import ImuThumbnail from "../../../assets/images/ImuThumbnail.jpg"
import neoBankThumbnail from "../../../assets/images/neoBankThumbnail.png"
import neoBankAppThumbnail from "../../../assets/images/neobankAppThumbnail.png"
import emailTemplateThumbnail from "../../../assets/images/emailTemplateThumbnail.png"

const portfolioList = [
    {
        img:neoBankThumbnail,
        projectName: "NeoBank",
        projectType: "Website",
        externalLink1text: "neobenk.com",
        externalLink1Link: "https://neobenk.com"
    },
    {
        img:neoBankAppThumbnail,
        projectName: "NeoBank",
        projectType: "Web Application",
        externalLink1text: "secure.neobenk.com",
        externalLink1Link: "https://secure.neobenk.com",
        externalLink2text: "app.neobenk.com",
        externalLink2Link: "https://app.neobenk.com"
    },
    {
        img:emailTemplateThumbnail,
        projectName: "NeoBank",
        projectType: "Email Templates"
    },
    {
        img:ImuThumbnail,
        projectName: "Imu",
        projectType: "Web Application"
    }]
const PortfolioGallery = () => {
    return(
        <div className="portfolio-gallery">
            {portfolioList.map((portfolio,index) =>
                <div className="portfolio-grid" key={index}>
                    <Card portfolio={portfolio}/>
                </div>
            )}

        </div>
    );
};

export default React.memo(PortfolioGallery);
