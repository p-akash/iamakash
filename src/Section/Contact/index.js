import React from "react";
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import Container from "../../Components/Containter";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = (props) => {
    const {activeItem} = props;

    return (
        <section
            id="contact"
            style={activeItem === "contact" ? {} : {transform: `translate3d(0, 100%, 0)`}}
            className={`contact ${activeItem === "contact" && "active"}`}>
            <Logo/>
            <PageHeading text1="Get" text2="In Touch" subtitle="Fell free to contact me anytime"/>
            <Container>
                <ContactForm/>
                <ContactInfo/>
            </Container>
        </section>
    );
};
export default Contact;