import React from "react";
import "./Icon.scss"

const Icon = (props) => {
    const {icon, className, iconLink} = props
    return (
        <div className={`icon-box ${className}`} onClick={()=>window.open(iconLink,"_blank")}>
            <i className={icon} aria-hidden="true"/>
        </div>
    );
};

export default Icon;