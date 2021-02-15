import React from "react";
import "./PageHeading.scss"

const PageHeading = (props) => {
    const {text1, text2, subtitle} = props;
    return (
        <div className="page-heading">
            <h2 className="page-title">
                {text1}{" "}<span className="colored-text">{text2}</span>
            </h2>
            <div className="page-subtitle">{subtitle}</div>
        </div>

    );
};

export default React.memo(PageHeading);