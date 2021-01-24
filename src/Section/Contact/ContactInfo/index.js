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
                    url="https://www.google.com/maps/place/Akash+Patel/@21.2203114,72.9879409,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x15a6af5121b8a0d3!8m2!3d21.2203064!4d72.9901296"
                />
                <ContactInfoList
                    fontSize="26px"
                    icon="fa-phone"
                    text="+91 81414 34065"
                    url="tel:+918141434065"
                />
                <ContactInfoList
                    fontSize="20px"
                    icon="fa-envelope"
                    text="patel.akash@outlook.com"
                    url="mailto:patel.akash@outlook.com"
                />
                <ContactInfoList
                    fontSize="22px"
                    icon="fa-linkedin"
                    text="linkedin.com/in/akash-a-patel"
                    url="https://www.linkedin.com/in/akash-a-patel"
                />
            </div>
        </div>
    );
};

export default ContactInfo;