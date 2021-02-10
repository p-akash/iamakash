import React from "react";
import "./Navbar.scss";

const Navbar = (props) => {
    const {activeItem, setActiveItem, isOpenNavBar, setIsOpenNavBar} =props;

    return (
        <div className="navbar">
            <div className={`cd-stretchy-nav ${isOpenNavBar && "nav-is-visible"}`}
                 onClick={() => setIsOpenNavBar(!isOpenNavBar)}>
                <p className="cd-nav-trigger">
                    <span aria-hidden="true"/>
                </p>
                <ul className={`stretchy-nav ${activeItem}`}>
                    <li className={`${activeItem === "home" && "active"}`}>
                        <p onClick={() => setActiveItem("home")}>
                            <span>Home</span></p></li>
                    <li className={`${activeItem === "about" && "active"}`}>
                        <p onClick={() => setActiveItem("about")}>
                            <span>About</span></p></li>
                    <li className={`${activeItem === "skill" && "active"}`}>
                        <p onClick={() => setActiveItem("skill")}>
                            <span>Skills</span></p></li>
                    <li className={`${activeItem === "portfolio" && "active"}`}>
                        <p onClick={() => setActiveItem("portfolio")}>
                            <span>Portfolio</span></p></li>
                    <li className={`${activeItem === "contact" && "active"}`}>
                        <p onClick={() => setActiveItem("contact")}>
                            <span>Contact</span></p>
                    </li>
                </ul>
                <span aria-hidden="true" className="stretchy-nav-bg"/>
            </div>
        </div>
    );
};

export default React.memo(Navbar);