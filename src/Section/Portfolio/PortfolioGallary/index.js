import React, {useState} from "react";
import Card from "../../../Components/Card";
import "./PortfolioGallary.scss";
import ImuThumbnail from "../../../assets/images/ImuThumbnail.jpg"
import neoBankThumbnail from "../../../assets/images/neoBankThumbnail.png"
import neoBankAppThumbnail from "../../../assets/images/neobankAppThumbnail.png"
import emailTemplateThumbnail from "../../../assets/images/emailTemplateThumbnail.png"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const portfolioList = [
    {
        img: neoBankThumbnail,
        projectName: "NeoBank",
        projectType: "Website",
        externalLink1text: "neobenk.com",
        externalLink1Link: "https://neobenk.com"
    },
    {
        img: neoBankAppThumbnail,
        projectName: "NeoBank",
        projectType: "Web Application",
        externalLink1text: "secure.neobenk.com",
        externalLink1Link: "https://secure.neobenk.com",
        externalLink2text: "app.neobenk.com",
        externalLink2Link: "https://app.neobenk.com"
    },
    {
        img: emailTemplateThumbnail,
        projectName: "NeoBank",
        projectType: "Email Templates"
    },
    {
        img: ImuThumbnail,
        projectName: "Imu",
        projectType: "Web Application"
    }]
const images = [
    ['//placekitten.com/1500/500',
        '//placekitten.com/4000/3000'],
    ['//placekitten.com/800/1200',
        '//placekitten.com/1500/1500'],
    ["https://i.ibb.co/qDLtQnY/NBN-User-01.png",
        "https://i.ibb.co/18zbTds/Recipient-got-5-Lead-02.png",
        "https://i.ibb.co/WWgk2JL/Invite-freineds-User-01.png"],
    ["https://i.ibb.co/DkMrzsb/01-Launch-Screen.jpg",
        "https://i.ibb.co/tc4H8py/03-Email-Address.png",
        "https://i.ibb.co/GxNqRV4/04-Confirm-Email-02.jpg",
        "https://i.ibb.co/Y31SvBB/i-MU-Global-Accounts.jpg",
        "https://i.ibb.co/cDQg3gW/01-Add-money-empty-state.jpg"]
];

const PortfolioGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const openLightbox = index => {
        setIsOpen(true);
        setSelectedIndex(index);
    };
    return (
        <div className="portfolio-gallery">
            {isOpen && (
                <Lightbox
                    mainSrc={images[selectedIndex][photoIndex]}
                    nextSrc={images[selectedIndex][(photoIndex + 1) % images[selectedIndex].length]}
                    prevSrc={images[selectedIndex][(photoIndex + images.length - 1) % images[selectedIndex].length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images[selectedIndex].length - 1) % images[selectedIndex].length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images[selectedIndex].length)
                    }
                />
            )}
            {portfolioList.map((portfolio, index) =>
                <div className="portfolio-grid" key={index}>
                    <Card onImageClick={() => openLightbox(index)} portfolio={portfolio}/>
                </div>
            )}

        </div>
    );
};

export default React.memo(PortfolioGallery);
