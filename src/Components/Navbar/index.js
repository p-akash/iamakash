import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import "./Navbar.scss";

const Navbar = (props) => {
    const {activeItem, setActiveItem} = props;
    return (
        <div className="navbar">
            <DesktopNavbar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
        </div>
    );
};

export default Navbar;