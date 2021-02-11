import React from "react";
import "./Title.scss"
const Title = ({title}) => {
    return(
        <div className="content-title">
           <h2>{title}</h2>
        </div>
    );
};

export default React.memo(Title);