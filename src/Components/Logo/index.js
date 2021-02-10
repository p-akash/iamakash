import React from "react";
import "./Logo.scss";

const Logo = () => {
    return (
        <div className="logo">
            <div className="logo-title-before">{" "}</div>
            <div className="logo-title">
                Akash<span className="color-primary">patel</span>
            </div>
            <div className="logo-title-after">{" "}</div>
        </div>
    );

};

export default React.memo(Logo);
