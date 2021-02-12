import React from "react";
import "./Tag.scss";

const Tag = ({tagName}) => {
    return (
        <div className="custom-tag">
            {tagName}
        </div>
    );
};

export default React.memo(Tag);