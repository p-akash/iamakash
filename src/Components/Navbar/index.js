import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import "./Navbar.scss";

const Navbar = (props) => {
    const {activeItem, setActiveItem, isOpenNavBar, setIsOpenNavBar} =props;

    return (
        <div className="navbar">
            <DesktopNavbar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                isOpenNavBar={isOpenNavBar}
                setIsOpenNavBar={setIsOpenNavBar}
            />
        </div>
    );
};

export default Navbar;