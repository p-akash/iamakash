import React from "react";
import "../Button.scss";

const SecondaryButton = (props) => {
    const {text, onClick, icon, className} = props
    return (
        <p onClick={onClick} className={`btn btn-secondary ${className}`}>
            <span>
               {icon && <i className={icon}/>}
                {text}
            </span>
        </p>

    );
};

export default SecondaryButton;