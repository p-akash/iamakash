import React from "react";
import "../Button.scss";

const SecondaryButton = (props) => {
    const {text, onClick, icon} = props
    return (
        <p onClick={onClick} className="btn btn-secondary link-portfolio-two">
            <span>
               {icon && <i className={icon}/>}
                {text}
            </span>
        </p>

    );
};

export default SecondaryButton;