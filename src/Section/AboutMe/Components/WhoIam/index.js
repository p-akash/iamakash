import React from "react";
import "./WhoIam.scss";
const WhoIam = () => {
    return (
        <div className="who-iam">
            {/*<div className="title">Who am i ?</div>*/}
            <div className="content">My name is Akash Patel, I am a front-end web developer based in Surat, India.</div>
        </div>
    );
};

export default React.memo(WhoIam);