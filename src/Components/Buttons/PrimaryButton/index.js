import React from "react";
import "../Button.scss";

const PrimaryButton = (props) => {
    const {text, onClick, icon} = props
    return (
        <div className="primary-btn">
            <p onClick={onClick} className="btn link-portfolio-one">
            <span>
                 {icon && <i className={icon}/>}
                {text}
            </span>
            </p>
        </div>

    );
};

export default PrimaryButton;