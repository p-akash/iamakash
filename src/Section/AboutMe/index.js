import React from "react";
import "./AboutMe.scss"
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";

const About = () => {
    return (
        <section id="about" className="about-me-section">
                <Logo/>
               <PageHeading text1="About" text2="Me" subtitle="I am web developer"/>
        </section>
    );
};
export default About;