import React, {useState} from "react";
import "./DesktopNavbar.scss";

const DesktopNavbar = () => {
    const [isOpenNavBar, setIsOpenNavBar] = useState();
    return (
            <div className={`cd-stretchy-nav ${isOpenNavBar && "nav-is-visible"}`}
                 onClick={() => setIsOpenNavBar(!isOpenNavBar)}>
                <p className="cd-nav-trigger">
                    <span aria-hidden="true"/>
                </p>
                <ul className="stretchy-nav">
                    <li className="active"><p className="home"><span>Home</span></p></li>
                    <li><p href="#about"><span>About</span></p></li>
                    <li><p href="#works"><span>Portfolio</span></p></li>
                    <li><p href="#contact"><span>Contact</span></p></li>
                    <li><p href="#blog"><span>Blog</span></p></li>
                </ul>
                <span aria-hidden="true" className="stretchy-nav-bg"/>
            </div>
    );
};

export default DesktopNavbar;