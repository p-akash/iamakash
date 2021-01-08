import React from "react";
import "./Home.scss"
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Home = () => {
    return (
        <section id="home" className="bg-image">
            <div className="container">
                <div className="title">Hi there !</div>
                <div className="heading">I'M <span className="name">Akash Patel</span></div>
                <div className="sub-title">Front End Developer</div>
                <div className="btn-container">
                    <PrimaryButton text="about me" icon="fa fa-user"/>
                    <SecondaryButton text="Resume" icon="fa fa-download"/>
                </div>
            </div>
        </section>
    );
};
export default Home;