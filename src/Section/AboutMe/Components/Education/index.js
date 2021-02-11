import React from "react";
import Title from "../../../../Components/Title";
import ProcessBar from "../../../../Components/ProcessBar";
import "./Education.scss"
const Education = () => {
    return(
        <div className="education">
            <Title title="Education"/>
            <ProcessBar
                title="Master Of Computer Application"
                subTitle="Uka Tarsadia University"
                duration="2013 - 2015"
                place="Bardoil, Gujarat, India"
            >
               <div className="mt-10">With 6.43 CGPA</div>
            </ProcessBar>
        </div>
    );
}

export default React.memo(Education);