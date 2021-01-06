import React from "react";
import "./AboutMe.scss"
import {Visibility} from "semantic-ui-react";

const About = ({setActiveItem}) => {
    return (
        <Visibility onTopVisible={() => {
            setActiveItem('home')
        }}>
            <section id="about" className="about-me-section">
                About
            </section>
        </Visibility>
    );
};
export default About;