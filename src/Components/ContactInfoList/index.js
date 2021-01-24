import React from "react";
import "./ContactInfoList.scss";

const ContactInfoList = (props) => {
    const {icon, text, fontSize} = props;
    return(
        <div className="contact-info-list">
                <div className="contact-icon-box" style={{fontSize:fontSize}}>
                    <i className={`fa ${icon} contact-icon`} aria-hidden="true"/>
                </div>
                <div className="contact-content-box">
                    {text}
                </div>
        </div>
    );
};

export default ContactInfoList;