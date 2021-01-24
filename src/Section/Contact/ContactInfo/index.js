import React from "react";
import "./ContactInfo.scss"
import ContactInfoList from "../../../Components/ContactInfoList";

const ContactInfo = () => {

    return (
        <div className="contact-info">
            <div className="title">
                Contact Info
            </div>
            <div className="contact-message">
                Always available for freelance work if the right project comes along, Feel free to contact me!
            </div>
            <div>
                <ContactInfoList
                    fontSize="28px"
                    icon="fa-map-marker"
                    text="At & Po: Kosmadi, Ta: Kamrej, Surat, GJ, India"
                />
                <ContactInfoList
                    fontSize="26px"
                    icon="fa-phone"
                    text="+91 81414 34065"
                />
                <ContactInfoList
                    fontSize="20px"
                    icon="fa-envelope"
                    text="patel.akash@outlook.com"
                />
                <ContactInfoList
                    fontSize="22px"
                    icon="fa-linkedin"
                    text="linkedin.com/in/akash-a-patel"
                />
            </div>
        </div>
    );
};

export default ContactInfo;