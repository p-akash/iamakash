import React from "react";
import "./Home.scss"
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Icon from "../../Components/Icon";
import Div100vh from 'react-div-100vh';

const Home = () => {

    return (
        <Div100vh>
            <section id="home" className="bg-image">
                <div/>
                <div className="landing-text-container">
                    <div className="title">Hi there !</div>
                    <div className="heading">I'M <span className="name">Akash Patel</span></div>
                    <div className="sub-title">Front End Developer</div>
                    <div className="btn-container">
                        <PrimaryButton text="about me" icon="fa fa-user" className="margin-x-5"/>
                        <SecondaryButton text="Resume" icon="fa fa-download" className="margin-x-5"/>
                    </div>
                </div>
                <div className="landing-social-container">
                    <Icon icon="fa fa-linkedin" iconLink="https://www.linkedin.com/in/akash-a-patel"/>
                    <Icon icon="fa fa-envelope" iconLink="mailto:patel.akash@outlook.com"/>
                    <Icon icon="fa fa-github" iconLink="https://github.com/p-akash"/>
                    <Icon icon="fa fa-instagram" iconLink="https://www.instagram.com/iamakashpatel"/>
                </div>
            </section>
        </Div100vh>
    );
};
export default Home;