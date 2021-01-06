import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Section/Home";
import About from "./Section/AboutMe";
import './App.css';
import {Sticky, Transition} from "semantic-ui-react";

function App() {
    const [activeItem, setActiveItem] = useState("home");
    const section = () => {
        switch (activeItem) {
            case "home":
                return <Home setActiveItem={setActiveItem} style={{transform: "translate3d(0px, 0px, 0px)"}}/>;
            case "about":
                return <About setActiveItem={setActiveItem}style={{transform: "translate3d(0px, 0px, 0px)"}}/>
            default:
                return <Home/>;
        }
    };
    return (
        <div style={{minHeight:"100vh"}} >
            <Sticky>
                <Navbar
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            </Sticky>
            {section()}

        </div>
    );
}

export default App;
