import React from "react";
import Tag from "../../../../Components/Tag";
import "./Skills.scss";

const Skills = props => {
    const {skillTitle, skillList, className} = props;
    return(
        <div className={`skills ${className}`}>
            <h2 className="skills-title">{skillTitle}</h2>
            <div className="skills-list">
                {skillList.map(skill => <Tag key={skill} tagName={skill}/>)}
            </div>
        </div>
    );
};

export default React.memo(Skills);