import React from "react";
import "../Button.scss";

const PrimaryButton = (props) => {
    const {text, onClick, icon, className} = props
    return (
            <p onClick={onClick} className={`btn link-portfolio-one ${className}`}>
            <span>
                 {icon && <i className={icon}/>}
                {text}
            </span>
            </p>
    );
};

export default  React.memo(PrimaryButton);