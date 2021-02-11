import React from "react";
import "./ProcessBar.scss";

const ProcessBar = (props) => {
    const {title, children, subTitle, duration, place, className} = props
    return (
        <div className="process-bar">
            <h2 className="title">{title}</h2>
            <h2 className="sub-title">{subTitle}</h2>
            <div className="duration">
                <div className="mr-25 duration-time"><i className="fa fa-calendar mr-10"/> {duration}</div>{" "}
                <div className="place"> <i className="fa fa-map-marker mr-10"/> {place}</div>
            </div>
            <div className={`content ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default React.memo(ProcessBar);