import React from "react";
import "./Home.scss"
import {Visibility} from "semantic-ui-react";

const Home = ({setActiveItem}) => {
    return (
        <div className="light dark-header bgimage">
            <main id="main">
                <section id="home" className="active">
                    <div className="container">
                        <div className="title">Hi there !</div>
                        <div className="heading">I'M <span className="name">Akash Patel</span></div>
                        <div className="sub-title">Front End Developer</div>
                        <div className="about-me">I Front end developer base in surat India</div>
                    </div>
                </section>
            </main>
        </div>

    );
};
export default Home;