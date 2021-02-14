import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/AboutMe";
import Portfolio from "./Section/Portfolio";
import Contact from "./Section/Contact";
import Skill from "./Section/Skill";
import "./App.scss"

function App() {
    const [activeItem, setActiveItem] = useState("home");
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
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
