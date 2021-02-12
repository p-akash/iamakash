import React from "react";
import Title from "../../../../Components/Title";
import ProcessBar from "../../../../Components/ProcessBar";
import "./Education.scss"
import Skills from "../Skills";

const Education = () => {
    const frontEndSkills = ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "JSON", "React.js", "Redux",
        "Redux-saga", "Next.js", "jQuery",
        "Bootstrap", "Ant Design", "Material UI",
        "Semantic UI"];
    const backEndSkills =["Node.js", "Express.js"];
    const databaseSkills = ["MongoDB", "MySQL", "MSSQL"];
    return (
        <div className="education">
            <Title title="Skills"/>
            <Skills
                skillTitle="Front-End"
                skillList={frontEndSkills}
                className="mb-10"
            />
            <Skills
                skillTitle="Back-End"
                skillList={backEndSkills}
                className="mb-10"
            /><Skills
                skillTitle="Database"
                skillList={databaseSkills}
            />
            <Title title="Education" className="mt-10"/>
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