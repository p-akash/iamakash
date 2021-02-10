import React from "react";
import "./Home.scss"
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Icon from "../../Components/Icon";
import Typed from 'react-typed';


const Home = (props) => {
const {setActiveItem, activeItem}= props;
    return (
            <section
                id="home"
                className={`bg-image ${activeItem === "home" && "active"}`}
                style={activeItem === "home" ? {} : {transform: `translate3d(0, -100%, 0)`}}
            >
                <div/>
                <div className="landing-text-container">
                    <div className="title">Hi there !</div>
                    <div className="heading">I'm <span className="name">Akash Patel</span></div>
                    <div className="sub-title">
                        <Typed
                            strings={["Full Stack Developer", "Frontend Developer", "Web Designer", "Web Developer","React Js Developer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    <div className="btn-container">
                        <PrimaryButton
                            text="about me"
                            icon="fa fa-user"
                            className="margin-x-5"
                            onClick={()=>setActiveItem("about")}
                        />
                        <SecondaryButton
                            text="Resume"
                            icon="fa fa-download"
                            className="margin-x-5"
                            onClick={() => window.open("https://drive.google.com/u/0/uc?id=1m40kIpPss6CcB2AG171DM63bwYQKkCiU&export=download", "_blank")}
                        />
                    </div>
                </div>
                <div className="landing-social-container">
                    <Icon icon="fa fa-linkedin" iconLink="https://www.linkedin.com/in/akash-a-patel"/>
                    <Icon icon="fa fa-envelope" iconLink="mailto:patel.akash@outlook.com"/>
                    <Icon icon="fa fa-github" iconLink="https://github.com/p-akash"/>
                    <Icon icon="fa fa-instagram" iconLink="https://www.instagram.com/iamakashpatel"/>
                </div>
            </section>

    );
};
export default React.memo(Home);