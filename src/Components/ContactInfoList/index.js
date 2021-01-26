import React from "react";
import "./ContactInfoList.scss";

const ContactInfoList = (props) => {
    const {icon, text, fontSize, url} = props;
    return(
        <div className="contact-info-list">
                <div className="contact-icon-box" style={{fontSize:fontSize}} onClick={()=>window.open(url,"_blank")}>
                    <i className={`fa ${icon} contact-icon`} aria-hidden="true"/>
                </div>
                <div className="contact-content-box" onClick={()=>window.open(url,"_blank")}>
                    {text}
                </div>
        </div>
    );
};

export default ContactInfoList;