import React from "react";
import "./Skills.scss"
import PageHeading from "../../Components/PageHeading";


const Skill = (props) => {
const {activeItem}= props;
    const menuItem = ["home", "about"]
    return (
            <section
                id="skill"
                className={`bg-image ${activeItem === "skill" && "active"}`}
                style={activeItem === "skill" ? {} : {transform: `translate3d(0, ${ menuItem.includes(activeItem) ? "100%" : "-100%"}, 0)`}}
            >
                <PageHeading text1="Skills" text2="" subtitle="I am web developer"/>
            </section>

    );
};
export default Skill;