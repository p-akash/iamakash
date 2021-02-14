import React from "react";
import "./AboutMe.scss"
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import Container from "../../Components/Containter";
import WhoIam from "./Components/WhoIam";
import Experience from "./Components/Experience";
import Education from "./Components/Education";


const About = (props) => {
    const {activeItem} = props;
    const onScroll = () => {
        console.log(window.document.getElementById("about").scrollHeight, window.document.getElementById("about").offsetHeight)
    };
    return (
        <section
            id="about"
            style={activeItem === "about" ? {} :{transform: `translate3d(0, ${activeItem === "home" ? "100%" : "-100%"}, 0)`}}
            className={`about-me-section ${activeItem === "about" && "active"}`}
            onScroll={onScroll}
        >
                <Logo/>
               <PageHeading text1="About" text2="Me" subtitle="Who Am I ?"/>
                   <Container>
                       <div className="mb-25">
                           <WhoIam/>
                       </div>
                       <Experience/>
                       <Education/>
                   </Container>
        </section>
    );
};
export default React.memo(About);