import React from "react";
import PageHeading from "../../Components/PageHeading";

const Portfolio = (props) => {
    const {activeItem} =props;
    const menuItem = ["home", "about", "skill"]
    return (
        <section id="portfolio"
                 style={activeItem === "portfolio" ? {} :{transform: `translate3d(0, ${ menuItem.includes(activeItem) ? "100%" : "-100%"}, 0)`}}
                 className={`about-me-section ${activeItem === "portfolio" && "active"}`} >
            <PageHeading text1="Portfolio" text2="" subtitle="I am web developer"/>
        </section>
    );
};
export default React.memo(Portfolio);