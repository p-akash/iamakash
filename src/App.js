import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/AboutMe";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";


function App() {
    const [activeItem, setActiveItem] = useState("home");
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
    const section = () => {
        switch (activeItem) {
            case "home":
                return <Home setActiveItem={setActiveItem}/>;
            case "about":
                return <About setActiveItem={setActiveItem}/>;
            case "portfolio":
                return <Portfolio setActiveItem={setActiveItem}/>;
            case "contact":
                return <Contact setActiveItem={setActiveItem}/>;
            default:
                return <Home setActiveItem={setActiveItem}/>;
        }
    };
    const closeNav = () => {
        if (isOpenNavBar) {
            setIsOpenNavBar(false);
        }
    };
    return (
        <div onClick={closeNav}>
            <Navbar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                isOpenNavBar={isOpenNavBar}
                setIsOpenNavBar={setIsOpenNavBar}
            />
            {section()}
        </div>

    );
}

export default App;
