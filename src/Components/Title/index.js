import React from "react";
import "./Title.scss"
const Title = ({title, className}) => {
    return(
        <div className={`content-title ${className}`}>
           <h2>{title}</h2>
        </div>
    );
};

export default React.memo(Title);