import React from "react";
import "./Experience.scss";
import ProcessBar from "../../../../Components/ProcessBar";
import Title from "../../../../Components/Title";

const Experience = () => {
    return(
        <div className="experience">
            <Title title="Experience"/>
            <ProcessBar
                title="Senior Frontend Developer"
                subTitle="NeoBank"
                duration="Jul 2020 - Present"
                place="Remote"
                className="mb-25"
            >
                <div className="mb-10 mt-10">NeoBenk, an online-only multinational financial institution offering various products, including interest-bearing personal accounts, business accounts, Line of credit, peer-to-peer payments, crypto trading, and more.</div>
                <ul className="list-item">
                    <li>Designed, developed and API integrated for secure and responsive NeoBenk single page Web app using React.js, Redux-saga, Bootstrap, Material UI, HTML, SCSS, Axios.</li>
                    <li>Identify UI problems and bugs and devise elegant solutions.</li>
                    <li>Designed and developed NeoBenk website and Email templates.</li>
                    <li>neobenk.com, secure.neobenk.com</li>
                </ul>
            </ProcessBar>
            <ProcessBar
                title="Full stack Web Developer"
                subTitle="BVM Infotech"
                duration="Apr 2018 - Jun 2020"
                place="Surat, Gujarat, India"
                className="mb-25"
            >
                <div className="mt-10 mb-10">Software development company and complete IT solution
                    provider.</div>
                <ul className="list-item">
                    <li>Designed, developed 8+ single page React applications.</li>
                </ul>
            </ProcessBar>
            <ProcessBar
                title="Frontend Developer"
                subTitle="DevelopersBuild"
                duration="Jun 2016 - Mar 2018"
                place="Bardoil, Gujarat, India"
            >
                <div className="mt-10 mb-10">
                    Software development company.
                </div>
                <ul className="list-item">
                    <li>Designed, developed 3+ web applications.</li>
                </ul>
            </ProcessBar>
        </div>
    );
};

export default React.memo(Experience);

