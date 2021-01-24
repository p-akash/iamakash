import React from "react";
import "./ContactInfoList.scss";

const ContactInfoList = (props) => {
    const {icon, text, fontSize, url} = props;
    return(
        <div className="contact-info-list" onClick={()=>window.open(url,"_blank")}>
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