import React from "react";
import "./Link.scss"

const Link = ({text, onClick}) => {

    return (
        <div className="link" onClick={onClick}>{text}</div>
    );
};

export default React.memo(Link);