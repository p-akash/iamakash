import React from "react";
import "./AboutMe.scss"
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import Card from "../../Components/Card";

const About = (props) => {
    const {activeItem} = props;
    return (
        <section
            id="about"
            style={activeItem === "about" ? {} :{transform: `translate3d(0, ${activeItem === "home" ? "100%" : "-100%"}, 0)`}}
            className={`about-me-section ${activeItem === "about" && "active"}`} >
                <Logo/>
               <PageHeading text1="About" text2="Me" subtitle="I am web developer"/>
               <div className="text-center">
                   <Card />
               </div>
        </section>
    );
};
export default About;