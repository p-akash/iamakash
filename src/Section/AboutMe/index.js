import React from "react";
import "./AboutMe.scss"
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import Container from "../../Components/Containter";
import WhoIam from "./Components/WhoIam";

const About = (props) => {
    const {activeItem} = props;
    return (
        <section
            id="about"
            style={activeItem === "about" ? {} :{transform: `translate3d(0, ${activeItem === "home" ? "100%" : "-100%"}, 0)`}}
            className={`about-me-section ${activeItem === "about" && "active"}`} >
                <Logo/>
               <PageHeading text1="About" text2="Me" subtitle="Who Am I ?"/>
               <div className="text-center">
                   <Container>
                       <WhoIam/>
                   </Container>
               </div>
        </section>
    );
};
export default About;