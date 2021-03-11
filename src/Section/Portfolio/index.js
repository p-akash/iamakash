import React from "react";
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import PortfolioGallery from "./PortfolioGallary";
import Container from "../../Components/Containter";
import "./Portfolio.scss"

const Portfolio = (props) => {
    const {activeItem} = props;
    const menuItem = ["home", "about", "skill"]
    return (
        <section id="portfolio"
           style={activeItem === "portfolio" ? {} : {transform: `translate3d(0, ${menuItem.includes(activeItem) ? "100%" : "-100%"}, 0)`}}
           className={`portfolio-section ${activeItem === "portfolio" && "active"}`}>
            <Logo/>
            <PageHeading text1="My" text2="portfolio" subtitle="Showcasing some of my recent work"/>
            <Container>
                <PortfolioGallery/>
            </Container>
        </section>
    );
};

export default React.memo(Portfolio);