import React,{useState} from "react";
import PageHeading from "../../Components/PageHeading";
import Logo from "../../Components/Logo";
import Container from "../../Components/Containter";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "./Contact.scss";

const Contact = (props) => {
    const {activeItem} = props;
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <section
            id="contact"
            style={activeItem === "contact" ? {} : {transform: `translate3d(0, 100%, 0)`}}
            className={`contact ${activeItem === "contact" && "active"} ${isModalOpen && "modal-open"}`}>
            <Logo/>
            <PageHeading text1="Get" text2="In Touch" subtitle="Fell free to contact me anytime"/>
            <Container>
                <ContactForm isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
                <ContactInfo/>
            </Container>
        </section>
    );
};
export default React.memo(Contact);