import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/AboutMe";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";
import "./App.scss"
import Skill from "./Section/Skill";

function App() {
    const [activeItem, setActiveItem] = useState("home");
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
    // const section = () => {
    //     switch (activeItem) {
    //         case "home":
    //             return <Home setActiveItem={setActiveItem}/>;
    //         case "about":
    //             return <About setActiveItem={setActiveItem}/>;
    //         case "portfolio":
    //             return <Portfolio setActiveItem={setActiveItem}/>;
    //         case "contact":
    //             return <Contact setActiveItem={setActiveItem}/>;
    //         default:
    //             return <Home setActiveItem={setActiveItem}/>;
    //     }
    // };
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
            {/*{section()}*/}
            <div className="main">
                <Home
                    setActiveItem={setActiveItem}
                    activeItem={activeItem}
                />
                <About
                    activeItem={activeItem}
                />
                <Skill
                    activeItem={activeItem}
                />
                <Portfolio activeItem={activeItem}/>
                <Contact activeItem={activeItem}/>
            </div>
        </div>

    );
}

export default App;
