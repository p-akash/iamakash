import React from "react";
import "./WhoIam.scss";
const WhoIam = () => {
    return (
        <div className="who-iam">
            {/*<div className="title">Who am i ?</div>*/}
            <div className="content">
             Hi There 👋
                <div className="paragraph">
                    My name is Akash Patel. I am a Web Developer based in Surat, Gujarat, India.
                    I have been working as a Web Developer since 2016.
                    I am specialised in React, Express.js, JavaScript and SCSS using those skills
                    I create an awesome responsive web application.
                </div>
                {/*<div className="paragraph">*/}
                {/*    Here is some of my recent work and experience, skills and education described below.*/}
                {/*</div>*/}
                <div className="paragraph">
                    If you are looking for a Web Developer? Feel free to contact me at any time. I would be happier to offer you my services.
                </div>
                <div className="paragraph">
                    Your action items: Hire me, Contact me or Tell me Your Secrets.
                </div>
                <div className="paragraph">
                    Thanks!
                </div>
            </div>
        </div>
    );
};

export default React.memo(WhoIam);