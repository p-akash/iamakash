import React from "react";
import PageHeading from "../../Components/PageHeading";

const Contact = (props) => {
    const {activeItem} = props;

    return (
        <section
            id="contact"
            style={activeItem === "contact" ? {} : {transform: `translate3d(0, 100%, 0)`}}
            className={`contact ${activeItem === "contact" && "active"}`}>
            <PageHeading text1="Contact" text2="Me" subtitle="I am web developer"/>
        </section>
    );
};
export default Contact;