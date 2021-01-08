import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/AboutMe";
import './App.css';

function App() {
    const [activeItem, setActiveItem] = useState("home");
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
    const section = () => {
        switch (activeItem) {
            case "home":
                return <Home setActiveItem={setActiveItem}/>;
            case "about":
                return <About setActiveItem={setActiveItem}/>
            default:
                return <Home/>;
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
